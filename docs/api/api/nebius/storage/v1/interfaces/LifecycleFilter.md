[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/storage/v1](../README.md) / LifecycleFilter

# Interface: LifecycleFilter

Defined in: src/api/nebius/storage/v1/index.ts:2853

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/storage/v1/index.ts:2855

---

### $type

> **$type**: `"nebius.storage.v1.LifecycleFilter"`

Defined in: src/api/nebius/storage/v1/index.ts:2854

---

### objectSizeGreaterThanBytes

> **objectSizeGreaterThanBytes**: [`Long`](../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/api/nebius/storage/v1/index.ts:2866

Minimum object size to which the rule applies.

---

### objectSizeLessThanBytes

> **objectSizeLessThanBytes**: [`Long`](../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/api/nebius/storage/v1/index.ts:2871

Maximum object size to which the rule applies.

---

### prefix

> **prefix**: `string`

Defined in: src/api/nebius/storage/v1/index.ts:2861

Prefix identifying one or more objects to which the rule applies.
If prefix is empty, the rule applies to all objects in the bucket.
