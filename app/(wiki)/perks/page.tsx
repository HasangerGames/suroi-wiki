import GenericListingPageFactory from "@/components/layouts/GenericListingPageFactory";
import { PerkCategories, PerkQualities, Perks } from "@/vendor/suroi/common/src/definitions/perks";

const perkDefs = Perks.definitions;
const normalPerks = perkDefs.filter(perk => perk.category === PerkCategories.Normal);
const halloweenPerks = perkDefs.filter(perk => perk.category === PerkCategories.Halloween);
const halloweenPerkCountOfType = (type: PerkQualities): number => halloweenPerks.filter(perk => perk.type === type).length;

export default GenericListingPageFactory(
  perkDefs,
  "Perks",
  "/perks",
  `There are currently ${perkDefs.length} perks in the game.
   ${normalPerks.length} of these are normal perks, and ${halloweenPerks.length} are Halloween perks.
   All normal perks are positive.
   Of the Halloween perks, ${halloweenPerkCountOfType(PerkQualities.Positive)} are positive, ${halloweenPerkCountOfType(PerkQualities.Neutral)} are neutral, and ${halloweenPerkCountOfType(PerkQualities.Negative)} are negative.
  `
);
