[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/compute/v1](../README.md) / AttachedFilesystemSpec

# Interface: AttachedFilesystemSpec

Defined in: src/api/nebius/compute/v1/index.ts:8500

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/compute/v1/index.ts:8502

---

### $type

> **$type**: `"nebius.compute.v1.AttachedFilesystemSpec"`

Defined in: src/api/nebius/compute/v1/index.ts:8501

---

### attachMode

> **attachMode**: [`AttachedFilesystemSpec_AttachMode`](../type-aliases/AttachedFilesystemSpec_AttachMode.md)

Defined in: src/api/nebius/compute/v1/index.ts:8503

---

### mountTag

> **mountTag**: `string`

Defined in: src/api/nebius/compute/v1/index.ts:8508

Specifies the user-defined identifier, allowing to use it as a device in mount command.

---

### type?

> `optional` **type**: `object`

Defined in: src/api/nebius/compute/v1/index.ts:8509

#### $case

> **$case**: `"existingFilesystem"`

#### existingFilesystem

> **existingFilesystem**: [`ExistingFilesystem`](ExistingFilesystem.md)
