import { ObjectCategory } from "@/vendor/suroi/common/src/constants";
import {
  BuildingDefinition,
  Buildings,
} from "@/vendor/suroi/common/src/definitions/buildings";
import {
  DecalDefinition,
  Decals,
} from "@/vendor/suroi/common/src/definitions/decals";
import {
  LootDefinition,
  Loots,
} from "@/vendor/suroi/common/src/definitions/loots";
import {
  ObstacleDefinition,
  Obstacles,
} from "@/vendor/suroi/common/src/definitions/obstacles";
import { Skins } from "@/vendor/suroi/common/src/definitions/skins";
import {
  ItemDefinition,
  ItemType,
  ObjectDefinition,
} from "@/vendor/suroi/common/src/utils/objectDefinitions";

export function getSuroiItem(idString: string) {
  return Loots.definitions.find((item) => item.idString === idString);
}

export const IMAGE_BASE_URLS: Record<ItemType | ObjectCategory, string> = {
  // Items
  [ItemType.None]: "",
  [ItemType.Gun]: "game/weapons",
  [ItemType.Ammo]: "game/loot",
  [ItemType.Melee]: "game/weapons",
  [ItemType.Healing]: "game/loot",
  [ItemType.Armor]: "game/loot",
  [ItemType.Backpack]: "game/loot",
  [ItemType.Scope]: "game/loot",
  [ItemType.Skin]: "game/skins",

  // Objects
  [ObjectCategory.Player]: "",
  [ObjectCategory.DeathMarker]: "",
  [ObjectCategory.Obstacle]: "game/obstacles",
  [ObjectCategory.Loot]: "game/loot",
  [ObjectCategory.Building]: "game/buildings",
  [ObjectCategory.Decal]: "game/decals",
};

export const IMAGE_BASE_URL =
  "https://raw.githubusercontent.com/HasangerGames/suroi/master/client/public/img/";

export function getSuroiImageLink<T extends ObjectDefinition | ItemDefinition>(
  obj: T,
  variation?: number
) {
  // Is obj an item?
  if ("itemType" in obj)
    return _imageLink(obj.idString, obj.itemType, variation);

  // Is a building?
  if (isBuilding(obj))
    return _imageLink(obj.idString, ObjectCategory.Building, variation);

  // Is an obstacle?
  if (isObstacle(obj))
    return _imageLink(obj.idString, ObjectCategory.Obstacle, variation);

  // Is a decal?
  if (isDecal(obj))
    return _imageLink(obj.idString, ObjectCategory.Decal, variation);

  // Is loot? (should be covered by items already)
  if (isLoot(obj))
    return _imageLink(obj.idString, ObjectCategory.Loot, variation);

  // Is a skin
  if (isSkin(obj)) return _imageLink(obj.idString, ItemType.Skin, variation);
}

function _imageLink(
  idString: string,
  category: ObjectCategory | ItemType,
  variation?: number
) {
  return `${IMAGE_BASE_URL}${IMAGE_BASE_URLS[category]}/${idString}${
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

function isSkin(obj: ObjectDefinition) {
  return Boolean(
    Skins.definitions.find((skin) => skin.idString === obj.idString)
  );
}
