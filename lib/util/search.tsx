import RenderedBuilding from "@/components/svg/special/RenderedBuilding";
import { Armors, Backpacks, Buildings, HealingItems } from "@/vendor/suroi/common/src/definitions";
import { Guns } from "@/vendor/suroi/common/src/definitions/guns";
import { Melees } from "@/vendor/suroi/common/src/definitions/melees";
import { Obstacles } from "@/vendor/suroi/common/src/definitions/obstacles";
import { Perks } from "@/vendor/suroi/common/src/definitions/perks";
import {
  ObjectDefinition,
  ObjectDefinitions
} from "@/vendor/suroi/common/src/utils/objectDefinitions";
import {
  LootTables
} from "@/vendor/suroi/server/src/data/lootTables";
import {
  IMAGE_BASE_URL,
  getSuroiImageLink,
  getSuroiItem,
  getSuroiObstacle
} from "./suroi";
import { ReactNode } from "react";

export type SearchItem = {
  name: string
  image?: string | ReactNode
  url: string
  description?: string
};

export const wikiPages: SearchItem[] = [
  {
    name: "Home",
    url: "/",
    description: "Home Page",
    image: "/img/logo.svg"
  },
  {
    name: "Weapons",
    url: "/weapons",
    description: "List of weapons",
    image: getSuroiImageLink(getSuroiItem("ak47"))
  },
  {
    name: "Healing Items",
    url: "/healing",
    description: "List of healing items",
    image: getSuroiImageLink(getSuroiItem("medikit"))
  },
  {
    name: "Loot Tables",
    url: "/loot",
    description: "Loot drop rates",
    image: getSuroiImageLink(getSuroiObstacle("flint_crate"))
  },
  {
    name: "Armor",
    url: "/equipment/armor",
    description: "List of armor, including helmet and vests",
    image: getSuroiImageLink(getSuroiItem("regular_vest"))
  },
  {
    name: "Backpacks",
    url: "/equipment/backpacks/",
    description: "List of backpacks",
    image: getSuroiImageLink(getSuroiItem("tactical_pack"))
  },
  {
    name: "Obstacles",
    url: "/obstacles",
    description: "List of obstacles",
    image: getSuroiImageLink(getSuroiObstacle("rock"), 1)
  },
  {
    name: "Buildings",
    url: "/buildings",
    description: "List of buildings",
    image: (
      <RenderedBuilding building={Buildings.fromString("red_house")} view="ceiling" className="w-24 h-24"></RenderedBuilding>
    )
  },
  {
    name: "Perks",
    url: "/perks",
    description: "List of perks",
    image: getSuroiImageLink(getSuroiItem("advanced_athletics"))
  },
  {
    name: "Skins",
    url: "/skins",
    description: "List of skins",
    image: getSuroiImageLink(getSuroiItem("hasanger"), undefined, "base")
  },
  {
    name: "Writing Guide",
    url: "/meta/writingarticles",
    description: "Guidelines for writing articles",
    image: `${IMAGE_BASE_URL}/game/shared/emotes/monocle_face.svg`
  },
  {
    name: "Developer Guide",
    url: "/meta/developing",
    description: "Guidelines for developing for the wiki",
    image: `${IMAGE_BASE_URL}/game/shared/emotes/picasso_face.svg`
  },
  {
    name: "Credits",
    url: "/credits",
    description: "Game and Wiki Credits",
    image: `${IMAGE_BASE_URL}/game/shared/emotes/partying_face.svg`
  }
];

export function generateItemsFromDefinitions<
  Def extends ObjectDefinition = ObjectDefinition
>({ definitions }: ObjectDefinitions<Def>, baseURL: string): SearchItem[] {
  return definitions.map(definition => ({
    name: definition.name,
    image: getSuroiImageLink(definition, "variations" in definition ? 1 : 0),
    url: baseURL + definition.idString
  }));
}

export const SearchItems: SearchItem[] = [
  ...wikiPages,
  ...generateItemsFromDefinitions(Guns, "/weapons/guns/"),
  ...generateItemsFromDefinitions(Melees, "/weapons/melee/"),
  ...generateItemsFromDefinitions(HealingItems, "/healing/"),
  ...generateItemsFromDefinitions(Armors, "/equipment/armor/"),
  ...generateItemsFromDefinitions(Backpacks, "/equipment/backpacks/"),
  ...generateItemsFromDefinitions(Obstacles, "/obstacles/"),
  ...generateItemsFromDefinitions(Buildings, "/buildings/"),
  ...generateItemsFromDefinitions(Perks, "/perks/"),
  ...Object.entries(LootTables).map(([k]) => ({
    name: `Loot Table ${k}`,
    url: `/loot#${k}`
  }))
];
