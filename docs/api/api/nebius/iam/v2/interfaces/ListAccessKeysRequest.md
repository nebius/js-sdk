[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/iam/v2](../README.md) / ListAccessKeysRequest

# Interface: ListAccessKeysRequest

Defined in: src/api/nebius/iam/v2/index.ts:299

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/iam/v2/index.ts:301

***

### $type

> **$type**: `"nebius.iam.v2.ListAccessKeysRequest"`

Defined in: src/api/nebius/iam/v2/index.ts:300

***

### filter

> **filter**: `string`

Defined in: src/api/nebius/iam/v2/index.ts:322

A filter to narrow down the results based on specific criteria.

***

### pageSize

> **pageSize**: [`Long`](../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/api/nebius/iam/v2/index.ts:312

Specifies the maximum number of items to return in the response.
 Default value: 10

***

### pageToken

> **pageToken**: `string`

Defined in: src/api/nebius/iam/v2/index.ts:317

Token for pagination, allowing the retrieval of the next set of results.

***

### parentId

> **parentId**: `string`

Defined in: src/api/nebius/iam/v2/index.ts:306

Represents the container ID.
