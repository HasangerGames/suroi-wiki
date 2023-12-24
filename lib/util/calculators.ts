import { GunDefinition } from "@/vendor/suroi/common/src/definitions/guns";
import {
  Angle,
  Collision,
} from "@/vendor/suroi/common/src/utils/math";
import {
  randomFloat,
  randomPointInsideCircle,
} from "@/vendor/suroi/common/src/utils/random";
import { Vec } from "@/vendor/suroi/common/src/utils/vector";

export const PLAYERRADIUS = 2.25;

export function shootGun(gun: GunDefinition, trials: number, range: number) {
  let damage = 0;

  for (let trial = 0; trial < trials; trial++) {
    const spread = Angle.degreesToRadians(gun.moveSpread / 2);
    const jitter = gun.jitterRadius ?? 0;

    const limit = gun.bulletCount ?? 1;

    for (let i = 0; i < limit; i++) {
      const rayStart = gun.jitterRadius
        ? randomPointInsideCircle(Vec.create(0, 0), jitter)
        : Vec.create(0, 0);
      const ray = Vec.add(
        Vec.fromPolar(
          gun.consistentPatterning === true
            ? 2 * (i / limit - 0.5)
            : randomFloat(-1, 1) * spread,
          gun.ballistics.range
        ),
        rayStart
      );

      damage += Collision.lineIntersectsCircle(rayStart, ray, Vec.create(range, 0), PLAYERRADIUS) ? gun.ballistics.damage : 0;
    }
  }

  return damage / trials;
}
