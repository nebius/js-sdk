[**@nebius/nodejs-sdk**](../../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../../README.md) / [api/nebius/msp/spark/v1alpha1](../README.md) / ListSessionsResponse

# Interface: ListSessionsResponse

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:4245

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:4247

---

### $type

> **$type**: `"nebius.msp.spark.v1alpha1.ListSessionsResponse"`

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:4246

---

### items

> **items**: [`Session`](Session.md)[]

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:4252

List of sessions.

---

### nextPageToken?

> `optional` **nextPageToken**: `string`

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:4257

Token for pagination, indicating the next set of results can be retrieved using this token.
