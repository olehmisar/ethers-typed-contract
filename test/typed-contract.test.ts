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
type TypechainTestAbiWoTestedKeys = StrictOmit<
  TypechainTestAbi,
  "contractName" | NotTestedKeys
>;
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
