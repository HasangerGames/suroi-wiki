"use client";

import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { Collapse } from "react-collapse";

export default function Dropdown({
  label,
  defaultOpen = true,
  children,
  className = "",
}: DropdownProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={className}>
      <button
        onClick={() => setOpen(!open)}
        className="flex flex-row gap-4 w-full"
      >
        <ChevronRight
          className={`transition-transform my-auto ${
            open ? "rotate-90" : "rotate-0"
          }`}
        />
        {label}
      </button>
      <Collapse isOpened={open}>{children}</Collapse>
    </div>
  );
}

export interface DropdownProps extends React.PropsWithChildren {
  label: React.ReactNode;
  defaultOpen?: boolean;
  children: React.ReactNode;
  className?: string;
}
