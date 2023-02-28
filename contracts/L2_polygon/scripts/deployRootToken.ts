// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { Contract } from "ethers";
import { config, ethers } from "hardhat";
import { Wallet } from "ethers";
import fs from "fs";
import { CacheGold } from "../../../typechain";
import * as hre from "hardhat";

const feeAddress = "0x3E924146306957bD453502e33B9a7B6AbA6e4D3a";
let backedTreasury: Wallet,
  testAddress: Wallet,
  unbackedTreasury: Wallet,
  redeem: Wallet;

async function main() {
  const accounts = await (ethers as any).getSigners();
  testAddress = accounts[0];
  backedTreasury = accounts[1];
  unbackedTreasury = accounts[2];
  redeem = accounts[3];
  console.log(" testAddress...", testAddress.address);

  // fs.unlinkSync(`${config.paths.artifacts}/contracts/contractAddress.ts`);

  const lockedGoldOracle = await ethers.getContractFactory("LockedGoldOracle");
  const _lockedGoldOracle = await lockedGoldOracle.deploy();
  await _lockedGoldOracle.deployed();
  console.log("Deploying lockedGoldOracle...", _lockedGoldOracle.address);
  await delay(50000);
  await _lockedGoldOracle.lockAmount(ethers.utils.parseUnits("8133525785", 8));
  const cacheGoldFactory = await ethers.getContractFactory("CacheGold");
  const cacheGoldRoot = (await cacheGoldFactory.deploy(
    unbackedTreasury.address,
    backedTreasury.address,
    feeAddress,
    redeem.address,
    _lockedGoldOracle.address
  )) as CacheGold;
  try {
    await cacheGoldRoot.deployed();
  } catch (e) {
    console.log("deployed does not exist");
  }
  await delay(20000);

  await cacheGoldRoot.addBackedTokens(ethers.utils.parseUnits("100000", 8));

  // set some gold in locked gold oracle
  // mint new tokens into backed treasury

  console.log("Deploying cacheGold...", cacheGoldRoot.address);

  return {
    cacheGoldRoot: cacheGoldRoot.address,
    unbackedTreasury: unbackedTreasury.address,
    backedTreasury: backedTreasury.address,
    feeAddress: feeAddress,
    redeem: redeem.address,
    lockedGoldOracle: _lockedGoldOracle.address,
  };
}

async function verify(contractAddress: string, ...args: Array<any>) {
  console.log("verifying", contractAddress, ...args);
  await hre.run("verify:verify", {
    address: contractAddress,
    constructorArguments: [...args],
  });
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(async (deployedData) => {
    await delay(50000);
    await verify(
      deployedData.cacheGoldRoot,
      deployedData.unbackedTreasury,
      deployedData.backedTreasury,
      deployedData.feeAddress,
      deployedData.redeem,
      deployedData.lockedGoldOracle
    );
  })
  .catch((error) => {
    console.error(error);
  });

// async function test() {
//   await verify(
//     "0x997bccae553112cd023592691d41687a3f1efa7c",
//     "0x541D5646901ae39c856f4d9122213aFE5cB1AbE1",
//     "0xF035d631e813E56A600898369D627b99bE7C8d74",
//     "0x818Fc2c054B10B3113F757a79A5f2674B400d333",
//     "0xCF6648A3e549E7Bd890fEaa2ec5D053546235499",
//     "0x470482d0e44e276696a0ea8eb254e43dadb9e8a9"
//   );
// }
// test();
