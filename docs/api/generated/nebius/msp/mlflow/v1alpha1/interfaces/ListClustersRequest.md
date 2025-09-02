[**@nebius/nodejs-sdk**](../../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../../README.md) / [generated/nebius/msp/mlflow/v1alpha1](../README.md) / ListClustersRequest

# Interface: ListClustersRequest

Defined in: src/generated/nebius/msp/mlflow/v1alpha1/index.ts:218

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/msp/mlflow/v1alpha1/index.ts:220

***

### $type

> **$type**: `"nebius.msp.mlflow.v1alpha1.ListClustersRequest"`

Defined in: src/generated/nebius/msp/mlflow/v1alpha1/index.ts:219

***

### pageSize

> **pageSize**: [`Long`](../../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/generated/nebius/msp/mlflow/v1alpha1/index.ts:230

Specifies the maximum number of items to return in the response. Default value is 100.

***

### pageToken

> **pageToken**: `string`

Defined in: src/generated/nebius/msp/mlflow/v1alpha1/index.ts:235

Token for pagination, allowing the retrieval of the next set of results.

***

### parentId

> **parentId**: `string`

Defined in: src/generated/nebius/msp/mlflow/v1alpha1/index.ts:225

Identifier of IAM container to list clusters from.
