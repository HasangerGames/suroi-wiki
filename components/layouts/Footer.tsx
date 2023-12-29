import { wikiPages } from "@/lib/util/search";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-8 pb-24 border-border border-t text-white/50">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col gap-4">
          <Image
            src="/img/logo.svg"
            alt="Footer Logo"
            width={200}
            height={100}
          />
          <b>Official Suroi Wiki</b>
        </div>
        <div className="flex flex-col gap-2">
          <b>Pages</b>
          {wikiPages.map((page) => (
            <Link key={page.url} href={page.url}>
              {page.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <b>Source code</b>
          <Link href="https://github.com/hasangergames/suroi">
            Suroi Github
          </Link>
          <Link href="https://github.com/hasangergames/suroi-wiki">
            Wiki Github
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <b>Credits</b>
          <span>Made with love by Compositr and Kenos</span>
          <Link href="https://nextjs.org">NextJS by Vercel</Link>
          <Link href="https://tailwindcss.org">TailwindCSS</Link>
          <Link href="https://fusejs.io">Fuse.js</Link>
          <Link href="https://animejs.com">Anime.js</Link>
        </div>
      </div>
    </footer>
  );
}
