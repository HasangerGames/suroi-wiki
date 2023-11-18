"use client";

import Link from "next/link";
import MenuItem from "./MenuItem";
import Searchbar from "./Searchbar";
import { X } from "lucide-react";

export default function NavigationMenu() {
  return (
    <div
      id="navigation"
      className="absolute top-0 right-0 bottom-0 left-0 w-full transition-transform duration-500 -translate-y-full lg:transition-none bg-background target:translate-y-0 lg:translate-y-0 lg:static h-max"
    >
      <ul className="flex flex-col gap-8 p-8 lg:ml-8 lg:p-0 lg:flex-row">
        <div className="lg:hidden">
          <Link href="#">
            <X size={36} />
          </Link>
        </div>
        <MenuItem title="Weapons" href="/weapons" />
        <MenuItem title="Healing Items" href="/healing" />
        <MenuItem title="Loot Tables" href="/loot" />
        <MenuItem title="Armor" href="/armor" />
        <div className="flex items-center lg:ml-auto">
          <Searchbar />
        </div>
      </ul>
    </div>
  );
}
