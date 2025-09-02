[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/compute/v1alpha1](../README.md) / AttachedDiskSpec

# Interface: AttachedDiskSpec

Defined in: src/generated/nebius/compute/v1alpha1/index.ts:7261

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/compute/v1alpha1/index.ts:7263

***

### $type

> **$type**: `"nebius.compute.v1alpha1.AttachedDiskSpec"`

Defined in: src/generated/nebius/compute/v1alpha1/index.ts:7262

***

### attachMode

> **attachMode**: [`AttachedDiskSpec_AttachMode`](../type-aliases/AttachedDiskSpec_AttachMode.md)

Defined in: src/generated/nebius/compute/v1alpha1/index.ts:7264

***

### deviceName

> **deviceName**: `string`

Defined in: src/generated/nebius/compute/v1alpha1/index.ts:7269

Specifies the user-defined identifier, allowing to use '/dev/disk/by-id/virtio-{device_name}' as a device path in mount command.

***

### type?

> `optional` **type**: `object`

Defined in: src/generated/nebius/compute/v1alpha1/index.ts:7270

#### $case

> **$case**: `"existingDisk"`

#### existingDisk

> **existingDisk**: [`ExistingDisk`](ExistingDisk.md)
