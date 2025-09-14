[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/mk8s/v1](../README.md) / ControlPlaneSpec

# Interface: ControlPlaneSpec

Defined in: src/api/nebius/mk8s/v1/index.ts:1445

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/mk8s/v1/index.ts:1447

***

### $type

> **$type**: `"nebius.mk8s.v1.ControlPlaneSpec"`

Defined in: src/api/nebius/mk8s/v1/index.ts:1446

***

### endpoints?

> `optional` **endpoints**: [`ControlPlaneEndpointsSpec`](ControlPlaneEndpointsSpec.md)

Defined in: src/api/nebius/mk8s/v1/index.ts:1460

***

### etcdClusterSize

> **etcdClusterSize**: [`Long`](../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/api/nebius/mk8s/v1/index.ts:1468

Number of instances in etcd cluster.
 3 by default.
 Control plane with `etcd_cluster_size: 3` called "Highly Available" ("HA"), because it's Kubernetes API
 will be available despite a failure of one control plane instance.

***

### subnetId

> **subnetId**: `string`

Defined in: src/api/nebius/mk8s/v1/index.ts:1459

Nebius VPC Subnet ID where control plane instances will be located.
 Also will be default NodeGroup subnet.

***

### version

> **version**: `string`

Defined in: src/api/nebius/mk8s/v1/index.ts:1453

Desired Kubernetes version of the cluster. For now only acceptable format is
 `<major>.<minor>` like "1.31". Option for patch version update will be added later.
