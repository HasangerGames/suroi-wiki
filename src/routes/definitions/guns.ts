import { Guns } from "@suroi/common/src/definitions/guns";
import { Hono } from "hono";

export const GunPages = new Hono();

Guns.forEach((g) => {
  GunPages.get(`/${g.idString}`, (c) => {
    return c.json(g);
  });
});
