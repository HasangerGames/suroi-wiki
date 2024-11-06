import RenderedBuilding from "@/components/svg/special/RenderedBuilding";
import { Buildings } from "@/vendor/suroi/common/src/definitions";

export default function Test() {
  return (
    <RenderedBuilding building={Buildings.fromString("port")} view="ceiling"></RenderedBuilding>
  );
}
