import APIErrorCodes from "@/lib/api/ErrorCodes";
import { Loots } from "@/vendor/suroi/common/src/definitions/loots";
import {
  LootTable,
  LootTables,
  LootTiers,
  WeightedItem,
} from "@/vendor/suroi/server/src/data/lootTables";
import { NextRequest, NextResponse } from "next/server";

type ChanceCollection = Record<string, number>;

const LootTierItemChances: Record<string, ChanceCollection> = {};

// let's assume all loot tier chains does not form a loop
// or the game may enter an infinite loop when generating loots
// which breaks both the game and this function
function registerItemChances(tier: string, items: WeightedItem[]): ChanceCollection {
  if (tier in LootTierItemChances) return LootTierItemChances[tier];

  const result: ChanceCollection = {};
  const totalWeight = items.reduce((acc, cur) => acc + cur.weight, 0);

  function addEntry(item: string, chance: number) {
    if (item in result) result[item] += chance;
    else result[item] = chance;
  }

  items.forEach(item => {
    if ('item' in item && item.item != null) {
      addEntry(item.item, item.weight / totalWeight);
    }
    if ('tier' in item) {
      const factor = item.weight / totalWeight;
      const subTierChances = registerItemChances(item.tier, LootTiers[item.tier]);
      for (const it in subTierChances) {
        addEntry(it, subTierChances[it] * factor);
      }
    }
  });

  LootTierItemChances[tier] = result;
  return LootTierItemChances[tier];
}

for (const tier in LootTiers) {
  registerItemChances(tier, LootTiers[tier]);
}

// type guard
function is2dArray<T>(a: T[] | T[][]): a is T[][] {
  return Array.isArray(a[0]);
}

function calcChance(table: LootTable, item: string): number {
  let singleRollChance = 0;

  const lootPacks = is2dArray(table.loot) ? table.loot : [table.loot];
  lootPacks.forEach(pack => {
    const totalWeight = pack.reduce((acc, cur) => acc + cur.weight, 0);

    pack.forEach(loot => {
      const chance = loot.weight / totalWeight;
      let singlePackChance = 0;
      if ('item' in loot && loot.item == item) {
        singlePackChance += chance;
      }
      if ('tier' in loot) {
        singlePackChance += (LootTierItemChances[loot.tier][item] ?? 0) * chance;
      }

      singleRollChance = 1 - (1 - singleRollChance) * (1 - singlePackChance);
    });
  });

  if (singleRollChance == 0) return 0;

  let acc = (1 - singleRollChance) ** table.min;
  let chance = 0;
  for (let i = table.min; i <= table.max; i++) {
    chance += 1 - acc;
    acc *= (1 - singleRollChance);
  }

  return chance / (table.max - table.min + 1);
}

export async function GET(req: NextRequest) {
  const itemSearch = req.nextUrl.searchParams.get("item");
  if (!itemSearch) return new NextResponse(null, { status: 400 });

  const item = Loots.definitions.find((loot) => loot.idString === itemSearch);
  if (!item)
    return new NextResponse(
      JSON.stringify({
        error: APIErrorCodes.ItemNotFound,
      }),
      { status: 404 },
    );

  const result: LootLocationsResponse = [];
  for (const tableName in LootTables) {
    const chance = calcChance(LootTables[tableName], itemSearch);
    if (chance == 0) continue;
    result.push({ tableName, chance });
  }
  result.sort(({ chance: a }, { chance: b }) => b - a);

  return new NextResponse(JSON.stringify(result));
}

export type LootLocationsResponse = {
  tableName: string;
  chance: number;
}[] | {
  error: APIErrorCodes
};