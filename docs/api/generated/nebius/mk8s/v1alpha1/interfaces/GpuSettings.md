[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/mk8s/v1alpha1](../README.md) / GpuSettings

# Interface: GpuSettings

Defined in: src/generated/nebius/mk8s/v1alpha1/index.ts:4962

GPU-related settings.

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/mk8s/v1alpha1/index.ts:4964

---

### $type

> **$type**: `"nebius.mk8s.v1alpha1.GpuSettings"`

Defined in: src/generated/nebius/mk8s/v1alpha1/index.ts:4963

---

### driversPreset

> **driversPreset**: `string`

Defined in: src/generated/nebius/mk8s/v1alpha1/index.ts:4970

Identifier of the predefined set of drivers included in the ComputeImage deployed on ComputeInstances that are part of the NodeGroup.
Supported presets: cuda12
