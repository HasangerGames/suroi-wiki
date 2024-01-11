import PageCard from "@/components/cards/PageCard";
import GridTable from "@/components/tables/GridTable";
import Image from "next/image";
import Link from "@/components/links/Link";
import { getSuroiImageLink } from "@/lib/util/suroi";
import { Backpacks } from "@/vendor/suroi/common/src/definitions/backpacks";
import TableWithHeader from "@/components/tables/TableWithHeader";
export default function BackpackPage() {
  return (
    <div className="col-span-full">
      <div className="prose prose-invert">
        <h1>Backpacks</h1>
        <p>
          There are currently {Backpacks.definitions.length} backpacks in the
          game.
        </p>
        <p>
          Wearing backpacks allows you to carry more items, like healing items,
          ammo, and throwables.
        </p>
        <TableWithHeader
          title="Backpack Healing Capacity Statistics"
          header={["Backpack", "Gauze", "Medikit", "Cola", "Tablets"]}
          content={[...Backpacks].map((backpacks) => [
            <>
              <Image
                src={getSuroiImageLink(backpacks)}
                width={32}
                height={32}
                alt={`${backpacks.name} image`}
                className="h-min inline-block m-0 mr-2"
              />
              <Link href={`/equipment/backpacks/${backpacks.idString}`}>
                {backpacks.name}
              </Link>
            </>,
            backpacks.maxCapacity.gauze.toString(),
            backpacks.maxCapacity.medikit.toString(),
            backpacks.maxCapacity.cola.toString(),
            backpacks.maxCapacity.tablets.toString(),
          ])}
        />
        <br></br>
        <TableWithHeader
          title="Backpack Ammunition Capacity Statistics"
          header={[
            "Backpack",
            "12 gauge",
            "5.56mm",
            "7.62mm",
            "9mm",
            "12.7mm",
            "Curadell",
          ]}
          content={[...Backpacks].map((backpacks) => [
            <>
              <Image
                src={getSuroiImageLink(backpacks)}
                width={32}
                height={32}
                alt={`${backpacks.name} image`}
                className="h-min inline-block m-0 mr-2"
              />
              <Link href={`/equipment/backpacks/${backpacks.idString}`}>
                {backpacks.name}
              </Link>
            </>,
            backpacks.maxCapacity["12g"].toString(),
            backpacks.maxCapacity["556mm"].toString(),
            backpacks.maxCapacity["762mm"].toString(),
            backpacks.maxCapacity["9mm"].toString(),
            backpacks.maxCapacity["127mm"].toString(),
            backpacks.maxCapacity.curadell.toString(),
          ])}
        />
        <br></br>
        <TableWithHeader
          title="Backpack Throwable Capacity Statistics"
          header={["Backpack", "Frag Grenade", "Smoke Grenade"]}
          content={[...Backpacks].map((backpacks) => [
            <>
              <Image
                src={getSuroiImageLink(backpacks)}
                width={32}
                height={32}
                alt={`${backpacks.name} image`}
                className="h-min inline-block m-0 mr-2"
              />
              <Link href={`/equipment/backpacks/${backpacks.idString}`}>
                {backpacks.name}
              </Link>
            </>,
            backpacks.maxCapacity.frag_grenade.toString(),
            backpacks.maxCapacity.smoke_grenade.toString(),
          ])}
        />
        <h2>List of Backpacks</h2>
        <div className="not-prose">
          <GridTable>
            {Backpacks.definitions.map((backpack, i) => (
              <PageCard
                title={backpack.name}
                image={getSuroiImageLink(backpack)}
                description={backpack.idString}
                url={`/equipment/backpacks/${backpack.idString}`}
                key={i}
              />
            ))}
          </GridTable>
        </div>
      </div>
    </div>
  );
}
