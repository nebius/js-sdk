[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/common/v1](../README.md) / ServiceError

# Interface: ServiceError

Defined in: src/api/nebius/common/v1/index.ts:65

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/common/v1/index.ts:67

---

### $type

> **$type**: `"nebius.common.v1.ServiceError"`

Defined in: src/api/nebius/common/v1/index.ts:66

---

### code

> **code**: `string`

Defined in: src/api/nebius/common/v1/index.ts:79

Detailed error code, service-specific. E.g. "DnsZoneNotEmpty".
Name of the exception, without Exception suffix if not set.
Example: for PermissionDeniedException -> code == PermissionDenied.

---

### details?

> `optional` **details**: \{ `$case`: `"badRequest"`; `badRequest`: [`BadRequest`](BadRequest.md); \} \| \{ `$case`: `"badResourceState"`; `badResourceState`: [`BadResourceState`](BadResourceState.md); \} \| \{ `$case`: `"resourceNotFound"`; `resourceNotFound`: [`ResourceNotFound`](ResourceNotFound.md); \} \| \{ `$case`: `"resourceAlreadyExists"`; `resourceAlreadyExists`: [`ResourceAlreadyExists`](ResourceAlreadyExists.md); \} \| \{ `$case`: `"outOfRange"`; `outOfRange`: [`OutOfRange`](OutOfRange.md); \} \| \{ `$case`: `"permissionDenied"`; `permissionDenied`: [`PermissionDenied`](PermissionDenied.md); \} \| \{ `$case`: `"resourceConflict"`; `resourceConflict`: [`ResourceConflict`](ResourceConflict.md); \} \| \{ `$case`: `"operationAborted"`; `operationAborted`: [`OperationAborted`](OperationAborted.md); \} \| \{ `$case`: `"tooManyRequests"`; `tooManyRequests`: [`TooManyRequests`](TooManyRequests.md); \} \| \{ `$case`: `"quotaFailure"`; `quotaFailure`: [`QuotaFailure`](QuotaFailure.md); \} \| \{ `$case`: `"notEnoughResources"`; `notEnoughResources`: [`NotEnoughResources`](NotEnoughResources.md); \} \| \{ `$case`: `"internalError"`; `internalError`: [`InternalError`](InternalError.md); \}

Defined in: src/api/nebius/common/v1/index.ts:89

Additional message describing the error, if any.

---

### retryType

> **retryType**: [`ServiceError_RetryType`](../type-aliases/ServiceError_RetryType.md)

Defined in: src/api/nebius/common/v1/index.ts:84

Retry type tells how to provide retry, e.g.: just a single call or the whole logic before it.

---

### service

> **service**: `string`

Defined in: src/api/nebius/common/v1/index.ts:72

ID of Service which the error originated in. E.g. "dns".
