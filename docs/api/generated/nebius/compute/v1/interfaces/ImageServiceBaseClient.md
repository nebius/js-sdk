[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/compute/v1](../README.md) / ImageServiceBaseClient

# Interface: ImageServiceBaseClient

Defined in: src/generated/nebius/compute/v1/index.ts:5514

## Extends

- `Client`

## Methods

### get()

> **get**(`request`, `metadata`, `options`, `callback`): `SurfaceCall`

Defined in: src/generated/nebius/compute/v1/index.ts:5515

#### Parameters

##### request

[`GetImageRequest`](GetImageRequest.md)

##### metadata

`Metadata`

##### options

`Partial`\<`CallOptions`\>

##### callback

(`error`, `response`) => `void`

#### Returns

`SurfaceCall`

***

### getByName()

> **getByName**(`request`, `metadata`, `options`, `callback`): `SurfaceCall`

Defined in: src/generated/nebius/compute/v1/index.ts:5516

#### Parameters

##### request

[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

##### metadata

`Metadata`

##### options

`Partial`\<`CallOptions`\>

##### callback

(`error`, `response`) => `void`

#### Returns

`SurfaceCall`

***

### getLatestByFamily()

> **getLatestByFamily**(`request`, `metadata`, `options`, `callback`): `SurfaceCall`

Defined in: src/generated/nebius/compute/v1/index.ts:5517

#### Parameters

##### request

[`GetImageLatestByFamilyRequest`](GetImageLatestByFamilyRequest.md)

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

Defined in: src/generated/nebius/compute/v1/index.ts:5518

#### Parameters

##### request

[`ListImagesRequest`](ListImagesRequest.md)

##### metadata

`Metadata`

##### options

`Partial`\<`CallOptions`\>

##### callback

(`error`, `response`) => `void`

#### Returns

`SurfaceCall`

***

### listOperationsByParent()

> **listOperationsByParent**(`request`, `metadata`, `options`, `callback`): `SurfaceCall`

Defined in: src/generated/nebius/compute/v1/index.ts:5519

#### Parameters

##### request

[`ListOperationsByParentRequest`](ListOperationsByParentRequest.md)

##### metadata

`Metadata`

##### options

`Partial`\<`CallOptions`\>

##### callback

(`error`, `response`) => `void`

#### Returns

`SurfaceCall`
