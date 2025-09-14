[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/iam/v1](../README.md) / ListAccessPermitResponse

# Interface: ListAccessPermitResponse

Defined in: src/api/nebius/iam/v1/index.ts:2674

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/iam/v1/index.ts:2676

***

### $type

> **$type**: `"nebius.iam.v1.ListAccessPermitResponse"`

Defined in: src/api/nebius/iam/v1/index.ts:2675

***

### items

> **items**: [`AccessPermit`](AccessPermit.md)[]

Defined in: src/api/nebius/iam/v1/index.ts:2681

List of access bindings returned in the response. The field should be named as `items` for consistency.

***

### nextPageToken

> **nextPageToken**: `string`

Defined in: src/api/nebius/iam/v1/index.ts:2686

Token for pagination, indicating the next set of results can be retrieved using this token.
