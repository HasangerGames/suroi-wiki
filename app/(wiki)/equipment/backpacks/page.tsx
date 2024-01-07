import PageCard from "@/components/cards/PageCard";
import GridTable from "@/components/tables/GridTable";
import { getSuroiImageLink } from "@/lib/util/suroi";
import { Backpacks } from "@/vendor/suroi/common/src/definitions/backpacks";

export default function BackpackPage() {
	return (
		<div className="col-span-full">
			<div className="prose prose-invert">
				<h1>Backpacks</h1>
				<p>There are currently {Backpacks.definitions.length} backpacks in the game.</p>
				<p>Wearing backpacks allows you to carry more items, like healing items, ammo, and throwables.</p>

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
	)
}
