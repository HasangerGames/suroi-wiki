"use client";

import Link from "next/link";

export default function MenuItem({ title, href, onClick }: MenuItemProps) {
  return (
    <div className="text-lg font-bold leading-loose underline transition-colors hover:text-blue-500">
      <Link href={href} onClick={onClick}>
        {title}
      </Link>
    </div>
  );
}

export interface MenuItemProps extends React.PropsWithChildren {
  title: string
  href: string
  onClick?: () => unknown
}
