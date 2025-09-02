[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/storage/v1alpha1](../README.md) / TransferIteration

# Interface: TransferIteration

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:3035

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:3037

***

### $type

> **$type**: `"nebius.storage.v1alpha1.TransferIteration"`

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:3036

***

### averageThroughputBytes

> **averageThroughputBytes**: `Long`

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:3051

***

### endTime?

> `optional` **endTime**: `Dayjs`

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:3046

***

### error

> **error**: `string`

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:3044

Human-readable error description. Populated only if state is FAILED.

***

### objectsDiscoveredCount

> **objectsDiscoveredCount**: `Long`

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:3047

***

### objectsMigratedCount

> **objectsMigratedCount**: `Long`

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:3048

***

### objectsMigratedSize

> **objectsMigratedSize**: `Long`

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:3050

***

### objectsSkippedCount

> **objectsSkippedCount**: `Long`

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:3049

***

### sequenceNumber

> **sequenceNumber**: `Long`

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:3038

***

### startTime?

> `optional` **startTime**: `Dayjs`

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:3045

***

### state

> **state**: [`TransferIteration_State`](../type-aliases/TransferIteration_State.md)

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:3039
