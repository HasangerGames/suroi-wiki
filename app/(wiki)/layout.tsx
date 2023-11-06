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
                width={96 / 2}
                height={96 / 2}
              />
              <div className="ml-2">
                <span className="text-lg font-bold group-hover:underline">
                  Suroi
                  <span className="text-suroi">Auto</span>
                  Wiki
                </span>
              </div>
            </div>
          </Link>
          <div className="flex-1"></div>
          <div></div>
        </div>
      </nav>
      <div className="container my-8">
        <div>{children}</div>
      </div>
    </div>
  );
}
