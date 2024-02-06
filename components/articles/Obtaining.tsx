"use client";
import { LootLocationsResponse } from "@/app/api/loot/locations/route";
import Link from "@/components/links/Link";
import { ErrorMessages } from "@/lib/api/ErrorCodes";
import { Obstacles } from "@/vendor/suroi/common/src/definitions/obstacles";
import { useQuery } from "@tanstack/react-query";
import TableWithHeader from "../tables/TableWithHeader";

function getChanceString(chance: number): string {
  if (chance == 1) return "100%";
  if (chance == 0) return "0%";

  let prec = 2;
  for (let d = 0.1 ** (prec + 1); prec < 15; d *= 0.1, prec++) {
    if (d <= chance && chance < 1 - d) break;
  }

  return (chance * 100).toFixed(prec) + "%";
}

export default function Obtaining(props: ObtainingProps) {
  const results = useQuery<LootLocationsResponse>({
    queryKey: ["loottablelocations", props],
    queryFn: () =>
      fetch(`/api/loot/locations?item=${props.item}`).then((r) => r.json()),
  });

  if (results.isPending) return "Loading...";
  if (results.error) return `Error: ${results.error.message}`;
  if ("error" in results.data)
    return `Error: ${ErrorMessages[results.data.error]}`;
  if (!results.data.length) return "This item cannot be found in any location.";

  return (
    <div className="mb-8">
      <TableWithHeader
        key={props.item}
        header={["Location", "% Chance"]}
        content={results.data.map(({ tableName, chance }) => {
          const chanceString = getChanceString(chance);
          const name = Obstacles.definitions.find(
            (obs) => obs.idString == tableName,
          )?.name;
          return [
            name ? (
              <Link href={`/obstacles/${tableName}`}>{name}</Link>
            ) : (
              tableName
            ),
            chanceString,
          ];
        })}
      />
    </div>
  );
}

export interface ObtainingProps extends React.PropsWithChildren {
  item: string;
}
