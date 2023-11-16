import Searchbar from "@/components/interactive/Searchbar";
import { Russo_One } from "next/font/google";
import Image from "next/image";
import Link from "@/components/links/Link";

const font = Russo_One({
  subsets: ["latin"],
  weight: "400",
});

export default function WikiLayout({ children }: React.PropsWithChildren) {
  return (
    <div>
      <nav className="mb-4 py-4 border-b border-b-[gray]">
        <div className="container flex">
          <Link href="/" unstyled>
            <div className="flex items-center group">
              <Image
                src="/img/logo.svg"
                alt="Suroi logo"
                width={96 / 2}
                height={96 / 2}
              />
              <div className="ml-2 hidden sm:block">
                <span
                  className={`${font.className} text-lg font-bold group-hover:underline`}
                >
                  Suroi
                  <span className="text-suroi">Auto</span>
                  Wiki
                </span>
              </div>
            </div>
          </Link>
          <div className="flex-1"></div>
          <div className="flex items-center">
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
