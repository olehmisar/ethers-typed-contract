import { ethers } from "ethers";
import { DeepReadonly, MergeN } from "ts-essentials";
import { ExpandObject } from "../utils";
import {
  AbiItemEvent,
  AbiItemsToEventMethods,
  AbiItemsToFilters,
} from "./event";
import {
  AbiItemFunction,
  AbiItemsToCallStatic,
  AbiItemsToEstimateGas,
  AbiItemsToFunctions,
  AbiItemsToMethods,
  AbiItemsToPopulateTransaction,
} from "./function";

// Main Converter
export type AbiItem = DeepReadonly<AbiItemFunction | AbiItemEvent>;
export type AbiToContract<T extends readonly AbiItem[]> = ExpandObject<
  MergeN<
    [
      AbiItemsToMethods<T>,
      ethers.BaseContract,
      {
        connect(
          signerOrProvider: ethers.Signer | ethers.providers.Provider | string
        ): AbiToContract<T>;
        attach(addressOrName: string): AbiToContract<T>;
        deployed(): Promise<AbiToContract<T>>;
        functions: AbiItemsToFunctions<T>;
        callStatic: AbiItemsToCallStatic<T>;
        estimateGas: AbiItemsToEstimateGas<T>;
        populateTransaction: AbiItemsToPopulateTransaction<T>;
        filters: AbiItemsToFilters<T>;
      },
      AbiItemsToEventMethods<T>
    ]
  >
>;
