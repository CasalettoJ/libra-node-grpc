const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const LibraClient = require("./libra/libraclient");
const serverConfig = require("./config");

(() => {
    const app = express();
    const client = new LibraClient(serverConfig.constants.testnetAddr);

    app.use(bodyParser.json());
    app.use(cors());

    app.get(serverConfig.endpoints.root, (req, res) => {
        return new Promise((resolve, reject) => {
            client
                .UpdateToLatestLedger([])
                .then(resp => resolve(resp.toObject()))
                .catch(err => reject(err));
        })
            .then(resp => res.send({ error: null, response: resp }))
            .catch(err => {
                console.log(err);
                res.send({ error: err, response: null });
            });
    });

    app.listen(serverConfig.constants.serverPort, () => {
        console.log("Listening on port 3001");
    });
})();
