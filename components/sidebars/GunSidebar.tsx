"use client";

import {
  GunDefinition,
  Guns,
} from "@/vendor/suroi/common/src/definitions/guns";
import { ExplosionDefinition } from "@/vendor/suroi/common/src/definitions/explosions";
import GenericSidebar from "./utils/GenericSidebar";
import { getSuroiImageLink, getSuroiKillfeedImageLink } from "@/lib/util/suroi";
import GunDetails from "./GunDetails";
import { useState } from "react";

export default function GunSidebar({ gun, explosion }: GunSidebarProps) {
  const [dual, setDual] = useState(false);
  const dualGun = Guns.find((g) => g.idString === `dual_${gun.idString}`);
  return (
    <div className="col-span-2">
      {dualGun && (
        <div className="flex flex-row flex-wrap w-full justify-around gap-2 mb-2 items-center p-1">
          <button
            onClick={() => setDual(false)}
            className={`flex justify-center grow rounded-md min-w-[7ch] hover:bg-muted/50 cursor-pointer text-muted-foreground hover:text-white p-2 ${
              !dual ? "!text-white bg-muted ring-primary ring" : ""
            }`}
          >
            Single
          </button>
          <button
            onClick={() => setDual(true)}
            className={`flex justify-center grow rounded-md min-w-[7ch] hover:bg-muted/50 cursor-pointer text-muted-foreground hover:text-white p-2 ${
              dual ? "!text-white bg-muted ring-primary ring" : ""
            }`}
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
          true,
        )}
        imageVariations={[
          {
            type: "image",
            url: getSuroiImageLink(
              dual ? dualGun! : gun,
              undefined,
              undefined,
              true,
            ),
            title: "Loot",
          },
          {
            type: "image",
            url: getSuroiImageLink(gun, undefined, "world"),
            title: "World",
          },
          {
            type: "image",
            url: getSuroiKillfeedImageLink(dual ? dualGun! : gun),
            title: "Killfeed",
          },
        ]}
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
