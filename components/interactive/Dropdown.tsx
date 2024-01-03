"use client";
import { useState } from "react";

type DropdownProps = {
  label: React.ReactNode;
  defaultOpen?: boolean;
  children: React.ReactNode;
};

export default function Dropdown({
  label,
  defaultOpen = true,
  children,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)} style={{ display: "flex", alignItems: "center"}}>
        <svg
          style={{
            transform: `rotate(${isOpen ? "0deg" : "-90deg"})`,
            transition: "transform 0.3s",
            marginRight: "5px",
          }}
          width="16"
          height="16"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L5 5L9 1"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {label}
      </button>
      {isOpen && <div>{children}</div>}
    </div>
  );
}
