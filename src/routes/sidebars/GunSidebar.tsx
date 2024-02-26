import { FireMode } from "@suroi/common/src/constants";
import { GunDefinition } from "@suroi/common/src/definitions/guns";
import { SidebarUtils } from "src/components/articles/sidebar";

export default function GunSidebar({ object: gun }: { object: GunDefinition }) {
  return (
    <>
      <SidebarUtils.Row>
        <SidebarUtils.Column title="Fire Mode">
          {FireMode[gun.fireMode]}
        </SidebarUtils.Column>
        <SidebarUtils.Column title="Ammo Type">
          <img
            src={`/img/game/loot/${gun.ammoType}.svg`}
            alt={`${gun.ammoType} ammo`}
          />
        </SidebarUtils.Column>
        <SidebarUtils.Column title="Capacity">
          {gun.capacity}
        </SidebarUtils.Column>
      </SidebarUtils.Row>
      <SidebarUtils.Row>
        <SidebarUtils.Column title="Reload Time">
          {gun.capacity} in{" "}
          {gun.singleReload ? gun.capacity * gun.reloadTime : gun.reloadTime}s
        </SidebarUtils.Column>
        <SidebarUtils.Column title="Firing Delay">
          {gun.fireDelay}ms
        </SidebarUtils.Column>
        <SidebarUtils.Column title="Switch Delay">
          {gun.switchDelay}ms
        </SidebarUtils.Column>
      </SidebarUtils.Row>
      <SidebarUtils.Row>
        <SidebarUtils.Column title="Spread">
          {gun.shotSpread}°
        </SidebarUtils.Column>
        <SidebarUtils.Column title="Spread While Moving">
          {gun.moveSpread}°
        </SidebarUtils.Column>
      </SidebarUtils.Row>
      <SidebarUtils.Section title="Ballistics">
        <SidebarUtils.Row>
          <SidebarUtils.Column title="Damage">
            {gun.ballistics.damage}
          </SidebarUtils.Column>
          <SidebarUtils.Column title="Bullet Speed">
            {gun.ballistics.speed}
          </SidebarUtils.Column>
          <SidebarUtils.Column title="Range">
            {gun.ballistics.range}
          </SidebarUtils.Column>
        </SidebarUtils.Row>
        <SidebarUtils.Row>
          <SidebarUtils.Column title="Damage">
            {gun.ballistics.damage}
          </SidebarUtils.Column>
          <SidebarUtils.Column title="Bullet Speed">
            {gun.ballistics.speed}
          </SidebarUtils.Column>
          <SidebarUtils.Column title="Range">
            {gun.ballistics.range}
          </SidebarUtils.Column>
        </SidebarUtils.Row>
      </SidebarUtils.Section>
    </>
  );
}
