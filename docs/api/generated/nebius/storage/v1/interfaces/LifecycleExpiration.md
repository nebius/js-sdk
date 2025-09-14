[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/storage/v1](../README.md) / LifecycleExpiration

# Interface: LifecycleExpiration

Defined in: src/generated/nebius/storage/v1/index.ts:2989

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/storage/v1/index.ts:2991

---

### $type

> **$type**: `"nebius.storage.v1.LifecycleExpiration"`

Defined in: src/generated/nebius/storage/v1/index.ts:2990

---

### expiredObjectDeleteMarker

> **expiredObjectDeleteMarker**: `boolean`

Defined in: src/generated/nebius/storage/v1/index.ts:2999

Indicates whether the system will remove a "delete marker" with no noncurrent versions.
If set to true, the "delete marker" will be permanently removed.
If set to false the policy takes no action.
This cannot be specified with Days or Date in a LifecycleExpiration Policy.

---

### expiredWith?

> `optional` **expiredWith**: \{ `$case`: `"date"`; `date`: [`Dayjs`](../../../../../runtime/protos/core/dayjs/classes/Dayjs.md); \} \| \{ `$case`: `"days"`; `days`: `number`; \}

Defined in: src/generated/nebius/storage/v1/index.ts:3000
