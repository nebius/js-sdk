[**@nebius/nodejs-sdk**](../../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../../README.md) / [api/nebius/msp/postgresql/v1alpha1](../README.md) / ListClustersRequest

# Interface: ListClustersRequest

Defined in: src/api/nebius/msp/postgresql/v1alpha1/index.ts:1237

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/msp/postgresql/v1alpha1/index.ts:1239

---

### $type

> **$type**: `"nebius.msp.postgresql.v1alpha1.ListClustersRequest"`

Defined in: src/api/nebius/msp/postgresql/v1alpha1/index.ts:1238

---

### pageSize

> **pageSize**: [`Long`](../../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/api/nebius/msp/postgresql/v1alpha1/index.ts:1249

Specifies the maximum number of items to return in the response.

---

### pageToken

> **pageToken**: `string`

Defined in: src/api/nebius/msp/postgresql/v1alpha1/index.ts:1254

Token for pagination, allowing the retrieval of the next set of results.

---

### parentId

> **parentId**: `string`

Defined in: src/api/nebius/msp/postgresql/v1alpha1/index.ts:1244

Identifier of IAM container to list clusters from.
