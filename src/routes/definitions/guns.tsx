import { Guns } from "@suroi/common/src/definitions/guns";
import { Hono } from "hono";
import Sidebar, {SidebarUtils} from "src/components/articles/sidebar";
import Markdown, { WikiMarkdown } from "src/components/generics/markdown";
import Layout from "src/layouts/layout";

export const GunPages = new Hono();

Guns.forEach((g) => {
  GunPages.get(`/${g.idString}`, (c) => {
    return c.html(
      <Layout title={g.name}>
        <WikiMarkdown title={g.name} article={g.idString} aside={
          <Sidebar title={g.name}>
            <SidebarUtils.Row>
              <SidebarUtils.Column title="Fire Mode">{g.fireMode}</SidebarUtils.Column>
              <SidebarUtils.Column title="Ammo Type">{g.ammoType}</SidebarUtils.Column>
              <SidebarUtils.Column title="Capacity">{g.capacity}</SidebarUtils.Column>
            </SidebarUtils.Row>
            <SidebarUtils.Row>
              <SidebarUtils.Column title="Reload Time">{g.capacity} in {g.singleReload ? g.capacity * g.reloadTime : g.reloadTime} s</SidebarUtils.Column>
              <SidebarUtils.Column title="Firing Delay">{g.fireDelay} ms</SidebarUtils.Column>
              <SidebarUtils.Column title="Switch Delay">{g.switchDelay}</SidebarUtils.Column>
            </SidebarUtils.Row>
            <SidebarUtils.Row>
              <SidebarUtils.Column title="Spread">{g.shotSpread} deg</SidebarUtils.Column>
              <SidebarUtils.Column title="Spread While Moving">{g.moveSpread} deg</SidebarUtils.Column>
            </SidebarUtils.Row>
            <SidebarUtils.Section title="Ballistics">
              <SidebarUtils.Row>
                <SidebarUtils.Column title="Damage">{g.ballistics.damage}</SidebarUtils.Column>
                <SidebarUtils.Column title="Bullet Speed">{g.ballistics.speed}</SidebarUtils.Column>
                <SidebarUtils.Column title="Range">{g.ballistics.range}</SidebarUtils.Column>
              </SidebarUtils.Row>
              <SidebarUtils.Row>
                <SidebarUtils.Column title="Damage">{g.ballistics.damage}</SidebarUtils.Column>
                <SidebarUtils.Column title="Bullet Speed">{g.ballistics.speed}</SidebarUtils.Column>
                <SidebarUtils.Column title="Range">{g.ballistics.range}</SidebarUtils.Column>
              </SidebarUtils.Row>
            </SidebarUtils.Section>
          </Sidebar>
        } />
      </Layout>
    );
  });
});
