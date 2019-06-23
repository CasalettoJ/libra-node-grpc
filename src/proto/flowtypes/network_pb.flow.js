// @flow
// package: network
// file: network.proto

import * as jspb from "google-protobuf";

export class PeerInfo$AsClass extends jspb.Message {
  clearAddrsList: () => void;
  getAddrsList: () => Array<Uint8Array | string>;
  getAddrsList_asU8: () => Array<Uint8Array>;
  getAddrsList_asB64: () => Array<string>;
  setAddrsList: (value: Array<Uint8Array | string>) => void;
  addAddrs: (value: Uint8Array | string, index?: number) => Uint8Array | string;

  getEpoch: () => number;
  setEpoch: (value: number) => void;

  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => PeerInfo$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: PeerInfo$AsClass) => PeerInfo$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: PeerInfo$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => PeerInfo$AsClass;
  static deserializeBinaryFromReader: (message: PeerInfo$AsClass, reader: jspb.BinaryReader) => PeerInfo$AsClass;
}

export type PeerInfo$AsClass$AsObject = {
  addrsList: Array<Uint8Array | string>,
  epoch: number,
}

export class Note$AsClass extends jspb.Message {
  getPeerId: () => Uint8Array | string;
  getPeerId_asU8: () => Uint8Array;
  getPeerId_asB64: () => string;
  setPeerId: (value: Uint8Array | string) => void;

  getPeerInfo: () => Uint8Array | string;
  getPeerInfo_asU8: () => Uint8Array;
  getPeerInfo_asB64: () => string;
  setPeerInfo: (value: Uint8Array | string) => void;

  getSignature: () => Uint8Array | string;
  getSignature_asU8: () => Uint8Array;
  getSignature_asB64: () => string;
  setSignature: (value: Uint8Array | string) => void;

  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => Note$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: Note$AsClass) => Note$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: Note$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => Note$AsClass;
  static deserializeBinaryFromReader: (message: Note$AsClass, reader: jspb.BinaryReader) => Note$AsClass;
}

export type Note$AsClass$AsObject = {
  peerId: Uint8Array | string,
  peerInfo: Uint8Array | string,
  signature: Uint8Array | string,
}

export class DiscoveryMsg$AsClass extends jspb.Message {
  clearNotesList: () => void;
  getNotesList: () => Array<Note$AsClass>;
  setNotesList: (value: Array<Note$AsClass>) => void;
  addNotes: (value?: Note$AsClass, index?: number) => Note$AsClass;

  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => DiscoveryMsg$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: DiscoveryMsg$AsClass) => DiscoveryMsg$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: DiscoveryMsg$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => DiscoveryMsg$AsClass;
  static deserializeBinaryFromReader: (message: DiscoveryMsg$AsClass, reader: jspb.BinaryReader) => DiscoveryMsg$AsClass;
}

export type DiscoveryMsg$AsClass$AsObject = {
  notesList: Array<Note$AsClass$AsObject>,
}

export class IdentityMsg$AsClass extends jspb.Message {
  getPeerId: () => Uint8Array | string;
  getPeerId_asU8: () => Uint8Array;
  getPeerId_asB64: () => string;
  setPeerId: (value: Uint8Array | string) => void;

  clearSupportedProtocolsList: () => void;
  getSupportedProtocolsList: () => Array<Uint8Array | string>;
  getSupportedProtocolsList_asU8: () => Array<Uint8Array>;
  getSupportedProtocolsList_asB64: () => Array<string>;
  setSupportedProtocolsList: (value: Array<Uint8Array | string>) => void;
  addSupportedProtocols: (value: Uint8Array | string, index?: number) => Uint8Array | string;

  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => IdentityMsg$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: IdentityMsg$AsClass) => IdentityMsg$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: IdentityMsg$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => IdentityMsg$AsClass;
  static deserializeBinaryFromReader: (message: IdentityMsg$AsClass, reader: jspb.BinaryReader) => IdentityMsg$AsClass;
}

export type IdentityMsg$AsClass$AsObject = {
  peerId: Uint8Array | string,
  supportedProtocolsList: Array<Uint8Array | string>,
}

export class Ping$AsClass extends jspb.Message {
  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => Ping$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: Ping$AsClass) => Ping$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: Ping$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => Ping$AsClass;
  static deserializeBinaryFromReader: (message: Ping$AsClass, reader: jspb.BinaryReader) => Ping$AsClass;
}

export type Ping$AsClass$AsObject = {
}

export class Pong$AsClass extends jspb.Message {
  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => Pong$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: Pong$AsClass) => Pong$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: Pong$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => Pong$AsClass;
  static deserializeBinaryFromReader: (message: Pong$AsClass, reader: jspb.BinaryReader) => Pong$AsClass;
}

export type Pong$AsClass$AsObject = {
}

