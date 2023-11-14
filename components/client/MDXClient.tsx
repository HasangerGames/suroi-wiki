"use client";

import { MDXRemote, MDXRemoteProps } from "next-mdx-remote";
import Link from "next/link";
import EventItem from "../articles/notices/Event";
import TimeLink from "../links/TimeLink";
import CommitLink from "../links/CommitLink";
import FileLink from "../links/FileLink";
import DevWeapon from "../articles/notices/DevWeapon";

const components = {
  Link,
  Event: EventItem,
  TimeLink,
  FileLink,
  CommitLink,
  DevWeapon,
};

export default function MDXClient(props: MDXRemoteProps) {
  return <MDXRemote {...props} components={components} />;
}
