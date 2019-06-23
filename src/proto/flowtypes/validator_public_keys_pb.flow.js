// @flow
// package: types
// file: validator_public_keys.proto

import * as jspb from "google-protobuf";

export class ValidatorPublicKeys$AsClass extends jspb.Message {
  getAccountAddress: () => Uint8Array | string;
  getAccountAddress_asU8: () => Uint8Array;
  getAccountAddress_asB64: () => string;
  setAccountAddress: (value: Uint8Array | string) => void;

  getConsensusPublicKey: () => Uint8Array | string;
  getConsensusPublicKey_asU8: () => Uint8Array;
  getConsensusPublicKey_asB64: () => string;
  setConsensusPublicKey: (value: Uint8Array | string) => void;

  getNetworkSigningPublicKey: () => Uint8Array | string;
  getNetworkSigningPublicKey_asU8: () => Uint8Array;
  getNetworkSigningPublicKey_asB64: () => string;
  setNetworkSigningPublicKey: (value: Uint8Array | string) => void;

  getNetworkIdentityPublicKey: () => Uint8Array | string;
  getNetworkIdentityPublicKey_asU8: () => Uint8Array;
  getNetworkIdentityPublicKey_asB64: () => string;
  setNetworkIdentityPublicKey: (value: Uint8Array | string) => void;

  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => ValidatorPublicKeys$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: ValidatorPublicKeys$AsClass) => ValidatorPublicKeys$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: ValidatorPublicKeys$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => ValidatorPublicKeys$AsClass;
  static deserializeBinaryFromReader: (message: ValidatorPublicKeys$AsClass, reader: jspb.BinaryReader) => ValidatorPublicKeys$AsClass;
}

export type ValidatorPublicKeys$AsClass$AsObject = {
  accountAddress: Uint8Array | string,
  consensusPublicKey: Uint8Array | string,
  networkSigningPublicKey: Uint8Array | string,
  networkIdentityPublicKey: Uint8Array | string,
}

