// @flow
// package: types
// file: account_state_blob.proto

import * as jspb from "google-protobuf";
import * as proof_pb from "./proof_pb.flow.js";

export class AccountStateBlob$AsClass extends jspb.Message {
  getBlob: () => Uint8Array | string;
  getBlob_asU8: () => Uint8Array;
  getBlob_asB64: () => string;
  setBlob: (value: Uint8Array | string) => void;

  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => AccountStateBlob$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: AccountStateBlob$AsClass) => AccountStateBlob$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: AccountStateBlob$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => AccountStateBlob$AsClass;
  static deserializeBinaryFromReader: (message: AccountStateBlob$AsClass, reader: jspb.BinaryReader) => AccountStateBlob$AsClass;
}

export type AccountStateBlob$AsClass$AsObject = {
  blob: Uint8Array | string,
}

export class AccountStateWithProof$AsClass extends jspb.Message {
  getVersion: () => number;
  setVersion: (value: number) => void;

  hasBlob: () => boolean;
  clearBlob: () => void;
  getBlob: () => ?AccountStateBlob$AsClass;
  setBlob: (value?: AccountStateBlob$AsClass) => void;

  hasProof: () => boolean;
  clearProof: () => void;
  getProof: () => ?proof_pb.AccountStateProof$AsClass;
  setProof: (value?: proof_pb.AccountStateProof$AsClass) => void;

  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => AccountStateWithProof$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: AccountStateWithProof$AsClass) => AccountStateWithProof$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: AccountStateWithProof$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => AccountStateWithProof$AsClass;
  static deserializeBinaryFromReader: (message: AccountStateWithProof$AsClass, reader: jspb.BinaryReader) => AccountStateWithProof$AsClass;
}

export type AccountStateWithProof$AsClass$AsObject = {
  version: number,
  blob?: AccountStateBlob$AsClass$AsObject,
  proof?: proof_pb.AccountStateProof$AsClass$AsObject,
}

