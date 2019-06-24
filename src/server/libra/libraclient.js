// node_modules
const grpc = require("grpc");

// relative imports
const getWithProofMessages = require("../../server/proto/js/get_with_proof_pb");
// const admissionControlMessages = require("./proto/js/admission_control_pb");
const admissionControlServices = require("../proto/js/admission_control_grpc_pb");
// const transactionMessages = require("./proto/js/transaction_pb");

class LibraClient {
    constructor(address) {
        this.serverAddress = address;
        this.client = new admissionControlServices.AdmissionControlClient(
            this.serverAddress,
            grpc.credentials.createInsecure()
        );
    }

    UpdateToLatestLedger(requestedItems, callback) {
        const request = new getWithProofMessages.UpdateToLatestLedgerRequest();
        request.setClientKnownVersion(0);
        request.setRequestedItemsList(requestedItems);
        this.client.updateToLatestLedger(request, callback);
    }

    // SubmitTransaction() {
    //     // const request = new admissionControlMessages.SubmitTransactionRequest();
    //     // const newSignedTx = new transactionMessages.SignedTransaction();
    // }
}

module.exports = LibraClient;
