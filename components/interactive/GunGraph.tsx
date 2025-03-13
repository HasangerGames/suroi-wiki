"use client";

import { shootGun } from "@/lib/util/calculators";
import { FireMode } from "@/vendor/suroi/common/src/constants";
import { GunDefinition } from "@/vendor/suroi/common/src/definitions/items/guns";
import {
  Chart,
  Legend,
  LinearScale,
  PointElement,
  ScatterController,
  Title,
  Tooltip
} from "chart.js";
import { Suspense, useRef } from "react";
import { Scatter } from "react-chartjs-2";

export default function GunGraph({ gun }: GunGraphProps) {
  Chart.register(
    ScatterController,
    LinearScale,
    PointElement,
    Legend,
    Tooltip,
    Title
  );

  // what is this for
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const graphCanvas = useRef(null);

  const margin = 10;
  const stepCount = 751;
  const steps = Array.from(
    { length: stepCount },
    (_, i) => i / (stepCount - 1)
  );
  const lerp = (a: number, b: number) => (t: number) => a * (1 - t) + b * t;

  const {
    ballistics: { range },
    bulletCount = 1,
    fireDelay,
    fireMode
  } = gun;
  const interp = lerp(-margin, range + margin);
  const trialCount = ~~(500 / bulletCount);

  const damages = steps
    .map(interp)
    .map(r => ({ x: r, y: shootGun(gun, trialCount, r) }));

  const dps = damages.map(({ x: range, y: damage }) => ({
    x: range,
    y:
      (damage * 1000)
      / (fireMode === FireMode.Burst
        ? gun.burstProperties.burstCooldown
        + fireDelay * gun.burstProperties.shotsPerBurst
        : fireDelay)
  }));

  return (
    <div className="prose prose-invert">
      <p>
        This test assumes that the target isn't moving, that the shooter is,
        and the gun is always aiming dead center on the target.
      </p>
      <Suspense fallback={<div>Loading...</div>}>
        <Scatter
          data={{
            datasets: [
              {
                label: `Simulated Damage of ${gun.name}`,
                data: damages,
                backgroundColor: "hsl(209, 60%, 51%)"
              },
              {
                label: `Simulated DPS of ${gun.name}`,
                data: dps,
                backgroundColor: "hsl(27, 100%, 50%)"
              }
            ]
          }}
          options={{
            aspectRatio: 1.3,
            hover: {
              axis: "x",
              mode: "index"
            },
            scales: {
              x: {
                grid: {
                  color: ["#444", "#888"]
                },
                ticks: {
                  color: "white",
                  stepSize: 10
                },
                title: {
                  text: "Distance between target center and muzzle in game units",
                  display: true,
                  color: "white"
                }
              },
              y: {
                grid: {
                  color: ["#444", "#888"]
                },
                ticks: {
                  color: "white"
                },
                title: {
                  text: "Damage value",
                  display: true,
                  color: "white"
                }
              }
            },
            plugins: {
              title: {
                text: `Simulated damages of ${gun.name}`,
                display: true,
                color: "white"
              },
              legend: {
                labels: {
                  color: "white"
                }
              },
              tooltip: {
                filter: (item, i) => {
                  return i === 0;
                }
              }
            }
          }}
        />
        <p>CSV for damage</p>
        <span className="not-prose select-all p-4 rounded-md flex flex-col h-16 bg-muted overflow-y-auto">
          Distance between target center and muzzle in game units, Damage
          <br></br>
          {damages.map(({ x: range, y: damage }, i) => (
            <span key={i}>
              {range.toFixed(2)}, {damage.toFixed(2)}
              <br></br>
            </span>
          ))}
        </span>
        <p>CSV for DPS</p>
        <span className="not-prose select-all p-4 rounded-md flex flex-col h-16 bg-muted overflow-y-auto">
          Distance between target center and muzzle in game units, DPS
          <br></br>
          {dps.map(({ x: range, y: damage }, i) => (
            <span key={i}>
              {range.toFixed(2)}, {damage.toFixed(2)}
              <br></br>
            </span>
          ))}
        </span>
      </Suspense>
    </div>
  );
}

export interface GunGraphProps extends React.PropsWithChildren {
  gun: GunDefinition
}
