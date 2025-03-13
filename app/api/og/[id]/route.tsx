// OpenGraph only route
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

import { getSuroiImageLink, getSuroiItem } from "@/lib/util/suroi";
import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");
  if (!id) return new Response("Missing ID", { status: 400 });

  const item = getSuroiItem(id);
  if (!item) return new Response("Item Not Found", { status: 404 });
  const image = getSuroiImageLink(item);

  const inter = await fetch(
    new URL("../../../../public/font/Inter-Regular.ttf", import.meta.url)
  ).then(res => res.arrayBuffer());
  const interBold = await fetch(
    new URL("../../../../public/font/Inter-Bold.ttf", import.meta.url)
  ).then(res => res.arrayBuffer());
  const spaceMono = await fetch(
    new URL("../../../../public/font/SpaceMono-Regular.ttf", import.meta.url)
  ).then(res => res.arrayBuffer());

  const logoData = await fetch(
    new URL("../../../../public/img/logo.png", import.meta.url)
  ).then(res => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          color: "white",
          background: "#202020",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "4rem",
          fontFamily: "Inter",
          gap: "2rem"
        }}
      >
        <div
          style={{
            display: "flex"
          }}
        >
          {/* @ts-expect-error Someone was too lazy to decode the buffer. */}
          <img src={logoData} height={48 * 2} width={169 * 2} />
        </div>
        <div
          style={{
            display: "flex",
            flex: "1 1 0%",
            gap: "4rem"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: "1 1 0%"
            }}
          >
            <h1
              style={{
                fontSize: "5rem",
                fontFamily: "InterBold",
                fontWeight: "bold",
                margin: 0
              }}
            >
              {item.name}
            </h1>
            <h2
              style={{
                fontFamily: "SpaceMono",
                fontSize: "4rem"
              }}
            >
              {item.idString}
            </h2>
          </div>

          <div
            style={{
              display: "flex"
            }}
          >
            <img width="512" height="512" src={image} />
          </div>
        </div>
      </div>
    ),
    {
      width: 1280,
      height: 720,

      fonts: [
        {
          name: "Inter",
          data: inter,
          style: "normal",
          weight: 400
        },
        {
          name: "InterBold",
          data: interBold,
          style: "normal",
          weight: 700
        },

        {
          name: "SpaceMono",
          data: spaceMono,
          style: "normal",
          weight: 400
        }
      ]
    }
  );
}
