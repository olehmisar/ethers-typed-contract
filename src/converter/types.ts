import { ethers } from "ethers";
import { Tuple } from "ts-essentials";

export type AbiVarType = "address" | "string" | "uint256" | "int256" | "bool";

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

// Abi Conversion Utils
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
