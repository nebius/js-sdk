[**@nebius/nodejs-sdk**](../../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../../README.md) / [api/nebius/common/error/v1alpha1](../README.md) / ResourceConflict

# Interface: ResourceConflict

Defined in: src/api/nebius/common/error/v1alpha1/index.ts:522

There is a difference between the actual resource state and the expected one.

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/common/error/v1alpha1/index.ts:524

---

### $type

> **$type**: `"nebius.common.error.v1alpha1.ResourceConflict"`

Defined in: src/api/nebius/common/error/v1alpha1/index.ts:523

---

### message

> **message**: `string`

Defined in: src/api/nebius/common/error/v1alpha1/index.ts:534

Detailed info about conflict.

---

### resourceId

> **resourceId**: `string`

Defined in: src/api/nebius/common/error/v1alpha1/index.ts:529

ID of conflicting resource.
