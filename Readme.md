## Introduction
This repo is meant for the cross chain child contracts for CGT. Ethereum layer 2's and other chain information will be hosted in this repository, with smart contracts and tests in each chain hosted in their respectively named folders.

## Design philosophies

1. Keep it simple
1. Be able to have our own token with the fees on transfer model on other chains
1. We should not do anything that generates fees for no reason
1. We should not compromise usability for saving few gas fees

## Phases

We deploy bridges and enable feature flags to allow us to quickly deploy faster. The three planned phases are as follows:

1. For now we will first just deploy, keep redemptions only on mainnet
2. feature flag 1 - Enable redemptions on that chain but gas fees for bringing CGT back to eth mainnet paid by cache
3. feature flag 2 - Enable redemptions on that chain but we have an offchain or onchain adapter that syncs with mainnet as immediately as possible, if offchain then within seconds, if on chain then depends on L2 messaging intervals. 

We decided to enable offchain adapter that aggregates the oracle data. As illustrated in the following diagram:

![CGT Bridge](./assets/CGTCrossChain.png)