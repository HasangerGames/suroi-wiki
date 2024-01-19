"use client";

import { AutoCompleteItem } from "@/lib/util/types";
import Fuse, { FuseResult } from "fuse.js";
import { Dispatch, useState } from "react";

export default function AutoComplete({ items, setter }: AutoCompleteProps) {
  const fuse = new Fuse(items, {
    keys: ["name"],
  });
  const [input, setInput] = useState("");
  const [selection, setSelection] = useState(0);
  const [isSelected, setIsSelected] = useState(false);
  const results: FuseResult<AutoCompleteItem>[] = fuse.search(input);
  return (
    <div
      className="relative w-full"
      onKeyDown={(e) => {
        switch (e.key) {
          case "Enter":
            if (!isSelected && results.length != 0) {
              setInput(results[selection].item.name);
              setIsSelected(true);
              setter(results[selection].item.item);
            }
            break;
          case "ArrowDown":
            setSelection(
              selection < results.length ? selection + 1 : results.length,
            );
            break;
          case "ArrowUp":
            setSelection(selection > 0 ? selection - 1 : 0);
            break;
        }
      }}
    >
      <input
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          setIsSelected(false);
          setSelection(0);
        }}
        type="text"
        className="form-input w-full h-full bg-muted rounded-md"
      />
      {input.length > 0 && !isSelected && (
        <div className="absolute z-10 flex flex-col min-w-[20rem] gap-2 -bottom-2 left-0 translate-y-full bg-background border border-border p-2 rounded-md">
          {results.length > 0 ? (
            results.map((result, i) => (
              <button
                onClick={() => {
                  setInput(result.item.name);
                  setIsSelected(true);
                  setter(result.item.item);
                }}
                key={i}
                className={`w-full text-left p-2 rounded-md hover:bg-white/5 ${
                  selection === i ? "bg-white/10" : ""
                }`}
              >
                {result.item.specialDisplay ?? result.item.name}
              </button>
            ))
          ) : (
            <p>No results found!</p>
          )}
        </div>
      )}
    </div>
  );
}

export interface AutoCompleteProps extends React.PropsWithChildren {
  items: AutoCompleteItem[];
  setter: Dispatch<string>;
}
