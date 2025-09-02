[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/compute/v1](../README.md) / GpuClusterServiceBaseClient

# Interface: GpuClusterServiceBaseClient

Defined in: src/generated/nebius/compute/v1/index.ts:4263

## Extends

- `Client`

## Methods

### create()

> **create**(`request`, `metadata`, `options`, `callback`): `SurfaceCall`

Defined in: src/generated/nebius/compute/v1/index.ts:4267

#### Parameters

##### request

[`CreateGpuClusterRequest`](CreateGpuClusterRequest.md)

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

Defined in: src/generated/nebius/compute/v1/index.ts:4269

#### Parameters

##### request

[`DeleteGpuClusterRequest`](DeleteGpuClusterRequest.md)

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

Defined in: src/generated/nebius/compute/v1/index.ts:4264

#### Parameters

##### request

[`GetGpuClusterRequest`](GetGpuClusterRequest.md)

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

Defined in: src/generated/nebius/compute/v1/index.ts:4265

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

Defined in: src/generated/nebius/compute/v1/index.ts:4266

#### Parameters

##### request

[`ListGpuClustersRequest`](ListGpuClustersRequest.md)

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

Defined in: src/generated/nebius/compute/v1/index.ts:4270

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

Defined in: src/generated/nebius/compute/v1/index.ts:4268

#### Parameters

##### request

[`UpdateGpuClusterRequest`](UpdateGpuClusterRequest.md)

##### metadata

`Metadata`

##### options

`Partial`\<`CallOptions`\>

##### callback

(`error`, `response`) => `void`

#### Returns

`SurfaceCall`
