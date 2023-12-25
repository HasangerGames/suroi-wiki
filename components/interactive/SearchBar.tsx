"use client";

import { HashIcon, Search, SearchIcon } from "lucide-react";
import Image from "next/image";
import Link from "@/components/links/Link";
import { useState } from "react";
import { SearchItems } from "@/lib/util/search";
import Fuse from "fuse.js";
import SearchItem from "./SearchItem";

export default function SearchBar() {
  const fuse = new Fuse(SearchItems, {
    keys: ["name", "url", "description"],
    threshold: 0.4,
  });

  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  const searchQuery = fuse.search(query).slice(0, 7);

  return (
    <div>
      <button
        onKeyDown={(e) => {
          if (e.key === "/" && e.ctrlKey) {
            setOpen(true);
          }
        }}
        onClick={() => setOpen(true)}
      >
        Silly
      </button>
      {open && (
        <div
          onClick={(e) => {
            e.preventDefault();
            // only close when clicking on itself and not a child
            if (e.target === e.currentTarget) return setOpen(false);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && searchQuery.length > 0) {
              document.location.href = searchQuery[0].item.url;
            }
          }}
          className="fixed z-10 top-0 left-0 w-screen h-screen bg-black/70"
        >
          <div className="flex flex-col md:mt-36 mx-auto max-w-screen-lg md:max-h-96 p-2 md:p-4 bg-background rounded-md overflow-y-scroll">
            <div className="flex flex-row gap-4">
              <SearchIcon />
              <input
                type="text"
                value={query}
                size={20}
                onChange={(e) => setQuery(e.target.value)}
                className="z-10 p-2 w-full rounded-md bg-muted mb-4"
                placeholder="Search..."
              />
            </div>
            <div className="flex flex-col gap-4">
              {searchQuery.map((item) => (
                <SearchItem key={item.item.url} item={item.item} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );

  /*return (
    <>
      <div className="flex relative justify-end w-full">
        <div className="flex z-10 items-center p-2 rounded-l-md border-l border-y border-border bg-muted">
          <Search className="w-4 h-4" />
        </div>
        <input
          type="text"
          value={query}
          size={20}
          onChange={(e) => setQuery(e.target.value)}
          className="z-10 p-2 w-full rounded-r-md bg-muted"
          placeholder="Search..."
        />
        {query.length > 0 && (
          <div className="bottom-[95%] md:top-[95%] md:bottom-auto max-h-[50vh] overflow-y-auto absolute flex flex-col gap-2 p-2 pt-4 w-full rounded-md bg-muted border border-border">
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
                      {(item.item.image && (
                        <Image
                          src={item.item.image}
                          alt={`Image of ${item.item.name}`}
                          height={64}
                          width={64}
                          className="w-12 h-12"
                        />
                      )) || <HashIcon className="w-12 h-12" />}
                    </div>
                    <div>
                      <h3 className="px-2 font-bold">{item.item.name}</h3>
                      {item.item.description && <p className="px-2">{item.item.description}</p>}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );*/
}
