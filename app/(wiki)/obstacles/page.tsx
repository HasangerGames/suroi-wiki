import GenericListingPageFactory from "@/components/layouts/GenericListingPageFactory";
import { Obstacles } from "@/vendor/suroi/common/src/definitions/obstacles";

export default GenericListingPageFactory(
  Obstacles.definitions.filter(
    obstacle => !(obstacle.idString.includes("wall") // walls
      || obstacle.idString.includes("_winter") // winter variants
      || obstacle.idString.includes("_stair") // staircases
      || [
        // technical obstacles
        "fire_exit_railing",
        "hq_second_floor_collider_hack",
        "hq_second_floor_collider_hack_2",
        "hq_large_cart",
        "lodge_railing",
        "headquarters_bottom_entrance",
        "headquarters_bottom_entrance",
        "headquarters_main_desk",
        "headquarters_boss_desk",
        "headquarters_cafeteria_table",
        "headquarters_wood_obstacles",
        "headquarters_wood_table_second_floor",
        "headquarters_sinks",
        "headquarters_security_desk_activated",

        // obstacles not significant enough to need a page or have missing textures
        "pebble",
        "cobweb",
        "red_small_couch",
        "window_damaged",
        "tent_window",
        "blue_metal_auto_door",
        "red_metal_auto_door",
        "metal_auto_door",
        "house_column",
        "metal_column"
      ].includes(obstacle.idString)
    )
  ),
  "Obstacles",
  "/obstacles"
);
