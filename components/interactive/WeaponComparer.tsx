"use client";

import {
  GunDefinition,
  Guns
} from "@/vendor/suroi/common/src/definitions/guns";
import GunSidebar from "../sidebars/GunSidebar";
import { useState } from "react";
import { Explosions } from "@/vendor/suroi/common/src/definitions/explosions";
export default function WeaponComparer() {
  const [gun1, setGun1] = useState<null | GunDefinition>(null);
  const [gun2, setGun2] = useState<null | GunDefinition>(null);
  const [gun3, setGun3] = useState<null | GunDefinition>(null);

  return (
    <div className="p-4 pb-2 bg-white/5 rounded-md">
      <div className="flex gap-2 items-center m-2">
        <label htmlFor="gun">Gun #1</label>
        <select
          id="gun1"
          className="flex-1 rounded bg-muted"
          onChange={e => {
            if (e.target.value === "") setGun1(null);
            else setGun1(Guns.fromStringSafe(e.target.value) ?? null);
          }}
        >
          <option value="">Select One</option>
          {Guns.definitions.map(({ idString, name }) => (
            <option value={idString} key={idString}>
              {name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex gap-2 items-center m-2">
        <label htmlFor="gun">Gun #2</label>
        <select
          id="gun2"
          className="flex-1 rounded bg-muted"
          onChange={e => {
            if (e.target.value === "") setGun2(null);
            else setGun2(Guns.fromStringSafe(e.target.value) ?? null);
          }}
        >
          <option value="">Select One</option>
          {Guns.definitions.map(({ idString, name }) => (
            <option value={idString} key={idString}>
              {name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex gap-2 items-center m-2">
        <label htmlFor="gun">Gun #3</label>
        <select
          id="gun3"
          className="flex-1 rounded bg-muted"
          onChange={e => {
            if (e.target.value === "") setGun3(null);
            else setGun3(Guns.fromStringSafe(e.target.value) ?? null);
          }}
        >
          <option value="">Select One</option>
          {Guns.definitions.map(({ idString, name }) => (
            <option value={idString} key={idString}>
              {name}
            </option>
          ))}
        </select>
      </div>

      <div className={`flex flex-row flex-wrap justify-center${(gun1 || gun2 || gun3) ? " mt-4 mb-4" : " mb-2"}`}>
        <div className={gun1 ? "pl-2 pr-2" : undefined}>
          {
            gun1 && <GunSidebar gun={gun1} explosion={Explosions.definitions.find(explosion => explosion.idString === gun1.ballistics.onHitExplosion)} hideTitle={true} hideSounds={true} />
          }
        </div>
        <div className={gun2 ? "pl-2 pr-2" : undefined}>
          {
            gun2 && <GunSidebar gun={gun2} explosion={Explosions.definitions.find(explosion => explosion.idString === gun2.ballistics.onHitExplosion)} hideTitle={true} hideSounds={true} />
          }
        </div>
        <div className={gun3 ? "pl-2 pr-2" : undefined}>
          {
            gun3 && <GunSidebar gun={gun3} explosion={Explosions.definitions.find(explosion => explosion.idString === gun3.ballistics.onHitExplosion)} hideTitle={true} hideSounds={true} />
          }
        </div>
      </div>
    </div>
  );
}
