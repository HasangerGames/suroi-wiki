import { ObjectDefinition } from "@suroi/common/src/utils/objectDefinitions";
import { Hono } from "hono";
import Layout from "src/layouts/layout";
import { ComponentType } from "src/lib/types";
import { WikiMarkdown } from "./markdown";
import Sidebar, { SidebarUtils } from "../articles/sidebar";

export default function makePages<T extends ObjectDefinition>(
  objects: T[],
  options: MakePageOptions<T>
) {
  const pages = new Hono();

  for (const object of objects) {
    pages.get(`/${object.idString}`, (ctx) => {
      return ctx.html(
        <Layout title={object.name}>
          <WikiMarkdown
            title={object.name}
            article={object.idString}
            aside={
              <Sidebar title={object.name}>
                <options.Sidebar object={object} />
                <SidebarUtils.Section title="Advanced">
                  <SidebarUtils.Row>
                    <SidebarUtils.Column title="Object ID">{object.idString}</SidebarUtils.Column>
                  </SidebarUtils.Row>
                </SidebarUtils.Section>
              </Sidebar>
            }
          />
        </Layout>
      );
    });
  }

  return pages;
}

export interface MakePageOptions<T extends ObjectDefinition> {
  Sidebar: ComponentType<{ object: T }>;
}
