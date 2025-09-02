[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/mk8s/v1](../README.md) / ClusterServiceBaseClient

# Interface: ClusterServiceBaseClient

Defined in: src/generated/nebius/mk8s/v1/index.ts:743

## Extends

- `Client`

## Methods

### create()

> **create**(`request`, `metadata`, `options`, `callback`): `SurfaceCall`

Defined in: src/generated/nebius/mk8s/v1/index.ts:747

#### Parameters

##### request

[`CreateClusterRequest`](CreateClusterRequest.md)

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

Defined in: src/generated/nebius/mk8s/v1/index.ts:749

#### Parameters

##### request

[`DeleteClusterRequest`](DeleteClusterRequest.md)

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

Defined in: src/generated/nebius/mk8s/v1/index.ts:744

#### Parameters

##### request

[`GetClusterRequest`](GetClusterRequest.md)

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

Defined in: src/generated/nebius/mk8s/v1/index.ts:745

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

Defined in: src/generated/nebius/mk8s/v1/index.ts:746

#### Parameters

##### request

[`ListClustersRequest`](ListClustersRequest.md)

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

Defined in: src/generated/nebius/mk8s/v1/index.ts:748

#### Parameters

##### request

[`UpdateClusterRequest`](UpdateClusterRequest.md)

##### metadata

`Metadata`

##### options

`Partial`\<`CallOptions`\>

##### callback

(`error`, `response`) => `void`

#### Returns

`SurfaceCall`
