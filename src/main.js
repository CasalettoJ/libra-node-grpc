// relative imports
const LibraClient = require("./libraclient");
const getWithProofMessages = require("./proto/js/get_with_proof_pb");

const testnetAddr = "ac.testnet.libra.org:8000";

(() => {
  console.log("creating libra grpc client");
  const client = new LibraClient(testnetAddr);
  console.log("client created");
  console.log("testing UpdateToLatestLedger");
  client.UpdateToLatestLedger([], handleResp);
  console.log("testing SendTransaction");
  client.SubmitTransaction();
})();

function handleResp(err, response) {
  console.log("Empty UpdateToLatestLedger call complete.");
  if (err) {
    console.log("Error!");
    console.log(JSON.stringify(err));
  } else {
    console.log("Parsing response..");
    const responseObj = response.toObject();
    console.log(JSON.stringify(responseObj));
  }
}
