[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/mk8s/v1](../README.md) / GpuSettings

# Interface: GpuSettings

Defined in: src/generated/nebius/mk8s/v1/index.ts:5129

GPU-related settings.

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/mk8s/v1/index.ts:5131

---

### $type

> **$type**: `"nebius.mk8s.v1.GpuSettings"`

Defined in: src/generated/nebius/mk8s/v1/index.ts:5130

---

### driversPreset

> **driversPreset**: `string`

Defined in: src/generated/nebius/mk8s/v1/index.ts:5142

Identifier of the predefined set of drivers included in the ComputeImage deployed on ComputeInstances that are part of the NodeGroup.
Supported presets for different platform / k8s version combinations:
gpu-l40s-a, gpu-l40s-d, gpu-h100-sxm, gpu-h200-sxm:
k8s: 1.30 → "cuda12" (CUDA 12.4)
k8s: 1.31 → "cuda12" (CUDA 12.4), "cuda12.4", "cuda12.8"
gpu-b200-sxm:
k8s: 1.31 → "cuda12" (CUDA 12.8), "cuda12.8"
