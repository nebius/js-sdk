[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/quotas/v1](../README.md) / ListQuotaAllowancesRequest

# Interface: ListQuotaAllowancesRequest

Defined in: src/api/nebius/quotas/v1/index.ts:15

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/quotas/v1/index.ts:17

---

### $type

> **$type**: `"nebius.quotas.v1.ListQuotaAllowancesRequest"`

Defined in: src/api/nebius/quotas/v1/index.ts:16

---

### pageSize

> **pageSize**: [`Long`](../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/api/nebius/quotas/v1/index.ts:28

Page size. Must be between [1...1000].
Optional; if not specified, a reasonable default will be chosen by the service.

---

### pageToken

> **pageToken**: `string`

Defined in: src/api/nebius/quotas/v1/index.ts:33

Listing continuation token. Pass an empty string to start listing from the first page.

---

### parentId

> **parentId**: `string`

Defined in: src/api/nebius/quotas/v1/index.ts:22

ID of the Tenant or Project to list quotas for.
