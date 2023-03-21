/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  FxCacheRootTunnel,
  FxCacheRootTunnelInterface,
} from "../FxCacheRootTunnel";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_checkpointManager",
        type: "address",
      },
      {
        internalType: "address",
        name: "_fxRoot",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "rootToken",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "depositor",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "FxDepositERC20",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "rootToken",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "childToken",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "FxWithdrawERC20",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "rootToken",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "childToken",
        type: "address",
      },
    ],
    name: "TokenMappedERC20",
    type: "event",
  },
  {
    inputs: [],
    name: "DEPOSIT",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAP_TOKEN",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "SEND_MESSAGE_EVENT_SIG",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "checkpointManager",
    outputs: [
      {
        internalType: "contract ICheckpointManager",
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
        internalType: "address",
        name: "rootToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "childToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "fxChildTunnel",
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
    inputs: [],
    name: "fxRoot",
    outputs: [
      {
        internalType: "contract IFxStateSender",
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
        internalType: "address",
        name: "rootToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_childToken",
        type: "address",
      },
    ],
    name: "mapToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "processedExits",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "inputData",
        type: "bytes",
      },
    ],
    name: "receiveMessage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "rootToChildTokens",
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
        internalType: "address",
        name: "_fxChildTunnel",
        type: "address",
      },
    ],
    name: "setFxChildTunnel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162003e9a38038062003e9a83398181016040528101906200003791906200012e565b818181600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050505062000175565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620000f682620000c9565b9050919050565b6200010881620000e9565b81146200011457600080fd5b50565b6000815190506200012881620000fd565b92915050565b60008060408385031215620001485762000147620000c4565b5b6000620001588582860162000117565b92505060206200016b8582860162000117565b9150509250929050565b613d1580620001856000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c8063972c492811610071578063972c49281461018d578063aea4e49e146101ab578063c0857ba0146101c7578063d81c8e52146101e5578063de9b771f14610203578063f953cec714610221576100b4565b80630e387de6146100b957806347400269146100d75780635af9abfd146100f3578063607f2d421461010f578063886a69ba1461013f57806388e700681461015d575b600080fd5b6100c161023d565b6040516100ce919061270c565b60405180910390f35b6100f160048036038101906100ec9190612799565b610264565b005b61010d60048036038101906101089190612955565b61047f565b005b61012960048036038101906101249190612a18565b610645565b6040516101369190612a60565b60405180910390f35b610147610665565b604051610154919061270c565b60405180910390f35b61017760048036038101906101729190612a7b565b610689565b6040516101849190612ab7565b60405180910390f35b6101956106bc565b6040516101a29190612ab7565b60405180910390f35b6101c560048036038101906101c09190612a7b565b6106e2565b005b6101cf6107b7565b6040516101dc9190612b31565b60405180910390f35b6101ed6107dd565b6040516101fa919061270c565b60405180910390f35b61020b610801565b6040516102189190612b6d565b60405180910390f35b61023b60048036038101906102369190612b88565b610825565b005b7f8c5261668696ce22758910d05bab8f186d6eb247ceac2af2e82c7dc17669b03660001b81565b600073ffffffffffffffffffffffffffffffffffffffff16600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610332576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161032990612c54565b60405180910390fd5b60007f2cef46a936bdc5b7e6e8c71aa04560c41cf7d88bb26901a7e7f4936ff02accad8383604051602001610368929190612c74565b604051602081830303815290604052604051602001610388929190612d25565b60405160208183030381529060405290506103a28161083f565b81600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fc21cd413746aa9146d86960ed90847c18aa555d8dfd256e0aac3954c41e3cfe260405160405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff16600460008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141561051e5761051d8585610264565b5b61054b3330848873ffffffffffffffffffffffffffffffffffffffff166108f1909392919063ffffffff16565b60007f87a7811f4bfedea3d341ad165680ae306b01aaeacc205d227629cf157dd9f8218633868686604051602001610587959493929190612d64565b6040516020818303038152906040526040516020016105a7929190612d25565b60405160208183030381529060405290506105c18161083f565b8373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff167f8a58355ceb4626422a66b0f36743672dde8507c6be664f0e5b9de8350a132159866040516106359190612dbe565b60405180910390a4505050505050565b60036020528060005260406000206000915054906101000a900460ff1681565b7f2cef46a936bdc5b7e6e8c71aa04560c41cf7d88bb26901a7e7f4936ff02accad81565b60046020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600073ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610773576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161076a90612e4b565b60405180910390fd5b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b7f87a7811f4bfedea3d341ad165680ae306b01aaeacc205d227629cf157dd9f82181565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006108308261097a565b905061083b81610c7f565b5050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b4720477600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16836040518363ffffffff1660e01b81526004016108bc929190612e6b565b600060405180830381600087803b1580156108d657600080fd5b505af11580156108ea573d6000803e3d6000fd5b5050505050565b610974846323b872dd60e01b85858560405160240161091293929190612e9b565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610e1c565b50505050565b6060600061098783610ee3565b9050600061099482610f17565b905060006109a183610f48565b90506000816109af84610f79565b6109b88661118f565b6040516020016109ca93929190612f2f565b604051602081830303815290604052805190602001209050600015156003600083815260200190815260200160002060009054906101000a900460ff16151514610a49576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a4090612fda565b60405180910390fd5b60016003600083815260200190815260200160002060006101000a81548160ff0219169083151502179055506000610a80856111c0565b90506000610a8d826112e5565b9050610a988161135c565b73ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610b27576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b1e9061306c565b60405180910390fd5b6000610b328761138d565b9050610b50610b40846113c1565b87610b4a8a6113cf565b84611400565b610b8f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b86906130fe565b60405180910390fd5b610bbd85610b9c89611706565b610ba58a611737565b84610baf8c61176b565b610bb88d61179c565b6117cd565b506000610bc983611914565b90507f8c5261668696ce22758910d05bab8f186d6eb247ceac2af2e82c7dc17669b03660001b610c0b610c0660008461195990919063ffffffff16565b611988565b60001b14610c4e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c459061316a565b60405180910390fd5b6000610c5984611a0b565b806020019051810190610c6c91906131fa565b9050809950505050505050505050919050565b60008060008084806020019051810190610c999190613296565b93509350935093508273ffffffffffffffffffffffffffffffffffffffff16600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610d6e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d659061336f565b60405180910390fd5b610d9982828673ffffffffffffffffffffffffffffffffffffffff16611a3c9092919063ffffffff16565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167f1a77c658a097b28097b54b8acb928a569a3830a6cbed2de1f60001c0757eb0d684604051610e0d9190612dbe565b60405180910390a45050505050565b6000610e7e826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611ac29092919063ffffffff16565b9050600081511115610ede5780806020019051810190610e9e91906133bb565b610edd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ed49061345a565b60405180910390fd5b5b505050565b610eeb612672565b6000610efe610ef984611ada565b611b08565b9050604051806020016040528082815250915050919050565b6060610f418260000151600881518110610f3457610f3361347a565b5b6020026020010151611c1d565b9050919050565b6000610f728260000151600281518110610f6557610f6461347a565b5b6020026020010151611988565b9050919050565b6060600060405180602001604052806000815250905060008351111561118657600080610fa7600086611cd4565b60f81c905060018160ff161480610fc1575060038160ff16145b1561108b57600160028651610fd691906134d8565b610fe09190613532565b67ffffffffffffffff811115610ff957610ff861282a565b5b6040519080825280601f01601f19166020018201604052801561102b5781602001600182028036833780820191505090505b509250600061103b600187611cd4565b905080846000815181106110525761105161347a565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060019250506110f7565b600280865161109a91906134d8565b6110a49190613532565b67ffffffffffffffff8111156110bd576110bc61282a565b5b6040519080825280601f01601f1916602001820160405280156110ef5781602001600182028036833780820191505090505b509250600091505b60008260ff1690505b83518110156111825761112d60028460ff168361111d9190613532565b6111279190613566565b87611cd4565b8482815181106111405761113f61347a565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350808061117a906135bc565b915050611100565b5050505b80915050919050565b60006111b982600001516009815181106111ac576111ab61347a565b5b6020026020010151611988565b9050919050565b6111c8612685565b6111f082600001516006815181106111e3576111e261347a565b5b6020026020010151611c1d565b816020018190525060006112078260200151611ada565b905061121281611d6c565b1561122d5761122081611b08565b82600001819052506112cd565b6000826020015190506000600182516112469190613532565b67ffffffffffffffff81111561125f5761125e61282a565b5b6040519080825280601f01601f1916602001820160405280156112915781602001600182028036833780820191505090505b5090506000808360210191508260200190506112af82828551611dba565b6112c06112bb84611ada565b611b08565b8660000181905250505050505b6112d68361118f565b82604001818152505050919050565b6112ed6126a6565b6000611317836000015160038151811061130a5761130961347a565b5b6020026020010151611b08565b83604001518151811061132d5761132c61347a565b5b60200260200101519050604051806040016040528082815260200161135183611b08565b815250915050919050565b600061138682602001516000815181106113795761137861347a565b5b6020026020010151611e57565b9050919050565b60006113b782600001516005815181106113aa576113a961347a565b5b6020026020010151611988565b60001b9050919050565b606081602001519050919050565b60606113f982600001516007815181106113ec576113eb61347a565b5b6020026020010151611c1d565b9050919050565b60008061140c84611ada565b9050600061141982611b08565b9050606080600086905060008061142f8b610f79565b905060008151141561144b5760009750505050505050506116fe565b60005b86518110156116f5578151831115611471576000985050505050505050506116fe565b6114948782815181106114875761148661347a565b5b6020026020010151611e7a565b9550858051906020012084146114b5576000985050505050505050506116fe565b6114d88782815181106114cb576114ca61347a565b5b6020026020010151611b08565b94506011855114156115cb578151831415611548578c805190602001206115198660108151811061150c5761150b61347a565b5b6020026020010151611c1d565b805190602001201415611537576001985050505050505050506116fe565b6000985050505050505050506116fe565b600082848151811061155d5761155c61347a565b5b602001015160f81c60f81b60f81c905060108160ff16111561158b57600099505050505050505050506116fe565b6115b1868260ff16815181106115a4576115a361347a565b5b6020026020010151611f0a565b60001b94506001846115c39190613566565b9350506116e2565b6002855114156116d05760006116056115fe876000815181106115f1576115f061347a565b5b6020026020010151611c1d565b8486611f41565b9050825181856116159190613566565b1415611678578d805190602001206116478760018151811061163a5761163961347a565b5b6020026020010151611c1d565b80519060200120141561166657600199505050505050505050506116fe565b600099505050505050505050506116fe565b600081141561169357600099505050505050505050506116fe565b808461169f9190613566565b93506116c5866001815181106116b8576116b761347a565b5b6020026020010151611f0a565b60001b9450506116e1565b6000985050505050505050506116fe565b5b80806116ed906135bc565b91505061144e565b50505050505050505b949350505050565b600061173082600001516003815181106117235761172261347a565b5b6020026020010151611988565b9050919050565b600061176182600001516004815181106117545761175361347a565b5b6020026020010151611988565b60001b9050919050565b600061179582600001516000815181106117885761178761347a565b5b6020026020010151611988565b9050919050565b60606117c682600001516001815181106117b9576117b861347a565b5b6020026020010151611c1d565b9050919050565b600080600080600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166341539d4a876040518263ffffffff1660e01b815260040161182e9190612dbe565b60a060405180830381865afa15801561184b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061186f919061362f565b50935050925092506118c5828b6118869190613532565b84878d8d8d8d60405160200161189f94939291906136cb565b60405160208183030381529060405280519060200120612077909392919063ffffffff16565b611904576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118fb90613765565b60405180910390fd5b8093505050509695505050505050565b61191c6126c6565b604051806020016040528061194f84602001516001815181106119425761194161347a565b5b6020026020010151611b08565b8152509050919050565b6119616126d9565b826000015182815181106119785761197761347a565b5b6020026020010151905092915050565b60008082600001511180156119a257506021826000015111155b6119ab57600080fd5b60006119ba83602001516121e8565b905060008184600001516119ce9190613532565b90506000808386602001516119e39190613566565b90508051915060208310156119ff57826020036101000a820491505b81945050505050919050565b6060611a358260200151600281518110611a2857611a2761347a565b5b6020026020010151611c1d565b9050919050565b611abd8363a9059cbb60e01b8484604051602401611a5b929190613785565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610e1c565b505050565b6060611ad184846000856122a7565b90509392505050565b611ae26126d9565b600060208301905060405180604001604052808451815260200182815250915050919050565b6060611b1382611d6c565b611b1c57600080fd5b6000611b2783612374565b905060008167ffffffffffffffff811115611b4557611b4461282a565b5b604051908082528060200260200182016040528015611b7e57816020015b611b6b6126d9565b815260200190600190039081611b635790505b5090506000611b9085602001516121e8565b8560200151611b9f9190613566565b9050600080600090505b84811015611c1057611bba83612402565b9150604051806040016040528083815260200184815250848281518110611be457611be361347a565b5b60200260200101819052508183611bfb9190613566565b92508080611c08906135bc565b915050611ba9565b5082945050505050919050565b60606000826000015111611c3057600080fd5b6000611c3f83602001516121e8565b90506000818460000151611c539190613532565b905060008167ffffffffffffffff811115611c7157611c7061282a565b5b6040519080825280601f01601f191660200182016040528015611ca35781602001600182028036833780820191505090505b5090506000816020019050611cc8848760200151611cc19190613566565b82856124de565b81945050505050919050565b600080600284611ce491906137dd565b14611d2757601082600285611cf9919061380e565b81518110611d0a57611d0961347a565b5b602001015160f81c60f81b60f81c611d22919061384c565b611d61565b601082600285611d37919061380e565b81518110611d4857611d4761347a565b5b602001015160f81c60f81b60f81c611d60919061387d565b5b60f81b905092915050565b60008082600001511415611d835760009050611db5565b60008083602001519050805160001a915060c060ff168260ff161015611dae57600092505050611db5565b6001925050505b919050565b6000811415611dc857611e52565b5b602060ff168110611e135782518252602060ff1683611de89190613566565b9250602060ff1682611dfa9190613566565b9150602060ff1681611e0c9190613532565b9050611dc9565b6000600182602060ff16611e279190613532565b610100611e3491906139e1565b611e3e9190613532565b905080198451168184511681811785525050505b505050565b60006015826000015114611e6a57600080fd5b611e7382611988565b9050919050565b60606000826000015167ffffffffffffffff811115611e9c57611e9b61282a565b5b6040519080825280601f01601f191660200182016040528015611ece5781602001600182028036833780820191505090505b509050600081511415611ee45780915050611f05565b6000816020019050611eff84602001518286600001516124de565b81925050505b919050565b60006021826000015114611f1d57600080fd5b60008060018460200151611f319190613566565b9050805191508192505050919050565b600080600090506000611f5386610f79565b90506000815167ffffffffffffffff811115611f7257611f7161282a565b5b6040519080825280601f01601f191660200182016040528015611fa45781602001600182028036833780820191505090505b50905060008590505b825186611fba9190613566565b811015612045576000878281518110611fd657611fd561347a565b5b602001015160f81c60f81b905080838884611ff19190613532565b815181106120025761200161347a565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535050808061203d906135bc565b915050611fad565b50808051906020012082805190602001201415612065578151925061206a565b600092505b8293505050509392505050565b6000806020835161208891906137dd565b146120c8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016120bf90613a78565b60405180910390fd5b6000602083516120d8919061380e565b90508060026120e791906139e1565b8510612128576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161211f90613ae4565b60405180910390fd5b6000808790506000602090505b855181116121d757808601519250600060028961215291906137dd565b141561218857818360405160200161216b929190613b04565b6040516020818303038152906040528051906020012091506121b4565b828260405160200161219b929190613b04565b6040516020818303038152906040528051906020012091505b6002886121c1919061380e565b97506020816121d09190613566565b9050612135565b508581149350505050949350505050565b600080825160001a9050608060ff168110156122085760009150506122a2565b60b860ff1681108061222d575060c060ff16811015801561222c575060f860ff1681105b5b1561223c5760019150506122a2565b60c060ff168110156122775760018060b86122579190613b30565b60ff16826122659190613532565b61226f9190613566565b9150506122a2565b60018060f86122869190613b30565b60ff16826122949190613532565b61229e9190613566565b9150505b919050565b6060824710156122ec576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016122e390613bd6565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516123159190613bf6565b60006040518083038185875af1925050503d8060008114612352576040519150601f19603f3d011682016040523d82523d6000602084013e612357565b606091505b509150915061236887838387612589565b92505050949350505050565b6000808260000151141561238b57600090506123fd565b60008061239b84602001516121e8565b84602001516123aa9190613566565b90506000846000015185602001516123c29190613566565b90505b808210156123f6576123d682612402565b826123e19190613566565b915082806123ee906135bc565b9350506123c5565b8293505050505b919050565b6000806000835160001a9050608060ff1681101561242357600191506124d4565b60b860ff16811015612452576001608060ff16826124419190613532565b61244b9190613566565b91506124d3565b60c060ff168110156124825760b78103600185019450806020036101000a855104600182018101935050506124d2565b60f860ff168110156124b157600160c060ff16826124a09190613532565b6124aa9190613566565b91506124d1565b60f78103600185019450806020036101000a855104600182018101935050505b5b5b5b8192505050919050565b60008114156124ec57612584565b5b602060ff1681106125375782518252602060ff168361250c9190613566565b9250602060ff168261251e9190613566565b9150602060ff16816125309190613532565b90506124ed565b600081141561254557612584565b6000600182602060ff166125599190613532565b61010061256691906139e1565b6125709190613532565b905080198451168184511681811785525050505b505050565b606083156125ec576000835114156125e4576125a4856125ff565b6125e3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016125da90613c59565b60405180910390fd5b5b8290506125f7565b6125f68383612622565b5b949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000825111156126355781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016126699190613cbd565b60405180910390fd5b6040518060200160405280606081525090565b60405180606001604052806060815260200160608152602001600081525090565b60405180604001604052806126b96126d9565b8152602001606081525090565b6040518060200160405280606081525090565b604051806040016040528060008152602001600081525090565b6000819050919050565b612706816126f3565b82525050565b600060208201905061272160008301846126fd565b92915050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006127668261273b565b9050919050565b6127768161275b565b811461278157600080fd5b50565b6000813590506127938161276d565b92915050565b600080604083850312156127b0576127af612731565b5b60006127be85828601612784565b92505060206127cf85828601612784565b9150509250929050565b6000819050919050565b6127ec816127d9565b81146127f757600080fd5b50565b600081359050612809816127e3565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61286282612819565b810181811067ffffffffffffffff821117156128815761288061282a565b5b80604052505050565b6000612894612727565b90506128a08282612859565b919050565b600067ffffffffffffffff8211156128c0576128bf61282a565b5b6128c982612819565b9050602081019050919050565b82818337600083830152505050565b60006128f86128f3846128a5565b61288a565b90508281526020810184848401111561291457612913612814565b5b61291f8482856128d6565b509392505050565b600082601f83011261293c5761293b61280f565b5b813561294c8482602086016128e5565b91505092915050565b600080600080600060a0868803121561297157612970612731565b5b600061297f88828901612784565b955050602061299088828901612784565b94505060406129a188828901612784565b93505060606129b2888289016127fa565b925050608086013567ffffffffffffffff8111156129d3576129d2612736565b5b6129df88828901612927565b9150509295509295909350565b6129f5816126f3565b8114612a0057600080fd5b50565b600081359050612a12816129ec565b92915050565b600060208284031215612a2e57612a2d612731565b5b6000612a3c84828501612a03565b91505092915050565b60008115159050919050565b612a5a81612a45565b82525050565b6000602082019050612a756000830184612a51565b92915050565b600060208284031215612a9157612a90612731565b5b6000612a9f84828501612784565b91505092915050565b612ab18161275b565b82525050565b6000602082019050612acc6000830184612aa8565b92915050565b6000819050919050565b6000612af7612af2612aed8461273b565b612ad2565b61273b565b9050919050565b6000612b0982612adc565b9050919050565b6000612b1b82612afe565b9050919050565b612b2b81612b10565b82525050565b6000602082019050612b466000830184612b22565b92915050565b6000612b5782612afe565b9050919050565b612b6781612b4c565b82525050565b6000602082019050612b826000830184612b5e565b92915050565b600060208284031215612b9e57612b9d612731565b5b600082013567ffffffffffffffff811115612bbc57612bbb612736565b5b612bc884828501612927565b91505092915050565b600082825260208201905092915050565b7f46784552433230526f6f7454756e6e656c3a20414c52454144595f4d4150504560008201527f4400000000000000000000000000000000000000000000000000000000000000602082015250565b6000612c3e602183612bd1565b9150612c4982612be2565b604082019050919050565b60006020820190508181036000830152612c6d81612c31565b9050919050565b6000604082019050612c896000830185612aa8565b612c966020830184612aa8565b9392505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015612cd7578082015181840152602081019050612cbc565b83811115612ce6576000848401525b50505050565b6000612cf782612c9d565b612d018185612ca8565b9350612d11818560208601612cb9565b612d1a81612819565b840191505092915050565b6000604082019050612d3a60008301856126fd565b8181036020830152612d4c8184612cec565b90509392505050565b612d5e816127d9565b82525050565b600060a082019050612d796000830188612aa8565b612d866020830187612aa8565b612d936040830186612aa8565b612da06060830185612d55565b8181036080830152612db28184612cec565b90509695505050505050565b6000602082019050612dd36000830184612d55565b92915050565b7f467842617365526f6f7454756e6e656c3a204348494c445f54554e4e454c5f4160008201527f4c52454144595f53455400000000000000000000000000000000000000000000602082015250565b6000612e35602a83612bd1565b9150612e4082612dd9565b604082019050919050565b60006020820190508181036000830152612e6481612e28565b9050919050565b6000604082019050612e806000830185612aa8565b8181036020830152612e928184612cec565b90509392505050565b6000606082019050612eb06000830186612aa8565b612ebd6020830185612aa8565b612eca6040830184612d55565b949350505050565b6000819050919050565b612eed612ee8826127d9565b612ed2565b82525050565b600081905092915050565b6000612f0982612c9d565b612f138185612ef3565b9350612f23818560208601612cb9565b80840191505092915050565b6000612f3b8286612edc565b602082019150612f4b8285612efe565b9150612f578284612edc565b602082019150819050949350505050565b7f4678526f6f7454756e6e656c3a20455849545f414c52454144595f50524f434560008201527f5353454400000000000000000000000000000000000000000000000000000000602082015250565b6000612fc4602483612bd1565b9150612fcf82612f68565b604082019050919050565b60006020820190508181036000830152612ff381612fb7565b9050919050565b7f4678526f6f7454756e6e656c3a20494e56414c49445f46585f4348494c445f5460008201527f554e4e454c000000000000000000000000000000000000000000000000000000602082015250565b6000613056602583612bd1565b915061306182612ffa565b604082019050919050565b6000602082019050818103600083015261308581613049565b9050919050565b7f4678526f6f7454756e6e656c3a20494e56414c49445f524543454950545f505260008201527f4f4f460000000000000000000000000000000000000000000000000000000000602082015250565b60006130e8602383612bd1565b91506130f38261308c565b604082019050919050565b60006020820190508181036000830152613117816130db565b9050919050565b7f4678526f6f7454756e6e656c3a20494e56414c49445f5349474e415455524500600082015250565b6000613154601f83612bd1565b915061315f8261311e565b602082019050919050565b6000602082019050818103600083015261318381613147565b9050919050565b600061319d613198846128a5565b61288a565b9050828152602081018484840111156131b9576131b8612814565b5b6131c4848285612cb9565b509392505050565b600082601f8301126131e1576131e061280f565b5b81516131f184826020860161318a565b91505092915050565b6000602082840312156132105761320f612731565b5b600082015167ffffffffffffffff81111561322e5761322d612736565b5b61323a848285016131cc565b91505092915050565b600061324e8261273b565b9050919050565b61325e81613243565b811461326957600080fd5b50565b60008151905061327b81613255565b92915050565b600081519050613290816127e3565b92915050565b600080600080608085870312156132b0576132af612731565b5b60006132be8782880161326c565b94505060206132cf8782880161326c565b93505060406132e08782880161326c565b92505060606132f187828801613281565b91505092959194509250565b7f46784552433230526f6f7454756e6e656c3a20494e56414c49445f4d4150504960008201527f4e475f4f4e5f4558495400000000000000000000000000000000000000000000602082015250565b6000613359602a83612bd1565b9150613364826132fd565b604082019050919050565b600060208201905081810360008301526133888161334c565b9050919050565b61339881612a45565b81146133a357600080fd5b50565b6000815190506133b58161338f565b92915050565b6000602082840312156133d1576133d0612731565b5b60006133df848285016133a6565b91505092915050565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b6000613444602a83612bd1565b915061344f826133e8565b604082019050919050565b6000602082019050818103600083015261347381613437565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006134e3826127d9565b91506134ee836127d9565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615613527576135266134a9565b5b828202905092915050565b600061353d826127d9565b9150613548836127d9565b92508282101561355b5761355a6134a9565b5b828203905092915050565b6000613571826127d9565b915061357c836127d9565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156135b1576135b06134a9565b5b828201905092915050565b60006135c7826127d9565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156135fa576135f96134a9565b5b600182019050919050565b600081519050613614816129ec565b92915050565b6000815190506136298161276d565b92915050565b600080600080600060a0868803121561364b5761364a612731565b5b600061365988828901613605565b955050602061366a88828901613281565b945050604061367b88828901613281565b935050606061368c88828901613281565b925050608061369d8882890161361a565b9150509295509295909350565b6000819050919050565b6136c56136c0826126f3565b6136aa565b82525050565b60006136d78287612edc565b6020820191506136e78286612edc565b6020820191506136f782856136b4565b60208201915061370782846136b4565b60208201915081905095945050505050565b7f4678526f6f7454756e6e656c3a20494e56414c49445f48454144455200000000600082015250565b600061374f601c83612bd1565b915061375a82613719565b602082019050919050565b6000602082019050818103600083015261377e81613742565b9050919050565b600060408201905061379a6000830185612aa8565b6137a76020830184612d55565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006137e8826127d9565b91506137f3836127d9565b925082613803576138026137ae565b5b828206905092915050565b6000613819826127d9565b9150613824836127d9565b925082613834576138336137ae565b5b828204905092915050565b600060ff82169050919050565b60006138578261383f565b91506138628361383f565b925082613872576138716137ae565b5b828206905092915050565b60006138888261383f565b91506138938361383f565b9250826138a3576138a26137ae565b5b828204905092915050565b60008160011c9050919050565b6000808291508390505b6001851115613905578086048111156138e1576138e06134a9565b5b60018516156138f05780820291505b80810290506138fe856138ae565b94506138c5565b94509492505050565b60008261391e57600190506139da565b8161392c57600090506139da565b8160018114613942576002811461394c5761397b565b60019150506139da565b60ff84111561395e5761395d6134a9565b5b8360020a915084821115613975576139746134a9565b5b506139da565b5060208310610133831016604e8410600b84101617156139b05782820a9050838111156139ab576139aa6134a9565b5b6139da565b6139bd84848460016138bb565b925090508184048111156139d4576139d36134a9565b5b81810290505b9392505050565b60006139ec826127d9565b91506139f7836127d9565b9250613a247fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff848461390e565b905092915050565b7f496e76616c69642070726f6f66206c656e677468000000000000000000000000600082015250565b6000613a62601483612bd1565b9150613a6d82613a2c565b602082019050919050565b60006020820190508181036000830152613a9181613a55565b9050919050565b7f4c65616620696e64657820697320746f6f206269670000000000000000000000600082015250565b6000613ace601583612bd1565b9150613ad982613a98565b602082019050919050565b60006020820190508181036000830152613afd81613ac1565b9050919050565b6000613b1082856136b4565b602082019150613b2082846136b4565b6020820191508190509392505050565b6000613b3b8261383f565b9150613b468361383f565b925082821015613b5957613b586134a9565b5b828203905092915050565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b6000613bc0602683612bd1565b9150613bcb82613b64565b604082019050919050565b60006020820190508181036000830152613bef81613bb3565b9050919050565b6000613c028284612efe565b915081905092915050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b6000613c43601d83612bd1565b9150613c4e82613c0d565b602082019050919050565b60006020820190508181036000830152613c7281613c36565b9050919050565b600081519050919050565b6000613c8f82613c79565b613c998185612bd1565b9350613ca9818560208601612cb9565b613cb281612819565b840191505092915050565b60006020820190508181036000830152613cd78184613c84565b90509291505056fea2646970667358221220ddff0a968d19e7913c497dd2ca073688f560be52e558f6476a3ef065a90bd93b64736f6c634300080b0033";

export class FxCacheRootTunnel__factory extends ContractFactory {
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
    _checkpointManager: string,
    _fxRoot: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<FxCacheRootTunnel> {
    return super.deploy(
      _checkpointManager,
      _fxRoot,
      overrides || {}
    ) as Promise<FxCacheRootTunnel>;
  }
  getDeployTransaction(
    _checkpointManager: string,
    _fxRoot: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _checkpointManager,
      _fxRoot,
      overrides || {}
    );
  }
  attach(address: string): FxCacheRootTunnel {
    return super.attach(address) as FxCacheRootTunnel;
  }
  connect(signer: Signer): FxCacheRootTunnel__factory {
    return super.connect(signer) as FxCacheRootTunnel__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FxCacheRootTunnelInterface {
    return new utils.Interface(_abi) as FxCacheRootTunnelInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FxCacheRootTunnel {
    return new Contract(address, _abi, signerOrProvider) as FxCacheRootTunnel;
  }
}
