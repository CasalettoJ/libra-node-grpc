// @flow

// node_modules
import path from "path";
import grpc from "grpc";

// relative imports
import * as admissionControlMessages from "./proto/js/admission_control_pb";
import * as admissionControlServices from "./proto/js/admission_control_grpc_pb";

// Flow-typing
import * as admissionControlTypes from "./proto/flowtypes/admission_control_pb.flow";

export default class LibraClient {
    serverAddress: string;
    client: any; // todo: better typing

    constructor(address: string) {
        this.serverAddress = address;
        this.client = new admissionControlServices.AdmissionControlClient(
            this.serverAddress,
            grpc.credentials.createInsecure()
        );
    }

    UpdateToLatestLedger(): void {
        // TODO
    }

    SubmitTransaction(): void {
        // TODO
    }
}
