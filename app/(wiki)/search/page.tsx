"use client";

import { SearchBar, SearchItem } from "@/components/interactive/Search";
import { SearchItems, fuseSettings as FuseSettings } from "@/lib/util/search";
import Fuse from "fuse.js";
import { useState } from "react";

export default function SearchPage() {
  const fuse = new Fuse(SearchItems, FuseSettings);

  const [input, setInput] = useState<string>("");
  const results = fuse.search(input);
  return (
    <div className="w-full">
      <SearchBar input={input} inputSetter={setInput} />
      {results.map((result, i) => (
        <SearchItem item={result.item} key={i} />
      ))}
    </div>
  );
}
