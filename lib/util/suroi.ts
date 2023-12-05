import { ObjectCategory } from "@/vendor/suroi/common/src/constants";
import {
  BuildingDefinition,
  Buildings,
} from "@/vendor/suroi/common/src/definitions/buildings";
import {
  DecalDefinition,
  Decals,
} from "@/vendor/suroi/common/src/definitions/decals";
import { GunDefinition } from "@/vendor/suroi/common/src/definitions/guns";
import {
  LootDefinition,
  Loots,
} from "@/vendor/suroi/common/src/definitions/loots";
import {
  ObstacleDefinition,
  Obstacles,
} from "@/vendor/suroi/common/src/definitions/obstacles";
import {
  ItemDefinition,
  ItemType,
  ObjectDefinition,
} from "@/vendor/suroi/common/src/utils/objectDefinitions";

export function getSuroiItem(idString: string) {
  return Loots.definitions.find((item) => item.idString === idString);
}

export const IMAGE_BASE_URLS = {
  // Items
  None: "",
  Gun: "game/weapons",
  Ammo: "game/loot",
  Melee: "game/weapons",
  Healing: "game/loot",
  Armor: "game/loot",
  Backpack: "game/loot",
  Scope: "game/loot",
  Skin: "game/skins",

  // Objects
  Player: "",
  DeathMarker: "",
  Obstacle: "game/obstacles",
  Loot: "game/loot",
  Building: "game/buildings",
  Decal: "game/decals",
} satisfies Record<keyof typeof ItemType | keyof typeof ObjectCategory, string>;

export const IMAGE_BASE_URL =
  "https://raw.githubusercontent.com/HasangerGames/suroi/master/client/public/img/";

export function getSuroiImageLink<T extends ObjectDefinition | ItemDefinition>(
  obj: T,
  variation?: number,
  append?: string | string[]
) {
  // Is obj an item?
  if ("itemType" in obj)
    return _itemImageLink(obj.idString, obj.itemType, variation, append);

  // Is a building?
  if (isBuilding(obj))
    return _otherImageLink(obj.idString, ObjectCategory.Building, variation);

  // Is an obstacle?
  if (isObstacle(obj))
    return _otherImageLink(obj.idString, ObjectCategory.Obstacle, variation);

  // Is a decal?
  if (isDecal(obj))
    return _otherImageLink(obj.idString, ObjectCategory.Decal, variation);

  // Is loot? (should be covered by items already)
  if (isLoot(obj))
    return _otherImageLink(obj.idString, ObjectCategory.Loot, variation);

  // Return missing texture
  return `${IMAGE_BASE_URL}/game/_missing_texture.svg`;
}

export function getSuroiKillfeedImageLink(gun: GunDefinition) {
  return `${IMAGE_BASE_URL}/killfeed/${gun.idString}_killfeed.svg`
}

function _itemImageLink(
  idString: string,
  itemType: ItemType,
  variation?: number,
  append?: string | string[]
) {
  return `${IMAGE_BASE_URL}${
    IMAGE_BASE_URLS[ItemType[itemType] as keyof typeof ItemType]
  }/${idString}${variation ? `_${variation}` : ""}${
    append
      ? Array.isArray(append)
        ? "_" + append.join("_")
        : `_${append}`
      : ""
  }.svg`;
}

function _otherImageLink(
  idString: string,
  category: ObjectCategory,
  variation?: number
) {
  const key = ObjectCategory[category] as keyof typeof ObjectCategory;

  return `${IMAGE_BASE_URL}${IMAGE_BASE_URLS[key]}/${idString}${
    variation ? `_${variation}` : ""
  }.svg`;
}

/**
 * Type Assertions
 */

function isBuilding(obj: ObjectDefinition): obj is BuildingDefinition {
  return Boolean(
    Buildings.definitions.find((building) => building.idString === obj.idString)
  );
}

function isObstacle(obj: ObjectDefinition): obj is ObstacleDefinition {
  return Boolean(
    Obstacles.definitions.find((obstacle) => obstacle.idString === obj.idString)
  );
}

function isDecal(obj: ObjectDefinition): obj is DecalDefinition {
  return Boolean(
    Decals.definitions.find((decal) => decal.idString === obj.idString)
  );
}

function isLoot(obj: ObjectDefinition): obj is LootDefinition {
  return Boolean(
    Loots.definitions.find((loot) => loot.idString === obj.idString)
  );
}
