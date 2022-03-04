import * as dotenv from "dotenv";
import * as hre from "hardhat";
import config from "../config/config.json";

dotenv.config();
/**
 * Here we need to set the FX Root Child tunnel address etc in the child contract and we can then start the test manually
 */
async function main() {
  let fxChild, erc20Token;

  const network = await hre.ethers.provider.getNetwork();

  if (network.chainId === 137) {
    // Polygon Mainnet
    fxChild = config.mainnet.fxChild.address;
    erc20Token = config.mainnet.fxERC20.address;
  } else if (network.chainId === 80001) {
    // Mumbai Testnet
    fxChild = config.testnet.fxChild.address;
    erc20Token = config.testnet.fxERC20.address;
  } else {
    fxChild = process.env.FX_CHILD;
    erc20Token = process.env.FX_ERC20;
  }

  const ERC20 = await hre.ethers.getContractFactory("FxERC20ChildTunnel");
  const erc20 = await ERC20.deploy(fxChild, erc20Token);
  await erc20.deployTransaction.wait();
  console.log("ERC20ChildTunnel deployed to:", erc20.address);
  console.log(
    "npx hardhat verify --network mumbai",
    erc20.address,
    fxChild,
    erc20Token
  );
}

main()
  // eslint-disable-next-line no-process-exit
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    // eslint-disable-next-line no-process-exit
    process.exit(1);
  });
