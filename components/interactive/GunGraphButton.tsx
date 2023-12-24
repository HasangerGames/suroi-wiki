"use client";

import { useState } from "react";
import GunGraph, { GunGraphProps } from "./GunGraph";

export default function GunGraphButton({ gun }: GunGraphProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {(open && (
        <>
          <h1>Gun Graph</h1> <GunGraph gun={gun} />
        </>
      )) || (
        <button
          className="transition-color bg-muted p-4 not-prose rounded-md ring-border ring hover:ring-primary"
          onClick={() => setOpen(true)}
        >
          Open Gun Graph (May be laggy, especially on mobile)
        </button>
      )}
    </>
  );
}
