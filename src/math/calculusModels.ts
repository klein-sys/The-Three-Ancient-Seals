/**
 * Concrete Differential Calculus models driving mechanisms, traps, shields, and enemy movement.
 */

export interface Energy1DEvaluation {
  x: number;
  energy: number;
  firstDerivative: number; // E'(x)
  secondDerivative: number; // E''(x)
  isStationary: boolean; // |E'(x)| <= tolerance
  isMinimumCurvature: boolean; // E''(x) > 0
  isMinimumConditionMet: boolean; // Both stationary AND positive curvature
  dwellElapsed: number;
  dwellProgress: number; // 0..1
  stabilized: boolean;
  closeness: number; // 0..1 visual proximity to minimum
}

export class EnergyStabilizerModel {
  public readonly id: string;
  public readonly label: string;
  public readonly k: number;
  public readonly a: number;
  public readonly eMin: number;
  public readonly tolerance: number;
  public readonly dwellTime: number;

  public x: number;
  public dwellElapsed = 0;
  public stabilized = false;

  constructor(params: {
    id: string;
    label: string;
    k: number;
    a: number;
    eMin: number;
    tolerance: number;
    dwellTime: number;
    initialX?: number;
    allowInvalidForTest?: boolean;
  }) {
    if (!params.allowInvalidForTest) {
      if (!(params.k > 0)) {
        throw new Error(`EnergyStabilizerModel(${params.id}): k must be > 0, got ${params.k}`);
      }
      if (params.a < 0 || params.a > 1) {
        throw new Error(`EnergyStabilizerModel(${params.id}): target a must be inside [0, 1], got ${params.a}`);
      }
    }
    this.id = params.id;
    this.label = params.label;
    this.k = params.k;
    this.a = params.a;
    this.eMin = params.eMin;
    this.tolerance = params.tolerance;
    this.dwellTime = Math.max(0.05, params.dwellTime);
    this.x = EnergyStabilizerModel.clamp01(params.initialX ?? 0.15);
  }

  public static clamp01(v: number): number {
    return Math.max(0, Math.min(1, v));
  }

  public setDial(x: number): void {
    this.x = EnergyStabilizerModel.clamp01(x);
  }

  public adjustDial(delta: number): void {
    this.setDial(this.x + delta);
  }

  public resetForRetry(initialX?: number): void {
    if (initialX !== undefined) {
      this.x = EnergyStabilizerModel.clamp01(initialX);
    }
    this.dwellElapsed = 0;
    this.stabilized = false;
  }

  public evaluateStatic(x: number = this.x): Omit<Energy1DEvaluation, 'dwellElapsed' | 'dwellProgress' | 'stabilized'> {
    const cx = EnergyStabilizerModel.clamp01(x);
    const diff = cx - this.a;
    const energy = this.k * diff * diff + this.eMin;
    const firstDerivative = 2 * this.k * diff;
    const secondDerivative = 2 * this.k;
    const isStationary = Math.abs(firstDerivative) <= this.tolerance;
    const isMinimumCurvature = secondDerivative > 0;
    const isMinimumConditionMet = isStationary && isMinimumCurvature;

    const maxSlope = Math.max(0.001, Math.abs(2 * this.k));
    const closeness = Math.max(0, Math.min(1, 1 - Math.abs(firstDerivative) / (maxSlope * 0.65)));

    return {
      x: cx,
      energy,
      firstDerivative,
      secondDerivative,
      isStationary,
      isMinimumCurvature,
      isMinimumConditionMet,
      closeness,
    };
  }

  public step(dt: number): Energy1DEvaluation {
    const evalState = this.evaluateStatic(this.x);
    if (!this.stabilized) {
      if (evalState.isMinimumConditionMet) {
        this.dwellElapsed = Math.min(this.dwellTime, this.dwellElapsed + Math.max(0, dt));
        if (this.dwellElapsed >= this.dwellTime) {
          this.stabilized = true;
        }
      } else {
        // Reset stabilization progress when condition fails
        this.dwellElapsed = 0;
      }
    }

    return {
      ...evalState,
      dwellElapsed: this.dwellElapsed,
      dwellProgress: this.stabilized ? 1 : this.dwellElapsed / this.dwellTime,
      stabilized: this.stabilized,
    };
  }
}

export interface HarmonicKinematics {
  t: number;
  position: number; // p(t) = p0 + A sin(omega * t + phi)
  velocity: number; // v(t) = A * omega * cos(omega * t + phi)
  acceleration: number; // a(t) = -A * omega^2 * sin(omega * t + phi)
  normalizedSpeed: number; // |v(t)| / (|A| * |omega|) in [0, 1]
}

export class HarmonicTrapModel {
  public readonly id: string;
  public readonly p0: number;
  public readonly amplitude: number;
  public readonly omega: number;
  public readonly phase: number;

  constructor(params: {
    id: string;
    p0: number;
    amplitude: number;
    omega: number;
    phase: number;
  }) {
    this.id = params.id;
    this.p0 = params.p0;
    this.amplitude = params.amplitude;
    this.omega = params.omega;
    this.phase = params.phase;
  }

  public evaluate(t: number): HarmonicKinematics {
    const angle = this.omega * t + this.phase;
    const sinA = Math.sin(angle);
    const cosA = Math.cos(angle);
    const position = this.p0 + this.amplitude * sinA;
    const velocity = this.amplitude * this.omega * cosA;
    const acceleration = -this.amplitude * this.omega * this.omega * sinA;
    const maxSpeed = Math.max(1e-5, Math.abs(this.amplitude * this.omega));
    const normalizedSpeed = Math.min(1, Math.abs(velocity) / maxSpeed);

    return { t, position, velocity, acceleration, normalizedSpeed };
  }
}

export interface CrystalAxisFeedback {
  value: number;
  partialDerivative: number;
  secondDerivative: number;
  closeness: number; // 0..1
  directionHint: -1 | 0 | 1; // -1: decrease value, +1: increase value, 0: aligned
}

export interface Optimization2DEvaluation {
  x: number;
  y: number;
  energy: number;
  gradX: number; // dE/dx = 2 kx (x - a)
  gradY: number; // dE/dy = 2 ky (y - b)
  gradientMagnitude: number;
  hessianXX: number; // 2 kx
  hessianYY: number; // 2 ky
  isStationary: boolean;
  isPositiveDefiniteMinimum: boolean; // 2 kx > 0 && 2 ky > 0
  isMinimumConditionMet: boolean;
  dwellElapsed: number;
  dwellProgress: number;
  unlocked: boolean;
  closeness: number;
  xFeedback: CrystalAxisFeedback;
  yFeedback: CrystalAxisFeedback;
}

export class OptimizationChestModel {
  public readonly id: string;
  public readonly label: string;
  public readonly kx: number;
  public readonly ky: number;
  public readonly a: number;
  public readonly b: number;
  public readonly eMin: number;
  public readonly tolerance: number;
  public readonly dwellTime: number;

  public x: number;
  public y: number;
  public dwellElapsed = 0;
  public unlocked = false;

  constructor(params: {
    id: string;
    label: string;
    kx: number;
    ky: number;
    a: number;
    b: number;
    eMin: number;
    tolerance: number;
    dwellTime: number;
    initialX?: number;
    initialY?: number;
    allowInvalidForTest?: boolean;
  }) {
    if (!params.allowInvalidForTest) {
      if (!(params.kx > 0) || !(params.ky > 0)) {
        throw new Error(`OptimizationChestModel(${params.id}): kx and ky must be > 0`);
      }
      if (params.a < 0 || params.a > 1 || params.b < 0 || params.b > 1) {
        throw new Error(`OptimizationChestModel(${params.id}): targets (a, b) must lie in [0, 1]`);
      }
    }
    this.id = params.id;
    this.label = params.label;
    this.kx = params.kx;
    this.ky = params.ky;
    this.a = params.a;
    this.b = params.b;
    this.eMin = params.eMin;
    this.tolerance = params.tolerance;
    this.dwellTime = Math.max(0.05, params.dwellTime);
    this.x = EnergyStabilizerModel.clamp01(params.initialX ?? 0.2);
    this.y = EnergyStabilizerModel.clamp01(params.initialY ?? 0.2);
  }

  public setCrystals(x: number, y: number): void {
    this.x = EnergyStabilizerModel.clamp01(x);
    this.y = EnergyStabilizerModel.clamp01(y);
  }

  public adjustCrystals(dx: number, dy: number): void {
    this.setCrystals(this.x + dx, this.y + dy);
  }

  public resetForRetry(initialX?: number, initialY?: number): void {
    if (initialX !== undefined) this.x = EnergyStabilizerModel.clamp01(initialX);
    if (initialY !== undefined) this.y = EnergyStabilizerModel.clamp01(initialY);
    this.dwellElapsed = 0;
    this.unlocked = false;
  }

  public evaluateStatic(
    x: number = this.x,
    y: number = this.y
  ): Omit<Optimization2DEvaluation, 'dwellElapsed' | 'dwellProgress' | 'unlocked'> {
    const cx = EnergyStabilizerModel.clamp01(x);
    const cy = EnergyStabilizerModel.clamp01(y);
    const dx = cx - this.a;
    const dy = cy - this.b;

    const energy = this.kx * dx * dx + this.ky * dy * dy + this.eMin;
    const gradX = 2 * this.kx * dx;
    const gradY = 2 * this.ky * dy;
    const gradientMagnitude = Math.hypot(gradX, gradY);

    const hessianXX = 2 * this.kx;
    const hessianYY = 2 * this.ky;
    const isStationary = gradientMagnitude <= this.tolerance;
    const isPositiveDefiniteMinimum = hessianXX > 0 && hessianYY > 0;
    const isMinimumConditionMet = isStationary && isPositiveDefiniteMinimum;

    const axisTol = this.tolerance * 0.65;
    const xCloseness = Math.max(0, Math.min(1, 1 - Math.abs(gradX) / Math.max(0.001, Math.abs(2 * this.kx) * 0.65)));
    const yCloseness = Math.max(0, Math.min(1, 1 - Math.abs(gradY) / Math.max(0.001, Math.abs(2 * this.ky) * 0.65)));

    const xHint: -1 | 0 | 1 = Math.abs(gradX) <= axisTol ? 0 : gradX > 0 ? -1 : 1;
    const yHint: -1 | 0 | 1 = Math.abs(gradY) <= axisTol ? 0 : gradY > 0 ? -1 : 1;

    const maxGrad = Math.max(0.001, Math.hypot(2 * this.kx, 2 * this.ky) * 0.65);
    const closeness = Math.max(0, Math.min(1, 1 - gradientMagnitude / maxGrad));

    return {
      x: cx,
      y: cy,
      energy,
      gradX,
      gradY,
      gradientMagnitude,
      hessianXX,
      hessianYY,
      isStationary,
      isPositiveDefiniteMinimum,
      isMinimumConditionMet,
      closeness,
      xFeedback: {
        value: cx,
        partialDerivative: gradX,
        secondDerivative: hessianXX,
        closeness: xCloseness,
        directionHint: xHint,
      },
      yFeedback: {
        value: cy,
        partialDerivative: gradY,
        secondDerivative: hessianYY,
        closeness: yCloseness,
        directionHint: yHint,
      },
    };
  }

  public step(dt: number): Optimization2DEvaluation {
    const evalState = this.evaluateStatic(this.x, this.y);
    if (!this.unlocked) {
      if (evalState.isMinimumConditionMet) {
        this.dwellElapsed = Math.min(this.dwellTime, this.dwellElapsed + Math.max(0, dt));
        if (this.dwellElapsed >= this.dwellTime) {
          this.unlocked = true;
        }
      } else {
        this.dwellElapsed = 0;
      }
    }

    return {
      ...evalState,
      dwellElapsed: this.dwellElapsed,
      dwellProgress: this.unlocked ? 1 : this.dwellElapsed / this.dwellTime,
      unlocked: this.unlocked,
    };
  }
}

export interface Vec2 {
  x: number;
  z: number;
}

/**
 * Computes enemy acceleration using a = (v_target - v) / tau, clamped by maxAccel.
 */
export function stepSteeringVelocity(
  currentVel: Vec2,
  targetVel: Vec2,
  tau: number,
  maxAccel: number,
  dt: number
): { velocity: Vec2; acceleration: Vec2 } {
  const safeTau = Math.max(0.02, tau);
  let ax = (targetVel.x - currentVel.x) / safeTau;
  let az = (targetVel.z - currentVel.z) / safeTau;
  const accelMag = Math.hypot(ax, az);

  if (accelMag > maxAccel && accelMag > 1e-6) {
    const scale = maxAccel / accelMag;
    ax *= scale;
    az *= scale;
  }

  const safeDt = Math.max(0, dt);
  return {
    velocity: {
      x: currentVel.x + ax * safeDt,
      z: currentVel.z + az * safeDt,
    },
    acceleration: { x: ax, z: az },
  };
}

