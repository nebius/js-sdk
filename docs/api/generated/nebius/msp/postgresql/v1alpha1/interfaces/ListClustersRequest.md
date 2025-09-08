[**@nebius/nodejs-sdk**](../../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../../README.md) / [generated/nebius/msp/postgresql/v1alpha1](../README.md) / ListClustersRequest

# Interface: ListClustersRequest

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:1236

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:1238

---

### $type

> **$type**: `"nebius.msp.postgresql.v1alpha1.ListClustersRequest"`

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:1237

---

### pageSize

> **pageSize**: [`Long`](../../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:1248

Specifies the maximum number of items to return in the response.

---

### pageToken

> **pageToken**: `string`

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:1253

Token for pagination, allowing the retrieval of the next set of results.

---

### parentId

> **parentId**: `string`

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:1243

Identifier of IAM container to list clusters from.
