import { ethers } from "ethers";
import { DeepReadonly, Tuple } from "ts-essentials";
import { Join } from "../utils";
import { AbiEventVar, AbiItemEvent } from "./event";
import { AbiFunctionVar, AbiItemFunction } from "./function";

export type AbiVarType = "address" | "string" | "uint256" | "int256" | "bool";
export type AbiItem = DeepReadonly<AbiItemFunction | AbiItemEvent>;
export type AbiVar = DeepReadonly<AbiFunctionVar | AbiEventVar>;

// Abi Conversion Utils
export type AbiInputTypeToTypescriptType<T extends AbiVarType> = {
  address: string;
  string: string;
  uint256: ethers.BigNumberish;
  int256: ethers.BigNumberish;
  bool: boolean;
}[T];

export type AbiOutputTypeToTypescriptType<T extends AbiVarType> = {
  address: string;
  string: string;
  uint256: ethers.BigNumber;
  int256: ethers.BigNumber;
  bool: boolean;
}[T];

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
