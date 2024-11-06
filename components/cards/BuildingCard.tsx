import { BuildingDefinition } from "@/vendor/suroi/common/src/definitions/buildings";
import RenderedBuilding from "../svg/special/RenderedBuilding";

export interface BuildingCardProps extends React.PropsWithChildren {
  building: BuildingDefinition
  title?: string
  id?: string | string[]
}

export default function BuildingCard({ building, title, id }: BuildingCardProps) {
  return (
    <a
      href={`buildings/${building.idString}`}
      className="rounded-md border hover:border-primary transition-colors hover:text-primary flex flex-col gap-4 p-4 cursor-pointer"
    >
      <div className="flex flex-col items-center justify-center text-center">
        <RenderedBuilding building={building} view="ceiling" className="w-100 aspect-square"></RenderedBuilding>
        <span className="font-bold block text-lg underline mt-2">{title ?? building.name}</span>
        <span className="font-mono text-sm">{id ? typeof id === "string" ? id : id.join(" ") : building.idString}</span>
      </div>
    </a>
  );
}
