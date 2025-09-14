[**@nebius/nodejs-sdk**](../../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../../README.md) / [api/nebius/msp/spark/v1alpha1](../README.md) / ListJobsResponse

# Interface: ListJobsResponse

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:2119

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:2121

---

### $type

> **$type**: `"nebius.msp.spark.v1alpha1.ListJobsResponse"`

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:2120

---

### items

> **items**: [`Job`](Job.md)[]

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:2126

List of jobs.

---

### nextPageToken?

> `optional` **nextPageToken**: `string`

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:2131

Token for pagination, indicating the next set of results can be retrieved using this token.
