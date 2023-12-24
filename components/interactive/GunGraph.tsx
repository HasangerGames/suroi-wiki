"use client";

import { shootGun } from "@/lib/util/calculators";
import { GunDefinition } from "@/vendor/suroi/common/src/definitions/guns";
import { Suspense, useRef } from "react";
import { Chart } from "chart.js/auto";

export default function GunGraph({ gun }: GunGraphProps) {
  const graphCanvas = useRef(null);

  async function calculate(gun: GunDefinition) {
    let data = [];

    for (let range = -10; range < gun.ballistics.range + 10; range += 0.5) {
      data.push({
        x: range,
        y: shootGun(gun, 100, range),
      });
    }
    return data;
  }

  return (
    <>
      <canvas ref={graphCanvas}></canvas>
    </>
  );
}

export interface GunGraphProps extends React.PropsWithChildren {
  gun: GunDefinition;
}
