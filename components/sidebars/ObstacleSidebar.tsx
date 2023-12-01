import { ObstacleDefinition } from "@/vendor/suroi/common/src/definitions/obstacles";
import GenericSidebar from "./utils/GenericSidebar";
import { range } from "@/lib/util/arrays";

export default function ObstacleSidebar({
  item,
}: {
  item: ObstacleDefinition;
}) {
  return (
    <GenericSidebar
      title={item.name}
      image={`https://raw.githubusercontent.com/HasangerGames/suroi/master/client/public/img/game/obstacles/${
        item.idString
      }${item.variations ? "_1" : ""}.svg`}
      
      imageVariations={
        item.variations &&
        range(item.variations).map(
          (i) =>
            `https://raw.githubusercontent.com/HasangerGames/suroi/master/client/public/img/game/obstacles/${
              item.idString
            }_${i + 1}.svg`
        )
      }
    ></GenericSidebar>
  );
}
