// @flow
// package: types
// file: ledger_info.proto

import * as jspb from "google-protobuf";

export class LedgerInfo$AsClass extends jspb.Message {
  getVersion: () => number;
  setVersion: (value: number) => void;

  getTransactionAccumulatorHash: () => Uint8Array | string;
  getTransactionAccumulatorHash_asU8: () => Uint8Array;
  getTransactionAccumulatorHash_asB64: () => string;
  setTransactionAccumulatorHash: (value: Uint8Array | string) => void;

  getConsensusDataHash: () => Uint8Array | string;
  getConsensusDataHash_asU8: () => Uint8Array;
  getConsensusDataHash_asB64: () => string;
  setConsensusDataHash: (value: Uint8Array | string) => void;

  getConsensusBlockId: () => Uint8Array | string;
  getConsensusBlockId_asU8: () => Uint8Array;
  getConsensusBlockId_asB64: () => string;
  setConsensusBlockId: (value: Uint8Array | string) => void;

  getEpochNum: () => number;
  setEpochNum: (value: number) => void;

  getTimestampUsecs: () => number;
  setTimestampUsecs: (value: number) => void;

  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => LedgerInfo$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: LedgerInfo$AsClass) => LedgerInfo$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: LedgerInfo$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => LedgerInfo$AsClass;
  static deserializeBinaryFromReader: (message: LedgerInfo$AsClass, reader: jspb.BinaryReader) => LedgerInfo$AsClass;
}

export type LedgerInfo$AsClass$AsObject = {
  version: number,
  transactionAccumulatorHash: Uint8Array | string,
  consensusDataHash: Uint8Array | string,
  consensusBlockId: Uint8Array | string,
  epochNum: number,
  timestampUsecs: number,
}

export class LedgerInfoWithSignatures$AsClass extends jspb.Message {
  clearSignaturesList: () => void;
  getSignaturesList: () => Array<ValidatorSignature$AsClass>;
  setSignaturesList: (value: Array<ValidatorSignature$AsClass>) => void;
  addSignatures: (value?: ValidatorSignature$AsClass, index?: number) => ValidatorSignature$AsClass;

  hasLedgerInfo: () => boolean;
  clearLedgerInfo: () => void;
  getLedgerInfo: () => ?LedgerInfo$AsClass;
  setLedgerInfo: (value?: LedgerInfo$AsClass) => void;

  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => LedgerInfoWithSignatures$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: LedgerInfoWithSignatures$AsClass) => LedgerInfoWithSignatures$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: LedgerInfoWithSignatures$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => LedgerInfoWithSignatures$AsClass;
  static deserializeBinaryFromReader: (message: LedgerInfoWithSignatures$AsClass, reader: jspb.BinaryReader) => LedgerInfoWithSignatures$AsClass;
}

export type LedgerInfoWithSignatures$AsClass$AsObject = {
  signaturesList: Array<ValidatorSignature$AsClass$AsObject>,
  ledgerInfo?: LedgerInfo$AsClass$AsObject,
}

export class ValidatorSignature$AsClass extends jspb.Message {
  getValidatorId: () => Uint8Array | string;
  getValidatorId_asU8: () => Uint8Array;
  getValidatorId_asB64: () => string;
  setValidatorId: (value: Uint8Array | string) => void;

  getSignature: () => Uint8Array | string;
  getSignature_asU8: () => Uint8Array;
  getSignature_asB64: () => string;
  setSignature: (value: Uint8Array | string) => void;

  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => ValidatorSignature$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: ValidatorSignature$AsClass) => ValidatorSignature$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: ValidatorSignature$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => ValidatorSignature$AsClass;
  static deserializeBinaryFromReader: (message: ValidatorSignature$AsClass, reader: jspb.BinaryReader) => ValidatorSignature$AsClass;
}

export type ValidatorSignature$AsClass$AsObject = {
  validatorId: Uint8Array | string,
  signature: Uint8Array | string,
}

