import { Hono } from "hono";
import { GunPages } from "./definitions/guns";
import { MeleePages } from "./definitions/melees";
import Layout from "../layouts/layout";
import { AllDefinitions } from "src/lib/suroi";

export const WikiPages = new Hono();

WikiPages.get("/", (c) => {
  return c.html(
    <Layout title="Wiki Pages">
      <main class="prose prose-white max-w-full">
        <h1>Wiki Pages</h1>
        <p>
          A list of all the wiki pages (includes only game definitions, see
          special pages for more). This mostly serves as a fallback to search (you can use Ctrl-F to find stuff here)
        </p>
        <ul>
          {AllDefinitions.map((d) => (
            <li>
              <a href={`/wiki/${d.idString}`}>{d.name}</a>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
});

WikiPages.route("/", GunPages);
WikiPages.route("/", MeleePages);
