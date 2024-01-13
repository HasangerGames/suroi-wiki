import {
  ObjectDefinition,
  ReferenceTo,
} from "@/vendor/suroi/common/src/utils/objectDefinitions";
import path from "path";
import { ComponentType, ReactNode } from "react";
import fs from "node:fs/promises";
import { serialize } from "next-mdx-remote/serialize";
import { notFound, redirect } from "next/navigation";
import MDXClient from "../client/MDXClient";
import Empty from "../articles/notices/Empty";
import MultiSidebar from "../sidebars/MultiSidebar";
import EditButton from "../interactive/EditButton";

/**
 * Handles rendering, layouts and metadata for article pages. Simple fill out the
 * args and export (not as default) the result of this function from the page.tsx
 * @param args See {@link GenericArticlePageArgs}
 * @returns Export this from the page.tsx
 */
export default function GenericArticlePage<T extends ObjectDefinition>(
  args: GenericArticlePageArgs<T>,
) {
  const generateMetadata = ({ params }: { params: { item: string } }) => {
    const item = args.items.find((item) => item.idString === params.item);
    const combinedArticle = args.combinedArticles?.find(
      (combined) => combined.fileName === params.item,
    );

    // If no item or combined article found, return no metadata
    // Don't throw notFound - thats the page's responsbility
    if (!item && !combinedArticle) return {};

    return {
      title: item?.name ?? combinedArticle?.title,
      openGraph: {
        type: "article",
        images: [`/api/og/${item?.idString}`],
      },
    };
  };

  const generateStaticParams = () => {
    return args.items.map((item) => ({
      item: item.idString,
    }));
  };

  const defaultExport = async ({ params }: { params: { item: string } }) => {
    const files = await fs.readdir(
      path.join(process.cwd(), `/app/(wiki)/${args.path}/articles`),
      { withFileTypes: true },
    );

    const articles = Object.fromEntries(
      await Promise.all(
        files.map(async (file) => [
          file.name,
          await serialize(await fs.readFile(path.join(file.path, file.name))),
        ]),
      ),
    );

    // Hardcoded redirect for dual guns
    if (params.item.startsWith("dual_"))
      return redirect(`/weapons/guns/${params.item.replace("dual_", "")}`);

    const item = args.items.find((item) => item.idString === params.item);
    const combinedArticle = args.combinedArticles?.find(
      (combined) => combined.fileName === params.item,
    );
    const parentCombinedArticle = args.combinedArticles?.find((combined) =>
      combined.items.find((item) => item === params.item),
    );
    const combinedArticleItems = combinedArticle?.items.map(
      (item) => args.items.find((i) => i.idString === item)!,
    );

    const article =
      articles[(params.item ?? combinedArticle?.fileName) + ".md"] ?? null;

    if (!item) {
      // Lookup combined articles
      if (!combinedArticle) return notFound();
    }

    if (item && parentCombinedArticle) {
      // Redirect to combined article
      return redirect(`/${args.path}/${parentCombinedArticle.fileName}`);
    }

    return (
      <>
        <div className="grow w-full prose prose-invert">
          <h1 className="hidden sm:block">
            {item?.name ?? combinedArticle?.title}
            <EditButton
              path={args.path}
              id={item?.idString ?? combinedArticle?.fileName ?? ""}
            />
          </h1>
          {
            // If there is an article, render it
            article ? (
              <MDXClient {...article} />
            ) : (
              // Otherwise, render an empty notice
              <Empty />
            )
          }
          {args.After && args.After}
        </div>
        {item ? (
          <args.Sidebar item={item} />
        ) : (
          <MultiSidebar itemNames={combinedArticleItems?.map((a) => a.name)!}>
            {combinedArticleItems!.map((item) => (
              <args.Sidebar key={item.idString} item={item} />
            ))}
          </MultiSidebar>
        )}
        {/* here because reverse flex-col */}
        <div className="prose prose-invert sm:hidden">
          <h1>{item?.name ?? combinedArticle?.title}</h1>
        </div>
      </>
    );
  };

  return {
    generateMetadata,
    generateStaticParams,
    default: defaultExport,
  };
}

export interface GenericArticlePageArgs<T extends ObjectDefinition> {
  path: string;
  items: T[];
  combinedArticles?: CombinedArticle<T>[];
  Sidebar: ComponentType<{ item: T }>;
  After?: ReactNode;
}

export interface CombinedArticle<T extends ObjectDefinition> {
  items: ReferenceTo<T>[];
  fileName: string;
  title: string;
}
