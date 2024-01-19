"use client";

import { AutoCompleteItem } from "@/lib/util/types";
import Fuse, { FuseResult } from "fuse.js";
import { ChevronsUpDown } from "lucide-react";
import { Dispatch, useState } from "react";

export default function AutoComplete({ items, setter }: AutoCompleteProps) {
  const fuse = new Fuse(items, {
    keys: ["name"],
  });
  const [input, setInput] = useState("");
  const [selection, setSelection] = useState(0);
  const [isSelected, setIsSelected] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const results: FuseResult<AutoCompleteItem>[] = fuse.search(input);

  const Item = (item: AutoCompleteItem, i: number) => {
    return (
      <button
        onClick={() => {
          setIsSelected(true)
          setInput(item.name)
          setIsOpen(false)
          setter(item.item)
        }}
        className={`w-full text-left p-2 rounded-md hover:bg-white/5 ${
          selection === i ? "bg-white/10" : ""
        }`}
      >
        {item.specialDisplay ?? item.name}
      </button>
    )
  }
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
          setIsOpen(true)
        }}
        type="text"
        className="form-input w-full h-full bg-muted rounded-md"
        onClick={() => {
          setIsSelected(false);
          setIsOpen(true)
        }
        }
      />
      <ChevronsUpDown className="absolute top-0 right-2 bottom-0 my-auto" />
      {isOpen && 
        <div className="absolute z-10 flex flex-col max-h-[20rem] overflow-y-scroll w-full gap-2 -bottom-2 left-0 translate-y-full bg-background border border-border p-2 rounded-md">
          {input.length > 0
            ? results.length > 0
              ? results.map((result, i) => (
                <Item key={i} item={result.item} i={i} />
              ))
              : <p>No results found!</p>
            : items.map((item, i) => (
                <Item key={i} item={item} i={i} />
            ))
          }
        </div>
      }
    </div>
  );
}

export interface AutoCompleteProps extends React.PropsWithChildren {
  items: AutoCompleteItem[];
  setter: Dispatch<string>;
}
