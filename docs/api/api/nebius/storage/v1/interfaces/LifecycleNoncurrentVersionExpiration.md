[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/storage/v1](../README.md) / LifecycleNoncurrentVersionExpiration

# Interface: LifecycleNoncurrentVersionExpiration

Defined in: src/api/nebius/storage/v1/index.ts:3159

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/storage/v1/index.ts:3161

---

### $type

> **$type**: `"nebius.storage.v1.LifecycleNoncurrentVersionExpiration"`

Defined in: src/api/nebius/storage/v1/index.ts:3160

---

### newerNoncurrentVersions?

> `optional` **newerNoncurrentVersions**: `number`

Defined in: src/api/nebius/storage/v1/index.ts:3166

Specifies how many noncurrent versions the system will retain.

---

### noncurrentDays

> **noncurrentDays**: `number`

Defined in: src/api/nebius/storage/v1/index.ts:3171

Specifies the number of days an object is noncurrent before the system will expire it.
