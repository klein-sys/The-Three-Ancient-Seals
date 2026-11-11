import { ENEMY_ARCHETYPES, EnemyArchetypeConfig } from '../config/gameConfig';
import { stepSteeringVelocity } from '../math/calculusModels';
import { BoxCollider, hasLineOfSight3D, resolveCircleXZAgainstBoxes } from '../math/geometry';
import { EnemySpawnSpec } from '../world/levelData';

export type EnemyState = 'patrol' | 'chase' | 'windup' | 'attack' | 'recover' | 'stagger' | 'dead';

export interface EnemyInstance {
  id: string;
  spec: EnemySpawnSpec;
  config: EnemyArchetypeConfig;
  x: number;
  z: number;
  vx: number;
  vz: number;
  yaw: number;
  hp: number;
  maxHp: number;
  state: EnemyState;
  stateTimer: number;
  attackCooldownTimer: number;
  patrolForward: boolean;
  shielded: boolean;
  vulnerabilityTimer: number;
  activeShieldPylonId?: string;
  phase2Activated: boolean;
  hitPlayerThisAttack: boolean;
  hitFlashTimer: number;
}

export interface EnemyStepEvents {
  telegraphedIds: string[];
  playerDamageEvents: Array<{ enemyId: string; damage: number }>;
  shieldReactivatedPylonIds: string[];
}

export function createEnemyInstance(spec: EnemySpawnSpec, isDefeated: boolean): EnemyInstance {
  const cfg = ENEMY_ARCHETYPES[spec.archetypeId];
  return {
    id: spec.id,
    spec,
    config: cfg,
    x: spec.x,
    z: spec.z,
    vx: 0,
    vz: 0,
    yaw: 0,
    hp: isDefeated ? 0 : cfg.maxHp,
    maxHp: cfg.maxHp,
    state: isDefeated ? 'dead' : 'patrol',
    stateTimer: 0,
    attackCooldownTimer: 0,
    patrolForward: true,
    shielded: !isDefeated && Boolean(spec.shieldPylonId),
    vulnerabilityTimer: 0,
    activeShieldPylonId: spec.shieldPylonId,
    phase2Activated: false,
    hitPlayerThisAttack: false,
    hitFlashTimer: 0,
  };
}

export function damageEnemy(
  enemy: EnemyInstance,
  amount: number
): { hit: boolean; defeated: boolean; phase2Triggered: boolean } {
  if (enemy.state === 'dead' || enemy.shielded) {
    return { hit: false, defeated: false, phase2Triggered: false };
  }
  enemy.hp = Math.max(0, enemy.hp - amount);
  enemy.hitFlashTimer = 0.14;

  if (enemy.hp <= 0) {
    enemy.state = 'dead';
    enemy.vx = 0;
    enemy.vz = 0;
    return { hit: true, defeated: true, phase2Triggered: false };
  }

  // Bosses resist full stun except brief flash; Phase 2 Archivist shield trigger
  if (!enemy.config.isBoss) {
    enemy.state = 'stagger';
    enemy.stateTimer = enemy.config.hitStunSec;
    enemy.vx *= 0.35;
    enemy.vz *= 0.35;
  }

  let phase2Triggered = false;
  if (
    enemy.spec.secondPhasePylonId &&
    !enemy.phase2Activated &&
    enemy.hp <= enemy.maxHp * 0.55
  ) {
    enemy.phase2Activated = true;
    enemy.shielded = true;
    enemy.vulnerabilityTimer = 0;
    enemy.activeShieldPylonId = enemy.spec.secondPhasePylonId;
    phase2Triggered = true;
  }

  return { hit: true, defeated: false, phase2Triggered };
}

export function openBossVulnerability(enemy: EnemyInstance): void {
  if (enemy.state === 'dead') return;
  enemy.shielded = false;
  enemy.vulnerabilityTimer = enemy.config.vulnerabilityDurationSec ?? 10;
}

export function stepEnemies(
  enemies: EnemyInstance[],
  playerPos: { x: number; z: number; radius: number },
  solidBoxes: readonly BoxCollider[],
  dt: number
): EnemyStepEvents {
  const events: EnemyStepEvents = {
    telegraphedIds: [],
    playerDamageEvents: [],
    shieldReactivatedPylonIds: [],
  };

  for (const e of enemies) {
    if (e.state === 'dead') continue;

    if (e.hitFlashTimer > 0) e.hitFlashTimer = Math.max(0, e.hitFlashTimer - dt);
    if (e.attackCooldownTimer > 0) e.attackCooldownTimer = Math.max(0, e.attackCooldownTimer - dt);

    // Boss vulnerability window countdown
    if (e.config.isBoss && !e.shielded && e.activeShieldPylonId) {
      e.vulnerabilityTimer -= dt;
      if (e.vulnerabilityTimer <= 0) {
        e.vulnerabilityTimer = 0;
        e.shielded = true;
        events.shieldReactivatedPylonIds.push(e.activeShieldPylonId);
      }
    }

    const dxToPlayer = playerPos.x - e.x;
    const dzToPlayer = playerPos.z - e.z;
    const distToPlayer = Math.hypot(dxToPlayer, dzToPlayer);
    const canSeePlayer =
      distToPlayer <= e.config.detectRange &&
      hasLineOfSight3D(e.x, 1.1, e.z, playerPos.x, 1.1, playerPos.z, solidBoxes);

    let targetVel = { x: 0, z: 0 };

    if (e.state === 'stagger') {
      e.stateTimer -= dt;
      if (e.stateTimer <= 0) {
        e.state = canSeePlayer ? 'chase' : 'patrol';
      }
    } else if (e.state === 'windup') {
      e.stateTimer -= dt;
      // Turn toward player during windup so attack direction stays telegraphed
      if (distToPlayer > 0.05) {
        e.yaw = Math.atan2(-dxToPlayer, -dzToPlayer);
      }
      if (e.stateTimer <= 0) {
        e.state = 'attack';
        e.stateTimer = e.config.activeSec;
        e.hitPlayerThisAttack = false;
        const speedBoost = e.phase2Activated ? 1.25 : 1.0;
        const fx = -Math.sin(e.yaw);
        const fz = -Math.cos(e.yaw);
        targetVel = { x: fx * e.config.lungeSpeed * speedBoost, z: fz * e.config.lungeSpeed * speedBoost };
      }
    } else if (e.state === 'attack') {
      e.stateTimer -= dt;
      const fx = -Math.sin(e.yaw);
      const fz = -Math.cos(e.yaw);
      const speedBoost = e.phase2Activated ? 1.25 : 1.0;
      targetVel = { x: fx * e.config.lungeSpeed * speedBoost, z: fz * e.config.lungeSpeed * speedBoost };

      const facingStrike = distToPlayer < .01 || (dxToPlayer*fx+dzToPlayer*fz)/distToPlayer > -.1;
      if (!e.hitPlayerThisAttack && facingStrike && distToPlayer <= e.config.radius + playerPos.radius + 0.95 &&
          hasLineOfSight3D(e.x,1.1,e.z,playerPos.x,1.1,playerPos.z,solidBoxes)) {
        e.hitPlayerThisAttack = true;
        events.playerDamageEvents.push({ enemyId: e.id, damage: e.config.damage });
      }

      if (e.stateTimer <= 0) {
        e.state = 'recover';
        e.stateTimer = e.config.recoverSec;
        e.attackCooldownTimer = e.config.attackCooldownSec;
      }
    } else if (e.state === 'recover') {
      e.stateTimer -= dt;
      if (e.stateTimer <= 0) {
        e.state = canSeePlayer ? 'chase' : 'patrol';
      }
    } else if (e.state === 'chase') {
      if (!canSeePlayer && distToPlayer > e.config.detectRange * 1.35) {
        e.state = 'patrol';
      } else if (distToPlayer <= e.config.attackRange && e.attackCooldownTimer <= 0) {
        e.state = 'windup';
        e.stateTimer = e.config.windupSec;
        events.telegraphedIds.push(e.id);
      } else if (distToPlayer > 0.1) {
        const chaseBoost = e.phase2Activated ? 1.22 : 1.0;
        const dirX = dxToPlayer / distToPlayer;
        const dirZ = dzToPlayer / distToPlayer;
        targetVel = { x: dirX * e.config.chaseSpeed * chaseBoost, z: dirZ * e.config.chaseSpeed * chaseBoost };
        e.yaw = Math.atan2(-dirX, -dirZ);
      }
    } else {
      // Patrol
      if (canSeePlayer) {
        e.state = 'chase';
      } else {
        const targetX = e.spec.x + (e.patrolForward ? e.spec.patrolOffset.x : -e.spec.patrolOffset.x);
        const targetZ = e.spec.z + (e.patrolForward ? e.spec.patrolOffset.z : -e.spec.patrolOffset.z);
        const px = targetX - e.x;
        const pz = targetZ - e.z;
        const pDist = Math.hypot(px, pz);
        if (pDist < 0.35) {
          e.patrolForward = !e.patrolForward;
        } else {
          targetVel = {
            x: (px / pDist) * e.config.patrolSpeed,
            z: (pz / pDist) * e.config.patrolSpeed,
          };
          e.yaw = Math.atan2(-px / pDist, -pz / pDist);
        }
      }
    }

    // Apply calculus acceleration steering: a = (v_target - v) / tau
    const tau = e.phase2Activated ? e.config.tau * 0.8 : e.config.tau;
    const steered = stepSteeringVelocity({ x: e.vx, z: e.vz }, targetVel, tau, e.config.maxAccel, dt);
    e.vx = steered.velocity.x;
    e.vz = steered.velocity.z;

    const nextX = e.x + e.vx * dt;
    const nextZ = e.z + e.vz * dt;
    const resolved = resolveCircleXZAgainstBoxes(nextX, nextZ, e.config.radius, solidBoxes, 0, e.config.height);
    if (resolved.collided) {
      e.vx *= 0.4;
      e.vz *= 0.4;
    }
    e.x = resolved.x;
    e.z = resolved.z;
  }

  return events;
}

