import { serialize } from "next-mdx-remote/serialize";
import fs from "node:fs";
import path from "node:path";

const files = fs.readdirSync(
  path.join(process.cwd(), "/app/(wiki)/changelogs/game/articles"),
  { withFileTypes: true },
);

const articles = files.map((file) =>
  serialize(fs.readFileSync(path.join(file.path, file.name)), {
    parseFrontmatter: true,
  }),
);

console.log(Object.entries(articles))

export default function SuroiChangelog() {
  return (
    <div className="w-full grow">
      <div className="prose prose-invert">
        <h1>Suroi.io Changelog</h1>
      </div>
    </div>
  );
}
