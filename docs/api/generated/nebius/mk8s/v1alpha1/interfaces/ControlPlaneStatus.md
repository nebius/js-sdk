[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/mk8s/v1alpha1](../README.md) / ControlPlaneStatus

# Interface: ControlPlaneStatus

Defined in: src/generated/nebius/mk8s/v1alpha1/index.ts:2071

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/mk8s/v1alpha1/index.ts:2073

---

### $type

> **$type**: `"nebius.mk8s.v1alpha1.ControlPlaneStatus"`

Defined in: src/generated/nebius/mk8s/v1alpha1/index.ts:2072

---

### auth?

> `optional` **auth**: [`ControlPlaneStatusAuth`](ControlPlaneStatusAuth.md)

Defined in: src/generated/nebius/mk8s/v1alpha1/index.ts:2085

---

### endpoints?

> `optional` **endpoints**: [`ControlPlaneStatusEndpoints`](ControlPlaneStatusEndpoints.md)

Defined in: src/generated/nebius/mk8s/v1alpha1/index.ts:2079

---

### etcdClusterSize

> **etcdClusterSize**: [`Long`](../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/generated/nebius/mk8s/v1alpha1/index.ts:2084

Number of instances in etcd cluster.

---

### version

> **version**: `string`

Defined in: src/generated/nebius/mk8s/v1alpha1/index.ts:2078

Version have format `major.minor.patch-nebius-cp.n` like "1.30.0-nebius-cp.3".
