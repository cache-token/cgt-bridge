import { BigNumberish, BytesLike } from "ethers";
import { ethers, waffle, network } from "hardhat";
import {
  CacheGoldCCIP,
  IRouterClient,
} from "../../../typechain";

interface IMessage {
  receiver: BytesLike;
  data: BytesLike;
  tokenAmounts: { token: string; amount: BigNumberish }[];
  feeToken: string;
  extraArgs: BytesLike;
}
async function main() {
  const ROUTER_SEPOLIA = "0x0A36795B3006f50088c11ea45b960A1b0406f03b";
  const CACHEGOLDCCIPROOT = "0x997BCCAE553112CD023592691d41687a3f1EfA7C";
  const accounts = await (ethers as any).getSigners();
  console.log(
    "Sender Address - ",
    accounts[0].address,
    ethers.utils.parseUnits("0.001", 8)
  );
  const cacheGoldFactory = await ethers.getContractFactory("CacheGoldCCIP");
  const cacheGoldRoot: CacheGoldCCIP = await cacheGoldFactory.attach(
    CACHEGOLDCCIPROOT
  );

  // await cacheGoldRoot.approve(ROUTER_SEPOLIA, ethers.utils.parseUnits("10", 8));
  const balance = await cacheGoldRoot.balanceOf(accounts[0].address);
  // approveTx.wait();
  console.log("balance ", balance);

  // await delay(10000);
  console.log("Approval Set");

  const EVM2AnyMessage: IMessage = {
    receiver: accounts[0].address,
    data: ethers.utils.formatBytes32String(""),
    feeToken: "0x779877A7B0D9E8603169DdbD7836e478b4624789",
    tokenAmounts: [
      { token: CACHEGOLDCCIPROOT, amount: ethers.utils.parseUnits("10", 8) },
    ],
    extraArgs: ethers.utils.formatBytes32String(""),
  };

  const routerClient: IRouterClient = await ethers.getContractAt(
    "IRouterClient",
    ROUTER_SEPOLIA
  );
  // const routerClient: IRouterClient = await RouterClient.getContractAt(ROUTER_SEPOLIA);

  const requiredFees = await routerClient.getFee("420", EVM2AnyMessage);
  console.log("The fees required - ", requiredFees);
  // routerClient.ccipSend{value: i_router.getFee(destChainId, message)}(destChainId, message)
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
main();
