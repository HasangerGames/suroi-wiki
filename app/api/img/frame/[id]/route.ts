import { NextRequest, NextResponse } from "next/server";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const frameMap = new Map<string, Blob>();

async function initFrameMap() {
  const frameFiles = await readdir(path.join(process.cwd(), "vendor/suroi/client/public/img/game"), {
    recursive: true,
    withFileTypes: true
  });

  const frameFilePromises = frameFiles
    .filter(frameFile => frameFile.name.endsWith(".svg"))
    .map(async frameFile => {
      const file = await readFile(path.join(frameFile.parentPath, frameFile.name));
      const frameName = frameFile.name.slice(0, -".svg".length);
      const blob = new Blob([file], {
        type: "image/svg+xml"
      });

      frameMap.set(frameName, blob);
    });

  await Promise.all(frameFilePromises);
}

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (frameMap.size === 0) {
    await initFrameMap();
  }

  const id = (await params).id;

  if (!id) {
    return new NextResponse("Frame ID not specified", {
      status: 404
    });
  }

  const blob = frameMap.get(id);

  if (!blob) {
    return new NextResponse(`Frame ID ${id} not found!`, {
      status: 404
    });
  }

  return new NextResponse(blob);
}
