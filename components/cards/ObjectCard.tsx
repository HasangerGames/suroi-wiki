import { getSuroiImageLink } from "@/lib/util/suroi";
import { ObjectDefinition } from "@/vendor/suroi/common/src/utils/objectDefinitions";
import Image from "next/image";
import Link from "next/link";

export function ObjectCard({ obj, path }: ObjectCardProps) {
  return (
    <Link
      href={`${path}/${obj.idString}`}
      className="rounded-md border hover:border-primary transition-colors hover:text-primary flex gap-4 p-4 cursor-pointer"
    >
      <div className="flex items-center">
        <Image
          src={getSuroiImageLink(
            obj,
            "variations" in obj && obj.variations ? 1 : 0
          )}
          alt={`Image of ${obj.name}`}
          width={100}
          height={100}
        />
      </div>
      <div className="flex-1">
        <span className="font-bold block text-lg underline">{obj.name}</span>
        <span className="font-mono text-sm">{obj.idString}</span>
      </div>
    </Link>
  );
}

interface ObjectCardProps {
  obj: ObjectDefinition;
  path: string;
}
