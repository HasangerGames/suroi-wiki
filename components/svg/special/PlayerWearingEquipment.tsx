"use client";

import { Skins } from "@/vendor/suroi/common/src/definitions/skins";
import SVGObjectRenderer from "../SVGObjectRenderer";
import { useState } from "react";
import { IMAGE_BASE_URL, getSuroiImageLink } from "@/lib/util/suroi";
import {
  ArmorType,
  Armors,
} from "@/vendor/suroi/common/src/definitions/armors";
import { Backpacks } from "@/vendor/suroi/common/src/definitions/backpacks";

export default function PlayerWearingEquipment() {
  const [skinIndex, setSkinIndex] = useState(0);
  const [helmet, setHelmet] = useState(Armors.definitions[0]);
  const [vest, setVest] = useState(Armors.definitions[3]);
  const [backpack, setBackpack] = useState(Backpacks.definitions[1]);

  return (
    <div>
      <svg viewBox="-80 -80 160 160" className="w-96">
        <SVGObjectRenderer
          objects={[
            {
              type: "image",
              url: getSuroiImageLink(
                Skins.definitions[skinIndex],
                undefined,
                "base"
              ),
              zIndex: 1,
            },
            {
              type: "image",
              url: getSuroiImageLink(
                Skins.definitions[skinIndex],
                undefined,
                "fist"
              ),
              x: 38,
              y: 35,
              zIndex: 4,
            },
            {
              type: "image",
              url: getSuroiImageLink(
                Skins.definitions[skinIndex],
                undefined,
                "fist"
              ),
              x: 38,
              y: -35,
              zIndex: 4,
            },
            {
              type: "image",
              url: `${IMAGE_BASE_URL}/game/equipment/${
                helmet.idString ?? ""
              }_world.svg`,
              x: -8,
              zIndex: 6,
            },
            {
              type: "image",
              url: `${IMAGE_BASE_URL}/game/equipment/${
                vest.idString ?? ""
              }_world.svg`,
              zIndex: 0,
            },
            {
              type: "image",
              url: `${IMAGE_BASE_URL}/game/equipment/${backpack.idString}_world.svg`,
              x: -55,
              zIndex: 5,
            },
          ]}
        />
      </svg>
      <select
        onChange={(e) => {
          if (e.target.value === "none" || e.target.value === "") {
            setHelmet(Armors.definitions[0]);
          } else {
            setHelmet(
              Armors.definitions.find((armor) => {
                return armor.idString === e.target.value;
              })
            );
          }
        }}
      >
        <option value="">Select a helmet</option>
        <option value="none">None</option>
        {[...Armors]
          .filter((armor) => {
            return armor.armorType === ArmorType.Helmet;
          })
          .map((armor) => (
            <option key={armor.idString} value={armor.idString}>
              {armor.name}
            </option>
          ))}
      </select>
      <select
        onChange={(e) => {
          if (e.target.value === "none" || e.target.value === "") {
            setVest(Armors.definitions[0]);
          } else {
            setVest(
              Armors.definitions.find((armor) => {
                return armor.idString === e.target.value;
              })
            );
          }
        }}
      >
        <option value="">Select a vest</option>
        <option value="none">None</option>
        {[...Armors]
          .filter((armor) => {
            return armor.armorType === ArmorType.Vest;
          })
          .map((armor) => (
            <option key={armor.idString} value={armor.idString}>
              {armor.name}
            </option>
          ))}
      </select>
      <select
        onChange={(e) => {
          if (e.target.value === "none" || e.target.value === "") {
            setBackpack(Backpacks.definitions[0]);
          } else {
            setBackpack(
              Backpacks.definitions.find((backpack) => {
                return backpack.idString === e.target.value;
              })
            );
          }
        }}
      >
        <option value="">Select a backpack</option>
        {Backpacks.definitions.map((armor) => (
          <option key={armor.idString} value={armor.idString}>
            {armor.name}
          </option>
        ))}
      </select>
      <select
        onChange={(e) => {
          if (e.target.value === "none" || e.target.value === "") {
          } else {
            setSkinIndex(
              Skins.definitions.findIndex((skin) => {
                return skin.idString === e.target.value;
              })
            );
          }
        }}
      >
        <option value="">Select a skin</option>
        {Skins.definitions.map((skin) => (
          <option key={skin.idString} value={skin.idString}>
            {skin.name}
          </option>
        ))}
      </select>
    </div>
  );
}
