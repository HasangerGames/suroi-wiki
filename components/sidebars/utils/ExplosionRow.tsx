import { Explosions } from "@/vendor/suroi/common/src/definitions/explosions";
import InfoboxRow from "./InfoboxRow";
import InfoboxColumn from "./InfoboxColumn";

export default function ExplosionRow({ explosion }: ExplosionRowProps) {
  const explosionData = Explosions.definitions.find(
    (e) => e.idString === explosion
  );
  // Return empty if no explosion data
  if (!explosionData) return <></>;

  return (
    <>
      <InfoboxRow>
        <InfoboxColumn title="Explosion Name">
          {explosionData.name}
        </InfoboxColumn>
        <InfoboxColumn title="Internal ID">
          <code className="overflow-x-scroll">{explosionData.idString}</code>
        </InfoboxColumn>
      </InfoboxRow>
      <InfoboxRow>
        <InfoboxColumn title="Damage">{explosionData.damage}</InfoboxColumn>
        <InfoboxColumn title="Shrapnel Count">
          {explosionData.shrapnelCount}
        </InfoboxColumn>
      </InfoboxRow>
			<InfoboxRow>
        <InfoboxColumn title="Minimum Radius">
          {explosionData.radius.min}
        </InfoboxColumn>
        <InfoboxColumn title="Maximum Radius">
          {explosionData.radius.max}
        </InfoboxColumn>
			</InfoboxRow>
      <InfoboxRow>
        <InfoboxColumn title="Shrapnel Damage">
          {explosionData.ballistics.damage}
        </InfoboxColumn>
        <InfoboxColumn title="Shrapnel Speed">
          {explosionData.ballistics.speed}
        </InfoboxColumn>
        <InfoboxColumn title="Shrapnel Range">
          {explosionData.ballistics.range}
        </InfoboxColumn>
      </InfoboxRow>
    </>
  );
}

export interface ExplosionRowProps {
  explosion: string;
}
