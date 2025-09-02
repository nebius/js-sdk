[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/mk8s/v1](../README.md) / ControlPlaneSpec

# Interface: ControlPlaneSpec

Defined in: src/generated/nebius/mk8s/v1/index.ts:1174

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/mk8s/v1/index.ts:1176

***

### $type

> **$type**: `"nebius.mk8s.v1.ControlPlaneSpec"`

Defined in: src/generated/nebius/mk8s/v1/index.ts:1175

***

### endpoints?

> `optional` **endpoints**: [`ControlPlaneEndpointsSpec`](ControlPlaneEndpointsSpec.md)

Defined in: src/generated/nebius/mk8s/v1/index.ts:1189

***

### etcdClusterSize

> **etcdClusterSize**: [`Long`](../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/generated/nebius/mk8s/v1/index.ts:1197

Number of instances in etcd cluster.
 3 by default.
 Control plane with `etcd_cluster_size: 3` called "Highly Available" ("HA"), because it's Kubernetes API
 will be available despite a failure of one control plane instance.

***

### subnetId

> **subnetId**: `string`

Defined in: src/generated/nebius/mk8s/v1/index.ts:1188

Nebius VPC Subnet ID where control plane instances will be located.
 Also will be default NodeGroup subnet.

***

### version

> **version**: `string`

Defined in: src/generated/nebius/mk8s/v1/index.ts:1182

Desired Kubernetes version of the cluster. For now only acceptable format is
 `<major>.<minor>` like "1.31". Option for patch version update will be added later.
