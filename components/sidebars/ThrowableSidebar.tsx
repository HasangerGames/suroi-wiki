import { ThrowableDefinition } from "@/vendor/suroi/common/src/definitions/throwables";
import GenericSidebar from "./utils/GenericSidebar";
import { getSuroiImageLink, getSuroiKillfeedImageLink } from "@/lib/util/suroi";
import InfoboxRow from "./utils/InfoboxRow";
import InfoboxColumn from "./utils/InfoboxColumn";
import ExplosionRow from "./utils/ExplosionRow";
import InfoboxHeader from "./utils/InfoboxHeader";
import SVGObjectRenderer from "../svg/SVGObjectRenderer";
import PlayerHoldingThrowable from "../svg/special/PlayerHoldingThrowable";
import { Skins } from "@/vendor/suroi/common/src/definitions/skins";
import { ImageTab } from "@/lib/util/types";

export default function ThrowableSidebar({ item }: ThrowableSidebarProps) {
  const skin =
    Skins.definitions.find((s) => s.idString === "hazel_jumpsuit") ??
    Skins.definitions[0];
  const imageVariations: ImageTab[] = [
    {
      type: "image",
      url: getSuroiImageLink(item),
      alt: "Image of throwable",
      title: "Loot",
    },
    {
      type: "image",
      url: getSuroiKillfeedImageLink(item),
      alt: "Image of throwable impact killfeed",
      title: "Killfeed (Impact)",
    },
    {
      type: "react",
      children: <PlayerHoldingThrowable item={item} skin={skin} state="hold" />,
      title: "Holding",
    },
    {
      type: "react",
      children: <PlayerHoldingThrowable item={item} skin={skin} state="cook" />,
      title: "Cooking",
    },
    {
      type: "react",
      children: (
        <PlayerHoldingThrowable item={item} skin={skin} state="throw" />
      ),
      title: "Throwing",
    },
  ];

  if (item.detonation.explosion) {
    imageVariations.splice(1, 0, {
      type: "image",
      url: getSuroiKillfeedImageLink(undefined, item.detonation.explosion),
      alt: "Image of throwable explosion killfeed",
      title: "Killfeed (Explosion)",
    });
  }
  return (
    <GenericSidebar title={item.name} imageVariations={imageVariations}>
      <InfoboxRow>
        <InfoboxColumn title="Speed Multiplier">
          {item.speedMultiplier}
        </InfoboxColumn>
        <InfoboxColumn title="Cook Speed Multiplier">
          {item.cookSpeedMultiplier}
        </InfoboxColumn>
        {item.fireDelay && (
          <InfoboxColumn title="Fire Delay">{item.fireDelay} ms</InfoboxColumn>
        )}
      </InfoboxRow>
      <InfoboxRow>
        <InfoboxColumn title="Maximum Throwing Distance">
          {item.maxThrowDistance}
        </InfoboxColumn>
      </InfoboxRow>
      <InfoboxRow>
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
