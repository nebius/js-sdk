[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/compute/v1alpha1](../README.md) / InstanceSpec

# Interface: InstanceSpec

Defined in: src/api/nebius/compute/v1alpha1/index.ts:6758

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/compute/v1alpha1/index.ts:6760

---

### $type

> **$type**: `"nebius.compute.v1alpha1.InstanceSpec"`

Defined in: src/api/nebius/compute/v1alpha1/index.ts:6759

---

### bootDisk?

> `optional` **bootDisk**: [`AttachedDiskSpec`](AttachedDiskSpec.md)

Defined in: src/api/nebius/compute/v1alpha1/index.ts:6765

---

### cloudInitUserData

> **cloudInitUserData**: `string`

Defined in: src/api/nebius/compute/v1alpha1/index.ts:6768

---

### filesystems

> **filesystems**: [`AttachedFilesystemSpec`](AttachedFilesystemSpec.md)[]

Defined in: src/api/nebius/compute/v1alpha1/index.ts:6767

---

### gpuCluster?

> `optional` **gpuCluster**: [`InstanceGpuClusterSpec`](InstanceGpuClusterSpec.md)

Defined in: src/api/nebius/compute/v1alpha1/index.ts:6763

---

### networkInterfaces

> **networkInterfaces**: [`NetworkInterfaceSpec`](../../../vpc/v1alpha1/interfaces/NetworkInterfaceSpec.md)[]

Defined in: src/api/nebius/compute/v1alpha1/index.ts:6764

---

### recoveryPolicy

> **recoveryPolicy**: [`InstanceRecoveryPolicy`](../type-aliases/InstanceRecoveryPolicy.md)

Defined in: src/api/nebius/compute/v1alpha1/index.ts:6777

Recovery policy defines how the instance will be treated in case of a failure. Common source of failure is a host failure, but it can be any other failure.
Instance undergoing a guest shutdown (poweroff, etc.) will be subject to recovery policy, meaning that it could be restarted and billed accordingly. Stop instance via API or UI to stop it to avoid recovering.
If set to RECOVER, instance will be restarted, if possible. It could be restarted on the same host or on another host.
If set to FAIL, instance will be stopped and not restarted.

---

### resources?

> `optional` **resources**: [`ResourcesSpec`](ResourcesSpec.md)

Defined in: src/api/nebius/compute/v1alpha1/index.ts:6762

---

### secondaryDisks

> **secondaryDisks**: [`AttachedDiskSpec`](AttachedDiskSpec.md)[]

Defined in: src/api/nebius/compute/v1alpha1/index.ts:6766

---

### serviceAccountId

> **serviceAccountId**: `string`

Defined in: src/api/nebius/compute/v1alpha1/index.ts:6761

---

### stopped

> **stopped**: `boolean`

Defined in: src/api/nebius/compute/v1alpha1/index.ts:6769
