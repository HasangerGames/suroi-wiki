import { ObjectDefinitions } from "@/vendor/suroi/common/src/utils/objectDefinitions";
import fs from "fs/promises";
import { Metadata } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { notFound, redirect } from "next/navigation";
import path from "path";
import Empty from "../articles/notices/Empty";
import MDXClient from "../client/MDXClient";

export default function GenericMDXPageFactory(args: GenericMDXPageFactoryArgs) {
  return async function GenericMDXPage({
    params
  }: {
    params: {
      item: string
    }
  }) {
    const files = await fs.readdir(
      path.join(process.cwd(), `/app/(wiki)/${args.path}/articles`),
      { withFileTypes: true }
    );

    const articles = Object.fromEntries(
      await Promise.all(
        files.map(async file => [
          file.name,
          await serialize(await fs.readFile(path.join(file.path, file.name)))
        ])
      )
    );

    // Hardcoded redirect for dual guns
    if (params.item.startsWith("dual_")) { return redirect(`/weapons/guns/${params.item.replace("dual_", "")}`); }

    const article = articles[`${params.item}.md`] ?? null;

    if (article) {
      return (
        <>
          <MDXClient {...article} />
        </>
      );
    }

    return (
      <>
        <Empty />
      </>
    );
  };
}

export interface GenericMDXPageFactoryArgs {
  path: string
}

export function GenericGenerateStaticParamsFactory(items: ObjectDefinitions) {
  return () => items.definitions.map(({ idString }) => ({ item: idString }));
}

export function GenericGenerateMetadataFactory(items: ObjectDefinitions) {
  return function({
    params: { item }
  }: {
    params: { item: string }
  }): Metadata {
    const def = items.fromStringSafe(item);
    if (!def) notFound();

    return {
      title: def.name,
      openGraph: {
        type: "article",
        images: [`/api/og/${def.idString}`]
      }
    };
  };
}
