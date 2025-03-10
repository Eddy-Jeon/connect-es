// Copyright 2023 The Connect Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// @generated by protoc-gen-connect-es v1.3.0 with parameter "ts_nocheck=false,target=ts"
// @generated from file connectrpc/conformance/v1/service.proto (package connectrpc.conformance.v1, syntax proto3)
/* eslint-disable */

import { BidiStreamRequest, BidiStreamResponse, ClientStreamRequest, ClientStreamResponse, ServerStreamRequest, ServerStreamResponse, UnaryRequest, UnaryResponse, UnimplementedRequest, UnimplementedResponse } from "./service_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * The service implemented by conformance test servers. This is implemented by
 * the reference servers, used to test clients, and is expected to be implemented
 * by test servers, since this is the service used by reference clients.
 *
 * Test servers must implement the service as described.
 *
 * @generated from service connectrpc.conformance.v1.ConformanceService
 */
export const ConformanceService = {
  typeName: "connectrpc.conformance.v1.ConformanceService",
  methods: {
    /**
     * A unary operation. The request indicates the response headers and trailers
     * and also indicates either a response message or an error to send back.
     *
     * Response message data is specified as bytes. The service should echo back
     * request properties in the ConformancePayload and then include the message
     * data in the data field.
     *
     * Servers should allow the response definition to be unset in the request and
     * if it is, set no response headers or trailers and send back an empty response.
     *
     * @generated from rpc connectrpc.conformance.v1.ConformanceService.Unary
     */
    unary: {
      name: "Unary",
      I: UnaryRequest,
      O: UnaryResponse,
      kind: MethodKind.Unary,
    },
    /**
     * A server-streaming operation. The request indicates the response headers,
     * response messages, trailers, and an optional error to send back. The
     * response data should be sent in the order indicated, and the server should
     * wait between sending response messages as indicated.
     *
     * Response message data is specified as bytes. The service should echo back
     * request properties in the first ConformancePayload, and then include the
     * message data in the data field. Subsequent messages after the first one
     * should contain only the data field.
     *
     * Servers should allow the response definition to be unset in the request and
     * if so, all responses should contain no response headers or trailers and
     * contain empty response data.
     *
     * A client-streaming operation. The first request indicates the response
     * headers and trailers and also indicates either a response message or an
     * error to send back.
     *
     * Response message data is specified as bytes. The service should echo back
     * request properties, including all request messages in the order they were
     * received, in the ConformancePayload and then include the message data in
     * the data field.
     *
     * If the input stream is empty, the server's response will include no data,
     * only the request properties (headers, timeout).
     *
     * Servers should only read the response definition from the first message in
     * the stream and should ignore any definition set in subsequent messages.
     *
     * @generated from rpc connectrpc.conformance.v1.ConformanceService.ServerStream
     */
    serverStream: {
      name: "ServerStream",
      I: ServerStreamRequest,
      O: ServerStreamResponse,
      kind: MethodKind.ServerStreaming,
    },
    /**
     * Servers should allow the response definition to be unset in the request and
     * if it is, set no response headers or trailers and send back empty response data.
     *
     * @generated from rpc connectrpc.conformance.v1.ConformanceService.ClientStream
     */
    clientStream: {
      name: "ClientStream",
      I: ClientStreamRequest,
      O: ClientStreamResponse,
      kind: MethodKind.ClientStreaming,
    },
    /**
     * A bidirectional-streaming operation. The first request indicates the response
     * headers, response messages, trailers, and an optional error to send back.
     * The response data should be sent in the order indicated, and the server
     * should wait between sending response messages as indicated. If the
     * full_duplex field is true, the handler should read one request
     * and then send back one response, and then alternate, reading another
     * request and then sending back another response, etc. If the response_delay_ms
     * duration is specified, the server should wait that long in between sending each
     * response message. If both are specified, the server should wait the given
     * duration after reading the request before sending the corresponding
     * response.
     *
     * Response message data is specified as bytes and should be included in the
     * data field of the ConformancePayload in each response.
     *
     * If the full_duplex field is true, the service should echo back all request
     * properties in the first response including the last received request.
     * Subsequent responses should only echo back the last received request.
     *
     * If the full_duplex field is false, the service should echo back all request
     * properties, including all request messages in the order they were
     * received, in the ConformancePayload. Subsequent responses should only include
     * the message data in the data field.
     *
     * If the input stream is empty, the server should send a single response
     * message that includes no data and only the request properties (headers,
     * timeout).
     *
     * @generated from rpc connectrpc.conformance.v1.ConformanceService.BidiStream
     */
    bidiStream: {
      name: "BidiStream",
      I: BidiStreamRequest,
      O: BidiStreamResponse,
      kind: MethodKind.BiDiStreaming,
    },
    /**
     * A unary endpoint that the server should not implement and should instead
     * return an unimplemented error when invoked.
     *
     * @generated from rpc connectrpc.conformance.v1.ConformanceService.Unimplemented
     */
    unimplemented: {
      name: "Unimplemented",
      I: UnimplementedRequest,
      O: UnimplementedResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

