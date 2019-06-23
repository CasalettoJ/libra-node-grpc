// @flow
// package: types
// file: events.proto

import * as jspb from "google-protobuf";
import * as access_path_pb from "./access_path_pb.flow.js";
import * as proof_pb from "./proof_pb.flow.js";

export class Event$AsClass extends jspb.Message {
  hasAccessPath: () => boolean;
  clearAccessPath: () => void;
  getAccessPath: () => ?access_path_pb.AccessPath$AsClass;
  setAccessPath: (value?: access_path_pb.AccessPath$AsClass) => void;

  getSequenceNumber: () => number;
  setSequenceNumber: (value: number) => void;

  getEventData: () => Uint8Array | string;
  getEventData_asU8: () => Uint8Array;
  getEventData_asB64: () => string;
  setEventData: (value: Uint8Array | string) => void;

  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => Event$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: Event$AsClass) => Event$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: Event$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => Event$AsClass;
  static deserializeBinaryFromReader: (message: Event$AsClass, reader: jspb.BinaryReader) => Event$AsClass;
}

export type Event$AsClass$AsObject = {
  accessPath?: access_path_pb.AccessPath$AsClass$AsObject,
  sequenceNumber: number,
  eventData: Uint8Array | string,
}

export class EventWithProof$AsClass extends jspb.Message {
  getTransactionVersion: () => number;
  setTransactionVersion: (value: number) => void;

  getEventIndex: () => number;
  setEventIndex: (value: number) => void;

  hasEvent: () => boolean;
  clearEvent: () => void;
  getEvent: () => ?Event$AsClass;
  setEvent: (value?: Event$AsClass) => void;

  hasProof: () => boolean;
  clearProof: () => void;
  getProof: () => ?proof_pb.EventProof$AsClass;
  setProof: (value?: proof_pb.EventProof$AsClass) => void;

  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => EventWithProof$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: EventWithProof$AsClass) => EventWithProof$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: EventWithProof$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => EventWithProof$AsClass;
  static deserializeBinaryFromReader: (message: EventWithProof$AsClass, reader: jspb.BinaryReader) => EventWithProof$AsClass;
}

export type EventWithProof$AsClass$AsObject = {
  transactionVersion: number,
  eventIndex: number,
  event?: Event$AsClass$AsObject,
  proof?: proof_pb.EventProof$AsClass$AsObject,
}

export class EventsList$AsClass extends jspb.Message {
  clearEventsList: () => void;
  getEventsList: () => Array<Event$AsClass>;
  setEventsList: (value: Array<Event$AsClass>) => void;
  addEvents: (value?: Event$AsClass, index?: number) => Event$AsClass;

  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => EventsList$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: EventsList$AsClass) => EventsList$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: EventsList$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => EventsList$AsClass;
  static deserializeBinaryFromReader: (message: EventsList$AsClass, reader: jspb.BinaryReader) => EventsList$AsClass;
}

export type EventsList$AsClass$AsObject = {
  eventsList: Array<Event$AsClass$AsObject>,
}

export class EventsForVersions$AsClass extends jspb.Message {
  clearEventsForVersionList: () => void;
  getEventsForVersionList: () => Array<EventsList$AsClass>;
  setEventsForVersionList: (value: Array<EventsList$AsClass>) => void;
  addEventsForVersion: (value?: EventsList$AsClass, index?: number) => EventsList$AsClass;

  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => EventsForVersions$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: EventsForVersions$AsClass) => EventsForVersions$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: EventsForVersions$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => EventsForVersions$AsClass;
  static deserializeBinaryFromReader: (message: EventsForVersions$AsClass, reader: jspb.BinaryReader) => EventsForVersions$AsClass;
}

export type EventsForVersions$AsClass$AsObject = {
  eventsForVersionList: Array<EventsList$AsClass$AsObject>,
}

