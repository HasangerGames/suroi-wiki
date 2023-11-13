import { FireMode } from "@/vendor/suroi/common/src/constants";
import { GunDefinition } from "@/vendor/suroi/common/src/definitions/guns";
import InfoboxRow from "./utils/InfoboxRow";
import InfoboxColumn from "./utils/InfoboxColumn";
import AmmoIcon from "../icons/AmmoIcon";
import InfoxboxHeader from "./utils/InfoboxHeader";
import { ExplosionDefinition } from "@/vendor/suroi/common/src/definitions/explosions";
import GenericSidebar from "./utils/GenericSidebar";
import InfoboxAudio from "./utils/InfoboxAudio";
import InfoboxAudioGroup from "./utils/InfoboxAudioGroup";

export default function GunSidebar({ gun, explosion }: GunSidebarProps) {
  return (
    <GenericSidebar
      title={gun.name}
      image={`https://raw.githubusercontent.com/HasangerGames/suroi/master/client/public/img/game/weapons/${gun.idString}.svg`}
    >
      <InfoboxRow>
        <InfoboxColumn title="Fire Mode">
          {FireMode[gun.fireMode]}
        </InfoboxColumn>
        <InfoboxColumn title="Ammo Type" image>
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

      <InfoboxRow grid="grid-cols-2">
        <InfoboxColumn
          title="Spread"
          abbr="Spread (angle of inaccuracy) when still"
        >
          {gun.shotSpread}°
        </InfoboxColumn>
        <InfoboxColumn
          title="Move Spread"
          abbr="Spread when moving (added onto regular spread)"
        >
          {gun.moveSpread}°
        </InfoboxColumn>
      </InfoboxRow>
      <InfoxboxHeader>Ballistics</InfoxboxHeader>
      <InfoboxRow>
        <InfoboxColumn title="Damage">{gun.ballistics.damage}</InfoboxColumn>
        <InfoboxColumn title="Bullet Speed">
          {gun.ballistics.speed}
        </InfoboxColumn>
        <InfoboxColumn title="Range">
          {gun.ballistics.maxDistance}
        </InfoboxColumn>
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
          <InfoxboxHeader>Shotgun Stats</InfoxboxHeader>
          <InfoboxRow>
            <InfoboxColumn title="Bullet Count" abbr="Bullets fired per shot">
              {gun.bulletCount}
            </InfoboxColumn>
            <InfoboxColumn title="Jitter Radius" abbr="Random bullet offset">
              {gun.jitterRadius ?? "Unknown"}
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

      {explosion && (
        <>
          <InfoxboxHeader>Explosion Ballistics</InfoxboxHeader>
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
              {explosion.ballistics.maxDistance}
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
          src={`https://github.com/HasangerGames/suroi/raw/master/client/public/audio/sfx/weapons/${gun.idString}_fire.mp3`}
        />
        <InfoboxAudio
          name="Switch"
          src={`https://github.com/HasangerGames/suroi/raw/master/client/public/audio/sfx/weapons/${gun.idString}_switch.mp3`}
        />
        <InfoboxAudio
          name="Reload"
          src={`https://github.com/HasangerGames/suroi/raw/master/client/public/audio/sfx/weapons/${gun.idString}_reload.mp3`}
        />
        {explosion && (
          <InfoboxAudio
            name="Explosion"
            // HACK: hardcoded because USAS is the only explosive gun atm
            src={`https://github.com/HasangerGames/suroi/raw/master/client/public/audio/sfx/usas_explosion.mp3`}
          />
        )}
      </InfoboxAudioGroup>

      <InfoxboxHeader>Advanced Stats</InfoxboxHeader>
      <InfoboxRow grid="grid-cols-1">
        <InfoboxColumn title="Internal ID">
          <span className="font-mono">{gun.idString}</span>
        </InfoboxColumn>
      </InfoboxRow>
    </GenericSidebar>
  );
}

export interface GunSidebarProps {
  gun: GunDefinition;
  explosion?: ExplosionDefinition;
}
