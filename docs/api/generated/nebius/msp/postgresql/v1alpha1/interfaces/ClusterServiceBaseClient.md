[**@nebius/nodejs-sdk**](../../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../../README.md) / [generated/nebius/msp/postgresql/v1alpha1](../README.md) / ClusterServiceBaseClient

# Interface: ClusterServiceBaseClient

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2295

## Extends

- `Client`

## Methods

### create()

> **create**(`request`, `metadata`, `options`, `callback`): `SurfaceCall`

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2300

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

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2301

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

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2296

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

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2297

#### Parameters

##### request

[`GetByNameRequest`](../../../../common/v1/interfaces/GetByNameRequest.md)

##### metadata

`Metadata`

##### options

`Partial`\<`CallOptions`\>

##### callback

(`error`, `response`) => `void`

#### Returns

`SurfaceCall`

***

### getForBackup()

> **getForBackup**(`request`, `metadata`, `options`, `callback`): `SurfaceCall`

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2298

#### Parameters

##### request

[`GetClusterForBackupRequest`](GetClusterForBackupRequest.md)

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

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2299

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

### restore()

> **restore**(`request`, `metadata`, `options`, `callback`): `SurfaceCall`

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2303

#### Parameters

##### request

[`RestoreClusterRequest`](RestoreClusterRequest.md)

##### metadata

`Metadata`

##### options

`Partial`\<`CallOptions`\>

##### callback

(`error`, `response`) => `void`

#### Returns

`SurfaceCall`

***

### start()

> **start**(`request`, `metadata`, `options`, `callback`): `SurfaceCall`

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2305

#### Parameters

##### request

[`StartClusterRequest`](StartClusterRequest.md)

##### metadata

`Metadata`

##### options

`Partial`\<`CallOptions`\>

##### callback

(`error`, `response`) => `void`

#### Returns

`SurfaceCall`

***

### stop()

> **stop**(`request`, `metadata`, `options`, `callback`): `SurfaceCall`

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2304

#### Parameters

##### request

[`StopClusterRequest`](StopClusterRequest.md)

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

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2302

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
