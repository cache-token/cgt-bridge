import * as dotenv from "dotenv";
import { Wallet } from "ethers";
import * as hre from "hardhat";
import { ethers } from "hardhat";
import config from "../configs/config.json";

dotenv.config();
/**
 * Here we need to set the FX Root Child tunnel address etc in the child contract and we can then start the test manually
 */
const fxERC20ChildTunnel = "0x825A3Ce4Fb26C376aa63e5f943BCfaEaD89CAA5f";
const rootTunnel = "0x309111B4CfF6F59De7C5c3dc8936aC79247550dB";
const rootToken = "0xF5238462E7235c7B62811567E63Dd17d12C2EAA0";
const childToken = "0x268F78793F20B11615eD5C4e076B288826E299ce";

let feeAddr: string, unbackedTreasury: Wallet, redeem: Wallet;

async function main() {
  let fxChild, rootCGTTOken;
  const accounts = await (ethers as any).getSigners();
  feeAddr = "0xa0957EdDEfdb8A6D24DB50058d28b8A2F462A264"; //gnosis multisig
  unbackedTreasury = accounts[2];
  redeem = accounts[3];
  const network = await hre.ethers.provider.getNetwork();

  if (network.chainId === 137) {
    // Polygon Mainnet
    fxChild = config.mainnet.fxChild.address;
    rootCGTTOken = config.mainnet.fxERC20.address;
  } else if (network.chainId === 80001) {
    // Mumbai Testnet
    fxChild = config.testnet.fxChild.address;
    rootCGTTOken = config.testnet.fxERC20.address;
  } else {
    rootCGTTOken = process.env.FX_ERC20;
  }

  const CGTChildFactory = await hre.ethers.getContractFactory("CacheGoldChild");
  const cgtChild = await CGTChildFactory.attach(childToken);

  const CHILD = await hre.ethers.getContractFactory("FxERC20ChildTunnel");
  const childTunnel = CHILD.attach(fxERC20ChildTunnel);
  const setRootTunnel = await childTunnel.setFxRootTunnel(rootTunnel);
  await setRootTunnel.wait();

  const init = await cgtChild.initialize(
    feeAddr,
    feeAddr,
    fxERC20ChildTunnel,
    rootCGTTOken || "",
    accounts[4].address // redeem address
  );
  await init.wait();
  const feeExempt = await cgtChild.setFeeExempt(fxERC20ChildTunnel);
  feeExempt.wait();
  // const redeemTx = await cgtChild.setRedeemAddress(redeem.address);
  // await redeemTx.wait();
}

main()
  // eslint-disable-next-line no-process-exit
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    // eslint-disable-next-line no-process-exit
    process.exit(1);
  });
