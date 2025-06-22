"use client";

import { getSuroiImageLink, getSuroiKillfeedImageLink } from "@/lib/util/suroi";
import { ExplosionDefinition } from "@/vendor/suroi/common/src/definitions/explosions";
import {
  GunDefinition,
  Guns
} from "@/vendor/suroi/common/src/definitions/guns";
import { Skins } from "@/vendor/suroi/common/src/definitions/skins";
import { useState } from "react";
import PlayerHoldingGun from "../svg/special/PlayerHoldingGun";
import GunDetails from "./GunDetails";
import GenericSidebar from "./utils/GenericSidebar";

import { Explosions } from "@/vendor/suroi/common/src/definitions/explosions";

import { FireMode } from "@/vendor/suroi/common/src/constants";
import type {
  WearerAttributes,
  ExtendedWearerAttributes
} from "@/vendor/suroi/common/src/utils/objectDefinitions";
import { WithRequired } from "@tanstack/react-query";

function formatAttributesWikitext(attributes: WearerAttributes | ExtendedWearerAttributes, n?: number): string {
  const limit = "limit" in attributes 
    ? ` (${attributes.limit} limit)`
    : " (No limit)";

  let result = "";
  
  if (n !== undefined) {
    result += `'''Effect ${n + 1}'''\n`;
  }

  const effects: string[] = [];
  
  if (attributes.maxHealth) {
    effects.push(`Health Multiplier: ${attributes.maxHealth}${limit}`);
  }
  if (attributes.maxAdrenaline) {
    effects.push(`Adrenaline Multiplier: ${attributes.maxAdrenaline}${limit}`);
  }
  if (attributes.minAdrenaline) {
    effects.push(`Min. Adrenaline: ${attributes.minAdrenaline}${limit}`);
  }
  if (attributes.speedBoost) {
    effects.push(`Speed Multiplier: ${attributes.speedBoost}${limit}`);
  }
  
  if ("healthRestored" in attributes && attributes.healthRestored) {
    effects.push(`Health Restored: ${attributes.healthRestored}${limit}`);
  }
  if ("adrenalineRestored" in attributes && attributes.adrenalineRestored) {
    effects.push(`Adrenaline Restored: ${attributes.adrenalineRestored}${limit}`);
  }

  return effects.join("<br>");
}

function formatEffectsWikitext(gun: WithRequired<GunDefinition, "wearerAttributes">): {
  passive?: string;
  onKill?: string;
  onDamageDealt?: string;
} {
  const effects: { passive?: string; onKill?: string; onDamageDealt?: string } = {};

  if (gun.wearerAttributes.passive) {
    effects.passive = formatAttributesWikitext(gun.wearerAttributes.passive);
  }

  if (gun.wearerAttributes.on?.kill) {
    effects.onKill = gun.wearerAttributes.on.kill
      .map((attr, i) => formatAttributesWikitext(attr, i))
      .join("<br><br>");
  }

  if (gun.wearerAttributes.on?.damageDealt) {
    effects.onDamageDealt = gun.wearerAttributes.on.damageDealt
      .map((attr, i) => formatAttributesWikitext(attr, i))
      .join("<br><br>");
  }

  return effects;
}

export function generateGunInfoboxWikitext({ gun, explosion, hideTitle, hideSounds }: GunSidebarProps) {
  const actualGun = gun;
  
  // Calculate DPS
  const explosionDamage = explosion?.damage ?? 0;
  const shrapnelDamage = explosion?.ballistics ? (explosion.ballistics.damage * explosion.shrapnelCount) : 0;
  const totalDamagePerShot = actualGun.ballistics.damage + explosionDamage + shrapnelDamage;

  // Build parameters object
  const params: Record<string, string> = {
    "title": actualGun.name,

    // Images
    "images": `${actualGun.name}.svg`,
    "class": actualGun.ammoType,
    "Killfeed image": `${actualGun.idString}_killfeed.svg`,
    
    // General info
    "Type": "Gun",
    "Ammo": actualGun.ammoType,
    "Fire mode": FireMode[actualGun.fireMode],
    "Capacity": actualGun.capacity.toString(),
    "Extended capacity": (actualGun.extendedCapacity ?? actualGun.capacity).toString(),
    "Reload time": `${actualGun.reloadTime}`,
    "Fire delay": `${actualGun.fireDelay}`,
    "Switch delay": `${actualGun.switchDelay}`,
    "Move speed multiplier": `${actualGun.speedMultiplier.toFixed(4)}`,
    "Recoil speed multiplier": `${actualGun.recoilMultiplier.toFixed(4)}`,
    "Recoil duration": `${actualGun.recoilDuration}`,
    "Standing spread": `${actualGun.shotSpread}`,
    "Moving spread": `${actualGun.moveSpread}`,
    
    // Ballistics
    "Damage": actualGun.ballistics.damage.toString(),
    "Bullet speed": actualGun.ballistics.speed.toString(),
    "Range": actualGun.ballistics.range.toString(),
    "Obstacle multiplier": `${actualGun.ballistics.obstacleMultiplier}`,
    
    // Advanced stats
    "Internal ID": actualGun.idString
  };

  // Add burst properties if applicable
  if (actualGun.fireMode === FireMode.Burst && actualGun.burstProperties) {
    params["Burst cooldown"] = `${actualGun.burstProperties.burstCooldown}`;
    params["Shots per burst"] = `${actualGun.burstProperties.shotsPerBurst} shots`;
  }

  // Add shotgun stats if applicable
  if (actualGun.bulletCount) {
    params["Bullet count"] = actualGun.bulletCount.toString();
    params["Jitter radius"] = actualGun.jitterRadius?.toString() ?? "None";
    params["Total damage"] = (actualGun.bulletCount * actualGun.ballistics.damage).toString();
  }

  // Add effects if applicable
  if (actualGun.wearerAttributes) {
    const effects = formatEffectsWikitext(actualGun as WithRequired<GunDefinition, "wearerAttributes">);
    if (effects.passive) params["Passive effects"] = effects.passive;
    if (effects.onKill) params["On kill effects"] = effects.onKill;
    if (effects.onDamageDealt) params["On damage dealt effects"] = effects.onDamageDealt;
  }

  // Add explosion stats if applicable
  if (explosion) {
    params["Explosion damage"] = explosion.damage.toString();
    params["Explosion obstacle damage"] = `${explosion.obstacleMultiplier}`;
    params["Explosion radius"] = `Min: ${explosion.radius.min} Max: ${explosion.radius.max}`;
    params["Shrapnel count"] = explosion.shrapnelCount.toString();
    params["Shrapnel damage"] = explosion.ballistics.damage.toString();
    params["Shrapnel speed"] = explosion.ballistics.speed.toString();
    params["Shrapnel range"] = explosion.ballistics.range.toString();
    params["Shrapnel obstacle damage"] = `${explosion.ballistics.obstacleMultiplier}`;
    params["Shrapnel total damage"] = (explosion.shrapnelCount * explosion.ballistics.damage).toString();
  }

  // Add sounds if not hidden
  if (!hideSounds) {
    const baseIdString = actualGun.idString.replace("dual_", "");
    params["Fire"] = `${baseIdString}_fire.mp3`;
    
    if (actualGun.ballistics.lastShotFX) {
      params["Last shot"] = `${baseIdString}_fire_last.mp3`;
    }
    
    params["Switch"] = `${baseIdString}_switch.mp3`;
    params["Reload"] = `${baseIdString}_reload.mp3`;
    
    if (actualGun.reloadFullOnEmpty) {
      params["Full reload"] = `${baseIdString}_reload_full.mp3`;
    }
    
    if (actualGun.ballistics.onHitExplosion) {
      const explosionDef = Explosions.fromString(actualGun.ballistics.onHitExplosion);
      params["Explosion"] = `${explosionDef.sound}.mp3`;
    }
  }

  // Generate wikitext
  let wikitext = "{{Gun infobox\n";
  
  for (const [key, value] of Object.entries(params)) {
    if (value && value !== "undefined") {
      wikitext += `|${key}=${value}\n`;
    }
  }
  
  wikitext += "}}";
  
  return <pre>{wikitext}</pre>;
}

export interface GunSidebarProps {
  gun: GunDefinition
  explosion?: ExplosionDefinition
  hideTitle?: boolean
  hideSounds?: boolean
}

export default function GunSidebar({ gun, explosion, hideTitle, hideSounds }: GunSidebarProps) {
  // ah yes, top 10 naming
  const [showDual, showDual_] = useState(false);
  const dualDef = Guns.fromStringSafe(`dual_${gun.idString}`);
  return (
    <>
      <pre>{generateGunInfoboxWikitext({gun, explosion, hideTitle, hideSounds})}</pre>
      <div className="min-w-[20rem]">
        {(dualDef && hideTitle !== true) && (
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
          title={showDual ? (dualDef?.name ?? gun.name) : gun.name}
          image={getSuroiImageLink(
            showDual ? dualDef! : gun,
            undefined,
            undefined,
            true
          )}
          imageVariations={[
            {
              type: "image",
              url: getSuroiImageLink(
                showDual ? dualDef! : gun,
                undefined,
                undefined,
                true
              ),
              title: "Loot"
            },
            {
              type: "image",
              url: getSuroiImageLink(gun, undefined, "world"),
              title: "World"
            },
            {
              type: "image",
              url: getSuroiKillfeedImageLink(showDual ? dualDef! : gun),
              title: "Killfeed"
            },
            {
              type: "react",
              children: (
                <PlayerHoldingGun
                  gun={showDual ? (dualDef ?? gun) : gun}
                  skin={
                    Skins.definitions.find(skin => {
                      return skin.idString === "hazel_jumpsuit";
                    }) ?? Skins.definitions[0]
                  }
                />
              ),
              title: "Player Preview"
            }
          ]}
        >
          <GunDetails gun={showDual ? dualDef! : gun} explosion={explosion} hideSounds={hideSounds} />
        </GenericSidebar>
      </div>
    </>
  );
}

export interface GunSidebarProps {
  gun: GunDefinition
  explosion?: ExplosionDefinition
  hideTitle?: boolean
  hideSounds?: boolean
}
