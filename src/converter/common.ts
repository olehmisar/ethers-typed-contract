import { DeepReadonly, Tuple } from "ts-essentials";
import { Join } from "../utils";
import { AbiItemEvent } from "./event";
import { AbiItemFunction } from "./function";
import { AbiVarType } from "./types";

export type AbiVarBase = DeepReadonly<{
  type: AbiVarType;
  name: string;
  components?: AbiVarBase[];
}>;
export type AbiItem = DeepReadonly<AbiItemFunction | AbiItemEvent>;

// Abi Conversion Utils
type AbiInputsToSignatureParameters<T extends readonly AbiVarBase[]> = [
  ...{
    [K in keyof T]: T[K] extends AbiVarBase ? T[K]["type"] : never;
  }
];
export type AbiItemToSignature<T extends AbiItem> = `${T["name"]}(${Join<
  AbiInputsToSignatureParameters<T["inputs"]>,
  ","
>})`;

export type VoidOrSingleOrTuple<
  T extends Tuple,
  Unwrap extends boolean
> = Unwrap extends true
  ? T extends []
    ? void
    : T extends [infer T0]
    ? T0
    : T
  : T extends []
  ? [void]
  : T;
