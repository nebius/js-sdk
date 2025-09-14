[**@nebius/nodejs-sdk**](../../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../../README.md) / [api/nebius/msp/spark/v1alpha1](../README.md) / ListSessionsRequest

# Interface: ListSessionsRequest

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:4110

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:4112

---

### $type

> **$type**: `"nebius.msp.spark.v1alpha1.ListSessionsRequest"`

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:4111

---

### pageSize

> **pageSize**: [`Long`](../../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:4122

Specifies the maximum number of items to return in the response. Default value is 100.

---

### pageToken

> **pageToken**: `string`

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:4127

Token for pagination, allowing the retrieval of the next set of results.

---

### parentId

> **parentId**: `string`

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:4117

Identifier of IAM container to list sessions from.
