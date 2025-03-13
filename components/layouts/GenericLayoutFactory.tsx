import {
  ObjectDefinition,
  ObjectDefinitions
} from "@/vendor/suroi/common/src/utils/objectDefinitions";
import { notFound } from "next/navigation";
import React, { ComponentType } from "react";

/**
 * GenericLayoutFactory HOC
 * @deprecated Use {@link GenericArticlePage} instead
 * @param args Pass in sidebar and items
 * @returns Is a HOC that returns a layout to export to Next,js
 */
export default function GenericLayoutFactory<T extends ObjectDefinition>(
  args: GenericLayoutFactoryArgs<T>
) {
  return function GenericLayout({
    children,
    params: { item }
  }: {
    params: {
      item: string
    }
  } & React.PropsWithChildren) {
    const def = args.items.fromStringSafe(item);
    if (!def) notFound();

    return (
      <>
        <div className="grow prose prose-invert">
          <h1 className="hidden sm:block">{def.name}</h1>
          {children}
        </div>
        <args.Sidebar item={def} />
        {/* here because reverse flex-col */}
        <div className="prose prose-invert sm:hidden">
          <h1>{def.name}</h1>
        </div>
      </>
    );
  };
}

export interface GenericLayoutFactoryArgs<T extends ObjectDefinition> {
  Sidebar: ComponentType<{ item: T }>
  items: ObjectDefinitions<T>
}
