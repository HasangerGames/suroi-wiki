"use client";

import {
  GunDefinition,
  Guns,
} from "@/vendor/suroi/common/src/definitions/guns";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

type GunOptions = {
  gun: GunDefinition;
  trials: number;
  minRange: number;
  maxRange: number;
  rangeInterpolations: number;
};

export default function GunGraphInterface() {
  const searchParams = useSearchParams();
  const [selectedGuns, setSelectedGuns] = useState<GunOptions[]>([]);

  const editGun = (index: number, gun: GunOptions) => {
    let gunsCopy = [...selectedGuns];
    gunsCopy[index] = gun;
    setSelectedGuns(gunsCopy);
  };

  const appendGun = (gun: GunOptions) => {
    setSelectedGuns([...selectedGuns, gun]);
  };

  const removeGun = (index: number) => {
    setSelectedGuns(selectedGuns.toSpliced(index, 1));
  };

  for (let i = 0; i < 9; i++) {
    const gunID = searchParams.get(`${i}-id`);
    const gun = Guns.find((g) => gunID === g.idString);
    if (gun) {
      const gunTrials = searchParams.get(`${i}-t`);
      const gunMinRange = searchParams.get(`${i}-mi`);
      const gunMaxRange = searchParams.get(`${i}-ma`);
      const gunRangeInterpolations = searchParams.get(`${i}-i`);

      setSelectedGuns([
        ...selectedGuns,
        {
          gun: gun,
          trials: parseInt(gunTrials ?? "null") ?? 20,
          minRange: parseInt(gunMinRange ?? "null") ?? -10,
          maxRange:
            parseInt(gunMaxRange ?? "null") ?? gun.ballistics.range + 10,
          rangeInterpolations: parseInt(gunRangeInterpolations ?? "null") ?? 30,
        },
      ]);
    }
  }

  return (
    <>
      <div className="w-full flex flex-col gap-4 p-4 border-border border rounded-md not-prose">
        {selectedGuns.map((gun, i) => (
          <div key={i} className="flex flex-row gap-4">
            <label>Gun {i}:</label>
            <select name={`gun-${i}`}>
              {Guns.map((g, j) => (
                <option key={j} value={j}>
                  {g.name}
                </option>
              ))}
            </select>
            <label>Trials:</label>
            <label>Min Range:</label>
            <label>Max Range:</label>
            <label>Interpolations:</label>
          </div>
        ))}
      </div>
    </>
  );
}
