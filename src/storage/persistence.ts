import {
  GRAPHICS_PRESETS,
  GraphicsSettings,
  InterfaceMode,
  PLAYER_CONFIG,
  SprintMode,
} from '../config/gameConfig';
import {
  ACTION_METADATA,
  ControlBindings,
  DEFAULT_CONTROL_BINDINGS,
  cloneBindings,
  isSupportedBindingCode,
  validateControlBindings,
} from '../input/actions';
import { CHECKPOINTS, DUNGEON_ROOMS, DOOR_SPECS, CHEST_SPECS, ENEMY_SPAWNS } from '../world/levelData';

export const SETTINGS_STORAGE_KEY = 'tas_settings_v1';
export const SAVE_STORAGE_KEY = 'tas_save_v1';

export interface DesktopSettings {
  horizontalSensitivity: number; // 0.1 - 3.0
  verticalSensitivity: number;   // 0.1 - 3.0
  invertY: boolean;
  fov: number;                   // 60 - 90
  sprintMode: SprintMode;
  holdToRepeatAttack: boolean;
}

export interface MobileSettings {
  cameraSensitivity: number;     // 0.1 - 3.0
  invertY: boolean;
  joystickSensitivity: number;   // 0.5 - 2.0
  joystickSize: number;          // 80 - 160 px
  hudScale: number;              // 0.75 - 1.35
  buttonOpacity: number;         // 0.4 - 1.0
  attackButtonSize: number;      // 56 - 100 px
}

export interface SettingsDataV1 {
  version: 1;
  controls: ControlBindings;
  desktop: DesktopSettings;
  mobile: MobileSettings;
  graphics: GraphicsSettings;
  interfaceMode: InterfaceMode;
  soundMuted: boolean;
  showFpsCounter: boolean;
  reducedMotion: boolean;
  companionHints:boolean;
}

export type RegionId = 'ruins' | 'whispers' | 'abyss' | 'sanctum';

export interface SaveDataV1 {
  version: 1;
  savedAt: string;
  checkpointId: string;
  currentRegionId: RegionId;
  player: {
    x: number;
    y: number;
    z: number;
    yaw: number;
    hp: number;
  };
  inventory: {
    potions: number;
    keys: number;
    seals: string[];
    goldRelicLooted: boolean;
  };
  worldFlags: {
    openedDoors: string[];
    openedChests: string[];
    brokenBarriers: string[];
    defeatedEnemies: string[];
    defeatedBosses: string[];
    axiomRescued: boolean;
    axiomSacrificed: boolean;
    sealsInserted: boolean;
    studentChoice: 'helped' | 'left' | null;
    endingReached: 'good' | 'bad' | null;
    seenTutorials: string[];
  };
}

export function createDefaultSettings(): SettingsDataV1 {
  return {
    version: 1,
    controls: cloneBindings(DEFAULT_CONTROL_BINDINGS),
    desktop: {
      horizontalSensitivity: 1.0,
      verticalSensitivity: 1.0,
      invertY: false,
      fov: 75,
      sprintMode: 'hold',
      holdToRepeatAttack: false,
    },
    mobile: {
      cameraSensitivity: 1.1,
      invertY: false,
      joystickSensitivity: 1.0,
      joystickSize: 116,
      hudScale: 1.0,
      buttonOpacity: 0.85,
      attackButtonSize: 76,
    },
    graphics: { ...GRAPHICS_PRESETS.medium },
    interfaceMode: 'auto',
    soundMuted: false,
    showFpsCounter: false,
    companionHints:true,
    reducedMotion: typeof matchMedia!=="undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches,
  };
}

export function createInitialSaveData(): SaveDataV1 {
  return {
    version: 1,
    savedAt: new Date().toISOString(),
    checkpointId: 'ruins_awakening',
    currentRegionId: 'ruins',
    player: {
      x: 0,
      y: 0,
      z: 2.5,
      yaw: 0,
      hp: PLAYER_CONFIG.maxHp,
    },
    inventory: {
      potions: 1,
      keys: 0,
      seals: [],
      goldRelicLooted: false,
    },
    worldFlags: {
      openedDoors: [],
      openedChests: [],
      brokenBarriers: [],
      defeatedEnemies: [],
      defeatedBosses: [],
      axiomRescued: false,
      axiomSacrificed: false,
      sealsInserted: false,
      studentChoice: null,
      endingReached: null,
      seenTutorials: [],
    },
  };
}

function clampNumber(val: unknown, min: number, max: number, fallback: number): number {
  if (typeof val !== 'number' || !Number.isFinite(val)) return fallback;
  return Math.max(min, Math.min(max, val));
}

function asBoolean(val: unknown, fallback: boolean): boolean {
  return typeof val === 'boolean' ? val : fallback;
}

function sanitizeBindings(raw: unknown): ControlBindings {
  const defaults = createDefaultSettings().controls;
  if (!raw || typeof raw !== 'object') return defaults;

  const candidate = cloneBindings(defaults);
  const src = raw as Record<string, unknown>;

  for (const meta of ACTION_METADATA) {
    const entry = src[meta.action];
    if (!entry || typeof entry !== 'object') continue;
    const rec = entry as Record<string, unknown>;

    const primary =
      meta.primaryLockedEscape
        ? 'Escape'
        : rec.primary === null
          ? null
          : typeof rec.primary === 'string' && isSupportedBindingCode(rec.primary)
            ? rec.primary
            : defaults[meta.action].primary;

    const secondary =
      rec.secondary === null
        ? null
        : typeof rec.secondary === 'string' && isSupportedBindingCode(rec.secondary)
          ? rec.secondary
          : null;

    candidate[meta.action] = { primary, secondary };
  }

  // Ensure no required action is left completely unbound and no duplicate physical codes across actions
  const seenCodes = new Set<string>();
  for (const meta of ACTION_METADATA) {
    const b = candidate[meta.action];
    if (b.primary) {
      if (seenCodes.has(b.primary) && !meta.primaryLockedEscape) {
        b.primary = null;
      } else {
        seenCodes.add(b.primary);
      }
    }
    if (b.secondary) {
      if (seenCodes.has(b.secondary)) {
        b.secondary = null;
      } else {
        seenCodes.add(b.secondary);
      }
    }
  }

  const check = validateControlBindings(candidate);
  if (!check.valid) {
    // Recover any missing required actions back to defaults if unused, else reset whole controls
    for (const missing of check.missingActions) {
      const defPrim = defaults[missing.action].primary;
      if (defPrim && !seenCodes.has(defPrim)) {
        candidate[missing.action].primary = defPrim;
        seenCodes.add(defPrim);
      } else {
        return defaults;
      }
    }
  }

  return candidate;
}

export function sanitizeSettings(raw: unknown): SettingsDataV1 | null {
  if (!raw || typeof raw !== 'object') return null;
  const obj = raw as Record<string, unknown>;
  if (obj.version !== 1) return null;

  const def = createDefaultSettings();
  const desk = (obj.desktop && typeof obj.desktop === 'object' ? obj.desktop : {}) as Record<string, unknown>;
  const mob = (obj.mobile && typeof obj.mobile === 'object' ? obj.mobile : {}) as Record<string, unknown>;
  const gfx = (obj.graphics && typeof obj.graphics === 'object' ? obj.graphics : {}) as Record<string, unknown>;

  const preset =
    gfx.preset === 'low' || gfx.preset === 'medium' || gfx.preset === 'high' || gfx.preset === 'custom'
      ? gfx.preset
      : def.graphics.preset;

  const shadowQuality =
    gfx.shadowQuality === 'off' || gfx.shadowQuality === 'low' || gfx.shadowQuality === 'medium' || gfx.shadowQuality === 'high'
      ? gfx.shadowQuality
      : def.graphics.shadowQuality;

  const effectsQuality =
    gfx.effectsQuality === 'low' || gfx.effectsQuality === 'medium' || gfx.effectsQuality === 'high'
      ? gfx.effectsQuality
      : def.graphics.effectsQuality;

  const renderScale =
    gfx.renderScale === 0.5 || gfx.renderScale === 0.75 || gfx.renderScale === 1.0
      ? gfx.renderScale
      : def.graphics.renderScale;

  const viewDistance =
    gfx.viewDistance === 'near' || gfx.viewDistance === 'medium' || gfx.viewDistance === 'far'
      ? gfx.viewDistance
      : def.graphics.viewDistance;

  const textureQuality =
    gfx.textureQuality === 'standard' || gfx.textureQuality === 'detailed'
      ? gfx.textureQuality
      : def.graphics.textureQuality;

  const interfaceMode: InterfaceMode =
    obj.interfaceMode === 'auto' || obj.interfaceMode === 'desktop' || obj.interfaceMode === 'touch'
      ? obj.interfaceMode
      : 'auto';

  return {
    version: 1,
    controls: sanitizeBindings(obj.controls),
    desktop: {
      horizontalSensitivity: clampNumber(desk.horizontalSensitivity, 0.1, 3.0, def.desktop.horizontalSensitivity),
      verticalSensitivity: clampNumber(desk.verticalSensitivity, 0.1, 3.0, def.desktop.verticalSensitivity),
      invertY: asBoolean(desk.invertY, def.desktop.invertY),
      fov: clampNumber(desk.fov, 60, 90, def.desktop.fov),
      sprintMode: desk.sprintMode === 'toggle' ? 'toggle' : 'hold',
      holdToRepeatAttack: asBoolean(desk.holdToRepeatAttack, def.desktop.holdToRepeatAttack),
    },
    mobile: {
      cameraSensitivity: clampNumber(mob.cameraSensitivity, 0.1, 3.0, def.mobile.cameraSensitivity),
      invertY: asBoolean(mob.invertY, def.mobile.invertY),
      joystickSensitivity: clampNumber(mob.joystickSensitivity, 0.5, 2.0, def.mobile.joystickSensitivity),
      joystickSize: clampNumber(mob.joystickSize, 80, 160, def.mobile.joystickSize),
      hudScale: clampNumber(mob.hudScale, 0.75, 1.35, def.mobile.hudScale),
      buttonOpacity: clampNumber(mob.buttonOpacity, 0.4, 1.0, def.mobile.buttonOpacity),
      attackButtonSize: clampNumber(mob.attackButtonSize, 56, 100, def.mobile.attackButtonSize),
    },
    graphics: {
      preset,
      shadowQuality,
      effectsQuality,
      renderScale,
      viewDistance,
      textureQuality,
    },
    interfaceMode,
    soundMuted: asBoolean(obj.soundMuted, def.soundMuted),
    companionHints:asBoolean(obj.companionHints,def.companionHints),
    reducedMotion: asBoolean(obj.reducedMotion,def.reducedMotion),
    showFpsCounter: asBoolean(obj.showFpsCounter, def.showFpsCounter),
  };
}

function isStringArray(val: unknown): val is string[] {
  return Array.isArray(val) && val.every((item) => typeof item === 'string');
}

export function sanitizeSaveData(raw: unknown): SaveDataV1 | null {
  if (!raw || typeof raw !== 'object') return null;
  const obj = raw as Record<string, unknown>;
  if (obj.version !== 1) return null;

  const region = obj.currentRegionId;
  if (region !== 'ruins' && region !== 'whispers' && region !== 'abyss' && region !== 'sanctum') {
    return null;
  }

  if (!obj.player || typeof obj.player !== 'object') return null;
  const p = obj.player as Record<string, unknown>;
  if (
    typeof p.x !== 'number' ||
    !Number.isFinite(p.x) ||
    typeof p.y !== 'number' ||
    !Number.isFinite(p.y) ||
    typeof p.z !== 'number' ||
    !Number.isFinite(p.z) ||
    typeof p.yaw !== 'number' ||
    !Number.isFinite(p.yaw) ||
    typeof p.hp !== 'number' ||
    !Number.isFinite(p.hp)
  ) {
    return null;
  }

  if (!obj.inventory || typeof obj.inventory !== 'object') return null;
  const inv = obj.inventory as Record<string, unknown>;
  if (
    typeof inv.potions !== 'number' ||
    !Number.isFinite(inv.potions) ||
    typeof inv.keys !== 'number' ||
    !Number.isFinite(inv.keys) ||
    !isStringArray(inv.seals)
  ) {
    return null;
  }

  if (!obj.worldFlags || typeof obj.worldFlags !== 'object') return null;
  const wf = obj.worldFlags as Record<string, unknown>;
  if (
    !isStringArray(wf.openedDoors) ||
    !isStringArray(wf.openedChests) ||
    !isStringArray(wf.brokenBarriers) ||
    !isStringArray(wf.defeatedEnemies) ||
    !isStringArray(wf.defeatedBosses)
  ) {
    return null;
  }

  const studentChoice =
    wf.studentChoice === 'helped' || wf.studentChoice === 'left' ? wf.studentChoice : null;
  const endingReached =
    wf.endingReached === 'good' || wf.endingReached === 'bad' ? wf.endingReached : null;

  const knownSeals = ['seal_rates','seal_motion','seal_extremum'];
  const guardians = ['boss_stone_sentinel','boss_arcane_scholar','boss_keeper_equations'];
  const seals = new Set(inv.seals.filter(id=>knownSeals.includes(id)));
  const bosses = new Set(wf.defeatedBosses.filter(id=>ENEMY_SPAWNS.some(sp=>sp.id===id && sp.archetypeId.includes('Boss'))));
  // Repair partially written old checkpoints without removing earned rewards.
  if(bosses.has('boss_eternal_archivist')) guardians.forEach(id=>bosses.add(id));
  guardians.forEach((id,i)=>{if(bosses.has(id)) seals.add(knownSeals[i]);if(seals.has(knownSeals[i]))bosses.add(id);});
  const axiomRescued = wf.axiomRescued===true || bosses.has('boss_arcane_scholar') || bosses.has('boss_keeper_equations');
  const sealsInserted = seals.size===3 && (wf.sealsInserted===true || bosses.has('boss_eternal_archivist'));
  const choice = bosses.has('boss_eternal_archivist') ? studentChoice : null;
  const sacrificed = axiomRescued && choice!==null && wf.axiomSacrificed===true;
  const ending = sacrificed && endingReached ? (choice==='helped'?'good':'bad') : null;
  const allowedDepth = bosses.has('boss_keeper_equations') ? (sealsInserted?-178:-137) : bosses.has('boss_arcane_scholar') ? -129 : bosses.has('boss_stone_sentinel') ? (axiomRescued?-85:-63) : -35;
  const requestedCp=CHECKPOINTS.find(cp=>cp.id===obj.checkpointId && cp.z>=allowedDepth);
  const cp=requestedCp??CHECKPOINTS[0];
  const validPosition=p.z>=allowedDepth && DUNGEON_ROOMS.some(room=>(p.x as number)>=room.minX && (p.x as number)<=room.maxX && (p.z as number)>=room.minZ && (p.z as number)<=room.maxZ);

  return {
    version: 1,
    savedAt: typeof obj.savedAt === 'string' ? obj.savedAt : new Date().toISOString(),
    checkpointId: cp.id,
    currentRegionId: validPosition ? (DUNGEON_ROOMS.find(room=>(p.x as number)>=room.minX && (p.x as number)<=room.maxX && (p.z as number)>=room.minZ && (p.z as number)<=room.maxZ)?.region??region) : cp.region,
    player: {
      x: validPosition ? p.x : cp.x,
      y: 0,
      z: validPosition ? p.z : cp.z,
      yaw: p.yaw,
      hp: Math.max(1, Math.min(PLAYER_CONFIG.maxHp, p.hp)),
    },
    inventory: {
      potions: Math.max(0, Math.floor(inv.potions)),
      keys: Math.max(0, Math.floor(inv.keys)),
      seals: [...seals],
      goldRelicLooted: choice==='left',
    },
    worldFlags: {
      openedDoors: Array.from(new Set(wf.openedDoors.filter(id=>DOOR_SPECS.some(d=>d.id===id && d.kind==='energy')))),
      openedChests: Array.from(new Set(wf.openedChests.filter(id=>CHEST_SPECS.some(c=>c.id===id)))),
      brokenBarriers: Array.from(new Set(wf.brokenBarriers.filter(id=>DOOR_SPECS.some(d=>d.id===id && d.kind==='barrier')))),
      defeatedEnemies: Array.from(new Set(wf.defeatedEnemies.filter(id=>ENEMY_SPAWNS.some(e=>e.id===id && !e.archetypeId.includes('Boss'))))),
      defeatedBosses: [...bosses],
      axiomRescued,
      axiomSacrificed: sacrificed,
      sealsInserted,
      studentChoice: choice,
      endingReached: ending,
      seenTutorials: isStringArray(wf.seenTutorials) ? Array.from(new Set(wf.seenTutorials)) : [],
    },
  };
}

export interface StorageProvider {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}

function getSafeBrowserStorage(): StorageProvider | null {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      const testKey = '__tas_probe__';
      window.localStorage.setItem(testKey, '1');
      window.localStorage.removeItem(testKey);
      return window.localStorage;
    }
  } catch {
    return null;
  }
  return null;
}

export class PersistenceManager {
  private storage: StorageProvider | null;
  private sessionSave: SaveDataV1 | null = null;
  private sessionSettings: SettingsDataV1 | null = null;

  constructor(customStorage?: StorageProvider | null) {
    this.storage = customStorage !== undefined ? customStorage : getSafeBrowserStorage();
  }

  public isStorageAvailable(): boolean {
    return this.storage !== null;
  }

  public loadSettings(): { settings: SettingsDataV1; recoveredFromError: boolean } {
    if (!this.storage) {
      return { settings: this.sessionSettings ?? createDefaultSettings(), recoveredFromError: false };
    }
    try {
      const rawStr = this.storage.getItem(SETTINGS_STORAGE_KEY);
      if (!rawStr) {
        return { settings: this.sessionSettings ?? createDefaultSettings(), recoveredFromError: false };
      }
      const parsed = JSON.parse(rawStr);
      const valid = sanitizeSettings(parsed);
      if (!valid) {
        return { settings: createDefaultSettings(), recoveredFromError: true };
      }
      return { settings: valid, recoveredFromError: false };
    } catch {
      return { settings: createDefaultSettings(), recoveredFromError: true };
    }
  }

  public saveSettings(settings: SettingsDataV1): boolean {
    this.sessionSettings=structuredClone(settings);
    if (!this.storage) return false;
    try {
      this.storage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settings));
      return true;
    } catch {
      return false;
    }
  }

  public loadGameSave(): { save: SaveDataV1 | null; corrupted: boolean } {
    if (!this.storage) return { save: this.sessionSave ? structuredClone(this.sessionSave) : null, corrupted: false };
    try {
      const rawStr = this.storage.getItem(SAVE_STORAGE_KEY);
      if (!rawStr) return { save: this.sessionSave, corrupted: false };
      const parsed = JSON.parse(rawStr);
      const valid = sanitizeSaveData(parsed);
      if (!valid) return { save: null, corrupted: true };
      return { save: valid, corrupted: false };
    } catch {
      return { save: this.sessionSave, corrupted: true };
    }
  }

  public hasValidSave(): boolean {
    return this.loadGameSave().save !== null;
  }

  public saveGame(save: SaveDataV1): boolean {
    this.sessionSave=structuredClone(save);
    if (!this.storage) return false;
    try {
      const copy: SaveDataV1 = {
        ...save,
        savedAt: new Date().toISOString(),
      };
      this.storage.setItem(SAVE_STORAGE_KEY, JSON.stringify(copy));
      return true;
    } catch {
      return false;
    }
  }

  public clearGameSave(): boolean {
    this.sessionSave=null;
    if (!this.storage) return false;
    try {
      this.storage.removeItem(SAVE_STORAGE_KEY);
      return true;
    } catch {
      return false;
    }
  }
}

