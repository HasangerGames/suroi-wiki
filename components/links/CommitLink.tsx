import { GitCommitHorizontal } from "lucide-react";
import Link from "./Link";

export default function CommitLink({ sha, children }: CommitLinkProps) {
  return (
    <Link
      target="_blank"
      href={`https://github.com/HasangerGames/suroi/commit/${sha}`}
      className="underline inline-flex items-baseline gap-1"
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
