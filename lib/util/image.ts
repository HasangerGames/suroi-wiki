export async function getImageSize(
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
