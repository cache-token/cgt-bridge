import { ethers } from "hardhat";
import { CacheGold } from "../../../typechain";
import * as hre from "hardhat";

const rootTunnel = "0xD7ecbfE71A9d643Fc8d8868E224474864e42A483";
const rootToken = "0x1542Ac6e42940476c729680ff147E0CEDcFcFCf2";
const childToken = "0x06995eD6Db0c4A941184e896D40baA42543a5B6f";

async function main() {
  const accounts = await (ethers as any).getSigners();
  console.log("The user with the moolah = ", accounts[0].address);
  const cacheGoldFactory = await ethers.getContractFactory("CacheGold");
  const cacheGoldRoot = cacheGoldFactory.attach(rootToken) as CacheGold;
  // You will want to use your own tunnel addresses here instead!
  const TunnelFactory = await hre.ethers.getContractFactory(
    "FxCacheRootTunnel"
  );
  const cacheTunnel = await TunnelFactory.attach(rootTunnel);

  const setExempt = await cacheGoldRoot.setFeeExempt(rootTunnel);
  await setExempt.wait();

  // const approve = await cacheGoldRoot
  //   .connect(accounts[5])
  //   .approve(rootTunnel, ethers.utils.parseUnits("100", 8));
  // await approve.wait();
  // console.log("Approved Tokens");

  // const deposit = await cacheTunnel
  //   .connect(accounts[5])
  //   .deposit(
  //     rootToken,
  //     childToken,
  //     accounts[4].address,
  //     ethers.utils.parseUnits("5", 8),
  //     ethers.utils.formatBytes32String("")
  //   );

  // await deposit.wait();

  // console.log("deposited cacheGold...");
}
main();
