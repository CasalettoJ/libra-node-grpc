// @flow
// package: debug
// file: node_debug_interface.proto

import * as jspb from "google-protobuf";

export class GetNodeDetailsRequest$AsClass extends jspb.Message {
  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => GetNodeDetailsRequest$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: GetNodeDetailsRequest$AsClass) => GetNodeDetailsRequest$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: GetNodeDetailsRequest$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => GetNodeDetailsRequest$AsClass;
  static deserializeBinaryFromReader: (message: GetNodeDetailsRequest$AsClass, reader: jspb.BinaryReader) => GetNodeDetailsRequest$AsClass;
}

export type GetNodeDetailsRequest$AsClass$AsObject = {
}

export class GetNodeDetailsResponse$AsClass extends jspb.Message {
  getStatsMap: () => jspb.Map<string, string>;
  clearStatsMap: () => void;
  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => GetNodeDetailsResponse$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: GetNodeDetailsResponse$AsClass) => GetNodeDetailsResponse$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: GetNodeDetailsResponse$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => GetNodeDetailsResponse$AsClass;
  static deserializeBinaryFromReader: (message: GetNodeDetailsResponse$AsClass, reader: jspb.BinaryReader) => GetNodeDetailsResponse$AsClass;
}

export type GetNodeDetailsResponse$AsClass$AsObject = {
  statsMap: Array<[string, string]>,
}

export class DumpJemallocHeapProfileRequest$AsClass extends jspb.Message {
  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => DumpJemallocHeapProfileRequest$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: DumpJemallocHeapProfileRequest$AsClass) => DumpJemallocHeapProfileRequest$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: DumpJemallocHeapProfileRequest$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => DumpJemallocHeapProfileRequest$AsClass;
  static deserializeBinaryFromReader: (message: DumpJemallocHeapProfileRequest$AsClass, reader: jspb.BinaryReader) => DumpJemallocHeapProfileRequest$AsClass;
}

export type DumpJemallocHeapProfileRequest$AsClass$AsObject = {
}

export class DumpJemallocHeapProfileResponse$AsClass extends jspb.Message {
  getStatusCode: () => number;
  setStatusCode: (value: number) => void;

  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => DumpJemallocHeapProfileResponse$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: DumpJemallocHeapProfileResponse$AsClass) => DumpJemallocHeapProfileResponse$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: DumpJemallocHeapProfileResponse$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => DumpJemallocHeapProfileResponse$AsClass;
  static deserializeBinaryFromReader: (message: DumpJemallocHeapProfileResponse$AsClass, reader: jspb.BinaryReader) => DumpJemallocHeapProfileResponse$AsClass;
}

export type DumpJemallocHeapProfileResponse$AsClass$AsObject = {
  statusCode: number,
}

