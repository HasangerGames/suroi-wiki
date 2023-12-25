"use client";

import { useEffect } from "react";
import MenuItem from "./MenuItem";
import SearchBar from "./SearchBar";
import { X } from "lucide-react";
import { SearchItem, wikiPages } from "@/lib/util/search";

export default function NavigationMenu({ open, setOpen }: NavigationMenuProps) {
  function close() {
    setOpen(false);
  }
  return (
    <div
      id="navigation"
      className={`${
        !open ? "-translate-y-full" : "translate-y-0"
      } border-b absolute top-0 right-0 bottom-0 left-0 w-full transition-transform duration-500 ease-out border-b-border target:border-b-2 lg:border-none border-border lg:transition-none bg-background lg:translate-y-0 lg:static h-max`}
    >
      <div className="flex flex-col gap-8 p-8 lg:ml-8 lg:p-0 lg:flex-row">
        <div className="lg:hidden">
          <button aria-label="Close navigation" onClick={close}>
            <X size={36} />
          </button>
        </div>
        {wikiPages.map((item) => (
          <MenuItem
            key={item.url}
            title={item.name}
            href={item.url}
            onClick={close}
          />
        ))}
      </div>
      <SearchBar />
    </div>
  );
}

export interface NavigationMenuProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}
