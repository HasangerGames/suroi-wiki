// Error codes for API routes that need to be shown to the user
enum APIErrorCodes {
  Unknown,
  ItemNotFound,
  LootTableNotFound,
  ItemNotInLootTable,
}

export const ErrorMessages: Record<APIErrorCodes, string> = {
  "0": "Unknown error",
  "1": "Item not found",
  "2": "Invalid loot table",
  "3": "Item cannot be obtained from this loot table",
};

export default APIErrorCodes;
