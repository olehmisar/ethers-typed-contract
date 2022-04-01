import { Builtin, NonNever } from "ts-essentials";
import { ExpandObject } from "../src/utils";

export function assertType<_T extends true>() {}

export type Equals<X, Y> = (<T>() => T extends X ? 1 : 2) extends <
  T
>() => T extends Y ? 1 : 2
  ? true
  : false;

export type Diff<T0, T1> = T0 extends Builtin
  ? [T0, T1]
  : T1 extends Builtin
  ? [T0, T1]
  : ExpandObject<
      | NonNever<{
          [K in keyof T0 & keyof T1]: Equals<T0[K], T1[K]> extends false
            ? Diff<T0[K], T1[K]>
            : never;
        }>
      | {
          [K in Exclude<keyof T0, keyof T1>]: T0[K];
        }
      | {
          [K in Exclude<keyof T1, keyof T0>]: T1[K];
        }
    >;
