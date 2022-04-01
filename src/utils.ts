import { Head, Tail } from "ts-essentials";

/**
 * Expands object types one level deep
 */
export type ExpandObject<T> = T extends infer O
  ? { [K in keyof O]: O[K] }
  : never;

/**
 * Join array of string `T` with a separator `Sep`.
 * ```ts
 * Join<["one", "two", "three"], ", "> == "one, two, three"
 * ```
 */
export type Join<
  T extends readonly string[],
  Sep extends string
> = T["length"] extends 0
  ? ""
  : T["length"] extends 1
  ? T[0]
  : `${Head<T>}${Sep}${Join<Tail<T>, Sep>}`;
