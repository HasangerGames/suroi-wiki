import PageCard from "@/components/cards/PageCard";
import BranchLink from "@/components/links/BranchLink";
import CommitLink from "@/components/links/CommitLink";
import Link from "@/components/links/Link";
import GridTable from "@/components/tables/GridTable";
import { wikiPages } from "@/lib/util/search";
import { BRANCH } from "@/lib/util/suroi";
import fs from "fs/promises";
import Image from "next/image";

export default async function Home() {
  const HEAD = await fs.readFile(".git/modules/vendor/suroi/HEAD", "utf8");

  return (
    <main className="flex flex-col gap-4 md:gap-8">
      <div className="flex flex-col-reverse gap-16 md:flex-row">
        <span className="grow flex flex-col gap-4 mt-auto">
          <h1 className="text-7xl font-bold">
            Official{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-suroi to-primary">
              SUROI
            </span>{" "}
            Wiki
          </h1>
          <p className="text-lg">
            The official wiki for the open source 2D battle royale game{" "}
            <Link href="https://suroi.io">Suroi</Link>
          </p>
          <div className="flex flex-row flex-wrap gap-4">
            <Pill href="https://suroi.io" text="Play Suroi" color="suroi" />
            <Pill
              href="https://github.com/HasangerGames/suroi"
              text="Suroi GitHub"
              color="primary"
            />
            <Pill
              href="https://github.com/HasangerGames/suroi-wiki"
              text="Wiki GitHub"
              color="muted"
            />
          </div>
        </span>
        <div>
          <Image
            src="/img/suroi_small.svg"
            alt="Suroi Battle Royale"
            width={150}
            height={150}
            className="transition-transform duration-1000 hover:rotate-[360deg]"
            priority
          />
        </div>
      </div>
      <GridTable>
        <Card title="Open Source">
          This wiki is open source! You can help by contributing{" "}
          <Link href="/meta/writingarticles">writing</Link> or{" "}
          <Link href="/meta/developing">code</Link>.
        </Card>
        <Card title="Elegant">
          We aim to make the user experience smooth and fast while providing
          advanced features.
        </Card>
        <Card title="Generated Information">
          Wiki information is a combination of game definitions and written
          articles.
        </Card>
        <Card title="Auto Updated">
          Information is based on commit <CommitLink sha={HEAD} /> and on branch{" "}
          <BranchLink branch={BRANCH} />.
        </Card>
      </GridTable>
      <div>
        <h1 className="text-xl font-bold text-center mb-4">Wiki Pages</h1>
        <GridTable>
          {wikiPages.filter(page => !page.exclude && page.important).map(page => (
            <PageCard
              key={page.url}
              title={page.name}
              url={page.url}
              image={page.image ?? ""}
              description={page.description}
            />
          ))}
        </GridTable>
      </div>
      <div>
        <h1 className="text-xl font-bold text-center mb-4">More</h1>
        <GridTable>
          {wikiPages.filter(page => !page.exclude && !page.important).map(page => (
            <PageCard
              key={page.url}
              title={page.name}
              url={page.url}
              image={page.image ?? ""}
              description={page.description}
            />
          ))}
        </GridTable>
      </div>
    </main>
  );
}

function Pill({ text, href, color }: PillProps) {
  return (
    <Link
      href={href}
      className={`transition-transform duration-500 p-2 rounded-md bg-${color} hover:no-underline hover:scale-105 text-white min-w-full md:min-w-[15ch] font-bold text-center`}
    >
      {text}
    </Link>
  );
}

interface PillProps extends React.PropsWithChildren {
  text: string
  href: string
  color: string
}

function Card({ title, children }: CardProps) {
  return (
    <span className="p-4 min-w-[15rem] flex flex-col gap-4 rounded-md border border-border">
      <h1 className="text-lg font-bold">{title}</h1>
      <p>{children}</p>
    </span>
  );
}

interface CardProps extends React.PropsWithChildren {
  title: string
}
