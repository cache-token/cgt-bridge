import * as dotenv from "dotenv";
import * as hre from "hardhat";
import config from "../config/config.json";

// Use your own deployed child tunnel addresses here instead!
const fxERC20ChildTunnel = "0x587C9FF1c528C7aeE2804Bf5301Dc2ec057A75a8";

async function main() {
  let fxRoot, checkpointManager, fxERC20;

  const network = await hre.ethers.provider.getNetwork();

  if (network.chainId === 1) {
    // Ethereum Mainnet
    fxRoot = config.mainnet.fxRoot.address;
    checkpointManager = config.mainnet.checkpointManager.address;
    fxERC20 = config.mainnet.fxERC20.address;
  } else if (network.chainId === 5) {
    // Goerli Testnet
    fxRoot = config.testnet.fxRoot.address;
    checkpointManager = config.testnet.checkpointManager.address;
    fxERC20 = config.testnet.fxERC20.address;
  } else {
    fxRoot = process.env.FX_ROOT;
    checkpointManager = process.env.CHECKPOINT_MANAGER;
    fxERC20 = process.env.FX_ERC20;
  }

  // You will want to use your own tunnel addresses here instead!
  const ERC20 = await hre.ethers.getContractFactory("FxERC20RootTunnel");
  const erc20 = await ERC20.deploy(checkpointManager, fxRoot, fxERC20);
  console.log(erc20.deployTransaction);
  await erc20.deployTransaction.wait();
  console.log("ERC20RootTunnel deployed to:", erc20.address);
  console.log(
    "npx hardhat verify --network goerli",
    erc20.address,
    checkpointManager,
    fxRoot,
    fxERC20
  );

  const setERC20Child = await erc20.setFxChildTunnel(fxERC20ChildTunnel);
  console.log(setERC20Child);
  await setERC20Child.wait();
  console.log("ERC20ChildTunnel set");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
