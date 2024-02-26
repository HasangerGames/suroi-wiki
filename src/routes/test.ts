import { Hono } from "hono";
import MarkdownIt from "markdown-it";

export const TestPages = new Hono();

TestPages.get("/", (c) => {
	const mdIt = MarkdownIt({
		html: true,
		typographer: true,
	});
	return c.text(mdIt.render("# hiiii"));
});
