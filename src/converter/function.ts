import { ethers } from "ethers";
import { DeepReadonly, UnionToIntersection } from "ts-essentials";
import { AbiItem } from ".";
import { ExpandObject } from "../utils";
import {
  AbiInputTypeToTypescriptType,
  AbiOutputTypeToTypescriptType,
  AbiVarType,
  VoidOrSingleOrTuple,
} from "./types";

// Types
type AbiFunctionVar = DeepReadonly<{ name: string; type: AbiVarType }>;
type AbiStateMutability = "pure" | "view" | "nonpayable" | "payable";
export type AbiItemFunction = DeepReadonly<{
  type: "function";
  name: string;
  stateMutability: AbiStateMutability;
  inputs: AbiFunctionVar[];
  outputs: AbiFunctionVar[];
}>;

// Converters
type AbiFunctionInputsToParameters<T extends readonly AbiFunctionVar[]> = [
  ...{
    [K in keyof T]: T[K] extends AbiFunctionVar
      ? AbiInputTypeToTypescriptType<T[K]["type"]>
      : unknown;
  }
];
type AbiFunctionOutputsToReturnTypes<T extends readonly AbiFunctionVar[]> = [
  ...{
    [K in keyof T]: T[K] extends AbiFunctionVar
      ? AbiOutputTypeToTypescriptType<T[K]["type"]>
      : unknown;
  }
];

type AbiFunctionOutputsAndStateMutabilityToReturnType<
  T extends AbiItemFunction,
  UnwrapTuple extends boolean
> = {
  payable: ethers.ContractTransaction;
  nonpayable: ethers.ContractTransaction;
  view: VoidOrSingleOrTuple<
    AbiFunctionOutputsToReturnTypes<T["outputs"]>,
    UnwrapTuple
  >;
  pure: VoidOrSingleOrTuple<
    AbiFunctionOutputsToReturnTypes<T["outputs"]>,
    UnwrapTuple
  >;
}[T["stateMutability"]];

type AbiStateMutabilityToOverrides<T extends AbiStateMutability> = {
  payable: ethers.PayableOverrides & {
    from?: string | Promise<string> | undefined;
  };
  nonpayable: ethers.Overrides & {
    from?: string | Promise<string> | undefined;
  };
  view: ethers.CallOverrides;
  pure: ethers.CallOverrides;
}[T];

/**
 * Transform single `AbiItem` to an object containing a single method,
 * where parameters and return type may be different depending on `AbiItemFunction['stateMutability']`.
 */
type AbiItemToMethod<T extends AbiItemFunction> = {
  [key in T["name"]]: (
    ...args: [
      ...AbiFunctionInputsToParameters<T["inputs"]>,
      AbiStateMutabilityToOverrides<T["stateMutability"]>?
    ]
  ) => Promise<AbiFunctionOutputsAndStateMutabilityToReturnType<T, true>>;
};

/**
 * Transform an array of `AbiItem`s to direct methods on `ethers.Contract` instance.
 */
export type AbiItemsToMethods<T extends readonly AbiItem[]> =
  UnionToIntersection<
    {
      [K in keyof T]: T[K] extends AbiItemFunction
        ? AbiItemToMethod<T[K]>
        : never;
    }[number]
  >;

type AbiItemToFunction<T extends AbiItemFunction> = {
  [key in T["name"]]: (
    ...args: [
      ...AbiFunctionInputsToParameters<T["inputs"]>,
      AbiStateMutabilityToOverrides<T["stateMutability"]>?
    ]
  ) => Promise<AbiFunctionOutputsAndStateMutabilityToReturnType<T, false>>;
};
/**
 * Transform an array of `AbiItem`s to functions on `ethers.Contract.functions`.
 */
export type AbiItemsToFunctions<T extends readonly AbiItem[]> = ExpandObject<
  UnionToIntersection<
    {
      [K in keyof T]: T[K] extends AbiItemFunction
        ? AbiItemToFunction<T[K]>
        : never;
    }[number]
  >
>;

type AbiItemToCallStatic<T extends AbiItemFunction> = {
  [key in T["name"]]: (
    ...args: [
      ...AbiFunctionInputsToParameters<T["inputs"]>,
      ethers.CallOverrides?
    ]
  ) => Promise<
    VoidOrSingleOrTuple<AbiFunctionOutputsToReturnTypes<T["outputs"]>, true>
  >;
};
/**
 * Transform an array of `AbiItem`s to functions on `ethers.Contract.callStatic`.
 */
export type AbiItemsToCallStatic<T extends readonly AbiItem[]> = ExpandObject<
  UnionToIntersection<
    {
      [K in keyof T]: T[K] extends AbiItemFunction
        ? AbiItemToCallStatic<T[K]>
        : never;
    }[number]
  >
>;

type AbiItemToEstimateGas<T extends AbiItemFunction> = {
  [key in T["name"]]: (
    ...args: [
      ...AbiFunctionInputsToParameters<T["inputs"]>,
      AbiStateMutabilityToOverrides<T["stateMutability"]>?
    ]
  ) => Promise<ethers.BigNumber>;
};
/**
 * Transform an array of `AbiItem`s to functions on `ethers.Contract.estimateGas`.
 */
export type AbiItemsToEstimateGas<T extends readonly AbiItem[]> = ExpandObject<
  UnionToIntersection<
    {
      [K in keyof T]: T[K] extends AbiItemFunction
        ? AbiItemToEstimateGas<T[K]>
        : never;
    }[number]
  >
>;

type AbiItemToPopulateTransaction<T extends AbiItemFunction> = {
  [key in T["name"]]: (
    ...args: [
      ...AbiFunctionInputsToParameters<T["inputs"]>,
      AbiStateMutabilityToOverrides<T["stateMutability"]>?
    ]
  ) => Promise<ethers.PopulatedTransaction>;
};
/**
 * Transform an array of `AbiItem`s to functions on `ethers.Contract.populateTransaction`.
 */
export type AbiItemsToPopulateTransaction<T extends readonly AbiItem[]> =
  ExpandObject<
    UnionToIntersection<
      {
        [K in keyof T]: T[K] extends AbiItemFunction
          ? AbiItemToPopulateTransaction<T[K]>
          : never;
      }[number]
    >
  >;
