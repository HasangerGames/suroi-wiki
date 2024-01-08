import { WIKI_BRANCH, WIKI_URL } from "@/lib/util/suroi";
import { PenLineIcon } from "lucide-react";
import Link from "next/link";

export default function EditButton({ path, id }: EditButtonProps) {
  return (
    <Link
      href={`${WIKI_URL}edit/${WIKI_BRANCH}/app/(wiki)/${path}/articles/${id}.md`}
      className="inline-block not-prose"
    >
      <div className="transition-colors m-4 p-2 rounded-md bg-muted hover:bg-primary flex flex-row gap-2 text-lg font-normal">
        <PenLineIcon />
        <span>Edit on GitHub</span>
      </div>
    </Link>
  );
}

export interface EditButtonProps extends React.PropsWithChildren {
  /**
   * The path of the edit link, which is relative to WIKI_URL/edit/WIKI_BRANCH/app/(wiki)/
   * Exclude /articles
   * eg: weapons/guns
   */
  path: string;
  /**
   * The item ID string (or markdown document filename without extension)
   * eg: model_37
   */
  id: string;
}
