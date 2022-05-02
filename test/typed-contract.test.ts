import { ethers } from "ethers";
import { StrictOmit } from "ts-essentials";
import TypedContract from "../src";
import { TestAbi as TypechainTestAbi } from "./generated/typechain";
import { assertType, Diff, Equals } from "./test-utils";
import TestAbi from "./TestAbi";

const typedContract = new TypedContract(ethers.constants.AddressZero, TestAbi);

// TODO: test all keys
type NotTestedKeys =
  | "interface"
  | "connect"
  | "attach"
  | "deployed"
  // Events
  | "on"
  | "once"
  | "off"
  | "removeListener"
  | "listeners"
  | "removeAllListeners";
type TypechainTestAbiWoTestedKeys = StrictOmit<TypechainTestAbi, NotTestedKeys>;
type TypedContractWoTestedKeys = StrictOmit<
  typeof typedContract,
  NotTestedKeys
>;
// main assertion
assertType<Equals<TypedContractWoTestedKeys, TypechainTestAbiWoTestedKeys>>();
// helpful to see which types are incompatible
type _diff = Diff<TypedContractWoTestedKeys, TypechainTestAbiWoTestedKeys>;
const typechainContract: TypechainTestAbiWoTestedKeys = null as any;
const _0: TypedContractWoTestedKeys = typechainContract;
const _1: TypechainTestAbiWoTestedKeys = typedContract;

/////////////
// methods //
/////////////
assertType<
  Equals<
    typeof typedContract["argsTupleReturn"],
    TypechainTestAbi["argsTupleReturn"]
  >
>();
assertType<
  Equals<typeof typedContract["argsNoReturn"], TypechainTestAbi["argsNoReturn"]>
>();
assertType<
  Equals<
    typeof typedContract["payableArgsTupleReturn"],
    TypechainTestAbi["payableArgsTupleReturn"]
  >
>();
assertType<
  Equals<
    typeof typedContract["viewArgsTupleReturn"],
    TypechainTestAbi["viewArgsTupleReturn"]
  >
>();
assertType<
  Equals<
    typeof typedContract["pureArgsTupleReturn"],
    TypechainTestAbi["pureArgsTupleReturn"]
  >
>();
assertType<
  Equals<
    typeof typedContract["primitiveTypes"],
    TypechainTestAbi["primitiveTypes"]
  >
>();
assertType<
  Equals<typeof typedContract["uintTypes"], TypechainTestAbi["uintTypes"]>
>();
assertType<
  Equals<typeof typedContract["intTypes"], TypechainTestAbi["intTypes"]>
>();
assertType<
  Equals<typeof typedContract["bytesTypes"], TypechainTestAbi["bytesTypes"]>
>();
assertType<
  Equals<typeof typedContract["dynamicTypes"], TypechainTestAbi["dynamicTypes"]>
>();
assertType<
  Equals<typeof typedContract["arrayTypes"], TypechainTestAbi["arrayTypes"]>
>();
assertType<
  Equals<typeof typedContract["structTypes"], TypechainTestAbi["structTypes"]>
>();

///////////////
// functions //
///////////////
assertType<
  Equals<typeof typedContract["functions"], TypechainTestAbi["functions"]>
>();
assertType<
  Equals<
    typeof typedContract["functions"]["argsTupleReturn"],
    TypechainTestAbi["functions"]["argsTupleReturn"]
  >
>();
assertType<
  Equals<
    typeof typedContract["functions"]["argsNoReturn"],
    TypechainTestAbi["functions"]["argsNoReturn"]
  >
>();
assertType<
  Equals<
    typeof typedContract["functions"]["payableArgsTupleReturn"],
    TypechainTestAbi["functions"]["payableArgsTupleReturn"]
  >
>();
assertType<
  Equals<
    typeof typedContract["functions"]["viewArgsTupleReturn"],
    TypechainTestAbi["functions"]["viewArgsTupleReturn"]
  >
>();
assertType<
  Equals<
    typeof typedContract["functions"]["pureArgsTupleReturn"],
    TypechainTestAbi["functions"]["pureArgsTupleReturn"]
  >
>();
assertType<
  Equals<
    typeof typedContract["functions"]["overloaded()"],
    TypechainTestAbi["functions"]["overloaded()"]
  >
>();
assertType<
  Equals<
    typeof typedContract["functions"]["overloaded(uint256)"],
    TypechainTestAbi["functions"]["overloaded(uint256)"]
  >
>();
assertType<
  Equals<
    typeof typedContract["functions"]["overloaded(uint256,address)"],
    TypechainTestAbi["functions"]["overloaded(uint256,address)"]
  >
>();
assertType<
  Equals<
    typeof typedContract["functions"]["primitiveTypes"],
    TypechainTestAbi["functions"]["primitiveTypes"]
  >
>();
assertType<
  Equals<
    typeof typedContract["functions"]["uintTypes"],
    TypechainTestAbi["functions"]["uintTypes"]
  >
>();
assertType<
  Equals<
    typeof typedContract["functions"]["intTypes"],
    TypechainTestAbi["functions"]["intTypes"]
  >
>();
assertType<
  Equals<
    typeof typedContract["functions"]["bytesTypes"],
    TypechainTestAbi["functions"]["bytesTypes"]
  >
>();
assertType<
  Equals<
    typeof typedContract["functions"]["dynamicTypes"],
    TypechainTestAbi["functions"]["dynamicTypes"]
  >
>();
assertType<
  Equals<
    typeof typedContract["functions"]["arrayTypes"],
    TypechainTestAbi["functions"]["arrayTypes"]
  >
>();
assertType<
  Equals<
    typeof typedContract["functions"]["structTypes"],
    TypechainTestAbi["functions"]["structTypes"]
  >
>();

////////////////
// callStatic //
////////////////
assertType<
  Equals<typeof typedContract["callStatic"], TypechainTestAbi["callStatic"]>
>();
assertType<
  Equals<
    typeof typedContract["callStatic"]["argsTupleReturn"],
    TypechainTestAbi["callStatic"]["argsTupleReturn"]
  >
>();
assertType<
  Equals<
    typeof typedContract["callStatic"]["argsNoReturn"],
    TypechainTestAbi["callStatic"]["argsNoReturn"]
  >
>();
assertType<
  Equals<
    typeof typedContract["callStatic"]["payableArgsTupleReturn"],
    TypechainTestAbi["callStatic"]["payableArgsTupleReturn"]
  >
>();
assertType<
  Equals<
    typeof typedContract["callStatic"]["viewArgsTupleReturn"],
    TypechainTestAbi["callStatic"]["viewArgsTupleReturn"]
  >
>();
assertType<
  Equals<
    typeof typedContract["callStatic"]["pureArgsTupleReturn"],
    TypechainTestAbi["callStatic"]["pureArgsTupleReturn"]
  >
>();
assertType<
  Equals<
    typeof typedContract["callStatic"]["overloaded()"],
    TypechainTestAbi["callStatic"]["overloaded()"]
  >
>();
assertType<
  Equals<
    typeof typedContract["callStatic"]["overloaded(uint256)"],
    TypechainTestAbi["callStatic"]["overloaded(uint256)"]
  >
>();
assertType<
  Equals<
    typeof typedContract["callStatic"]["overloaded(uint256,address)"],
    TypechainTestAbi["callStatic"]["overloaded(uint256,address)"]
  >
>();
assertType<
  Equals<
    typeof typedContract["callStatic"]["primitiveTypes"],
    TypechainTestAbi["callStatic"]["primitiveTypes"]
  >
>();
assertType<
  Equals<
    typeof typedContract["callStatic"]["uintTypes"],
    TypechainTestAbi["callStatic"]["uintTypes"]
  >
>();
assertType<
  Equals<
    typeof typedContract["callStatic"]["intTypes"],
    TypechainTestAbi["callStatic"]["intTypes"]
  >
>();
assertType<
  Equals<
    typeof typedContract["callStatic"]["bytesTypes"],
    TypechainTestAbi["callStatic"]["bytesTypes"]
  >
>();
assertType<
  Equals<
    typeof typedContract["callStatic"]["dynamicTypes"],
    TypechainTestAbi["callStatic"]["dynamicTypes"]
  >
>();
assertType<
  Equals<
    typeof typedContract["callStatic"]["arrayTypes"],
    TypechainTestAbi["callStatic"]["arrayTypes"]
  >
>();
assertType<
  Equals<
    typeof typedContract["callStatic"]["structTypes"],
    TypechainTestAbi["callStatic"]["structTypes"]
  >
>();

/////////////////
// estimateGas //
/////////////////
assertType<
  Equals<typeof typedContract["estimateGas"], TypechainTestAbi["estimateGas"]>
>();
assertType<
  Equals<
    typeof typedContract["estimateGas"]["argsTupleReturn"],
    TypechainTestAbi["estimateGas"]["argsTupleReturn"]
  >
>();
assertType<
  Equals<
    typeof typedContract["estimateGas"]["argsNoReturn"],
    TypechainTestAbi["estimateGas"]["argsNoReturn"]
  >
>();
assertType<
  Equals<
    typeof typedContract["estimateGas"]["payableArgsTupleReturn"],
    TypechainTestAbi["estimateGas"]["payableArgsTupleReturn"]
  >
>();
assertType<
  Equals<
    typeof typedContract["estimateGas"]["viewArgsTupleReturn"],
    TypechainTestAbi["estimateGas"]["viewArgsTupleReturn"]
  >
>();
assertType<
  Equals<
    typeof typedContract["estimateGas"]["pureArgsTupleReturn"],
    TypechainTestAbi["estimateGas"]["pureArgsTupleReturn"]
  >
>();
assertType<
  Equals<
    typeof typedContract["estimateGas"]["overloaded()"],
    TypechainTestAbi["estimateGas"]["overloaded()"]
  >
>();
assertType<
  Equals<
    typeof typedContract["estimateGas"]["overloaded(uint256)"],
    TypechainTestAbi["estimateGas"]["overloaded(uint256)"]
  >
>();
assertType<
  Equals<
    typeof typedContract["estimateGas"]["overloaded(uint256,address)"],
    TypechainTestAbi["estimateGas"]["overloaded(uint256,address)"]
  >
>();
assertType<
  Equals<
    typeof typedContract["estimateGas"]["primitiveTypes"],
    TypechainTestAbi["estimateGas"]["primitiveTypes"]
  >
>();
assertType<
  Equals<
    typeof typedContract["estimateGas"]["uintTypes"],
    TypechainTestAbi["estimateGas"]["uintTypes"]
  >
>();
assertType<
  Equals<
    typeof typedContract["estimateGas"]["intTypes"],
    TypechainTestAbi["estimateGas"]["intTypes"]
  >
>();
assertType<
  Equals<
    typeof typedContract["estimateGas"]["bytesTypes"],
    TypechainTestAbi["estimateGas"]["bytesTypes"]
  >
>();
assertType<
  Equals<
    typeof typedContract["estimateGas"]["dynamicTypes"],
    TypechainTestAbi["estimateGas"]["dynamicTypes"]
  >
>();
assertType<
  Equals<
    typeof typedContract["estimateGas"]["arrayTypes"],
    TypechainTestAbi["estimateGas"]["arrayTypes"]
  >
>();
assertType<
  Equals<
    typeof typedContract["estimateGas"]["structTypes"],
    TypechainTestAbi["estimateGas"]["structTypes"]
  >
>();

/////////////////////////
// populateTransaction //
/////////////////////////
assertType<
  Equals<
    typeof typedContract["populateTransaction"],
    TypechainTestAbi["populateTransaction"]
  >
>();
assertType<
  Equals<
    typeof typedContract["populateTransaction"]["argsTupleReturn"],
    TypechainTestAbi["populateTransaction"]["argsTupleReturn"]
  >
>();
assertType<
  Equals<
    typeof typedContract["populateTransaction"]["argsNoReturn"],
    TypechainTestAbi["populateTransaction"]["argsNoReturn"]
  >
>();
assertType<
  Equals<
    typeof typedContract["populateTransaction"]["payableArgsTupleReturn"],
    TypechainTestAbi["populateTransaction"]["payableArgsTupleReturn"]
  >
>();
assertType<
  Equals<
    typeof typedContract["populateTransaction"]["viewArgsTupleReturn"],
    TypechainTestAbi["populateTransaction"]["viewArgsTupleReturn"]
  >
>();
assertType<
  Equals<
    typeof typedContract["populateTransaction"]["pureArgsTupleReturn"],
    TypechainTestAbi["populateTransaction"]["pureArgsTupleReturn"]
  >
>();
assertType<
  Equals<
    typeof typedContract["populateTransaction"]["overloaded()"],
    TypechainTestAbi["populateTransaction"]["overloaded()"]
  >
>();
assertType<
  Equals<
    typeof typedContract["populateTransaction"]["overloaded(uint256)"],
    TypechainTestAbi["populateTransaction"]["overloaded(uint256)"]
  >
>();
assertType<
  Equals<
    typeof typedContract["populateTransaction"]["overloaded(uint256,address)"],
    TypechainTestAbi["populateTransaction"]["overloaded(uint256,address)"]
  >
>();
assertType<
  Equals<
    typeof typedContract["populateTransaction"]["primitiveTypes"],
    TypechainTestAbi["populateTransaction"]["primitiveTypes"]
  >
>();
assertType<
  Equals<
    typeof typedContract["populateTransaction"]["uintTypes"],
    TypechainTestAbi["populateTransaction"]["uintTypes"]
  >
>();
assertType<
  Equals<
    typeof typedContract["populateTransaction"]["intTypes"],
    TypechainTestAbi["populateTransaction"]["intTypes"]
  >
>();
assertType<
  Equals<
    typeof typedContract["populateTransaction"]["bytesTypes"],
    TypechainTestAbi["populateTransaction"]["bytesTypes"]
  >
>();
assertType<
  Equals<
    typeof typedContract["populateTransaction"]["dynamicTypes"],
    TypechainTestAbi["populateTransaction"]["dynamicTypes"]
  >
>();
assertType<
  Equals<
    typeof typedContract["populateTransaction"]["arrayTypes"],
    TypechainTestAbi["populateTransaction"]["arrayTypes"]
  >
>();
assertType<
  Equals<
    typeof typedContract["populateTransaction"]["structTypes"],
    TypechainTestAbi["populateTransaction"]["structTypes"]
  >
>();

/////////////
// filters //
/////////////
assertType<
  Equals<typeof typedContract["filters"], TypechainTestAbi["filters"]>
>();
assertType<
  Equals<
    typeof typedContract["filters"]["Indexed"],
    TypechainTestAbi["filters"]["Indexed"]
  >
>();
assertType<
  Equals<
    typeof typedContract["filters"]["NoArgs"],
    TypechainTestAbi["filters"]["NoArgs"]
  >
>();
assertType<
  Equals<
    typeof typedContract["filters"]["OneArg"],
    TypechainTestAbi["filters"]["OneArg"]
  >
>();
assertType<
  Equals<
    typeof typedContract["filters"]["TwoArgs"],
    TypechainTestAbi["filters"]["TwoArgs"]
  >
>();
// full signature
assertType<
  Equals<
    typeof typedContract["filters"]["Indexed(address,uint256,bool)"],
    TypechainTestAbi["filters"]["Indexed(address,uint256,bool)"]
  >
>();
assertType<
  Equals<
    typeof typedContract["filters"]["NoArgs()"],
    TypechainTestAbi["filters"]["NoArgs()"]
  >
>();
assertType<
  Equals<
    typeof typedContract["filters"]["OneArg(address)"],
    TypechainTestAbi["filters"]["OneArg(address)"]
  >
>();
assertType<
  Equals<
    typeof typedContract["filters"]["TwoArgs(address,uint256)"],
    TypechainTestAbi["filters"]["TwoArgs(address,uint256)"]
  >
>();

///////////////////////////////
// queryFilter, on, off, etc //
///////////////////////////////
assertType<
  Equals<typeof typedContract["queryFilter"], TypechainTestAbi["queryFilter"]>
>();
