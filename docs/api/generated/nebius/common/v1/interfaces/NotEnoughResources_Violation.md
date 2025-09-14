[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/common/v1](../README.md) / NotEnoughResources_Violation

# Interface: NotEnoughResources_Violation

Defined in: src/generated/nebius/common/v1/index.ts:2139

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/common/v1/index.ts:2141

---

### $type

> **$type**: `"nebius.common.v1.NotEnoughResources.Violation"`

Defined in: src/generated/nebius/common/v1/index.ts:2140

---

### message

> **message**: `string`

Defined in: src/generated/nebius/common/v1/index.ts:2153

A description of how the resource is insufficient.

---

### requested

> **requested**: `string`

Defined in: src/generated/nebius/common/v1/index.ts:2158

Requested value.

---

### resourceType

> **resourceType**: `string`

Defined in: src/generated/nebius/common/v1/index.ts:2148

The type of resource that is insufficient.
This field is populated when it is possible to determine the lacking resource type.
**Not for programmatic use.**
