import { ThrowableDefinition } from "@/vendor/suroi/common/src/definitions/throwables";
import GenericSidebar from "./utils/GenericSidebar";
import { getSuroiImageLink, getSuroiKillfeedImageLink } from "@/lib/util/suroi";
import InfoboxRow from "./utils/InfoboxRow";
import InfoboxColumn from "./utils/InfoboxColumn";
import ExplosionRow from "./utils/ExplosionRow";
import InfoboxHeader from "./utils/InfoboxHeader";
import InfoboxSection from "./utils/InfoboxSection";

export default function ThrowableSidebar({ item }: ThrowableSidebarProps) {
  return (
    <GenericSidebar
      title={item.name}
      imageVariations={[
        {
          url: getSuroiImageLink(item),
          alt: "Image of throwable",
          title: "Loot",
        },
        {
          url: getSuroiKillfeedImageLink(item),
          alt: "Image of throwable killfeed",
          title: "Killfeed",
        },
      ]}
    >
      <InfoboxRow>
        <InfoboxColumn title="Speed Multiplier">
          {item.speedMultiplier}
        </InfoboxColumn>
        <InfoboxColumn title="Cook Speed Multiplier">
          {item.cookSpeedMultiplier}
        </InfoboxColumn>
      </InfoboxRow>
      <InfoboxRow>
        <InfoboxColumn title="Maximum Throwing Distance">
          {item.maxThrowDistance}
        </InfoboxColumn>
        <InfoboxColumn title="Radius">{item.radius}</InfoboxColumn>
        {item.cookable && <InfoboxColumn title="Cookable" />}
      </InfoboxRow>
      {item.impactDamage && (
        <InfoboxRow>
          <InfoboxColumn title="Impact Damage">
            {item.impactDamage}
          </InfoboxColumn>
          <InfoboxColumn title="Obstacle Impact Damage">
            {item.impactDamage * (item.obstacleMultiplier ?? 1)}
          </InfoboxColumn>
        </InfoboxRow>
      )}
      <InfoboxRow>
        <InfoboxColumn title="Fuse Time">{item.fuseTime} ms</InfoboxColumn>
        <InfoboxColumn title="Cook Time">{item.cookTime} ms</InfoboxColumn>
        <InfoboxColumn title="Throw Time">{item.throwTime} ms</InfoboxColumn>
        {item.fireDelay && (
          <InfoboxColumn title="Fire Delay">{item.fireDelay} ms</InfoboxColumn>
        )}
      </InfoboxRow>
      {item.detonation.explosion && (
        <>
          <InfoboxHeader>Explosion</InfoboxHeader>
          <ExplosionRow explosion={item.detonation.explosion} />
        </>
      )}
      <InfoboxHeader>Advanced Statistics</InfoboxHeader>
      <InfoboxRow>
        <InfoboxColumn title="Internal ID">
          <code>{item.idString}</code>
        </InfoboxColumn>
      </InfoboxRow>
    </GenericSidebar>
  );
}

export interface ThrowableSidebarProps extends React.PropsWithChildren {
  item: ThrowableDefinition;
}
