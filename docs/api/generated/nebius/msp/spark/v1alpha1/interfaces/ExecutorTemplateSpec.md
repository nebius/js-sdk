[**@nebius/nodejs-sdk**](../../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../../README.md) / [generated/nebius/msp/spark/v1alpha1](../README.md) / ExecutorTemplateSpec

# Interface: ExecutorTemplateSpec

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:3716

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:3718

---

### $type

> **$type**: `"nebius.msp.spark.v1alpha1.ExecutorTemplateSpec"`

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:3717

---

### disk?

> `optional` **disk**: [`DiskSpec`](../../../v1alpha1/resource/interfaces/DiskSpec.md)

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:3719

---

### hostsSpec?

> `optional` **hostsSpec**: \{ `$case`: `"hosts"`; `hosts`: [`HostSpec`](../../../v1alpha1/resource/interfaces/HostSpec.md); \} \| \{ `$case`: `"hostsDynamicAllocation"`; `hostsDynamicAllocation`: [`DynamicAllocationSpec`](DynamicAllocationSpec.md); \}

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:3721

---

### resources?

> `optional` **resources**: [`ResourcesSpec`](../../../v1alpha1/resource/interfaces/ResourcesSpec.md)

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:3720
