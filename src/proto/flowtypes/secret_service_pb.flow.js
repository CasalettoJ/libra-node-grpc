// @flow
// package: secret_service
// file: secret_service.proto

import * as jspb from "google-protobuf";

export class GenerateKeyRequest$AsClass extends jspb.Message {
  getSpec: () => $Values<typeof KeyType>;
  setSpec: (value: $Values<typeof KeyType>) => void;

  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => GenerateKeyRequest$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: GenerateKeyRequest$AsClass) => GenerateKeyRequest$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: GenerateKeyRequest$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => GenerateKeyRequest$AsClass;
  static deserializeBinaryFromReader: (message: GenerateKeyRequest$AsClass, reader: jspb.BinaryReader) => GenerateKeyRequest$AsClass;
}

export type GenerateKeyRequest$AsClass$AsObject = {
  spec: $Values<typeof KeyType>,
}

export class GenerateKeyResponse$AsClass extends jspb.Message {
  getKeyId: () => Uint8Array | string;
  getKeyId_asU8: () => Uint8Array;
  getKeyId_asB64: () => string;
  setKeyId: (value: Uint8Array | string) => void;

  getCode: () => $Values<typeof ErrorCode>;
  setCode: (value: $Values<typeof ErrorCode>) => void;

  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => GenerateKeyResponse$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: GenerateKeyResponse$AsClass) => GenerateKeyResponse$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: GenerateKeyResponse$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => GenerateKeyResponse$AsClass;
  static deserializeBinaryFromReader: (message: GenerateKeyResponse$AsClass, reader: jspb.BinaryReader) => GenerateKeyResponse$AsClass;
}

export type GenerateKeyResponse$AsClass$AsObject = {
  keyId: Uint8Array | string,
  code: $Values<typeof ErrorCode>,
}

export class PublicKeyRequest$AsClass extends jspb.Message {
  getKeyId: () => Uint8Array | string;
  getKeyId_asU8: () => Uint8Array;
  getKeyId_asB64: () => string;
  setKeyId: (value: Uint8Array | string) => void;

  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => PublicKeyRequest$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: PublicKeyRequest$AsClass) => PublicKeyRequest$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: PublicKeyRequest$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => PublicKeyRequest$AsClass;
  static deserializeBinaryFromReader: (message: PublicKeyRequest$AsClass, reader: jspb.BinaryReader) => PublicKeyRequest$AsClass;
}

export type PublicKeyRequest$AsClass$AsObject = {
  keyId: Uint8Array | string,
}

export class PublicKeyResponse$AsClass extends jspb.Message {
  getPublicKey: () => Uint8Array | string;
  getPublicKey_asU8: () => Uint8Array;
  getPublicKey_asB64: () => string;
  setPublicKey: (value: Uint8Array | string) => void;

  getCode: () => $Values<typeof ErrorCode>;
  setCode: (value: $Values<typeof ErrorCode>) => void;

  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => PublicKeyResponse$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: PublicKeyResponse$AsClass) => PublicKeyResponse$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: PublicKeyResponse$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => PublicKeyResponse$AsClass;
  static deserializeBinaryFromReader: (message: PublicKeyResponse$AsClass, reader: jspb.BinaryReader) => PublicKeyResponse$AsClass;
}

export type PublicKeyResponse$AsClass$AsObject = {
  publicKey: Uint8Array | string,
  code: $Values<typeof ErrorCode>,
}

export class SignRequest$AsClass extends jspb.Message {
  getKeyId: () => Uint8Array | string;
  getKeyId_asU8: () => Uint8Array;
  getKeyId_asB64: () => string;
  setKeyId: (value: Uint8Array | string) => void;

  getMessageHash: () => Uint8Array | string;
  getMessageHash_asU8: () => Uint8Array;
  getMessageHash_asB64: () => string;
  setMessageHash: (value: Uint8Array | string) => void;

  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => SignRequest$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: SignRequest$AsClass) => SignRequest$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: SignRequest$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => SignRequest$AsClass;
  static deserializeBinaryFromReader: (message: SignRequest$AsClass, reader: jspb.BinaryReader) => SignRequest$AsClass;
}

export type SignRequest$AsClass$AsObject = {
  keyId: Uint8Array | string,
  messageHash: Uint8Array | string,
}

export class SignResponse$AsClass extends jspb.Message {
  getSignature: () => Uint8Array | string;
  getSignature_asU8: () => Uint8Array;
  getSignature_asB64: () => string;
  setSignature: (value: Uint8Array | string) => void;

  getCode: () => $Values<typeof ErrorCode>;
  setCode: (value: $Values<typeof ErrorCode>) => void;

  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => SignResponse$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: SignResponse$AsClass) => SignResponse$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: SignResponse$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => SignResponse$AsClass;
  static deserializeBinaryFromReader: (message: SignResponse$AsClass, reader: jspb.BinaryReader) => SignResponse$AsClass;
}

export type SignResponse$AsClass$AsObject = {
  signature: Uint8Array | string,
  code: $Values<typeof ErrorCode>,
}

export const ErrorCode = Object.freeze({
  SUCCESS: 0,
  KEYIDNOTFOUND: 1,
  WRONGLENGTH: 2,
  INVALIDPARAMETERS: 3,
  AUTHENTICATIONFAILED: 4,
  UNSPECIFIED: 5,
})

export const ErrorCode$ReverseLookUp = Object.freeze({
  "0": "SUCCESS",
  "1": "KEYIDNOTFOUND",
  "2": "WRONGLENGTH",
  "3": "INVALIDPARAMETERS",
  "4": "AUTHENTICATIONFAILED",
  "5": "UNSPECIFIED",
})

export const KeyType = Object.freeze({
  ED25519: 0,
  BLS12381: 1,
})

export const KeyType$ReverseLookUp = Object.freeze({
  "0": "ED25519",
  "1": "BLS12381",
})

