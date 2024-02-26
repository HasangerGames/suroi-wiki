import { Armors } from "@suroi/common/src/definitions/armors";
import { Backpacks } from "@suroi/common/src/definitions/backpacks";
import { Buildings } from "@suroi/common/src/definitions/buildings";
import { Guns } from "@suroi/common/src/definitions/guns";
import { Melees } from "@suroi/common/src/definitions/melees";
import { Obstacles } from "@suroi/common/src/definitions/obstacles";
import { Throwables } from "@suroi/common/src/definitions/throwables";

export const AllDefinitions = [
  ...Guns, ...Melees, ...Throwables, ...Obstacles, ...Buildings, ...Armors, ...Backpacks
]