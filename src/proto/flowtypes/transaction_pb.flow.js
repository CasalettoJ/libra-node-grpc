// @flow
// package: types
// file: transaction.proto

import * as jspb from "google-protobuf";
import * as access_path_pb from "./access_path_pb.flow.js";
import * as events_pb from "./events_pb.flow.js";
import * as proof_pb from "./proof_pb.flow.js";
import * as transaction_info_pb from "./transaction_info_pb.flow.js";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class RawTransaction$AsClass extends jspb.Message {
  getSenderAccount: () => Uint8Array | string;
  getSenderAccount_asU8: () => Uint8Array;
  getSenderAccount_asB64: () => string;
  setSenderAccount: (value: Uint8Array | string) => void;

  getSequenceNumber: () => number;
  setSequenceNumber: (value: number) => void;

  hasProgram: () => boolean;
  clearProgram: () => void;
  getProgram: () => ?Program$AsClass;
  setProgram: (value?: Program$AsClass) => void;

  hasWriteSet: () => boolean;
  clearWriteSet: () => void;
  getWriteSet: () => ?WriteSet$AsClass;
  setWriteSet: (value?: WriteSet$AsClass) => void;

  getMaxGasAmount: () => number;
  setMaxGasAmount: (value: number) => void;

  getGasUnitPrice: () => number;
  setGasUnitPrice: (value: number) => void;

  getExpirationTime: () => number;
  setExpirationTime: (value: number) => void;

  getPayloadCase: () => $Values<typeof RawTransaction$AsClass_PayloadCase>;
  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => RawTransaction$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: RawTransaction$AsClass) => RawTransaction$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: RawTransaction$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => RawTransaction$AsClass;
  static deserializeBinaryFromReader: (message: RawTransaction$AsClass, reader: jspb.BinaryReader) => RawTransaction$AsClass;
}

export type RawTransaction$AsClass$AsObject = {
  senderAccount: Uint8Array | string,
  sequenceNumber: number,
  program?: Program$AsClass$AsObject,
  writeSet?: WriteSet$AsClass$AsObject,
  maxGasAmount: number,
  gasUnitPrice: number,
  expirationTime: number,
}

export const RawTransaction$AsClass_PayloadCase = {
  PAYLOAD_NOT_SET: 0,
  PROGRAM: 3,
  WRITE_SET: 4,
}

export class Program$AsClass extends jspb.Message {
  getCode: () => Uint8Array | string;
  getCode_asU8: () => Uint8Array;
  getCode_asB64: () => string;
  setCode: (value: Uint8Array | string) => void;

  clearArgumentsList: () => void;
  getArgumentsList: () => Array<TransactionArgument$AsClass>;
  setArgumentsList: (value: Array<TransactionArgument$AsClass>) => void;
  addArguments: (value?: TransactionArgument$AsClass, index?: number) => TransactionArgument$AsClass;

  clearModulesList: () => void;
  getModulesList: () => Array<Uint8Array | string>;
  getModulesList_asU8: () => Array<Uint8Array>;
  getModulesList_asB64: () => Array<string>;
  setModulesList: (value: Array<Uint8Array | string>) => void;
  addModules: (value: Uint8Array | string, index?: number) => Uint8Array | string;

  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => Program$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: Program$AsClass) => Program$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: Program$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => Program$AsClass;
  static deserializeBinaryFromReader: (message: Program$AsClass, reader: jspb.BinaryReader) => Program$AsClass;
}

export type Program$AsClass$AsObject = {
  code: Uint8Array | string,
  argumentsList: Array<TransactionArgument$AsClass$AsObject>,
  modulesList: Array<Uint8Array | string>,
}

export class TransactionArgument$AsClass extends jspb.Message {
  getType: () => $Values<typeof TransactionArgument$AsClass_ArgType>;
  setType: (value: $Values<typeof TransactionArgument$AsClass_ArgType>) => void;

  getData: () => Uint8Array | string;
  getData_asU8: () => Uint8Array;
  getData_asB64: () => string;
  setData: (value: Uint8Array | string) => void;

  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => TransactionArgument$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: TransactionArgument$AsClass) => TransactionArgument$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: TransactionArgument$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => TransactionArgument$AsClass;
  static deserializeBinaryFromReader: (message: TransactionArgument$AsClass, reader: jspb.BinaryReader) => TransactionArgument$AsClass;
}

export type TransactionArgument$AsClass$AsObject = {
  type: $Values<typeof TransactionArgument$AsClass_ArgType>,
  data: Uint8Array | string,
}

export const TransactionArgument$AsClass_ArgType = Object.freeze({
  U64: 0,
  ADDRESS: 1,
  STRING: 2,
  BYTEARRAY: 3,
})

export const TransactionArgument$AsClass_ArgType$ReverseLookUp = Object.freeze({
  "0": "U64",
  "1": "ADDRESS",
  "2": "STRING",
  "3": "BYTEARRAY",
})

export class SignedTransaction$AsClass extends jspb.Message {
  getRawTxnBytes: () => Uint8Array | string;
  getRawTxnBytes_asU8: () => Uint8Array;
  getRawTxnBytes_asB64: () => string;
  setRawTxnBytes: (value: Uint8Array | string) => void;

  getSenderPublicKey: () => Uint8Array | string;
  getSenderPublicKey_asU8: () => Uint8Array;
  getSenderPublicKey_asB64: () => string;
  setSenderPublicKey: (value: Uint8Array | string) => void;

  getSenderSignature: () => Uint8Array | string;
  getSenderSignature_asU8: () => Uint8Array;
  getSenderSignature_asB64: () => string;
  setSenderSignature: (value: Uint8Array | string) => void;

  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => SignedTransaction$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: SignedTransaction$AsClass) => SignedTransaction$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: SignedTransaction$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => SignedTransaction$AsClass;
  static deserializeBinaryFromReader: (message: SignedTransaction$AsClass, reader: jspb.BinaryReader) => SignedTransaction$AsClass;
}

export type SignedTransaction$AsClass$AsObject = {
  rawTxnBytes: Uint8Array | string,
  senderPublicKey: Uint8Array | string,
  senderSignature: Uint8Array | string,
}

export class SignedTransactionWithProof$AsClass extends jspb.Message {
  getVersion: () => number;
  setVersion: (value: number) => void;

  hasSignedTransaction: () => boolean;
  clearSignedTransaction: () => void;
  getSignedTransaction: () => ?SignedTransaction$AsClass;
  setSignedTransaction: (value?: SignedTransaction$AsClass) => void;

  hasProof: () => boolean;
  clearProof: () => void;
  getProof: () => ?proof_pb.SignedTransactionProof$AsClass;
  setProof: (value?: proof_pb.SignedTransactionProof$AsClass) => void;

  hasEvents: () => boolean;
  clearEvents: () => void;
  getEvents: () => ?events_pb.EventsList$AsClass;
  setEvents: (value?: events_pb.EventsList$AsClass) => void;

  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => SignedTransactionWithProof$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: SignedTransactionWithProof$AsClass) => SignedTransactionWithProof$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: SignedTransactionWithProof$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => SignedTransactionWithProof$AsClass;
  static deserializeBinaryFromReader: (message: SignedTransactionWithProof$AsClass, reader: jspb.BinaryReader) => SignedTransactionWithProof$AsClass;
}

export type SignedTransactionWithProof$AsClass$AsObject = {
  version: number,
  signedTransaction?: SignedTransaction$AsClass$AsObject,
  proof?: proof_pb.SignedTransactionProof$AsClass$AsObject,
  events?: events_pb.EventsList$AsClass$AsObject,
}

export class SignedTransactionsBlock$AsClass extends jspb.Message {
  clearTransactionsList: () => void;
  getTransactionsList: () => Array<SignedTransaction$AsClass>;
  setTransactionsList: (value: Array<SignedTransaction$AsClass>) => void;
  addTransactions: (value?: SignedTransaction$AsClass, index?: number) => SignedTransaction$AsClass;

  getValidatorPublicKey: () => Uint8Array | string;
  getValidatorPublicKey_asU8: () => Uint8Array;
  getValidatorPublicKey_asB64: () => string;
  setValidatorPublicKey: (value: Uint8Array | string) => void;

  getValidatorSignature: () => Uint8Array | string;
  getValidatorSignature_asU8: () => Uint8Array;
  getValidatorSignature_asB64: () => string;
  setValidatorSignature: (value: Uint8Array | string) => void;

  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => SignedTransactionsBlock$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: SignedTransactionsBlock$AsClass) => SignedTransactionsBlock$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: SignedTransactionsBlock$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => SignedTransactionsBlock$AsClass;
  static deserializeBinaryFromReader: (message: SignedTransactionsBlock$AsClass, reader: jspb.BinaryReader) => SignedTransactionsBlock$AsClass;
}

export type SignedTransactionsBlock$AsClass$AsObject = {
  transactionsList: Array<SignedTransaction$AsClass$AsObject>,
  validatorPublicKey: Uint8Array | string,
  validatorSignature: Uint8Array | string,
}

export class WriteSet$AsClass extends jspb.Message {
  clearWriteSetList: () => void;
  getWriteSetList: () => Array<WriteOp$AsClass>;
  setWriteSetList: (value: Array<WriteOp$AsClass>) => void;
  addWriteSet: (value?: WriteOp$AsClass, index?: number) => WriteOp$AsClass;

  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => WriteSet$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: WriteSet$AsClass) => WriteSet$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: WriteSet$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => WriteSet$AsClass;
  static deserializeBinaryFromReader: (message: WriteSet$AsClass, reader: jspb.BinaryReader) => WriteSet$AsClass;
}

export type WriteSet$AsClass$AsObject = {
  writeSetList: Array<WriteOp$AsClass$AsObject>,
}

export class WriteOp$AsClass extends jspb.Message {
  hasAccessPath: () => boolean;
  clearAccessPath: () => void;
  getAccessPath: () => ?access_path_pb.AccessPath$AsClass;
  setAccessPath: (value?: access_path_pb.AccessPath$AsClass) => void;

  getValue: () => Uint8Array | string;
  getValue_asU8: () => Uint8Array;
  getValue_asB64: () => string;
  setValue: (value: Uint8Array | string) => void;

  getType: () => $Values<typeof WriteOpType>;
  setType: (value: $Values<typeof WriteOpType>) => void;

  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => WriteOp$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: WriteOp$AsClass) => WriteOp$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: WriteOp$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => WriteOp$AsClass;
  static deserializeBinaryFromReader: (message: WriteOp$AsClass, reader: jspb.BinaryReader) => WriteOp$AsClass;
}

export type WriteOp$AsClass$AsObject = {
  accessPath?: access_path_pb.AccessPath$AsClass$AsObject,
  value: Uint8Array | string,
  type: $Values<typeof WriteOpType>,
}

export class AccountState$AsClass extends jspb.Message {
  getAddress: () => Uint8Array | string;
  getAddress_asU8: () => Uint8Array;
  getAddress_asB64: () => string;
  setAddress: (value: Uint8Array | string) => void;

  getBlob: () => Uint8Array | string;
  getBlob_asU8: () => Uint8Array;
  getBlob_asB64: () => string;
  setBlob: (value: Uint8Array | string) => void;

  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => AccountState$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: AccountState$AsClass) => AccountState$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: AccountState$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => AccountState$AsClass;
  static deserializeBinaryFromReader: (message: AccountState$AsClass, reader: jspb.BinaryReader) => AccountState$AsClass;
}

export type AccountState$AsClass$AsObject = {
  address: Uint8Array | string,
  blob: Uint8Array | string,
}

export class TransactionToCommit$AsClass extends jspb.Message {
  hasSignedTxn: () => boolean;
  clearSignedTxn: () => void;
  getSignedTxn: () => ?SignedTransaction$AsClass;
  setSignedTxn: (value?: SignedTransaction$AsClass) => void;

  clearAccountStatesList: () => void;
  getAccountStatesList: () => Array<AccountState$AsClass>;
  setAccountStatesList: (value: Array<AccountState$AsClass>) => void;
  addAccountStates: (value?: AccountState$AsClass, index?: number) => AccountState$AsClass;

  clearEventsList: () => void;
  getEventsList: () => Array<events_pb.Event$AsClass>;
  setEventsList: (value: Array<events_pb.Event$AsClass>) => void;
  addEvents: (value?: events_pb.Event$AsClass, index?: number) => events_pb.Event$AsClass;

  getGasUsed: () => number;
  setGasUsed: (value: number) => void;

  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => TransactionToCommit$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: TransactionToCommit$AsClass) => TransactionToCommit$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: TransactionToCommit$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => TransactionToCommit$AsClass;
  static deserializeBinaryFromReader: (message: TransactionToCommit$AsClass, reader: jspb.BinaryReader) => TransactionToCommit$AsClass;
}

export type TransactionToCommit$AsClass$AsObject = {
  signedTxn?: SignedTransaction$AsClass$AsObject,
  accountStatesList: Array<AccountState$AsClass$AsObject>,
  eventsList: Array<events_pb.Event$AsClass$AsObject>,
  gasUsed: number,
}

export class TransactionListWithProof$AsClass extends jspb.Message {
  clearTransactionsList: () => void;
  getTransactionsList: () => Array<SignedTransaction$AsClass>;
  setTransactionsList: (value: Array<SignedTransaction$AsClass>) => void;
  addTransactions: (value?: SignedTransaction$AsClass, index?: number) => SignedTransaction$AsClass;

  clearInfosList: () => void;
  getInfosList: () => Array<transaction_info_pb.TransactionInfo$AsClass>;
  setInfosList: (value: Array<transaction_info_pb.TransactionInfo$AsClass>) => void;
  addInfos: (value?: transaction_info_pb.TransactionInfo$AsClass, index?: number) => transaction_info_pb.TransactionInfo$AsClass;

  hasEventsForVersions: () => boolean;
  clearEventsForVersions: () => void;
  getEventsForVersions: () => ?events_pb.EventsForVersions$AsClass;
  setEventsForVersions: (value?: events_pb.EventsForVersions$AsClass) => void;

  hasFirstTransactionVersion: () => boolean;
  clearFirstTransactionVersion: () => void;
  getFirstTransactionVersion: () => ?google_protobuf_wrappers_pb.UInt64Value$AsClass;
  setFirstTransactionVersion: (value?: google_protobuf_wrappers_pb.UInt64Value$AsClass) => void;

  hasProofOfFirstTransaction: () => boolean;
  clearProofOfFirstTransaction: () => void;
  getProofOfFirstTransaction: () => ?proof_pb.AccumulatorProof$AsClass;
  setProofOfFirstTransaction: (value?: proof_pb.AccumulatorProof$AsClass) => void;

  hasProofOfLastTransaction: () => boolean;
  clearProofOfLastTransaction: () => void;
  getProofOfLastTransaction: () => ?proof_pb.AccumulatorProof$AsClass;
  setProofOfLastTransaction: (value?: proof_pb.AccumulatorProof$AsClass) => void;

  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => TransactionListWithProof$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: TransactionListWithProof$AsClass) => TransactionListWithProof$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: TransactionListWithProof$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => TransactionListWithProof$AsClass;
  static deserializeBinaryFromReader: (message: TransactionListWithProof$AsClass, reader: jspb.BinaryReader) => TransactionListWithProof$AsClass;
}

export type TransactionListWithProof$AsClass$AsObject = {
  transactionsList: Array<SignedTransaction$AsClass$AsObject>,
  infosList: Array<transaction_info_pb.TransactionInfo$AsClass$AsObject>,
  eventsForVersions?: events_pb.EventsForVersions$AsClass$AsObject,
  firstTransactionVersion?: google_protobuf_wrappers_pb.UInt64Value$AsClass$AsObject,
  proofOfFirstTransaction?: proof_pb.AccumulatorProof$AsClass$AsObject,
  proofOfLastTransaction?: proof_pb.AccumulatorProof$AsClass$AsObject,
}

export const WriteOpType = Object.freeze({
  WRITE: 0,
  DELETE: 1,
})

export const WriteOpType$ReverseLookUp = Object.freeze({
  "0": "WRITE",
  "1": "DELETE",
})

