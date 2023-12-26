import { SearchItem } from "@/lib/util/search";
import { HashIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function SearchItem({ item, onClick }: SearchItemProps) {
  return (
    <Link
      href={item.url}
      className="group transition-colors flex flex-row rounded-md p-4 gap-4 bg-muted text-muted-foreground hover:bg-suroi focus:bg-suroi hover:text-black focus:text-black focus:outline-none"
      onClick={onClick}
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
        <p className="font-light">{item.url}</p>
      </span>
    </Link>
  );
}

export interface SearchItemProps extends React.PropsWithChildren {
  item: SearchItem;
  onClick?: () => unknown;
}
