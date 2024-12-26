import {
  IMAGE_BASE_URL,
  getSuroiImageLink,
  getSuroiItem
} from "@/lib/util/suroi";
import { BackpackDefinition } from "@/vendor/suroi/common/src/definitions/backpacks";
import Image from "next/image";
import AmmoIcon from "../icons/AmmoIcon";
import HealingIcon from "../icons/HealingIcon";
import GenericSidebar from "./utils/GenericSidebar";
import InfoboxColumn from "./utils/InfoboxColumn";
import InfoboxHeader from "./utils/InfoboxHeader";
import InfoboxRow from "./utils/InfoboxRow";

export default function BackpackSidebar({
  item
}: {
  item: BackpackDefinition
}) {
  return (
    <GenericSidebar
      title={item.name}
      imageVariations={[
        {
          type: "image",
          title: "Loot",
          url: getSuroiImageLink(item)
        },
        {
          type: "image",
          title: "World",
          url: `${IMAGE_BASE_URL}game/equipment/${item.idString}_world.svg`
        }
      ]}
    >
      <InfoboxHeader>Healing Capacity</InfoboxHeader>
      <InfoboxRow>
        {["gauze", "medikit"].map(healing => (
          <InfoboxColumn
            key={healing}
            title={(
              <div className="flex justify-center">
                <HealingIcon item={healing} />
              </div>
            )}
          >
            {item.maxCapacity[healing]}
          </InfoboxColumn>
        ))}
      </InfoboxRow>
      <InfoboxRow>
        {["cola", "tablets"].map(healing => (
          <InfoboxColumn
            key={healing}
            title={(
              <div className="flex justify-center">
                <HealingIcon item={healing} scale={0.5} />
              </div>
            )}
          >
            {item.maxCapacity[healing]}
          </InfoboxColumn>
        ))}
      </InfoboxRow>

      <InfoboxHeader>Ammo Capacity</InfoboxHeader>
      <InfoboxRow>
        {["12g", "556mm"].map(ammo => (
          <InfoboxColumn
            key={ammo}
            title={(
              <div className="flex justify-center">
                <AmmoIcon ammo={ammo} scale={0.55} />
              </div>
            )}
          >
            {item.maxCapacity[ammo]}
          </InfoboxColumn>
        ))}
      </InfoboxRow>
      <InfoboxRow>
        {["762mm", "9mm"].map(ammo => (
          <InfoboxColumn
            key={ammo}
            title={(
              <div className="flex justify-center">
                <AmmoIcon ammo={ammo} scale={0.55} />
              </div>
            )}
          >
            {item.maxCapacity[ammo]}
          </InfoboxColumn>
        ))}
      </InfoboxRow>
      <InfoboxRow>
        {["50cal", "338lap"].map(ammo => (
          <InfoboxColumn
            key={ammo}
            title={(
              <div className="flex justify-center">
                <AmmoIcon ammo={ammo} scale={0.55} />
              </div>
            )}
          >
            {item.maxCapacity[ammo]}
          </InfoboxColumn>
        ))}
      </InfoboxRow>
      <InfoboxRow>
        {["curadell", "firework_rocket"].map(ammo => (
          <InfoboxColumn
            key={ammo}
            title={(
              <div className="flex justify-center">
                <AmmoIcon ammo={ammo} scale={0.55} />
              </div>
            )}
          >
            {item.maxCapacity[ammo]}
          </InfoboxColumn>
        ))}
      </InfoboxRow>
      <InfoboxHeader>Throwable Capacity</InfoboxHeader>
      <InfoboxRow>
        {["frag_grenade", "smoke_grenade"].map(throwable => (
          <InfoboxColumn
            key={throwable}
            title={(
              <div className="flex justify-center">
                <Image
                  src={getSuroiImageLink(getSuroiItem(throwable))}
                  alt={throwable}
                  width={40}
                  height={40}
                />
              </div>
            )}
          >
            {item.maxCapacity[throwable]}
          </InfoboxColumn>
        ))}
      </InfoboxRow>
      <InfoboxRow>
        {["confetti_grenade", "c4"].map(throwable => (
          <InfoboxColumn
            key={throwable}
            title={(
              <div className="flex justify-center">
                <Image
                  src={getSuroiImageLink(getSuroiItem(throwable))}
                  alt={throwable}
                  width={40}
                  height={40}
                />
              </div>
            )}
          >
            {item.maxCapacity[throwable]}
          </InfoboxColumn>
        ))}
      </InfoboxRow>
    </GenericSidebar>
  );
}
