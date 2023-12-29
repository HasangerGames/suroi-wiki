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
  WeaponDefinition,
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

export function getSuroiObstacle(idString: string) {
  return Obstacles.definitions.find((item) => item.idString === idString);
}

export function getSuroiBuilding(idString: string) {
  return Buildings.definitions.find((item) => item.idString === idString);
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
  Parachute: "game/airdrop",
} satisfies Record<keyof typeof ItemType | keyof typeof ObjectCategory, string>;

export const IMAGE_BASE_URL =
  "https://raw.githubusercontent.com/HasangerGames/suroi/master/client/public/img/";

type ObjectCategoryMapping<Category extends ObjectCategory> =
  Category extends ObjectCategory.Obstacle
    ? ObstacleDefinition
    : Category extends ObjectCategory.Building
    ? BuildingDefinition
    : Category extends ObjectCategory.Decal
    ? DecalDefinition
    : Category extends ObjectCategory.Loot
    ? LootDefinition
    : never;

export const MISSING_TEXTURE = `${IMAGE_BASE_URL}/game/_missing_texture.svg`;

export function getSuroiImageLink<T extends ObjectDefinition | ItemDefinition>(
  obj: T,
  variation?: number,
  append?: string | string[],
  dual?: boolean
) {
  // Is obj an item?
  if ("itemType" in obj)
    return _itemImageLink(obj.idString, obj.itemType, variation, append, dual);

  // Is a building?
  if (isBuilding(obj))
    return _otherImageLink(obj, ObjectCategory.Building, variation);

  // Is an obstacle?
  if (isObstacle(obj))
    return _otherImageLink(obj, ObjectCategory.Obstacle, variation);

  // Is a decal?
  if (isDecal(obj))
    return _otherImageLink(obj, ObjectCategory.Decal, variation);

  // Is loot? (should be covered by items already)
  if (isLoot(obj)) return _otherImageLink(obj, ObjectCategory.Loot, variation);

  // Return missing texture
  return MISSING_TEXTURE;
}

export function getSuroiKillfeedImageLink(weapon: WeaponDefinition) {
  return `${IMAGE_BASE_URL}/killfeed/${weapon.idString}_killfeed.svg`;
}

function _itemImageLink(
  idString: string,
  itemType: ItemType,
  variation?: number,
  append?: string | string[],
  dual?: boolean
) {
  return `${IMAGE_BASE_URL}${
    IMAGE_BASE_URLS[ItemType[itemType] as keyof typeof ItemType]
  }/${dual ? idString : idString.replace("dual_", "")}${
    variation ? `_${variation}` : ""
  }${
    append
      ? Array.isArray(append)
        ? "_" + append.join("_")
        : `_${append}`
      : ""
  }.svg`;
}

function _otherImageLink<Category extends ObjectCategory>(
  obj: ObjectCategoryMapping<Category>,
  category: Category,
  variation?: number
) {
  const key = ObjectCategory[category] as keyof typeof ObjectCategory;

  return `${IMAGE_BASE_URL}${IMAGE_BASE_URLS[key]}/${
    isBuilding(obj)
      ? obj.ceilingImages?.[0].key || obj.floorImages?.[0].key
      : obj.idString
  }${variation ? `_${variation}` : ""}.svg`;
}

export function buildingVariations(building: BuildingDefinition) {
  return [
    ...(building?.ceilingImages?.map(
      (image) => `${IMAGE_BASE_URL}${IMAGE_BASE_URLS.Building}/${image.key}.svg`
    ) ?? []),
    ...(building?.floorImages?.map(
      (image) => `${IMAGE_BASE_URL}${IMAGE_BASE_URLS.Building}/${image.key}.svg`
    ) ?? []),
  ];
}

export function buildingParents(building: BuildingDefinition) {
  const parents = [];
  for (const b of Buildings.definitions) {
    if (b.subBuildings?.some((sub) => sub.idString === building.idString)) {
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
        (sub) =>
          sub.idString === obstacle.idString ||
          Object.keys(sub.idString).some((key) => key === obstacle.idString)
      )
    ) {
      parents.push(b);
    }
  }

  return parents;
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
