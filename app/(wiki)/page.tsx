import PageCard from "@/components/cards/PageCard";
import CommitLink from "@/components/links/CommitLink";
import fs from "fs/promises";
import Image from "next/image";
import Link from "@/components/links/Link";

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
            width={750 / 2}
            height={300 / 2}
          />
        </div>
        <p>
          Welcome to the official Suroi wiki! Suroi is an open-source 2D battle royale game inspired by surviv.io.
          You can play it at{" "}
          <Link href="https://suroi.io" target="_blank">
            suroi.io
          </Link>
          .
        </p>
        <p>
          This wiki is also open-source! Any contributions are appreciated. To contribute, head over to{" "}
          <Link href="https://github.com/HasangerGames/suroi-wiki" target="_blank">
            the GitHub repo
          </Link>
          .
        </p>
        <p>
          Stats are based off Suroi commit{" "}
          <CommitLink sha={HEAD} />.
        </p>
        <h2>Notable Pages</h2>
      </div>
      <div className="flex flex-col flex-wrap gap-4 mt-8 lg:flex-row">
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
    </main>
  );
}
