import NavigationMenu from "@/components/interactive/NavigationMenu";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function WikiLayout({ children }: React.PropsWithChildren) {
  return (
    <div>
      <nav className="mb-4 py-4 border-b border-b-[gray]">
        <div className="container flex items-center">
          <Link href="#navigation">
            <div className="mr-8 lg:hidden">
              <Menu size={36} />
            </div>
          </Link>
          <Link href="/">
            <div className="flex items-center group">
              <Image
                src="/img/logo.svg"
                alt="Suroi logo"
                width={169}
                height={48}
              />
              <div className="hidden ml-2 sm:block"></div>
            </div>
          </Link>
          <NavigationMenu />
        </div>
      </nav>
      <div className="container my-8">
        <div>{children}</div>
      </div>
    </div>
  );
}
