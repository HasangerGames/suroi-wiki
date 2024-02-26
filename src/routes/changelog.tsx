import { readFileSync, readdirSync } from "fs";
import { Hono } from "hono";
import path from "path";
import * as matter from "gray-matter";
import Layout from "src/layouts/layout";
import Markdown from "src/components/generics/markdown";

export const ChangelogPages = new Hono();

const changelogFiles = readdirSync(path.join(process.cwd(), "content", "changelog"));

const changelogFrontmatter: {
  title: string;
  date: string;
  author?: string;
  filename: string;
}[] = changelogFiles.map((f) => {
  const data = matter.read(path.join(process.cwd(), "content", "changelog", f)).data;
  return { title: data.title, date: data.date, author: data.author, filename: f };
});

const changelog = changelogFrontmatter.sort((a, b) => {
  return new Date(a.date).getTime() - new Date(b.date).getTime();
}).reverse();

ChangelogPages.get("/", (c) => {
  return c.html(
    <Layout title="Changelog">
      <main class="prose prose-white">
        <ul>
          {changelog.map((log) => (
            <li>
              <a href={`/changelog/${log.filename.slice(0, -3)}`}>
                {log.title} - {new Date(log.date).toDateString()}
              </a>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
});

changelog.forEach(log => {
  ChangelogPages.get("/" + log.filename.slice(0, -3), c => {
    return c.html(
      <Layout title={log.title}>
        <article class="prose prose-white max-w-full">
          <h1>{log.title}</h1>
          <ul>
            <li>{new Date(log.date).toDateString()}</li>
            <li>Written by {log.author}</li>
          </ul>
          <Markdown dir="changelog" file={log.filename.slice(0, -3)} />
        </article>
      </Layout>
    )
  })
})