import {
  FlyoverPref,
  ObstacleDefinition,
  RotationMode,
} from "@/vendor/suroi/common/src/definitions/obstacles";
import GenericSidebar from "./utils/GenericSidebar";
import InfoboxRow from "./utils/InfoboxRow";
import { range } from "@/lib/util/arrays";
import InfoboxColumn from "./utils/InfoboxColumn";
import InfoboxHeader from "./utils/InfoboxHeader";
import { ObstacleSpecialRoles } from "@/vendor/suroi/common/src/utils/objectDefinitions";
import {
  getSuroiImageLink,
  getSuroiItem,
  obstacleContainedBy,
} from "@/lib/util/suroi";
import ExplosionRow from "./utils/ExplosionRow";
import Link from "../links/Link";

export default function ObstacleSidebar({
  item,
}: {
  item: ObstacleDefinition;
}) {
  const parents = obstacleContainedBy(item);

  return (
    <GenericSidebar
      title={item.name}
      imageVariations={
        item.variations
          ? range(item.variations).map((i) => ({
              type: "image",
              url: getSuroiImageLink(item, i + 1),
            }))
          : [
              {
                type: "image",
                url: getSuroiImageLink(item),
              },
            ]
      }
    >
      <InfoboxRow>
        <InfoboxColumn title="Health">
          {!item.impenetrable && !item.indestructible ? item.health : "∞"}
          {item.impenetrable && " Impenetrable"}
          {item.indestructible && " Indestructible"}
        </InfoboxColumn>
        <InfoboxColumn title="Material">
          <code>{item.material}</code>
        </InfoboxColumn>
      </InfoboxRow>

      {parents.length !== 0 && (
        <>
          <InfoboxHeader>Location</InfoboxHeader>
          <InfoboxRow>
            <InfoboxColumn title="Buildings">
              <div className="flex flex-col gap-2">
                {(parents.length ?? 0) > 0 && (
                  <div>
                    <span>({parents.length} Buildings)</span>
                  </div>
                )}
                <div className="flex flex-wrap justify-around gap-2">
                  {parents.map((parent) => (
                    <Link
                      key={parent.idString}
                      href={`/buildings/${parent.idString}`}
                    >
                      {parent.name}
                    </Link>
                  ))}
                </div>
              </div>
            </InfoboxColumn>
          </InfoboxRow>
        </>
      )}

      <InfoboxHeader>Properties</InfoboxHeader>
      <InfoboxRow>
        <InfoboxColumn
          title="Rotation Mode"
          abbr="Full: Allows 360° rotation, Limited: Allows four cardinal directions (up, down, left, right), Binary: Allows two 'flipped' directions, (up or down, left or right, etc.), None: No rotation"
        >
          {RotationMode[item.rotationMode]}
        </InfoboxColumn>
        <InfoboxColumn title="Variations">{item.variations ?? 1}</InfoboxColumn>
        <InfoboxColumn
          title="Flyover"
          abbr="Whether grenades can be thrown over the obstacle"
        >
          {FlyoverPref[item.allowFlyover ?? FlyoverPref.Sometimes]}
        </InfoboxColumn>
      </InfoboxRow>
      <InfoboxRow>
        {(item.hasLoot || item.spawnWithLoot) && (
          <InfoboxColumn title="Drops Loot" />
        )}
        {item.noResidue && <InfoboxColumn title="No Residue" />}
        {item.invisible && <InfoboxColumn title="Invisible" />}
        {item.hideOnMap && <InfoboxColumn title="Hidden on Map" />}
        {item.explosion && <InfoboxColumn title="Explodes" />}
        {item.reflectBullets && <InfoboxColumn title="Reflects Bullets" />}
        {item.noCollisions && <InfoboxColumn title="No Collisions" />}
        {item.role !== undefined && (
          <InfoboxColumn title={`Is ${ObstacleSpecialRoles[item.role]}`} />
        )}
      </InfoboxRow>

      {/* Special Properties */}

      {item.role === ObstacleSpecialRoles.Door && (
        <>
          <InfoboxHeader>Door Properties</InfoboxHeader>
          <InfoboxRow>
            {item.operationStyle && (
              <InfoboxColumn
                title="Operation Style"
                abbr="How the door opens and closes"
              >
                {item.operationStyle}
              </InfoboxColumn>
            )}
          </InfoboxRow>
          <InfoboxRow>
            {item.locked && <InfoboxColumn title="Locked" />}
            {item.openOnce && <InfoboxColumn title="Opens Once" />}
          </InfoboxRow>
        </>
      )}

      {item.role === ObstacleSpecialRoles.Activatable && (
        <>
          <InfoboxHeader>Activatable Properties</InfoboxHeader>
          <InfoboxRow>
            <InfoboxColumn title="Item Required">
              {getSuroiItem(item?.requiredItem ?? "")?.name ?? "None"}
            </InfoboxColumn>
            {item.interactText && (
              <InfoboxColumn title="Interact Text">
                {item.interactText}
              </InfoboxColumn>
            )}
            {/* TODO: Idk what happened here but blame hazinger */}
            {/* {item.interactDelay && (
              <InfoboxColumn title="Interaction Delay">
                {item.interactDelay / 1000}s
              </InfoboxColumn>
            )} */}
          </InfoboxRow>
        </>
      )}

      {item.explosion && (
        <>
          <InfoboxHeader>Explosion Properties</InfoboxHeader>
          <ExplosionRow explosion={item.explosion} />
        </>
      )}
    </GenericSidebar>
  );
}
