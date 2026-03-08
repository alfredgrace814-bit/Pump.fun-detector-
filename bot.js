const { Connection, PublicKey } = require("@solana/web3.js");

const connection = new Connection(
  "https://api.mainnet-beta.solana.com",
  "confirmed"
);

// Pump.fun program ID
const PUMP_FUN = new PublicKey(
  "6EF8rrecthR5Dkzon8Nwu78qLk8rCkJx9sC7bT9Z8V1"
);

console.log("Watching Pump.fun launches...");

connection.onLogs(PUMP_FUN, (logInfo) => {
  console.log("🚀 Pump.fun activity detected");
  console.log("TX:", logInfo.signature);
});
