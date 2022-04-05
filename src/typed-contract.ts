import { ethers } from "ethers";
import type { AbiToContract } from "./converter";
import type { AbiItem } from "./converter/common";

export const TypedContract: new <T extends readonly AbiItem[]>(
  addressOrName: string,
  contractInterface: T,
  signerOrProvider?: ethers.Signer | ethers.providers.Provider
) => AbiToContract<T> = ethers.Contract as any;
