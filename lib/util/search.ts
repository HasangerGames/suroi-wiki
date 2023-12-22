import { Guns } from "@/vendor/suroi/common/src/definitions/guns";
import { getSuroiImageLink } from "./suroi";
import { Melees } from "@/vendor/suroi/common/src/definitions/melees";
import { Obstacles } from "@/vendor/suroi/common/src/definitions/obstacles";
import { LootTables, LootTiers } from "@/vendor/suroi/server/src/data/lootTables";

export type SearchItem = {
  name: string;
  image?: string;
  url: string;
  description?: string;
};

export const wikiPages: SearchItem[] = [
  { name: "Weapons", url: "/weapons" },
  { name: "Healing Items", url: "/healing" },
  { name: "Loot Tables", url: "/loot" },
  { name: "Armor", url: "/equipment/armor" },
  { name: "Obstacles", url: "/obstacles" },
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
    url: `/loot#${k}`
  })),
  ...Object.entries(LootTiers).map(([k, v]) => ({
    name: `Loot Tier ${k}`,
    url: `/loot#${k}`
  })),
];
