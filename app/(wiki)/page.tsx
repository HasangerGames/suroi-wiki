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
    <main className="container mx-auto p-4">
      <div className="prose prose-invert text-center">
        <h1 className="text-5xl font-extrabold mb-4">Official Suroi Wiki</h1>
        <div className="flex justify-center mb-8">
          <a href="https://suroi.io" target="_blank">
            <Image
              src="/img/suroi.svg"
              alt="Suroi Battle Royale"
              width={1500 / 2}
              height={350 / 2}
              priority
            />
          </a>
        </div>
        <div className="text-left mb-4"> {/* Adjusted to left-align text */}
          <p className="text-lg">
            Welcome to the official Suroi wiki! Suroi is an open-source 2D battle royale game inspired by surviv.io.
            You can play it at{" "}
            <Link href="https://suroi.io" target="_blank" className="text-orange-500">
              suroi.io
            </Link>
            .
          </p>
          <p className="text-lg">
            This wiki is also open-source! Any contributions are <span className="font-bold">appreciated</span>. To contribute, head over to{" "}
            <Link href="https://github.com/HasangerGames/suroi-wiki" target="_blank" className="text-blue-500">
              the GitHub repo
            </Link>
            .
          </p>
        </div>
        <p className="text-lg text-left mb-4"> {/* Adjusted to left-align text */}
          Stats are based off Suroi commit <CommitLink sha={HEAD} /> @ <TagLink sha={HEAD} /> 
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Notable Pages</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <PageCard
            title="Weapons"
            url="/weapons"
            image="https://raw.githubusercontent.com/HasangerGames/suroi/master/client/public/img/game/weapons/ak47.svg"
            description="List of weapons"
          />
          <PageCard
            title="Healing Items"
            url="/healing"
            image="https://raw.githubusercontent.com/HasangerGames/suroi/master/client/public/img/game/loot/medikit.svg"
            description="List of healing items"
          />
          <PageCard
            title="Loot Tables"
            url="/loot"
            image="https://raw.githubusercontent.com/HasangerGames/suroi/master/client/public/img/game/obstacles/flint_crate.svg"
            description="Loot drop rates"
          />
          <PageCard
            title="Armor"
            url="/equipment/armor"
            image="https://raw.githubusercontent.com/HasangerGames/suroi/master/client/public/img/game/loot/regular_vest.svg"
            description="List of armor, including helmets and vests"
          />
        </div>
      </div>
    </main>
  );
}
