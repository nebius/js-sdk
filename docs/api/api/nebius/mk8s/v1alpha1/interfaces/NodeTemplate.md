[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/mk8s/v1alpha1](../README.md) / NodeTemplate

# Interface: NodeTemplate

Defined in: src/api/nebius/mk8s/v1alpha1/index.ts:4776

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/mk8s/v1alpha1/index.ts:4778

---

### $type

> **$type**: `"nebius.mk8s.v1alpha1.NodeTemplate"`

Defined in: src/api/nebius/mk8s/v1alpha1/index.ts:4777

---

### bootDisk?

> `optional` **bootDisk**: [`DiskSpec`](DiskSpec.md)

Defined in: src/api/nebius/mk8s/v1alpha1/index.ts:4782

---

### cloudInitUserData

> **cloudInitUserData**: `string`

Defined in: src/api/nebius/mk8s/v1alpha1/index.ts:4819

cloud-init user-data. Must contain at least one SSH key.

---

### filesystems

> **filesystems**: [`AttachedFilesystemSpec`](AttachedFilesystemSpec.md)[]

Defined in: src/api/nebius/mk8s/v1alpha1/index.ts:4814

---

### gpuCluster?

> `optional` **gpuCluster**: [`GpuClusterSpec`](GpuClusterSpec.md)

Defined in: src/api/nebius/mk8s/v1alpha1/index.ts:4812

---

### gpuSettings?

> `optional` **gpuSettings**: [`GpuSettings`](GpuSettings.md)

Defined in: src/api/nebius/mk8s/v1alpha1/index.ts:4787

GPU-related settings.

---

### metadata?

> `optional` **metadata**: [`NodeMetadataTemplate`](NodeMetadataTemplate.md)

Defined in: src/api/nebius/mk8s/v1alpha1/index.ts:4779

---

### networkInterfaces

> **networkInterfaces**: [`NetworkInterfaceTemplate`](NetworkInterfaceTemplate.md)[]

Defined in: src/api/nebius/mk8s/v1alpha1/index.ts:4813

---

### os

> **os**: `string`

Defined in: src/api/nebius/mk8s/v1alpha1/index.ts:4811

OS version that will be used to create the boot disk of Compute Instances in the NodeGroup.
Supported platform / k8s version / OS / driver presets combinations
gpu-l40s-a, gpu-l40s-d, gpu-h100-sxm, gpu-h200-sxm, cpu-e1, cpu-e2, cpu-d3:
drivers_preset: ""
k8s: 1.30 → "ubuntu22.04"
k8s: 1.31 → "ubuntu22.04" (default), "ubuntu24.04"
gpu-l40s-a, gpu-l40s-d, gpu-h100-sxm, gpu-h200-sxm:
drivers_preset: "cuda12" (CUDA 12.4)
k8s: 1.30, 1.31 → "ubuntu22.04"
drivers_preset: "cuda12.4"
k8s: 1.31 → "ubuntu22.04"
drivers_preset: "cuda12.8"
k8s: 1.31 → "ubuntu24.04"
gpu-b200-sxm:
drivers_preset: ""
k8s: 1.30, 1.31 → "ubuntu24.04"
drivers_preset: "cuda12" (CUDA 12.8)
k8s: 1.30, 1.31 → "ubuntu24.04"
drivers_preset: "cuda12.8"
k8s: 1.31 → "ubuntu24.04"

---

### preemptible?

> `optional` **preemptible**: [`PreemptibleSpec`](PreemptibleSpec.md)

Defined in: src/api/nebius/mk8s/v1alpha1/index.ts:4834

Configures whether the nodes in the group are preemptible.
Set to empty value to enable preemptible nodes.

---

### resources?

> `optional` **resources**: [`ResourcesSpec`](ResourcesSpec.md)

Defined in: src/api/nebius/mk8s/v1alpha1/index.ts:4781

---

### serviceAccountId

> **serviceAccountId**: `string`

Defined in: src/api/nebius/mk8s/v1alpha1/index.ts:4828

the Nebius service account whose credentials will be available on the nodes of the group.
With these credentials, it is possible to make `nebius` CLI or public API requests from the nodes without the need for extra authentication.
This service account is also used to make requests to container registry.

`resource.serviceaccount.issueAccessToken` permission is required to use this field.

---

### taints

> **taints**: [`NodeTaint`](NodeTaint.md)[]

Defined in: src/api/nebius/mk8s/v1alpha1/index.ts:4780
