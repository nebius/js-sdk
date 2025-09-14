[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/common/v1](../README.md) / BadResourceState

# Interface: BadResourceState

Defined in: src/api/nebius/common/v1/index.ts:824

The resource we are trying to use, create, change or delete is in a bad state and cannot be used.

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/common/v1/index.ts:826

---

### $type

> **$type**: `"nebius.common.v1.BadResourceState"`

Defined in: src/api/nebius/common/v1/index.ts:825

---

### message

> **message**: `string`

Defined in: src/api/nebius/common/v1/index.ts:836

The reason why this state is bad and cannot be used.

---

### resourceId

> **resourceId**: `string`

Defined in: src/api/nebius/common/v1/index.ts:831

ID of the resource which is bad.
