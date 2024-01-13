import { SearchItem } from "@/lib/util/search";
import { SearchIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { Dispatch } from "react";

export function SearchBar({ input, inputSetter }: SearchBarProps) {
  return (
    <div className="flex flex-row px-4 gap-4 w-full bg-muted rounded-md">
      <SearchIcon className="w-6 h-6 my-4" />
      <input
        className="min-w-0 w-full grow form-input bg-transparent outline-0 ring-0 border-0 focus:outline-0 focus:ring-0 focus:border-0"
        value={input}
        onChange={(e) => inputSetter(e.target.value)}
      />
    </div>
  );
}

export interface SearchBarProps extends React.PropsWithChildren {
  input: string;
  inputSetter: Dispatch<string>;
}

export function SearchItem({ item }: SearchItemProps) {
  return (
    <Link href={item.url} className="flex flex-row p-4 gap-4">
      {item.image && (
        <Image
          src={item.image}
          alt={`${item.name} Image`}
          width={50}
          height={50}
          className="w-16 h-16"
        />
      )}
      <div className="flex flex-col gap-2">
        <h1 className="font-bold">{item.name}</h1>
        <p>{item.description && item.description}</p>
      </div>
    </Link>
  );
}

export interface SearchItemProps extends React.PropsWithChildren {
  item: SearchItem;
}
