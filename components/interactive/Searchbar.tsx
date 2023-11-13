"use client";

import useDebounce from "@/lib/hooks/debounce";
import { Search } from "lucide-react";
import { useState } from "react";

export default function Searchbar() {
  const [query, setQuery] = useState("");
  const search = useDebounce(query, 1500);
  return (
    <div className="flex">
      <div className="flex items-center border-l border-y border-border rounded-l-md p-2 bg-muted">
        <Search className="w-4 h-4" />
      </div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="bg-muted rounded-r-md p-2"
        placeholder="Search..."
      />
    </div>
  );
}
