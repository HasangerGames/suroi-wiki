import { MDXProps } from "mdx/types";

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
