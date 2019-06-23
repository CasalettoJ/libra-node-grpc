// @flow
// package: types
// file: transaction_info.proto

import * as jspb from "google-protobuf";

export class TransactionInfo$AsClass extends jspb.Message {
  getSignedTransactionHash: () => Uint8Array | string;
  getSignedTransactionHash_asU8: () => Uint8Array;
  getSignedTransactionHash_asB64: () => string;
  setSignedTransactionHash: (value: Uint8Array | string) => void;

  getStateRootHash: () => Uint8Array | string;
  getStateRootHash_asU8: () => Uint8Array;
  getStateRootHash_asB64: () => string;
  setStateRootHash: (value: Uint8Array | string) => void;

  getEventRootHash: () => Uint8Array | string;
  getEventRootHash_asU8: () => Uint8Array;
  getEventRootHash_asB64: () => string;
  setEventRootHash: (value: Uint8Array | string) => void;

  getGasUsed: () => number;
  setGasUsed: (value: number) => void;

  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => TransactionInfo$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: TransactionInfo$AsClass) => TransactionInfo$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: TransactionInfo$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => TransactionInfo$AsClass;
  static deserializeBinaryFromReader: (message: TransactionInfo$AsClass, reader: jspb.BinaryReader) => TransactionInfo$AsClass;
}

export type TransactionInfo$AsClass$AsObject = {
  signedTransactionHash: Uint8Array | string,
  stateRootHash: Uint8Array | string,
  eventRootHash: Uint8Array | string,
  gasUsed: number,
}

