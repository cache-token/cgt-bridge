## Existing Audits
This is a fork of the FxPortal code at -> https://github.com/fx-portal/contracts with an existing [audit](https://github.com/fx-portal/contracts/blob/main/audits/Polygon_FX_Portal_Smart_Contract_Security_Audit_Halborn_v1_0.pdf). 

Folders and contracts that we have modified in order of least to most - 
1. contracts/L2_polygon/cgt/erc20-transfer (Tunnel extensions, removed create2)
2. contracts/L2_polygon/tokens/CacheGoldChild.sol -> Upgraded version of the CacheGoldContract a replica of which is in the same folder. This version does not allow mint of CGT on child chains. Rest of the functionalities to remain the same.
The CacheGoldRoot.sol and LockedGoldOracle.sol has already been [audited](https://github.com/cache-token/docs/blob/master/CACHE_Gold_Audit_Zerotrust.pdf)  
3. scripts -> Added scripts for deployment
