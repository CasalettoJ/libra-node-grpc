// @flow
// package: types
// file: validator_set.proto

import * as jspb from "google-protobuf";
import * as validator_public_keys_pb from "./validator_public_keys_pb.flow.js";

export class ValidatorSet$AsClass extends jspb.Message {
  clearValidatorPublicKeysList: () => void;
  getValidatorPublicKeysList: () => Array<validator_public_keys_pb.ValidatorPublicKeys$AsClass>;
  setValidatorPublicKeysList: (value: Array<validator_public_keys_pb.ValidatorPublicKeys$AsClass>) => void;
  addValidatorPublicKeys: (value?: validator_public_keys_pb.ValidatorPublicKeys$AsClass, index?: number) => validator_public_keys_pb.ValidatorPublicKeys$AsClass;

  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => ValidatorSet$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: ValidatorSet$AsClass) => ValidatorSet$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: ValidatorSet$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => ValidatorSet$AsClass;
  static deserializeBinaryFromReader: (message: ValidatorSet$AsClass, reader: jspb.BinaryReader) => ValidatorSet$AsClass;
}

export type ValidatorSet$AsClass$AsObject = {
  validatorPublicKeysList: Array<validator_public_keys_pb.ValidatorPublicKeys$AsClass$AsObject>,
}

