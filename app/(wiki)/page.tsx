import PageCard from "@/components/cards/PageCard";
import CommitLink from "@/components/links/CommitLink";
import fs from "fs/promises";
import Image from "next/image";
import Link from "@/components/links/Link";
import TagLink from "@/components/links/TagLink";
import GridTable from "@/components/tables/GridTable";
import { wikiPages } from "@/lib/util/search";

export default async function Home() {
  const HEAD = await fs.readFile(".git/modules/vendor/suroi/HEAD", "utf8");

  return (
    <main>
      <div className="prose prose-invert">
        <h1>Official Suroi Wiki</h1>
        <div className="flex justify-center">
          <Image
            src="/img/suroi.svg"
            alt="Suroi Battle Royale"
            width={1350 / 1.5}
            height={450 / 1.5}
            priority
          />
        </div>
        <p>
          Welcome to the official Suroi wiki! Suroi is an open-source 2D battle
          royale game inspired by surviv.io. You can play it at{" "}
          <Link href="https://suroi.io" target="_blank">
            suroi.io
          </Link>
          .
        </p>
        <p>
          This wiki is also open-source! Any contributions are appreciated. To
          contribute, head over to{" "}
          <Link
            href="https://github.com/HasangerGames/suroi-wiki"
            target="_blank"
          >
            the GitHub repo
          </Link>
          .
        </p>
        <p>
          Stats are based off Suroi commit <CommitLink sha={HEAD} /> @{" "}
          <TagLink sha={HEAD} />
        </p>
        <h2>Notable Pages</h2>
      </div>
      <GridTable>
        {wikiPages.map((page) => (
          // eslint-disable-next-line react/jsx-key
          <PageCard
            title={page.name}
            url={page.url}
            image={page.image}
            description={page.description}
          />
        ))}
      </GridTable>
    </main>
  );
}
