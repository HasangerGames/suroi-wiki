import { SearchItem } from "@/lib/util/search";
import { HashIcon } from "lucide-react";
import Image from "next/image";

export default function SearchItem({ item }: SearchItemProps) {
  return (
    <a
      href={item.url}
      className="group transition-colors flex flex-row rounded-md p-4 gap-4 bg-muted text-muted-foreground hover:bg-suroi focus:bg-suroi hover:text-black focus:text-black focus:outline-none"
    >
      {(item.image && (
        <Image
          className="w-12 h-12"
          src={item.image}
          width={12 * 4}
          height={12 * 4}
          alt={`${item.name} image`}
        />
      )) || <HashIcon className="w-12 h-12" />}
      <span className="flex flex-col gap-1">
        <h3 className="font-bold">{item.name}</h3>
        <p>{item.description}</p>
        <p className="font-thin">{item.url}</p>
      </span>
    </a>
  );
}

export interface SearchItemProps extends React.PropsWithChildren {
  item: SearchItem;
}
