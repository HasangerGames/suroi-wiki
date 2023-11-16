import Link, { LinkProps } from "next/link";

export default function URLLink(
  props: LinkProps &
    React.PropsWithChildren & {
      target?: string;
      className?: string;
    }
) {
  return (
    <Link {...props} className={`${props.className} text-suroi no-underline`} />
  );
}
