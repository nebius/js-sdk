[**@nebius/nodejs-sdk**](../../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../../README.md) / [generated/nebius/msp/mlflow/v1alpha1](../README.md) / ClusterServiceBaseClient

# Interface: ClusterServiceBaseClient

Defined in: src/generated/nebius/msp/mlflow/v1alpha1/index.ts:731

## Extends

- `Client`

## Methods

### create()

> **create**(`request`, `metadata`, `options`, `callback`): `SurfaceCall`

Defined in: src/generated/nebius/msp/mlflow/v1alpha1/index.ts:735

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

Defined in: src/generated/nebius/msp/mlflow/v1alpha1/index.ts:736

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

Defined in: src/generated/nebius/msp/mlflow/v1alpha1/index.ts:732

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

Defined in: src/generated/nebius/msp/mlflow/v1alpha1/index.ts:733

#### Parameters

##### request

[`GetClusterByNameRequest`](GetClusterByNameRequest.md)

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

Defined in: src/generated/nebius/msp/mlflow/v1alpha1/index.ts:734

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
