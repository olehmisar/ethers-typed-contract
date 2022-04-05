import { ethers } from "ethers";
import {
  FixedLengthArray,
  ParseSolidityArrayBrackets,
  StringToNumber,
} from "../utils";

export type AbiVarType = string;
export type AbiInputTypeToTypescriptType<T extends AbiVarType> =
  AbiVarTypeToTypescriptType<T, InputTypesMap>;
export type AbiOutputTypeToTypescriptType<T extends AbiVarType> =
  AbiVarTypeToTypescriptType<T, OutputTypesMap>;

type AbiVarTypeToTypescriptType<
  T extends AbiVarType,
  TypesMap
> = T extends keyof TypesMap
  ? TypesMap[T]
  : ParseSolidityArrayBrackets<T> extends [infer TElement, infer N]
  ? TElement extends string
    ? N extends string
      ? N extends ""
        ? AbiVarTypeToTypescriptType<TElement, TypesMap>[]
        : StringToNumber<N> extends number
        ? FixedLengthArray<
            AbiVarTypeToTypescriptType<TElement, TypesMap>,
            StringToNumber<N>
          >
        : unknown
      : unknown
    : unknown
  : unknown;

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
