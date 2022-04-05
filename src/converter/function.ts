import { ethers } from "ethers";
import { DeepReadonly, Merge, UnionToIntersection } from "ts-essentials";
import { ArrayOmit, Count, ExpandObject, __VALUE_TO_OMIT__ } from "../utils";
import { AbiItem, AbiItemToSignature, VoidOrSingleOrTuple } from "./common";
import {
  AbiInputTypeToTypescriptType,
  AbiOutputTypeToTypescriptType,
  AbiVarType,
} from "./types";

// Types
export type AbiFunctionVar = DeepReadonly<{ name: string; type: AbiVarType }>;
type AbiStateMutability = "pure" | "view" | "nonpayable" | "payable";
export type AbiItemFunction = DeepReadonly<{
  type: "function";
  name: string;
  stateMutability: AbiStateMutability;
  inputs: AbiFunctionVar[];
  outputs: AbiFunctionVar[];
}>;

// Converters
type AbiItemToFunctionName<
  T extends AbiItemFunction,
  IsOverloaded extends boolean
> = IsOverloaded extends true ? AbiItemToSignature<T> : T["name"];

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

export type AbiItemsToNotOverloadedAbiItems<T extends readonly AbiItem[]> =
  ArrayOmit<
    [
      ...{
        [K in keyof T]: T[K] extends AbiItemFunction
          ? Count<T, { name: T[K]["name"] }> extends 1
            ? T[K]
            : __VALUE_TO_OMIT__
          : __VALUE_TO_OMIT__;
      }
    ],
    __VALUE_TO_OMIT__
  >;

export type AbiItemsToOverloadedAbiItems<T extends readonly AbiItem[]> =
  ArrayOmit<
    [
      ...{
        [K in keyof T]: T[K] extends AbiItemFunction
          ? Count<T, { name: T[K]["name"] }> extends 1
            ? __VALUE_TO_OMIT__
            : T[K]
          : __VALUE_TO_OMIT__;
      }
    ],
    __VALUE_TO_OMIT__
  >;

/**
 * Transform single `AbiItem` to an object containing a single method,
 * where parameters and return type may be different depending on `AbiItemFunction['stateMutability']`.
 */
type AbiItemToMethod<
  T extends AbiItemFunction,
  IsOverloaded extends boolean
> = {
  [key in AbiItemToFunctionName<T, IsOverloaded>]: (
    ...args: [
      ...AbiFunctionInputsToParameters<T["inputs"]>,
      AbiStateMutabilityToOverrides<T["stateMutability"]>?
    ]
  ) => Promise<AbiFunctionOutputsAndStateMutabilityToReturnType<T, true>>;
};
type AbiItemsToMethodsInternal<
  T extends readonly AbiItem[],
  IsOverloaded extends boolean
> = UnionToIntersection<
  {
    [K in keyof T]: T[K] extends AbiItemFunction
      ? AbiItemToMethod<T[K], IsOverloaded>
      : never;
  }[number]
>;
/**
 * Transform an array of `AbiItem`s to direct methods on `ethers.Contract` instance.
 */
export type AbiItemsToMethods<T extends readonly AbiItem[]> = ExpandObject<
  Merge<
    AbiItemsToMethodsInternal<AbiItemsToOverloadedAbiItems<T>, true>,
    AbiItemsToMethodsInternal<AbiItemsToNotOverloadedAbiItems<T>, false>
  >
>;

type AbiItemToFunction<
  T extends AbiItemFunction,
  IsOverloaded extends boolean
> = {
  [key in AbiItemToFunctionName<T, IsOverloaded>]: (
    ...args: [
      ...AbiFunctionInputsToParameters<T["inputs"]>,
      AbiStateMutabilityToOverrides<T["stateMutability"]>?
    ]
  ) => Promise<AbiFunctionOutputsAndStateMutabilityToReturnType<T, false>>;
};
type AbiItemsToFunctionsInternal<
  T extends readonly AbiItemFunction[],
  IsOverloaded extends boolean
> = UnionToIntersection<
  {
    [K in keyof T]: T[K] extends AbiItemFunction
      ? AbiItemToFunction<T[K], IsOverloaded>
      : never;
  }[number]
>;
/**
 * Transform an array of `AbiItem`s to functions on `ethers.Contract.functions`.
 */
export type AbiItemsToFunctions<T extends readonly AbiItem[]> = ExpandObject<
  Merge<
    AbiItemsToFunctionsInternal<AbiItemsToOverloadedAbiItems<T>, true>,
    AbiItemsToFunctionsInternal<AbiItemsToNotOverloadedAbiItems<T>, false>
  >
>;

type AbiItemToCallStatic<
  T extends AbiItemFunction,
  IsOverloaded extends boolean
> = {
  [key in AbiItemToFunctionName<T, IsOverloaded>]: (
    ...args: [
      ...AbiFunctionInputsToParameters<T["inputs"]>,
      ethers.CallOverrides?
    ]
  ) => Promise<
    VoidOrSingleOrTuple<AbiFunctionOutputsToReturnTypes<T["outputs"]>, true>
  >;
};
type AbiItemsToCallStaticInternal<
  T extends readonly AbiItem[],
  IsOverloaded extends boolean
> = UnionToIntersection<
  {
    [K in keyof T]: T[K] extends AbiItemFunction
      ? AbiItemToCallStatic<T[K], IsOverloaded>
      : never;
  }[number]
>;
/**
 * Transform an array of `AbiItem`s to functions on `ethers.Contract.callStatic`.
 */
export type AbiItemsToCallStatic<T extends readonly AbiItem[]> = ExpandObject<
  Merge<
    AbiItemsToCallStaticInternal<AbiItemsToOverloadedAbiItems<T>, true>,
    AbiItemsToCallStaticInternal<AbiItemsToNotOverloadedAbiItems<T>, false>
  >
>;

type AbiItemToEstimateGas<
  T extends AbiItemFunction,
  IsOverloaded extends boolean
> = {
  [key in AbiItemToFunctionName<T, IsOverloaded>]: (
    ...args: [
      ...AbiFunctionInputsToParameters<T["inputs"]>,
      AbiStateMutabilityToOverrides<T["stateMutability"]>?
    ]
  ) => Promise<ethers.BigNumber>;
};

type AbiItemsToEstimateGasInternal<
  T extends readonly AbiItem[],
  IsOverloaded extends boolean
> = UnionToIntersection<
  {
    [K in keyof T]: T[K] extends AbiItemFunction
      ? AbiItemToEstimateGas<T[K], IsOverloaded>
      : never;
  }[number]
>;
/**
 * Transform an array of `AbiItem`s to functions on `ethers.Contract.estimateGas`.
 */
export type AbiItemsToEstimateGas<T extends readonly AbiItem[]> = ExpandObject<
  Merge<
    AbiItemsToEstimateGasInternal<AbiItemsToOverloadedAbiItems<T>, true>,
    AbiItemsToEstimateGasInternal<AbiItemsToNotOverloadedAbiItems<T>, false>
  >
>;

type AbiItemToPopulateTransaction<
  T extends AbiItemFunction,
  IsOverloaded extends boolean
> = {
  [key in AbiItemToFunctionName<T, IsOverloaded>]: (
    ...args: [
      ...AbiFunctionInputsToParameters<T["inputs"]>,
      AbiStateMutabilityToOverrides<T["stateMutability"]>?
    ]
  ) => Promise<ethers.PopulatedTransaction>;
};
type AbiItemsToPopulateTransactionInternal<
  T extends readonly AbiItem[],
  IsOverloaded extends boolean
> = UnionToIntersection<
  {
    [K in keyof T]: T[K] extends AbiItemFunction
      ? AbiItemToPopulateTransaction<T[K], IsOverloaded>
      : never;
  }[number]
>;
/**
 * Transform an array of `AbiItem`s to functions on `ethers.Contract.populateTransaction`.
 */
export type AbiItemsToPopulateTransaction<T extends readonly AbiItem[]> =
  ExpandObject<
    Merge<
      AbiItemsToPopulateTransactionInternal<
        AbiItemsToOverloadedAbiItems<T>,
        true
      >,
      AbiItemsToPopulateTransactionInternal<
        AbiItemsToNotOverloadedAbiItems<T>,
        false
      >
    >
  >;
