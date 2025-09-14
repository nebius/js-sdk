[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/quotas/v1](../README.md) / QuotaAllowanceStatus

# Interface: QuotaAllowanceStatus

Defined in: src/api/nebius/quotas/v1/index.ts:838

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/quotas/v1/index.ts:840

---

### $type

> **$type**: `"nebius.quotas.v1.QuotaAllowanceStatus"`

Defined in: src/api/nebius/quotas/v1/index.ts:839

---

### description

> **description**: `string`

Defined in: src/api/nebius/quotas/v1/index.ts:862

Human-readable description of the quota.
Example: "Total RAM across VMs".

---

### service

> **service**: `string`

Defined in: src/api/nebius/quotas/v1/index.ts:856

Service in which the quota is allocated.
Example: "mk8s".

---

### serviceDescription

> **serviceDescription**: `string`

Defined in: src/api/nebius/quotas/v1/index.ts:868

Human-readable name of the service managing the quota.
Example: "Managed Kubernetes®".

---

### state

> **state**: [`QuotaAllowanceStatus_State`](../type-aliases/QuotaAllowanceStatus_State.md)

Defined in: src/api/nebius/quotas/v1/index.ts:845

Current state of the quota.

---

### unit

> **unit**: `string`

Defined in: src/api/nebius/quotas/v1/index.ts:874

Quota unit.
Example: "byte".

---

### usage

> **usage**: [`Long`](../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/api/nebius/quotas/v1/index.ts:850

Current quota usage.

---

### usagePercentage

> **usagePercentage**: `string`

Defined in: src/api/nebius/quotas/v1/index.ts:882

Current quota usage as a percentage.
Values range from 0.0 to 1.0, representing 0% to 100%.
Values can exceed 1.0 if usage exceeds the limit.
Example: "0.12".

---

### usageState

> **usageState**: [`QuotaAllowanceStatus_UsageState`](../type-aliases/QuotaAllowanceStatus_UsageState.md)

Defined in: src/api/nebius/quotas/v1/index.ts:887

Current state of the quota usage.
