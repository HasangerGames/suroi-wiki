import { wikiPages } from "@/lib/util/search";
import Image from "next/image";
import NextLink from "next/link";
import React from "react";

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
          {wikiPages.map(page => (
            <FooterLink key={page.url} href={page.url}>
              {page.name}
            </FooterLink>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <b>Source Code</b>
          <FooterLink href="https://github.com/HasangerGames/suroi">
            Suroi GitHub
          </FooterLink>
          <FooterLink href="https://github.com/HasangerGames/suroi-wiki">
            Wiki GitHub
          </FooterLink>
        </div>
        <div className="flex flex-col gap-2">
          <b>Credits</b>
          <span>Made with love by Compositr, Kenos, and zedaes ❤️</span>
          <span>Maintained by the Wiki Team ❤️</span>
          <FooterLink href="/credits">Wiki, Game, Art and Sound Credits</FooterLink>
          <FooterLink href="https://nextjs.org">Next.JS by Vercel</FooterLink>
          <FooterLink href="https://tailwindcss.com">TailwindCSS</FooterLink>
          <FooterLink href="https://fusejs.io">Fuse.js</FooterLink>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  children
}: React.PropsWithChildren & { href: string }) {
  return (
    <NextLink href={href} className="w-fit hover:text-white transition-colors">
      {children}
    </NextLink>
  );
}
