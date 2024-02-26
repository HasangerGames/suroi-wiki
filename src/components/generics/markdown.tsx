import MarkdownIt from "markdown-it";
import { existsSync, readFileSync } from "fs";
import { CONFIG } from "src/config";
import path from "path";
import { PropsWithChildren } from "hono/jsx";
import matter from "gray-matter";

const markdownIt = MarkdownIt(CONFIG.markdownOptions);

export default function Markdown({
  dir,
  file,
}: PropsWithChildren<{
  dir: "wiki" | "changelog";
  file: string;
}>) {
  const mdPath = path.join(process.cwd(), "content", dir, file + ".md");
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: markdownIt.render(matter.read(mdPath).content),
      }}
    ></div>
  );
}

export function WikiMarkdown({
  title,
  article,
  aside,
}: PropsWithChildren<{ title: string; article: string; aside?: JSX.Element }>) {
  const mdPath = path.join(process.cwd(), "content", "wiki", article + ".md");
  return (
    <article class="flex flex-col-reverse lg:flex-row gap-4 max-w-screen-xl">
      <div class="prose prose-white max-w-full grow">
        <h1>{title}</h1>
        {existsSync(mdPath) ? (
          <Markdown dir="wiki" file={article} />
        ) : (
          <p>Empty page (womp womp)</p>
        )}
      </div>
      {aside && <div class="max-w-96">{aside}</div>}
    </article>
  );
}
