import Link, { LinkProps } from "next/link";

export default function URLLink(
  props: LinkProps &
    React.PropsWithChildren & {
      target?: string;
      className?: string;
      unstyled?: boolean;
    }
) {
  const { unstyled, ...passProps } = props;
  
  return (
    <Link
      {...passProps}
      className={
        unstyled
          ? props.className
          : `${props.className} text-suroi no-underline hover:underline`
      }
    />
  );
}
