[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/compute/v1](../README.md) / AttachedDiskSpec

# Interface: AttachedDiskSpec

Defined in: src/generated/nebius/compute/v1/index.ts:8175

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/compute/v1/index.ts:8177

***

### $type

> **$type**: `"nebius.compute.v1.AttachedDiskSpec"`

Defined in: src/generated/nebius/compute/v1/index.ts:8176

***

### attachMode

> **attachMode**: [`AttachedDiskSpec_AttachMode`](../type-aliases/AttachedDiskSpec_AttachMode.md)

Defined in: src/generated/nebius/compute/v1/index.ts:8178

***

### deviceId

> **deviceId**: `string`

Defined in: src/generated/nebius/compute/v1/index.ts:8183

Specifies the user-defined identifier, allowing to use '/dev/disk/by-id/virtio-{device_id}' as a device path in mount command.

***

### type?

> `optional` **type**: `object`

Defined in: src/generated/nebius/compute/v1/index.ts:8184

#### $case

> **$case**: `"existingDisk"`

#### existingDisk

> **existingDisk**: [`ExistingDisk`](ExistingDisk.md)
