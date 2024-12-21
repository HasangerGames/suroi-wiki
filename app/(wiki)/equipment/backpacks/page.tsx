import PageCard from "@/components/cards/PageCard";
import Link from "@/components/links/Link";
import GridTable from "@/components/tables/GridTable";
import TableWithHeader from "@/components/tables/TableWithHeader";
import { getSuroiImageLink, getSuroiItem } from "@/lib/util/suroi";
import { Backpacks } from "@/vendor/suroi/common/src/definitions/backpacks";
import Image from "next/image";
import { Fragment } from "react";
export default function BackpackPage() {
  return (
    <div className="w-full">
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
          header={[
            "Backpack",
            ...["gauze", "medikit", "cola", "tablets"].map(healing => (
              <Image
                src={getSuroiImageLink(getSuroiItem(healing))}
                alt={healing}
                key={healing}
                width={20}
                height={20}
                className="w-10 h-10"
              />
            ))
          ]}
          content={[...Backpacks].map(backpack => [
            <>
              {backpack.idString !== "bag" && (
                <Image
                  src={getSuroiImageLink(backpack)}
                  width={32}
                  height={32}
                  alt={`${backpack.name} image`}
                  className="h-min inline-block m-0 mr-2"
                />
              )}
              <Link href={`/equipment/backpacks/${backpack.idString}`}>
                {backpack.name}
              </Link>
            </>,
            backpack.maxCapacity.gauze.toString(),
            backpack.maxCapacity.medikit.toString(),
            backpack.maxCapacity.cola.toString(),
            backpack.maxCapacity.tablets.toString()
          ])}
        />
        <br></br>
        <TableWithHeader
          title="Backpack Ammunition Capacity Statistics"
          header={[
            "Backpack",
            ...["12g", "556mm", "762mm", "9mm", "50cal", "338lap", "curadell", "firework_rocket"].map(
              ammo => (
                <Image
                  src={getSuroiImageLink(getSuroiItem(ammo))}
                  alt={ammo}
                  key={ammo}
                  width={32}
                  height={32}
                  className="w-10 h-10 ml-2"
                />
              )
            )
          ]}
          content={[...Backpacks].map(backpack => [
            <Fragment key={backpack.idString}>
              {backpack.idString !== "bag" && (
                <Image
                  src={getSuroiImageLink(backpack)}
                  width={32}
                  height={32}
                  alt={`${backpack.name} image`}
                  className="h-min inline-block m-0 mr-2"
                />
              )}
              <Link href={`/equipment/backpacks/${backpack.idString}`}>
                {backpack.name}
              </Link>
            </Fragment>,
            backpack.maxCapacity["12g"].toString(),
            backpack.maxCapacity["556mm"].toString(),
            backpack.maxCapacity["762mm"].toString(),
            backpack.maxCapacity["9mm"].toString(),
            backpack.maxCapacity["50cal"].toString(),
            backpack.maxCapacity["338lap"].toString(),
            backpack.maxCapacity.curadell.toString(),
            backpack.maxCapacity.firework_rocket.toString()
          ])}
        />
        <br></br>
        <TableWithHeader
          title="Backpack Throwable Capacity Statistics"
          header={[
            "Backpack",
            ...["frag_grenade", "smoke_grenade", "confetti_grenade", "c4"].map(throwable => (
              <Image
                src={getSuroiImageLink(getSuroiItem(throwable))}
                alt={throwable}
                key={throwable}
                width={40}
                height={40}
                className="w-10 h-10"
              />
            ))
          ]}
          content={[...Backpacks].map(backpack => [
            <Fragment key={backpack.idString}>
              {backpack.idString !== "bag" && (
                <Image
                  src={getSuroiImageLink(backpack)}
                  width={32}
                  height={32}
                  alt={`${backpack.name} image`}
                  className="h-min inline-block m-0 mr-2"
                />
              )}
              <Link href={`/equipment/backpacks/${backpack.idString}`}>
                {backpack.name}
              </Link>
            </Fragment>,
            backpack.maxCapacity.frag_grenade.toString(),
            backpack.maxCapacity.smoke_grenade.toString(),
            backpack.maxCapacity.confetti_grenade.toString(),
            backpack.maxCapacity.c4.toString()
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
