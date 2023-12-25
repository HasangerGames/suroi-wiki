import { Guns } from "@/vendor/suroi/common/src/definitions/guns";
import {
  getSuroiBuilding,
  getSuroiImageLink,
  getSuroiItem,
  getSuroiObstacle,
} from "./suroi";
import { Melees } from "@/vendor/suroi/common/src/definitions/melees";
import { Obstacles } from "@/vendor/suroi/common/src/definitions/obstacles";
import {
  LootTables,
  LootTiers,
} from "@/vendor/suroi/server/src/data/lootTables";

export type SearchItem = {
  name: string;
  image?: string;
  url: string;
  description?: string;
};

export const wikiPages: SearchItem[] = [
  {
    name: "Home",
    url: "/",
    description: "Home Page",
    image: "/img/suroi.svg",
  },
  {
    name: "Weapons",
    url: "/weapons",
    description: "List of weapons",
    image: getSuroiImageLink(getSuroiItem("ak47")),
  },
  {
    name: "Healing Items",
    url: "/healing",
    description: "List of healing items",
    image: getSuroiImageLink(getSuroiItem("medikit")),
  },
  {
    name: "Loot Tables",
    url: "/loot",
    description: "Loot drop rates",
    image: getSuroiImageLink(getSuroiObstacle("flint_crate")),
  },
  {
    name: "Armor",
    url: "/equipment/armor",
    description: "List of armor, including helmet and vests",
    image: getSuroiImageLink(getSuroiItem("regular_vest")),
  },
  {
    name: "Obstacles",
    url: "/obstacles",
    description: "List of obstacles",
    image: getSuroiImageLink(getSuroiObstacle("rock"), 1),
  },
  {
    name: "Buildings",
    url: "/buildings",
    description: "List of buildings",
    image: getSuroiImageLink(getSuroiBuilding("house")),
  },
  {
    name: "Skins",
    url: "/skins",
    description: "List of skins",
    image: getSuroiImageLink(getSuroiItem("leia"), undefined, "base"),
  },
];

export function generateItemsFromDefinitions(
  definitions: any,
  baseURL: string
): SearchItem[] {
  return definitions.map((definition: any) => ({
    name: definition.name,
    image: getSuroiImageLink(definition, definition.variations ? 1 : 0),
    url: baseURL + definition.idString,
  }));
}

export const SearchItems: SearchItem[] = [
  ...wikiPages,
  ...generateItemsFromDefinitions(Guns, "/weapons/guns/"),
  ...generateItemsFromDefinitions(Melees, "/weapons/melee/"),
  ...generateItemsFromDefinitions(Obstacles.definitions, "/obstacles/"),
  ...Object.entries(LootTables).map(([k, v]) => ({
    name: `Loot Table ${k}`,
    url: `/loot#${k}`,
  })),
  ...Object.entries(LootTiers).map(([k, v]) => ({
    name: `Loot Tier ${k}`,
    url: `/loot#${k}`,
  })),
];
