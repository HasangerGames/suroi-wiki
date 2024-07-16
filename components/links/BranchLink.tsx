import { GitBranchIcon } from "lucide-react";
import Link from "./Link";

export default function BranchLink({ branch, children }: BranchLinkProps) {
  return (
    <Link href={`https://github.com/HasangerGames/suroi/blob/${branch}/`}>
      <span className="inline-flex self-center">
        <GitBranchIcon className="w-4 h-4" />
      </span>
      <span className="flex-1">{children ?? branch}</span>
    </Link>
  );
}

export interface BranchLinkProps extends React.PropsWithChildren {
  branch: string
}
