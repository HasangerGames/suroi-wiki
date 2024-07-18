import { ObjectDefinition } from "@/vendor/suroi/common/src/utils/objectDefinitions";
import { ObjectCard } from "../cards/ObjectCard";

export default function GenericListingPageFactory(
  objects: readonly ObjectDefinition[],
  name: string,
  path: string,
  description?: string
) {
  return function GenericListingPage() {
    return (
      <main className="col-span-8 text-white">
        <div className="prose prose-invert">
          <h1>{name}</h1>
          {description && <p>{description}</p>}
        </div>
        <div className="flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4">
          {objects.map(obj => (
            <ObjectCard obj={obj} path={path} key={obj.idString} />
          ))}
        </div>
      </main>
    );
  };
}
