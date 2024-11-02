import {
  getSuroiImageLink
} from "@/lib/util/suroi";
import GenericSidebar from "./utils/GenericSidebar";
import InfoboxColumn from "./utils/InfoboxColumn";
import InfoboxHeader from "./utils/InfoboxHeader";
import InfoboxRow from "./utils/InfoboxRow";
import { PerkCategories, PerkDefinition, PerkQualities } from "@/vendor/suroi/common/src/definitions/perks";

export default function PerkSidebar({
  item
}: {
  item: PerkDefinition
}) {
  let category;
  switch (item.categories[0]) {
    case PerkCategories.Normal:
      category = "Normal";
      break;
    case PerkCategories.Halloween:
      category = "Halloween";
      break;
  }

  let type;
  switch (item.type) {
    case PerkQualities.Positive:
      type = "Positive";
      break;
    case PerkQualities.Neutral:
      type = "Neutral";
      break;
    case PerkQualities.Negative:
      type = "Negative";
      break;
  }

  const modifiers = Object.entries({
    updateInterval: "Update Interval",
    cutoff: "Cutoff",
    split: "Split",
    deviation: "Deviation",
    damageMod: "Damage Modifier",
    rangeMod: "Range Modifier",
    speedMod: "Speed Modifier",
    spreadMod: "Spread Modifier",
    reloadMod: "Reload Speed Modifier",
    usageMod: "Usage Speed Modifier",
    explosionMod: "Explosion Modifier",
    sizeMod: "Size Modifier",
    healthMod: "Health Modifier",
    hpMod: "Health Modifier",
    tracerLengthMod: "Tracer Length Modifier",
    waterSpeedMod: "Water Speed Modifier",
    smokeSpeedMod: "Smoke Speed Modifier",
    airdropCallerLimit: "Radio Use Limit",
    regenRate: "Regen Rate",
    speedBoostDuration: "Speed Boost Duration",
    healthLoss: "Health Loss",
    adrenLoss: "Adrenaline Loss",
    healBonus: "Heal Bonus",
    adrenalineBonus: "Adrenaline Bonus",
    adrenDecay: "Adrenaline Decay Modifier",
    adrenSet: "Adrenaline Value",
    killsLimit: "Kills Limit",
    dropCount: "Drop Count",
    healDmgRate: "Heal Damage Rate",
    lowerHpLimit: "Minimum Health"
  });

  return (
    <GenericSidebar
      title={item.name}
      image={getSuroiImageLink(item)}
    >
      <InfoboxHeader>Basic Info</InfoboxHeader>
      <InfoboxRow>
        <InfoboxColumn title="Category">{category}</InfoboxColumn>
        <InfoboxColumn title="Type">{type}</InfoboxColumn>
      </InfoboxRow>
      <InfoboxRow>
        <InfoboxColumn title="Droppable?">{item.noDrop ? "No" : "Yes"}</InfoboxColumn>
        <InfoboxColumn title="Swappable?">{item.noSwap ? "No" : "Yes"}</InfoboxColumn>
      </InfoboxRow>

      {modifiers.some(([prop]) => prop in item) && (
        <>
          <InfoboxHeader>Stats & Modifiers</InfoboxHeader>
          <InfoboxRow>
            {modifiers.map(([prop, name]) => prop in item && <InfoboxColumn title={name}>{Math.round(item[prop as keyof PerkDefinition] as number * 100) / 100}{prop === "updateInterval" || prop === "speedBoostDuration" ? "ms" : ""}</InfoboxColumn>)}
          </InfoboxRow>
        </>
      )}

      <InfoboxHeader>Advanced Stats</InfoboxHeader>
      <InfoboxRow>
        <InfoboxColumn title="Internal ID">
          <span className="font-mono">{item.idString}</span>
        </InfoboxColumn>
      </InfoboxRow>
    </GenericSidebar>
  );
}
