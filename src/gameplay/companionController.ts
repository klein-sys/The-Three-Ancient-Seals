export interface CompanionState {
  axiomX: number;
  axiomY: number;
  axiomZ: number;
  studentX: number;
  studentZ: number;
  studentYaw: number;
  hoverTime: number;
  warnedTrapZones: Set<string>;
}

export function createCompanionState(): CompanionState {
  return {
    axiomX: -18,
    axiomY: 1.5,
    axiomZ: -51,
    studentX: -20,
    studentZ: -150,
    studentYaw: 0,
    hoverTime: 0,
    warnedTrapZones: new Set(),
  };
}

export function stepCompanions(
  state: CompanionState,
  opts: {
    dt: number;
    playerX: number;
    playerZ: number;
    playerYaw: number;
    axiomRescued: boolean;
    axiomSacrificed: boolean;
    studentRescued: boolean;
  }
): { dangerHint: string | null } {
  state.hoverTime += opts.dt;
  let dangerHint: string | null = null;

  if (opts.axiomSacrificed) {
    // Axiom floats above the Exit Lever at (-2, 0, -171) holding it open
    const targetX = -2;
    const targetY = 1.65 + Math.sin(state.hoverTime * 2.5) * 0.1;
    const targetZ = -171;
    state.axiomX += (targetX - state.axiomX) * Math.min(1, opts.dt * 4);
    state.axiomY += (targetY - state.axiomY) * Math.min(1, opts.dt * 4);
    state.axiomZ += (targetZ - state.axiomZ) * Math.min(1, opts.dt * 4);
  } else if (opts.axiomRescued) {
    // Follow gracefully above the player's left shoulder
    const leftX = -Math.cos(opts.playerYaw);
    const leftZ = Math.sin(opts.playerYaw);
    const backX = Math.sin(opts.playerYaw);
    const backZ = Math.cos(opts.playerYaw);

    const targetX = opts.playerX + leftX * 1.1 + backX * 0.65;
    const targetZ = opts.playerZ + leftZ * 1.1 + backZ * 0.65;
    const targetY = 1.85 + Math.sin(state.hoverTime * 2.8) * 0.16;

    const lerp = Math.min(1, opts.dt * 5.2);
    state.axiomX += (targetX - state.axiomX) * lerp;
    state.axiomY += (targetY - state.axiomY) * lerp;
    state.axiomZ += (targetZ - state.axiomZ) * lerp;

    // Contextual danger & environmental hints
    if (opts.playerZ < -42 && opts.playerZ > -58 && !state.warnedTrapZones.has('whispers_traps')) {
      state.warnedTrapZones.add('whispers_traps');
      dangerHint =
        'Axiom: "The blades race through the center and slow at the walls. Watch a full sweep, then choose your moment!"';
    } else if (opts.playerZ < -94 && opts.playerZ > -106 && !state.warnedTrapZones.has('abyss_bridge')) {
      state.warnedTrapZones.add('abyss_bridge');
      dangerHint =
        'Axiom: "That blue barrier surges until its current settles. Stabilize the pylon beside it!"';
    } else if (opts.playerZ < -112 && opts.playerZ > -126 && !state.warnedTrapZones.has('keeper_shield')) {
      state.warnedTrapZones.add('keeper_shield');
      dangerHint =
        'Axiom: "The Warden\'s shield runs on two crystals. Align both until their light is steady so we can break its guard!"';
    }
  } else {
    // Waiting inside containment device
    state.axiomX = -18;
    state.axiomZ = -51;
    state.axiomY = 1.65 + Math.sin(state.hoverTime * 2.2) * 0.14;
  }

  // Rescued student follows slightly behind player
  if (opts.studentRescued) {
    const rightX = Math.cos(opts.playerYaw);
    const rightZ = -Math.sin(opts.playerYaw);
    const backX = Math.sin(opts.playerYaw);
    const backZ = Math.cos(opts.playerYaw);

    const targetX = opts.playerX + rightX * 1.1 + backX * 1.5;
    const targetZ = opts.playerZ + rightZ * 1.1 + backZ * 1.5;
    const dx = targetX - state.studentX;
    const dz = targetZ - state.studentZ;
    const dist = Math.hypot(dx, dz);
    if (dist > 0.25) {
      const move = Math.min(dist, opts.dt * 4.8);
      state.studentX += (dx / dist) * move;
      state.studentZ += (dz / dist) * move;
      state.studentYaw = Math.atan2(-dx, -dz);
    }
  }

  return { dangerHint };
}

