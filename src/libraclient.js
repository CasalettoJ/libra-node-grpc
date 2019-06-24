// node_modules
const grpc = require("grpc");

// relative imports
const getWithProofMessages = require("./proto/js/get_with_proof_pb");
const admissionControlMessages = require("./proto/js/admission_control_pb");
const admissionControlServices = require("./proto/js/admission_control_grpc_pb");

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
    request.clientKnownVersion = 0;
    request.requestedItemsList = requestedItems;
    this.client.updateToLatestLedger(request, callback);
  }

  // SubmitTransaction() {
  //     // TODO
  // }
}

module.exports = LibraClient;
