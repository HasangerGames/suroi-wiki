import { Melees } from "@/vendor/suroi/common/src/definitions/melees";
import { MDXProps } from "mdx/types";
import { notFound } from "next/navigation";
import KBarArticle from "../articles/kbar.mdx";

export function generateMetadata({ params }: { params: { melee: string } }) {
  const melee = Melees.find((melee) => melee.idString === params.melee);
  if (!melee) notFound();

  return {
    title: melee.name,
  };
}

const ARTICLES = {
  kbar: KBarArticle,
} as Record<string, (props: MDXProps) => JSX.Element>;

export default function MeleePage({ params }: { params: { melee: string } }) {
  const article = ARTICLES[params.melee] ?? null;
  return <>{article?.({})}</>;
}
