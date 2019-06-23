// @flow
// package: types
// file: proof.proto

import * as jspb from "google-protobuf";
import * as transaction_info_pb from "./transaction_info_pb.flow.js";

export class AccumulatorProof$AsClass extends jspb.Message {
  getBitmap: () => number;
  setBitmap: (value: number) => void;

  clearNonDefaultSiblingsList: () => void;
  getNonDefaultSiblingsList: () => Array<Uint8Array | string>;
  getNonDefaultSiblingsList_asU8: () => Array<Uint8Array>;
  getNonDefaultSiblingsList_asB64: () => Array<string>;
  setNonDefaultSiblingsList: (value: Array<Uint8Array | string>) => void;
  addNonDefaultSiblings: (value: Uint8Array | string, index?: number) => Uint8Array | string;

  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => AccumulatorProof$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: AccumulatorProof$AsClass) => AccumulatorProof$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: AccumulatorProof$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => AccumulatorProof$AsClass;
  static deserializeBinaryFromReader: (message: AccumulatorProof$AsClass, reader: jspb.BinaryReader) => AccumulatorProof$AsClass;
}

export type AccumulatorProof$AsClass$AsObject = {
  bitmap: number,
  nonDefaultSiblingsList: Array<Uint8Array | string>,
}

export class SparseMerkleProof$AsClass extends jspb.Message {
  getLeaf: () => Uint8Array | string;
  getLeaf_asU8: () => Uint8Array;
  getLeaf_asB64: () => string;
  setLeaf: (value: Uint8Array | string) => void;

  getBitmap: () => Uint8Array | string;
  getBitmap_asU8: () => Uint8Array;
  getBitmap_asB64: () => string;
  setBitmap: (value: Uint8Array | string) => void;

  clearNonDefaultSiblingsList: () => void;
  getNonDefaultSiblingsList: () => Array<Uint8Array | string>;
  getNonDefaultSiblingsList_asU8: () => Array<Uint8Array>;
  getNonDefaultSiblingsList_asB64: () => Array<string>;
  setNonDefaultSiblingsList: (value: Array<Uint8Array | string>) => void;
  addNonDefaultSiblings: (value: Uint8Array | string, index?: number) => Uint8Array | string;

  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => SparseMerkleProof$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: SparseMerkleProof$AsClass) => SparseMerkleProof$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: SparseMerkleProof$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => SparseMerkleProof$AsClass;
  static deserializeBinaryFromReader: (message: SparseMerkleProof$AsClass, reader: jspb.BinaryReader) => SparseMerkleProof$AsClass;
}

export type SparseMerkleProof$AsClass$AsObject = {
  leaf: Uint8Array | string,
  bitmap: Uint8Array | string,
  nonDefaultSiblingsList: Array<Uint8Array | string>,
}

export class SignedTransactionProof$AsClass extends jspb.Message {
  hasLedgerInfoToTransactionInfoProof: () => boolean;
  clearLedgerInfoToTransactionInfoProof: () => void;
  getLedgerInfoToTransactionInfoProof: () => ?AccumulatorProof$AsClass;
  setLedgerInfoToTransactionInfoProof: (value?: AccumulatorProof$AsClass) => void;

  hasTransactionInfo: () => boolean;
  clearTransactionInfo: () => void;
  getTransactionInfo: () => ?transaction_info_pb.TransactionInfo$AsClass;
  setTransactionInfo: (value?: transaction_info_pb.TransactionInfo$AsClass) => void;

  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => SignedTransactionProof$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: SignedTransactionProof$AsClass) => SignedTransactionProof$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: SignedTransactionProof$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => SignedTransactionProof$AsClass;
  static deserializeBinaryFromReader: (message: SignedTransactionProof$AsClass, reader: jspb.BinaryReader) => SignedTransactionProof$AsClass;
}

export type SignedTransactionProof$AsClass$AsObject = {
  ledgerInfoToTransactionInfoProof?: AccumulatorProof$AsClass$AsObject,
  transactionInfo?: transaction_info_pb.TransactionInfo$AsClass$AsObject,
}

export class AccountStateProof$AsClass extends jspb.Message {
  hasLedgerInfoToTransactionInfoProof: () => boolean;
  clearLedgerInfoToTransactionInfoProof: () => void;
  getLedgerInfoToTransactionInfoProof: () => ?AccumulatorProof$AsClass;
  setLedgerInfoToTransactionInfoProof: (value?: AccumulatorProof$AsClass) => void;

  hasTransactionInfo: () => boolean;
  clearTransactionInfo: () => void;
  getTransactionInfo: () => ?transaction_info_pb.TransactionInfo$AsClass;
  setTransactionInfo: (value?: transaction_info_pb.TransactionInfo$AsClass) => void;

  hasTransactionInfoToAccountProof: () => boolean;
  clearTransactionInfoToAccountProof: () => void;
  getTransactionInfoToAccountProof: () => ?SparseMerkleProof$AsClass;
  setTransactionInfoToAccountProof: (value?: SparseMerkleProof$AsClass) => void;

  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => AccountStateProof$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: AccountStateProof$AsClass) => AccountStateProof$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: AccountStateProof$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => AccountStateProof$AsClass;
  static deserializeBinaryFromReader: (message: AccountStateProof$AsClass, reader: jspb.BinaryReader) => AccountStateProof$AsClass;
}

export type AccountStateProof$AsClass$AsObject = {
  ledgerInfoToTransactionInfoProof?: AccumulatorProof$AsClass$AsObject,
  transactionInfo?: transaction_info_pb.TransactionInfo$AsClass$AsObject,
  transactionInfoToAccountProof?: SparseMerkleProof$AsClass$AsObject,
}

export class EventProof$AsClass extends jspb.Message {
  hasLedgerInfoToTransactionInfoProof: () => boolean;
  clearLedgerInfoToTransactionInfoProof: () => void;
  getLedgerInfoToTransactionInfoProof: () => ?AccumulatorProof$AsClass;
  setLedgerInfoToTransactionInfoProof: (value?: AccumulatorProof$AsClass) => void;

  hasTransactionInfo: () => boolean;
  clearTransactionInfo: () => void;
  getTransactionInfo: () => ?transaction_info_pb.TransactionInfo$AsClass;
  setTransactionInfo: (value?: transaction_info_pb.TransactionInfo$AsClass) => void;

  hasTransactionInfoToEventProof: () => boolean;
  clearTransactionInfoToEventProof: () => void;
  getTransactionInfoToEventProof: () => ?AccumulatorProof$AsClass;
  setTransactionInfoToEventProof: (value?: AccumulatorProof$AsClass) => void;

  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => EventProof$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: EventProof$AsClass) => EventProof$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: EventProof$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => EventProof$AsClass;
  static deserializeBinaryFromReader: (message: EventProof$AsClass, reader: jspb.BinaryReader) => EventProof$AsClass;
}

export type EventProof$AsClass$AsObject = {
  ledgerInfoToTransactionInfoProof?: AccumulatorProof$AsClass$AsObject,
  transactionInfo?: transaction_info_pb.TransactionInfo$AsClass$AsObject,
  transactionInfoToEventProof?: AccumulatorProof$AsClass$AsObject,
}

