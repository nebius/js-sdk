[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/storage/v1alpha1](../README.md) / TransferSpec\_Limiters

# Interface: TransferSpec\_Limiters

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:2552

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:2554

***

### $type

> **$type**: `"nebius.storage.v1alpha1.TransferSpec.Limiters"`

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:2553

***

### bandwidthBytesPerSecond

> **bandwidthBytesPerSecond**: `Long`

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:2559

Maximum bandwidth in bytes per second. If set to zero, default limit will be applied.

***

### requestsPerSecond

> **requestsPerSecond**: `Long`

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:2564

Maximum number of requests per second. If set to zero, default limit will be applied.
