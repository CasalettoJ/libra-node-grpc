// @flow
// package: mempool
// file: mempool_status.proto

import * as jspb from "google-protobuf";

export const MempoolAddTransactionStatus = Object.freeze({
  VALID: 0,
  INSUFFICIENTBALANCE: 1,
  INVALIDSEQNUMBER: 2,
  MEMPOOLISFULL: 3,
  TOOMANYTRANSACTIONS: 4,
  INVALIDUPDATE: 5,
})

export const MempoolAddTransactionStatus$ReverseLookUp = Object.freeze({
  "0": "VALID",
  "1": "INSUFFICIENTBALANCE",
  "2": "INVALIDSEQNUMBER",
  "3": "MEMPOOLISFULL",
  "4": "TOOMANYTRANSACTIONS",
  "5": "INVALIDUPDATE",
})

