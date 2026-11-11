import {
  EnergyDoorConfig,
  HarmonicTrapConfig,
  OptimizationChestConfig,
} from '../config/gameConfig';
import { RegionId } from '../storage/persistence';
import { BoxCollider } from '../math/geometry';

export interface RoomRect {
  id: string;
  region: RegionId;
  minX: number;
  maxX: number;
  minZ: number;
  maxZ: number;
  floorType: 'stone' | 'library' | 'abyss' | 'sanctum';
  isBridge?: boolean;
}

export interface DoorSpec {
  id: string;
  x: number;
  z: number;
  width: number;
  depth: number;
  orientation: 'z-axis' | 'x-axis'; // 'x-axis' means spans across X (blocks Z passage)
  kind: 'energy' | 'progression' | 'barrier' | 'sealGate' | 'finalExit';
  region: RegionId;
  label: string;
  energyConfig?: EnergyDoorConfig;
  requiredFlag?: 'stoneSentinelDefeated' | 'axiomRescued' | 'arcaneScholarDefeated' | 'keeperDefeated' | 'sealsInserted' | 'archivistDefeated' | 'axiomSacrificed';
}

export interface ChestSpec {
  id: string;
  x: number;
  z: number;
  region: RegionId;
  label: string;
  kind: 'standard' | 'optimization' | 'greedyGold';
  optConfig?: OptimizationChestConfig;
  rewards: {
    potions: number;
    keys: number;
    goldRelic?: boolean;
  };
}

export interface PylonSpec {
  id: string;
  x: number;
  z: number;
  region: RegionId;
  label: string;
  kind: 'bossShield1D' | 'bossShield2D' | 'axiomCage' | 'studentCage' | 'barrierControl';
  targetId: string; // Boss ID, Door ID, or NPC ID
  energyConfig?: EnergyDoorConfig;
  optConfig?: OptimizationChestConfig;
}

export interface EnemySpawnSpec {
  id: string;
  archetypeId: string;
  x: number;
  z: number;
  region: RegionId;
  patrolOffset: { x: number; z: number };
  shieldPylonId?: string;
  secondPhasePylonId?: string;
  dropsSeal?: { id: string; name: string };
}

export interface TabletSpec {
  id: string;
  x: number;
  z: number;
  region: RegionId;
  title: string;
  lines: string[];
}

export interface CheckpointSpec {
  id: string;
  region: RegionId;
  x: number;
  z: number;
  yaw: number;
  minZ: number;
  maxZ: number;
}

export const GRID_MIN_X = -26;
export const GRID_MAX_X = 18;
export const GRID_MIN_Z = -180;
export const GRID_MAX_Z = 8;
export const WALL_HEIGHT = 6.8;

export const DUNGEON_ROOMS: readonly RoomRect[] = [
  // Region 1: Forgotten Ruins
  { id: 'ruins_awakening', region: 'ruins', minX: -6, maxX: 6, minZ: -6, maxZ: 6, floorType: 'stone' },
  { id: 'ruins_side_corr', region: 'ruins', minX: 6, maxX: 8, minZ: -2, maxZ: 2, floorType: 'stone' },
  { id: 'ruins_side_alcove', region: 'ruins', minX: 8, maxX: 16, minZ: -4, maxZ: 4, floorType: 'stone' },
  { id: 'ruins_north_corr', region: 'ruins', minX: -3, maxX: 3, minZ: -14, maxZ: -6, floorType: 'stone' },
  { id: 'ruins_arena', region: 'ruins', minX: -10, maxX: 10, minZ: -34, maxZ: -14, floorType: 'stone' },
  { id: 'ruins_exit_corr', region: 'ruins', minX: -3, maxX: 3, minZ: -38, maxZ: -34, floorType: 'stone' },

  // Region 2: Chamber of Whispers
  { id: 'whispers_entry', region: 'whispers', minX: -4, maxX: 4, minZ: -42, maxZ: -38, floorType: 'library' },
  { id: 'whispers_library', region: 'whispers', minX: -10, maxX: 10, minZ: -62, maxZ: -42, floorType: 'library' },
  { id: 'whispers_west_corr', region: 'whispers', minX: -14, maxX: -10, minZ: -54, maxZ: -48, floorType: 'library' },
  { id: 'whispers_axiom_wing', region: 'whispers', minX: -22, maxX: -14, minZ: -56, maxZ: -46, floorType: 'library' },
  { id: 'whispers_sanctum_corr', region: 'whispers', minX: -3, maxX: 3, minZ: -66, maxZ: -62, floorType: 'library' },
  { id: 'whispers_arena', region: 'whispers', minX: -10, maxX: 10, minZ: -84, maxZ: -66, floorType: 'library' },
  { id: 'whispers_exit_corr', region: 'whispers', minX: -3, maxX: 3, minZ: -88, maxZ: -84, floorType: 'library' },

  // Region 3: Abyssal Sanctum
  { id: 'abyss_entry', region: 'abyss', minX: -5, maxX: 5, minZ: -94, maxZ: -88, floorType: 'abyss' },
  { id: 'abyss_east_corr', region: 'abyss', minX: 5, maxX: 7, minZ: -92, maxZ: -88, floorType: 'abyss' },
  { id: 'abyss_east_shrine', region: 'abyss', minX: 7, maxX: 15, minZ: -94, maxZ: -86, floorType: 'abyss' },
  { id: 'abyss_bridge', region: 'abyss', minX: -4, maxX: 4, minZ: -108, maxZ: -94, floorType: 'abyss', isBridge: true },
  { id: 'abyss_arena', region: 'abyss', minX: -11, maxX: 11, minZ: -128, maxZ: -108, floorType: 'abyss' },
  { id: 'abyss_exit_corr', region: 'abyss', minX: -3, maxX: 3, minZ: -132, maxZ: -128, floorType: 'abyss' },

  // Region 4: Sanctum of the Eternal Archivist
  { id: 'sanctum_antechamber', region: 'sanctum', minX: -5, maxX: 5, minZ: -138, maxZ: -132, floorType: 'sanctum' },
  { id: 'sanctum_arena', region: 'sanctum', minX: -12, maxX: 12, minZ: -162, maxZ: -138, floorType: 'sanctum' },
  { id: 'sanctum_hidden_corr', region: 'sanctum', minX: -15, maxX: -12, minZ: -152, maxZ: -146, floorType: 'sanctum' },
  { id: 'sanctum_hidden_room', region: 'sanctum', minX: -24, maxX: -15, minZ: -155, maxZ: -143, floorType: 'sanctum' },
  { id: 'sanctum_exit_hall', region: 'sanctum', minX: -4, maxX: 4, minZ: -178, maxZ: -162, floorType: 'sanctum' },
];

export const DOOR_SPECS: readonly DoorSpec[] = [
  {
    id: 'door_ruins_side',
    x: 7,
    z: 0,
    width: 0.9,
    depth: 4.0,
    orientation: 'z-axis',
    kind: 'energy',
    region: 'ruins',
    label: 'The Stillwater Seal',
    energyConfig: {
      id: 'door_ruins_side',
      label: 'Energy Door: Ruins Vault',
      k: 16,
      a: 0.68,
      eMin: 10,
      tolerance: 1.4,
      dwellTime: 1.1,
      initialX: 0.15,
    },
  },
  {
    id: 'gate_ruins_to_whispers',
    x: 0,
    z: -35.5,
    width: 6.0,
    depth: 0.9,
    orientation: 'x-axis',
    kind: 'progression',
    region: 'ruins',
    label: 'Gate to Chamber of Whispers',
    requiredFlag: 'stoneSentinelDefeated',
  },
  {
    id: 'gate_whispers_sanctum',
    x: 0,
    z: -64,
    width: 6.0,
    depth: 0.9,
    orientation: 'x-axis',
    kind: 'progression',
    region: 'whispers',
    label: 'Sanctum Gate (Rescue Axiom First)',
    requiredFlag: 'axiomRescued',
  },
  {
    id: 'gate_whispers_to_abyss',
    x: 0,
    z: -86,
    width: 6.0,
    depth: 0.9,
    orientation: 'x-axis',
    kind: 'progression',
    region: 'whispers',
    label: 'Gate to Abyssal Sanctum',
    requiredFlag: 'arcaneScholarDefeated',
  },
  {
    id: 'door_abyss_barrier',
    x: 0,
    z: -102,
    width: 8.0,
    depth: 0.8,
    orientation: 'x-axis',
    kind: 'barrier',
    region: 'abyss',
    label: 'Abyssal Energy Barrier',
  },
  {
    id: 'gate_abyss_to_sanctum',
    x: 0,
    z: -130,
    width: 6.0,
    depth: 0.9,
    orientation: 'x-axis',
    kind: 'progression',
    region: 'abyss',
    label: 'Gate to Final Sanctum',
    requiredFlag: 'keeperDefeated',
  },
  {
    id: 'gate_sanctum_seal',
    x: 0,
    z: -138,
    width: 10.0,
    depth: 1.0,
    orientation: 'x-axis',
    kind: 'sealGate',
    region: 'sanctum',
    label: 'Three-Seal Gateway',
    requiredFlag: 'sealsInserted',
  },
  {
    id: 'gate_student_alcove',
    x: -12.5,
    z: -149,
    width: 0.9,
    depth: 6.0,
    orientation: 'z-axis',
    kind: 'progression',
    region: 'sanctum',
    label: 'Hidden Chamber Passage',
    requiredFlag: 'archivistDefeated',
  },
  {
    id: 'gate_exit_hall',
    x: 0,
    z: -162,
    width: 8.0,
    depth: 0.9,
    orientation: 'x-axis',
    kind: 'progression',
    region: 'sanctum',
    label: 'Exit Corridor Gate',
    requiredFlag: 'archivistDefeated',
  },
  {
    id: 'gate_final_exit',
    x: 0,
    z: -175,
    width: 8.0,
    depth: 1.0,
    orientation: 'x-axis',
    kind: 'finalExit',
    region: 'sanctum',
    label: 'Grand Exit Gateway',
    requiredFlag: 'axiomSacrificed',
  },
];

export const CHEST_SPECS: readonly ChestSpec[] = [
  {
    id: 'chest_ruins_alcove',
    x: 12,
    z: 0,
    region: 'ruins',
    label: 'Forgotten Strongbox',
    kind: 'standard',
    rewards: { potions: 1, keys: 1 },
  },
  {
    id: 'chest_whispers_library',
    x: -18,
    z: -47.5,
    region: 'whispers',
    label: 'Dual-Crystal Library Chest',
    kind: 'optimization',
    optConfig: {
      id: 'chest_whispers_library',
      label: 'Library Optimization Chest',
      kx: 14,
      ky: 14,
      a: 0.3,
      b: 0.7,
      eMin: 10,
      tolerance: 1.8,
      dwellTime: 1.0,
      initialX: 0.75,
      initialY: 0.2,
    },
    rewards: { potions: 2, keys: 1 },
  },
  {
    id: 'chest_abyss_opt',
    x: 11,
    z: -90,
    region: 'abyss',
    label: 'Abyssal Relic Chest',
    kind: 'optimization',
    optConfig: {
      id: 'chest_abyss_opt',
      label: 'Abyssal Optimization Chest',
      kx: 18,
      ky: 22,
      a: 0.65,
      b: 0.35,
      eMin: 8,
      tolerance: 2.0,
      dwellTime: 1.1,
      initialX: 0.2,
      initialY: 0.85,
    },
    rewards: { potions: 2, keys: 1 },
  },
  {
    id: 'chest_greedy_gold',
    x: -20,
    z: -145,
    region: 'sanctum',
    label: 'Hoard of Golden Relics',
    kind: 'greedyGold',
    rewards: { potions: 0, keys: 0, goldRelic: true },
  },
];

export const PYLON_SPECS: readonly PylonSpec[] = [
  {
    id: 'pylon_sentinel_shield',
    x: -7,
    z: -24,
    region: 'ruins',
    label: 'Sentinel Shield Stabilizer',
    kind: 'bossShield1D',
    targetId: 'boss_stone_sentinel',
    energyConfig: {
      id: 'pylon_sentinel_shield',
      label: 'Stone Sentinel Aegis Shield',
      k: 20,
      a: 0.32,
      eMin: 8,
      tolerance: 1.6,
      dwellTime: 1.0,
      initialX: 0.82,
    },
  },
  {
    id: 'mech_rescue_axiom',
    x: -18,
    z: -51,
    region: 'whispers',
    label: "Axiom's Containment Stabilizer",
    kind: 'axiomCage',
    targetId: 'axiom',
    energyConfig: {
      id: 'mech_rescue_axiom',
      label: 'Axiom Stasis Containment',
      k: 22,
      a: 0.78,
      eMin: 12,
      tolerance: 1.7,
      dwellTime: 1.1,
      initialX: 0.18,
    },
  },
  {
    id: 'pylon_scholar_shield',
    x: 7,
    z: -74,
    region: 'whispers',
    label: 'Temporal Ward Stabilizer',
    kind: 'bossShield1D',
    targetId: 'boss_arcane_scholar',
    energyConfig: {
      id: 'pylon_scholar_shield',
      label: 'Arcane Scholar Temporal Ward',
      k: 24,
      a: 0.24,
      eMin: 9,
      tolerance: 1.8,
      dwellTime: 1.0,
      initialX: 0.8,
    },
  },
  {
    id: 'mech_abyss_barrier',
    x: -2.8,
    z: -99.5,
    region: 'abyss',
    label: 'Bridge Barrier Stabilizer',
    kind: 'barrierControl',
    targetId: 'door_abyss_barrier',
    energyConfig: {
      id: 'mech_abyss_barrier',
      label: 'Abyssal Bridge Barrier',
      k: 25,
      a: 0.55,
      eMin: 6,
      tolerance: 1.8,
      dwellTime: 1.05,
      initialX: 0.1,
    },
  },
  {
    id: 'pylon_keeper_shield',
    x: -7.5,
    z: -118,
    region: 'abyss',
    label: 'Celestial Core',
    kind: 'bossShield2D',
    targetId: 'boss_keeper_equations',
    optConfig: {
      id: 'pylon_keeper_shield',
      label: 'Keeper Dual-Crystal Shield',
      kx: 18,
      ky: 18,
      a: 0.75,
      b: 0.25,
      eMin: 10,
      tolerance: 2.0,
      dwellTime: 1.05,
      initialX: 0.2,
      initialY: 0.8,
    },
  },
  {
    id: 'pylon_archivist_1',
    x: -8.5,
    z: -148,
    region: 'sanctum',
    label: 'Archivist West Energy Pylon',
    kind: 'bossShield1D',
    targetId: 'boss_eternal_archivist',
    energyConfig: {
      id: 'pylon_archivist_1',
      label: 'Archivist Phase I Shield Pylon',
      k: 24,
      a: 0.82,
      eMin: 10,
      tolerance: 1.8,
      dwellTime: 1.0,
      initialX: 0.18,
    },
  },
  {
    id: 'pylon_archivist_2',
    x: 8.5,
    z: -148,
    region: 'sanctum',
    label: 'Archivist East Crystal Pylon',
    kind: 'bossShield2D',
    targetId: 'boss_eternal_archivist',
    optConfig: {
      id: 'pylon_archivist_2',
      label: 'Archivist Phase II Overdrive Pylon',
      kx: 20,
      ky: 20,
      a: 0.3,
      b: 0.72,
      eMin: 8,
      tolerance: 2.1,
      dwellTime: 1.05,
      initialX: 0.82,
      initialY: 0.2,
    },
  },
  {
    id: 'mech_student_rescue',
    x: -18,
    z: -149,
    region: 'sanctum',
    label: 'Student Containment Seal',
    kind: 'studentCage',
    targetId: 'student',
    optConfig: {
      id: 'mech_student_rescue',
      label: 'Trapped Student Containment Lock',
      kx: 16,
      ky: 16,
      a: 0.72,
      b: 0.28,
      eMin: 10,
      tolerance: 1.9,
      dwellTime: 1.15,
      initialX: 0.2,
      initialY: 0.8,
    },
  },
];

export const TRAP_SPECS: readonly HarmonicTrapConfig[] = [
  {
    id:'trap_archivist_clock', label:'Archivist pendulum', axis:'x', p0:0,
    amplitude:7.5, omega:1.55, phase:Math.PI/2,
    halfExtents:{x:.65,y:1.2,z:.4}, damage:16,
  },
  {
    id: 'trap_whispers_1',
    label: 'Library Harmonic Blade I',
    axis: 'x',
    p0: 0,
    amplitude: 6.2,
    omega: 1.85,
    phase: 0,
    halfExtents: { x: 1.25, y: 1.6, z: 0.55 },
    damage: 18,
  },
  {
    id: 'trap_whispers_2',
    label: 'Library Harmonic Blade II',
    axis: 'x',
    p0: 0,
    amplitude: 6.2,
    omega: 2.05,
    phase: Math.PI,
    halfExtents: { x: 1.25, y: 1.6, z: 0.55 },
    damage: 18,
  },
  {
    id: 'trap_abyss_bridge',
    label: 'Abyss Pendulum Crusher',
    axis: 'x',
    p0: 0,
    amplitude: 2.5,
    omega: 2.25,
    phase: 0.8,
    halfExtents: { x: 1.0, y: 1.8, z: 0.65 },
    damage: 22,
  },
];

export const TRAP_ANCHORS: Record<string, { x: number; z: number; region: RegionId }> = {
  trap_archivist_clock: {x:0,z:-149,region:'sanctum'},
  trap_whispers_1: { x: 0, z: -48, region: 'whispers' },
  trap_whispers_2: { x: 0, z: -55, region: 'whispers' },
  trap_abyss_bridge: { x: 0, z: -105, region: 'abyss' },
};

export const ENEMY_SPAWNS: readonly EnemySpawnSpec[] = [
  {
    id: 'enemy_ruins_1',
    archetypeId: 'ruinSkeleton',
    x: 0,
    z: -10,
    region: 'ruins',
    patrolOffset: { x: 1.8, z: 0 },
  },
  {
    id: 'enemy_ruins_2',
    archetypeId: 'ruinSkeleton',
    x: -6,
    z: -20,
    region: 'ruins',
    patrolOffset: { x: 3.5, z: 0 },
  },
  {
    id: 'boss_stone_sentinel',
    archetypeId: 'stoneSentinelBoss',
    x: 0,
    z: -26,
    region: 'ruins',
    patrolOffset: { x: 2.5, z: 0 },
    shieldPylonId: 'pylon_sentinel_shield',
    dropsSeal: { id: 'seal_rates', name: 'First Ancient Seal' },
  },
  {
    id: 'enemy_whisper_1',
    archetypeId: 'whisperWraith',
    x: 6,
    z: -71,
    region: 'whispers',
    patrolOffset: { x: 0, z: 3.5 },
  },
  {
    id: 'boss_arcane_scholar',
    archetypeId: 'arcaneScholarBoss',
    x: 0,
    z: -76,
    region: 'whispers',
    patrolOffset: { x: 3.0, z: 0 },
    shieldPylonId: 'pylon_scholar_shield',
    dropsSeal: { id: 'seal_motion', name: 'Second Ancient Seal' },
  },
  {
    id: 'enemy_abyss_1',
    archetypeId: 'abyssConstruct',
    x: -6,
    z: -114,
    region: 'abyss',
    patrolOffset: { x: 3.0, z: 0 },
  },
  {
    id: 'enemy_abyss_2',
    archetypeId: 'abyssConstruct',
    x: 6,
    z: -114,
    region: 'abyss',
    patrolOffset: { x: 3.0, z: 0 },
  },
  {
    id: 'boss_keeper_equations',
    archetypeId: 'keeperEquationsBoss',
    x: 0,
    z: -120,
    region: 'abyss',
    patrolOffset: { x: 3.0, z: 0 },
    shieldPylonId: 'pylon_keeper_shield',
    dropsSeal: { id: 'seal_extremum', name: 'Third Ancient Seal' },
  },
  {
    id: 'boss_eternal_archivist',
    archetypeId: 'eternalArchivistBoss',
    x: 0,
    z: -151,
    region: 'sanctum',
    patrolOffset: { x: 4.0, z: 0 },
    shieldPylonId: 'pylon_archivist_1',
    secondPhasePylonId: 'pylon_archivist_2',
  },
];

export const TABLET_SPECS: readonly TabletSpec[] = [
  {
    id: 'tablet_ruins_intro',
    x: -3.5,
    z: -2.5,
    region: 'ruins',
    title: 'Stone Inscription of the Forgotten',
    lines: [
      '“Three ancient seals guard the path to freedom. Only those who feel the changing forces of this world shall escape.”',
      'Turn the bronze seals until their trembling fades. When the current runs steady, hold it there. The old locks will remember.',
    ],
  },
];

export const CHECKPOINTS: readonly CheckpointSpec[] = [
  { id: 'ruins_awakening', region: 'ruins', x: 0, z: 2.5, yaw: 0, minZ: -14, maxZ: 6 },
  { id: 'ruins_sanctum', region: 'ruins', x: 0, z: -15, yaw: 0, minZ: -38, maxZ: -14 },
  { id: 'whispers_entrance', region: 'whispers', x: 0, z: -40, yaw: 0, minZ: -64, maxZ: -38 },
  { id: 'whispers_sanctum', region: 'whispers', x: 0, z: -65, yaw: 0, minZ: -88, maxZ: -64 },
  { id: 'abyss_entrance', region: 'abyss', x: 0, z: -91, yaw: 0, minZ: -108, maxZ: -88 },
  { id: 'abyss_sanctum', region: 'abyss', x: 0, z: -109, yaw: 0, minZ: -132, maxZ: -108 },
  { id: 'archivist_antechamber', region: 'sanctum', x: 0, z: -135, yaw: 0, minZ: -180, maxZ: -132 },
];

export const REGION_NAMES: Record<RegionId, string> = {
  ruins: 'The Forgotten Ruins',
  whispers: 'The Chamber of Whispers',
  abyss: 'The Abyssal Sanctum',
  sanctum: 'Sanctum of the Eternal Archivist',
};

/**
 * Generates merged solid wall BoxColliders enclosing all walkable rooms.
 * Adjacent room borders without walls remain cleanly open; bridge edges remain walled for safe traversal.
 */
export function buildDungeonWallColliders(): BoxCollider[] {
  const cols = GRID_MAX_X - GRID_MIN_X; // 44
  const rows = GRID_MAX_Z - GRID_MIN_Z; // 188
  const walkable: boolean[][] = Array.from({ length: rows }, () => Array(cols).fill(false));

  for (const r of DUNGEON_ROOMS) {
    for (let z = r.minZ; z < r.maxZ; z++) {
      for (let x = r.minX; x < r.maxX; x++) {
        const cx = x - GRID_MIN_X;
        const rz = z - GRID_MIN_Z;
        if (rz >= 0 && rz < rows && cx >= 0 && cx < cols) {
          walkable[rz][cx] = true;
        }
      }
    }
  }

  // Only emit wall blocks that touch at least one walkable cell (1m thick perimeter walls)
  const isWallCell: boolean[][] = Array.from({ length: rows }, () => Array(cols).fill(false));
  for (let rz = 0; rz < rows; rz++) {
    for (let cx = 0; cx < cols; cx++) {
      if (walkable[rz][cx]) continue;
      let touchesWalkable = false;
      for (let dz = -1; dz <= 1 && !touchesWalkable; dz++) {
        for (let dx = -1; dx <= 1; dx++) {
          const nz = rz + dz;
          const nx = cx + dx;
          if (nz >= 0 && nz < rows && nx >= 0 && nx < cols && walkable[nz][nx]) {
            touchesWalkable = true;
            break;
          }
        }
      }
      if (touchesWalkable) {
        isWallCell[rz][cx] = true;
      }
    }
  }

  // Merge horizontal runs into rectangular BoxColliders
  const boxes: BoxCollider[] = [];
  let boxId = 0;
  for (let rz = 0; rz < rows; rz++) {
    let cx = 0;
    while (cx < cols) {
      if (!isWallCell[rz][cx]) {
        cx++;
        continue;
      }
      const startX = cx;
      while (cx < cols && isWallCell[rz][cx]) {
        cx++;
      }
      const endX = cx;

      // Determine if this belongs to the abyss bridge (low curb so abyss view stays open, still blocks walking/sight appropriately)
      const worldZCenter = GRID_MIN_Z + rz + 0.5;
      const worldXCenter = GRID_MIN_X + (startX + endX) * 0.5;
      const isBridgeCurb = worldZCenter < -94 && worldZCenter > -108 && Math.abs(worldXCenter) <= 5.5;

      boxes.push({
        id: `wall_${boxId++}`,
        minX: GRID_MIN_X + startX,
        maxX: GRID_MIN_X + endX,
        minY: 0,
        maxY: isBridgeCurb ? 1.15 : WALL_HEIGHT,
        minZ: GRID_MIN_Z + rz,
        maxZ: GRID_MIN_Z + rz + 1,
        blocksSight: !isBridgeCurb,
      });
    }
  }

  // Add bookshelf obstacles in Library (Region 2)
  boxes.push(
    { id: 'shelf_lib_e1', minX: 7.5, maxX: 9.6, minY: 0, maxY: 3.4, minZ: -59, maxZ: -45, blocksSight: true },
    { id: 'shelf_lib_w1', minX: -9.6, maxX: -7.5, minY: 0, maxY: 3.4, minZ: -60, maxZ: -55, blocksSight: true },
    { id: 'shelf_lib_w2', minX: -9.6, maxX: -7.5, minY: 0, maxY: 3.4, minZ: -47, maxZ: -43, blocksSight: true }
  );

  return boxes;
}

