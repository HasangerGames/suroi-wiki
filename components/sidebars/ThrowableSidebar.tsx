import {
  getSuroiImageLink,
  getSuroiKillfeedImageLink,
  lootDroppedBy,
} from "@/lib/util/suroi";
import { ImageTab } from "@/lib/util/types";
import { Skins } from "@/vendor/suroi/common/src/definitions/skins";
import { ThrowableDefinition } from "@/vendor/suroi/common/src/definitions/throwables";
import Link from "../links/Link";
import PlayerHoldingThrowable from "../svg/special/PlayerHoldingThrowable";
import ExplosionRow from "./utils/ExplosionRow";
import GenericSidebar from "./utils/GenericSidebar";
import InfoboxColumn from "./utils/InfoboxColumn";
import InfoboxHeader from "./utils/InfoboxHeader";
import InfoboxRow from "./utils/InfoboxRow";

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
  const obstacles = lootDroppedBy(item);

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

      {obstacles[0] && (
        <>
          <InfoboxHeader>Location</InfoboxHeader>
          <InfoboxRow>
            <InfoboxColumn title="Obstacles">
              <div className="flex flex-col gap-2">
                {(obstacles.length ?? 0) > 0 && (
                  <div>
                    <span>({obstacles.length} Obstacles)</span>
                  </div>
                )}
                <div className="flex flex-wrap justify-around gap-2">
                  {obstacles.map((obstacle) => (
                    <Link
                      key={obstacle.idString}
                      href={`/obstacles/${obstacle.idString}`}
                    >
                      {obstacle.name}
                    </Link>
                  ))}
                </div>
              </div>
            </InfoboxColumn>
          </InfoboxRow>
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
