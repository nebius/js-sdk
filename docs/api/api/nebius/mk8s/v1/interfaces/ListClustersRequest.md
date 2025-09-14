[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/mk8s/v1](../README.md) / ListClustersRequest

# Interface: ListClustersRequest

Defined in: src/api/nebius/mk8s/v1/index.ts:232

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/mk8s/v1/index.ts:234

***

### $type

> **$type**: `"nebius.mk8s.v1.ListClustersRequest"`

Defined in: src/api/nebius/mk8s/v1/index.ts:233

***

### pageSize

> **pageSize**: [`Long`](../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/api/nebius/mk8s/v1/index.ts:244

Specifies the maximum number of items to return in the response.

***

### pageToken

> **pageToken**: `string`

Defined in: src/api/nebius/mk8s/v1/index.ts:249

Token for pagination, allowing the retrieval of the next set of results.

***

### parentId

> **parentId**: `string`

Defined in: src/api/nebius/mk8s/v1/index.ts:239

ID of the IAM container we are listing the resources in.
