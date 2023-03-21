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
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface FxChildInterface extends ethers.utils.Interface {
  functions: {
    "fxRoot()": FunctionFragment;
    "onStateReceive(uint256,bytes)": FunctionFragment;
    "setFxRoot(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "fxRoot", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "onStateReceive",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "setFxRoot", values: [string]): string;

  decodeFunctionResult(functionFragment: "fxRoot", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "onStateReceive",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setFxRoot", data: BytesLike): Result;

  events: {
    "NewFxMessage(address,address,bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NewFxMessage"): EventFragment;
}

export type NewFxMessageEvent = TypedEvent<
  [string, string, string] & {
    rootMessageSender: string;
    receiver: string;
    data: string;
  }
>;

export class FxChild extends BaseContract {
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

  interface: FxChildInterface;

  functions: {
    fxRoot(overrides?: CallOverrides): Promise<[string]>;

    onStateReceive(
      stateId: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setFxRoot(
      _fxRoot: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  fxRoot(overrides?: CallOverrides): Promise<string>;

  onStateReceive(
    stateId: BigNumberish,
    _data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setFxRoot(
    _fxRoot: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    fxRoot(overrides?: CallOverrides): Promise<string>;

    onStateReceive(
      stateId: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    setFxRoot(_fxRoot: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "NewFxMessage(address,address,bytes)"(
      rootMessageSender?: null,
      receiver?: null,
      data?: null
    ): TypedEventFilter<
      [string, string, string],
      { rootMessageSender: string; receiver: string; data: string }
    >;

    NewFxMessage(
      rootMessageSender?: null,
      receiver?: null,
      data?: null
    ): TypedEventFilter<
      [string, string, string],
      { rootMessageSender: string; receiver: string; data: string }
    >;
  };

  estimateGas: {
    fxRoot(overrides?: CallOverrides): Promise<BigNumber>;

    onStateReceive(
      stateId: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setFxRoot(
      _fxRoot: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    fxRoot(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    onStateReceive(
      stateId: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setFxRoot(
      _fxRoot: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}