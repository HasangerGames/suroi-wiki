"use client";

import { shootGun } from "@/lib/util/calculators";
import { GunDefinition } from "@/vendor/suroi/common/src/definitions/guns";
import { Suspense, useRef } from "react";
import {
  Chart,
  ScatterController,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Title,
} from "chart.js";
import { Scatter } from "react-chartjs-2";
import { FireMode } from "@/vendor/suroi/common/src/constants";

export default function GunGraph({ gun }: GunGraphProps) {
  Chart.register(
    ScatterController,
    LinearScale,
    PointElement,
    Legend,
    Tooltip,
    Title
  );

  const graphCanvas = useRef(null);

  function calculate(gun: GunDefinition) {
    let data = [];

    for (
      let range = -10;
      range < gun.ballistics.range + 10;
      range += gun.ballistics.range / 750
    ) {
      data.push({
        x: range,
        y: shootGun(gun, 500 / (gun.bulletCount ?? 1), range),
      });
    }
    return data;
  }

  const damages = calculate(gun);
  const dps = damages.map((damage) => ({
    x: damage.x,
    y:
      gun.fireMode === FireMode.Burst
        ? damage.y *
          (1000 /
            (gun.burstProperties.burstCooldown +
              gun.fireDelay * gun.burstProperties.shotsPerBurst))
        : damage.y * (1000 / gun.fireDelay),
  }));

  return (
    <div className="prose prose-invert">
      <p>
        This test assumes that the target isn{"'"}t moving and the gun is aiming
        dead center on the target.
      </p>
      <Suspense fallback={<div>Loading...</div>}>
        <Scatter
          data={{
            datasets: [
              {
                label: `Simulated Damage of ${gun.name}`,
                data: damages,
                backgroundColor: "hsl(209, 60%, 51%)",
              },
              {
                label: `Simulated DPS of ${gun.name}`,
                data: dps,
                backgroundColor: "hsl(27, 100%, 50%)",
              },
            ],
          }}
          options={{
            aspectRatio: 1.3,
            scales: {
              x: {
                grid: {
                  color: ["#444", "#888"],
                },
                ticks: {
                  color: "white",
                  stepSize: 10,
                },
                title: {
                  text: "Distance between target center and muzzle in game units",
                  display: true,
                  color: "white",
                },
              },
              y: {
                grid: {
                  color: ["#444", "#888"],
                },
                ticks: {
                  color: "white",
                },
                title: {
                  text: "Damage value",
                  display: true,
                  color: "white",
                },
              },
            },
            plugins: {
              title: {
                text: `Simulated damages of ${gun.name}`,
                display: true,
                color: "white",
              },
              legend: {
                labels: {
                  color: "white",
                },
              },
              tooltip: {
                filter: (item, i) => {
                  return i === 0;
                },
              },
            },
          }}
        />
        <p>CSV for damage</p>
        <span className="not-prose select-all p-4 rounded-md flex flex-col h-16 bg-muted overflow-y-auto">
          Distance between target center and muzzle in game units, Damage
          <br></br>
          {damages.map((damage, i) => (
            <span key={i}>
              {damage.x.toFixed(2)}, {damage.y.toFixed(2)}
              <br></br>
            </span>
          ))}
        </span>
        <p>CSV for DPS</p>
        <span className="not-prose select-all p-4 rounded-md flex flex-col h-16 bg-muted overflow-y-auto">
          Distance between target center and muzzle in game units, DPS
          <br></br>
          {dps.map((damage, i) => (
            <span key={i}>
              {damage.x.toFixed(2)}, {damage.y.toFixed(2)}
              <br></br>
            </span>
          ))}
        </span>
      </Suspense>
    </div>
  );
}

export interface GunGraphProps extends React.PropsWithChildren {
  gun: GunDefinition;
}
