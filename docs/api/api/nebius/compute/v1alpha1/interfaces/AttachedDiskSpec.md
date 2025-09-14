[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/compute/v1alpha1](../README.md) / AttachedDiskSpec

# Interface: AttachedDiskSpec

Defined in: src/api/nebius/compute/v1alpha1/index.ts:7247

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/compute/v1alpha1/index.ts:7249

---

### $type

> **$type**: `"nebius.compute.v1alpha1.AttachedDiskSpec"`

Defined in: src/api/nebius/compute/v1alpha1/index.ts:7248

---

### attachMode

> **attachMode**: [`AttachedDiskSpec_AttachMode`](../type-aliases/AttachedDiskSpec_AttachMode.md)

Defined in: src/api/nebius/compute/v1alpha1/index.ts:7250

---

### deviceName

> **deviceName**: `string`

Defined in: src/api/nebius/compute/v1alpha1/index.ts:7255

Specifies the user-defined identifier, allowing to use '/dev/disk/by-id/virtio-{device_name}' as a device path in mount command.

---

### type?

> `optional` **type**: `object`

Defined in: src/api/nebius/compute/v1alpha1/index.ts:7256

#### $case

> **$case**: `"existingDisk"`

#### existingDisk

> **existingDisk**: [`ExistingDisk`](ExistingDisk.md)
