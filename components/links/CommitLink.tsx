import { GitCommitHorizontal } from "lucide-react";
import Link from "./Link";

export default function CommitLink({ sha, children }: CommitLinkProps) {
  return (
    <Link
      target="_blank"
      href={`https://github.com/HasangerGames/suroi/commit/${sha}`}
      className="inline-flex gap-1 items-baseline underline"
    >
      <span className="inline-flex self-center">
        <GitCommitHorizontal />
      </span>
      <span className="flex-1">{children ?? sha.slice(0, 7)}</span>
    </Link>
  );
}

export interface CommitLinkProps extends React.PropsWithChildren {
  sha: string;
}
