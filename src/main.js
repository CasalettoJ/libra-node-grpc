// relative imports
const LibraClient = require("./libraclient");

const testnetAddr = "ac.testnet.libra.org:8000";

(() => {
  console.log("creating libra grpc client");
  const client = new LibraClient(testnetAddr);
  console.log("client created");
  console.log("testing UpdateToLatestLedger");
  client.UpdateToLatestLedger([], handleUpdateToLatestLedger);
})();

function handleUpdateToLatestLedger(err, response) {
  console.log("Empty UpdateToLatestLedger call complete.");
  if (err) {
    console.log("Error!");
    console.log(JSON.stringify(err));
  } else {
    console.log("Response:");
    console.log(JSON.stringify(response));
  }
}
