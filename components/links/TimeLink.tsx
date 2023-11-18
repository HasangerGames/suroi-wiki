"use client";

import { DateTime } from "luxon";
import { Tooltip } from "react-tooltip";

export default function TimeLink({ time }: TimeLinkProps) {
  const dateTime = DateTime.fromMillis(time);
  return (
    <>
      <span
        data-tooltip-id="time"
        data-tooltip-content={dateTime.toString()}
        className="p-2 mx-1 rounded-md hover:cursor-pointer bg-muted"
        onClick={() => navigator.clipboard.writeText(dateTime.toString())}
      >
        {dateTime.toLocaleString({
          timeStyle: "medium",
          dateStyle: "medium"
        })}
      </span>
      <Tooltip id="time" />
    </>
  );
}

export interface TimeLinkProps {
  time: number;
}
