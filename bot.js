const { Connection, clusterApiUrl } = require("@solana/web3.js");

const connection = new Connection(
  clusterApiUrl("mainnet-beta"),
  "confirmed"
);

console.log("Bot running...");

connection.onLogs("all", (logInfo) => {
  console.log("Transaction:", logInfo.signature);
});
