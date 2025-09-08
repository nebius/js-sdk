[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/compute/v1](../README.md) / GpuClusterStatus

# Interface: GpuClusterStatus

Defined in: src/generated/nebius/compute/v1/index.ts:4670

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/compute/v1/index.ts:4672

---

### $type

> **$type**: `"nebius.compute.v1.GpuClusterStatus"`

Defined in: src/generated/nebius/compute/v1/index.ts:4671

---

### instances

> **instances**: `string`[]

Defined in: src/generated/nebius/compute/v1/index.ts:4673

---

### reconciling

> **reconciling**: `boolean`

Defined in: src/generated/nebius/compute/v1/index.ts:4678

Indicates whether there is an ongoing operation

---

### topology?

> `optional` **topology**: `object`

Defined in: src/generated/nebius/compute/v1/index.ts:4679

#### $case

> **$case**: `"infinibandTopologyPath"`

#### infinibandTopologyPath

> **infinibandTopologyPath**: [`GpuClusterStatusInfinibandTopologyPath`](GpuClusterStatusInfinibandTopologyPath.md)
