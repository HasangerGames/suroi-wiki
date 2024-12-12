import RenderedBuilding from "@/components/svg/special/RenderedBuilding";
import { Buildings } from "@/vendor/suroi/common/src/definitions/buildings";

export default function Test() {
  return (
    <>
      <RenderedBuilding building={Buildings.fromString("armory")} view="first_floor"></RenderedBuilding>
    </>
  );
}
