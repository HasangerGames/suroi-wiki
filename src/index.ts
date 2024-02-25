import { Hono } from "hono";
import { serve } from "@hono/node-server";
import { logger } from "hono/logger";
import { Home } from "./routes/home";
import { CONFIG } from "./config";

const router = new Hono({ strict: false });

router.use(logger());
router.route("/", Home);

serve({
  port: CONFIG.port,
  fetch: router.fetch,
});
console.log(`Server is running at port ${CONFIG.port}!`);
