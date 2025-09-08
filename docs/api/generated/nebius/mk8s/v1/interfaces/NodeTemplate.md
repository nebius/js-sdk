[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/mk8s/v1](../README.md) / NodeTemplate

# Interface: NodeTemplate

Defined in: src/generated/nebius/mk8s/v1/index.ts:4329

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/mk8s/v1/index.ts:4331

---

### $type

> **$type**: `"nebius.mk8s.v1.NodeTemplate"`

Defined in: src/generated/nebius/mk8s/v1/index.ts:4330

---

### bootDisk?

> `optional` **bootDisk**: [`DiskSpec`](DiskSpec.md)

Defined in: src/generated/nebius/mk8s/v1/index.ts:4351

Parameters of a Node Nebius Compute Instance boot disk.

---

### cloudInitUserData

> **cloudInitUserData**: `string`

Defined in: src/generated/nebius/mk8s/v1/index.ts:4374

cloud-init user-data
Should contain at least one SSH key.

---

### filesystems

> **filesystems**: [`AttachedFilesystemSpec`](AttachedFilesystemSpec.md)[]

Defined in: src/generated/nebius/mk8s/v1/index.ts:4368

Static attachments of Compute Filesystem.
Can be used as a workaround, until CSI for Compute Disk and Filesystem will be available.

---

### gpuCluster?

> `optional` **gpuCluster**: [`GpuClusterSpec`](GpuClusterSpec.md)

Defined in: src/generated/nebius/mk8s/v1/index.ts:4361

Nebius Compute GPUCluster ID that will be attached to node.

---

### gpuSettings?

> `optional` **gpuSettings**: [`GpuSettings`](GpuSettings.md)

Defined in: src/generated/nebius/mk8s/v1/index.ts:4356

GPU-related settings.

---

### metadata?

> `optional` **metadata**: [`NodeMetadataTemplate`](NodeMetadataTemplate.md)

Defined in: src/generated/nebius/mk8s/v1/index.ts:4332

---

### networkInterfaces

> **networkInterfaces**: [`NetworkInterfaceTemplate`](NetworkInterfaceTemplate.md)[]

Defined in: src/generated/nebius/mk8s/v1/index.ts:4362

---

### preemptible?

> `optional` **preemptible**: [`PreemptibleSpec`](PreemptibleSpec.md)

Defined in: src/generated/nebius/mk8s/v1/index.ts:4389

Configures whether the nodes in the group are preemptible.
Set to empty value to enable preemptible nodes.

---

### resources?

> `optional` **resources**: [`ResourcesSpec`](ResourcesSpec.md)

Defined in: src/generated/nebius/mk8s/v1/index.ts:4346

Resources that will have Nebius Compute Instance where Node kubelet will run.

---

### serviceAccountId

> **serviceAccountId**: `string`

Defined in: src/generated/nebius/mk8s/v1/index.ts:4383

the Nebius service account whose credentials will be available on the nodes of the group.
With these credentials, it is possible to make `nebius` CLI or public API requests from the nodes without the need for extra authentication.
This service account is also used to make requests to container registry.

`resource.serviceaccount.issueAccessToken` permission is required to use this field.

---

### taints

> **taints**: [`NodeTaint`](NodeTaint.md)[]

Defined in: src/generated/nebius/mk8s/v1/index.ts:4341

Kubernetes Node taints.
For now change will not be propagated to existing nodes, so will be applied only to Kubernetes Nodes created after the field change.
That behaviour may change later.
So, for now you will need to manually set them to existing nodes, if that is needed.
Field change will NOT trigger NodeGroup roll out.
