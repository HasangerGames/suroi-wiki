"use client";

import { ObjectDefinition } from "@/vendor/suroi/common/src/utils/objectDefinitions";
import { ComponentType, useEffect, useState } from "react";

/**
 * Allows the user to switch between different sidebars
 * for the same types of Objects
 */
export default function MultiSidebar<T extends ObjectDefinition>({
  Sidebar,
  items,
}: MultiSidebarProps<T>) {
  const [index, setIndex] = useState(0);
  const selected = items[index];

  return (
    <div className="col-span-2 flex flex-col gap-2">
      <div className="flex flex-row flex-wrap w-full justify-around gap-2 items-center p-1">
        {items.map((item, i) => (
          <button
            key={item.idString}
            className={`flex justify-center grow rounded-md min-w-[7ch] hover:bg-muted/50 cursor-pointer text-muted-foreground hover:text-white ${
              index === i ? "!text-white bg-muted ring-primary ring" : ""
            } p-2`}
            onClick={() => setIndex(i)}
          >
            {item.name}
          </button>
        ))}
      </div>
      <Sidebar item={selected} />
    </div>
  );
}

export interface MultiSidebarProps<T extends ObjectDefinition> {
  items: T[];
  Sidebar: ComponentType<{ item: T }>;
}
