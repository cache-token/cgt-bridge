## Introduction
This repo is meant for the cross chain child contracts for CGT. Ethereum layer 2's and other chain information will be hosted in this repository, with smart contracts and tests in each chain hosted in their respectively named folders.

## Design philosophies

1. Keep it simple
1. Be able to have our own token with the fees on transfer model on other chains
1. We should not do anything that generates fees for no reason
2. We should not compromise usability for saving gas fees

## Workflow

We deploy bridges and enable feature flags to allow us to quickly deploy faster. The planned phases are as follows:

1. For now we will first just deploy, keep redemptions only on mainnet using a simple no mint no redeem address function on polygon.
2. feature flag- Enable redemptions on that chain, the chain has a local redeem and unbacked treasury address, only cache can withdraw back to the mainnet from this address.

Upon each redemptions event an offchain aggregator listens and computes the data and has the ability to use token governor to pause the oracle in case there is a discrepancy between
the chainlink gramchain feed and aggregated total circulation.
We lazy transfer from the unbacked in each local chain to the master chain when there is enough tokens in each chain to make the costs of bridge transfer make sense.

An offchain adapter that aggregates the oracle data for total circulation is used as illustrated in the following diagram:

![CGT Bridge](./assets/CGTCrossChain.png)

Here we use chainlink oracle is used as the main oracle that gives us the data of how much tokens are available in the different vaults. We augment this by aggregating data from different chains 


Potential Issue:
Total circulation on mainnet on the CGT contract will not add up immediately, but will reach eventual consistency. We need to make it sufficiently clear on chain to not use the total circulation as a source of truth for applications that require immediate information to this. For eg. on the cache site we can show the aggregated oracle data and the chainlink feed, both of which will always be correct else the minting and unlock function will be paused.