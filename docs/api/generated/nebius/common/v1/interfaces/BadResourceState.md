[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/common/v1](../README.md) / BadResourceState

# Interface: BadResourceState

Defined in: src/generated/nebius/common/v1/index.ts:823

The resource we are trying to use, create, change or delete is in a bad state and cannot be used.

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/common/v1/index.ts:825

---

### $type

> **$type**: `"nebius.common.v1.BadResourceState"`

Defined in: src/generated/nebius/common/v1/index.ts:824

---

### message

> **message**: `string`

Defined in: src/generated/nebius/common/v1/index.ts:835

The reason why this state is bad and cannot be used.

---

### resourceId

> **resourceId**: `string`

Defined in: src/generated/nebius/common/v1/index.ts:830

ID of the resource which is bad.
