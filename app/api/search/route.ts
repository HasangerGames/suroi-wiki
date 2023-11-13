import { Guns } from "@/vendor/suroi/common/src/definitions/guns";
import { Melees } from "@/vendor/suroi/common/src/definitions/melees";
import { ItemDefinition } from "@/vendor/suroi/common/src/utils/objectDefinitions";
import { NextRequest, NextResponse } from "next/server";

const CATEGORIES: SearchCategory[] = [
  {
    path: "/weapons/guns",
    name: "Guns",
    items: Guns,
    imagePath:
      "https://raw.githubusercontent.com/HasangerGames/suroi/master/client/public/img/game/weapons/",
  },
  {
    path: "/weapons/melee",
    name: "Melee",
    items: Melees,
    imagePath:
      "https://raw.githubusercontent.com/HasangerGames/suroi/master/client/public/img/game/weapons/",
  },
];

// Handle search server side so we don't ship too much of vendor/suroi to the client
export async function GET(req: NextRequest) {
  const search = req.nextUrl.searchParams.get("q");

  if (!search) return new NextResponse(null, { status: 400 });

  const items: (ItemDefinition & { search: SearchResult })[] = [];

  for (const category of CATEGORIES) {
    for (const item of category.items) {
      if (item.name.toLowerCase().includes(search.toLowerCase())) {
        items.push({
          ...item,
          search: {
            imagePath: category.imagePath,
            name: category.name,
            path: category.path,
          },
        });
      }
    }
  }

  return new NextResponse(JSON.stringify(items));
}

export interface SearchResult {
  path: string;
  imagePath: string;
  name: string;
}

interface SearchCategory extends SearchResult {
  items: ItemDefinition[];
}
