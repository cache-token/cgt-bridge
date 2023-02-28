import { ethers, waffle, network } from "hardhat";
import { CacheGoldCCIP } from "../../../typechain";

async function main() {
  const accounts = await (ethers as any).getSigners();
  console.log("Deployer Address - ", accounts[0].address);
  const cacheGoldFactory = await ethers.getContractFactory("CacheGoldCCIP");
  // const cacheGoldChild = await cacheGoldFactory.deploy();
  // await cacheGoldChild.deployed();
  const cacheGoldChild = await cacheGoldFactory.attach(
    "0x309111b4cff6f59de7c5c3dc8936ac79247550db"
  );
  console.log("Deployed cacheGold child token ...", cacheGoldChild.address);

  await cacheGoldChild.initialize(
    accounts[0].address,
    accounts[0].address,
    accounts[1].address,
    accounts[1].address
  );

  await cacheGoldChild.setFeeExempt(accounts[0].address);
  console.log(
    "Initialized and set fee address to be exempt ...",
    cacheGoldChild.address
  );

  return {
    cacheGoldChild: cacheGoldChild.address,
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
    await verify(deployedData.cacheGoldChild);
  })
  .catch((error) => {
    console.error(error);
  });

