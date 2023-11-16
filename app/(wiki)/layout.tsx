import Searchbar from "@/components/interactive/Searchbar";
import Image from "next/image";
import Link from "next/link";

export default function WikiLayout({ children }: React.PropsWithChildren) {
  return (
    <div>
      <nav className="mb-4 py-4 border-b border-b-[gray]">
        <div className="container flex">
          <Link href="/">
            <div className="flex items-center group">
              <Image
                src="/img/logo.svg"
                alt="Suroi logo"
                width={169}
                height={48}
              />
              <div className="ml-2 hidden sm:block">
              </div>
            </div>
          </Link>
          <div className="flex items-center ml-5 min-[530px]:ml-auto">
            <Searchbar />
          </div>
        </div>
      </nav>
      <div className="container my-8">
        <div>{children}</div>
      </div>
    </div>
  );
}
