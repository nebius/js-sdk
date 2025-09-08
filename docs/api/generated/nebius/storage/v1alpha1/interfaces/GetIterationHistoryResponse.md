[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/storage/v1alpha1](../README.md) / GetIterationHistoryResponse

# Interface: GetIterationHistoryResponse

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:976

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:978

---

### $type

> **$type**: `"nebius.storage.v1alpha1.GetIterationHistoryResponse"`

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:977

---

### iterations

> **iterations**: [`TransferIteration`](TransferIteration.md)[]

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:983

List of transfer iterations sorted from newest to oldest.

---

### nextPageToken

> **nextPageToken**: `string`

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:988

Token for pagination, indicating the next set of results can be retrieved using this token.
