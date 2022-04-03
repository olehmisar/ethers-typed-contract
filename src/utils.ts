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

export type ArrayOmit<T extends any[], E> = T["length"] extends 0
  ? []
  : T extends [infer THead, ...infer TRest]
  ? THead extends E
    ? ArrayOmit<TRest, E>
    : [THead, ...ArrayOmit<TRest, E>]
  : never;

declare const __VALUE_TO_OMIT__: unique symbol;
export type __VALUE_TO_OMIT__ = typeof __VALUE_TO_OMIT__;
export type Count<T extends readonly any[], E> = ArrayOmit<
  [
    ...{
      [K in keyof T]: T[K] extends E ? T[K] : __VALUE_TO_OMIT__;
    }
  ],
  __VALUE_TO_OMIT__
>["length"];
