[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/mk8s/v1](../README.md) / ControlPlaneStatus

# Interface: ControlPlaneStatus

Defined in: src/generated/nebius/mk8s/v1/index.ts:1721

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/mk8s/v1/index.ts:1723

---

### $type

> **$type**: `"nebius.mk8s.v1.ControlPlaneStatus"`

Defined in: src/generated/nebius/mk8s/v1/index.ts:1722

---

### auth?

> `optional` **auth**: [`ControlPlaneStatusAuth`](ControlPlaneStatusAuth.md)

Defined in: src/generated/nebius/mk8s/v1/index.ts:1738

---

### endpoints?

> `optional` **endpoints**: [`ControlPlaneStatusEndpoints`](ControlPlaneStatusEndpoints.md)

Defined in: src/generated/nebius/mk8s/v1/index.ts:1732

---

### etcdClusterSize

> **etcdClusterSize**: [`Long`](../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/generated/nebius/mk8s/v1/index.ts:1737

Number of instances in etcd cluster.

---

### version

> **version**: `string`

Defined in: src/generated/nebius/mk8s/v1/index.ts:1731

Actual Kubernetes and configuration version.
Version have format `<major>.<minor>.<patch>-nebius-cp.<infra_version>` like "1.30.0-nebius-cp.3".
Where <major>.<minor>.<patch> is Kubernetes version and <infra_version> is version of control plane infrastructure and configuration,
which update may include bug fixes, security updates and new features of components running on control plane, like CCM or Cluster Autoscaler.
