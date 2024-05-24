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
  // ah yes, top 10 naming
  const [showDual, showDual_] = useState(false);
  const dualDef = Guns.fromStringSafe(`dual_${gun.idString}`);
  return (
    <div className="min-w-[20rem]">
      {dualDef && (
        <div className="flex flex-row flex-wrap w-full justify-around gap-2 mb-2 items-center p-1">
          <button
            onClick={() => showDual_(false)}
            className={`flex justify-center grow rounded-md min-w-[7ch] hover:bg-muted/50 cursor-pointer text-muted-foreground hover:text-white p-2 ${
              !showDual ? "!text-white bg-muted ring-primary ring" : ""
            }`}
          >
            Single
          </button>
          <button
            onClick={() => showDual_(true)}
            className={`flex justify-center grow rounded-md min-w-[7ch] hover:bg-muted/50 cursor-pointer text-muted-foreground hover:text-white p-2 ${
              showDual ? "!text-white bg-muted ring-primary ring" : ""
            }`}
          >
            Dual
          </button>
        </div>
      )}
      <GenericSidebar
        title={showDual ? dualDef?.name ?? gun.name : gun.name}
        image={getSuroiImageLink(
          showDual ? dualDef! : gun,
          undefined,
          undefined,
          true,
        )}
        imageVariations={[
          {
            type: "image",
            url: getSuroiImageLink(
              showDual ? dualDef! : gun,
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
            url: getSuroiKillfeedImageLink(showDual ? dualDef! : gun),
            title: "Killfeed",
          },
          {
            type: "react",
            children: (
              <PlayerHoldingGun
                gun={showDual ? dualDef ?? gun : gun}
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
        <GunDetails gun={showDual ? dualDef! : gun} explosion={explosion} />
      </GenericSidebar>
    </div>
  );
}

export interface GunSidebarProps {
  gun: GunDefinition;
  explosion?: ExplosionDefinition;
}
