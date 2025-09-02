[**@nebius/nodejs-sdk**](../../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../../README.md) / [generated/nebius/common/error/v1alpha1](../README.md) / ServiceError

# ~~Interface: ServiceError~~

Defined in: src/generated/nebius/common/error/v1alpha1/index.ts:1495

## Deprecated

Deprecated.

## Properties

### ~~\[unknownFieldsSymbol\]?~~

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/common/error/v1alpha1/index.ts:1497

***

### ~~$type~~

> **$type**: `"nebius.common.error.v1alpha1.ServiceError"`

Defined in: src/generated/nebius/common/error/v1alpha1/index.ts:1496

***

### ~~code~~

> **code**: `string`

Defined in: src/generated/nebius/common/error/v1alpha1/index.ts:1509

Detailed error code, service-specific. E.g. "DnsZoneNotEmpty".
 Name of the exception, without Exception suffix if not set
 Example: for PermissionDeniedException -> code == PermissionDenied

***

### ~~details?~~

> `optional` **details**: \{ `$case`: `"badRequest"`; `badRequest`: [`BadRequest`](BadRequest.md); \} \| \{ `$case`: `"badResourceState"`; `badResourceState`: [`BadResourceState`](BadResourceState.md); \} \| \{ `$case`: `"resourceNotFound"`; `resourceNotFound`: [`ResourceNotFound`](ResourceNotFound.md); \} \| \{ `$case`: `"resourceAlreadyExists"`; `resourceAlreadyExists`: [`ResourceAlreadyExists`](ResourceAlreadyExists.md); \} \| \{ `$case`: `"outOfRange"`; `outOfRange`: [`OutOfRange`](OutOfRange.md); \} \| \{ `$case`: `"permissionDenied"`; `permissionDenied`: [`PermissionDenied`](PermissionDenied.md); \} \| \{ `$case`: `"resourceConflict"`; `resourceConflict`: [`ResourceConflict`](ResourceConflict.md); \} \| \{ `$case`: `"operationAborted"`; `operationAborted`: [`OperationAborted`](OperationAborted.md); \} \| \{ `$case`: `"tooManyRequests"`; `tooManyRequests`: [`TooManyRequests`](TooManyRequests.md); \} \| \{ `$case`: `"quotaFailure"`; `quotaFailure`: [`QuotaFailure`](QuotaFailure.md); \} \| \{ `$case`: `"internalError"`; `internalError`: [`InternalError`](InternalError.md); \}

Defined in: src/generated/nebius/common/error/v1alpha1/index.ts:1519

Additional message describing the error, if any.

***

### ~~retryType~~

> **retryType**: [`ServiceError_RetryType`](../type-aliases/ServiceError_RetryType.md)

Defined in: src/generated/nebius/common/error/v1alpha1/index.ts:1514

Retry type tells how to provide retry, e.g.: just a single call or the whole logic before it.

***

### ~~service~~

> **service**: `string`

Defined in: src/generated/nebius/common/error/v1alpha1/index.ts:1502

ID of Service which the error originated in. E.g. "dns".
