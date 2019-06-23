// @flow
// package: types
// file: vm_errors.proto

import * as jspb from "google-protobuf";

export class VMValidationStatus$AsClass extends jspb.Message {
  getCode: () => $Values<typeof VMValidationStatusCode>;
  setCode: (value: $Values<typeof VMValidationStatusCode>) => void;

  getMessage: () => string;
  setMessage: (value: string) => void;

  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => VMValidationStatus$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: VMValidationStatus$AsClass) => VMValidationStatus$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: VMValidationStatus$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => VMValidationStatus$AsClass;
  static deserializeBinaryFromReader: (message: VMValidationStatus$AsClass, reader: jspb.BinaryReader) => VMValidationStatus$AsClass;
}

export type VMValidationStatus$AsClass$AsObject = {
  code: $Values<typeof VMValidationStatusCode>,
  message: string,
}

export class VMVerificationStatusList$AsClass extends jspb.Message {
  clearStatusListList: () => void;
  getStatusListList: () => Array<VMVerificationStatus$AsClass>;
  setStatusListList: (value: Array<VMVerificationStatus$AsClass>) => void;
  addStatusList: (value?: VMVerificationStatus$AsClass, index?: number) => VMVerificationStatus$AsClass;

  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => VMVerificationStatusList$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: VMVerificationStatusList$AsClass) => VMVerificationStatusList$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: VMVerificationStatusList$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => VMVerificationStatusList$AsClass;
  static deserializeBinaryFromReader: (message: VMVerificationStatusList$AsClass, reader: jspb.BinaryReader) => VMVerificationStatusList$AsClass;
}

export type VMVerificationStatusList$AsClass$AsObject = {
  statusListList: Array<VMVerificationStatus$AsClass$AsObject>,
}

export class VMVerificationStatus$AsClass extends jspb.Message {
  getStatusKind: () => $Values<typeof VMVerificationStatus$AsClass_StatusKind>;
  setStatusKind: (value: $Values<typeof VMVerificationStatus$AsClass_StatusKind>) => void;

  getModuleIdx: () => number;
  setModuleIdx: (value: number) => void;

  getErrorKind: () => $Values<typeof VMVerificationErrorKind>;
  setErrorKind: (value: $Values<typeof VMVerificationErrorKind>) => void;

  getMessage: () => string;
  setMessage: (value: string) => void;

  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => VMVerificationStatus$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: VMVerificationStatus$AsClass) => VMVerificationStatus$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: VMVerificationStatus$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => VMVerificationStatus$AsClass;
  static deserializeBinaryFromReader: (message: VMVerificationStatus$AsClass, reader: jspb.BinaryReader) => VMVerificationStatus$AsClass;
}

export type VMVerificationStatus$AsClass$AsObject = {
  statusKind: $Values<typeof VMVerificationStatus$AsClass_StatusKind>,
  moduleIdx: number,
  errorKind: $Values<typeof VMVerificationErrorKind>,
  message: string,
}

export const VMVerificationStatus$AsClass_StatusKind = Object.freeze({
  SCRIPT: 0,
  MODULE: 1,
})

export const VMVerificationStatus$AsClass_StatusKind$ReverseLookUp = Object.freeze({
  "0": "SCRIPT",
  "1": "MODULE",
})

export class AssertionFailure$AsClass extends jspb.Message {
  getAssertionErrorCode: () => number;
  setAssertionErrorCode: (value: number) => void;

  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => AssertionFailure$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: AssertionFailure$AsClass) => AssertionFailure$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: AssertionFailure$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => AssertionFailure$AsClass;
  static deserializeBinaryFromReader: (message: AssertionFailure$AsClass, reader: jspb.BinaryReader) => AssertionFailure$AsClass;
}

export type AssertionFailure$AsClass$AsObject = {
  assertionErrorCode: number,
}

export class ArithmeticError$AsClass extends jspb.Message {
  getErrorCode: () => $Values<typeof ArithmeticError$AsClass_ArithmeticErrorType>;
  setErrorCode: (value: $Values<typeof ArithmeticError$AsClass_ArithmeticErrorType>) => void;

  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => ArithmeticError$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: ArithmeticError$AsClass) => ArithmeticError$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: ArithmeticError$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => ArithmeticError$AsClass;
  static deserializeBinaryFromReader: (message: ArithmeticError$AsClass, reader: jspb.BinaryReader) => ArithmeticError$AsClass;
}

export type ArithmeticError$AsClass$AsObject = {
  errorCode: $Values<typeof ArithmeticError$AsClass_ArithmeticErrorType>,
}

export const ArithmeticError$AsClass_ArithmeticErrorType = Object.freeze({
  UNKNOWNARITHMETICERROR: 0,
  UNDERFLOW: 1,
  OVERFLOW: 2,
  DIVISIONBYZERO: 3,
})

export const ArithmeticError$AsClass_ArithmeticErrorType$ReverseLookUp = Object.freeze({
  "0": "UNKNOWNARITHMETICERROR",
  "1": "UNDERFLOW",
  "2": "OVERFLOW",
  "3": "DIVISIONBYZERO",
})

export class DynamicReferenceError$AsClass extends jspb.Message {
  getErrorCode: () => $Values<typeof DynamicReferenceError$AsClass_DynamicReferenceErrorType>;
  setErrorCode: (value: $Values<typeof DynamicReferenceError$AsClass_DynamicReferenceErrorType>) => void;

  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => DynamicReferenceError$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: DynamicReferenceError$AsClass) => DynamicReferenceError$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: DynamicReferenceError$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => DynamicReferenceError$AsClass;
  static deserializeBinaryFromReader: (message: DynamicReferenceError$AsClass, reader: jspb.BinaryReader) => DynamicReferenceError$AsClass;
}

export type DynamicReferenceError$AsClass$AsObject = {
  errorCode: $Values<typeof DynamicReferenceError$AsClass_DynamicReferenceErrorType>,
}

export const DynamicReferenceError$AsClass_DynamicReferenceErrorType = Object.freeze({
  UNKNOWNDYNAMICREFERENCEERROR: 0,
  MOVEOFBORROWEDRESOURCE: 1,
  GLOBALREFALREADYRELEASED: 2,
  MISSINGRELEASEREF: 3,
  GLOBALALREADYBORROWED: 4,
})

export const DynamicReferenceError$AsClass_DynamicReferenceErrorType$ReverseLookUp = Object.freeze({
  "0": "UNKNOWNDYNAMICREFERENCEERROR",
  "1": "MOVEOFBORROWEDRESOURCE",
  "2": "GLOBALREFALREADYRELEASED",
  "3": "MISSINGRELEASEREF",
  "4": "GLOBALALREADYBORROWED",
})

export class ExecutionStatus$AsClass extends jspb.Message {
  hasRuntimeStatus: () => boolean;
  clearRuntimeStatus: () => void;
  getRuntimeStatus: () => $Values<typeof RuntimeStatus>;
  setRuntimeStatus: (value: $Values<typeof RuntimeStatus>) => void;

  hasAssertionFailure: () => boolean;
  clearAssertionFailure: () => void;
  getAssertionFailure: () => ?AssertionFailure$AsClass;
  setAssertionFailure: (value?: AssertionFailure$AsClass) => void;

  hasArithmeticError: () => boolean;
  clearArithmeticError: () => void;
  getArithmeticError: () => ?ArithmeticError$AsClass;
  setArithmeticError: (value?: ArithmeticError$AsClass) => void;

  hasReferenceError: () => boolean;
  clearReferenceError: () => void;
  getReferenceError: () => ?DynamicReferenceError$AsClass;
  setReferenceError: (value?: DynamicReferenceError$AsClass) => void;

  getExecutionStatusCase: () => $Values<typeof ExecutionStatus$AsClass_ExecutionStatusCase>;
  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => ExecutionStatus$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: ExecutionStatus$AsClass) => ExecutionStatus$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: ExecutionStatus$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => ExecutionStatus$AsClass;
  static deserializeBinaryFromReader: (message: ExecutionStatus$AsClass, reader: jspb.BinaryReader) => ExecutionStatus$AsClass;
}

export type ExecutionStatus$AsClass$AsObject = {
  runtimeStatus: $Values<typeof RuntimeStatus>,
  assertionFailure?: AssertionFailure$AsClass$AsObject,
  arithmeticError?: ArithmeticError$AsClass$AsObject,
  referenceError?: DynamicReferenceError$AsClass$AsObject,
}

export const ExecutionStatus$AsClass_ExecutionStatusCase = {
  EXECUTION_STATUS_NOT_SET: 0,
  RUNTIME_STATUS: 1,
  ASSERTION_FAILURE: 2,
  ARITHMETIC_ERROR: 3,
  REFERENCE_ERROR: 4,
}

export class VMStatus$AsClass extends jspb.Message {
  hasValidation: () => boolean;
  clearValidation: () => void;
  getValidation: () => ?VMValidationStatus$AsClass;
  setValidation: (value?: VMValidationStatus$AsClass) => void;

  hasVerification: () => boolean;
  clearVerification: () => void;
  getVerification: () => ?VMVerificationStatusList$AsClass;
  setVerification: (value?: VMVerificationStatusList$AsClass) => void;

  hasInvariantViolation: () => boolean;
  clearInvariantViolation: () => void;
  getInvariantViolation: () => $Values<typeof VMInvariantViolationError>;
  setInvariantViolation: (value: $Values<typeof VMInvariantViolationError>) => void;

  hasDeserialization: () => boolean;
  clearDeserialization: () => void;
  getDeserialization: () => $Values<typeof BinaryError>;
  setDeserialization: (value: $Values<typeof BinaryError>) => void;

  hasExecution: () => boolean;
  clearExecution: () => void;
  getExecution: () => ?ExecutionStatus$AsClass;
  setExecution: (value?: ExecutionStatus$AsClass) => void;

  getErrorTypeCase: () => $Values<typeof VMStatus$AsClass_ErrorTypeCase>;
  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => VMStatus$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: VMStatus$AsClass) => VMStatus$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: VMStatus$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => VMStatus$AsClass;
  static deserializeBinaryFromReader: (message: VMStatus$AsClass, reader: jspb.BinaryReader) => VMStatus$AsClass;
}

export type VMStatus$AsClass$AsObject = {
  validation?: VMValidationStatus$AsClass$AsObject,
  verification?: VMVerificationStatusList$AsClass$AsObject,
  invariantViolation: $Values<typeof VMInvariantViolationError>,
  deserialization: $Values<typeof BinaryError>,
  execution?: ExecutionStatus$AsClass$AsObject,
}

export const VMStatus$AsClass_ErrorTypeCase = {
  ERROR_TYPE_NOT_SET: 0,
  VALIDATION: 1,
  VERIFICATION: 2,
  INVARIANT_VIOLATION: 3,
  DESERIALIZATION: 4,
  EXECUTION: 5,
}

export const VMValidationStatusCode = Object.freeze({
  UNKNOWNVALIDATIONSTATUS: 0,
  INVALIDSIGNATURE: 1,
  INVALIDAUTHKEY: 2,
  SEQUENCENUMBERTOOOLD: 3,
  SEQUENCENUMBERTOONEW: 4,
  INSUFFICIENTBALANCEFORTRANSACTIONFEE: 5,
  TRANSACTIONEXPIRED: 6,
  SENDINGACCOUNTDOESNOTEXIST: 7,
  REJECTEDWRITESET: 8,
  INVALIDWRITESET: 9,
  EXCEEDEDMAXTRANSACTIONSIZE: 10,
  UNKNOWNSCRIPT: 11,
  UNKNOWNMODULE: 12,
  MAXGASUNITSEXCEEDSMAXGASUNITSBOUND: 13,
  MAXGASUNITSBELOWMINTRANSACTIONGASUNITS: 14,
  GASUNITPRICEBELOWMINBOUND: 15,
  GASUNITPRICEABOVEMAXBOUND: 16,
})

export const VMValidationStatusCode$ReverseLookUp = Object.freeze({
  "0": "UNKNOWNVALIDATIONSTATUS",
  "1": "INVALIDSIGNATURE",
  "2": "INVALIDAUTHKEY",
  "3": "SEQUENCENUMBERTOOOLD",
  "4": "SEQUENCENUMBERTOONEW",
  "5": "INSUFFICIENTBALANCEFORTRANSACTIONFEE",
  "6": "TRANSACTIONEXPIRED",
  "7": "SENDINGACCOUNTDOESNOTEXIST",
  "8": "REJECTEDWRITESET",
  "9": "INVALIDWRITESET",
  "10": "EXCEEDEDMAXTRANSACTIONSIZE",
  "11": "UNKNOWNSCRIPT",
  "12": "UNKNOWNMODULE",
  "13": "MAXGASUNITSEXCEEDSMAXGASUNITSBOUND",
  "14": "MAXGASUNITSBELOWMINTRANSACTIONGASUNITS",
  "15": "GASUNITPRICEBELOWMINBOUND",
  "16": "GASUNITPRICEABOVEMAXBOUND",
})

export const VMVerificationErrorKind = Object.freeze({
  UNKNOWNVERIFICATIONERROR: 0,
  INDEXOUTOFBOUNDS: 1,
  RANGEOUTOFBOUNDS: 2,
  INVALIDSIGNATURETOKEN: 3,
  INVALIDFIELDDEFREFERENCE: 4,
  RECURSIVESTRUCTDEFINITION: 5,
  INVALIDRESOURCEFIELD: 6,
  INVALIDFALLTHROUGH: 7,
  JOINFAILURE: 8,
  NEGATIVESTACKSIZEWITHINBLOCK: 9,
  UNBALANCEDSTACK: 10,
  INVALIDMAINFUNCTIONSIGNATURE: 11,
  DUPLICATEELEMENT: 12,
  INVALIDMODULEHANDLE: 13,
  UNIMPLEMENTEDHANDLE: 14,
  INCONSISTENTFIELDS: 15,
  UNUSEDFIELDS: 16,
  LOOKUPFAILED: 17,
  VISIBILITYMISMATCH: 18,
  TYPERESOLUTIONFAILURE: 19,
  TYPEMISMATCH: 20,
  MISSINGDEPENDENCY: 21,
  POPREFERENCEERROR: 22,
  POPRESOURCEERROR: 23,
  RELEASEREFTYPEMISMATCHERROR: 24,
  BRTYPEMISMATCHERROR: 25,
  ASSERTTYPEMISMATCHERROR: 26,
  STLOCTYPEMISMATCHERROR: 27,
  STLOCUNSAFETODESTROYERROR: 28,
  RETUNSAFETODESTROYERROR: 29,
  RETTYPEMISMATCHERROR: 30,
  FREEZEREFTYPEMISMATCHERROR: 31,
  FREEZEREFEXISTSMUTABLEBORROWERROR: 32,
  BORROWFIELDTYPEMISMATCHERROR: 33,
  BORROWFIELDBADFIELDERROR: 34,
  BORROWFIELDEXISTSMUTABLEBORROWERROR: 35,
  COPYLOCUNAVAILABLEERROR: 36,
  COPYLOCRESOURCEERROR: 37,
  COPYLOCEXISTSBORROWERROR: 38,
  MOVELOCUNAVAILABLEERROR: 39,
  MOVELOCEXISTSBORROWERROR: 40,
  BORROWLOCREFERENCEERROR: 41,
  BORROWLOCUNAVAILABLEERROR: 42,
  BORROWLOCEXISTSBORROWERROR: 43,
  CALLTYPEMISMATCHERROR: 44,
  CALLBORROWEDMUTABLEREFERENCEERROR: 45,
  PACKTYPEMISMATCHERROR: 46,
  UNPACKTYPEMISMATCHERROR: 47,
  READREFTYPEMISMATCHERROR: 48,
  READREFRESOURCEERROR: 49,
  READREFEXISTSMUTABLEBORROWERROR: 50,
  WRITEREFTYPEMISMATCHERROR: 51,
  WRITEREFRESOURCEERROR: 52,
  WRITEREFEXISTSBORROWERROR: 53,
  WRITEREFNOMUTABLEREFERENCEERROR: 54,
  INTEGEROPTYPEMISMATCHERROR: 55,
  BOOLEANOPTYPEMISMATCHERROR: 56,
  EQUALITYOPTYPEMISMATCHERROR: 57,
  EXISTSRESOURCETYPEMISMATCHERROR: 58,
  BORROWGLOBALTYPEMISMATCHERROR: 59,
  BORROWGLOBALNORESOURCEERROR: 60,
  MOVEFROMTYPEMISMATCHERROR: 61,
  MOVEFROMNORESOURCEERROR: 62,
  MOVETOSENDERTYPEMISMATCHERROR: 63,
  MOVETOSENDERNORESOURCEERROR: 64,
  CREATEACCOUNTTYPEMISMATCHERROR: 65,
  MODULEADDRESSDOESNOTMATCHSENDER: 66,
  NOMODULEHANDLES: 67,
})

export const VMVerificationErrorKind$ReverseLookUp = Object.freeze({
  "0": "UNKNOWNVERIFICATIONERROR",
  "1": "INDEXOUTOFBOUNDS",
  "2": "RANGEOUTOFBOUNDS",
  "3": "INVALIDSIGNATURETOKEN",
  "4": "INVALIDFIELDDEFREFERENCE",
  "5": "RECURSIVESTRUCTDEFINITION",
  "6": "INVALIDRESOURCEFIELD",
  "7": "INVALIDFALLTHROUGH",
  "8": "JOINFAILURE",
  "9": "NEGATIVESTACKSIZEWITHINBLOCK",
  "10": "UNBALANCEDSTACK",
  "11": "INVALIDMAINFUNCTIONSIGNATURE",
  "12": "DUPLICATEELEMENT",
  "13": "INVALIDMODULEHANDLE",
  "14": "UNIMPLEMENTEDHANDLE",
  "15": "INCONSISTENTFIELDS",
  "16": "UNUSEDFIELDS",
  "17": "LOOKUPFAILED",
  "18": "VISIBILITYMISMATCH",
  "19": "TYPERESOLUTIONFAILURE",
  "20": "TYPEMISMATCH",
  "21": "MISSINGDEPENDENCY",
  "22": "POPREFERENCEERROR",
  "23": "POPRESOURCEERROR",
  "24": "RELEASEREFTYPEMISMATCHERROR",
  "25": "BRTYPEMISMATCHERROR",
  "26": "ASSERTTYPEMISMATCHERROR",
  "27": "STLOCTYPEMISMATCHERROR",
  "28": "STLOCUNSAFETODESTROYERROR",
  "29": "RETUNSAFETODESTROYERROR",
  "30": "RETTYPEMISMATCHERROR",
  "31": "FREEZEREFTYPEMISMATCHERROR",
  "32": "FREEZEREFEXISTSMUTABLEBORROWERROR",
  "33": "BORROWFIELDTYPEMISMATCHERROR",
  "34": "BORROWFIELDBADFIELDERROR",
  "35": "BORROWFIELDEXISTSMUTABLEBORROWERROR",
  "36": "COPYLOCUNAVAILABLEERROR",
  "37": "COPYLOCRESOURCEERROR",
  "38": "COPYLOCEXISTSBORROWERROR",
  "39": "MOVELOCUNAVAILABLEERROR",
  "40": "MOVELOCEXISTSBORROWERROR",
  "41": "BORROWLOCREFERENCEERROR",
  "42": "BORROWLOCUNAVAILABLEERROR",
  "43": "BORROWLOCEXISTSBORROWERROR",
  "44": "CALLTYPEMISMATCHERROR",
  "45": "CALLBORROWEDMUTABLEREFERENCEERROR",
  "46": "PACKTYPEMISMATCHERROR",
  "47": "UNPACKTYPEMISMATCHERROR",
  "48": "READREFTYPEMISMATCHERROR",
  "49": "READREFRESOURCEERROR",
  "50": "READREFEXISTSMUTABLEBORROWERROR",
  "51": "WRITEREFTYPEMISMATCHERROR",
  "52": "WRITEREFRESOURCEERROR",
  "53": "WRITEREFEXISTSBORROWERROR",
  "54": "WRITEREFNOMUTABLEREFERENCEERROR",
  "55": "INTEGEROPTYPEMISMATCHERROR",
  "56": "BOOLEANOPTYPEMISMATCHERROR",
  "57": "EQUALITYOPTYPEMISMATCHERROR",
  "58": "EXISTSRESOURCETYPEMISMATCHERROR",
  "59": "BORROWGLOBALTYPEMISMATCHERROR",
  "60": "BORROWGLOBALNORESOURCEERROR",
  "61": "MOVEFROMTYPEMISMATCHERROR",
  "62": "MOVEFROMNORESOURCEERROR",
  "63": "MOVETOSENDERTYPEMISMATCHERROR",
  "64": "MOVETOSENDERNORESOURCEERROR",
  "65": "CREATEACCOUNTTYPEMISMATCHERROR",
  "66": "MODULEADDRESSDOESNOTMATCHSENDER",
  "67": "NOMODULEHANDLES",
})

export const VMInvariantViolationError = Object.freeze({
  UNKNOWNINVARIANTVIOLATIONERROR: 0,
  OUTOFBOUNDSINDEX: 1,
  OUTOFBOUNDSRANGE: 2,
  EMPTYVALUESTACK: 3,
  EMPTYCALLSTACK: 4,
  PCOVERFLOW: 5,
  LINKERERROR: 6,
  LOCALREFERENCEERROR: 7,
  STORAGEERROR: 8,
})

export const VMInvariantViolationError$ReverseLookUp = Object.freeze({
  "0": "UNKNOWNINVARIANTVIOLATIONERROR",
  "1": "OUTOFBOUNDSINDEX",
  "2": "OUTOFBOUNDSRANGE",
  "3": "EMPTYVALUESTACK",
  "4": "EMPTYCALLSTACK",
  "5": "PCOVERFLOW",
  "6": "LINKERERROR",
  "7": "LOCALREFERENCEERROR",
  "8": "STORAGEERROR",
})

export const BinaryError = Object.freeze({
  UNKNOWNBINARYERROR: 0,
  MALFORMED: 1,
  BADMAGIC: 2,
  UNKNOWNVERSION: 3,
  UNKNOWNTABLETYPE: 4,
  UNKNOWNSIGNATURETYPE: 5,
  UNKNOWNSERIALIZEDTYPE: 6,
  UNKNOWNOPCODE: 7,
  BADHEADERTABLE: 8,
  UNEXPECTEDSIGNATURETYPE: 9,
  DUPLICATETABLE: 10,
})

export const BinaryError$ReverseLookUp = Object.freeze({
  "0": "UNKNOWNBINARYERROR",
  "1": "MALFORMED",
  "2": "BADMAGIC",
  "3": "UNKNOWNVERSION",
  "4": "UNKNOWNTABLETYPE",
  "5": "UNKNOWNSIGNATURETYPE",
  "6": "UNKNOWNSERIALIZEDTYPE",
  "7": "UNKNOWNOPCODE",
  "8": "BADHEADERTABLE",
  "9": "UNEXPECTEDSIGNATURETYPE",
  "10": "DUPLICATETABLE",
})

export const RuntimeStatus = Object.freeze({
  UNKNOWNRUNTIMESTATUS: 0,
  EXECUTED: 1,
  OUTOFGAS: 2,
  RESOURCEDOESNOTEXIST: 3,
  RESOURCEALREADYEXISTS: 4,
  EVICTEDACCOUNTACCESS: 5,
  ACCOUNTADDRESSALREADYEXISTS: 6,
  TYPEERROR: 7,
  MISSINGDATA: 8,
  DATAFORMATERROR: 9,
  INVALIDDATA: 10,
  REMOTEDATAERROR: 11,
  CANNOTWRITEEXISTINGRESOURCE: 12,
  VALUESERIALIZATIONERROR: 13,
  VALUEDESERIALIZATIONERROR: 14,
  DUPLICATEMODULENAME: 15,
})

export const RuntimeStatus$ReverseLookUp = Object.freeze({
  "0": "UNKNOWNRUNTIMESTATUS",
  "1": "EXECUTED",
  "2": "OUTOFGAS",
  "3": "RESOURCEDOESNOTEXIST",
  "4": "RESOURCEALREADYEXISTS",
  "5": "EVICTEDACCOUNTACCESS",
  "6": "ACCOUNTADDRESSALREADYEXISTS",
  "7": "TYPEERROR",
  "8": "MISSINGDATA",
  "9": "DATAFORMATERROR",
  "10": "INVALIDDATA",
  "11": "REMOTEDATAERROR",
  "12": "CANNOTWRITEEXISTINGRESOURCE",
  "13": "VALUESERIALIZATIONERROR",
  "14": "VALUEDESERIALIZATIONERROR",
  "15": "DUPLICATEMODULENAME",
})

