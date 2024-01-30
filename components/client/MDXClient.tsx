"use client";

import Link from "@/components/links/Link";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote";
import { HTMLProps } from "react";
import Spoiler from "../articles/Spoiler";
import Gallery from "../articles/gallery/Gallery";
import DevWeapon from "../articles/notices/DevWeapon";
import Empty from "../articles/notices/Empty";
import EventItem from "../articles/notices/Event";
import Removed from "../articles/notices/Removed";
import Stub from "../articles/notices/Stub";
import CommitLink from "../links/CommitLink";
import FileLink from "../links/FileLink";
import TimeLink from "../links/TimeLink";

const components = {
  Link,
  Event: EventItem,
  TimeLink,
  FileLink,
  CommitLink,
  Removed,
  DevWeapon,
  Stub,
  Spoiler,
  Gallery,
  Empty,
  a: (props: HTMLProps<HTMLAnchorElement>) => (
    <Link href={props.href!}>{props.children}</Link>
  ),
};

export default function MDXClient(props: MDXRemoteProps) {
  return <MDXRemote {...props} components={components} />;
}
