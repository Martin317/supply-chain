/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface SupplyChainInterface extends ethers.utils.Interface {
  functions: {
    "addItem(string,uint256)": FunctionFragment;
    "buyItem(uint256)": FunctionFragment;
    "fetchItem(uint256)": FunctionFragment;
    "items(uint256)": FunctionFragment;
    "receiveItem(uint256)": FunctionFragment;
    "shipItem(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addItem",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "buyItem",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "fetchItem",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "items", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "receiveItem",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "shipItem",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "addItem", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "buyItem", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "fetchItem", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "items", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "receiveItem",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "shipItem", data: BytesLike): Result;

  events: {
    "ForSale(uint256)": EventFragment;
    "Received(uint256)": EventFragment;
    "Shipped(uint256)": EventFragment;
    "Sold(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ForSale"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Received"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Shipped"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Sold"): EventFragment;
}

export type ForSaleEvent = TypedEvent<[BigNumber] & { sku: BigNumber }>;

export type ReceivedEvent = TypedEvent<[BigNumber] & { sku: BigNumber }>;

export type ShippedEvent = TypedEvent<[BigNumber] & { sku: BigNumber }>;

export type SoldEvent = TypedEvent<[BigNumber] & { sku: BigNumber }>;

export class SupplyChain extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: SupplyChainInterface;

  functions: {
    addItem(
      _name: string,
      _price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    buyItem(
      sku: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    fetchItem(
      _sku: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber, BigNumber, BigNumber, string, string]>;

    items(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, number, string, string] & {
        name: string;
        sku: BigNumber;
        price: BigNumber;
        state: number;
        seller: string;
        buyer: string;
      }
    >;

    receiveItem(
      sku: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    shipItem(
      sku: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addItem(
    _name: string,
    _price: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  buyItem(
    sku: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  fetchItem(
    _sku: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[string, BigNumber, BigNumber, BigNumber, string, string]>;

  items(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, BigNumber, number, string, string] & {
      name: string;
      sku: BigNumber;
      price: BigNumber;
      state: number;
      seller: string;
      buyer: string;
    }
  >;

  receiveItem(
    sku: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  shipItem(
    sku: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addItem(
      _name: string,
      _price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    buyItem(sku: BigNumberish, overrides?: CallOverrides): Promise<void>;

    fetchItem(
      _sku: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber, BigNumber, BigNumber, string, string]>;

    items(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, number, string, string] & {
        name: string;
        sku: BigNumber;
        price: BigNumber;
        state: number;
        seller: string;
        buyer: string;
      }
    >;

    receiveItem(sku: BigNumberish, overrides?: CallOverrides): Promise<void>;

    shipItem(sku: BigNumberish, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "ForSale(uint256)"(
      sku?: null
    ): TypedEventFilter<[BigNumber], { sku: BigNumber }>;

    ForSale(sku?: null): TypedEventFilter<[BigNumber], { sku: BigNumber }>;

    "Received(uint256)"(
      sku?: null
    ): TypedEventFilter<[BigNumber], { sku: BigNumber }>;

    Received(sku?: null): TypedEventFilter<[BigNumber], { sku: BigNumber }>;

    "Shipped(uint256)"(
      sku?: null
    ): TypedEventFilter<[BigNumber], { sku: BigNumber }>;

    Shipped(sku?: null): TypedEventFilter<[BigNumber], { sku: BigNumber }>;

    "Sold(uint256)"(
      sku?: null
    ): TypedEventFilter<[BigNumber], { sku: BigNumber }>;

    Sold(sku?: null): TypedEventFilter<[BigNumber], { sku: BigNumber }>;
  };

  estimateGas: {
    addItem(
      _name: string,
      _price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    buyItem(
      sku: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    fetchItem(
      _sku: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    items(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    receiveItem(
      sku: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    shipItem(
      sku: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addItem(
      _name: string,
      _price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    buyItem(
      sku: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    fetchItem(
      _sku: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    items(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    receiveItem(
      sku: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    shipItem(
      sku: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
