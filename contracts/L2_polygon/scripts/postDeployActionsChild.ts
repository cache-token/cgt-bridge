import * as dotenv from "dotenv";
import { Wallet } from "ethers";
import * as hre from "hardhat";
import { ethers } from "hardhat";
import config from "../configs/config.json";

dotenv.config();
/**
 * Here we need to set the FX Root Child tunnel address etc in the child contract and we can then start the test manually
 */
const fxERC20ChildTunnel = "0x617d6f361AF9314E31B6675f174a2321abE929AE";
const rootTunnel = "0x61FFeAC0E2467e58173FfD15c0F993F890f989f6";
const rootToken = "0x1542Ac6e42940476c729680ff147E0CEDcFcFCf2";


let feeAddr: Wallet, unbackedTreasury: Wallet, redeem: Wallet;

async function main() {
  let fxChild, rootCGTTOken;
  const accounts = await (ethers as any).getSigners();
  feeAddr = accounts[1];
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
  const cgt = await CGTChildFactory.attach(
    "0x5d20692Be3324110E4D258D4ec0d129Dc39040E5"
  );

  const CHILD = await hre.ethers.getContractFactory("FxERC20ChildTunnel");
  const childTunnel = CHILD.attach(fxERC20ChildTunnel);
  const setRootTunnel = await childTunnel.setFxRootTunnel(rootTunnel);
  await setRootTunnel.wait();

  // const init = await cgt.initialize(
  //   feeAddr.address,
  //   accounts[0].address,
  //   fxERC20ChildTunnel,
  //   rootCGTTOken || "",
  //   "CACHE GOLD TOKEN",
  //   "CGT",
  //   8
  // );
  // await init.wait();
  // const unbacked = await cgt.setUnbackedAddress(unbackedTreasury.address);
  // await unbacked.wait();
  // const redeemTx = await cgt.setRedeemAddress(redeem.address);
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
