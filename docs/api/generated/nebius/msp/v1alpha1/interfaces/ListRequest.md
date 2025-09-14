[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/msp/v1alpha1](../README.md) / ListRequest

# Interface: ListRequest

Defined in: src/generated/nebius/msp/v1alpha1/index.ts:666

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/msp/v1alpha1/index.ts:668

---

### $type

> **$type**: `"nebius.msp.v1alpha1.ListRequest"`

Defined in: src/generated/nebius/msp/v1alpha1/index.ts:667

---

### pageSize

> **pageSize**: [`Long`](../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/generated/nebius/msp/v1alpha1/index.ts:678

Specifies the maximum number of items to return in the response. Default value is 100.

---

### pageToken

> **pageToken**: `string`

Defined in: src/generated/nebius/msp/v1alpha1/index.ts:683

Token for pagination, allowing the retrieval of the next set of results.

---

### parentId

> **parentId**: `string`

Defined in: src/generated/nebius/msp/v1alpha1/index.ts:673

Identifier of IAM container to list from.
