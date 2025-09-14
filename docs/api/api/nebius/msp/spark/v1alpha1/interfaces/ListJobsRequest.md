[**@nebius/nodejs-sdk**](../../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../../README.md) / [api/nebius/msp/spark/v1alpha1](../README.md) / ListJobsRequest

# Interface: ListJobsRequest

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:1984

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:1986

***

### $type

> **$type**: `"nebius.msp.spark.v1alpha1.ListJobsRequest"`

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:1985

***

### pageSize

> **pageSize**: [`Long`](../../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:1996

Specifies the maximum number of items to return in the response. Default value is 100.

***

### pageToken

> **pageToken**: `string`

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:2001

Token for pagination, allowing the retrieval of the next set of results.

***

### parentId

> **parentId**: `string`

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:1991

Identifier of IAM container to list jobs from.
