import { ethers } from "ethers";
import { DeepReadonly, Merge, UnionToIntersection } from "ts-essentials";
import { AbiToContract } from ".";
import { ExpandObject } from "../utils";
import { AbiItem, AbiItemToSignature } from "./common";
import {
  AbiInputTypeToTypescriptType,
  AbiOutputTypeToTypescriptType,
  AbiVarType,
} from "./types";

export type AbiEventVar = DeepReadonly<{
  name: string;
  type: AbiVarType;
  indexed: boolean;
}>;
export type AbiItemEvent = DeepReadonly<{
  type: "event";
  name: string;
  inputs: AbiEventVar[];
}>;

export interface TypedEvent<
  TArgsArray extends Array<any> = any,
  TArgsObject = any
> extends ethers.Event {
  args: TArgsArray & TArgsObject;
}

export interface TypedEventFilter<_TEvent extends TypedEvent>
  extends ethers.EventFilter {}

export interface TypedListener<TEvent extends TypedEvent> {
  (...listenerArg: [...__TypechainArgsArray<TEvent>, TEvent]): void;
}

type __TypechainArgsArray<T> = T extends TypedEvent<infer U> ? U : never;

export interface OnEvent<TRes> {
  <TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>,
    listener: TypedListener<TEvent>
  ): TRes;
  (eventName: string, listener: ethers.providers.Listener): TRes;
}

export type AbiItemsToEventMethods<T extends readonly AbiItem[]> = {
  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<TEvent[]>;
  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<ethers.providers.Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): AbiToContract<T>;
  removeAllListeners(eventName?: string): AbiToContract<T>;
  off: OnEvent<AbiToContract<T>>;
  on: OnEvent<AbiToContract<T>>;
  once: OnEvent<AbiToContract<T>>;
  removeListener: OnEvent<AbiToContract<T>>;
};

type AbiEventInputsToParameters<T extends readonly AbiEventVar[]> = [
  ...{
    [K in keyof T]?: T[K] extends AbiEventVar
      ? T[K]["indexed"] extends true
        ? AbiInputTypeToTypescriptType<T[K]["type"]> | null | undefined
        : null | undefined
      : unknown;
  }
];
type AbiEventInputsToTypedEventArray<T extends readonly AbiEventVar[]> = [
  ...{
    [K in keyof T]: T[K] extends AbiEventVar
      ? AbiOutputTypeToTypescriptType<T[K]["type"]>
      : never;
  }
];

type AbiEventInputsToTypedEventObject<T extends readonly AbiEventVar[]> =
  ExpandObject<
    UnionToIntersection<
      {
        [K in keyof T]: T[K] extends AbiEventVar
          ? {
              [key in T[K]["name"]]: AbiOutputTypeToTypescriptType<
                T[K]["type"]
              >;
            }
          : unknown;
      }[number]
    >
  >;

type AbiItemToFilterFunction<T extends AbiItemEvent> = (
  ...args: [...AbiEventInputsToParameters<T["inputs"]>]
) => TypedEventFilter<
  TypedEvent<
    AbiEventInputsToTypedEventArray<T["inputs"]>,
    AbiEventInputsToTypedEventObject<T["inputs"]>
  >
>;

type AbiItemToFilter<T extends AbiItemEvent> = Merge<
  {
    [key in T["name"]]: AbiItemToFilterFunction<T>;
  },
  {
    [key in T["name"] as AbiItemToSignature<T>]: AbiItemToFilterFunction<T>;
  }
>;

/**
 * Transform an array of `AbiItem`s to filters on `ethers.Contract.filters`.
 */
export type AbiItemsToFilters<T extends readonly AbiItem[]> = ExpandObject<
  UnionToIntersection<
    {
      [K in keyof T]: T[K] extends AbiItemEvent ? AbiItemToFilter<T[K]> : never;
    }[number]
  >
>;
