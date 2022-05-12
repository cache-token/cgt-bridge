import { ethers } from "hardhat";
import { CacheGold } from "../../../typechain";
import * as hre from "hardhat";

const rootTunnel = "0xa56fc36C50873e23F2FC36AdaAA29A53c79743A9";
const rootToken = "0x1542Ac6e42940476c729680ff147E0CEDcFcFCf2";
const childToken = "0xbf0573f6B5B4eD806E8eA8F291A202e2fec21e7e";

async function main() {
  const accounts = await (ethers as any).getSigners();
  console.log("The user with the moolah = ", accounts[4].address);
  const cacheGoldFactory = await ethers.getContractFactory("CacheGold");
  const cacheGoldRoot = cacheGoldFactory.attach(rootToken) as CacheGold;
  // You will want to use your own tunnel addresses here instead!
  const TunnelFactory = await hre.ethers.getContractFactory(
    "FxCacheRootTunnel"
  );
  const cacheTunnel = await TunnelFactory.attach(rootTunnel);

  const setExempt = await cacheGoldRoot.setFeeExempt(rootTunnel);
  await setExempt.wait();

  const approve = await cacheGoldRoot
    .connect(accounts[5])
    .approve(rootTunnel, ethers.utils.parseUnits("100", 8));
  await approve.wait();
  console.log("Approved Tokens");

  const deposit = await cacheTunnel
    .connect(accounts[5])
    .deposit(
      rootToken,
      childToken,
      accounts[4].address,
      ethers.utils.parseUnits("5", 8),
      ethers.utils.formatBytes32String("")
    );

  await deposit.wait();

  console.log("deposited cacheGold...");
}
main();
