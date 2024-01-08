export type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] };
export type Unpacked<T> = T extends (infer U)[] ? U : T;
