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

export type FixedLengthArray<T, N extends number> = number extends N
  ? T[]
  : FixedLengthArrayHelper<T, N, []>;
type FixedLengthArrayHelper<
  T,
  N extends number,
  Acc extends T[]
> = Acc["length"] extends N ? Acc : FixedLengthArrayHelper<T, N, [T, ...Acc]>;

export type StringToNumber<T extends string> =
  T extends keyof StringToNumberRange ? StringToNumberRange[T] : unknown;
type StringToNumber__MAXIMUM_ALLOWED_BOUNDARY = 998;
export type StringToNumberRange =
  Mapped<StringToNumber__MAXIMUM_ALLOWED_BOUNDARY>;
type Mapped<
  N extends number,
  Result extends unknown[] = []
> = Result["length"] extends N
  ? Result
  : Mapped<N, [...Result, Result["length"]]>;

export type DefaultIfUndefined<T, D> = T extends undefined ? D : T;
