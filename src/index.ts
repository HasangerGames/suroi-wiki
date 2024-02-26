import { exec } from "child_process";
import { serve } from "@hono/node-server";
import { serveStatic } from "@hono/node-server/serve-static";
import { Hono } from "hono";
import { logger } from "hono/logger";
import { CONFIG } from "./config";
import { ChangelogPages } from "./routes/changelog";
import { Home } from "./routes/home";
import { TestPages } from "./routes/test";
import { WikiPages } from "./routes/wiki";

exec("unocss **/*.tsx -o public/uno.css", (error, stdout, stderr) => {
	console.log(stdout);
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
	serveStatic({ path: "/node_modules/@unocss/reset/tailwind.css" }),
);
router.use("/img/game/loot/762mm.svg", serveStatic({ path: "/vendor/suroi/client/public/img/game/loot/762mm.svg" }));
router.use("/img/*", serveStatic({ root: "/vendor/suroi/client/public/img" }));
router.use(
	"/audio/*",
	serveStatic({ root: "/vendor/suroi/client/public/audio" }),
);

serve({
	port: CONFIG.port,
	fetch: router.fetch,
});
console.log(`Server is running at port ${CONFIG.port}!`);
