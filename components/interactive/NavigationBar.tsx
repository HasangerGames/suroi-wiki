import Image from "next/image";
import SearchBar from "./SearchBar";
import Link from "next/link";
import NavigationMenu from "./NavigationMenu";

export default function NavigationBar() {
  return (
    <nav className="fixed items-center flex flex-row z-20 justify-between align-middle h-16 p-4 gap-4 bg-background border-border border-t md:border-b md:border-t-0 bottom-0 right-0 left-0 md:bottom-auto md:top-0">
      <NavigationMenu />
      <Link href="/" className="md:mr-auto my-auto">
        <Image src="/img/logo.svg" alt="Suroi Logo" width={100} height={50} />
      </Link>
      <SearchBar />
    </nav>
  );
}
