"use client";

import {
  LootTables,
  LootTiers,
  WeightedItem,
} from "@/vendor/suroi/server/src/data/lootTables";
import { useState } from "react";

export default function LootCalc() {
  const [selectedLootTable, setLootTable] = useState("");
  const [selectedItem, setItem] = useState("");

  const lootTable = LootTables[selectedLootTable as keyof typeof LootTables];

  const items = lootTable ? expandLootTable(lootTable.loot.flat()) : null;

  return (
    <div className="p-4">
      <div>
        <div className="mt-2">
          <div className="flex items-center gap-2">
            <label htmlFor="loot-table">Loot Table</label>
            <select
              id="loot-table"
              className="bg-muted rounded flex-1"
              onChange={(e) => {
                setLootTable(e.target.value);
                setItem("");
              }}
              value={selectedLootTable}
            >
              <option value="">Select One</option>
              {Object.keys(LootTables).map((table) => (
                <option value={table} key={table}>
                  {table}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-2">
          {items?.length && (
            <div className="flex items-center gap-2">
              <label htmlFor="item">Item</label>
              <select
                id="item"
                className="bg-muted rounded flex-1"
                value={selectedItem}
                onChange={(e) => setItem(e.target.value)}
              >
                <option value="">Select One</option>
                {items.map((item) => (
                  <option value={item.item} key={item.item}>
                    {item.item}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        <div className="mt-2">
          <span>
            Chance:{" "}
            {selectedLootTable &&
              selectedItem &&
              calculateChance(selectedLootTable, selectedItem)}
            %
          </span>
        </div>
      </div>
    </div>
  );
}

function calculateChance(
  lootTableId: string,
  itemName: string
): number | string {
  const lootTable = LootTables[lootTableId];

  if (!lootTable) {
    throw "Loot table not found";
  }

  // Flatten the loot table to handle both single item arrays and arrays of arrays.
  const flatLootArray = lootTable.loot.flat(Infinity) as WeightedItem[];

  // Calculate the total weight of the loot table or the tier that the item belongs to.
  let totalWeight = 0;
  let itemWeight = 0;

  for (const loot of flatLootArray) {
    if ("item" in loot && loot.item === itemName) {
      // If the item is found directly in the loot table
      itemWeight += loot.weight;
    } else if ("tier" in loot) {
      // If the item is in a tier, we calculate based on the tier's weights.
      const tierItems = LootTiers[loot.tier];
      if (tierItems) {
        totalWeight += loot.weight; // Add the weight of the tier to the total weight
        const tierItem = tierItems.find(
          (item) => (item as any).item === itemName
        );
        if (tierItem) {
          // The effective weight of the item is its weight times the weight of the tier.
          itemWeight += tierItem.weight * loot.weight;
        }
      }
    }
    // If the loot specifies neither tier nor item directly, we can't calculate and must skip it.
  }

  // Handle cases where item weight is 0 or total weight hasn't been summed up due to not finding the tier.
  if (itemWeight === 0 || totalWeight === 0) {
    throw "Item not found in loot table";
  }

  // Calculate the percentage chance.
  const chance = ((itemWeight / totalWeight) * 100).toFixed(2);

  return chance;
}

function expandLootTable(tier: WeightedItem[]): {
  item: string;
  count?: number;
  spawnSeparately?: boolean;
  weight: number;
}[] {
  return tier.flatMap((entry) => {
    if ("item" in entry) return entry;
    return expandLootTable(LootTiers[entry.tier as keyof typeof LootTiers]);
  });
}
