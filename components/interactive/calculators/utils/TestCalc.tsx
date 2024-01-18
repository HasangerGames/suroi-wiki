"use client";

import { useState } from "react";
import GenericCalculator from "./GenericCalculator";

export default function TestCalc() {
  const [inputOne, setInputOne] = useState(0);
  const [inputTwo, setInputTwo] = useState(0);
  return (
    <div>
      {GenericCalculator({
        children: (
          <form>
            <input
              type="number"
              value={inputOne}
              onChange={(e) => setInputOne(parseInt(e.target.value))}
            />
            <input
              type="number"
              value={inputTwo}
              onChange={(e) => setInputTwo(parseInt(e.target.value))}
            />
          </form>
        ),
        callback: () => {
          return (
            <p>
              {inputOne} + {inputTwo} = {inputOne + inputTwo}
            </p>
          );
        },
      }).default()}
    </div>
  );
}
