[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/compute/v1alpha1](../README.md) / AttachedFilesystemSpec

# Interface: AttachedFilesystemSpec

Defined in: src/generated/nebius/compute/v1alpha1/index.ts:7585

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/compute/v1alpha1/index.ts:7587

***

### $type

> **$type**: `"nebius.compute.v1alpha1.AttachedFilesystemSpec"`

Defined in: src/generated/nebius/compute/v1alpha1/index.ts:7586

***

### attachMode

> **attachMode**: [`AttachedFilesystemSpec_AttachMode`](../type-aliases/AttachedFilesystemSpec_AttachMode.md)

Defined in: src/generated/nebius/compute/v1alpha1/index.ts:7588

***

### deviceName

> **deviceName**: `string`

Defined in: src/generated/nebius/compute/v1alpha1/index.ts:7593

Specifies the user-defined identifier, allowing to use it as a device in mount command.

***

### type?

> `optional` **type**: `object`

Defined in: src/generated/nebius/compute/v1alpha1/index.ts:7594

#### $case

> **$case**: `"existingFilesystem"`

#### existingFilesystem

> **existingFilesystem**: [`ExistingFilesystem`](ExistingFilesystem.md)
