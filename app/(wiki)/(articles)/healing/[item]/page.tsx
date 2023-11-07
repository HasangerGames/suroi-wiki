import { HealingItems } from "@/vendor/suroi/common/src/definitions/healingItems";
import { notFound } from "next/navigation";
import GauzeArticle from "../articles/gauze.mdx";
import { MDXProps } from "mdx/types";

export function generateMetadata({ params }: { params: { item: string } }) {
  const item = HealingItems.find((item) => item.idString === params.item);
  if (!item) notFound();

  return {
    title: item.name,
  };
}

const ARTICLES = {
  gauze: GauzeArticle,
} as Record<string, (props: MDXProps) => JSX.Element>;

export default function HealingPage({ params }: { params: { item: string } }) {
  // TODO: Article MDX functionality
  const article = ARTICLES[params.item] ?? null;
  return <>{article?.({})}</>;
}
