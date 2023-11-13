"use client";

import { MDXRemote, MDXRemoteProps } from "next-mdx-remote";
import Link from "next/link";
import EventItem from "../articles/notices/Event";
import TimeLink from "../links/TimeLink";
import CommitLink from "../links/CommitLink";
import FileLink from "../links/FileLink";

const components = {
  Link,
  Event: EventItem,
  TimeLink,
  FileLink,
  CommitLink
};

export default function MDXClient(props: MDXRemoteProps) {
  return <MDXRemote {...props} components={components} />;
}
