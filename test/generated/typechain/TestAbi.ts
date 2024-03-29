/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { EventFragment, FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { OnEvent, TypedEvent, TypedEventFilter, TypedListener } from "./common";

export interface TestAbiInterface extends utils.Interface {
  contractName: "TestAbi";
  functions: {
    "argsNoReturn(uint256,address)": FunctionFragment;
    "argsOneReturn(uint256,address)": FunctionFragment;
    "argsTupleReturn(uint256,address)": FunctionFragment;
    "arrayTypes(uint256[],uint256[][],uint256[2],uint256[2][3],uint256[][2],uint256[2][])": FunctionFragment;
    "bytesTypes(bytes1,bytes2,bytes4,bytes8,bytes16,bytes32)": FunctionFragment;
    "dynamicTypes(string,bytes)": FunctionFragment;
    "intTypes(int256,int8,int16,int32,int64,int128,int256)": FunctionFragment;
    "noArgsNoReturn()": FunctionFragment;
    "overloaded()": FunctionFragment;
    "payableArgsNoReturn(uint256,address)": FunctionFragment;
    "payableArgsOneReturn(uint256,address)": FunctionFragment;
    "payableArgsTupleReturn(uint256,address)": FunctionFragment;
    "payableNoArgsNoReturn()": FunctionFragment;
    "primitiveTypes(address,bool)": FunctionFragment;
    "pureArgsNoReturn(uint256,address)": FunctionFragment;
    "pureArgsOneReturn(uint256,address)": FunctionFragment;
    "pureArgsTupleReturn(uint256,address)": FunctionFragment;
    "pureNoArgsNoReturn()": FunctionFragment;
    "uintTypes(uint256,uint8,uint16,uint32,uint64,uint128,uint256)": FunctionFragment;
    "viewArgsNoReturn(uint256,address)": FunctionFragment;
    "viewArgsOneReturn(uint256,address)": FunctionFragment;
    "viewArgsTupleReturn(uint256,address)": FunctionFragment;
    "viewNoArgsNoReturn()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "argsNoReturn",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "argsOneReturn",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "argsTupleReturn",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "arrayTypes",
    values: [
      BigNumberish[],
      BigNumberish[][],
      [BigNumberish, BigNumberish],
      [
        [BigNumberish, BigNumberish],
        [BigNumberish, BigNumberish],
        [BigNumberish, BigNumberish]
      ],
      [BigNumberish[], BigNumberish[]],
      [BigNumberish, BigNumberish][]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "bytesTypes",
    values: [BytesLike, BytesLike, BytesLike, BytesLike, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "dynamicTypes",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "intTypes",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "noArgsNoReturn",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "overloaded",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "payableArgsNoReturn",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "payableArgsOneReturn",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "payableArgsTupleReturn",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "payableNoArgsNoReturn",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "primitiveTypes",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "pureArgsNoReturn",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "pureArgsOneReturn",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "pureArgsTupleReturn",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "pureNoArgsNoReturn",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "uintTypes",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "viewArgsNoReturn",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "viewArgsOneReturn",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "viewArgsTupleReturn",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "viewNoArgsNoReturn",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "argsNoReturn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "argsOneReturn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "argsTupleReturn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "arrayTypes", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "bytesTypes", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "dynamicTypes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "intTypes", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "noArgsNoReturn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "overloaded", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "payableArgsNoReturn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "payableArgsOneReturn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "payableArgsTupleReturn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "payableNoArgsNoReturn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "primitiveTypes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pureArgsNoReturn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pureArgsOneReturn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pureArgsTupleReturn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pureNoArgsNoReturn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "uintTypes", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "viewArgsNoReturn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "viewArgsOneReturn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "viewArgsTupleReturn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "viewNoArgsNoReturn",
    data: BytesLike
  ): Result;

  events: {
    "Indexed(address,uint256,bool)": EventFragment;
    "NoArgs()": EventFragment;
    "OneArg(address)": EventFragment;
    "TwoArgs(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Indexed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NoArgs"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OneArg"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TwoArgs"): EventFragment;
}

export type IndexedEvent = TypedEvent<
  [string, BigNumber, boolean],
  { a: string; u: BigNumber; b: boolean }
>;

export type IndexedEventFilter = TypedEventFilter<IndexedEvent>;

export type NoArgsEvent = TypedEvent<[], {}>;

export type NoArgsEventFilter = TypedEventFilter<NoArgsEvent>;

export type OneArgEvent = TypedEvent<[string], { a: string }>;

export type OneArgEventFilter = TypedEventFilter<OneArgEvent>;

export type TwoArgsEvent = TypedEvent<
  [string, BigNumber],
  { a: string; u: BigNumber }
>;

export type TwoArgsEventFilter = TypedEventFilter<TwoArgsEvent>;

export interface TestAbi extends BaseContract {
  contractName: "TestAbi";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TestAbiInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    argsNoReturn(
      a: BigNumberish,
      b: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    argsOneReturn(
      a: BigNumberish,
      b: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    argsTupleReturn(
      a: BigNumberish,
      b: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    arrayTypes(
      arg0: BigNumberish[],
      arg1: BigNumberish[][],
      arg2: [BigNumberish, BigNumberish],
      arg3: [
        [BigNumberish, BigNumberish],
        [BigNumberish, BigNumberish],
        [BigNumberish, BigNumberish]
      ],
      arg4: [BigNumberish[], BigNumberish[]],
      arg5: [BigNumberish, BigNumberish][],
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber[],
        BigNumber[][],
        [BigNumber, BigNumber],
        [
          [BigNumber, BigNumber],
          [BigNumber, BigNumber],
          [BigNumber, BigNumber]
        ],
        [BigNumber[], BigNumber[]],
        [BigNumber, BigNumber][]
      ]
    >;

    bytesTypes(
      arg0: BytesLike,
      arg1: BytesLike,
      arg2: BytesLike,
      arg3: BytesLike,
      arg4: BytesLike,
      arg5: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string, string, string, string, string, string]>;

    dynamicTypes(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string, string]>;

    intTypes(
      arg0: BigNumberish,
      arg1: BigNumberish,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BigNumberish,
      arg5: BigNumberish,
      arg6: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, number, number, number, BigNumber, BigNumber, BigNumber]
    >;

    noArgsNoReturn(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "overloaded()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "overloaded(uint256)"(
      a: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "overloaded(uint256,address)"(
      a: BigNumberish,
      b: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    payableArgsNoReturn(
      a: BigNumberish,
      b: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    payableArgsOneReturn(
      a: BigNumberish,
      b: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    payableArgsTupleReturn(
      a: BigNumberish,
      b: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    payableNoArgsNoReturn(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    primitiveTypes(
      arg0: string,
      arg1: boolean,
      overrides?: CallOverrides
    ): Promise<[string, boolean]>;

    pureArgsNoReturn(
      a: BigNumberish,
      b: string,
      overrides?: CallOverrides
    ): Promise<[void]>;

    pureArgsOneReturn(
      a: BigNumberish,
      b: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    pureArgsTupleReturn(
      a: BigNumberish,
      b: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, string]>;

    pureNoArgsNoReturn(overrides?: CallOverrides): Promise<[void]>;

    uintTypes(
      arg0: BigNumberish,
      arg1: BigNumberish,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BigNumberish,
      arg5: BigNumberish,
      arg6: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, number, number, number, BigNumber, BigNumber, BigNumber]
    >;

    viewArgsNoReturn(
      a: BigNumberish,
      b: string,
      overrides?: CallOverrides
    ): Promise<[void]>;

    viewArgsOneReturn(
      a: BigNumberish,
      b: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    viewArgsTupleReturn(
      a: BigNumberish,
      b: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, string]>;

    viewNoArgsNoReturn(overrides?: CallOverrides): Promise<[void]>;
  };

  argsNoReturn(
    a: BigNumberish,
    b: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  argsOneReturn(
    a: BigNumberish,
    b: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  argsTupleReturn(
    a: BigNumberish,
    b: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  arrayTypes(
    arg0: BigNumberish[],
    arg1: BigNumberish[][],
    arg2: [BigNumberish, BigNumberish],
    arg3: [
      [BigNumberish, BigNumberish],
      [BigNumberish, BigNumberish],
      [BigNumberish, BigNumberish]
    ],
    arg4: [BigNumberish[], BigNumberish[]],
    arg5: [BigNumberish, BigNumberish][],
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber[],
      BigNumber[][],
      [BigNumber, BigNumber],
      [[BigNumber, BigNumber], [BigNumber, BigNumber], [BigNumber, BigNumber]],
      [BigNumber[], BigNumber[]],
      [BigNumber, BigNumber][]
    ]
  >;

  bytesTypes(
    arg0: BytesLike,
    arg1: BytesLike,
    arg2: BytesLike,
    arg3: BytesLike,
    arg4: BytesLike,
    arg5: BytesLike,
    overrides?: CallOverrides
  ): Promise<[string, string, string, string, string, string]>;

  dynamicTypes(
    arg0: string,
    arg1: BytesLike,
    overrides?: CallOverrides
  ): Promise<[string, string]>;

  intTypes(
    arg0: BigNumberish,
    arg1: BigNumberish,
    arg2: BigNumberish,
    arg3: BigNumberish,
    arg4: BigNumberish,
    arg5: BigNumberish,
    arg6: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, number, number, number, BigNumber, BigNumber, BigNumber]
  >;

  noArgsNoReturn(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "overloaded()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "overloaded(uint256)"(
    a: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "overloaded(uint256,address)"(
    a: BigNumberish,
    b: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  payableArgsNoReturn(
    a: BigNumberish,
    b: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  payableArgsOneReturn(
    a: BigNumberish,
    b: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  payableArgsTupleReturn(
    a: BigNumberish,
    b: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  payableNoArgsNoReturn(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  primitiveTypes(
    arg0: string,
    arg1: boolean,
    overrides?: CallOverrides
  ): Promise<[string, boolean]>;

  pureArgsNoReturn(
    a: BigNumberish,
    b: string,
    overrides?: CallOverrides
  ): Promise<void>;

  pureArgsOneReturn(
    a: BigNumberish,
    b: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  pureArgsTupleReturn(
    a: BigNumberish,
    b: string,
    overrides?: CallOverrides
  ): Promise<[BigNumber, string]>;

  pureNoArgsNoReturn(overrides?: CallOverrides): Promise<void>;

  uintTypes(
    arg0: BigNumberish,
    arg1: BigNumberish,
    arg2: BigNumberish,
    arg3: BigNumberish,
    arg4: BigNumberish,
    arg5: BigNumberish,
    arg6: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, number, number, number, BigNumber, BigNumber, BigNumber]
  >;

  viewArgsNoReturn(
    a: BigNumberish,
    b: string,
    overrides?: CallOverrides
  ): Promise<void>;

  viewArgsOneReturn(
    a: BigNumberish,
    b: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  viewArgsTupleReturn(
    a: BigNumberish,
    b: string,
    overrides?: CallOverrides
  ): Promise<[BigNumber, string]>;

  viewNoArgsNoReturn(overrides?: CallOverrides): Promise<void>;

  callStatic: {
    argsNoReturn(
      a: BigNumberish,
      b: string,
      overrides?: CallOverrides
    ): Promise<void>;

    argsOneReturn(
      a: BigNumberish,
      b: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    argsTupleReturn(
      a: BigNumberish,
      b: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, string]>;

    arrayTypes(
      arg0: BigNumberish[],
      arg1: BigNumberish[][],
      arg2: [BigNumberish, BigNumberish],
      arg3: [
        [BigNumberish, BigNumberish],
        [BigNumberish, BigNumberish],
        [BigNumberish, BigNumberish]
      ],
      arg4: [BigNumberish[], BigNumberish[]],
      arg5: [BigNumberish, BigNumberish][],
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber[],
        BigNumber[][],
        [BigNumber, BigNumber],
        [
          [BigNumber, BigNumber],
          [BigNumber, BigNumber],
          [BigNumber, BigNumber]
        ],
        [BigNumber[], BigNumber[]],
        [BigNumber, BigNumber][]
      ]
    >;

    bytesTypes(
      arg0: BytesLike,
      arg1: BytesLike,
      arg2: BytesLike,
      arg3: BytesLike,
      arg4: BytesLike,
      arg5: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string, string, string, string, string, string]>;

    dynamicTypes(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string, string]>;

    intTypes(
      arg0: BigNumberish,
      arg1: BigNumberish,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BigNumberish,
      arg5: BigNumberish,
      arg6: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, number, number, number, BigNumber, BigNumber, BigNumber]
    >;

    noArgsNoReturn(overrides?: CallOverrides): Promise<void>;

    "overloaded()"(overrides?: CallOverrides): Promise<void>;

    "overloaded(uint256)"(
      a: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "overloaded(uint256,address)"(
      a: BigNumberish,
      b: string,
      overrides?: CallOverrides
    ): Promise<void>;

    payableArgsNoReturn(
      a: BigNumberish,
      b: string,
      overrides?: CallOverrides
    ): Promise<void>;

    payableArgsOneReturn(
      a: BigNumberish,
      b: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    payableArgsTupleReturn(
      a: BigNumberish,
      b: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, string]>;

    payableNoArgsNoReturn(overrides?: CallOverrides): Promise<void>;

    primitiveTypes(
      arg0: string,
      arg1: boolean,
      overrides?: CallOverrides
    ): Promise<[string, boolean]>;

    pureArgsNoReturn(
      a: BigNumberish,
      b: string,
      overrides?: CallOverrides
    ): Promise<void>;

    pureArgsOneReturn(
      a: BigNumberish,
      b: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pureArgsTupleReturn(
      a: BigNumberish,
      b: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, string]>;

    pureNoArgsNoReturn(overrides?: CallOverrides): Promise<void>;

    uintTypes(
      arg0: BigNumberish,
      arg1: BigNumberish,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BigNumberish,
      arg5: BigNumberish,
      arg6: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, number, number, number, BigNumber, BigNumber, BigNumber]
    >;

    viewArgsNoReturn(
      a: BigNumberish,
      b: string,
      overrides?: CallOverrides
    ): Promise<void>;

    viewArgsOneReturn(
      a: BigNumberish,
      b: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    viewArgsTupleReturn(
      a: BigNumberish,
      b: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, string]>;

    viewNoArgsNoReturn(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "Indexed(address,uint256,bool)"(
      a?: string | null,
      u?: null,
      b?: boolean | null
    ): IndexedEventFilter;
    Indexed(
      a?: string | null,
      u?: null,
      b?: boolean | null
    ): IndexedEventFilter;

    "NoArgs()"(): NoArgsEventFilter;
    NoArgs(): NoArgsEventFilter;

    "OneArg(address)"(a?: null): OneArgEventFilter;
    OneArg(a?: null): OneArgEventFilter;

    "TwoArgs(address,uint256)"(a?: null, u?: null): TwoArgsEventFilter;
    TwoArgs(a?: null, u?: null): TwoArgsEventFilter;
  };

  estimateGas: {
    argsNoReturn(
      a: BigNumberish,
      b: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    argsOneReturn(
      a: BigNumberish,
      b: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    argsTupleReturn(
      a: BigNumberish,
      b: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    arrayTypes(
      arg0: BigNumberish[],
      arg1: BigNumberish[][],
      arg2: [BigNumberish, BigNumberish],
      arg3: [
        [BigNumberish, BigNumberish],
        [BigNumberish, BigNumberish],
        [BigNumberish, BigNumberish]
      ],
      arg4: [BigNumberish[], BigNumberish[]],
      arg5: [BigNumberish, BigNumberish][],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    bytesTypes(
      arg0: BytesLike,
      arg1: BytesLike,
      arg2: BytesLike,
      arg3: BytesLike,
      arg4: BytesLike,
      arg5: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    dynamicTypes(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    intTypes(
      arg0: BigNumberish,
      arg1: BigNumberish,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BigNumberish,
      arg5: BigNumberish,
      arg6: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    noArgsNoReturn(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "overloaded()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "overloaded(uint256)"(
      a: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "overloaded(uint256,address)"(
      a: BigNumberish,
      b: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    payableArgsNoReturn(
      a: BigNumberish,
      b: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    payableArgsOneReturn(
      a: BigNumberish,
      b: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    payableArgsTupleReturn(
      a: BigNumberish,
      b: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    payableNoArgsNoReturn(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    primitiveTypes(
      arg0: string,
      arg1: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pureArgsNoReturn(
      a: BigNumberish,
      b: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pureArgsOneReturn(
      a: BigNumberish,
      b: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pureArgsTupleReturn(
      a: BigNumberish,
      b: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pureNoArgsNoReturn(overrides?: CallOverrides): Promise<BigNumber>;

    uintTypes(
      arg0: BigNumberish,
      arg1: BigNumberish,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BigNumberish,
      arg5: BigNumberish,
      arg6: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    viewArgsNoReturn(
      a: BigNumberish,
      b: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    viewArgsOneReturn(
      a: BigNumberish,
      b: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    viewArgsTupleReturn(
      a: BigNumberish,
      b: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    viewNoArgsNoReturn(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    argsNoReturn(
      a: BigNumberish,
      b: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    argsOneReturn(
      a: BigNumberish,
      b: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    argsTupleReturn(
      a: BigNumberish,
      b: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    arrayTypes(
      arg0: BigNumberish[],
      arg1: BigNumberish[][],
      arg2: [BigNumberish, BigNumberish],
      arg3: [
        [BigNumberish, BigNumberish],
        [BigNumberish, BigNumberish],
        [BigNumberish, BigNumberish]
      ],
      arg4: [BigNumberish[], BigNumberish[]],
      arg5: [BigNumberish, BigNumberish][],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    bytesTypes(
      arg0: BytesLike,
      arg1: BytesLike,
      arg2: BytesLike,
      arg3: BytesLike,
      arg4: BytesLike,
      arg5: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    dynamicTypes(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    intTypes(
      arg0: BigNumberish,
      arg1: BigNumberish,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BigNumberish,
      arg5: BigNumberish,
      arg6: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    noArgsNoReturn(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "overloaded()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "overloaded(uint256)"(
      a: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "overloaded(uint256,address)"(
      a: BigNumberish,
      b: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    payableArgsNoReturn(
      a: BigNumberish,
      b: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    payableArgsOneReturn(
      a: BigNumberish,
      b: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    payableArgsTupleReturn(
      a: BigNumberish,
      b: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    payableNoArgsNoReturn(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    primitiveTypes(
      arg0: string,
      arg1: boolean,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pureArgsNoReturn(
      a: BigNumberish,
      b: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pureArgsOneReturn(
      a: BigNumberish,
      b: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pureArgsTupleReturn(
      a: BigNumberish,
      b: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pureNoArgsNoReturn(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    uintTypes(
      arg0: BigNumberish,
      arg1: BigNumberish,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BigNumberish,
      arg5: BigNumberish,
      arg6: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    viewArgsNoReturn(
      a: BigNumberish,
      b: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    viewArgsOneReturn(
      a: BigNumberish,
      b: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    viewArgsTupleReturn(
      a: BigNumberish,
      b: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    viewNoArgsNoReturn(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
