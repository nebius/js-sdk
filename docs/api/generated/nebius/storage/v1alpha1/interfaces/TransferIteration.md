[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/storage/v1alpha1](../README.md) / TransferIteration

# Interface: TransferIteration

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:3036

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:3038

---

### $type

> **$type**: `"nebius.storage.v1alpha1.TransferIteration"`

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:3037

---

### averageThroughputBytes

> **averageThroughputBytes**: [`Long`](../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:3052

---

### endTime?

> `optional` **endTime**: [`Dayjs`](../../../../../runtime/protos/core/dayjs/classes/Dayjs.md)

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:3047

---

### error

> **error**: `string`

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:3045

Human-readable error description. Populated only if state is FAILED.

---

### objectsDiscoveredCount

> **objectsDiscoveredCount**: [`Long`](../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:3048

---

### objectsMigratedCount

> **objectsMigratedCount**: [`Long`](../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:3049

---

### objectsMigratedSize

> **objectsMigratedSize**: [`Long`](../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:3051

---

### objectsSkippedCount

> **objectsSkippedCount**: [`Long`](../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:3050

---

### sequenceNumber

> **sequenceNumber**: [`Long`](../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:3039

---

### startTime?

> `optional` **startTime**: [`Dayjs`](../../../../../runtime/protos/core/dayjs/classes/Dayjs.md)

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:3046

---

### state

> **state**: [`TransferIteration_State`](../type-aliases/TransferIteration_State.md)

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:3040
