[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/audit/v2](../README.md) / Request

# Interface: Request

Defined in: src/generated/nebius/audit/v2/index.ts:1494

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/audit/v2/index.ts:1496

***

### $type

> **$type**: `"nebius.audit.v2.Request"`

Defined in: src/generated/nebius/audit/v2/index.ts:1495

***

### clientIp

> **clientIp**: `string`

Defined in: src/generated/nebius/audit/v2/index.ts:1501

Ip of the subject who initiated the RPC call.

***

### idempotencyId

> **idempotencyId**: `string`

Defined in: src/generated/nebius/audit/v2/index.ts:1521

Unique key that the server uses to recognize subsequent retries of the same request.

***

### ja3Fingerprint

> **ja3Fingerprint**: `string`

Defined in: src/generated/nebius/audit/v2/index.ts:1531

Client Ja3 fingerprint

***

### parameters?

> `optional` **parameters**: `object`

Defined in: src/generated/nebius/audit/v2/index.ts:1516

Parameters of the request.

#### Index Signature

\[`key`: `string`\]: `any`

***

### requestId

> **requestId**: `string`

Defined in: src/generated/nebius/audit/v2/index.ts:1511

Unique identifier of the request.

***

### traceId

> **traceId**: `string`

Defined in: src/generated/nebius/audit/v2/index.ts:1526

A unique identifier that allows you to link calls to different services within an operation.

***

### userAgent

> **userAgent**: `string`

Defined in: src/generated/nebius/audit/v2/index.ts:1506

User agent of the subject who initiated operation.
