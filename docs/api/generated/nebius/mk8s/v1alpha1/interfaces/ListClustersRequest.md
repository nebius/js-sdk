[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/mk8s/v1alpha1](../README.md) / ListClustersRequest

# Interface: ListClustersRequest

Defined in: src/generated/nebius/mk8s/v1alpha1/index.ts:337

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/mk8s/v1alpha1/index.ts:339

---

### $type

> **$type**: `"nebius.mk8s.v1alpha1.ListClustersRequest"`

Defined in: src/generated/nebius/mk8s/v1alpha1/index.ts:338

---

### pageSize

> **pageSize**: [`Long`](../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/generated/nebius/mk8s/v1alpha1/index.ts:349

Specifies the maximum number of items to return in the response.

---

### pageToken

> **pageToken**: `string`

Defined in: src/generated/nebius/mk8s/v1alpha1/index.ts:354

Token for pagination, allowing the retrieval of the next set of results.

---

### parentId

> **parentId**: `string`

Defined in: src/generated/nebius/mk8s/v1alpha1/index.ts:344

ID of the IAM container we are listing the resources in.
