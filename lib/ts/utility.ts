export type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] };
export type Unpacked<T> = T extends (infer U)[] ? U : T;
export function clamp(value: number, min: number, max: number) {
  return value < min ? min : value > max ? max : value;
}
