[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/mk8s/v1](../README.md) / ControlPlaneStatus

# Interface: ControlPlaneStatus

Defined in: src/api/nebius/mk8s/v1/index.ts:1992

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/mk8s/v1/index.ts:1994

***

### $type

> **$type**: `"nebius.mk8s.v1.ControlPlaneStatus"`

Defined in: src/api/nebius/mk8s/v1/index.ts:1993

***

### auth?

> `optional` **auth**: [`ControlPlaneStatusAuth`](ControlPlaneStatusAuth.md)

Defined in: src/api/nebius/mk8s/v1/index.ts:2009

***

### endpoints?

> `optional` **endpoints**: [`ControlPlaneStatusEndpoints`](ControlPlaneStatusEndpoints.md)

Defined in: src/api/nebius/mk8s/v1/index.ts:2003

***

### etcdClusterSize

> **etcdClusterSize**: [`Long`](../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/api/nebius/mk8s/v1/index.ts:2008

Number of instances in etcd cluster.

***

### version

> **version**: `string`

Defined in: src/api/nebius/mk8s/v1/index.ts:2002

Actual Kubernetes and configuration version.
 Version have format `<major>.<minor>.<patch>-nebius-cp.<infra_version>` like "1.30.0-nebius-cp.3".
 Where <major>.<minor>.<patch> is Kubernetes version and <infra_version> is version of control plane infrastructure and configuration,
 which update may include bug fixes, security updates and new features of components running on control plane, like CCM or Cluster Autoscaler.
