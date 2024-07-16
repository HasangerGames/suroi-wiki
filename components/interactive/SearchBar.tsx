"use client";

import Link from "@/components/links/Link";
import { SearchItems } from "@/lib/util/search";
import Fuse from "fuse.js";
import { SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";
import SearchItem from "./SearchItem";

export default function SearchBar() {
  const fuse = new Fuse(SearchItems, {
    keys: ["name", "url", "description"],
    threshold: 0.4
  });

  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  const searchQuery = fuse.search(query).slice(0, 7);

  useEffect(() => {
    document.addEventListener("keydown", e => {
      if (e.key === "/" && e.ctrlKey) {
        setOpen(true);
      }

      if (e.key === "Escape") {
        setOpen(false);
      }
    });
  }, []);

  return (
    <div className="not-prose">
      <button
        onClick={() => setOpen(true)}
        className="flex items-center flex-row my-auto md:bg-muted md:rounded-md p-2 text-sm gap-2"
      >
        <SearchIcon className="w-8 h-8 my-auto md:w-4 md:h-4" />
        <span className="hidden md:block gap-2 my-auto">
          Search
          <span className="ml-4 p-1 border border-border rounded-md text-xs">
            Ctrl + /
          </span>
        </span>
      </button>
      {open && (
        <div
          onClick={e => {
            e.preventDefault();
            // only close when clicking on itself and not a child
            if (e.target === e.currentTarget) return setOpen(false);
          }}
          onKeyDown={e => {
            if (e.key === "Enter" && searchQuery.length > 0) {
              setOpen(false);
              document.location.href = searchQuery[0].item.url;
            }
            if (e.key === "Escape") {
              setOpen(false);
            }
          }}
          className="fixed z-[100] w-screen inset-0 h-screen justify-center items-center duration-700 bg-background md:bg-black/50 md:backdrop-blur-md"
        >
          <div className="flex flex-col gap-4 md:mt-36 mx-auto max-w-screen-lg p-2 md:p-4 bg-background rounded-md">
            <div className="flex flex-row justify-center align-middle items-center gap-4">
              <SearchIcon className="w-8 h-8 my-auto" />
              <input
                type="text"
                value={query}
                size={20}
                onChange={e => setQuery(e.target.value)}
                className="z-10 p-2 w-full rounded-md bg-muted"
                placeholder="Search..."
                autoFocus
              />
              <button
                className="rounded-md border-border border p-2 text-xs"
                onClick={() => setOpen(false)}
              >
                ESC
              </button>
            </div>
            <div className="flex flex-col gap-4 md:max-h-96 overflow-y-scroll">
              {searchQuery.map(item => (
                <SearchItem
                  onClick={() => setOpen(false)}
                  key={item.item.url}
                  item={item.item}
                />
              ))}
            </div>
            <div>
              <p>
                Powered by <Link href="https://www.fusejs.io">fuse.js</Link>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
