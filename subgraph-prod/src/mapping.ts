import { withdrawBurn } from "../generated/CacheGoldChild/CacheGoldChild";
import { WithdrawEntity } from "../generated/schema";

export function handlewithdrawBurn(event: withdrawBurn): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  const entity = new WithdrawEntity(event.transaction.hash.toHex());

  // Entity fields can be set based on event parameters
  entity.account = event.params._from;
  entity.withdrawAmount = event.params._amount;
  entity.blockNumber = event.block.number;

  // Entities can be written to the store with `.save()`
  entity.save();
}

