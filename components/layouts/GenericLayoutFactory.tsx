import { ObjectDefinition } from "@/vendor/suroi/common/src/utils/objectDefinitions";
import { notFound } from "next/navigation";
import React, { ComponentType } from "react";

/**
 * GenericLayoutFactory HOC
 * @deprecated Use {@link GenericArticlePage} instead
 * @param args Pass in sidebar and items
 * @returns Is a HOC that returns a layout to export to Next,js
 */
export default function GenericLayoutFactory<T extends ObjectDefinition>(
  args: GenericLayoutFactoryArgs<T>,
) {
  return function GenericLayout({
    children,
    params,
  }: {
    params: {
      item: string;
    };
  } & React.PropsWithChildren) {
    const item = args.items.find((item) => item.idString === params.item);
    if (!item) notFound();

    return (
      <>
        <div className="col-span-4 lg:col-span-6 prose prose-invert">
          <h1 className="hidden sm:block">{item.name}</h1>
          {children}
        </div>
        <args.Sidebar item={item} />
        {/* here because reverse flex-col */}
        <div className="prose prose-invert sm:hidden">
          <h1>{item.name}</h1>
        </div>
      </>
    );
  };
}

export interface GenericLayoutFactoryArgs<T extends ObjectDefinition> {
  Sidebar: ComponentType<{ item: T }>;
  items: T[];
}
