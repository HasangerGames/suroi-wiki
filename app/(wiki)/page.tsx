import PageCard from "@/components/cards/PageCard";
import CommitLink from "@/components/links/CommitLink";
import fs from "fs/promises";
import Image from "next/image";
import Link from "@/components/links/Link";
import TagLink from "@/components/links/TagLink";
import GridTable from "@/components/tables/GridTable";
import { wikiPages } from "@/lib/util/search";
import { Grid } from "lucide-react";

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
              href="https://github.com/hasangergames/suroi"
              text="Suroi Github"
              color="primary"
            />
            <Pill
              href="https://github.com/hasangergames/suroi-wiki"
              text="Wiki Github"
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
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card title="Open Source">
          This wiki is open source! You can help by contributing{" "}
          <Link href="/meta/writingarticles">writing</Link> or{" "}
          <Link href="/meta/developing">code</Link>
        </Card>
        <Card title="Elegant">
          We aim to make the user experience smooth and fast while providing
          advanced features
        </Card>
        <Card title="Generated Information">
          Wiki information is a combination of game definitions and written
          articles
        </Card>
        <Card title="Auto Updated">
          Information is based on commit <CommitLink sha={HEAD} />
        </Card>
      </div>
      <div>
        <h1 className="text-xl font-bold text-center mb-4">Wiki Pages</h1>
        <GridTable>
          {wikiPages.map((page) => (
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
        <h1 className="text-xl font-bold text-center mb-4">Wiki Team</h1>
        <GridTable>
          <Person
            name="Compositr"
            description="Main Wiki Developer"
            avatar="https://avatars.githubusercontent.com/u/43405050"
            website="https://compositr.dev"
          />
          <Person
            name="Kenos"
            description="Wiki Developer, advanced features"
            avatar="https://avatars.githubusercontent.com/u/75338427"
            website="https://kenos.codeberg.page"
          />
          <Person
            name="Katloo"
            description="Wiki Content Manager"
            avatar="https://avatars.githubusercontent.com/u/132523318"
          />
          <Person
            name="1092384"
            description="Wiki Content Manager"
            avatar="https://avatars.githubusercontent.com/u/66282302"
          />
        </GridTable>
      </div>
      <div>
        <h1 className="text-xl font-bold text-center mb-4">
          Game Development Team
        </h1>
        <GridTable>
          <Person
            name="Hasanger"
            description="Owner of Suroi"
            avatar="https://avatars.githubusercontent.com/u/20248785"
          />
          <Person
            name="Leia"
            description="Developer"
            avatar="https://avatars.githubusercontent.com/u/69596237"
          />
          <Person
            name="Katloo"
            description="Game Balancing and Planning"
            avatar="https://avatars.githubusercontent.com/u/132523318"
          />
          <Person
            name="Damien"
            description="Chores and Suroi Discord bot"
            avatar="https://avatars.githubusercontent.com/u/34838468"
          />
          <Person
            name="eiπ"
            description="Developer"
            avatar="https://avatars.githubusercontent.com/u/91853103"
          />
          <Person
            name="Chpsterz"
            description="Developer"
            avatar="https://avatars.githubusercontent.com/u/72819276"
          />
          <Person
            name="Limenade"
            description="Developer"
            avatar="https://avatars.githubusercontent.com/u/88803242"
          />
          <Person
            name="Radians"
            description="Developer"
            avatar="https://avatars.githubusercontent.com/u/61424950"
          />
          <Person
            name="Milocat"
            description="Developer"
            avatar="https://avatars.githubusercontent.com/u/119687855"
          />
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
  text: string;
  href: string;
  color: string;
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
  title: string;
}

function Person({ avatar, name, description, website }: PersonProps) {
  return (
    <div className="flex flex-col w-full gap-4 p-8 text-center rounded-md border-border border">
      <Image
        src={avatar}
        width={100}
        height={100}
        className="mx-auto w-24 h-24 rounded-full"
        alt={name}
      />
      <h1 className="text-2xl font-bold">{name}</h1>
      <p>{description}</p>
      {website && <Link href={website}>{website}</Link>}
    </div>
  );
}

interface PersonProps extends React.PropsWithChildren {
  avatar: string;
  name: string;
  description: string;
  website?: string;
}
