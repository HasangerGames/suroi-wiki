import { Hono } from "hono";
import { serve } from "@hono/node-server";
import { logger } from "hono/logger";
import { serveStatic } from "@hono/node-server/serve-static";
import { Home } from "./routes/home";
import { CONFIG } from "./config";
import { WikiPages } from "./routes/wiki";
import { TestPages } from "./routes/test";
import { exec } from "child_process";
import { ChangelogPages } from "./routes/changelog";

exec("unocss **/*.tsx -o public/uno.css", (error, stdout, stderr) => {
  console.log(stdout)
});

const router = new Hono({ strict: false });

router.use(logger());
router.route("/", Home);
router.route("/wiki", WikiPages);
router.route("/test", TestPages);
router.route("/changelog", ChangelogPages);

router.use("/*", serveStatic({ root: "/public" }));
router.use(
  "/reset.css",
  serveStatic({ path: "/node_modules/@unocss/reset/tailwind.css" })
);

serve({
  port: CONFIG.port,
  fetch: router.fetch,
});
console.log(`Server is running at port ${CONFIG.port}!`);
