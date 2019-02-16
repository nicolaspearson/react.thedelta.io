/**
 * @fileoverview gRPC-Web generated client stub for receipt
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';
import {
  EchoReply,
  EchoRequest,
  Receipt,
  ReceiptItem,
  SaveReceiptReply,
  SaveReceiptRequest} from './receipt_pb';

export class ReceiptManagerClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; }) {
    if (!options) options = {};
    options['format'] = 'binary';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoEcho = new grpcWeb.AbstractClientBase.MethodInfo(
    EchoReply,
    (request: EchoRequest) => {
      return request.serializeBinary();
    },
    EchoReply.deserializeBinary
  );

  echo(
    request: EchoRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: EchoReply) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/receipt.ReceiptManager/Echo',
      request,
      metadata,
      this.methodInfoEcho,
      callback);
  }

  methodInfoSaveReceipt = new grpcWeb.AbstractClientBase.MethodInfo(
    SaveReceiptReply,
    (request: SaveReceiptRequest) => {
      return request.serializeBinary();
    },
    SaveReceiptReply.deserializeBinary
  );

  saveReceipt(
    request: SaveReceiptRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: SaveReceiptReply) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/receipt.ReceiptManager/SaveReceipt',
      request,
      metadata,
      this.methodInfoSaveReceipt,
      callback);
  }

}

