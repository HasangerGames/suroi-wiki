import { Guns } from "@/vendor/suroi/common/src/definitions/guns";
import { getSuroiImageLink } from "./suroi";
import { Melees } from "@/vendor/suroi/common/src/definitions/melees";
import { Obstacles } from "@/vendor/suroi/common/src/definitions/obstacles";

export type SearchItem = {
  name: string;
  image?: string;
  url: string;
  description?: string;
};

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
  ...generateItemsFromDefinitions(Guns, "/weapons/guns/"),
  ...generateItemsFromDefinitions(Melees, "/weapons/melee/"),
  ...generateItemsFromDefinitions(Obstacles.definitions, "/obstacles/"),
];
