"use client";

import { HashIcon, Search } from "lucide-react";
import Image from "next/image";
import Link from "@/components/links/Link";
import { useState } from "react";
import { SearchItems } from "@/lib/util/search";
import Fuse from "fuse.js";

export default function Searchbar() {
  const fuse = new Fuse(SearchItems, {
    keys: ["name", "url"],
  });

  const [query, setQuery] = useState("");

  const searchQuery = fuse.search(query).slice(0, 3);

  return (
    <>
      <div className="flex relative justify-end w-full">
        <div className="flex z-10 items-center p-2 rounded-l-md border-l border-y border-border bg-muted">
          <Search className="w-4 h-4" />
        </div>
        <input
          type="text"
          value={query}
          size={40}
          onChange={(e) => setQuery(e.target.value)}
          className="z-10 p-2 w-full rounded-r-md bg-muted"
          placeholder="Search..."
        />
        {query.length > 0 && (
          <div className="top-[95%] max-h-[50vh] overflow-y-auto absolute flex flex-col gap-2 p-2 pt-4 w-full rounded-b-md bg-muted border-x border-b border-border">
            {!searchQuery.length && (
              <div className="flex justify-center items-center">
                <span>No items found</span>
              </div>
            )}
            {searchQuery.map((item) => (
              <div key={item.item.name}>
                <Link
                  href={item.item.url}
                  // Clear query on click
                  onClick={() => setQuery("")}
                >
                  <div className="p-2 rounded-md hover:bg-neutral-600/80 cursor-pointer flex gap-2 transition-colors">
                    <div className="p-1">
                      {
                        item.item.image && 
                        <Image
                          src={item.item.image}
                          alt={`Image of ${item.item.name}`}
                          height={64}
                          width={64}
                          className="w-16 h-16"
                        /> ||
                        <HashIcon className="w-16 h-16" />
                      }
                    </div>
                    <div>
                      <h3 className="p-2 font-bold">{item.item.name}</h3>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
