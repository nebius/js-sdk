[**@nebius/nodejs-sdk**](../../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../../README.md) / [api/nebius/common/error/v1alpha1](../README.md) / QuotaFailure\_Violation

# Interface: QuotaFailure\_Violation

Defined in: src/api/nebius/common/error/v1alpha1/index.ts:1284

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/common/error/v1alpha1/index.ts:1286

***

### $type

> **$type**: `"nebius.common.error.v1alpha1.QuotaFailure.Violation"`

Defined in: src/api/nebius/common/error/v1alpha1/index.ts:1285

***

### limit

> **limit**: `string`

Defined in: src/api/nebius/common/error/v1alpha1/index.ts:1301

Maximum permissible value.

***

### message

> **message**: `string`

Defined in: src/api/nebius/common/error/v1alpha1/index.ts:1296

A description of how the quota check failed.

***

### quota

> **quota**: `string`

Defined in: src/api/nebius/common/error/v1alpha1/index.ts:1291

Which quota check failed.

***

### requested

> **requested**: `string`

Defined in: src/api/nebius/common/error/v1alpha1/index.ts:1306

Requested value.
