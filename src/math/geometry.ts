/**
 * Collision, raycast, and swept intersection utilities shared by player, enemies, traps, camera, and combat.
 */

export interface BoxCollider {
  id: string;
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
  minZ: number;
  maxZ: number;
  blocksSight?: boolean;
}

export function resolveCircleXZAgainstBoxes(
  cx: number,
  cz: number,
  radius: number,
  boxes: readonly BoxCollider[],
  entityYMin = 0,
  entityYMax = 1.75
): { x: number; z: number; collided: boolean } {
  let x = cx;
  let z = cz;
  let collided = false;

  // Iterate twice so corner contacts resolve cleanly
  for (let pass = 0; pass < 2; pass++) {
    for (const box of boxes) {
      if (entityYMax <= box.minY || entityYMin >= box.maxY) continue;

      const closestX = Math.max(box.minX, Math.min(x, box.maxX));
      const closestZ = Math.max(box.minZ, Math.min(z, box.maxZ));

      const dx = x - closestX;
      const dz = z - closestZ;
      const distSq = dx * dx + dz * dz;

      if (distSq < radius * radius) {
        collided = true;
        const dist = Math.sqrt(distSq);
        if (dist > 1e-6) {
          const push = radius - dist;
          x += (dx / dist) * push;
          z += (dz / dist) * push;
        } else {
          // Inside AABB center fallback: push out along nearest face
          const penLeft = Math.abs(x - box.minX);
          const penRight = Math.abs(box.maxX - x);
          const penFront = Math.abs(z - box.minZ);
          const penBack = Math.abs(box.maxZ - z);
          const minPen = Math.min(penLeft, penRight, penFront, penBack);

          if (minPen === penLeft) x = box.minX - radius;
          else if (minPen === penRight) x = box.maxX + radius;
          else if (minPen === penFront) z = box.minZ - radius;
          else z = box.maxZ + radius;
        }
      }
    }
  }

  return { x, z, collided };
}

/**
 * 3D slab ray-vs-AABB intersection returning nearest hit t in [0, maxDist] or null.
 */
export function raycastAgainstBoxes(
  originX: number,
  originY: number,
  originZ: number,
  dirX: number,
  dirY: number,
  dirZ: number,
  maxDist: number,
  boxes: readonly BoxCollider[]
): number | null {
  let closestT: number | null = null;

  for (const box of boxes) {
    if (box.blocksSight === false) continue;

    let tMin = 0;
    let tMax = maxDist;

    const axes: Array<[number, number, number, number]> = [
      [originX, dirX, box.minX, box.maxX],
      [originY, dirY, box.minY, box.maxY],
      [originZ, dirZ, box.minZ, box.maxZ],
    ];

    let hit = true;
    for (const [orig, dir, bMin, bMax] of axes) {
      if (Math.abs(dir) < 1e-8) {
        if (orig < bMin || orig > bMax) {
          hit = false;
          break;
        }
      } else {
        const inv = 1 / dir;
        let t1 = (bMin - orig) * inv;
        let t2 = (bMax - orig) * inv;
        if (t1 > t2) {
          const tmp = t1;
          t1 = t2;
          t2 = tmp;
        }
        tMin = Math.max(tMin, t1);
        tMax = Math.min(tMax, t2);
        if (tMin > tMax) {
          hit = false;
          break;
        }
      }
    }

    if (hit && tMin >= 0 && tMin <= maxDist) {
      if (closestT === null || tMin < closestT) {
        closestT = tMin;
      }
    }
  }

  return closestT;
}

export function hasLineOfSight3D(
  ax: number,
  ay: number,
  az: number,
  bx: number,
  by: number,
  bz: number,
  boxes: readonly BoxCollider[]
): boolean {
  const dx = bx - ax;
  const dy = by - ay;
  const dz = bz - az;
  const dist = Math.hypot(dx, dy, dz);
  if (dist < 1e-5) return true;
  const hitT = raycastAgainstBoxes(ax, ay, az, dx / dist, dy / dist, dz / dist, dist, boxes);
  return hitT === null || hitT >= dist - 0.05;
}

/**
 * Swept collision check between a moving box (from prevCenter to currCenter) and a player circle in XZ.
 */
export function sweptBoxIntersectsCircleXZ(
  prevX: number,
  prevZ: number,
  currX: number,
  currZ: number,
  halfW: number,
  halfD: number,
  circleX: number,
  circleZ: number,
  circleRadius: number
): boolean {
  // Expand box by circle radius (Minkowski sum) and test line segment vs expanded AABB
  const steps = Math.max(1, Math.ceil(Math.hypot(currX - prevX, currZ - prevZ) / 0.25));
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const bx = prevX + (currX - prevX) * t;
    const bz = prevZ + (currZ - prevZ) * t;
    const closestX = Math.max(bx - halfW, Math.min(circleX, bx + halfW));
    const closestZ = Math.max(bz - halfD, Math.min(circleZ, bz + halfD));
    const dx = circleX - closestX;
    const dz = circleZ - closestZ;
    if (dx * dx + dz * dz <= circleRadius * circleRadius) {
      return true;
    }
  }
  return false;
}

