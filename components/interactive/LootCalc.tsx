"use client";
import APIErrorCodes, { ErrorMessages } from "@/lib/api/ErrorCodes";
import useDebounce from "@/lib/hooks/debounce";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function LootCalc() {
  const [lootTable, setLootTable] = useState("");
  const [item, setItem] = useState("");

  const debouncedTable = useDebounce(lootTable, 500);
  const debouncedItem = useDebounce(item, 500);

  const results = useQuery({
    queryKey: ["loottablechance", debouncedTable, debouncedItem],
    enabled: !!(debouncedTable && debouncedItem),
    queryFn: () =>
      fetch(
        `/api/loot/chance?table=${debouncedTable}&item=${debouncedItem}`,
      ).then((r) => r.json()),
  });

  return (
    <div className="p-4">
      <div>
        <div className="mt-2">
          <div className="flex gap-2 items-center">
            <div>
              <span className="font-bold">Loot Table</span>
            </div>
            <div className="flex-1">
              <input
                type="text"
                value={lootTable}
                onChange={(e) => setLootTable(e.target.value)}
                className="w-full rounded-md bg-muted"
              />
            </div>
          </div>
        </div>
        <div className="mt-2">
          <div className="flex gap-2 items-center">
            <div>
              <span className="font-bold">Item ID</span>
            </div>
            <div className="flex-1">
              <input
                type="text"
                value={item}
                onChange={(e) => setItem(e.target.value)}
                className="w-full rounded-md bg-muted"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 text-center">
        {results.data?.error && (
          <p>Error: {ErrorMessages[results.data.error as APIErrorCodes]}</p>
        )}
        {results.data && !results.data.error ? (
          <p>
            <b>{results.data.itemName}</b> has a{" "}
            <code>{(results.data.chance * 100).toPrecision(2)}%</code> or{" "}
            <b>1 in {results.data.oneIn}</b> chance of dropping.
          </p>
        ) : null}
      </div>
    </div>
  );
}
