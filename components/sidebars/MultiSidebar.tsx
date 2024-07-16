"use client";

import {
  ObjectDefinition,
  ReferenceTo
} from "@/vendor/suroi/common/src/utils/objectDefinitions";
import { Children, useState } from "react";

/**
 * Allows the user to switch between different sidebars
 * for the same types of Objects
 *
 * Children must be passed in the SAME order as items because
 * Nextjs and React goofy
 */
export default function MultiSidebar<T extends ObjectDefinition>({
  children,
  itemNames
}: MultiSidebarProps<T>) {
  const childrenArray = Children.toArray(children);
  const [index, setIndex] = useState(0);
  const selected = childrenArray[index];

  return (
    <div className="md:min-w-[20rem] md:max-w-[20rem] flex flex-col gap-2">
      <div className="flex flex-row flex-wrap w-full justify-around gap-2 items-center p-1">
        {childrenArray.map((_, i) => (
          <button
            key={itemNames[i]}
            className={`flex justify-center grow rounded-md min-w-[7ch] hover:bg-muted/50 cursor-pointer text-muted-foreground hover:text-white ${
              index === i ? "!text-white bg-muted ring-primary ring" : ""
            } p-2`}
            onClick={() => setIndex(i)}
          >
            {itemNames[i]}
          </button>
        ))}
      </div>
      {selected}
    </div>
  );
}

export interface MultiSidebarProps<T extends ObjectDefinition>
  extends React.PropsWithChildren {
  itemNames: Array<ReferenceTo<T>>
}
