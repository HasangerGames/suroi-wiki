/**
 * Eases a value linearly
 * @param min Minimum value
 * @param max Maximum value
 * @param progress Progress in between the values, must be 0 - 1
 * @returns The eased value
 */
export function easeLinear(min: number, max: number, progress: number) {
  return progress >= 1
    ? max
    : progress <= 0
    ? min
    : progress * (max - min) + min;
}
