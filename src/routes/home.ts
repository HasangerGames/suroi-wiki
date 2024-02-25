import { Hono } from "hono";

export const Home = new Hono();

Home.get("/", (c) => {
  return c.text("Hello world!");
});
