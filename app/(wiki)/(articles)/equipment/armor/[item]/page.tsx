import { notFound } from "next/navigation";
import { MDXProps } from "mdx/types";
import { Armors } from "@/vendor/suroi/common/src/definitions/armors";
import Vest2Article from "../articles/vest_2.mdx";

export function generateMetadata({ params }: { params: { item: string } }) {
  const item = Armors.find((item) => item.idString === params.item);
  if (!item) notFound();

  return {
    title: item.name,
  };
}

export function generateStaticParams() {
  return Armors.map((item) => ({
    item: item.idString,
  }));
}

const ARTICLES = {
  vest_2: Vest2Article,
} as Record<string, (props: MDXProps) => JSX.Element>;

export default function ArmorPage({ params }: { params: { item: string } }) {
  const article = ARTICLES[params.item] ?? null;
  return <>{article?.({})}</>;
}
