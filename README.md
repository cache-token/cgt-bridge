# Advanced Sample Hardhat Project

This project demonstrates an advanced Hardhat use case, integrating other tools commonly used alongside Hardhat in the ecosystem.

The project comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts. It also comes with a variety of other tools, preconfigured to work with the project code.

## Polygon Cross chain 
We derive our contracts from FX-Portal repo, we create a simplified CGT contract and then deploy that as the CHILD contract with required FX extensions

for FxERC20ChildTunnel -> _tokenTemplate -> derived simplified CGT
for FxERC20RootTunnel -> _fxERC20Token -> derived simplified CGT
