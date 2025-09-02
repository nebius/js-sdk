[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/mk8s/v1alpha1](../README.md) / ControlPlaneStatus

# Interface: ControlPlaneStatus

Defined in: src/generated/nebius/mk8s/v1alpha1/index.ts:1800

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/mk8s/v1alpha1/index.ts:1802

***

### $type

> **$type**: `"nebius.mk8s.v1alpha1.ControlPlaneStatus"`

Defined in: src/generated/nebius/mk8s/v1alpha1/index.ts:1801

***

### auth?

> `optional` **auth**: [`ControlPlaneStatusAuth`](ControlPlaneStatusAuth.md)

Defined in: src/generated/nebius/mk8s/v1alpha1/index.ts:1814

***

### endpoints?

> `optional` **endpoints**: [`ControlPlaneStatusEndpoints`](ControlPlaneStatusEndpoints.md)

Defined in: src/generated/nebius/mk8s/v1alpha1/index.ts:1808

***

### etcdClusterSize

> **etcdClusterSize**: `Long`

Defined in: src/generated/nebius/mk8s/v1alpha1/index.ts:1813

Number of instances in etcd cluster.

***

### version

> **version**: `string`

Defined in: src/generated/nebius/mk8s/v1alpha1/index.ts:1807

Version have format `major.minor.patch-nebius-cp.n` like "1.30.0-nebius-cp.3".
