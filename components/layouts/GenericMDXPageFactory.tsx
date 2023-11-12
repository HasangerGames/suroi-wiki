import { ItemDefinition } from "@/vendor/suroi/common/src/utils/objectDefinitions";
import { MDXProps } from "mdx/types";
import { notFound } from "next/navigation";

export default function GenericMDXPageFactory(args: GenericMDXPageFactoryArgs) {
  return function GenericMDXPage({
    params,
  }: {
    params: {
      item: string;
    };
  }) {
    const article = args.articles[params.item] ?? null;
    return <>{article?.({})}</>;
  };
}

export interface GenericMDXPageFactoryArgs {
  articles: Record<string, (props: MDXProps) => JSX.Element>;
}

export function GenericGenerateStaticParamsFactory<T extends ItemDefinition>(
  items: T[]
) {
  return function () {
    return items.map((item) => ({
      item: item.idString,
    }));
  };
}

export function GenericGenerateMetadataFactory<T extends ItemDefinition>(items: T[]) {
  return function ({ params }: { params: { item: string } }) {
    const item = items.find((item) => item.idString === params.item);
    if (!item) notFound();

    return {
      title: item.name,
    };
  };
}
