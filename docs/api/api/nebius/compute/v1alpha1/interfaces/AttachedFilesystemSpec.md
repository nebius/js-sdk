[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/compute/v1alpha1](../README.md) / AttachedFilesystemSpec

# Interface: AttachedFilesystemSpec

Defined in: src/api/nebius/compute/v1alpha1/index.ts:7571

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/compute/v1alpha1/index.ts:7573

---

### $type

> **$type**: `"nebius.compute.v1alpha1.AttachedFilesystemSpec"`

Defined in: src/api/nebius/compute/v1alpha1/index.ts:7572

---

### attachMode

> **attachMode**: [`AttachedFilesystemSpec_AttachMode`](../type-aliases/AttachedFilesystemSpec_AttachMode.md)

Defined in: src/api/nebius/compute/v1alpha1/index.ts:7574

---

### deviceName

> **deviceName**: `string`

Defined in: src/api/nebius/compute/v1alpha1/index.ts:7579

Specifies the user-defined identifier, allowing to use it as a device in mount command.

---

### type?

> `optional` **type**: `object`

Defined in: src/api/nebius/compute/v1alpha1/index.ts:7580

#### $case

> **$case**: `"existingFilesystem"`

#### existingFilesystem

> **existingFilesystem**: [`ExistingFilesystem`](ExistingFilesystem.md)
