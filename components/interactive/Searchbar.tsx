"use client";

import { SearchResult } from "@/app/api/search/route";
import useDebounce from "@/lib/hooks/debounce";
import { ItemDefinition } from "@/vendor/suroi/common/src/utils/objectDefinitions";
import { useQuery } from "@tanstack/react-query";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "@/components/links/Link";
import { useState } from "react";

export default function Searchbar() {
  const [query, setQuery] = useState("");
  const search = useDebounce(query, 200);

  const searchQuery = useQuery<(ItemDefinition & { search: SearchResult })[]>({
    queryKey: ["search", search],
    enabled: search.length > 0,
    queryFn: () => fetch(`/api/search?q=${search}`).then((res) => res.json()),
    staleTime: Infinity,
  });

  return (
    <>
      <div
        className="flex relative justify-end"
      >
        <div className="flex items-center border-l border-y z-10 border-border rounded-l-md p-2 bg-muted">
          <Search className="w-4 h-4" />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="bg-muted rounded-r-md p-2 z-10 max-sm:max-w-[50%]"
          placeholder="Search..."
        />
        {searchQuery.data && (
          <div className="top-[95%] max-h-[50vh] overflow-y-auto absolute flex flex-col gap-2 p-2 pt-4 w-full rounded-b-md bg-muted border-x border-b border-border">
            {!searchQuery.data.length && (
              <div className="flex justify-center items-center">
                <span>No items found</span>
              </div>
            )}
            {searchQuery.data.map((item) => (
              <div key={item.idString}>
                <Link
                  href={`${item.search.path}/${item.idString}`}
                  // Clear query on click
                  onClick={() => setQuery("")}
                >
                  <div className="p-2 rounded-md hover:bg-neutral-600/80 cursor-pointer flex gap-2 transition-colors">
                    <div className="p-1">
                      <Image
                        src={`${item.search.imagePath}${item.idString}.svg`}
                        alt={`Image of ${item.name}`}
                        height={100}
                        width={100}
                      />
                    </div>
                    <div>
                      <h3 className="font-bold p-2">{item.name}</h3>
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
