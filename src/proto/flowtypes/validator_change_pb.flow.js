// @flow
// package: types
// file: validator_change.proto

import * as jspb from "google-protobuf";
import * as events_pb from "./events_pb.flow.js";
import * as ledger_info_pb from "./ledger_info_pb.flow.js";

export class ValidatorChangeEventWithProof$AsClass extends jspb.Message {
  hasLedgerInfoWithSigs: () => boolean;
  clearLedgerInfoWithSigs: () => void;
  getLedgerInfoWithSigs: () => ?ledger_info_pb.LedgerInfoWithSignatures$AsClass;
  setLedgerInfoWithSigs: (value?: ledger_info_pb.LedgerInfoWithSignatures$AsClass) => void;

  hasEventWithProof: () => boolean;
  clearEventWithProof: () => void;
  getEventWithProof: () => ?events_pb.EventWithProof$AsClass;
  setEventWithProof: (value?: events_pb.EventWithProof$AsClass) => void;

  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => ValidatorChangeEventWithProof$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: ValidatorChangeEventWithProof$AsClass) => ValidatorChangeEventWithProof$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: ValidatorChangeEventWithProof$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => ValidatorChangeEventWithProof$AsClass;
  static deserializeBinaryFromReader: (message: ValidatorChangeEventWithProof$AsClass, reader: jspb.BinaryReader) => ValidatorChangeEventWithProof$AsClass;
}

export type ValidatorChangeEventWithProof$AsClass$AsObject = {
  ledgerInfoWithSigs?: ledger_info_pb.LedgerInfoWithSignatures$AsClass$AsObject,
  eventWithProof?: events_pb.EventWithProof$AsClass$AsObject,
}

