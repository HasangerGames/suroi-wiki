import { Hono } from "hono"
import { GunPages } from "./definitions/guns"
import { MeleePages } from "./definitions/melees"

export const WikiPages = new Hono()

WikiPages.get("/", c => {
  return c.text("list of all wiki pages, unimplemented")
})

WikiPages.route("/", GunPages)
WikiPages.route("/", MeleePages)