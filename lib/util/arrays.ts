export function range(
  size: number,
  startAt: number = 0,
): ReadonlyArray<number> {
  return [...Array(size).keys()].map((i) => i + startAt);
}
