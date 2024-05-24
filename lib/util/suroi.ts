import { ObjectCategory } from "@/vendor/suroi/common/src/constants";
import {
  BuildingDefinition,
  Buildings,
} from "@/vendor/suroi/common/src/definitions/buildings";
import {
  DecalDefinition,
  Decals,
} from "@/vendor/suroi/common/src/definitions/decals";
import { Guns } from "@/vendor/suroi/common/src/definitions/guns";
import {
  LootDefinition,
  Loots,
  WeaponDefinition,
} from "@/vendor/suroi/common/src/definitions/loots";
import { Melees } from "@/vendor/suroi/common/src/definitions/melees";
import {
  ObstacleDefinition,
  Obstacles,
} from "@/vendor/suroi/common/src/definitions/obstacles";
import { SyncedParticleDefinition } from "@/vendor/suroi/common/src/definitions/syncedParticles";
import {
  InventoryItemDefinition,
  ItemDefinition,
  ItemType,
  ObjectDefinition,
} from "@/vendor/suroi/common/src/utils/objectDefinitions";

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
  Gun: "game/weapons",
  Ammo: "game/loot",
  Melee: "game/weapons",
  Throwable: "game/weapons",
  Healing: "game/loot",
  Armor: "game/loot",
  Backpack: "game/loot",
  Scope: "game/loot",
  Skin: "game/skins",
  ThrowableProjectile: "game/projectiles/throwables",

  // Objects
  Player: "",
  DeathMarker: "",
  Obstacle: "game/obstacles",
  Loot: "game/loot",
  Building: "game/buildings",
  Decal: "game/decals",
  Parachute: "game/airdrop",
  SyncedParticle: "game/particles",
} satisfies Record<keyof typeof ItemType | keyof typeof ObjectCategory, string>;

export const BRANCH = "master";

export const WIKI_BRANCH = "main";

export const BASE_URL = `https://raw.githubusercontent.com/HasangerGames/suroi/${BRANCH}/`;

export const REPO_URL = "https://github.com/HasangerGames/suroi/";

export const REPO_BRANCH_URL = `${REPO_URL}blob/${BRANCH}/`;

export const WIKI_URL = `https://github.com/HasangerGames/suroi-wiki/`;

export const IMAGE_BASE_URL = `${BASE_URL}client/public/img/`;

export const SOUND_BASE_URL = `${REPO_URL}raw/${BRANCH}/client/public/audio/`;

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

export const MISSING_TEXTURE = `${IMAGE_BASE_URL}/game/_missing_texture.svg`;

export function getSuroiImageLink<
  T extends ObjectDefinition | ItemDefinition | InventoryItemDefinition,
>(obj: T, variation?: number, append?: string | string[], dual?: boolean) {
  switch (true) {
    // Is obj an item?
    case "itemType" in obj:
      return _itemImageLink(obj.idString, obj.itemType, variation, append, dual);

    // Is a building?
    case isBuilding(obj):
      return _otherImageLink(obj, ObjectCategory.Building, variation);

    // Is an obstacle?
    case isObstacle(obj):
      return _otherImageLink(obj, ObjectCategory.Obstacle, variation);

    // Is a decal?
    case isDecal(obj):
      return _otherImageLink(obj, ObjectCategory.Decal, variation);

    // Is loot? (should be covered by items already)
    case isLoot(obj):
      return _otherImageLink(obj, ObjectCategory.Loot, variation);

    // Return missing texture
    default:
      return MISSING_TEXTURE;
  }

}

export function getSuroiKillfeedImageLink(
  source?: WeaponDefinition,
  explosionID?: string,
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
  dual?: boolean,
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
  variation?: number,
) {
  const key = ObjectCategory[category] as keyof typeof ObjectCategory;

  return `${IMAGE_BASE_URL}${IMAGE_BASE_URLS[key]}/${
    isBuilding(obj)
      ? obj.ceilingImages?.[0]?.key || obj.floorImages?.[0]?.key
      : obj.idString
  }${variation ? `_${variation}` : ""}.svg`;
}

export function buildingVariations(building: BuildingDefinition) {
  return [
    ...(building?.ceilingImages?.map(
      (image) =>
        `${IMAGE_BASE_URL}${IMAGE_BASE_URLS.Building}/${image.key}.svg`,
    ) ?? []),
    ...(building?.floorImages?.map(
      (image) =>
        `${IMAGE_BASE_URL}${IMAGE_BASE_URLS.Building}/${image.key}.svg`,
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
          Object.keys(sub.idString).some((key) => key === obstacle.idString),
      )
    ) {
      parents.push(b);
    }
  }

  return parents;
}

// #region Type Predicates

export function isBuilding(obj: ObjectDefinition): obj is BuildingDefinition {
  return Boolean(
    Buildings.fromStringSafe(obj.idString)
  );
}

export function isObstacle(obj: ObjectDefinition): obj is ObstacleDefinition {
  return Boolean(
    Obstacles.fromStringSafe(obj.idString)
  );
}

export function isDecal(obj: ObjectDefinition): obj is DecalDefinition {
  return Boolean(
    Decals.fromStringSafe(obj.idString)
  );
}

export function isLoot(obj: ObjectDefinition): obj is LootDefinition {
  return Boolean(
    Loots.fromStringSafe(obj.idString)
  );
}

export function isWeapon(obj: ObjectDefinition): obj is WeaponDefinition {
  return Boolean(
    [...Guns, ...Melees].find(weapon => weapon === obj),
  );
}
