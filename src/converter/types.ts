import type { ethers } from "ethers";
import { UnionToIntersection } from "ts-essentials";
import {
  DefaultIfUndefined,
  ExpandObject,
  FixedLengthArray,
  StringToNumber,
} from "../utils";
import { AbiVarBase } from "./common";

export type AbiVarType = string;

/////////////////
// Main parser //
/////////////////
export type AbiVarToTypescriptType<
  T extends AbiVarBase,
  IsOutput extends boolean
> = AbiVarToTypescriptTypeInternal<T["type"], T["components"], IsOutput>;
type AbiVarToTypescriptTypeInternal<
  T extends AbiVarType,
  C extends AbiVarBase["components"],
  IsOutput extends boolean,
  TypesMap = IsOutput extends true ? OutputTypesMap : InputTypesMap
> = T extends keyof TypesMap
  ? TypesMap[T]
  : T extends "tuple"
  ? AbiVarStructToTypescriptType<DefaultIfUndefined<C, []>, IsOutput>
  : ParseSolidityArrayBrackets<T> extends [infer TElement, infer N]
  ? TElement extends string
    ? N extends string
      ? N extends ""
        ? AbiVarToTypescriptTypeInternal<TElement, C, IsOutput>[]
        : StringToNumber<N> extends number
        ? FixedLengthArray<
            AbiVarToTypescriptTypeInternal<TElement, C, IsOutput>,
            StringToNumber<N>
          >
        : unknown
      : unknown
    : unknown
  : unknown;

type _s = AbiVarToTypescriptType<
  {
    name: "";
    type: "tuple";
    components: [
      {
        components: [
          {
            internalType: "uint256[]";
            name: "nestedBalances";
            type: "uint256[]";
          }
        ];
        internalType: "struct TestAbi.NestedStruct[3][][2][]";
        name: "nestedStruct";
        type: "uint256[3][][2]";
      }
    ];
  },
  true
>;
type _ss = AbiVarToTypescriptType<
  {
    name: "";
    type: "uint256[][2][]";
  },
  true
>;

////////////////////
// Struct parsing //
////////////////////
export type AbiVarsToTypescriptArrayType<
  C extends readonly AbiVarBase[],
  IsOutput extends boolean
> = [
  ...{
    [K in keyof C]: C[K] extends AbiVarBase
      ? AbiVarToTypescriptType<C[K], IsOutput>
      : never;
  }
];
export type AbiVarsToTypescriptObjectType<
  T extends readonly AbiVarBase[],
  IsOutput extends boolean
> = ExpandObject<
  UnionToIntersection<
    {
      [K in keyof T]: T[K] extends AbiVarBase
        ? {
            [_ in T[K]["name"]]: AbiVarToTypescriptType<T[K], IsOutput>;
          }
        : never;
    }[number]
  >
>;
type AbiVarStructToTypescriptType<
  T extends readonly AbiVarBase[],
  IsOutput extends boolean
> = IsOutput extends true
  ? AbiVarsToTypescriptArrayType<T, IsOutput> &
      // TODO: ExpandObject<..>?
      AbiVarsToTypescriptObjectType<T, IsOutput>
  : AbiVarsToTypescriptObjectType<T, IsOutput>;

///////////////////
// Array parsing //
///////////////////
type ParseSolidityArrayBrackets<T extends AbiVarType> =
  T extends `${infer TElement}[${infer TBrackets}]`
    ? ParseLastArrayBrackets<`[${TBrackets}]`> extends [
        infer TBracketsBefore,
        infer N
      ]
      ? TBracketsBefore extends string
        ? [`${TElement}${TBracketsBefore}`, N]
        : unknown
      : unknown
    : unknown;

type ParseLastArrayBrackets<T extends string> =
  ParseLastArrayBracketsSetMarker<T> extends `${infer TBefore}[${LastBracketsMarker}${infer TAfter}]`
    ? [TBefore, TAfter]
    : unknown;
type LastBracketsMarker = "__HQFQHRZCGXGBEZJP__"; // random string
type ParseLastArrayBracketsSetMarker<T extends string> =
  T extends `${infer TBefore}[${infer TAfter}`
    ? `${TBefore}[${ParseLastArrayBracketsSetMarker<TAfter>}`
    : `${LastBracketsMarker}${T}`;

//////////////////////////
// Primitive types maps //
//////////////////////////
// declare const IsOutputType: unique symbol;
// type IsOutputType = typeof IsOutputType;
type InputTypesMap = CommonTypesMap &
  NumberTypesMap<ethers.BigNumberish, ethers.BigNumberish> &
  BytesTypesMap<ethers.utils.BytesLike>;
type OutputTypesMap = CommonTypesMap &
  NumberTypesMap<number, ethers.BigNumber> &
  BytesTypesMap<string>;

type CommonTypesMap = {
  address: string;
  string: string;
  bool: boolean;
};

type BytesTypesMap<T> = { bytes: T } & {
  [_ in `bytes${number}`]: T;
};

type NumberTypesMap<TSmallNumber, TLargeNumber> = {
  uint: TLargeNumber;
  uint8: TSmallNumber;
  uint16: TSmallNumber;
  uint24: TSmallNumber;
  uint32: TSmallNumber;
  uint40: TSmallNumber;
  uint48: TSmallNumber;
  int: TLargeNumber;
  int8: TSmallNumber;
  int16: TSmallNumber;
  int24: TSmallNumber;
  int32: TSmallNumber;
  int40: TSmallNumber;
  int48: TSmallNumber;
} & {
  [_ in `uint${number}`]: TLargeNumber;
} & {
  [_ in `int${number}`]: TLargeNumber;
};
