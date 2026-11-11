/**
 * Shared gameplay, combat, physics, graphics, and differential calculus configuration.
 * Both desktop and mobile consume these identical simulation parameters.
 */

export type GraphicsPresetId = 'low' | 'medium' | 'high' | 'custom';
export type ShadowQuality = 'off' | 'low' | 'medium' | 'high';
export type EffectsQuality = 'low' | 'medium' | 'high';
export type RenderScale = 0.5 | 0.75 | 1.0;
export type ViewDistance = 'near' | 'medium' | 'far';
export type TextureQuality = 'standard' | 'detailed';
export type InterfaceMode = 'auto' | 'desktop' | 'touch';
export type SprintMode = 'hold' | 'toggle';

export interface GraphicsSettings {
  preset: GraphicsPresetId;
  shadowQuality: ShadowQuality;
  effectsQuality: EffectsQuality;
  renderScale: RenderScale;
  viewDistance: ViewDistance;
  textureQuality: TextureQuality;
}

export const GRAPHICS_PRESETS: Record<Exclude<GraphicsPresetId, 'custom'>, GraphicsSettings> = {
  low: {
    preset: 'low',
    shadowQuality: 'off',
    effectsQuality: 'low',
    renderScale: 0.75,
    viewDistance: 'near',
    textureQuality: 'standard',
  },
  medium: {
    preset: 'medium',
    shadowQuality: 'low',
    effectsQuality: 'medium',
    renderScale: 1.0,
    viewDistance: 'medium',
    textureQuality: 'standard',
  },
  high: {
    preset: 'high',
    shadowQuality: 'high',
    effectsQuality: 'high',
    renderScale: 1.0,
    viewDistance: 'far',
    textureQuality: 'detailed',
  },
};

export const VIEW_DISTANCE_METERS: Record<ViewDistance, { far: number; fogNear: number; fogFar: number }> = {
  near: { far: 36, fogNear: 12, fogFar: 32 },
  medium: { far: 58, fogNear: 18, fogFar: 52 },
  far: { far: 92, fogNear: 26, fogFar: 84 },
};

export const SHADOW_MAP_SIZES: Record<Exclude<ShadowQuality, 'off'>, number> = {
  low: 512,
  medium: 1024,
  high: 2048,
};

export const PLAYER_CONFIG = {
  maxHp: 100,
  radius: 0.45,
  height: 1.75,
  walkSpeed: 5.2,
  sprintMultiplier: 1.52,
  dodgeSpeed: 12.5,
  dodgeDuration: 0.34,
  dodgeInvulnerableWindow: 0.28,
  dodgeCooldown: 0.72,
  potionHealAmount: 35,
  interactRadius: 2.8,
  cameraDefaultDistance: 4.3,
  cameraShoulderOffset: 0.85,
  cameraShoulderHeight: 1.65,
  cameraWallPadding: 0.25,
  cameraMinPitch: -0.58,
  cameraMaxPitch: 0.72,
} as const;

export const COMBAT_CONFIG = {
  swordWindupSec: 0.14,
  swordActiveSec: 0.18,
  swordRecoverySec: 0.22,
  swordCooldownSec: 0.12,
  swordReach: 2.55,
  swordHalfAngleRad: Math.PI * 0.42, // ~75 deg half-cone
  swordDamage: 25,
  playerHitInvulnSec: 0.65,
} as const;

export const SIMULATION_CONFIG = {
  fixedDt: 1 / 60,
  maxFrameDt: 0.05, // Bounded catch-up after tab suspension or stalls
  trapStepSubdivisions: 4, // Extra safety for high-speed traps
} as const;

export interface EnemyArchetypeConfig {
  id: string;
  name: string;
  isBoss: boolean;
  maxHp: number;
  damage: number;
  radius: number;
  height: number;
  patrolSpeed: number;
  chaseSpeed: number;
  tau: number; // Steering time constant (> 0)
  maxAccel: number;
  detectRange: number;
  attackRange: number;
  windupSec: number;
  activeSec: number;
  recoverSec: number;
  attackCooldownSec: number;
  lungeSpeed: number;
  hitStunSec: number;
  vulnerabilityDurationSec?: number;
}

export const ENEMY_ARCHETYPES: Record<string, EnemyArchetypeConfig> = {
  ruinSkeleton: {
    id: 'ruinSkeleton',
    name: 'Ruin Sentinel',
    isBoss: false,
    maxHp: 50,
    damage: 12,
    radius: 0.5,
    height: 1.8,
    patrolSpeed: 1.8,
    chaseSpeed: 3.9,
    tau: 0.28,
    maxAccel: 18,
    detectRange: 10.5,
    attackRange: 2.0,
    windupSec: 0.55,
    activeSec: 0.18,
    recoverSec: 0.45,
    attackCooldownSec: 1.1,
    lungeSpeed: 6.5,
    hitStunSec: 0.22,
  },
  whisperWraith: {
    id: 'whisperWraith',
    name: 'Whisper Phantom',
    isBoss: false,
    maxHp: 65,
    damage: 15,
    radius: 0.52,
    height: 1.9,
    patrolSpeed: 2.3,
    chaseSpeed: 4.5,
    tau: 0.24,
    maxAccel: 22,
    detectRange: 12.0,
    attackRange: 2.3,
    windupSec: 0.5,
    activeSec: 0.2,
    recoverSec: 0.45,
    attackCooldownSec: 1.0,
    lungeSpeed: 8.0,
    hitStunSec: 0.2,
  },
  abyssConstruct: {
    id: 'abyssConstruct',
    name: 'Bronze Revenant',
    isBoss: false,
    maxHp: 80,
    damage: 18,
    radius: 0.58,
    height: 2.0,
    patrolSpeed: 2.4,
    chaseSpeed: 4.9,
    tau: 0.22,
    maxAccel: 26,
    detectRange: 13.0,
    attackRange: 2.4,
    windupSec: 0.48,
    activeSec: 0.2,
    recoverSec: 0.45,
    attackCooldownSec: 0.95,
    lungeSpeed: 9.2,
    hitStunSec: 0.18,
  },
  stoneSentinelBoss: {
    id: 'stoneSentinelBoss',
    name: 'The Stone Sentinel',
    isBoss: true,
    maxHp: 125,
    damage: 20,
    radius: 0.95,
    height: 2.75,
    patrolSpeed: 1.6,
    chaseSpeed: 3.6,
    tau: 0.34,
    maxAccel: 16,
    detectRange: 18,
    attackRange: 3.0,
    windupSec: 0.72,
    activeSec: 0.24,
    recoverSec: 0.65,
    attackCooldownSec: 1.35,
    lungeSpeed: 7.5,
    hitStunSec: 0.12,
    vulnerabilityDurationSec: 12.0,
  },
  arcaneScholarBoss: {
    id: 'arcaneScholarBoss',
    name: 'The Arcane Scholar',
    isBoss: true,
    maxHp: 150,
    damage: 22,
    radius: 0.8,
    height: 2.4,
    patrolSpeed: 2.1,
    chaseSpeed: 4.4,
    tau: 0.25,
    maxAccel: 22,
    detectRange: 18,
    attackRange: 3.1,
    windupSec: 0.62,
    activeSec: 0.22,
    recoverSec: 0.55,
    attackCooldownSec: 1.15,
    lungeSpeed: 9.5,
    hitStunSec: 0.12,
    vulnerabilityDurationSec: 11.0,
  },
  keeperEquationsBoss: {
    id: 'keeperEquationsBoss',
    name: 'Abyssal Warden',
    isBoss: true,
    maxHp: 175,
    damage: 24,
    radius: 0.9,
    height: 2.65,
    patrolSpeed: 2.2,
    chaseSpeed: 4.8,
    tau: 0.22,
    maxAccel: 26,
    detectRange: 20,
    attackRange: 3.2,
    windupSec: 0.58,
    activeSec: 0.22,
    recoverSec: 0.55,
    attackCooldownSec: 1.05,
    lungeSpeed: 10.5,
    hitStunSec: 0.12,
    vulnerabilityDurationSec: 11.0,
  },
  eternalArchivistBoss: {
    id: 'eternalArchivistBoss',
    name: 'The Eternal Archivist',
    isBoss: true,
    maxHp: 225,
    damage: 26,
    radius: 1.05,
    height: 3.0,
    patrolSpeed: 2.5,
    chaseSpeed: 5.3,
    tau: 0.19, // Dynamic acceleration shifts feel responsive & intense
    maxAccel: 30,
    detectRange: 24,
    attackRange: 3.5,
    windupSec: 0.54,
    activeSec: 0.24,
    recoverSec: 0.5,
    attackCooldownSec: 0.95,
    lungeSpeed: 12.2,
    hitStunSec: 0.1,
    vulnerabilityDurationSec: 10.5,
  },
};

export interface EnergyDoorConfig {
  id: string;
  label: string;
  k: number; // Must be > 0 for true local minimum
  a: number; // Target dial position in [0, 1]
  eMin: number;
  tolerance: number; // |E'(x)| <= tolerance
  dwellTime: number; // Seconds required continuously in tolerance
  initialX: number;
}

export interface OptimizationChestConfig {
  id: string;
  label: string;
  kx: number; // Must be > 0
  ky: number; // Must be > 0
  a: number; // Target x in [0, 1]
  b: number; // Target y in [0, 1]
  eMin: number;
  tolerance: number; // ||grad E(x,y)|| <= tolerance
  dwellTime: number;
  initialX: number;
  initialY: number;
}

export interface HarmonicTrapConfig {
  id: string;
  label: string;
  axis: 'x' | 'z';
  p0: number;
  amplitude: number; // A
  omega: number; // Angular frequency rad/s
  phase: number; // phi radians
  halfExtents: { x: number; y: number; z: number };
  damage: number;
}

