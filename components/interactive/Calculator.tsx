"use client";
"use server";

import { CalculatorMenu } from "@/lib/util/types";
import { useState } from "react";

export default function Calculator({ menus, callback }: CalculatorProps) {
  const [queries, setQueries] = useState(menus.map(() => ""));
  const setQueryValue = (index: number, string: string) => {
    setQueries(queries.map((item, i) => (index === i ? string : item)));
  };
  const [result, setResult] = useState("");
  return (
    <>
      {menus.map((menu, i) => (
        <input
          key={i}
          value={queries[i]}
          onChange={(e) => setQueryValue(i, e.target.value)}
        />
      ))}
    </>
  );
}

export interface CalculatorProps extends React.PropsWithChildren {
  menus: CalculatorMenu[];
  callback: () => string;
}
