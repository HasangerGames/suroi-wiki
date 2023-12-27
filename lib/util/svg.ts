/**
 * Units are in PX!
 */
export type SVGObject =
  | {
      x: number;
      y: number;
      zIndex: number;
    } & (
      | {
          type: "image";
          url: string;
        }
      | {
          type: "rect";
          width: number;
          height: number;
          fill: string;
        }
      | {
          type: "circle";
          radius: number;
          fill: string;
        }
    );

export async function getImageDimensions(
  src: string
): Promise<{ width: number; height: number }> {
  const image = new Image();
  image.src = src;

  return new Promise((resolve) => {
    image.onload = () => {
      resolve({
        width: image.width,
        height: image.height,
      });
    };
  });
}
