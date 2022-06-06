// SPDX-License-Identifier: MIT
pragma solidity 0.8.11;
import {IERC20} from "../lib/IERC20.sol";
interface IFxERC20 is IERC20 {
    function fxManager() external returns (address);

    function connectedToken() external returns (address);

    function initialize(
        address __feeAddress,
        address __owner,
        address __fxManager_,
        address __connectedToken
    ) external;

    function mint(address user, uint256 amount) external;

    function burn(address user, uint256 amount) external;
}
