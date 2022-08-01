// SPDX-License-Identifier: MIT
pragma solidity 0.8.11;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

/**
 * @title Redeem Transfer CGT
 * @dev Allows anyone to safely transfer CGT Redemption fees to the redeem address on mainnet
 */

 interface IChildTunnel {
    function withdrawTo(address childToken,address receiver, uint256 amount) external;
}

contract RedeemTransfer {

    address immutable public CGT;
    address immutable public childTunnelContract;
    address immutable public redeemAddr;

    event FundsRedeemed(uint256);

    constructor(   
        address _CGT,
        address _childTunnelContract,
        address _redeemAddr){
        CGT = _CGT;
        childTunnelContract = _childTunnelContract;
        redeemAddr = _redeemAddr;
    }

    /**
     * @dev Withdraw the funds to mainnet
     */
    function withdrawAllCGT() external {
        uint256 cgtBalance = IERC20(CGT).balanceOf(address(this));
        IChildTunnel(childTunnelContract).withdrawTo(CGT,redeemAddr,cgtBalance);
        emit FundsRedeemed(cgtBalance);
    }
}