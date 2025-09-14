[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/compute/v1](../README.md) / GpuClusterStatus

# Interface: GpuClusterStatus

Defined in: src/api/nebius/compute/v1/index.ts:4671

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/compute/v1/index.ts:4673

---

### $type

> **$type**: `"nebius.compute.v1.GpuClusterStatus"`

Defined in: src/api/nebius/compute/v1/index.ts:4672

---

### instances

> **instances**: `string`[]

Defined in: src/api/nebius/compute/v1/index.ts:4674

---

### reconciling

> **reconciling**: `boolean`

Defined in: src/api/nebius/compute/v1/index.ts:4679

Indicates whether there is an ongoing operation

---

### topology?

> `optional` **topology**: `object`

Defined in: src/api/nebius/compute/v1/index.ts:4680

#### $case

> **$case**: `"infinibandTopologyPath"`

#### infinibandTopologyPath

> **infinibandTopologyPath**: [`GpuClusterStatusInfinibandTopologyPath`](GpuClusterStatusInfinibandTopologyPath.md)
