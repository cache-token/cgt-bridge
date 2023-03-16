import { BigNumberish, BytesLike } from "ethers";
import { ethers, waffle, network } from "hardhat";
import { CacheGoldCCIP, IRouterClient, IERC20 } from "../../../typechain";
interface IMessage {
  receiver: BytesLike;
  data: BytesLike;
  tokenAmounts: { token: string; amount: BigNumberish }[];
  feeToken: string;
  extraArgs: BytesLike;
}
async function main() {
  const ROUTER_GOERLIOP = "0xEC6d1eC94D518be47DA1cb35F5d43286558d8B62";
  const CACHEGOLDCCIPOP = "0xa6446C6f492f31A33bC68249ae59F8871123a777";
  const LINK = "0x779877A7B0D9E8603169DdbD7836e478b4624789";
  const TOKENPOOL = "0x07BFa2C37050d35825804a95cB698b80c7528c54";
  const accounts = await (ethers as any).getSigners();
  
  const cacheGoldFactory = await ethers.getContractFactory("CacheGoldCCIP");
  const cacheGoldRoot: CacheGoldCCIP = await cacheGoldFactory.attach(
    CACHEGOLDCCIPOP
  );
  const link: IERC20 = await ethers.getContractAt(
    "@openzeppelin/contracts/token/ERC20/IERC20.sol:IERC20",
    LINK
  );
  // Approve tokens for transfer
  await cacheGoldRoot.approve(
    ROUTER_GOERLIOP,
    ethers.utils.parseUnits("1000000000", 8)
  );
  const balance = await cacheGoldRoot.balanceOf(accounts[0].address);
  console.log("CACHE GOLD balance ", balance);

  // await delay(10000);
  console.log("Approval Set");

  // Create the EVM2AnyMessage 
  const abiCoder = ethers.utils.defaultAbiCoder;
  const args = abiCoder.encode(
    ["bytes4", "tuple(uint256,bool)"],
    ["0x97a657c9", [0, false]] // 0 gas, because we are sending directly to an EOA
  );

  const EVM2AnyMessage: IMessage = {
    receiver: abiCoder.encode(["address"], [accounts[0].address]),
    data: ethers.utils.formatBytes32String(""),
    tokenAmounts: [
      { token: CACHEGOLDCCIPOP, amount: ethers.utils.parseUnits("0.01", 8) },
    ],
    extraArgs: args,
    feeToken: ethers.constants.AddressZero,
    // feeToken: LINK,
  };

  console.log("Message - ", EVM2AnyMessage);

  const routerClient: IRouterClient = await ethers.getContractAt(
    "IRouterClient",
    ROUTER_GOERLIOP
  );

  // get required fees for this message
  const requiredFees = await routerClient.getFee(
    ethers.BigNumber.from("43113"),
    EVM2AnyMessage
  );

  // await link.approve(ROUTER_SEPOLIA, requiredFees);

  // const isChainSupported = await routerClient.isChainSupported(
  //   ethers.BigNumber.from("420")
  // );
  // const getSupportedTokens = await routerClient.getSupportedTokens(
  //   ethers.BigNumber.from("420")
  // );
  // console.log(requiredFees, isChainSupported, getSupportedTokens)
  // Call the CCIP bridge via router 
  
  await routerClient.ccipSend(ethers.BigNumber.from("43113"), EVM2AnyMessage, {
    value: requiredFees,
  });
  console.log("CGT Transferred")
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
main();
