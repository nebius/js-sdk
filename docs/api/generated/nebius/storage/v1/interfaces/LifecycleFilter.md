[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/storage/v1](../README.md) / LifecycleFilter

# Interface: LifecycleFilter

Defined in: src/generated/nebius/storage/v1/index.ts:2852

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/storage/v1/index.ts:2854

***

### $type

> **$type**: `"nebius.storage.v1.LifecycleFilter"`

Defined in: src/generated/nebius/storage/v1/index.ts:2853

***

### objectSizeGreaterThanBytes

> **objectSizeGreaterThanBytes**: `Long`

Defined in: src/generated/nebius/storage/v1/index.ts:2865

Minimum object size to which the rule applies.

***

### objectSizeLessThanBytes

> **objectSizeLessThanBytes**: `Long`

Defined in: src/generated/nebius/storage/v1/index.ts:2870

Maximum object size to which the rule applies.

***

### prefix

> **prefix**: `string`

Defined in: src/generated/nebius/storage/v1/index.ts:2860

Prefix identifying one or more objects to which the rule applies.
 If prefix is empty, the rule applies to all objects in the bucket.
