import path from "path";
import grpc from "grpc";
import protoloader from "@grpc/proto-loader";

const admission_control_proto = path.resolve(__dirname, "proto/admission_control.proto");

class LibraClient {
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