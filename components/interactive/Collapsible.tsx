"use client";

import { ChevronRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Collapse } from "react-collapse";

export default function Collapsible({
  label,
  defaultOpen = true,
  children,
  className = "",
  chevronSize = 24,
}: CollapsibleProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={className}>
      <button
        onClick={() => setOpen(!open)}
        className="flex flex-row gap-4 w-full items-center"
      >
        <ChevronDown
          style={{
            transform: `rotate(${open ? "0deg" : "-90deg"})`,
            transition: "transform 0.2s ease",
          }}
        />
        {label}
      </button>
      <Collapse isOpened={open}>{children}</Collapse>
    </div>
  );
}

export interface CollapsibleProps extends React.PropsWithChildren {
  label: React.ReactNode;
  defaultOpen?: boolean;
  children: React.ReactNode;
  className?: string;
  chevronSize?: number;
}
