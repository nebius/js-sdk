[**@nebius/nodejs-sdk**](../../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../../README.md) / [generated/nebius/msp/spark/v1alpha1](../README.md) / ListJobsRequest

# Interface: ListJobsRequest

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:1961

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:1963

---

### $type

> **$type**: `"nebius.msp.spark.v1alpha1.ListJobsRequest"`

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:1962

---

### pageSize

> **pageSize**: [`Long`](../../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:1973

Specifies the maximum number of items to return in the response. Default value is 100.

---

### pageToken

> **pageToken**: `string`

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:1978

Token for pagination, allowing the retrieval of the next set of results.

---

### parentId

> **parentId**: `string`

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:1968

Identifier of IAM container to list jobs from.
