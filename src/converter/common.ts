import { DeepReadonly, Tuple } from "ts-essentials";
import { Join } from "../utils";
import { AbiEventVar, AbiItemEvent } from "./event";
import { AbiFunctionVar, AbiItemFunction } from "./function";

export type AbiItem = DeepReadonly<AbiItemFunction | AbiItemEvent>;
export type AbiVar = DeepReadonly<AbiFunctionVar | AbiEventVar>;

// Abi Conversion Utils
type AbiInputsToSignatureParameters<T extends readonly AbiVar[]> = [
  ...{
    [K in keyof T]: T[K] extends AbiVar ? T[K]["type"] : never;
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
