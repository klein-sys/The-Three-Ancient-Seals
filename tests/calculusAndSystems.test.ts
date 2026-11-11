import { describe, expect, it } from 'vitest';
import {
  EnergyStabilizerModel,
  HarmonicTrapModel,
  OptimizationChestModel,
  stepSteeringVelocity,
} from '../src/math/calculusModels';
import {
  hasLineOfSight3D,
  resolveCircleXZAgainstBoxes,
  sweptBoxIntersectsCircleXZ,
} from '../src/math/geometry';
import {
  DEFAULT_CONTROL_BINDINGS,
  cloneBindings,
  findBindingConflict,
  getFriendlyBindingLabel,
  validateControlBindings,
} from '../src/input/actions';
import {
  PersistenceManager,
  StorageProvider,
  createDefaultSettings,
  createInitialSaveData,
} from '../src/storage/persistence';
import { CombatController } from '../src/gameplay/combatSystem';
import {
  CHECKPOINTS,
  CHEST_SPECS,
  ENEMY_SPAWNS,
  PYLON_SPECS,
  buildDungeonWallColliders,
} from '../src/world/levelData';
import { PLAYER_CONFIG } from '../src/config/gameConfig';

describe('Differential Calculus Models', () => {
  it('computes 1D E(x), E\'(x), E\'\'(x), requires dwell time, and resets when leaving tolerance', () => {
    const model = new EnergyStabilizerModel({
      id: 'door_test',
      label: 'Test Door',
      k: 20,
      a: 0.6,
      eMin: 10,
      tolerance: 1.5,
      dwellTime: 1.0,
      initialX: 0.1,
    });

    // At x = 0.1: E(0.1) = 20 * 0.25 + 10 = 15, E'(0.1) = -20, E''(0.1) = 40
    let ev = model.step(0.5);
    expect(ev.energy).toBeCloseTo(15, 5);
    expect(ev.firstDerivative).toBeCloseTo(-20, 5);
    expect(ev.secondDerivative).toBeCloseTo(40, 5);
    expect(ev.isMinimumConditionMet).toBe(false);
    expect(ev.dwellProgress).toBe(0);

    // Move within tolerance (x = 0.61 -> E'(0.61) = 0.4 <= 1.5)
    model.setDial(0.61);
    ev = model.step(0.6);
    expect(ev.isMinimumConditionMet).toBe(true);
    expect(ev.dwellElapsed).toBeCloseTo(0.6, 5);
    expect(ev.stabilized).toBe(false);

    // Move outside tolerance before 1.0s dwell finishes -> dwell MUST reset to 0
    model.setDial(0.2);
    ev = model.step(0.1);
    expect(ev.isMinimumConditionMet).toBe(false);
    expect(ev.dwellElapsed).toBe(0);

    // Re-enter tolerance and hold for full dwell time
    model.setDial(0.6);
    model.step(0.5);
    ev = model.step(0.55);
    expect(ev.stabilized).toBe(true);
    expect(ev.dwellProgress).toBe(1);
  });

  it('rejects a stationary point with non-positive curvature (maximum/flat) as not a minimum', () => {
    const inverted = new EnergyStabilizerModel({
      id: 'bad_max',
      label: 'Inverted Curve',
      k: -10,
      a: 0.5,
      eMin: 5,
      tolerance: 1.0,
      dwellTime: 0.5,
      initialX: 0.5,
      allowInvalidForTest: true,
    });

    const ev = inverted.step(1.0);
    expect(ev.isStationary).toBe(true);
    expect(ev.isMinimumCurvature).toBe(false);
    expect(ev.isMinimumConditionMet).toBe(false);
    expect(ev.stabilized).toBe(false);
  });

  it('stabilizes consistently across 30 FPS, 60 FPS, and 120 FPS frame rates', () => {
    const runAtRate = (fps: number) => {
      const m = new EnergyStabilizerModel({
        id: 'fps_test',
        label: 'FPS Door',
        k: 18,
        a: 0.5,
        eMin: 8,
        tolerance: 1.2,
        dwellTime: 1.0,
        initialX: 0.5,
      });
      const dt = 1 / fps;
      let elapsed = 0;
      for (let i = 0; i < fps * 3; i++) {
        elapsed += dt;
        const ev = m.step(dt);
        if (ev.stabilized) return elapsed;
      }
      return Infinity;
    };

    const t30 = runAtRate(30);
    const t60 = runAtRate(60);
    const t120 = runAtRate(120);
    expect(Math.abs(t30 - 1.0)).toBeLessThan(0.05);
    expect(Math.abs(t60 - 1.0)).toBeLessThan(0.05);
    expect(Math.abs(t120 - 1.0)).toBeLessThan(0.05);
  });

  it('evaluates harmonic trap p(t), v(t), a(t) and catches fast swept crossings', () => {
    const trap = new HarmonicTrapModel({
      id: 't1',
      p0: 2,
      amplitude: 4,
      omega: 2,
      phase: 0,
    });
    const atZero = trap.evaluate(0);
    expect(atZero.position).toBeCloseTo(2, 6);
    expect(atZero.velocity).toBeCloseTo(8, 6); // A * omega = 4 * 2
    expect(atZero.acceleration).toBeCloseTo(0, 6);

    const atQuarter = trap.evaluate(Math.PI / 4); // omega * t = pi/2
    expect(atQuarter.position).toBeCloseTo(6, 6);
    expect(atQuarter.velocity).toBeCloseTo(0, 5);
    expect(atQuarter.acceleration).toBeCloseTo(-16, 5); // -A * omega^2

    // Even if trap jumps from x = -4 to x = +4 across a player at x = 0, swept check catches it
    const hit = sweptBoxIntersectsCircleXZ(-4, 0, 4, 0, 0.5, 0.5, 0, 0, 0.45);
    expect(hit).toBe(true);
  });

  it('evaluates 2D optimization chest gradient, per-crystal hints, and dwell reset', () => {
    const chest = new OptimizationChestModel({
      id: 'c2d',
      label: '2D Chest',
      kx: 15,
      ky: 20,
      a: 0.7,
      b: 0.3,
      eMin: 5,
      tolerance: 1.5,
      dwellTime: 0.8,
      initialX: 0.2,
      initialY: 0.8,
    });

    let ev = chest.step(0.2);
    expect(ev.xFeedback.directionHint).toBe(1); // x=0.2 < a=0.7 -> move right
    expect(ev.yFeedback.directionHint).toBe(-1); // y=0.8 > b=0.3 -> move down
    expect(ev.isMinimumConditionMet).toBe(false);

    chest.setCrystals(0.7, 0.3);
    ev = chest.step(0.45);
    expect(ev.isMinimumConditionMet).toBe(true);
    expect(ev.unlocked).toBe(false);

    ev = chest.step(0.4);
    expect(ev.unlocked).toBe(true);
  });

  it('computes enemy acceleration steering a = (v_target - v)/tau with clamping', () => {
    const res = stepSteeringVelocity({ x: 0, z: 0 }, { x: 10, z: 0 }, 0.2, 20, 0.1);
    // Unclamped a = 50, clamped to 20 -> v = 20 * 0.1 = 2
    expect(res.acceleration.x).toBeCloseTo(20, 5);
    expect(res.velocity.x).toBeCloseTo(2, 5);
  });
});

describe('Controls, Conflict Detection, Validation & Persistence', () => {
  it('sets Left Mouse Button as default attack and generates friendly labels', () => {
    expect(DEFAULT_CONTROL_BINDINGS.attack.primary).toBe('Mouse0');
    expect(getFriendlyBindingLabel('Mouse0')).toBe('Left Mouse Button');
    expect(getFriendlyBindingLabel('Mouse2')).toBe('Right Mouse Button');
    expect(getFriendlyBindingLabel('ShiftLeft')).toBe('Left Shift');
    expect(getFriendlyBindingLabel('Space')).toBe('Space');
  });

  it('detects conflicts and rejects applying configurations with unbound required actions', () => {
    const draft = cloneBindings(DEFAULT_CONTROL_BINDINGS);
    const conflict = findBindingConflict(draft, 'KeyE', 'attack', 'primary');
    expect(conflict?.action).toBe('interact');

    // Simulate clearing interact via replace and leaving it unbound
    draft.interact.primary = null;
    draft.interact.secondary = null;
    const validation = validateControlBindings(draft);
    expect(validation.valid).toBe(false);
    expect(validation.missingActions.map((a) => a.action)).toContain('interact');
  });

  it('separates settings and progress saves and recovers cleanly from corrupted or throwing storage', () => {
    const mem = new Map<string, string>();
    const mockStorage: StorageProvider = {
      getItem: (k) => mem.get(k) ?? null,
      setItem: (k, v) => {
        mem.set(k, v);
      },
      removeItem: (k) => {
        mem.delete(k);
      },
    };

    const pm = new PersistenceManager(mockStorage);
    const settings = createDefaultSettings();
    settings.controls.interact.primary = 'KeyF';
    expect(pm.saveSettings(settings)).toBe(true);

    const save = createInitialSaveData();
    save.inventory.seals.push('seal_rates');
    expect(pm.saveGame(save)).toBe(true);

    // Reload independently
    expect(pm.loadSettings().settings.controls.interact.primary).toBe('KeyF');
    expect(pm.loadGameSave().save?.inventory.seals).toEqual(['seal_rates']);

    // Corrupt settings storage
    mem.set('tas_settings_v1', '{broken-json');
    const recovered = pm.loadSettings();
    expect(recovered.recoveredFromError).toBe(true);
    expect(recovered.settings.controls.interact.primary).toBe('KeyE');

    // Throwing storage should not crash
    const throwingStorage: StorageProvider = {
      getItem: () => {
        throw new Error('Blocked');
      },
      setItem: () => {
        throw new Error('QuotaExceeded');
      },
      removeItem: () => { },
    };
    const safePm = new PersistenceManager(throwingStorage);
    expect(safePm.saveSettings(settings)).toBe(false);
    expect(safePm.loadGameSave().save).toBeNull();
  });
});

describe('Combat Hit Windows, Obstructions & Level Geometry', () => {
  it('enforces windup/active frames, single-hit per swing, and wall obstructions', () => {
    const combat = new CombatController();
    const targets = [
      { id: 'skel_1', x: 0, z: -1.5, radius: 0.5, alive: true, shielded: false },
      { id: 'skel_behind_wall', x: 0, z: -2.2, radius: 0.5, alive: true, shielded: false },
    ];
    const walls = [
      { id: 'wall_block', minX: -2, maxX: 2, minY: 0, maxY: 3, minZ: -2.0, maxZ: -1.8, blocksSight: true },
    ];

    expect(combat.tryStartAttack()).toBe(true);
    // During windup (0.10s < 0.14s), NO hits occur
    let hits = combat.step(0.1, { x: 0, z: 0, yaw: 0 }, targets, walls);
    expect(hits.length).toBe(0);

    // Advance into active phase
    hits = combat.step(0.06, { x: 0, z: 0, yaw: 0 }, targets, walls);
    expect(hits.map((h) => h.targetId)).toEqual(['skel_1']); // skel_behind_wall blocked by wall!

    // Subsequent frame in same active phase must NOT hit skel_1 a second time
    const hits2 = combat.step(0.05, { x: 0, z: 0, yaw: 0 }, targets, walls);
    expect(hits2.length).toBe(0);

    expect(hasLineOfSight3D(0, 1, 0, 0, 1, -3, walls)).toBe(false);
  });

  it('places all checkpoints, chests, pylons, and enemy spawns in unobstructed walkable spaces', () => {
    const walls = buildDungeonWallColliders();

    for (const cp of CHECKPOINTS) {
      const res = resolveCircleXZAgainstBoxes(cp.x, cp.z, PLAYER_CONFIG.radius, walls);
      expect(res.collided).toBe(false);
    }
    for (const ch of CHEST_SPECS) {
      const res = resolveCircleXZAgainstBoxes(ch.x, ch.z, 0.4, walls);
      expect(res.collided).toBe(false);
    }
    for (const py of PYLON_SPECS) {
      const res = resolveCircleXZAgainstBoxes(py.x, py.z, 0.4, walls);
      expect(res.collided).toBe(false);
    }
    for (const sp of ENEMY_SPAWNS) {
      const res = resolveCircleXZAgainstBoxes(sp.x, sp.z, 0.5, walls);
      expect(res.collided).toBe(false);
    }
  });
});

