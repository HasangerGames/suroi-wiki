import { Tags } from "lucide-react";
import fs from "fs/promises";
import path from "path";
import Link from "./Link";

export default async function TagLink({ sha, children }: TagLinkProps) {
  const tags = await fs.readdir(".git/modules/vendor/suroi/refs/tags", {
    withFileTypes: true,
  });
  let tag: string = "";
  for (const file of tags) {
    const tagSha = await fs.readFile(path.join(file.path, file.name), "utf-8");
    if (tagSha === sha) {
      tag = file.name;
      break;
    }
  }

  return (
    <Link
      target="_blank"
      href={`https://github.com/HasangerGames/suroi/releases/tag/${tag}`}
      className="inline-flex gap-1 items-baseline"
    >
      <span className="inline-flex self-center">
        <Tags className="translate-y-0.5" />
      </span>
      <span className="flex-1">{children ?? (tag || "(No tag)")}</span>
    </Link>
  );
}

export interface TagLinkProps extends React.PropsWithChildren {
  sha: string;
}
