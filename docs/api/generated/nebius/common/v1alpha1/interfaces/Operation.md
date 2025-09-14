[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/common/v1alpha1](../README.md) / Operation

# ~~Interface: Operation~~

Defined in: src/generated/nebius/common/v1alpha1/index.ts:703

## Deprecated

Deprecated.

## Properties

### ~~\[unknownFieldsSymbol\]?~~

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/common/v1alpha1/index.ts:705

---

### ~~$type~~

> **$type**: `"nebius.common.v1alpha1.Operation"`

Defined in: src/generated/nebius/common/v1alpha1/index.ts:704

---

### ~~createdAt?~~

> `optional` **createdAt**: [`Dayjs`](../../../../../runtime/protos/core/dayjs/classes/Dayjs.md)

Defined in: src/generated/nebius/common/v1alpha1/index.ts:720

Creation timestamp.

---

### ~~createdBy~~

> **createdBy**: `string`

Defined in: src/generated/nebius/common/v1alpha1/index.ts:725

ID of the user or service account who initiated the operation.

---

### ~~description~~

> **description**: `string`

Defined in: src/generated/nebius/common/v1alpha1/index.ts:715

Human readable description of the operation. 0-256 characters long.

---

### ~~finishedAt?~~

> `optional` **finishedAt**: [`Dayjs`](../../../../../runtime/protos/core/dayjs/classes/Dayjs.md)

Defined in: src/generated/nebius/common/v1alpha1/index.ts:730

The time when the operation finished.

---

### ~~id~~

> **id**: `string`

Defined in: src/generated/nebius/common/v1alpha1/index.ts:710

ID of the operation.

---

### ~~progressData?~~

> `optional` **progressData**: `object`

Defined in: src/generated/nebius/common/v1alpha1/index.ts:780

Additional information about the progress of an operation, e.g., a progress percentage.
MAY be absent while the operation is running, MUST be absent after the operation has completed.

Format of message inside [progress_data] is service-dependent and MUST be documented by the
service, IF it is used.

#### ~~typeUrl~~

> **typeUrl**: `string`

#### ~~value~~

> **value**: `Uint8Array`

---

### ~~request?~~

> `optional` **request**: `object`

Defined in: src/generated/nebius/common/v1alpha1/index.ts:735

The request that generated this operation.

#### ~~typeUrl~~

> **typeUrl**: `string`

#### ~~value~~

> **value**: `Uint8Array`

---

### ~~requestHeaders~~

> **requestHeaders**: `object`

Defined in: src/generated/nebius/common/v1alpha1/index.ts:745

The request headers that are essential for the request that generated the operation.
For instance, `x-resetmask`. Without these headers the request might have been processed
differently if repeated.
All the header names _must_ be converted to lower case.
Validator is based on:
https://httpwg.org/specs/rfc9110.html#considerations.for.new.field.names

#### Index Signature

\[`key`: `string`\]: [`Operation_request_header`](Operation_request_header.md)

---

### ~~resource?~~

> `optional` **resource**: `object`

Defined in: src/generated/nebius/common/v1alpha1/index.ts:771

Snapshot of the resource at the moment this operation started.

- [resource.spec] and [resource.metadata] reflect the desired resource state at the moment
  this operation started.
  E.g., in an Update operation it will be the _updated_ resource spec and metadata,
  in a Create operation it will be the spec and metadata _of the resource being created_,
  and so on.
- [resource.status] reflects the status of the resource at the moment this operation started.
  This is a snapshot, call the <Resource>Service/Get to get current status of the resource.

The [resource] field MUST never be updated _after_ this operation has started.

In a Delete operation, an operation affecting multiple resources or an operation that doesn't
affect any API resources at all (e.g. a routine maintenance operation visible to the user),
the [resource] inside MUST be a [google.protobuf.Empty].

#### ~~typeUrl~~

> **typeUrl**: `string`

#### ~~value~~

> **value**: `Uint8Array`

---

### ~~resourceId~~

> **resourceId**: `string`

Defined in: src/generated/nebius/common/v1alpha1/index.ts:753

ID of the resource that this operation creates, updates, deletes or otherwise changes.

If the operation affects multiple resources or does not affect any API resources at all
(e.g. a routine maintenance operation visible to the user), the [resource_id] must be empty.

---

### ~~status?~~

> `optional` **status**: `Status`

Defined in: src/generated/nebius/common/v1alpha1/index.ts:795

The status of this operation. Set when this operation is completed.
See https://github.com/grpc/grpc/blob/master/src/proto/grpc/status/status.proto.

[status.code] is https://github.com/googleapis/googleapis/blob/master/google/rpc/code.proto:

- If [status.code] == OK, the operation has completed successfully.
- If [status.code] != OK, the operation has failed or has been cancelled.
  - [status.message] will contain a user-readable and actionable error message.
  - [status.details] will contain additional diagnostic information in the form of
    [ServiceError] from ../error/v1alpha1/error.proto
- [status.code] must belong to an Operation-compatible subset of GRPC codes:
  OK, CANCELLED, PERMISSION_DENIED, RESOURCE_EXHAUSTED, FAILED_PRECONDITION, ABORTED, INTERNAL
