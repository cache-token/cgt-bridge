/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { FxChild, FxChildInterface } from "../FxChild";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "rootMessageSender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "NewFxMessage",
    type: "event",
  },
  {
    inputs: [],
    name: "fxRoot",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "stateId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "onStateReceive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_fxRoot",
        type: "address",
      },
    ],
    name: "setFxRoot",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610810806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806326c53bea146100465780634c8ff99e14610062578063de9b771f1461007e575b600080fd5b610060600480360381019061005b9190610347565b61009c565b005b61007c60048036038101906100779190610405565b6101d8565b005b610086610274565b6040516100939190610441565b60405180910390f35b61100173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461010c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610103906104b9565b60405180910390fd5b600080600084848101906101209190610658565b9250925092507ff091cd9cbbaff01426d8183042dff452ef18e6690f19816d5dd114e00761e0e88383836040516101599392919061074f565b60405180910390a18173ffffffffffffffffffffffffffffffffffffffff16639a7c4b718785846040518463ffffffff1660e01b815260040161019e9392919061079c565b600060405180830381600087803b1580156101b857600080fd5b505af11580156101cc573d6000803e3d6000fd5b50505050505050505050565b600073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461023157600080fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b6102bf816102ac565b81146102ca57600080fd5b50565b6000813590506102dc816102b6565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f840112610307576103066102e2565b5b8235905067ffffffffffffffff811115610324576103236102e7565b5b6020830191508360018202830111156103405761033f6102ec565b5b9250929050565b6000806000604084860312156103605761035f6102a2565b5b600061036e868287016102cd565b935050602084013567ffffffffffffffff81111561038f5761038e6102a7565b5b61039b868287016102f1565b92509250509250925092565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006103d2826103a7565b9050919050565b6103e2816103c7565b81146103ed57600080fd5b50565b6000813590506103ff816103d9565b92915050565b60006020828403121561041b5761041a6102a2565b5b6000610429848285016103f0565b91505092915050565b61043b816103c7565b82525050565b60006020820190506104566000830184610432565b92915050565b600082825260208201905092915050565b7f496e76616c69642073656e646572000000000000000000000000000000000000600082015250565b60006104a3600e8361045c565b91506104ae8261046d565b602082019050919050565b600060208201905081810360008301526104d281610496565b9050919050565b60006104e4826103a7565b9050919050565b6104f4816104d9565b81146104ff57600080fd5b50565b600081359050610511816104eb565b92915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6105658261051c565b810181811067ffffffffffffffff821117156105845761058361052d565b5b80604052505050565b6000610597610298565b90506105a3828261055c565b919050565b600067ffffffffffffffff8211156105c3576105c261052d565b5b6105cc8261051c565b9050602081019050919050565b82818337600083830152505050565b60006105fb6105f6846105a8565b61058d565b90508281526020810184848401111561061757610616610517565b5b6106228482856105d9565b509392505050565b600082601f83011261063f5761063e6102e2565b5b813561064f8482602086016105e8565b91505092915050565b600080600060608486031215610671576106706102a2565b5b600061067f86828701610502565b935050602061069086828701610502565b925050604084013567ffffffffffffffff8111156106b1576106b06102a7565b5b6106bd8682870161062a565b9150509250925092565b600081519050919050565b600082825260208201905092915050565b60005b838110156107015780820151818401526020810190506106e6565b83811115610710576000848401525b50505050565b6000610721826106c7565b61072b81856106d2565b935061073b8185602086016106e3565b6107448161051c565b840191505092915050565b60006060820190506107646000830186610432565b6107716020830185610432565b81810360408301526107838184610716565b9050949350505050565b610796816102ac565b82525050565b60006060820190506107b1600083018661078d565b6107be6020830185610432565b81810360408301526107d08184610716565b905094935050505056fea2646970667358221220edabd014b204bf0658818af078863f87d90b1e4217f890a99a1b227f5b153b5d64736f6c634300080b0033";

export class FxChild__factory extends ContractFactory {
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
  ): Promise<FxChild> {
    return super.deploy(overrides || {}) as Promise<FxChild>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): FxChild {
    return super.attach(address) as FxChild;
  }
  connect(signer: Signer): FxChild__factory {
    return super.connect(signer) as FxChild__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FxChildInterface {
    return new utils.Interface(_abi) as FxChildInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FxChild {
    return new Contract(address, _abi, signerOrProvider) as FxChild;
  }
}
