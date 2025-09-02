[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/mk8s/v1alpha1](../README.md) / ControlPlaneSpec

# Interface: ControlPlaneSpec

Defined in: src/generated/nebius/mk8s/v1alpha1/index.ts:1255

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/mk8s/v1alpha1/index.ts:1257

***

### $type

> **$type**: `"nebius.mk8s.v1alpha1.ControlPlaneSpec"`

Defined in: src/generated/nebius/mk8s/v1alpha1/index.ts:1256

***

### endpoints?

> `optional` **endpoints**: [`ControlPlaneEndpointsSpec`](ControlPlaneEndpointsSpec.md)

Defined in: src/generated/nebius/mk8s/v1alpha1/index.ts:1269

***

### etcdClusterSize

> **etcdClusterSize**: [`Long`](../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/generated/nebius/mk8s/v1alpha1/index.ts:1277

Number of instances in etcd cluster.
 3 by default.
 Control plane with `etcd_cluster_size: 3` called "Highly Available" ("HA"), because it's Kubernetes API
 will be available despite a failure of one control plane instance.

***

### subnetId

> **subnetId**: `string`

Defined in: src/generated/nebius/mk8s/v1alpha1/index.ts:1268

Subnet ID where control plane instances will be located.

***

### version

> **version**: `string`

Defined in: src/generated/nebius/mk8s/v1alpha1/index.ts:1263

Version is desired Kubernetes version of the cluster. For now only acceptable format is
 `MAJOR.MINOR` like "1.31". Option for patch version update will be added later.
