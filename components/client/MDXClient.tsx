"use client";

import { MDXRemote, MDXRemoteProps } from "next-mdx-remote";
import Link from "next/link";
import EventItem from "../articles/notices/Event";
import TimeLink from "../links/TimeLink";

const components = {
  Link,
  Event: EventItem,
  TimeLink,
};

export default function MDXClient(props: MDXRemoteProps) {
  return <MDXRemote {...props} components={components} />;
}
