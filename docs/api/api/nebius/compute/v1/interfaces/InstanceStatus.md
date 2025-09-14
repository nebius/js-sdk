[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/compute/v1](../README.md) / InstanceStatus

# Interface: InstanceStatus

Defined in: src/api/nebius/compute/v1/index.ts:8654

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/compute/v1/index.ts:8656

***

### $type

> **$type**: `"nebius.compute.v1.InstanceStatus"`

Defined in: src/api/nebius/compute/v1/index.ts:8655

***

### gpuClusterTopology?

> `optional` **gpuClusterTopology**: `object`

Defined in: src/api/nebius/compute/v1/index.ts:8665

#### $case

> **$case**: `"infinibandTopologyPath"`

#### infinibandTopologyPath

> **infinibandTopologyPath**: [`InstanceStatusInfinibandTopologyPath`](InstanceStatusInfinibandTopologyPath.md)

***

### maintenanceEventId

> **maintenanceEventId**: `string`

Defined in: src/api/nebius/compute/v1/index.ts:8664

***

### networkInterfaces

> **networkInterfaces**: [`NetworkInterfaceStatus`](NetworkInterfaceStatus.md)[]

Defined in: src/api/nebius/compute/v1/index.ts:8658

***

### reconciling

> **reconciling**: `boolean`

Defined in: src/api/nebius/compute/v1/index.ts:8663

Indicates whether there is an ongoing operation

***

### state

> **state**: [`InstanceStatus_InstanceState`](../type-aliases/InstanceStatus_InstanceState.md)

Defined in: src/api/nebius/compute/v1/index.ts:8657
