"use client";

import {
  GunDefinition,
  Guns,
} from "@/vendor/suroi/common/src/definitions/guns";
import { ExplosionDefinition } from "@/vendor/suroi/common/src/definitions/explosions";
import GenericSidebar from "./utils/GenericSidebar";
import { getSuroiImageLink } from "@/lib/util/suroi";
import GunDetails from "./GunDetails";
import { useState } from "react";

export default function GunSidebar({ gun, explosion }: GunSidebarProps) {
  const [dual, setDual] = useState(false);
  const dualGun = Guns.find((g) => g.idString === `dual_${gun.idString}`);
  return (
    <div className="col-span-2">
      {dualGun && (
        <div className="mb-2 flex gap-2 text-lg">
          <button onClick={() => setDual(false)} className={`${!dual && "text-primary underline"} transition-colors`}>Single</button>
          <button
            onClick={() => setDual(true)}
            className={`${dual && "text-primary underline"} transition-colors`}
          >
            Dual
          </button>
        </div>
      )}
      <GenericSidebar
        title={dual ? dualGun?.name ?? gun.name : gun.name}
        image={getSuroiImageLink(
          dual ? dualGun! : gun,
          undefined,
          undefined,
          true
        )}
      >
        <GunDetails gun={dual ? dualGun! : gun} explosion={explosion} />
      </GenericSidebar>
    </div>
  );
}

export interface GunSidebarProps {
  gun: GunDefinition;
  explosion?: ExplosionDefinition;
}
