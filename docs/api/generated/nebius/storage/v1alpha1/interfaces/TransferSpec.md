[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/storage/v1alpha1](../README.md) / TransferSpec

# Interface: TransferSpec

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:1657

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:1659

---

### $type

> **$type**: `"nebius.storage.v1alpha1.TransferSpec"`

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:1658

---

### destination?

> `optional` **destination**: [`TransferSpec_DestinationBucket`](TransferSpec_DestinationBucket.md)

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:1661

---

### interIterationInterval?

> `optional` **interIterationInterval**: `Duration`

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:1666

Time to wait between transfer iterations. Default is 15 minutes if not specified.

---

### overwriteStrategy

> **overwriteStrategy**: [`TransferSpec_OverwriteStrategy`](../type-aliases/TransferSpec_OverwriteStrategy.md)

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:1671

Overwrite strategy set logic of overwrite already existed objects in destination bucket.

---

### source?

> `optional` **source**: [`TransferSpec_SourceBucket`](TransferSpec_SourceBucket.md)

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:1660

---

### stopCondition?

> `optional` **stopCondition**: \{ `$case`: `"afterOneIteration"`; `afterOneIteration`: [`TransferSpec_StopConditionAfterOneIteration`](TransferSpec_StopConditionAfterOneIteration.md); \} \| \{ `$case`: `"afterNEmptyIterations"`; `afterNEmptyIterations`: [`TransferSpec_StopConditionAfterNEmptyIterations`](TransferSpec_StopConditionAfterNEmptyIterations.md); \} \| \{ `$case`: `"infinite"`; `infinite`: [`TransferSpec_StopConditionInfinite`](TransferSpec_StopConditionInfinite.md); \}

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:1676

The stop condition is checked after every iteration. If the condition is met, the transfer will stop.
