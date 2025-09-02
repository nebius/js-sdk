[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/iam/v2](../README.md) / AccessKeyServiceBaseClient

# Interface: AccessKeyServiceBaseClient

Defined in: src/generated/nebius/iam/v2/index.ts:1481

## Extends

- `Client`

## Methods

### activate()

> **activate**(`request`, `metadata`, `options`, `callback`): `SurfaceCall`

Defined in: src/generated/nebius/iam/v2/index.ts:1487

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

### activateByAwsId()

> **activateByAwsId**(`request`, `metadata`, `options`, `callback`): `SurfaceCall`

Defined in: src/generated/nebius/iam/v2/index.ts:1492

#### Parameters

##### request

[`ActivateAccessKeyByAwsIdRequest`](ActivateAccessKeyByAwsIdRequest.md)

##### metadata

`Metadata`

##### options

`Partial`\<`CallOptions`\>

##### callback

(`error`, `response`) => `void`

#### Returns

`SurfaceCall`

***

### create()

> **create**(`request`, `metadata`, `options`, `callback`): `SurfaceCall`

Defined in: src/generated/nebius/iam/v2/index.ts:1482

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

### deactivate()

> **deactivate**(`request`, `metadata`, `options`, `callback`): `SurfaceCall`

Defined in: src/generated/nebius/iam/v2/index.ts:1488

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

### deactivateByAwsId()

> **deactivateByAwsId**(`request`, `metadata`, `options`, `callback`): `SurfaceCall`

Defined in: src/generated/nebius/iam/v2/index.ts:1493

#### Parameters

##### request

[`DeactivateAccessKeyByAwsIdRequest`](DeactivateAccessKeyByAwsIdRequest.md)

##### metadata

`Metadata`

##### options

`Partial`\<`CallOptions`\>

##### callback

(`error`, `response`) => `void`

#### Returns

`SurfaceCall`

***

### delete()

> **delete**(`request`, `metadata`, `options`, `callback`): `SurfaceCall`

Defined in: src/generated/nebius/iam/v2/index.ts:1486

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

### deleteByAwsId()

> **deleteByAwsId**(`request`, `metadata`, `options`, `callback`): `SurfaceCall`

Defined in: src/generated/nebius/iam/v2/index.ts:1491

#### Parameters

##### request

[`DeleteAccessKeyByAwsIdRequest`](DeleteAccessKeyByAwsIdRequest.md)

##### metadata

`Metadata`

##### options

`Partial`\<`CallOptions`\>

##### callback

(`error`, `response`) => `void`

#### Returns

`SurfaceCall`

***

### get()

> **get**(`request`, `metadata`, `options`, `callback`): `SurfaceCall`

Defined in: src/generated/nebius/iam/v2/index.ts:1483

#### Parameters

##### request

[`GetAccessKeyRequest`](GetAccessKeyRequest.md)

##### metadata

`Metadata`

##### options

`Partial`\<`CallOptions`\>

##### callback

(`error`, `response`) => `void`

#### Returns

`SurfaceCall`

***

### getByAwsId()

> **getByAwsId**(`request`, `metadata`, `options`, `callback`): `SurfaceCall`

Defined in: src/generated/nebius/iam/v2/index.ts:1490

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

### list()

> **list**(`request`, `metadata`, `options`, `callback`): `SurfaceCall`

Defined in: src/generated/nebius/iam/v2/index.ts:1484

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

### listByAccount()

> **listByAccount**(`request`, `metadata`, `options`, `callback`): `SurfaceCall`

Defined in: src/generated/nebius/iam/v2/index.ts:1489

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

### update()

> **update**(`request`, `metadata`, `options`, `callback`): `SurfaceCall`

Defined in: src/generated/nebius/iam/v2/index.ts:1485

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
