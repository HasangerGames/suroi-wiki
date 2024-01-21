"use client";

import Fuse, { FuseResult } from "fuse.js";
import { Combobox } from '@headlessui/react'
import { Dispatch, ReactNode, useState } from "react";

export default function AutoComplete<T>(
  items: {
    name: string;
    id: string;
    specialDisplay?: ReactNode;
    item: T
  }[],
  setter: (value: T) => void
) {
  const defaultExport = () => {
    const fuse = new Fuse(items, {
      keys: ['name']
    })
    const [input, setInput] = useState("");
    const results = fuse.search(input);

    return (
      // @ts-expect-error the array find can't return an undefined object
      <Combobox value={input} onChange={(value) => { setter(items.find((item) => item.id === value).item) }} key="name">
        <div className="relative">
          <Combobox.Input
            onChange={(e) => setInput(e.target.value)}
            displayValue={() => "j"}
            className="bg-muted rounded-md"
          />
          <Combobox.Options>
            <li className="absolute -bottom-2 py-2 translate-y-full w-full bg-muted border border-border rounded-md">
              {results.map((result) => (
                <Combobox.Option className="ui-selected:bg-white/20 p-2 ui-active:bg-white/10" value={result.item.id}>{result.item.specialDisplay ?? result.item.name}</Combobox.Option>
              ))}
            </li>
          </Combobox.Options>
        </div>
      </Combobox>
    )
  }
  return defaultExport;
}
