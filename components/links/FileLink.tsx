import { FileCode2 } from "lucide-react";
import Link from "./Link";

export default function FileLink({
  file,
  lines,
  children
}: {
  file: string
  lines?: number | [number, number]
} & Required<React.PropsWithChildren>) {
  return (
    <Link
      target="_blank"
      href={`https://github.com/HasangerGames/suroi/blob/master/${file}${
        lines ? `#L${Array.isArray(lines) ? lines.join("-L") : lines}` : ""
      }`}
      className="inline-flex gap-1 items-baseline underline"
    >
      <span className="inline-flex self-center">
        <FileCode2 />
      </span>
      <span className="flex-1">{children}</span>
    </Link>
  );
}
