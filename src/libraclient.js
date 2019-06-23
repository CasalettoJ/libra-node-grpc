import path from "path";
import grpc from "grpc";
import protoloader from "@grpc/proto-loader";

const admission_control_proto = path.resolve(__dirname, "proto/admission_control.proto");


// todo: better control than const strings here
// defined in get_with_proof.proto message RequestItem
export const ClientRequests = {
    accountState: "get_account_state_request",
    accountTxBySequence: "get_account_transaction_by_sequence_number_request",
    eventsByEventAccessPath: "get_events_by_event_access_path_request",
    tx: "get_transactions_request"
};

export default class LibraClient {
    constructor(address) {
        this.serverAddress = address;
        const admissionControlDef = protoloader.loadSync(admission_control_proto, {
            keepCase: true,
            longs: Number,
            enums: String,
            bytes: String,
            defaults: true,
            arrays: true,
            objects: true,
            oneofs: true,
        });
        const admissionControl = grpc.loadPackageDefinition(admissionControlDef).admission_control;
        this.client = admissionControl.AdmissionControl(this.address, grpc.credentials.createInsecure());
    }

    public function UpdateToLatestLedger() {
        // TODO
    }

    public function SubmitTransaction() {
        // TODO
    }
}