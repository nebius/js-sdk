[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/common/v1](../README.md) / QuotaFailure

# Interface: QuotaFailure

Defined in: src/api/nebius/common/v1/index.ts:1799

Indicates a failure due to exceeding specified limits or allocations in a system or service.

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/common/v1/index.ts:1801

---

### $type

> **$type**: `"nebius.common.v1.QuotaFailure"`

Defined in: src/api/nebius/common/v1/index.ts:1800

---

### violations

> **violations**: [`QuotaFailure_Violation`](QuotaFailure_Violation.md)[]

Defined in: src/api/nebius/common/v1/index.ts:1806

Describes all quota violations.
