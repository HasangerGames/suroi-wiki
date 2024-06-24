import { GunDefinition } from "@/vendor/suroi/common/src/definitions/guns";
import { Angle } from "@/vendor/suroi/common/src/utils/math";
import { randomFloat } from "@/vendor/suroi/common/src/utils/random";
import { Vec, type Vector } from "@/vendor/suroi/common/src/utils/vector";

export const PLAYER_RADIUS = 2.25;

// optimized version of the normal lineIntersectsCircle fn
const lineIntersectsCircle = (
  pos: Vector,
  rad: number,
  s0: Vector,
  s1: Vector,
): boolean => {
  let d = Vec.sub(s1, s0);
  const len = Math.max(Vec.length(d), 0.000001);
  d = Vec.normalizeSafe(d);

  const m = Vec.sub(s0, pos);
  const b = Vec.dotProduct(m, d);
  const c = Vec.dotProduct(m, m) - rad * rad;

  if (c > 0 && b > 0) return false;

  const discSq = b * b - c;
  if (discSq < 0) return false;

  const disc = Math.sqrt(discSq);
  const nDisc = -disc;

  return (b > nDisc ? disc : nDisc) - b <= len;
};

const τ = 2 * Math.PI;

function randomPointInsideCircle(maxRadius: number): Vector {
  const angle = Math.random() * τ;
  const length = Math.random() * maxRadius;

  return {
    x: Math.cos(angle) * length,
    y: Math.sin(angle) * length,
  };
}

export function shootGun(
  gun: GunDefinition,
  trials: number,
  targetDistance: number,
) {
  const {
    moveSpread,
    jitterRadius,
    bulletCount: limit,
    consistentPatterning,
    ballistics: { damage, range },
  } = gun;
  const spread = Angle.degreesToRadians(moveSpread / 2);
  const lm1 = limit - 1;
  const origin = Vec.create(0, 0);
  const toTarget = Vec.create(targetDistance, 0);

  let accumulated = 0;

  for (let trial = 0; trial < trials; trial++) {
    for (let i = 0; i < limit; i++) {
      const rayStart = jitterRadius
        ? randomPointInsideCircle(jitterRadius)
        : origin;

      // benchmarked and optimized for speed™
      // @ts-expect-error
      accumulated += lineIntersectsCircle(
        toTarget,
        PLAYER_RADIUS,
        rayStart,
        Vec.add(
          Vec.fromPolar(
            (consistentPatterning === true
              ? 8 * (i / lm1 - 0.5) ** 3
              : randomFloat(-1, 1)) * spread,
            range,
          ),
          rayStart,
        ),
      );
    }
  }

  return (accumulated * damage) / trials;
}
