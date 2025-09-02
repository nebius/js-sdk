[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/quotas/v1](../README.md) / ListQuotaAllowancesRequest

# Interface: ListQuotaAllowancesRequest

Defined in: src/generated/nebius/quotas/v1/index.ts:14

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/quotas/v1/index.ts:16

***

### $type

> **$type**: `"nebius.quotas.v1.ListQuotaAllowancesRequest"`

Defined in: src/generated/nebius/quotas/v1/index.ts:15

***

### pageSize

> **pageSize**: [`Long`](../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/generated/nebius/quotas/v1/index.ts:27

Page size. Must be between [1...1000].
 Optional; if not specified, a reasonable default will be chosen by the service.

***

### pageToken

> **pageToken**: `string`

Defined in: src/generated/nebius/quotas/v1/index.ts:32

Listing continuation token. Pass an empty string to start listing from the first page.

***

### parentId

> **parentId**: `string`

Defined in: src/generated/nebius/quotas/v1/index.ts:21

ID of the Tenant or Project to list quotas for.
