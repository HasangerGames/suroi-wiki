"use client";

import { wikiPages } from "@/lib/util/search";
import { MenuIcon, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function NavigationMenu() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>
        <MenuIcon className="w-8 h-8" />
      </button>
      {open && (
        <div className="fixed top-0 left-0 w-screen h-screen md:w-96 md:h-auto flex flex-col-reverse md:flex-col gap-4 p-4 bg-background rounded-md border-border md:border">
          <button onClick={() => setOpen(false)}>
            <X className="w-8 h-8" />
          </button>
          <div className="flex flex-col">
            {wikiPages.map((item) => (
              <Link
                key={item.url}
                href={item.url}
                className="text-lg hover:text-primary py-4"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
