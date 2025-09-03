[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/common/v1](../README.md) / Operation

# Interface: Operation

Defined in: src/generated/nebius/common/v1/index.ts:3088

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/common/v1/index.ts:3090

---

### $type

> **$type**: `"nebius.common.v1.Operation"`

Defined in: src/generated/nebius/common/v1/index.ts:3089

---

### createdAt?

> `optional` **createdAt**: [`Dayjs`](../../../../../runtime/protos/core/dayjs/classes/Dayjs.md)

Defined in: src/generated/nebius/common/v1/index.ts:3105

Creation timestamp.

---

### createdBy

> **createdBy**: `string`

Defined in: src/generated/nebius/common/v1/index.ts:3110

ID of the user or service account who initiated the operation.

---

### description

> **description**: `string`

Defined in: src/generated/nebius/common/v1/index.ts:3100

Human-readable description of the operation. 0-256 characters long.

---

### finishedAt?

> `optional` **finishedAt**: [`Dayjs`](../../../../../runtime/protos/core/dayjs/classes/Dayjs.md)

Defined in: src/generated/nebius/common/v1/index.ts:3115

The time when the operation has finished.

---

### id

> **id**: `string`

Defined in: src/generated/nebius/common/v1/index.ts:3095

ID of the operation.

---

### progressData?

> `optional` **progressData**: `object`

Defined in: src/generated/nebius/common/v1/index.ts:3147

Additional information about the progress of an operation, e.g., a progress percentage.
MAY be absent while the operation is running, MUST be absent after the operation has completed.

Format of message inside [progress_data] is service-dependent and MUST be documented by the
service, IF it is used.

#### typeUrl

> **typeUrl**: `string`

#### value

> **value**: `Uint8Array`

---

### request?

> `optional` **request**: `object`

Defined in: src/generated/nebius/common/v1/index.ts:3120

The request that generated this operation.

#### typeUrl

> **typeUrl**: `string`

#### value

> **value**: `Uint8Array`

---

### requestHeaders

> **requestHeaders**: `object`

Defined in: src/generated/nebius/common/v1/index.ts:3130

The request headers that are essential for the request that generated the operation.
For instance, `x-resetmask`. Without these headers the request might have been processed
differently if repeated.
All the header names _must_ be converted to lower case.
Validator is based on:
https://httpwg.org/specs/rfc9110.html#considerations.for.new.field.names

#### Index Signature

\[`key`: `string`\]: [`Operation_RequestHeader`](Operation_RequestHeader.md)

---

### resourceId

> **resourceId**: `string`

Defined in: src/generated/nebius/common/v1/index.ts:3138

ID of the resource that this operation creates, updates, deletes or otherwise changes.

If the operation affects multiple resources or does not affect any API resources at all
(e.g. a routine maintenance operation visible to the user), the [resource_id] must be empty.

---

### status?

> `optional` **status**: `Status`

Defined in: src/generated/nebius/common/v1/index.ts:3162

The status of this operation. Set when this operation is completed.
See https://github.com/grpc/grpc/blob/master/src/proto/grpc/status/status.proto.

[status.code] is https://github.com/googleapis/googleapis/blob/master/google/rpc/code.proto:

- If [status.code] == OK, the operation has completed successfully.
- If [status.code] != OK, the operation has failed or has been cancelled.
  - [status.message] will contain a user-readable and actionable error message.
  - [status.details] will contain additional diagnostic information in the form of
    [ServiceError] from nebius/common/v1/error.proto
- [status.code] must belong to an Operation-compatible subset of GRPC codes:
  OK, CANCELLED, PERMISSION_DENIED, RESOURCE_EXHAUSTED, FAILED_PRECONDITION, ABORTED, INTERNAL
