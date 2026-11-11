import { COMBAT_CONFIG, PLAYER_CONFIG } from '../config/gameConfig';
import { BoxCollider, hasLineOfSight3D } from '../math/geometry';

export type SwordPhase = 'idle' | 'windup' | 'active' | 'recovery';

export interface CombatTarget {
  id: string;
  x: number;
  z: number;
  radius: number;
  alive: boolean;
  shielded: boolean;
}

export interface CombatHitResult {
  targetId: string;
  blockedByShield: boolean;
}

export class CombatController {
  public swordPhase: SwordPhase = 'idle';
  public phaseTimer = 0;
  public cooldownTimer = 0;
  private hitTargetsThisSwing = new Set<string>();

  public dodgeTimer = 0;
  public dodgeInvulnTimer = 0;
  public dodgeCooldownTimer = 0;
  public dodgeDirX = 0;
  public dodgeDirZ = -1;

  public playerHitInvulnTimer = 0;

  public reset(): void {
    this.swordPhase = 'idle';
    this.phaseTimer = 0;
    this.cooldownTimer = 0;
    this.hitTargetsThisSwing.clear();
    this.dodgeTimer = 0;
    this.dodgeInvulnTimer = 0;
    this.dodgeCooldownTimer = 0;
    this.playerHitInvulnTimer = 0;
  }

  public isDodging(): boolean {
    return this.dodgeTimer > 0;
  }

  public isPlayerInvulnerable(): boolean {
    return this.dodgeInvulnTimer > 0 || this.playerHitInvulnTimer > 0;
  }

  public canStartAttack(): boolean {
    return this.swordPhase === 'idle' && this.cooldownTimer <= 0 && this.dodgeTimer <= 0;
  }

  public tryStartAttack(): boolean {
    if (!this.canStartAttack()) return false;
    this.swordPhase = 'windup';
    this.phaseTimer = COMBAT_CONFIG.swordWindupSec;
    this.hitTargetsThisSwing.clear();
    return true;
  }

  public tryStartDodge(dirX: number, dirZ: number): boolean {
    if (this.dodgeTimer > 0 || this.dodgeCooldownTimer > 0) return false;
    const len = Math.hypot(dirX, dirZ);
    if (len > 1e-4) {
      this.dodgeDirX = dirX / len;
      this.dodgeDirZ = dirZ / len;
    }
    this.dodgeTimer = PLAYER_CONFIG.dodgeDuration;
    this.dodgeInvulnTimer = PLAYER_CONFIG.dodgeInvulnerableWindow;
    this.dodgeCooldownTimer = PLAYER_CONFIG.dodgeCooldown;
    // Cancel active swing cleanly on dodge
    this.swordPhase = 'idle';
    this.phaseTimer = 0;
    this.hitTargetsThisSwing.clear();
    return true;
  }

  public step(
    dt: number,
    playerPos: { x: number; z: number; yaw: number },
    targets: readonly CombatTarget[],
    obstructionBoxes: readonly BoxCollider[]
  ): CombatHitResult[] {
    const hits: CombatHitResult[] = [];

    if (this.dodgeTimer > 0) this.dodgeTimer = Math.max(0, this.dodgeTimer - dt);
    if (this.dodgeInvulnTimer > 0) this.dodgeInvulnTimer = Math.max(0, this.dodgeInvulnTimer - dt);
    if (this.dodgeCooldownTimer > 0) this.dodgeCooldownTimer = Math.max(0, this.dodgeCooldownTimer - dt);
    if (this.playerHitInvulnTimer > 0) this.playerHitInvulnTimer = Math.max(0, this.playerHitInvulnTimer - dt);
    if (this.cooldownTimer > 0 && this.swordPhase === 'idle') {
      this.cooldownTimer = Math.max(0, this.cooldownTimer - dt);
    }

    if (this.swordPhase !== 'idle') {
      this.phaseTimer -= dt;
      let passedActiveThisStep = this.swordPhase === 'active';

      while (this.swordPhase !== 'idle' && this.phaseTimer <= 0) {
        if (this.swordPhase === 'windup') {
          this.swordPhase = 'active';
          this.phaseTimer += COMBAT_CONFIG.swordActiveSec;
          passedActiveThisStep = true;
        } else if (this.swordPhase === 'active') {
          this.swordPhase = 'recovery';
          this.phaseTimer += COMBAT_CONFIG.swordRecoverySec;
        } else if (this.swordPhase === 'recovery') {
          this.swordPhase = 'idle';
          this.phaseTimer = 0;
          this.cooldownTimer = COMBAT_CONFIG.swordCooldownSec;
          this.hitTargetsThisSwing.clear();
        }
      }

      if (passedActiveThisStep && this.swordPhase !== 'idle') {
        // Check targets only during active frames
        const fwdX = -Math.sin(playerPos.yaw);
        const fwdZ = -Math.cos(playerPos.yaw);

        for (const t of targets) {
          if (!t.alive || this.hitTargetsThisSwing.has(t.id)) continue;

          const dx = t.x - playerPos.x;
          const dz = t.z - playerPos.z;
          const dist = Math.hypot(dx, dz);
          if (dist > COMBAT_CONFIG.swordReach + t.radius) continue;

          if (dist > 0.05) {
            const dot = (dx / dist) * fwdX + (dz / dist) * fwdZ;
            const angle = Math.acos(Math.max(-1, Math.min(1, dot)));
            if (angle > COMBAT_CONFIG.swordHalfAngleRad) continue;
          }

          // Obstruction check against solid walls and closed doors
          const clearLOS = hasLineOfSight3D(
            playerPos.x,
            1.1,
            playerPos.z,
            t.x,
            1.1,
            t.z,
            obstructionBoxes
          );
          if (!clearLOS) continue;

          this.hitTargetsThisSwing.add(t.id);
          hits.push({ targetId: t.id, blockedByShield: t.shielded });
        }
      }
    }

    return hits;
  }

  /**
   * Returns animated sword sweep angle in radians for visual feedback.
   */
  public getSwordSwingAngle(): number {
    if (this.swordPhase === 'windup') {
      const p = 1 - this.phaseTimer / COMBAT_CONFIG.swordWindupSec;
      return -0.75 * p;
    }
    if (this.swordPhase === 'active') {
      const p = 1 - this.phaseTimer / COMBAT_CONFIG.swordActiveSec;
      return -0.75 + 2.35 * p;
    }
    if (this.swordPhase === 'recovery') {
      const p = 1 - this.phaseTimer / COMBAT_CONFIG.swordRecoverySec;
      return 1.6 * (1 - p);
    }
    return 0;
  }
}
