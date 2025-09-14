[**@nebius/nodejs-sdk**](../../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../../README.md) / [api/nebius/common/error/v1alpha1](../README.md) / OperationAborted

# Interface: OperationAborted

Defined in: src/api/nebius/common/error/v1alpha1/index.ts:638

Operation on the resource has been aborted by a subsequent operation.

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/common/error/v1alpha1/index.ts:640

***

### $type

> **$type**: `"nebius.common.error.v1alpha1.OperationAborted"`

Defined in: src/api/nebius/common/error/v1alpha1/index.ts:639

***

### abortedByOperationId

> **abortedByOperationId**: `string`

Defined in: src/api/nebius/common/error/v1alpha1/index.ts:650

ID of the subsequent operation

***

### operationId

> **operationId**: `string`

Defined in: src/api/nebius/common/error/v1alpha1/index.ts:645

ID of the aborted operation

***

### resourceId

> **resourceId**: `string`

Defined in: src/api/nebius/common/error/v1alpha1/index.ts:655

Resource ID corresponding to both of the operations
