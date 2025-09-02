[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/iam/v1](../README.md) / ListAccessPermitResponse

# Interface: ListAccessPermitResponse

Defined in: src/generated/nebius/iam/v1/index.ts:2673

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/iam/v1/index.ts:2675

***

### $type

> **$type**: `"nebius.iam.v1.ListAccessPermitResponse"`

Defined in: src/generated/nebius/iam/v1/index.ts:2674

***

### items

> **items**: [`AccessPermit`](AccessPermit.md)[]

Defined in: src/generated/nebius/iam/v1/index.ts:2680

List of access bindings returned in the response. The field should be named as `items` for consistency.

***

### nextPageToken

> **nextPageToken**: `string`

Defined in: src/generated/nebius/iam/v1/index.ts:2685

Token for pagination, indicating the next set of results can be retrieved using this token.
