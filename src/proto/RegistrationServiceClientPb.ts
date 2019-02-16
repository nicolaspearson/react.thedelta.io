/**
 * @fileoverview gRPC-Web generated client stub for registration
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';
import {
  ContactUs,
  EarlyAccess,
  EchoReply,
  EchoRequest,
  FindContactUsItemByEmailReply,
  FindContactUsItemByEmailRequest,
  FindEarlyAccessItemByEmailReply,
  FindEarlyAccessItemByEmailRequest,
  SaveContactUsItemReply,
  SaveContactUsItemRequest,
  SaveEarlyAccessItemReply,
  SaveEarlyAccessItemRequest} from './registration_pb';

export class RegistrationManagerClient {
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
        '/registration.RegistrationManager/Echo',
      request,
      metadata,
      this.methodInfoEcho,
      callback);
  }

  methodInfoFindContactUsItemByEmail = new grpcWeb.AbstractClientBase.MethodInfo(
    FindContactUsItemByEmailReply,
    (request: FindContactUsItemByEmailRequest) => {
      return request.serializeBinary();
    },
    FindContactUsItemByEmailReply.deserializeBinary
  );

  findContactUsItemByEmail(
    request: FindContactUsItemByEmailRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: FindContactUsItemByEmailReply) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/registration.RegistrationManager/FindContactUsItemByEmail',
      request,
      metadata,
      this.methodInfoFindContactUsItemByEmail,
      callback);
  }

  methodInfoSaveContactUsItem = new grpcWeb.AbstractClientBase.MethodInfo(
    SaveContactUsItemReply,
    (request: SaveContactUsItemRequest) => {
      return request.serializeBinary();
    },
    SaveContactUsItemReply.deserializeBinary
  );

  saveContactUsItem(
    request: SaveContactUsItemRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: SaveContactUsItemReply) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/registration.RegistrationManager/SaveContactUsItem',
      request,
      metadata,
      this.methodInfoSaveContactUsItem,
      callback);
  }

  methodInfoFindEarlyAccessItemByEmail = new grpcWeb.AbstractClientBase.MethodInfo(
    FindEarlyAccessItemByEmailReply,
    (request: FindEarlyAccessItemByEmailRequest) => {
      return request.serializeBinary();
    },
    FindEarlyAccessItemByEmailReply.deserializeBinary
  );

  findEarlyAccessItemByEmail(
    request: FindEarlyAccessItemByEmailRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: FindEarlyAccessItemByEmailReply) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/registration.RegistrationManager/FindEarlyAccessItemByEmail',
      request,
      metadata,
      this.methodInfoFindEarlyAccessItemByEmail,
      callback);
  }

  methodInfoSaveEarlyAccessItem = new grpcWeb.AbstractClientBase.MethodInfo(
    SaveEarlyAccessItemReply,
    (request: SaveEarlyAccessItemRequest) => {
      return request.serializeBinary();
    },
    SaveEarlyAccessItemReply.deserializeBinary
  );

  saveEarlyAccessItem(
    request: SaveEarlyAccessItemRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: SaveEarlyAccessItemReply) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/registration.RegistrationManager/SaveEarlyAccessItem',
      request,
      metadata,
      this.methodInfoSaveEarlyAccessItem,
      callback);
  }

}

