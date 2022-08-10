## Introduction
This repo is meant for the cross chain child contracts for CGT. Ethereum layer 2's/sidechains and other chain information will be hosted in this repository, with smart contracts and tests in each chain hosted in their respectively named folders.

We create our own bridge contracts for the following reasons - 
1. Ability to fee exempt the bridge
2. Ability to have a custom token across different chains

## Design philosophies

1. Keep it simple
1. Be able to have our own token with the fees on transfer model on other chains
1. We should not do anything that generates fees for no reason
2. We should not compromise usability for saving gas fees

## Workflow

1. For now we will first just deploy, keep redemptions only on mainnet.
2. In the next phase, we will deploy a simple redemption contract that allows us to transfer tokens to the mainnet redeem address.


## Polygon Cross chain 
We derive our contracts from FX-Portal repo, we create a simplified CGT contract and then deploy that as the Child contract with required FX extensions

Token -> RootTunnel<BaseRootTunnel> -> FxRoot -> StateSender -> Checkpoints(Merrkle Tree, Heimdall nodes) -> FxChild -> RootChildContract -> ChildToken (Mints)

## Testing

### Test Coverage 
Current unit tests are used to verify that the upgraded CACHE Gold Contract behaves as expected.

Additional tests for cross chain in progress via matic.js sdk

### Manual testing via Testnet
1. Get some goerli eth https://goerli-faucet.mudit.blog/
2. Get some test CGT -> Send address to CACHE team
3. Approve transfer of test CGT 
4. https://goerli.etherscan.io/token/0x1542ac6e42940476c729680ff147e0cedcfcfcf2
5. Call approve where spender is 0xa56fc36C50873e23F2FC36AdaAA29A53c79743A9 and amount has 8 decimals
6. Goto https://goerli.etherscan.io/address/0xa56fc36C50873e23F2FC36AdaAA29A53c79743A9#writeContract
7. call `deposit` where
rootToken (address) - "0x1542ac6e42940476c729680ff147e0cedcfcfcf2"
childToken (address) - "0xbf0573f6B5B4eD806E8eA8F291A202e2fec21e7e"
user (address) - "The address that should receive tokens on Mumbai"
amount (uint256) - Amount to transfer 8 decimals
data (bytes) - "0x00"
8. After 15 minutes/20 minutes verify your balance on polygon scan - 
https://mumbai.polygonscan.com/address/0xbf0573f6B5B4eD806E8eA8F291A202e2fec21e7e#readContract


Transfer from L2 to L1 requires first calling withdraw on child chain 
1. https://mumbai.polygonscan.com/address/0x1bdae4035879B1e4f4f507F17623E6BF8fA4092C#code
2. Note down tx hash
3. goto github/<cache-matic.js>/examples/pos/erc20/withdraw_exit.js
4. Set the new transaction hash
5. Execute the js script
   
We have made two modifications to the original matic.js files, both since there are some hard coding in the original js framework. Issue to be reported to the matic team.

In order to reduce the burden for our user's we will make this into a UI which they can then use their wallet to claim.

## Deployment Guidelines
1. Deploy Child Token
2. Deploy Child tunnel
3. Deploy Root Tunnel
4. Run Child Tunnel Post Actions
5. Run Root Tunnel Post Actions