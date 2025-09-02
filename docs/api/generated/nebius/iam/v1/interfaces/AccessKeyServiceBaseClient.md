[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/iam/v1](../README.md) / AccessKeyServiceBaseClient

# ~~Interface: AccessKeyServiceBaseClient~~

Defined in: src/generated/nebius/iam/v1/index.ts:1540

## Deprecated

Deprecated, will be removed on 2025-09-01: Access keys API v1 is deprecated, use the v2 version instead. Keys produced by API v1 are available using v2..

## Extends

- `Client`

## Methods

### ~~activate()~~

> **activate**(`request`, `metadata`, `options`, `callback`): `SurfaceCall`

Defined in: src/generated/nebius/iam/v1/index.ts:1548

#### Parameters

##### request

[`ActivateAccessKeyRequest`](ActivateAccessKeyRequest.md)

##### metadata

`Metadata`

##### options

`Partial`\<`CallOptions`\>

##### callback

(`error`, `response`) => `void`

#### Returns

`SurfaceCall`

***

### ~~create()~~

> **create**(`request`, `metadata`, `options`, `callback`): `SurfaceCall`

Defined in: src/generated/nebius/iam/v1/index.ts:1541

#### Parameters

##### request

[`CreateAccessKeyRequest`](CreateAccessKeyRequest.md)

##### metadata

`Metadata`

##### options

`Partial`\<`CallOptions`\>

##### callback

(`error`, `response`) => `void`

#### Returns

`SurfaceCall`

***

### ~~deactivate()~~

> **deactivate**(`request`, `metadata`, `options`, `callback`): `SurfaceCall`

Defined in: src/generated/nebius/iam/v1/index.ts:1549

#### Parameters

##### request

[`DeactivateAccessKeyRequest`](DeactivateAccessKeyRequest.md)

##### metadata

`Metadata`

##### options

`Partial`\<`CallOptions`\>

##### callback

(`error`, `response`) => `void`

#### Returns

`SurfaceCall`

***

### ~~delete()~~

> **delete**(`request`, `metadata`, `options`, `callback`): `SurfaceCall`

Defined in: src/generated/nebius/iam/v1/index.ts:1550

#### Parameters

##### request

[`DeleteAccessKeyRequest`](DeleteAccessKeyRequest.md)

##### metadata

`Metadata`

##### options

`Partial`\<`CallOptions`\>

##### callback

(`error`, `response`) => `void`

#### Returns

`SurfaceCall`

***

### ~~getByAwsId()~~

> **getByAwsId**(`request`, `metadata`, `options`, `callback`): `SurfaceCall`

Defined in: src/generated/nebius/iam/v1/index.ts:1546

#### Parameters

##### request

[`GetAccessKeyByAwsIdRequest`](GetAccessKeyByAwsIdRequest.md)

##### metadata

`Metadata`

##### options

`Partial`\<`CallOptions`\>

##### callback

(`error`, `response`) => `void`

#### Returns

`SurfaceCall`

***

### ~~getById()~~

> **getById**(`request`, `metadata`, `options`, `callback`): `SurfaceCall`

Defined in: src/generated/nebius/iam/v1/index.ts:1545

#### Parameters

##### request

[`GetAccessKeyByIdRequest`](GetAccessKeyByIdRequest.md)

##### metadata

`Metadata`

##### options

`Partial`\<`CallOptions`\>

##### callback

(`error`, `response`) => `void`

#### Returns

`SurfaceCall`

***

### ~~getSecretOnce()~~

> **getSecretOnce**(`request`, `metadata`, `options`, `callback`): `SurfaceCall`

Defined in: src/generated/nebius/iam/v1/index.ts:1547

#### Parameters

##### request

[`GetAccessKeySecretOnceRequest`](GetAccessKeySecretOnceRequest.md)

##### metadata

`Metadata`

##### options

`Partial`\<`CallOptions`\>

##### callback

(`error`, `response`) => `void`

#### Returns

`SurfaceCall`

***

### ~~list()~~

> **list**(`request`, `metadata`, `options`, `callback`): `SurfaceCall`

Defined in: src/generated/nebius/iam/v1/index.ts:1542

#### Parameters

##### request

[`ListAccessKeysRequest`](ListAccessKeysRequest.md)

##### metadata

`Metadata`

##### options

`Partial`\<`CallOptions`\>

##### callback

(`error`, `response`) => `void`

#### Returns

`SurfaceCall`

***

### ~~listByAccount()~~

> **listByAccount**(`request`, `metadata`, `options`, `callback`): `SurfaceCall`

Defined in: src/generated/nebius/iam/v1/index.ts:1543

#### Parameters

##### request

[`ListAccessKeysByAccountRequest`](ListAccessKeysByAccountRequest.md)

##### metadata

`Metadata`

##### options

`Partial`\<`CallOptions`\>

##### callback

(`error`, `response`) => `void`

#### Returns

`SurfaceCall`

***

### ~~update()~~

> **update**(`request`, `metadata`, `options`, `callback`): `SurfaceCall`

Defined in: src/generated/nebius/iam/v1/index.ts:1544

#### Parameters

##### request

[`UpdateAccessKeyRequest`](UpdateAccessKeyRequest.md)

##### metadata

`Metadata`

##### options

`Partial`\<`CallOptions`\>

##### callback

(`error`, `response`) => `void`

#### Returns

`SurfaceCall`
