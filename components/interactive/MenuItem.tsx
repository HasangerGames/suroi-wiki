"use client";

import Link from "next/link";

export default function MenuItem({ title, href }: MenuItemProps) {
  return (
    <li className="text-lg font-bold leading-loose underline transition-colors group-hover:text-blue-500">
      <Link href={href}>{title}</Link>
    </li>
  );
}

export interface MenuItemProps extends React.PropsWithChildren {
  title: string,
  href: string
}
