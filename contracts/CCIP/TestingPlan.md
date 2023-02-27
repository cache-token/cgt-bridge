## CACHE side
1. Deploy the main token on ethereum sepolia add address here
2. Remove default admin role 
3. Create the chainlink manager role
4. make script for testing / FE call CCIP router contract and create 
 function ccipSend(uint64 destinationChainId, Client.EVM2AnyMessage calldata message)
  external
  payable
  returns (bytes32 messageId);
  4a. Create EVM2AnyMessage
    struct EVM2AnyMessage {
    bytes receiver; // abi.encode(receiver address) for dest EVM chains
    bytes data; // Data payload 
    EVMTokenAmount[] tokenAmounts; // Token transfers
    address feeToken; // Address of feeToken. address(0) means you will send msg.value.
    bytes extraArgs; // Populate this with _argsToBytes(EVMExtraArgsV1)
  }
   bytes32 messageId = i_router.ccipSend{value: i_router.getFee(destChainId, message)}(destChainId, message);
  4b. for the bytes data leave empty
  4c. Start with native gas 
  4d. Deploy an inbetween contract for oracle
5. Mint 1000 tokens and send it to Tester 1 
6. Set the fee exemptions on the child contracts
7. Provide wallet addresses for deployment for the fee enforcer and default fee address
8. Test transfer between Sepolia -> Avax -> Optimisim -> Sepolia
9. Test transfer between Sepolia -> Optimisim -> Avax -> Sepolia
   
## CCIP
1. Deploy the wrapped Child tokens on Avalanche Fuji and Optimism 
2. Share all CCIP token pool addresses with CACHE.GOLD for fee exemption 
   
