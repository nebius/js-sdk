[**@nebius/nodejs-sdk**](../../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../../README.md) / [generated/nebius/msp/mlflow/v1alpha1](../README.md) / ListClustersRequest

# Interface: ListClustersRequest

Defined in: src/generated/nebius/msp/mlflow/v1alpha1/index.ts:219

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/msp/mlflow/v1alpha1/index.ts:221

---

### $type

> **$type**: `"nebius.msp.mlflow.v1alpha1.ListClustersRequest"`

Defined in: src/generated/nebius/msp/mlflow/v1alpha1/index.ts:220

---

### pageSize

> **pageSize**: [`Long`](../../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/generated/nebius/msp/mlflow/v1alpha1/index.ts:231

Specifies the maximum number of items to return in the response. Default value is 100.

---

### pageToken

> **pageToken**: `string`

Defined in: src/generated/nebius/msp/mlflow/v1alpha1/index.ts:236

Token for pagination, allowing the retrieval of the next set of results.

---

### parentId

> **parentId**: `string`

Defined in: src/generated/nebius/msp/mlflow/v1alpha1/index.ts:226

Identifier of IAM container to list clusters from.
