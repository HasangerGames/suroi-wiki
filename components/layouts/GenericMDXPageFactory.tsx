import { ItemDefinition } from "@/vendor/suroi/common/src/utils/objectDefinitions";
import { notFound } from "next/navigation";
import fs from "fs/promises";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
// import { MDXRemote } from "next-mdx-remote";
import MDXClient from "../client/MDXClient";
import { Metadata } from "next";

export default function GenericMDXPageFactory(args: GenericMDXPageFactoryArgs) {
  return async function GenericMDXPage({
    params,
  }: {
    params: {
      item: string;
    };
  }) {
    const files = await fs.readdir(
      path.join(process.cwd(), `/app/(wiki)/(articles)/${args.path}/articles`),
      { withFileTypes: true }
    );

    const articles = Object.fromEntries(
      await Promise.all(
        files.map(async (file) => [
          file.name,
          await serialize(await fs.readFile(path.join(file.path, file.name))),
        ])
      )
    );

    const article = articles[params.item + ".mdx"] ?? null;

    if (article)
      return (
        <>
          <MDXClient {...article} />
        </>
      );

    return <></>;
  };
}

export interface GenericMDXPageFactoryArgs {
  path: string;
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

export function GenericGenerateMetadataFactory<T extends ItemDefinition>(
  items: T[]
) {
  return function ({ params }: { params: { item: string } }): Metadata {
    const item = items.find((item) => item.idString === params.item);
    if (!item) notFound();

    return {
      title: item.name,
      openGraph: {
        type: "article",
      }
    };
  };
}
