[**@nebius/nodejs-sdk**](../../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../../README.md) / [generated/nebius/common/error/v1alpha1](../README.md) / OperationAborted

# Interface: OperationAborted

Defined in: src/generated/nebius/common/error/v1alpha1/index.ts:637

Operation on the resource has been aborted by a subsequent operation.

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/common/error/v1alpha1/index.ts:639

---

### $type

> **$type**: `"nebius.common.error.v1alpha1.OperationAborted"`

Defined in: src/generated/nebius/common/error/v1alpha1/index.ts:638

---

### abortedByOperationId

> **abortedByOperationId**: `string`

Defined in: src/generated/nebius/common/error/v1alpha1/index.ts:649

ID of the subsequent operation

---

### operationId

> **operationId**: `string`

Defined in: src/generated/nebius/common/error/v1alpha1/index.ts:644

ID of the aborted operation

---

### resourceId

> **resourceId**: `string`

Defined in: src/generated/nebius/common/error/v1alpha1/index.ts:654

Resource ID corresponding to both of the operations
