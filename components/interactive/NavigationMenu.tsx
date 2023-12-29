"use client";

import { wikiPages } from "@/lib/util/search";
import { MenuIcon, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function NavigationMenu() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)} className="hover:text-primary">
        <MenuIcon className="w-8 h-8" />
      </button>
      <div
        className={`${
          open ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-out fixed top-0 left-0 w-screen h-screen md:w-72 flex flex-col gap-4 p-4 bg-background border-border md:border-r`}
      >
        <button onClick={() => setOpen(false)}>
          <X className="w-8 h-8" />
        </button>
        <div className="flex flex-col ml-1">
          {wikiPages.map((item) => (
            <Link
              key={item.url}
              href={item.url}
              className="transition-colors text-lg hover:text-primary py-4"
              onClick={() => setOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
