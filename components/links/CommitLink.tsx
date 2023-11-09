import { GitCommitHorizontal } from "lucide-react";

export default function CommitLink({ sha, children }: CommitLinkProps) {
  return (
    <a
      target="_blank"
      href={`https://github.com/HasangerGames/suroi/commit/${sha}`}
      className="underline inline-flex items-baseline gap-1"
    >
      <span className="inline-flex self-center">
        <GitCommitHorizontal />
      </span>
      <span className="flex-1">{children ?? sha.slice(0,7)}</span>
    </a>
  );
}

export interface CommitLinkProps extends React.PropsWithChildren {
  sha: string;
}
