import fs from "fs/promises";
import { MetadataRoute } from "next";
import path from "path";

const BASE_URL = "https://wiki.suroi.io";

const PATHS = [
  "buildings",
  "equipment/armor",
  "equipment/backpacks",
  "healing",
  "obstacles",
  "weapons/guns",
  "weapons/melee",
  "weapons/throwables",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrls: MetadataRoute.Sitemap = [];

  for (const p of PATHS) {
    const files = await fs.readdir(
      path.join(process.cwd(), `/app/(wiki)/${p}/articles`),
      { withFileTypes: true },
    );

    for (const file of files) {
      if (file.isFile()) {
        siteUrls.push({
          url: url(`/${p}/${file.name.replace(".md", "")}`),
          priority: 0.5,
        });
      }
    }
  }

  return [
    {
      url: url("/"),
      priority: 1,
    },

    // Cursed way to get rid of repeats
    ...Array.from(
      new Set(PATHS.map((p) => (p.includes("/") ? p.split("/")[0] : p))),
    ).map((p) => ({
      url: url(`/${p}`),
      priority: 0.7,
    })),

    ...siteUrls, // 0.5

    {
      url: url("/loot"),
      priority: 0.5
    },
    {
      url: url("/skins"),
      priority: 0.5
    },
    {
      url: url("/credits"),
      priority: 0.3,
    },
  ];
}

function url(route: string) {
  return `${BASE_URL}${route}`;
}
