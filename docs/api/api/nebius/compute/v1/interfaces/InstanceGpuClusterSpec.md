[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/compute/v1](../README.md) / InstanceGpuClusterSpec

# Interface: InstanceGpuClusterSpec

Defined in: src/api/nebius/compute/v1/index.ts:8084

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/compute/v1/index.ts:8086

---

### $type

> **$type**: `"nebius.compute.v1.InstanceGpuClusterSpec"`

Defined in: src/api/nebius/compute/v1/index.ts:8085

---

### id

> **id**: `string`

Defined in: src/api/nebius/compute/v1/index.ts:8094

If you want to interconnect several instances in a GPU cluster via NVIDIA InfiniBand,
set the ID of an existing GPU cluster.
You can only add the VM to the cluster when creating the VM.
For details, see https://docs.nebius.com/compute/clusters/gpu
