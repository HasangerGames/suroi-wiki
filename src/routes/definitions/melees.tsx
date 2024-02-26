import { Melees } from "@suroi/common/src/definitions/melees";
import { Hono } from "hono";

export const MeleePages = new Hono();

Melees.forEach((m) => {
	MeleePages.get(`/${m.idString}`, (c) => {
		return c.json(m);
	});
});
