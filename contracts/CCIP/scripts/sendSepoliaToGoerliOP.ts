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
  const ROUTER_SEPOLIA = "0x0A36795B3006f50088c11ea45b960A1b0406f03b";
  const CACHEGOLDCCIPROOT = "0x997BCCAE553112CD023592691d41687a3f1EfA7C";
  const LINK = "0x779877A7B0D9E8603169DdbD7836e478b4624789";
  const TOKENPOOL = "0x07BFa2C37050d35825804a95cB698b80c7528c54";
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
  const link: IERC20 = await ethers.getContractAt(
    "@openzeppelin/contracts/token/ERC20/IERC20.sol:IERC20",
    LINK
  );
  // Approve tokens for transfer
  // await cacheGoldRoot.approve(
  //   ROUTER_SEPOLIA,
  //   ethers.utils.parseUnits("1000000000", 8)
  // );
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
      { token: CACHEGOLDCCIPROOT, amount: ethers.utils.parseUnits("0.01", 8) },
    ],
    extraArgs: args,
    // feeToken: ethers.constants.AddressZero,
    feeToken: LINK,
  };

  console.log("Message - ", EVM2AnyMessage);

  const routerClient: IRouterClient = await ethers.getContractAt(
    "IRouterClient",
    ROUTER_SEPOLIA
  );

  // get required fees for this message
  const requiredFees = await routerClient.getFee(
    ethers.BigNumber.from("420"),
    EVM2AnyMessage
  );

  await link.approve(ROUTER_SEPOLIA, requiredFees);

  // const isChainSupported = await routerClient.isChainSupported(
  //   ethers.BigNumber.from("420")
  // );
  const getSupportedTokens = await routerClient.getSupportedTokens(
    ethers.BigNumber.from("420")
  );
  console.log("getSupportedTokens - ", getSupportedTokens)
  // console.log(requiredFees, isChainSupported, getSupportedTokens)
  // Call the CCIP bridge via router 
  
  await routerClient.ccipSend(ethers.BigNumber.from("420"), EVM2AnyMessage)//, {
  //   value: requiredFees,
  // });
  console.log("CGT Transferred")
}


main();
