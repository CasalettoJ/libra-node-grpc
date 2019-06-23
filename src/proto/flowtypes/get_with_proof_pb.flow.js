// @flow
// package: types
// file: get_with_proof.proto

import * as jspb from "google-protobuf";
import * as access_path_pb from "./access_path_pb.flow.js";
import * as account_state_blob_pb from "./account_state_blob_pb.flow.js";
import * as events_pb from "./events_pb.flow.js";
import * as ledger_info_pb from "./ledger_info_pb.flow.js";
import * as transaction_pb from "./transaction_pb.flow.js";
import * as validator_change_pb from "./validator_change_pb.flow.js";

export class UpdateToLatestLedgerRequest$AsClass extends jspb.Message {
  getClientKnownVersion: () => number;
  setClientKnownVersion: (value: number) => void;

  clearRequestedItemsList: () => void;
  getRequestedItemsList: () => Array<RequestItem$AsClass>;
  setRequestedItemsList: (value: Array<RequestItem$AsClass>) => void;
  addRequestedItems: (value?: RequestItem$AsClass, index?: number) => RequestItem$AsClass;

  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => UpdateToLatestLedgerRequest$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: UpdateToLatestLedgerRequest$AsClass) => UpdateToLatestLedgerRequest$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: UpdateToLatestLedgerRequest$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => UpdateToLatestLedgerRequest$AsClass;
  static deserializeBinaryFromReader: (message: UpdateToLatestLedgerRequest$AsClass, reader: jspb.BinaryReader) => UpdateToLatestLedgerRequest$AsClass;
}

export type UpdateToLatestLedgerRequest$AsClass$AsObject = {
  clientKnownVersion: number,
  requestedItemsList: Array<RequestItem$AsClass$AsObject>,
}

export class RequestItem$AsClass extends jspb.Message {
  hasGetAccountStateRequest: () => boolean;
  clearGetAccountStateRequest: () => void;
  getGetAccountStateRequest: () => ?GetAccountStateRequest$AsClass;
  setGetAccountStateRequest: (value?: GetAccountStateRequest$AsClass) => void;

  hasGetAccountTransactionBySequenceNumberRequest: () => boolean;
  clearGetAccountTransactionBySequenceNumberRequest: () => void;
  getGetAccountTransactionBySequenceNumberRequest: () => ?GetAccountTransactionBySequenceNumberRequest$AsClass;
  setGetAccountTransactionBySequenceNumberRequest: (value?: GetAccountTransactionBySequenceNumberRequest$AsClass) => void;

  hasGetEventsByEventAccessPathRequest: () => boolean;
  clearGetEventsByEventAccessPathRequest: () => void;
  getGetEventsByEventAccessPathRequest: () => ?GetEventsByEventAccessPathRequest$AsClass;
  setGetEventsByEventAccessPathRequest: (value?: GetEventsByEventAccessPathRequest$AsClass) => void;

  hasGetTransactionsRequest: () => boolean;
  clearGetTransactionsRequest: () => void;
  getGetTransactionsRequest: () => ?GetTransactionsRequest$AsClass;
  setGetTransactionsRequest: (value?: GetTransactionsRequest$AsClass) => void;

  getRequestedItemsCase: () => $Values<typeof RequestItem$AsClass_RequestedItemsCase>;
  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => RequestItem$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: RequestItem$AsClass) => RequestItem$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: RequestItem$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => RequestItem$AsClass;
  static deserializeBinaryFromReader: (message: RequestItem$AsClass, reader: jspb.BinaryReader) => RequestItem$AsClass;
}

export type RequestItem$AsClass$AsObject = {
  getAccountStateRequest?: GetAccountStateRequest$AsClass$AsObject,
  getAccountTransactionBySequenceNumberRequest?: GetAccountTransactionBySequenceNumberRequest$AsClass$AsObject,
  getEventsByEventAccessPathRequest?: GetEventsByEventAccessPathRequest$AsClass$AsObject,
  getTransactionsRequest?: GetTransactionsRequest$AsClass$AsObject,
}

export const RequestItem$AsClass_RequestedItemsCase = {
  REQUESTED_ITEMS_NOT_SET: 0,
  GET_ACCOUNT_STATE_REQUEST: 1,
  GET_ACCOUNT_TRANSACTION_BY_SEQUENCE_NUMBER_REQUEST: 2,
  GET_EVENTS_BY_EVENT_ACCESS_PATH_REQUEST: 3,
  GET_TRANSACTIONS_REQUEST: 4,
}

export class UpdateToLatestLedgerResponse$AsClass extends jspb.Message {
  clearResponseItemsList: () => void;
  getResponseItemsList: () => Array<ResponseItem$AsClass>;
  setResponseItemsList: (value: Array<ResponseItem$AsClass>) => void;
  addResponseItems: (value?: ResponseItem$AsClass, index?: number) => ResponseItem$AsClass;

  hasLedgerInfoWithSigs: () => boolean;
  clearLedgerInfoWithSigs: () => void;
  getLedgerInfoWithSigs: () => ?ledger_info_pb.LedgerInfoWithSignatures$AsClass;
  setLedgerInfoWithSigs: (value?: ledger_info_pb.LedgerInfoWithSignatures$AsClass) => void;

  clearValidatorChangeEventsList: () => void;
  getValidatorChangeEventsList: () => Array<validator_change_pb.ValidatorChangeEventWithProof$AsClass>;
  setValidatorChangeEventsList: (value: Array<validator_change_pb.ValidatorChangeEventWithProof$AsClass>) => void;
  addValidatorChangeEvents: (value?: validator_change_pb.ValidatorChangeEventWithProof$AsClass, index?: number) => validator_change_pb.ValidatorChangeEventWithProof$AsClass;

  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => UpdateToLatestLedgerResponse$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: UpdateToLatestLedgerResponse$AsClass) => UpdateToLatestLedgerResponse$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: UpdateToLatestLedgerResponse$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => UpdateToLatestLedgerResponse$AsClass;
  static deserializeBinaryFromReader: (message: UpdateToLatestLedgerResponse$AsClass, reader: jspb.BinaryReader) => UpdateToLatestLedgerResponse$AsClass;
}

export type UpdateToLatestLedgerResponse$AsClass$AsObject = {
  responseItemsList: Array<ResponseItem$AsClass$AsObject>,
  ledgerInfoWithSigs?: ledger_info_pb.LedgerInfoWithSignatures$AsClass$AsObject,
  validatorChangeEventsList: Array<validator_change_pb.ValidatorChangeEventWithProof$AsClass$AsObject>,
}

export class ResponseItem$AsClass extends jspb.Message {
  hasGetAccountStateResponse: () => boolean;
  clearGetAccountStateResponse: () => void;
  getGetAccountStateResponse: () => ?GetAccountStateResponse$AsClass;
  setGetAccountStateResponse: (value?: GetAccountStateResponse$AsClass) => void;

  hasGetAccountTransactionBySequenceNumberResponse: () => boolean;
  clearGetAccountTransactionBySequenceNumberResponse: () => void;
  getGetAccountTransactionBySequenceNumberResponse: () => ?GetAccountTransactionBySequenceNumberResponse$AsClass;
  setGetAccountTransactionBySequenceNumberResponse: (value?: GetAccountTransactionBySequenceNumberResponse$AsClass) => void;

  hasGetEventsByEventAccessPathResponse: () => boolean;
  clearGetEventsByEventAccessPathResponse: () => void;
  getGetEventsByEventAccessPathResponse: () => ?GetEventsByEventAccessPathResponse$AsClass;
  setGetEventsByEventAccessPathResponse: (value?: GetEventsByEventAccessPathResponse$AsClass) => void;

  hasGetTransactionsResponse: () => boolean;
  clearGetTransactionsResponse: () => void;
  getGetTransactionsResponse: () => ?GetTransactionsResponse$AsClass;
  setGetTransactionsResponse: (value?: GetTransactionsResponse$AsClass) => void;

  getResponseItemsCase: () => $Values<typeof ResponseItem$AsClass_ResponseItemsCase>;
  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => ResponseItem$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: ResponseItem$AsClass) => ResponseItem$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: ResponseItem$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => ResponseItem$AsClass;
  static deserializeBinaryFromReader: (message: ResponseItem$AsClass, reader: jspb.BinaryReader) => ResponseItem$AsClass;
}

export type ResponseItem$AsClass$AsObject = {
  getAccountStateResponse?: GetAccountStateResponse$AsClass$AsObject,
  getAccountTransactionBySequenceNumberResponse?: GetAccountTransactionBySequenceNumberResponse$AsClass$AsObject,
  getEventsByEventAccessPathResponse?: GetEventsByEventAccessPathResponse$AsClass$AsObject,
  getTransactionsResponse?: GetTransactionsResponse$AsClass$AsObject,
}

export const ResponseItem$AsClass_ResponseItemsCase = {
  RESPONSE_ITEMS_NOT_SET: 0,
  GET_ACCOUNT_STATE_RESPONSE: 3,
  GET_ACCOUNT_TRANSACTION_BY_SEQUENCE_NUMBER_RESPONSE: 4,
  GET_EVENTS_BY_EVENT_ACCESS_PATH_RESPONSE: 5,
  GET_TRANSACTIONS_RESPONSE: 6,
}

export class GetAccountStateRequest$AsClass extends jspb.Message {
  getAddress: () => Uint8Array | string;
  getAddress_asU8: () => Uint8Array;
  getAddress_asB64: () => string;
  setAddress: (value: Uint8Array | string) => void;

  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => GetAccountStateRequest$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: GetAccountStateRequest$AsClass) => GetAccountStateRequest$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: GetAccountStateRequest$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => GetAccountStateRequest$AsClass;
  static deserializeBinaryFromReader: (message: GetAccountStateRequest$AsClass, reader: jspb.BinaryReader) => GetAccountStateRequest$AsClass;
}

export type GetAccountStateRequest$AsClass$AsObject = {
  address: Uint8Array | string,
}

export class GetAccountStateResponse$AsClass extends jspb.Message {
  hasAccountStateWithProof: () => boolean;
  clearAccountStateWithProof: () => void;
  getAccountStateWithProof: () => ?account_state_blob_pb.AccountStateWithProof$AsClass;
  setAccountStateWithProof: (value?: account_state_blob_pb.AccountStateWithProof$AsClass) => void;

  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => GetAccountStateResponse$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: GetAccountStateResponse$AsClass) => GetAccountStateResponse$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: GetAccountStateResponse$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => GetAccountStateResponse$AsClass;
  static deserializeBinaryFromReader: (message: GetAccountStateResponse$AsClass, reader: jspb.BinaryReader) => GetAccountStateResponse$AsClass;
}

export type GetAccountStateResponse$AsClass$AsObject = {
  accountStateWithProof?: account_state_blob_pb.AccountStateWithProof$AsClass$AsObject,
}

export class GetAccountTransactionBySequenceNumberRequest$AsClass extends jspb.Message {
  getAccount: () => Uint8Array | string;
  getAccount_asU8: () => Uint8Array;
  getAccount_asB64: () => string;
  setAccount: (value: Uint8Array | string) => void;

  getSequenceNumber: () => number;
  setSequenceNumber: (value: number) => void;

  getFetchEvents: () => boolean;
  setFetchEvents: (value: boolean) => void;

  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => GetAccountTransactionBySequenceNumberRequest$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: GetAccountTransactionBySequenceNumberRequest$AsClass) => GetAccountTransactionBySequenceNumberRequest$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: GetAccountTransactionBySequenceNumberRequest$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => GetAccountTransactionBySequenceNumberRequest$AsClass;
  static deserializeBinaryFromReader: (message: GetAccountTransactionBySequenceNumberRequest$AsClass, reader: jspb.BinaryReader) => GetAccountTransactionBySequenceNumberRequest$AsClass;
}

export type GetAccountTransactionBySequenceNumberRequest$AsClass$AsObject = {
  account: Uint8Array | string,
  sequenceNumber: number,
  fetchEvents: boolean,
}

export class GetAccountTransactionBySequenceNumberResponse$AsClass extends jspb.Message {
  hasSignedTransactionWithProof: () => boolean;
  clearSignedTransactionWithProof: () => void;
  getSignedTransactionWithProof: () => ?transaction_pb.SignedTransactionWithProof$AsClass;
  setSignedTransactionWithProof: (value?: transaction_pb.SignedTransactionWithProof$AsClass) => void;

  hasProofOfCurrentSequenceNumber: () => boolean;
  clearProofOfCurrentSequenceNumber: () => void;
  getProofOfCurrentSequenceNumber: () => ?account_state_blob_pb.AccountStateWithProof$AsClass;
  setProofOfCurrentSequenceNumber: (value?: account_state_blob_pb.AccountStateWithProof$AsClass) => void;

  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => GetAccountTransactionBySequenceNumberResponse$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: GetAccountTransactionBySequenceNumberResponse$AsClass) => GetAccountTransactionBySequenceNumberResponse$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: GetAccountTransactionBySequenceNumberResponse$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => GetAccountTransactionBySequenceNumberResponse$AsClass;
  static deserializeBinaryFromReader: (message: GetAccountTransactionBySequenceNumberResponse$AsClass, reader: jspb.BinaryReader) => GetAccountTransactionBySequenceNumberResponse$AsClass;
}

export type GetAccountTransactionBySequenceNumberResponse$AsClass$AsObject = {
  signedTransactionWithProof?: transaction_pb.SignedTransactionWithProof$AsClass$AsObject,
  proofOfCurrentSequenceNumber?: account_state_blob_pb.AccountStateWithProof$AsClass$AsObject,
}

export class GetEventsByEventAccessPathRequest$AsClass extends jspb.Message {
  hasAccessPath: () => boolean;
  clearAccessPath: () => void;
  getAccessPath: () => ?access_path_pb.AccessPath$AsClass;
  setAccessPath: (value?: access_path_pb.AccessPath$AsClass) => void;

  getStartEventSeqNum: () => number;
  setStartEventSeqNum: (value: number) => void;

  getAscending: () => boolean;
  setAscending: (value: boolean) => void;

  getLimit: () => number;
  setLimit: (value: number) => void;

  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => GetEventsByEventAccessPathRequest$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: GetEventsByEventAccessPathRequest$AsClass) => GetEventsByEventAccessPathRequest$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: GetEventsByEventAccessPathRequest$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => GetEventsByEventAccessPathRequest$AsClass;
  static deserializeBinaryFromReader: (message: GetEventsByEventAccessPathRequest$AsClass, reader: jspb.BinaryReader) => GetEventsByEventAccessPathRequest$AsClass;
}

export type GetEventsByEventAccessPathRequest$AsClass$AsObject = {
  accessPath?: access_path_pb.AccessPath$AsClass$AsObject,
  startEventSeqNum: number,
  ascending: boolean,
  limit: number,
}

export class GetEventsByEventAccessPathResponse$AsClass extends jspb.Message {
  clearEventsWithProofList: () => void;
  getEventsWithProofList: () => Array<events_pb.EventWithProof$AsClass>;
  setEventsWithProofList: (value: Array<events_pb.EventWithProof$AsClass>) => void;
  addEventsWithProof: (value?: events_pb.EventWithProof$AsClass, index?: number) => events_pb.EventWithProof$AsClass;

  hasProofOfLatestEvent: () => boolean;
  clearProofOfLatestEvent: () => void;
  getProofOfLatestEvent: () => ?account_state_blob_pb.AccountStateWithProof$AsClass;
  setProofOfLatestEvent: (value?: account_state_blob_pb.AccountStateWithProof$AsClass) => void;

  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => GetEventsByEventAccessPathResponse$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: GetEventsByEventAccessPathResponse$AsClass) => GetEventsByEventAccessPathResponse$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: GetEventsByEventAccessPathResponse$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => GetEventsByEventAccessPathResponse$AsClass;
  static deserializeBinaryFromReader: (message: GetEventsByEventAccessPathResponse$AsClass, reader: jspb.BinaryReader) => GetEventsByEventAccessPathResponse$AsClass;
}

export type GetEventsByEventAccessPathResponse$AsClass$AsObject = {
  eventsWithProofList: Array<events_pb.EventWithProof$AsClass$AsObject>,
  proofOfLatestEvent?: account_state_blob_pb.AccountStateWithProof$AsClass$AsObject,
}

export class GetTransactionsRequest$AsClass extends jspb.Message {
  getStartVersion: () => number;
  setStartVersion: (value: number) => void;

  getLimit: () => number;
  setLimit: (value: number) => void;

  getFetchEvents: () => boolean;
  setFetchEvents: (value: boolean) => void;

  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => GetTransactionsRequest$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: GetTransactionsRequest$AsClass) => GetTransactionsRequest$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: GetTransactionsRequest$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => GetTransactionsRequest$AsClass;
  static deserializeBinaryFromReader: (message: GetTransactionsRequest$AsClass, reader: jspb.BinaryReader) => GetTransactionsRequest$AsClass;
}

export type GetTransactionsRequest$AsClass$AsObject = {
  startVersion: number,
  limit: number,
  fetchEvents: boolean,
}

export class GetTransactionsResponse$AsClass extends jspb.Message {
  hasTxnListWithProof: () => boolean;
  clearTxnListWithProof: () => void;
  getTxnListWithProof: () => ?transaction_pb.TransactionListWithProof$AsClass;
  setTxnListWithProof: (value?: transaction_pb.TransactionListWithProof$AsClass) => void;

  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => GetTransactionsResponse$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: GetTransactionsResponse$AsClass) => GetTransactionsResponse$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: GetTransactionsResponse$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => GetTransactionsResponse$AsClass;
  static deserializeBinaryFromReader: (message: GetTransactionsResponse$AsClass, reader: jspb.BinaryReader) => GetTransactionsResponse$AsClass;
}

export type GetTransactionsResponse$AsClass$AsObject = {
  txnListWithProof?: transaction_pb.TransactionListWithProof$AsClass$AsObject,
}

