import { Unpacked } from "@/lib/ts/utility";
import {
  getSuroiImageLink,
  getSuroiItem,
  getSuroiKillfeedImageLink,
} from "@/lib/util/suroi";
import { FireMode } from "@/vendor/suroi/common/src/constants";
import { ExplosionDefinition } from "@/vendor/suroi/common/src/definitions/explosions";
import { GunDefinition } from "@/vendor/suroi/common/src/definitions/guns";
import {
  WearerAttributes,
  ItemDefinition,
} from "@/vendor/suroi/common/src/utils/objectDefinitions";
import { WithRequired } from "@tanstack/react-query";
import AmmoIcon from "../icons/AmmoIcon";
import InfoboxAudio from "./utils/InfoboxAudio";
import InfoboxAudioGroup from "./utils/InfoboxAudioGroup";
import InfoboxColumn from "./utils/InfoboxColumn";
import InfoboxHeader from "./utils/InfoboxHeader";
import InfoboxRow from "./utils/InfoboxRow";
import Image from "next/image";
import PlayerHoldingGun from "../svg/special/PlayerHoldingGun";
import { Skins } from "@/vendor/suroi/common/src/definitions/skins";

export default function GunDetails({ gun, explosion }: GunDetailsProps) {
  return (
    <>
      <InfoboxRow>
        <InfoboxColumn title="Player Display">
          <PlayerHoldingGun
            gun={gun}
            skin={
              Skins.definitions.find((skin) => {
                return skin.idString === "hazel_jumpsuit";
              }) ?? Skins.definitions[0]
            }
          />
        </InfoboxColumn>
      </InfoboxRow>
      <InfoboxRow>
        <InfoboxColumn title="Fire Mode">
          {FireMode[gun.fireMode]}
        </InfoboxColumn>
        <InfoboxColumn title="Ammo Type">
          <AmmoIcon ammo={gun.ammoType} scale={0.5} />
        </InfoboxColumn>
        <InfoboxColumn title="Capacity">{gun.capacity}</InfoboxColumn>
      </InfoboxRow>
      <InfoboxRow>
        <InfoboxColumn title="Reload">
          {gun.singleReload ? "1" : gun.capacity} in {gun.reloadTime}s
        </InfoboxColumn>
        <InfoboxColumn title="Firing Delay" abbr="Delay between shots">
          {gun.fireDelay}ms
        </InfoboxColumn>
        <InfoboxColumn
          title="Switch Delay"
          abbr="Cooldown between switching between this weapon and another"
        >
          {gun.switchDelay}ms
        </InfoboxColumn>
      </InfoboxRow>

      <InfoboxRow>
        <InfoboxColumn
          title="Spread"
          abbr="Spread (angle of inaccuracy) when still"
        >
          {gun.shotSpread}°
        </InfoboxColumn>
        <InfoboxColumn
          title="Move Spread"
          abbr="Spread (angle of inaccuracy when moving)"
        >
          {gun.moveSpread}°{" "}
          <abbr title="When compared to normal spread">
            ({gun.moveSpread - gun.shotSpread > 0 ? "+" : ""}
            {(gun.moveSpread - gun.shotSpread).toFixed(2)}°)
          </abbr>
        </InfoboxColumn>
      </InfoboxRow>
      <InfoboxHeader>Ballistics</InfoboxHeader>
      <InfoboxRow>
        <InfoboxColumn title="Damage">{gun.ballistics.damage}</InfoboxColumn>
        <InfoboxColumn title="Bullet Speed">
          {gun.ballistics.speed}
        </InfoboxColumn>
        <InfoboxColumn title="Range">{gun.ballistics.range}</InfoboxColumn>
      </InfoboxRow>

      <InfoboxRow>
        <InfoboxColumn title="Obstacle Damage">
          x{gun.ballistics.obstacleMultiplier}
        </InfoboxColumn>
        <InfoboxColumn
          title="Max. DPS"
          abbr="Hypothetical maximum damage per second (DPS)"
        >
          {gun.fireMode === FireMode.Burst &&
            (
              (1000 /
                (gun.burstProperties.burstCooldown +
                  gun.fireDelay * gun.burstProperties.shotsPerBurst)) *
              (gun.ballistics.damage * gun.burstProperties.shotsPerBurst)
            ).toFixed(2)}
          {gun.fireMode !== FireMode.Burst &&
            (
              gun.ballistics.damage *
              (gun.bulletCount ?? 1) *
              (1000 / gun.fireDelay)
            ).toFixed(2)}
        </InfoboxColumn>
        <InfoboxColumn
          title="Max. Obstacle DPS"
          abbr="Hypothetical maximum damage per second (DPS) on obstacles"
        >
          {gun.fireMode === FireMode.Burst &&
            (
              (1000 /
                (gun.burstProperties.burstCooldown +
                  gun.fireDelay * gun.burstProperties.shotsPerBurst)) *
              (gun.ballistics.damage *
                gun.ballistics.obstacleMultiplier *
                gun.burstProperties.shotsPerBurst)
            ).toFixed(2)}
          {gun.fireMode !== FireMode.Burst &&
            (
              gun.ballistics.damage *
              gun.ballistics.obstacleMultiplier *
              (gun.bulletCount ?? 1) *
              (1000 / gun.fireDelay)
            ).toFixed(2)}
        </InfoboxColumn>
      </InfoboxRow>

      {gun.bulletCount && (
        <>
          <InfoboxHeader>Shotgun Stats</InfoboxHeader>
          <InfoboxRow>
            <InfoboxColumn title="Bullet Count" abbr="Bullets fired per shot">
              {gun.bulletCount}
            </InfoboxColumn>
            <InfoboxColumn title="Jitter Radius" abbr="Random bullet offset">
              {gun.jitterRadius ?? "None"}
            </InfoboxColumn>
            <InfoboxColumn
              title="Total Damage"
              abbr="Total damage per shot (bullets x damage per bullet)"
            >
              {gun.bulletCount * gun.ballistics.damage}
            </InfoboxColumn>
          </InfoboxRow>
        </>
      )}

      {gun.wearerAttributes && <Effects gun={gun as any} />}

      {explosion && (
        <>
          <InfoboxHeader>Explosion Ballistics</InfoboxHeader>
          <InfoboxRow>
            <InfoboxColumn title="Explosion Damage">
              {explosion.damage}
            </InfoboxColumn>
            <InfoboxColumn title="Explosion Obstacle Damage">
              x{explosion.obstacleMultiplier}
            </InfoboxColumn>
            <InfoboxColumn title="Explosion Radius">
              Min: {explosion.radius.min} Max: {explosion.radius.max}
            </InfoboxColumn>
          </InfoboxRow>
          <InfoboxRow>
            <InfoboxColumn title="Shrapnel Count">
              {explosion.shrapnelCount}
            </InfoboxColumn>
            <InfoboxColumn title="Shrapnel Damage">
              {explosion.ballistics.damage}
            </InfoboxColumn>
            <InfoboxColumn title="Shrapnel Speed">
              {explosion.ballistics.speed}
            </InfoboxColumn>
          </InfoboxRow>
          <InfoboxRow>
            <InfoboxColumn title="Shrapnel Range">
              {explosion.ballistics.range}
            </InfoboxColumn>
            <InfoboxColumn title="Shrapnel Obstacle Damage">
              x{explosion.ballistics.obstacleMultiplier}
            </InfoboxColumn>
            <InfoboxColumn
              title="Shrapnel Total Damage"
              abbr="Damage of all shrapnel pieces"
            >
              {explosion.shrapnelCount * explosion.ballistics.damage}
            </InfoboxColumn>
          </InfoboxRow>
        </>
      )}

      <InfoboxAudioGroup>
        <InfoboxAudio
          name="Fire"
          src={`https://github.com/HasangerGames/suroi/raw/master/client/public/audio/sfx/weapons/${gun.idString.replace(
            "dual_",
            ""
          )}_fire.mp3`}
        />
        <InfoboxAudio
          name="Switch"
          src={`https://github.com/HasangerGames/suroi/raw/master/client/public/audio/sfx/weapons/${gun.idString.replace(
            "dual_",
            ""
          )}_switch.mp3`}
        />
        <InfoboxAudio
          name="Reload"
          src={`https://github.com/HasangerGames/suroi/raw/master/client/public/audio/sfx/weapons/${gun.idString}_reload.mp3`}
        />
        {explosion && (
          <InfoboxAudio
            name="Explosion"
            // HACK: hardcoded because USAS is the only explosive gun atm
            src={`https://github.com/HasangerGames/suroi/raw/master/client/public/audio/sfx/${explosion.idString}.mp3`}
          />
        )}
      </InfoboxAudioGroup>

      <InfoboxHeader>Advanced Stats</InfoboxHeader>
      <InfoboxRow>
        <InfoboxColumn title="Internal ID">
          <span className="font-mono">{gun.idString}</span>
        </InfoboxColumn>
      </InfoboxRow>
    </>
  );
}

export interface GunDetailsProps {
  gun: GunDefinition;
  explosion?: ExplosionDefinition;
}

function Effects({
  gun,
}: {
  gun: WithRequired<GunDefinition, "wearerAttributes">;
}) {
  return (
    <>
      <InfoboxHeader>Effects</InfoboxHeader>
      {gun.wearerAttributes.passive && (
        <>
          <InfoboxRow>
            <InfoboxHeader>Passive</InfoboxHeader>
          </InfoboxRow>
          <InfoboxRow>
            <Attributes attributes={gun.wearerAttributes.passive} />
          </InfoboxRow>
        </>
      )}

      {gun.wearerAttributes.on && (
        <>
          <InfoboxRow>
            {gun.wearerAttributes.on.kill && (
              <>
                <InfoboxHeader>On Kill</InfoboxHeader>
                {gun.wearerAttributes.on.kill.map((attr, i) => (
                  <Attributes attributes={attr} key={i} n={i} />
                ))}
              </>
            )}
          </InfoboxRow>

          <InfoboxRow>
            {gun.wearerAttributes.on.damageDealt && (
              <>
                <InfoboxHeader>On Damage Dealt</InfoboxHeader>
                {gun.wearerAttributes.on.damageDealt.map((attr, i) => (
                  <Attributes attributes={attr} key={i} n={i} />
                ))}
              </>
            )}
          </InfoboxRow>
        </>
      )}
    </>
  );
}

function Attributes({
  attributes,
  n,
}: {
  attributes:
    | WearerAttributes
    | NonNullable<
        Unpacked<
          WithRequired<
            WithRequired<
              ItemDefinition,
              "wearerAttributes"
            >["wearerAttributes"],
            "on"
          >["on"]["kill"]
        >
      >;
  n?: number;
}) {
  const limit =
    "limit" in attributes ? (
      <>
        {" "}
        <abbr
          title={`This effect can be applied up to a maximum of ${attributes.limit} times`}
          className="inline-block ml-[1ch]"
        >
          ({attributes.limit} limit)
        </abbr>
      </>
    ) : (
      <>
        {" "}
        <abbr
          title={`This effect can be applied an infinite amount of times`}
          className="inline-block ml-[1ch]"
        >
          (No limit)
        </abbr>
      </>
    );

  return (
    <>
      {n !== undefined && (
        <div className="border-t border-primary">
          <InfoboxColumn title={`Effect ${n + 1}`}></InfoboxColumn>
        </div>
      )}
      <InfoboxRow>
        {attributes.maxHealth && (
          <InfoboxColumn title="Health Multiplier">
            {attributes.maxHealth}
            {limit}
          </InfoboxColumn>
        )}
        {attributes.maxAdrenaline && (
          <InfoboxColumn title="Adrenaline Multiplier">
            {attributes.maxAdrenaline ?? "None"}
            {limit}
          </InfoboxColumn>
        )}
      </InfoboxRow>
      <InfoboxRow>
        {attributes.minAdrenaline && (
          <InfoboxColumn title="Min. Adrenaline">
            {attributes.minAdrenaline ?? "Unchanged"}
            {limit}
          </InfoboxColumn>
        )}
        {attributes.speedBoost && (
          <InfoboxColumn title="Speed Multipiler">
            {attributes.speedBoost ?? "None"}
            {limit}
          </InfoboxColumn>
        )}
      </InfoboxRow>
      <InfoboxRow>
        {"healthRestored" in attributes && (
          <InfoboxColumn
            title="Health Restored"
            abbr="Health restored when this condition is met"
          >
            {attributes.healthRestored}
            {limit}
          </InfoboxColumn>
        )}
        {"adrenalineRestored" in attributes && (
          <InfoboxColumn
            title="Adrenaline Restored"
            abbr="Adrenaline restored when this condition is met"
          >
            {attributes.adrenalineRestored}
            {limit}
          </InfoboxColumn>
        )}
      </InfoboxRow>
    </>
  );
}
