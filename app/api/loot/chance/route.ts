/* eslint-disable @typescript-eslint/restrict-plus-operands */
import APIErrorCodes from "@/lib/api/ErrorCodes";
import { Loots } from "@/vendor/suroi/common/src/definitions/loots";
import {
  LootTables,
  LootTiers
} from "@/vendor/suroi/server/src/data/lootTables";
import { NextRequest, NextResponse } from "next/server";

// Handle chance calculations on the server so we dont send all the weapon definitions to the client
export async function GET(req: NextRequest) {
  const tableSearch = req.nextUrl.searchParams.get("table");
  const itemSearch = req.nextUrl.searchParams.get("item");

  if (!tableSearch || !itemSearch) { return new NextResponse(null, { status: 400 }); }

  const item = Loots.definitions.find(loot => loot.idString === itemSearch);
  if (!item) {
    return new NextResponse(
      JSON.stringify({
        error: APIErrorCodes.ItemNotFound
      }),
      { status: 404 }
    );
  }

  const lootTable = LootTables[tableSearch];
  if (!lootTable) {
    return new NextResponse(
      JSON.stringify({
        error: APIErrorCodes.LootTableNotFound
      }),
      { status: 404 }
    );
  }

  // Check for item in loot table itself
  const lootTableItem = lootTable.loot
    .flat()
    .find(loot => "item" in loot && loot.item === itemSearch);

  const tableTotal = lootTable.loot
    .flat()
    .reduce((acc, loot) => acc + loot.weight, 0);

  if (lootTableItem) {
    // Calculate chance early

    return new NextResponse(
      JSON.stringify({
        itemName: item.name,
        weight: lootTableItem.weight,
        total: tableTotal,
        chance: lootTableItem.weight / tableTotal,
        oneIn: Math.round(1 / (lootTableItem.weight / tableTotal))
      })
    );
  }

  // Search through all the tiers one by one till we find the item
  for (const entry of lootTable.loot.flat()) {
    if ("item" in entry) continue; // We should have already checked for this

    const tier = LootTiers[entry.tier];
    if (!tier) continue; // This should never happen

    const tierItem = tier.find(
      // As of now there should always be `"item" in loot`
      // TODO: Make recursive function to expand loot tiers that reference other tiers in the future
      loot => "item" in loot && loot.item === itemSearch
    );

    if (!tierItem) continue;

    // Calculate chance
    const tierTotal = tier.reduce((acc, loot) => acc + loot.weight, 0);

    const chance = (tierItem.weight / tierTotal) * (entry.weight / tableTotal);

    return new NextResponse(
      JSON.stringify({
        itemName: item.name,
        itemWeight: tierItem.weight,
        tierTotal: tierTotal,
        tierWeight: entry.weight,
        tableTotal: tableTotal,
        chance,
        oneIn: Math.round(1 / chance)
      })
    );
  }

  return new NextResponse(
    JSON.stringify({
      error: APIErrorCodes.ItemNotInLootTable
    }),
    { status: 404 }
  );
}
