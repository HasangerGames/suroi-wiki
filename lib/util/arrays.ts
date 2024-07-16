export function range(
  size: number,
  startAt = 0
): readonly number[] {
  return [...Array(size).keys()].map(i => i + startAt);
}
