// relative imports
const LibraClient = require("./libraclient");

const testnetAddr = "ac.testnet.libra.org:8000";

(() => {
    console.log("creating libra grpc client");
    const client = new LibraClient(testnetAddr);
    console.log("client created");
    console.log("testing UpdateToLatestLedger");
    client.UpdateToLatestLedger([], (err, response) => console.log(response));
})();
