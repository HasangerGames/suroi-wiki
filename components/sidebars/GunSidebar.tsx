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
import InfoboxSection from "./utils/InfoboxSection";
import { Unpacked, WithRequired } from "@/lib/ts/utility";
import {
  ItemDefinition,
  WearerAttributes,
} from "@/vendor/suroi/common/src/utils/objectDefinitions";

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
          abbr="Spread (angle of inaccuracy when moving)"
        >
          {gun.moveSpread}° <abbr title="When compared to normal spread">
            ({gun.moveSpread - gun.shotSpread > 0 ? "+" : ""}
            {(gun.moveSpread - gun.shotSpread).toFixed(2)}°)
          </abbr>
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

      {/* fixme: Gun attributes */}
      {/* {gun.wearerAttributes && (
        <>
          <InfoxboxHeader>Wearer Attributes</InfoxboxHeader>
          {gun.wearerAttributes.passive && (
            <InfoboxSection
              title="Passive"
              abbr="Attributes applied when the item is in the user's inventory"
              grid="grid-cols-4"
            >
              <InfoboxColumn
                title="Max. adren"
                abbr="The maximum adrenaline a player can have"
              >
                {gun.wearerAttributes.passive.maxAdrenaline !== undefined
                  ? `x${gun.wearerAttributes.passive.maxAdrenaline}`
                  : "None"}
              </InfoboxColumn>
              <InfoboxColumn
                title="Max. health"
                abbr="The maximum health a player can have"
              >
                {gun.wearerAttributes.passive.maxHealth !== undefined
                  ? `x${gun.wearerAttributes.passive.maxHealth}`
                  : "None"}
              </InfoboxColumn>
              <InfoboxColumn
                title="Min. adren"
                abbr="The minimum adrenaline a player can have"
              >
                {gun.wearerAttributes.passive.minAdrenaline !== undefined
                  ? `x${gun.wearerAttributes.passive.minAdrenaline}`
                  : "None"}
              </InfoboxColumn>
              <InfoboxColumn
                title="Speed boost"
                abbr="A speed modifier multiplying the current speed"
              >
                {gun.wearerAttributes.passive.speedBoost !== undefined
                  ? `x${gun.wearerAttributes.passive.speedBoost}`
                  : "None"}
              </InfoboxColumn>
            </InfoboxSection>
          )}
          {gun.wearerAttributes.active && (
            <InfoboxSection
              title="Active"
              abbr="Attributes applied when the item is active"
              grid="grid-cols-4"
            >
              <InfoboxColumn
                title="Max. adren"
                abbr="The maximum adrenaline a player can have"
              >
                {gun.wearerAttributes.active.maxAdrenaline !== undefined
                  ? `x${gun.wearerAttributes.active.maxAdrenaline}`
                  : "None"}
              </InfoboxColumn>
              <InfoboxColumn
                title="Max. health"
                abbr="The maximum health a player can have"
              >
                {gun.wearerAttributes.active.maxHealth !== undefined
                  ? `x${gun.wearerAttributes.active.maxHealth}`
                  : "None"}
              </InfoboxColumn>
              <InfoboxColumn
                title="Min. adren"
                abbr="The minimum adrenaline a player can have"
              >
                {gun.wearerAttributes.active.minAdrenaline !== undefined
                  ? `x${gun.wearerAttributes.active.minAdrenaline}`
                  : "None"}
              </InfoboxColumn>
              <InfoboxColumn
                title="Speed boost"
                abbr="A speed modifier multiplying the current speed"
              >
                {gun.wearerAttributes.active.speedBoost !== undefined
                  ? `x${gun.wearerAttributes.active.speedBoost}`
                  : "None"}
              </InfoboxColumn>
            </InfoboxSection>
          )}
          {gun.wearerAttributes.on && (
            <InfoboxSection
              title="Conditional"
              abbr="Attributes applied when a condition is met"
              grid="grid-cols-1"
            >
              {(gun.wearerAttributes.on.kill?.length ?? 0) > 0 && (
                <InfoboxSection
                  title="On Kill"
                  abbr="Attributes applied every time this weapon kills another player"
                  grid="grid-cols-4"
                >
                  {gun.wearerAttributes.on.kill!.map((v) => (
                    <>
                      {v.maxAdrenaline !== undefined && (
                        <InfoboxColumn
                          title="Max. adren"
                          abbr="The maximum adrenaline a player can have"
                        >
                          x{v.maxAdrenaline}
                        </InfoboxColumn>
                      )}
                      {v.maxHealth !== undefined && (
                        <InfoboxColumn
                          title="Max. health"
                          abbr="The maximum health a player can have"
                        >
                          x{v.maxHealth}
                        </InfoboxColumn>
                      )}
                      {v.minAdrenaline !== undefined && (
                        <InfoboxColumn
                          title="Min. adren"
                          abbr="The minimum adrenaline a player can have"
                        >
                          +{v.minAdrenaline}
                        </InfoboxColumn>
                      )}
                      {v.speedBoost !== undefined && (
                        <InfoboxColumn
                          title="Speed boost"
                          abbr="A speed modifier multiplying the current speed"
                        >
                          x{v.speedBoost}
                        </InfoboxColumn>
                      )}
                      {v.adrenalineRestored !== undefined && (
                        <InfoboxColumn
                          title="Adren. restored"
                          abbr="The amount of adrenaline gained when this action happens"
                        >
                          +{v.adrenalineRestored}
                        </InfoboxColumn>
                      )}
                      {v.healthRestored !== undefined && (
                        <InfoboxColumn
                          title="Health restored"
                          abbr="The amount of health gained when this action occurs"
                        >
                          +{v.healthRestored}
                        </InfoboxColumn>
                      )}
                      <InfoboxColumn
                        title="Limit"
                        abbr="How many times this effect can stack"
                      >
                        {v.limit ?? "Infinite"}
                      </InfoboxColumn>
                    </>
                  ))}
                </InfoboxSection>
              )}
              {(gun.wearerAttributes.on.damageDealt?.length ?? 0) > 0 && (
                <InfoboxSection
                  title="On Damage Dealt"
                  abbr="Attributes applied every time this weapon inflicts damage to another player"
                  grid="grid-cols-7"
                >
                  {gun.wearerAttributes.on.damageDealt!.map((v) => (
                    <>
                      {v.maxAdrenaline !== undefined && (
                        <InfoboxColumn
                          title="Max. adren"
                          abbr="The maximum adrenaline a player can have"
                        >
                          x{v.maxAdrenaline}
                        </InfoboxColumn>
                      )}
                      {v.maxHealth !== undefined && (
                        <InfoboxColumn
                          title="Max. health"
                          abbr="The maximum health a player can have"
                        >
                          x{v.maxHealth}
                        </InfoboxColumn>
                      )}
                      {v.minAdrenaline !== undefined && (
                        <InfoboxColumn
                          title="Min. adren"
                          abbr="The minimum adrenaline a player can have"
                        >
                          +{v.minAdrenaline}
                        </InfoboxColumn>
                      )}
                      {v.speedBoost !== undefined && (
                        <InfoboxColumn
                          title="Speed boost"
                          abbr="A speed modifier multiplying the current speed"
                        >
                          x{v.speedBoost}
                        </InfoboxColumn>
                      )}
                      {v.adrenalineRestored !== undefined && (
                        <InfoboxColumn
                          title="Adren. restored"
                          abbr="The amount of adrenaline gained when this action happens"
                        >
                          +{v.adrenalineRestored}
                        </InfoboxColumn>
                      )}
                      {v.healthRestored !== undefined && (
                        <InfoboxColumn
                          title="Health restored"
                          abbr="The amount of health gained when this action occurs"
                        >
                          +{v.healthRestored}
                        </InfoboxColumn>
                      )}
                      <InfoboxColumn
                        title="Limit"
                        abbr="How many times this effect can stack"
                      >
                        {v.limit ?? "Infinite"}
                      </InfoboxColumn>
                    </>
                  ))}
                </InfoboxSection>
              )}
            </InfoboxSection>
          )}
        </>
      )} */}

      {gun.wearerAttributes && <Effects gun={gun as any} />}

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
            src={`https://github.com/HasangerGames/suroi/raw/master/client/public/audio/sfx/${explosion.idString}.mp3`}
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

function Effects({
  gun,
}: {
  gun: WithRequired<GunDefinition, "wearerAttributes">;
}) {
  return (
    <>
      <InfoboxSection title="Effects" grid="grid-cols-1">
        {gun.wearerAttributes.passive && (
          <InfoboxSection title="Passive" grid="grid-cols-1">
            <Attributes attributes={gun.wearerAttributes.passive} />
          </InfoboxSection>
        )}
        {gun.wearerAttributes.on && (
          <InfoboxSection title="Conditional" grid="grid-cols-1">
            {gun.wearerAttributes.on.kill && (
              <>
                {gun.wearerAttributes.on.kill.map((attr) => (
                  <Attributes attributes={attr} key={attr.healthRestored} />
                ))}
              </>
            )}
          </InfoboxSection>
        )}
      </InfoboxSection>
    </>
  );
}

function Attributes({
  attributes,
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
}) {
  return (
    <>
      <InfoboxRow grid="grid-cols-2">
        <InfoboxColumn title="Health Multiplier">
          {attributes.maxHealth ?? "None"}
        </InfoboxColumn>
        <InfoboxColumn title="Adrenaline Multiplier">
          {attributes.maxAdrenaline ?? "None"}
        </InfoboxColumn>
      </InfoboxRow>
      <InfoboxRow grid="grid-cols-2">
        <InfoboxColumn title="Min. Adrenaline">
          {attributes.minAdrenaline ?? "Unchanged"}
        </InfoboxColumn>
        <InfoboxColumn title="Speed Multipler">
          {attributes.speedBoost ?? "None"}
        </InfoboxColumn>
      </InfoboxRow>
      {"limit" in attributes && (
        <InfoboxRow>
          <InfoboxColumn
            title="Health Restored"
            abbr="Health restored when this condition is met"
          >
            {attributes.healthRestored ?? "None"}
          </InfoboxColumn>
        </InfoboxRow>
      )}
    </>
  );
}
