import { existsSync, readFileSync } from "fs";
import path from "path";
import matter from "gray-matter";
import { PropsWithChildren } from "hono/jsx";
import MarkdownIt from "markdown-it";
import { CONFIG } from "src/config";

const markdownIt = MarkdownIt(CONFIG.markdownOptions);

export default function Markdown({
	dir,
	file,
}: PropsWithChildren<{
	dir: "wiki" | "changelog";
	file: string;
}>) {
	const mdPath = path.join(process.cwd(), "content", dir, `${file}.md`);
	return (
		<div
			// biome-ignore lint/security/noDangerouslySetInnerHtml: TODO kenos fix your goofy
dangerouslySetInnerHTML={{
				__html: markdownIt.render(matter.read(mdPath).content),
			}}
		/>
	);
}

export function WikiMarkdown({
	title,
	article,
	aside,
}: PropsWithChildren<{ title: string; article: string; aside?: JSX.Element }>) {
	const mdPath = path.join(process.cwd(), "content", "wiki", `${article}.md`);
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
