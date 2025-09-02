[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/common/v1](../README.md) / NotEnoughResources\_Violation

# Interface: NotEnoughResources\_Violation

Defined in: src/generated/nebius/common/v1/index.ts:2138

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/common/v1/index.ts:2140

***

### $type

> **$type**: `"nebius.common.v1.NotEnoughResources.Violation"`

Defined in: src/generated/nebius/common/v1/index.ts:2139

***

### message

> **message**: `string`

Defined in: src/generated/nebius/common/v1/index.ts:2152

A description of how the resource is insufficient.

***

### requested

> **requested**: `string`

Defined in: src/generated/nebius/common/v1/index.ts:2157

Requested value.

***

### resourceType

> **resourceType**: `string`

Defined in: src/generated/nebius/common/v1/index.ts:2147

The type of resource that is insufficient.
 This field is populated when it is possible to determine the lacking resource type.
 **Not for programmatic use.**
