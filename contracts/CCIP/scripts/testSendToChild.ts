import { BigNumberish, BytesLike } from "ethers";
import { ethers, waffle, network } from "hardhat";
import { CacheGoldCCIP, IRouterClient } from "../../../typechain";

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
  const abiCoder = ethers.utils.defaultAbiCoder;
  const args = abiCoder.encode(
    ["bytes4", "tuple(uint256,bool)"],
    ["0x97a657c9", [300000, false]]
  );

  const EVM2AnyMessage: IMessage = {
    receiver: accounts[0].address,
    data: ethers.utils.formatBytes32String(""),
    feeToken: ethers.constants.AddressZero,
    tokenAmounts: [
      { token: CACHEGOLDCCIPROOT, amount: ethers.utils.parseUnits("10", 8) },
    ],
    extraArgs: args,
  };

  console.log("Message - ", EVM2AnyMessage);

  const routerClient: IRouterClient = await ethers.getContractAt(
    "IRouterClient",
    ROUTER_SEPOLIA
  );
  // const routerClient: IRouterClient = await RouterClient.getContractAt(ROUTER_SEPOLIA);

  const requiredFees = await routerClient.getFee(
    ethers.BigNumber.from("420"),
    EVM2AnyMessage
  );
  console.log("The fees required - ", requiredFees);
  routerClient.ccipSend(ethers.BigNumber.from("420"), EVM2AnyMessage, {
    value: requiredFees,
  });
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
main();
