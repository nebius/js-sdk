[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/compute/v1](../README.md) / InstanceGpuClusterSpec

# Interface: InstanceGpuClusterSpec

Defined in: src/generated/nebius/compute/v1/index.ts:8083

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/compute/v1/index.ts:8085

---

### $type

> **$type**: `"nebius.compute.v1.InstanceGpuClusterSpec"`

Defined in: src/generated/nebius/compute/v1/index.ts:8084

---

### id

> **id**: `string`

Defined in: src/generated/nebius/compute/v1/index.ts:8093

If you want to interconnect several instances in a GPU cluster via NVIDIA InfiniBand,
set the ID of an existing GPU cluster.
You can only add the VM to the cluster when creating the VM.
For details, see https://docs.nebius.com/compute/clusters/gpu
