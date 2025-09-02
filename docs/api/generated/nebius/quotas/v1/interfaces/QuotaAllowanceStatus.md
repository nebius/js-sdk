[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/quotas/v1](../README.md) / QuotaAllowanceStatus

# Interface: QuotaAllowanceStatus

Defined in: src/generated/nebius/quotas/v1/index.ts:826

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/quotas/v1/index.ts:828

***

### $type

> **$type**: `"nebius.quotas.v1.QuotaAllowanceStatus"`

Defined in: src/generated/nebius/quotas/v1/index.ts:827

***

### description

> **description**: `string`

Defined in: src/generated/nebius/quotas/v1/index.ts:850

Human-readable description of the quota.
 Example: "Total RAM across VMs".

***

### service

> **service**: `string`

Defined in: src/generated/nebius/quotas/v1/index.ts:844

Service in which the quota is allocated.
 Example: "mk8s".

***

### serviceDescription

> **serviceDescription**: `string`

Defined in: src/generated/nebius/quotas/v1/index.ts:856

Human-readable name of the service managing the quota.
 Example: "Managed Kubernetes®".

***

### state

> **state**: [`QuotaAllowanceStatus_State`](../type-aliases/QuotaAllowanceStatus_State.md)

Defined in: src/generated/nebius/quotas/v1/index.ts:833

Current state of the quota.

***

### unit

> **unit**: `string`

Defined in: src/generated/nebius/quotas/v1/index.ts:862

Quota unit.
 Example: "byte".

***

### usage

> **usage**: `Long`

Defined in: src/generated/nebius/quotas/v1/index.ts:838

Current quota usage.

***

### usagePercentage

> **usagePercentage**: `string`

Defined in: src/generated/nebius/quotas/v1/index.ts:870

Current quota usage as a percentage.
 Values range from 0.0 to 1.0, representing 0% to 100%.
 Values can exceed 1.0 if usage exceeds the limit.
 Example: "0.12".

***

### usageState

> **usageState**: [`QuotaAllowanceStatus_UsageState`](../type-aliases/QuotaAllowanceStatus_UsageState.md)

Defined in: src/generated/nebius/quotas/v1/index.ts:875

Current state of the quota usage.
