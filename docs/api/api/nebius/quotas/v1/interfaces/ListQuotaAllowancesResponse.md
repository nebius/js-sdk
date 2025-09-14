[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/quotas/v1](../README.md) / ListQuotaAllowancesResponse

# Interface: ListQuotaAllowancesResponse

Defined in: src/api/nebius/quotas/v1/index.ts:240

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/quotas/v1/index.ts:242

---

### $type

> **$type**: `"nebius.quotas.v1.ListQuotaAllowancesResponse"`

Defined in: src/api/nebius/quotas/v1/index.ts:241

---

### items

> **items**: [`QuotaAllowance`](QuotaAllowance.md)[]

Defined in: src/api/nebius/quotas/v1/index.ts:247

List of quotas on this result page.

---

### nextPageToken

> **nextPageToken**: `string`

Defined in: src/api/nebius/quotas/v1/index.ts:252

Listing continuation token for the next page of results.
