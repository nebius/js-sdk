[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/quotas/v1](../README.md) / GetByNameRequest

# Interface: GetByNameRequest

Defined in: src/api/nebius/quotas/v1/index.ts:352

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/quotas/v1/index.ts:354

***

### $type

> **$type**: `"nebius.quotas.v1.GetByNameRequest"`

Defined in: src/api/nebius/quotas/v1/index.ts:353

***

### name

> **name**: `string`

Defined in: src/api/nebius/quotas/v1/index.ts:365

Name of the quota.
 Example: "compute.disk.size.network-ssd".

***

### parentId

> **parentId**: `string`

Defined in: src/api/nebius/quotas/v1/index.ts:359

ID of the Tenant or Project to list quotas for.

***

### region

> **region**: `string`

Defined in: src/api/nebius/quotas/v1/index.ts:371

Name of the region where the quota is allocated.
 Example: "eu-north1".
