[**@nebius/nodejs-sdk**](../../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../../README.md) / [generated/nebius/msp/postgresql/v1alpha1](../README.md) / BackupServiceBaseClient

# Interface: BackupServiceBaseClient

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:656

## Extends

- `Client`

## Methods

### create()

> **create**(`request`, `metadata`, `options`, `callback`): `SurfaceCall`

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:660

#### Parameters

##### request

[`CreateBackupRequest`](CreateBackupRequest.md)

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

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:661

#### Parameters

##### request

[`DeleteBackupRequest`](DeleteBackupRequest.md)

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

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:657

#### Parameters

##### request

[`GetBackupRequest`](GetBackupRequest.md)

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

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:658

#### Parameters

##### request

[`ListBackupsRequest`](ListBackupsRequest.md)

##### metadata

`Metadata`

##### options

`Partial`\<`CallOptions`\>

##### callback

(`error`, `response`) => `void`

#### Returns

`SurfaceCall`

***

### listByCluster()

> **listByCluster**(`request`, `metadata`, `options`, `callback`): `SurfaceCall`

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:659

#### Parameters

##### request

[`ListBackupsByClusterRequest`](ListBackupsByClusterRequest.md)

##### metadata

`Metadata`

##### options

`Partial`\<`CallOptions`\>

##### callback

(`error`, `response`) => `void`

#### Returns

`SurfaceCall`
