import { ObjectCategory } from "@/vendor/suroi/common/src/constants";
import { EmoteDefinition, Emotes } from "@/vendor/suroi/common/src/definitions/emotes";
import {
  BuildingDefinition,
  Buildings
} from "@/vendor/suroi/common/src/definitions/buildings";
import {
  DecalDefinition,
  Decals
} from "@/vendor/suroi/common/src/definitions/decals";
import { Guns } from "@/vendor/suroi/common/src/definitions/guns";
import {
  LootDefinition,
  Loots,
  WeaponDefinition
} from "@/vendor/suroi/common/src/definitions/loots";
import { Melees } from "@/vendor/suroi/common/src/definitions/melees";
import {
  ObstacleDefinition,
  Obstacles
} from "@/vendor/suroi/common/src/definitions/obstacles";
import { PerkCategories, PerkDefinition, Perks } from "@/vendor/suroi/common/src/definitions/perks";
import { SyncedParticleDefinition } from "@/vendor/suroi/common/src/definitions/syncedParticles";
import {
  ItemType,
  ObjectDefinition,
  ReferenceTo
} from "@/vendor/suroi/common/src/utils/objectDefinitions";
import { readdirSync, statSync } from "fs";
import { resolve, sep } from "path";

export function getSuroiItem(idString: string) {
  return Loots.fromString(idString);
}

export function getSuroiObstacle(idString: string) {
  return Obstacles.fromString(idString);
}

export function getSuroiBuilding(idString: string) {
  return Buildings.fromString(idString);
}

export const IMAGE_BASE_URLS = {
  // Items
  Gun: "/weapons",
  Ammo: "/loot",
  Melee: "/weapons",
  Throwable: "/weapons",
  Healing: "/loot",
  Armor: "/loot",
  Backpack: "/loot",
  Scope: "/loot",
  Skin: "/skins",
  ThrowableProjectile: "/projectiles",
  Perk: "/perks",

  // Objects
  Player: "",
  DeathMarker: "",
  Obstacle: "/obstacles",
  Loot: "/loot",
  Building: "/buildings",
  Decal: "/decals",
  Parachute: "/airdrop",
  SyncedParticle: "/particles"
} satisfies Record<keyof typeof ItemType | keyof typeof ObjectCategory, string>;

export const TEXTURE_PATHS: Record<string, string> = {};

if (typeof window === "undefined" && readdirSync) {
  const readDirectory = (dir: string): string[] => {
    let results: string[] = [];
    const files = readdirSync(dir);

    for (const file of files) {
      const filePath = resolve(dir, file);
      const stat = statSync(filePath);

      if (stat?.isDirectory()) {
        const res = readDirectory(filePath);
        results = results.concat(res);
      } else results.push(filePath);
    }

    return results;
  };

  for (const folder of ["birthday", "halloween", "fall", "winter", "normal", "shared"] as const) {
    for (const file of readDirectory(`vendor/suroi/client/public/img/game/${folder}`)) {
      TEXTURE_PATHS[file.slice(file.lastIndexOf(sep) + 1, -4)] = folder;
    }
  }
}

export const WIKI_BRANCH = "main";

export const WIKI_URL = "https://github.com/HasangerGames/suroi-wiki/";

export const BRANCH = "master";

export const BASE_URL = "https://suroi.io";

export const IMAGE_BASE_URL = `${BASE_URL}/img`;

export const SOUND_BASE_URL = `${BASE_URL}/audio`;

export const MISSING_TEXTURE = `${IMAGE_BASE_URL}/game/shared/_missing_texture.svg`;

type ObjectCategoryMapping<Category extends ObjectCategory> = {
  readonly [ObjectCategory.Player]: never
  readonly [ObjectCategory.Obstacle]: ObstacleDefinition
  readonly [ObjectCategory.DeathMarker]: never
  readonly [ObjectCategory.Loot]: LootDefinition
  readonly [ObjectCategory.Building]: BuildingDefinition
  readonly [ObjectCategory.Decal]: DecalDefinition
  readonly [ObjectCategory.Parachute]: never
  readonly [ObjectCategory.ThrowableProjectile]: never
  readonly [ObjectCategory.SyncedParticle]: SyncedParticleDefinition
}[Category];

export function getSuroiImageLink(obj: ObjectDefinition, variation?: number, append?: string | string[], dual?: boolean) {
  switch (true) {
    // Is it an item?
    case "itemType" in obj:
      return _itemImageLink(
        obj.idString,
        obj.itemType,
        variation,
        append,
        dual
      );

    case isBuilding(obj): return imageLink(obj, ObjectCategory.Building, variation);
    case isObstacle(obj): return imageLink(obj, ObjectCategory.Obstacle, variation);
    case isDecal(obj): return imageLink(obj, ObjectCategory.Decal, variation);
    case isLoot(obj): return imageLink(obj, ObjectCategory.Loot, variation);
    case isEmote(obj): return `${IMAGE_BASE_URL}/game/shared/emotes/${obj.idString}.svg`;

    default: return MISSING_TEXTURE;
  }
}

export function getSuroiKillfeedImageLink(
  source?: WeaponDefinition,
  explosionID?: string
) {
  return `${IMAGE_BASE_URL}/killfeed/${
    source?.idString ?? explosionID
  }_killfeed.svg`;
}

function _itemImageLink(
  idString: string,
  itemType: ItemType,
  variation?: number,
  append?: string | string[],
  dual?: boolean
) {
  return `${IMAGE_BASE_URL}/game/${itemType === ItemType.Perk ? Perks.fromString(idString as ReferenceTo<PerkDefinition>).category === PerkCategories.Halloween ? "halloween" : "fall" : "shared"}${
    IMAGE_BASE_URLS[ItemType[itemType] as keyof typeof ItemType]
  }/${dual ? idString : idString.replace("dual_", "")}${
    variation ? `_${variation}` : ""
  }${
    append
      ? Array.isArray(append)
        ? `_${append.join("_")}`
        : `_${append}`
      : ""
  }.svg`;
}

export function imageLink<Category extends ObjectCategory>(
  obj: ObjectCategoryMapping<Category> | string,
  category: Category,
  variation?: number
) {
  const key = ObjectCategory[category] as keyof typeof ObjectCategory;
  const idString = typeof obj === "string" ? obj : obj.idString;
  const fullID = `${idString}${variation ? `_${variation}` : ""}`;
  return `${IMAGE_BASE_URL}/game/${TEXTURE_PATHS[fullID] ?? "shared"}${IMAGE_BASE_URLS[key]}/${fullID}.svg`;
}

export function buildingParents(building: BuildingDefinition) {
  const parents = [];
  for (const b of Buildings.definitions) {
    if (b.subBuildings?.some(sub => sub.idString === building.idString)) {
      parents.push(b);
    }
  }

  return parents;
}

export function obstacleContainedBy(obstacle: ObstacleDefinition) {
  const parents = [];
  for (const b of Buildings.definitions) {
    if (
      b.obstacles?.some(
        sub =>
          sub.idString === obstacle.idString
          || Object.keys(sub.idString).some(key => key === obstacle.idString)
      )
    ) {
      parents.push(b);
    }
  }

  return parents;
}

// #region Type Predicates

export function isBuilding(obj: ObjectDefinition): obj is BuildingDefinition {
  return Boolean(Buildings.fromStringSafe(obj.idString));
}

export function isObstacle(obj: ObjectDefinition): obj is ObstacleDefinition {
  return Boolean(Obstacles.fromStringSafe(obj.idString));
}

export function isDecal(obj: ObjectDefinition): obj is DecalDefinition {
  return Boolean(Decals.fromStringSafe(obj.idString));
}

export function isLoot(obj: ObjectDefinition): obj is LootDefinition {
  return Boolean(Loots.fromStringSafe(obj.idString));
}

export function isWeapon(obj: ObjectDefinition): obj is WeaponDefinition {
  return Boolean([...Guns, ...Melees].find(weapon => weapon === obj));
}

export function isEmote(obj: ObjectDefinition): obj is EmoteDefinition {
  return Boolean(Emotes.fromStringSafe(obj.idString));
}
