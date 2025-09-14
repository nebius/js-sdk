[**@nebius/nodejs-sdk**](../../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../../README.md) / [api/nebius/common/error/v1alpha1](../README.md) / BadResourceState

# Interface: BadResourceState

Defined in: src/api/nebius/common/error/v1alpha1/index.ts:220

The resource we are trying to use, create, change or delete is in a bad state and cannot be used.

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/common/error/v1alpha1/index.ts:222

---

### $type

> **$type**: `"nebius.common.error.v1alpha1.BadResourceState"`

Defined in: src/api/nebius/common/error/v1alpha1/index.ts:221

---

### message

> **message**: `string`

Defined in: src/api/nebius/common/error/v1alpha1/index.ts:232

The reason why this state is bad and cannot be used.

---

### resourceId

> **resourceId**: `string`

Defined in: src/api/nebius/common/error/v1alpha1/index.ts:227

ID of the resource which is bad.
