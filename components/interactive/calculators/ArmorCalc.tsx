"use client";

import {
  ArmorDefinition,
  ArmorType,
  Armors,
} from "@/vendor/suroi/common/src/definitions/armors";
import {
  GunDefinition,
  Guns,
} from "@/vendor/suroi/common/src/definitions/guns";
import { useState } from "react";
import GenericCalculator from "./utils/GenericCalculator";
import AutoComplete from "../generic/AutoComplete";
import { getSuroiImageLink, getSuroiItem } from "@/lib/util/suroi";
import Image from "next/image";

const Helmets = Armors.definitions.filter(
  (armor) => armor.armorType === ArmorType.Helmet,
);
const Vests = Armors.definitions.filter(
  (armor) => armor.armorType === ArmorType.Vest,
);

export default function ArmorCalc() {
  const [selectedGun, setSelectedGun] = useState<null | string>(null);
  const gun = Guns.find((gun) => gun.idString === selectedGun);
  const [selectedHelmet, setSelectedHelmet] = useState<null | string>(null);
  const helmet = Helmets.find((helmet) => helmet.idString === selectedHelmet);
  const [selectedVest, setSelectedVest] = useState<null | string>(null);
  const vest = Vests.find((vest) => vest.idString === selectedVest) 

  return (
    <>
      {GenericCalculator({
        children: (
          <>
            <div className="flex gap-2 items-center mt-2">
              <label>Gun</label>
              <AutoComplete
                items={Guns.map((gun) => ({
                  name: gun.name,
                  specialDisplay: <div className="flex flex-row gap-2"><Image src={getSuroiImageLink(gun)} alt={gun.name} width={25} height={25} />{gun.name}</div>,
                  item: gun.idString,
                }))}
                setter={setSelectedGun}
              />
            </div>

            <div className="flex gap-2 items-center mt-2">
              <label>Helmet</label>
              <AutoComplete
                items={Helmets.map((helmet) => ({
                  name: helmet.name,
                  specialDisplay: <div className="flex flex-row gap-2"><Image src={getSuroiImageLink(helmet)} alt={helmet.name} width={25} height={25} />{helmet.name}</div>,
                  item: helmet.idString,
                }))}
                setter={setSelectedHelmet}
              />
            </div>

            <div className="flex gap-2 items-center mt-2">
              <label>Vest</label>
              <AutoComplete
                items={Vests.map((vest) => ({
                  name: vest.name,
                  specialDisplay: <div className="flex flex-row gap-2"><Image src={getSuroiImageLink(vest)} alt={vest.name} width={25} height={25} />{vest.name}</div>,
                  item: vest.idString,
                }))}
                setter={setSelectedVest}
              />
            </div>
          </>
        ),
        callback: () => {
          return (
            <div className="flex flex-col justify-center items-center mt-4">
              {!gun && (
                <span className="font-bold">Select a gun to begin.</span>
              )}
              {gun && (
                <>
                  <span>
                    <span className="font-bold">
                      <abbr title="Damage of a single bullet">
                        Bullet Damage
                      </abbr>
                      :
                    </span>{" "}
                    {gun.ballistics.damage}
                    {gun.bulletCount && gun.bulletCount > 1 && (
                      <span> (x{gun.bulletCount} bullets)</span>
                    )}
                  </span>
                  <span>
                    <span className="font-bold">Damage Reduction:</span>{" "}
                    {(
                      ((gun?.damageReduction ?? 0) +
                        (gun?.damageReduction ?? 0)) *
                      100
                    ).toFixed(2)}
                    %
                  </span>
                  <span>
                    <span className="font-bold">Resulting Damage:</span>{" "}
                    {(
                      gun.ballistics.damage *
                      (1 -
                        ((helmet?.damageReduction ?? 0) +
                          (vest?.damageReduction ?? 0)))
                    ).toFixed(2)}{" "}
                    (
                    {(
                      gun.ballistics.damage *
                        (1 -
                          ((gun?.damageReduction ?? 0) +
                            (gun?.damageReduction ?? 0))) -
                      gun.ballistics.damage
                    ).toFixed(2)}
                    )
                  </span>
                  <span>
                    <span className="font-bold">
                      <abbr title="Bullets to kill a player wearing this armor combo at full health">
                        Bullets to Kill:
                      </abbr>
                    </span>{" "}
                    {Math.ceil(
                      100 /
                        (gun.ballistics.damage *
                          (1 -
                            ((gun?.damageReduction ?? 0) +
                              (gun?.damageReduction ?? 0)))),
                    )}
                    {gun.bulletCount && gun.bulletCount > 1 && (
                      <span>
                        {" "}
                        (
                        {Math.ceil(
                          100 /
                            (gun.ballistics.damage *
                              (1 -
                                ((helmet?.damageReduction ?? 0) +
                                  (vest?.damageReduction ?? 0)))) /
                            gun.bulletCount,
                        )}{" "}
                        shot(s) with {gun.bulletCount} bullets)
                      </span>
                    )}
                  </span>
                </>
              )}
            </div>
          );
        },
      }).default()}
    </>
  );
}
