import { Loots } from "@/vendor/suroi/common/src/definitions/loots";

export function getSuroiItem(idString: string) {
  return Loots.definitions.find((item) => item.idString === idString);
}