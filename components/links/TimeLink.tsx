"use client";

import { Tooltip } from "react-tooltip";

export default function TimeLink({ time }: TimeLinkProps) {
  const date = new Date(time);
  const formatter = new Intl.DateTimeFormat(undefined, {
    timeStyle: "medium",
    dateStyle: "medium"
  });
  return (
    <>
      <span
        data-tooltip-id="time"
        data-tooltip-content={date.toString()}
        className="hover:cursor-pointer p-2 mx-1 rounded-md bg-muted"
        onClick={() => navigator.clipboard.writeText(date.toString())}
      >
        {formatter.format(date)}
      </span>
      <Tooltip id="time" />
    </>
  );
}

export interface TimeLinkProps {
  time: number
}
