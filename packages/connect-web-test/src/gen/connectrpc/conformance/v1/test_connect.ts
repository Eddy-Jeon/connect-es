// Copyright 2022-2023 The Connect Authors
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

// This is copied from gRPC's testing Protobuf definitions: https://github.com/grpc/grpc/blob/master/src/proto/grpc/testing/test.proto
//
// The TestService has been extended to include the following RPCs:
// FailUnaryCall(SimpleRequest) returns (SimpleResponse): this RPC is a unary
// call that always returns a readable non-ASCII error with error details.
// FailStreamingOutputCall(StreamingOutputCallRequest) returns (stream StreamingOutputCallResponse):
// this RPC is a server streaming call that always returns a readable non-ASCII error with error details.
// UnimplementedStreamingOutputCall(google.protobuf.Empty) returns (stream google.protobuf.Empty): this RPC
// is a server streaming call that will not be implemented.
//
// The UnimplementedService has been extended to include the following RPCs:
// UnimplementedStreamingOutputCall(google.protobuf.Empty) returns (stream google.protobuf.Empty): this RPC
// is a server streaming call that will not be implemented.

// Copyright 2015-2016 gRPC authors.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// An integration test service that covers all the method signature permutations
// of unary/streaming requests/responses.

// @generated by protoc-gen-connect-es v1.3.0 with parameter "ts_nocheck=false,target=ts"
// @generated from file connectrpc/conformance/v1/test.proto (package connectrpc.conformance.v1, syntax proto3)
/* eslint-disable */

import { Empty, MethodIdempotency, MethodKind } from "@bufbuild/protobuf";
import { ClientConfigureRequest, ClientConfigureResponse, LoadBalancerAccumulatedStatsRequest, LoadBalancerAccumulatedStatsResponse, LoadBalancerStatsRequest, LoadBalancerStatsResponse, ReconnectInfo, ReconnectParams, SimpleRequest, SimpleResponse, StreamingInputCallRequest, StreamingInputCallResponse, StreamingOutputCallRequest, StreamingOutputCallResponse } from "./messages_pb.js";

/**
 * A simple service to test the various types of RPCs and experiment with
 * performance with various types of payload.
 *
 * @generated from service connectrpc.conformance.v1.TestService
 */
export const TestService = {
  typeName: "connectrpc.conformance.v1.TestService",
  methods: {
    /**
     * One empty request followed by one empty response.
     *
     * @generated from rpc connectrpc.conformance.v1.TestService.EmptyCall
     */
    emptyCall: {
      name: "EmptyCall",
      I: Empty,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * One request followed by one response.
     *
     * @generated from rpc connectrpc.conformance.v1.TestService.UnaryCall
     */
    unaryCall: {
      name: "UnaryCall",
      I: SimpleRequest,
      O: SimpleResponse,
      kind: MethodKind.Unary,
    },
    /**
     * One request followed by one response. This RPC always fails.
     *
     * @generated from rpc connectrpc.conformance.v1.TestService.FailUnaryCall
     */
    failUnaryCall: {
      name: "FailUnaryCall",
      I: SimpleRequest,
      O: SimpleResponse,
      kind: MethodKind.Unary,
    },
    /**
     * One request followed by one response. Response has cache control
     * headers set such that a caching HTTP proxy (such as GFE) can
     * satisfy subsequent requests.
     *
     * @generated from rpc connectrpc.conformance.v1.TestService.CacheableUnaryCall
     */
    cacheableUnaryCall: {
      name: "CacheableUnaryCall",
      I: SimpleRequest,
      O: SimpleResponse,
      kind: MethodKind.Unary,
      idempotency: MethodIdempotency.NoSideEffects,
    },
    /**
     * One request followed by a sequence of responses (streamed download).
     * The server returns the payload with client desired type and sizes.
     *
     * @generated from rpc connectrpc.conformance.v1.TestService.StreamingOutputCall
     */
    streamingOutputCall: {
      name: "StreamingOutputCall",
      I: StreamingOutputCallRequest,
      O: StreamingOutputCallResponse,
      kind: MethodKind.ServerStreaming,
    },
    /**
     * One request followed by a sequence of responses (streamed download).
     * The server returns the payload with client desired type and sizes.
     * This RPC always responds with an error status.
     *
     * @generated from rpc connectrpc.conformance.v1.TestService.FailStreamingOutputCall
     */
    failStreamingOutputCall: {
      name: "FailStreamingOutputCall",
      I: StreamingOutputCallRequest,
      O: StreamingOutputCallResponse,
      kind: MethodKind.ServerStreaming,
    },
    /**
     * A sequence of requests followed by one response (streamed upload).
     * The server returns the aggregated size of client payload as the result.
     *
     * @generated from rpc connectrpc.conformance.v1.TestService.StreamingInputCall
     */
    streamingInputCall: {
      name: "StreamingInputCall",
      I: StreamingInputCallRequest,
      O: StreamingInputCallResponse,
      kind: MethodKind.ClientStreaming,
    },
    /**
     * A sequence of requests with each request served by the server immediately.
     * As one request could lead to multiple responses, this interface
     * demonstrates the idea of full duplexing.
     *
     * @generated from rpc connectrpc.conformance.v1.TestService.FullDuplexCall
     */
    fullDuplexCall: {
      name: "FullDuplexCall",
      I: StreamingOutputCallRequest,
      O: StreamingOutputCallResponse,
      kind: MethodKind.BiDiStreaming,
    },
    /**
     * A sequence of requests followed by a sequence of responses.
     * The server buffers all the client requests and then serves them in order. A
     * stream of responses are returned to the client when the server starts with
     * first request.
     *
     * @generated from rpc connectrpc.conformance.v1.TestService.HalfDuplexCall
     */
    halfDuplexCall: {
      name: "HalfDuplexCall",
      I: StreamingOutputCallRequest,
      O: StreamingOutputCallResponse,
      kind: MethodKind.BiDiStreaming,
    },
    /**
     * The test server will not implement this method. It will be used
     * to test the behavior when clients call unimplemented methods.
     *
     * @generated from rpc connectrpc.conformance.v1.TestService.UnimplementedCall
     */
    unimplementedCall: {
      name: "UnimplementedCall",
      I: Empty,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * The test server will not implement this method. It will be used
     * to test the behavior when clients call unimplemented streaming output methods.
     *
     * @generated from rpc connectrpc.conformance.v1.TestService.UnimplementedStreamingOutputCall
     */
    unimplementedStreamingOutputCall: {
      name: "UnimplementedStreamingOutputCall",
      I: Empty,
      O: Empty,
      kind: MethodKind.ServerStreaming,
    },
  }
} as const;

/**
 * A simple service NOT implemented at servers so clients can test for
 * that case.
 *
 * @generated from service connectrpc.conformance.v1.UnimplementedService
 */
export const UnimplementedService = {
  typeName: "connectrpc.conformance.v1.UnimplementedService",
  methods: {
    /**
     * A call that no server should implement
     *
     * @generated from rpc connectrpc.conformance.v1.UnimplementedService.UnimplementedCall
     */
    unimplementedCall: {
      name: "UnimplementedCall",
      I: Empty,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * A call that no server should implement
     *
     * @generated from rpc connectrpc.conformance.v1.UnimplementedService.UnimplementedStreamingOutputCall
     */
    unimplementedStreamingOutputCall: {
      name: "UnimplementedStreamingOutputCall",
      I: Empty,
      O: Empty,
      kind: MethodKind.ServerStreaming,
    },
  }
} as const;

/**
 * A service used to control reconnect server.
 *
 * @generated from service connectrpc.conformance.v1.ReconnectService
 */
export const ReconnectService = {
  typeName: "connectrpc.conformance.v1.ReconnectService",
  methods: {
    /**
     * @generated from rpc connectrpc.conformance.v1.ReconnectService.Start
     */
    start: {
      name: "Start",
      I: ReconnectParams,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc connectrpc.conformance.v1.ReconnectService.Stop
     */
    stop: {
      name: "Stop",
      I: Empty,
      O: ReconnectInfo,
      kind: MethodKind.Unary,
    },
  }
} as const;

/**
 * A service used to obtain stats for verifying LB behavior.
 *
 * @generated from service connectrpc.conformance.v1.LoadBalancerStatsService
 */
export const LoadBalancerStatsService = {
  typeName: "connectrpc.conformance.v1.LoadBalancerStatsService",
  methods: {
    /**
     * Gets the backend distribution for RPCs sent by a test client.
     *
     * @generated from rpc connectrpc.conformance.v1.LoadBalancerStatsService.GetClientStats
     */
    getClientStats: {
      name: "GetClientStats",
      I: LoadBalancerStatsRequest,
      O: LoadBalancerStatsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Gets the accumulated stats for RPCs sent by a test client.
     *
     * @generated from rpc connectrpc.conformance.v1.LoadBalancerStatsService.GetClientAccumulatedStats
     */
    getClientAccumulatedStats: {
      name: "GetClientAccumulatedStats",
      I: LoadBalancerAccumulatedStatsRequest,
      O: LoadBalancerAccumulatedStatsResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

/**
 * A service to remotely control health status of an xDS test server.
 *
 * @generated from service connectrpc.conformance.v1.XdsUpdateHealthService
 */
export const XdsUpdateHealthService = {
  typeName: "connectrpc.conformance.v1.XdsUpdateHealthService",
  methods: {
    /**
     * @generated from rpc connectrpc.conformance.v1.XdsUpdateHealthService.SetServing
     */
    setServing: {
      name: "SetServing",
      I: Empty,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc connectrpc.conformance.v1.XdsUpdateHealthService.SetNotServing
     */
    setNotServing: {
      name: "SetNotServing",
      I: Empty,
      O: Empty,
      kind: MethodKind.Unary,
    },
  }
} as const;

/**
 * A service to dynamically update the configuration of an xDS test client.
 *
 * @generated from service connectrpc.conformance.v1.XdsUpdateClientConfigureService
 */
export const XdsUpdateClientConfigureService = {
  typeName: "connectrpc.conformance.v1.XdsUpdateClientConfigureService",
  methods: {
    /**
     * Update the tes client's configuration.
     *
     * @generated from rpc connectrpc.conformance.v1.XdsUpdateClientConfigureService.Configure
     */
    configure: {
      name: "Configure",
      I: ClientConfigureRequest,
      O: ClientConfigureResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

