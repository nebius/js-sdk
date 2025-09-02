[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/compute/v1](../README.md) / FilesystemServiceBaseClient

# Interface: FilesystemServiceBaseClient

Defined in: src/generated/nebius/compute/v1/index.ts:2706

## Extends

- `Client`

## Methods

### create()

> **create**(`request`, `metadata`, `options`, `callback`): `SurfaceCall`

Defined in: src/generated/nebius/compute/v1/index.ts:2710

#### Parameters

##### request

[`CreateFilesystemRequest`](CreateFilesystemRequest.md)

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

Defined in: src/generated/nebius/compute/v1/index.ts:2712

#### Parameters

##### request

[`DeleteFilesystemRequest`](DeleteFilesystemRequest.md)

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

Defined in: src/generated/nebius/compute/v1/index.ts:2707

#### Parameters

##### request

[`GetFilesystemRequest`](GetFilesystemRequest.md)

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

Defined in: src/generated/nebius/compute/v1/index.ts:2708

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

### list()

> **list**(`request`, `metadata`, `options`, `callback`): `SurfaceCall`

Defined in: src/generated/nebius/compute/v1/index.ts:2709

#### Parameters

##### request

[`ListFilesystemsRequest`](ListFilesystemsRequest.md)

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

Defined in: src/generated/nebius/compute/v1/index.ts:2713

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

***

### update()

> **update**(`request`, `metadata`, `options`, `callback`): `SurfaceCall`

Defined in: src/generated/nebius/compute/v1/index.ts:2711

#### Parameters

##### request

[`UpdateFilesystemRequest`](UpdateFilesystemRequest.md)

##### metadata

`Metadata`

##### options

`Partial`\<`CallOptions`\>

##### callback

(`error`, `response`) => `void`

#### Returns

`SurfaceCall`
