[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/storage/v1alpha1](../README.md) / TransferSpec_Limiters

# Interface: TransferSpec_Limiters

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:2553

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:2555

---

### $type

> **$type**: `"nebius.storage.v1alpha1.TransferSpec.Limiters"`

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:2554

---

### bandwidthBytesPerSecond

> **bandwidthBytesPerSecond**: [`Long`](../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:2560

Maximum bandwidth in bytes per second. If set to zero, default limit will be applied.

---

### requestsPerSecond

> **requestsPerSecond**: [`Long`](../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:2565

Maximum number of requests per second. If set to zero, default limit will be applied.
