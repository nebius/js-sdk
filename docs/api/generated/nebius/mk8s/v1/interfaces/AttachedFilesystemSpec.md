[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/mk8s/v1](../README.md) / AttachedFilesystemSpec

# Interface: AttachedFilesystemSpec

Defined in: src/generated/nebius/mk8s/v1/index.ts:5180

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/mk8s/v1/index.ts:5182

---

### $type

> **$type**: `"nebius.mk8s.v1.AttachedFilesystemSpec"`

Defined in: src/generated/nebius/mk8s/v1/index.ts:5181

---

### attachMode

> **attachMode**: [`AttachedFilesystemSpec_AttachMode`](../type-aliases/AttachedFilesystemSpec_AttachMode.md)

Defined in: src/generated/nebius/mk8s/v1/index.ts:5183

---

### mountTag

> **mountTag**: `string`

Defined in: src/generated/nebius/mk8s/v1/index.ts:5188

Specifies the user-defined identifier, allowing to use it as a device in mount command.

---

### type?

> `optional` **type**: `object`

Defined in: src/generated/nebius/mk8s/v1/index.ts:5189

#### $case

> **$case**: `"existingFilesystem"`

#### existingFilesystem

> **existingFilesystem**: [`ExistingFilesystem`](ExistingFilesystem.md)
