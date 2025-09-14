[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/mk8s/v1](../README.md) / AttachedFilesystemSpec

# Interface: AttachedFilesystemSpec

Defined in: src/generated/nebius/mk8s/v1/index.ts:5498

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/mk8s/v1/index.ts:5500

---

### $type

> **$type**: `"nebius.mk8s.v1.AttachedFilesystemSpec"`

Defined in: src/generated/nebius/mk8s/v1/index.ts:5499

---

### attachMode

> **attachMode**: [`AttachedFilesystemSpec_AttachMode`](../type-aliases/AttachedFilesystemSpec_AttachMode.md)

Defined in: src/generated/nebius/mk8s/v1/index.ts:5501

---

### mountTag

> **mountTag**: `string`

Defined in: src/generated/nebius/mk8s/v1/index.ts:5506

Specifies the user-defined identifier, allowing to use it as a device in mount command.

---

### type?

> `optional` **type**: `object`

Defined in: src/generated/nebius/mk8s/v1/index.ts:5507

#### $case

> **$case**: `"existingFilesystem"`

#### existingFilesystem

> **existingFilesystem**: [`ExistingFilesystem`](ExistingFilesystem.md)
