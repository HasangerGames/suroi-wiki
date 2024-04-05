"use client";

import { getSuroiImageLink, getSuroiKillfeedImageLink } from "@/lib/util/suroi";
import { ExplosionDefinition } from "@/vendor/suroi/common/src/definitions/explosions";
import {
  GunDefinition,
  Guns,
} from "@/vendor/suroi/common/src/definitions/guns";
import { Skins } from "@/vendor/suroi/common/src/definitions/skins";
import { useState } from "react";
import PlayerHoldingGun from "../svg/special/PlayerHoldingGun";
import GunDetails from "./GunDetails";
import GenericSidebar from "./utils/GenericSidebar";

export default function GunSidebar({ gun, explosion }: GunSidebarProps) {
  const [dual, setDual] = useState(false);
  const dualGun = Guns.definitions.find((g) => g.idString === `dual_${gun.idString}`);
  return (
    <div className="min-w-[20rem]">
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
          {
            type: "react",
            children: (
              <PlayerHoldingGun
                gun={dual ? dualGun ?? gun : gun}
                skin={
                  Skins.definitions.find((skin) => {
                    return skin.idString === "hazel_jumpsuit";
                  }) ?? Skins.definitions[0]
                }
              />
            ),
            title: "Player Preview",
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
