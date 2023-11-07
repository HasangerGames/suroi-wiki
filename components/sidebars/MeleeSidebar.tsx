import { MeleeDefinition } from "@/vendor/suroi/common/src/definitions/melees";
import InfoboxColumn from "./utils/InfoboxColumn";
import InfoboxRow from "./utils/InfoboxRow";
import Image from "next/image";
import InfoxboxHeader from "./utils/InfoboxHeader";

export default function MeleeSidebar({ melee }: MeleeSidebarProps) {
  return (
    <div className="col-span-2">
      <div className="flex flex-col border border-primary">
        <div className="p-2 bg-primary border-b border-primary">
          <h2 className="font-bold text-xl text-center">{melee.name}</h2>
        </div>
        <div className="p-2 flex justify-center">
          <Image
            src={`https://raw.githubusercontent.com/HasangerGames/suroi/master/client/public/img/game/weapons/${melee.idString}.svg`}
            width={128}
            height={128}
            alt={`Image of ${melee.name}`}
          />
        </div>

        <InfoboxRow>
          <InfoboxColumn title="Damage">{melee.damage}</InfoboxColumn>
          <InfoboxColumn title="Cooldown" abbr="Cooldown between hits">
            {melee.cooldown}ms
          </InfoboxColumn>
          <InfoboxColumn title="Obstacle Damage">
            x{melee.obstacleMultiplier} (
            {melee.obstacleMultiplier * melee.damage})
          </InfoboxColumn>
        </InfoboxRow>
        <InfoboxRow grid="grid-cols-2">
          <InfoboxColumn
            title="Max. DPS"
            abbr="Hypothetical maximum damage per second"
          >
            {(melee.damage * (1000 / melee.cooldown)).toFixed(2)}
          </InfoboxColumn>
          <InfoboxColumn
            title="Max. Obstacle DPS"
            abbr="Hypothetical maximum damage per second for obstacles"
          >
            {(
              melee.damage *
              melee.obstacleMultiplier *
              (1000 / melee.cooldown)
            ).toFixed(2)}
          </InfoboxColumn>
        </InfoboxRow>

        <InfoxboxHeader>Advanced Stats</InfoxboxHeader>
        <InfoboxRow grid="grid-cols-2">
          <InfoboxColumn title="Internal ID">
            <span className="font-mono">{melee.idString}</span>
          </InfoboxColumn>
          <InfoboxColumn title="Obtainable?">
            {melee.noDrop ? "Unobtainable" : "Obtainable"}
          </InfoboxColumn>
        </InfoboxRow>
      </div>
    </div>
  );
}

export interface MeleeSidebarProps {
  melee: MeleeDefinition;
}
