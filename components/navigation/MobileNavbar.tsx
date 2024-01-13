import { SearchIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function MobileNavbar() {
  return (
    <div className="fixed flex lg:hidden flex-row justify-between w-full left-0 right-0 bottom-0 bg-background p-4 border-t border-border">
      <p>Menu (bleh)</p>
      <Image
        src="/img/logo.svg"
        alt="Logo"
        width={100}
        height={100}
        className="w-24 h-12 my-auto"
      />
      <Link href="/search">
        <SearchIcon className="w-12 h-12" />
      </Link>
    </div>
  );
}
