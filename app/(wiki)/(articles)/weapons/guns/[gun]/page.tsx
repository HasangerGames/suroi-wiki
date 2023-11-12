import { Guns } from "@/vendor/suroi/common/src/definitions/guns";
import { notFound } from "next/navigation";
import AK47Article from "../articles/ak47.mdx";
import USAS12Article from "../articles/usas12.mdx";
import SG17Article from "../articles/s_g17.mdx";
import HP18Article from "../articles/hp18.mdx";
import Stoner63Article from "../articles/stoner_63.mdx";
import LewisGunArticle from "../articles/lewis_gun.mdx";
import { MDXProps } from "mdx/types";

export function generateMetadata({ params }: { params: { gun: string } }) {
  const gun = Guns.find((gun) => gun.idString === params.gun);
  if (!gun) notFound();

  return {
    title: gun.name,
  };
}

export function generateStaticParams() {
  return Guns.map((gun) => ({
    gun: gun.idString,
  }));
}

const ARTICLES = {
  ak47: AK47Article,
  usas12: USAS12Article,
  s_g17: SG17Article,
  hp18: HP18Article,
  stoner_63: Stoner63Article,
  lewis_gun: LewisGunArticle,
} as Record<string, (props: MDXProps) => JSX.Element>;

export default function GunPage({ params }: { params: { gun: string } }) {
  const article = ARTICLES[params.gun] ?? null;
  return <>{article?.({})}</>;
}
