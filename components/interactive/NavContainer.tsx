"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import NavigationMenu from "./NavigationMenu";
import Link from "../links/Link";
import { useState } from "react";

export default function NavContainer() {
  const [open, setOpen] = useState(false);
  return (
    <div className="container flex items-center">
      <button
        aria-label="Open mobile navigation"
        className="text-orange"
        onClick={() => setOpen(true)}
      >
        <div className="mr-8 lg:hidden">
          <Menu size={36} />
        </div>
      </button>
      <Link href="/" unstyled>
        <div className="flex items-center group">
          <Image src="/img/logo.svg" alt="Suroi logo" width={169} height={48} />
          <div className="hidden ml-2 sm:block"></div>
        </div>
      </Link>
      <NavigationMenu open={open} setOpen={setOpen} />
    </div>
  );
}
