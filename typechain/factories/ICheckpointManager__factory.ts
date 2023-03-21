/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ICheckpointManager,
  ICheckpointManagerInterface,
} from "../ICheckpointManager";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "headerBlocks",
    outputs: [
      {
        internalType: "bytes32",
        name: "root",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "start",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "end",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "createdAt",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "proposer",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610214806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c806341539d4a14610030575b600080fd5b61004a600480360381019061004591906100f5565b610064565b60405161005b95949392919061018b565b60405180910390f35b60006020528060005260406000206000915090508060000154908060010154908060020154908060030154908060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905085565b600080fd5b6000819050919050565b6100d2816100bf565b81146100dd57600080fd5b50565b6000813590506100ef816100c9565b92915050565b60006020828403121561010b5761010a6100ba565b5b6000610119848285016100e0565b91505092915050565b6000819050919050565b61013581610122565b82525050565b610144816100bf565b82525050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006101758261014a565b9050919050565b6101858161016a565b82525050565b600060a0820190506101a0600083018861012c565b6101ad602083018761013b565b6101ba604083018661013b565b6101c7606083018561013b565b6101d4608083018461017c565b969550505050505056fea264697066735822122085a4e7d3f3fd299e0be558f2a61ad00a1e7aecf9f46c6eb9468066ff6b4b2d4a64736f6c634300080b0033";

export class ICheckpointManager__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ICheckpointManager> {
    return super.deploy(overrides || {}) as Promise<ICheckpointManager>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ICheckpointManager {
    return super.attach(address) as ICheckpointManager;
  }
  connect(signer: Signer): ICheckpointManager__factory {
    return super.connect(signer) as ICheckpointManager__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ICheckpointManagerInterface {
    return new utils.Interface(_abi) as ICheckpointManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ICheckpointManager {
    return new Contract(address, _abi, signerOrProvider) as ICheckpointManager;
  }
}
