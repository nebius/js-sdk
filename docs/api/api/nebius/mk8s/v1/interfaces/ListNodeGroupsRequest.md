[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/mk8s/v1](../README.md) / ListNodeGroupsRequest

# Interface: ListNodeGroupsRequest

Defined in: src/api/nebius/mk8s/v1/index.ts:3375

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/mk8s/v1/index.ts:3377

***

### $type

> **$type**: `"nebius.mk8s.v1.ListNodeGroupsRequest"`

Defined in: src/api/nebius/mk8s/v1/index.ts:3376

***

### pageSize

> **pageSize**: [`Long`](../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/api/nebius/mk8s/v1/index.ts:3387

Specifies the maximum number of items to return in the response.

***

### pageToken

> **pageToken**: `string`

Defined in: src/api/nebius/mk8s/v1/index.ts:3392

Token for pagination, allowing the retrieval of the next set of results.

***

### parentId

> **parentId**: `string`

Defined in: src/api/nebius/mk8s/v1/index.ts:3382

ID of the parent Cluster.
