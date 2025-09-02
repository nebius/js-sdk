[**@nebius/nodejs-sdk**](../../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../../README.md) / [generated/nebius/msp/postgresql/v1alpha1](../README.md) / ClusterService

# Class: ClusterService

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2318

## Implements

- `ClusterService`

## Constructors

### Constructor

> **new ClusterService**(`sdk`): `ClusterService`

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2400

#### Parameters

##### sdk

[`SDKInterface`](../../../../../../sdk/interfaces/SDKInterface.md)

#### Returns

`ClusterService`

## Properties

### $type

> **$type**: `"nebius.msp.postgresql.v1alpha1.ClusterService"`

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2319

## Methods

### create()

#### Call Signature

> **create**(`request`): `Request`\<[`CreateClusterRequest`](../interfaces/CreateClusterRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2355

Creates a PostgreSQL cluster in the specified folder.

##### Parameters

###### request

[`CreateClusterRequest`](../interfaces/CreateClusterRequest.md)

##### Returns

`Request`\<[`CreateClusterRequest`](../interfaces/CreateClusterRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **create**(`request`, `metadata`): `Request`\<[`CreateClusterRequest`](../interfaces/CreateClusterRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2356

##### Parameters

###### request

[`CreateClusterRequest`](../interfaces/CreateClusterRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`CreateClusterRequest`](../interfaces/CreateClusterRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **create**(`request`, `metadata`, `options`): `Request`\<[`CreateClusterRequest`](../interfaces/CreateClusterRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2357

##### Parameters

###### request

[`CreateClusterRequest`](../interfaces/CreateClusterRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`CreateClusterRequest`](../interfaces/CreateClusterRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **create**(`request`): `Request`\<[`CreateClusterRequest`](../interfaces/CreateClusterRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2458

Creates a PostgreSQL cluster in the specified folder.

##### Parameters

###### request

[`CreateClusterRequest`](../interfaces/CreateClusterRequest.md)

##### Returns

`Request`\<[`CreateClusterRequest`](../interfaces/CreateClusterRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **create**(`request`, `metadata`): `Request`\<[`CreateClusterRequest`](../interfaces/CreateClusterRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2459

Creates a PostgreSQL cluster in the specified folder.

##### Parameters

###### request

[`CreateClusterRequest`](../interfaces/CreateClusterRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`CreateClusterRequest`](../interfaces/CreateClusterRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **create**(`request`, `metadata`, `options`): `Request`\<[`CreateClusterRequest`](../interfaces/CreateClusterRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2460

Creates a PostgreSQL cluster in the specified folder.

##### Parameters

###### request

[`CreateClusterRequest`](../interfaces/CreateClusterRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`CreateClusterRequest`](../interfaces/CreateClusterRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

***

### delete()

#### Call Signature

> **delete**(`request`): `Request`\<[`DeleteClusterRequest`](../interfaces/DeleteClusterRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2362

Deletes the specified PostgreSQL cluster.

##### Parameters

###### request

[`DeleteClusterRequest`](../interfaces/DeleteClusterRequest.md)

##### Returns

`Request`\<[`DeleteClusterRequest`](../interfaces/DeleteClusterRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **delete**(`request`, `metadata`): `Request`\<[`DeleteClusterRequest`](../interfaces/DeleteClusterRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2363

##### Parameters

###### request

[`DeleteClusterRequest`](../interfaces/DeleteClusterRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`DeleteClusterRequest`](../interfaces/DeleteClusterRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **delete**(`request`, `metadata`, `options`): `Request`\<[`DeleteClusterRequest`](../interfaces/DeleteClusterRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2364

##### Parameters

###### request

[`DeleteClusterRequest`](../interfaces/DeleteClusterRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`DeleteClusterRequest`](../interfaces/DeleteClusterRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **delete**(`request`): `Request`\<[`DeleteClusterRequest`](../interfaces/DeleteClusterRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2473

Deletes the specified PostgreSQL cluster.

##### Parameters

###### request

[`DeleteClusterRequest`](../interfaces/DeleteClusterRequest.md)

##### Returns

`Request`\<[`DeleteClusterRequest`](../interfaces/DeleteClusterRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **delete**(`request`, `metadata`): `Request`\<[`DeleteClusterRequest`](../interfaces/DeleteClusterRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2474

Deletes the specified PostgreSQL cluster.

##### Parameters

###### request

[`DeleteClusterRequest`](../interfaces/DeleteClusterRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`DeleteClusterRequest`](../interfaces/DeleteClusterRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **delete**(`request`, `metadata`, `options`): `Request`\<[`DeleteClusterRequest`](../interfaces/DeleteClusterRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2475

Deletes the specified PostgreSQL cluster.

##### Parameters

###### request

[`DeleteClusterRequest`](../interfaces/DeleteClusterRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`DeleteClusterRequest`](../interfaces/DeleteClusterRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

***

### get()

#### Call Signature

> **get**(`request`): `Request`\<[`GetClusterRequest`](../interfaces/GetClusterRequest.md), [`Cluster`](../interfaces/Cluster.md)\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2325

Returns the specified PostgreSQL Cluster resource.
 To get the list of available PostgreSQL Cluster resources, make a [List] request.

##### Parameters

###### request

[`GetClusterRequest`](../interfaces/GetClusterRequest.md)

##### Returns

`Request`\<[`GetClusterRequest`](../interfaces/GetClusterRequest.md), [`Cluster`](../interfaces/Cluster.md)\>

#### Call Signature

> **get**(`request`, `metadata`): `Request`\<[`GetClusterRequest`](../interfaces/GetClusterRequest.md), [`Cluster`](../interfaces/Cluster.md)\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2326

##### Parameters

###### request

[`GetClusterRequest`](../interfaces/GetClusterRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`GetClusterRequest`](../interfaces/GetClusterRequest.md), [`Cluster`](../interfaces/Cluster.md)\>

#### Call Signature

> **get**(`request`, `metadata`, `options`): `Request`\<[`GetClusterRequest`](../interfaces/GetClusterRequest.md), [`Cluster`](../interfaces/Cluster.md)\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2327

##### Parameters

###### request

[`GetClusterRequest`](../interfaces/GetClusterRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`GetClusterRequest`](../interfaces/GetClusterRequest.md), [`Cluster`](../interfaces/Cluster.md)\>

#### Call Signature

> **get**(`request`): `Request`\<[`GetClusterRequest`](../interfaces/GetClusterRequest.md), [`Cluster`](../interfaces/Cluster.md)\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2410

Returns the specified PostgreSQL Cluster resource.
 To get the list of available PostgreSQL Cluster resources, make a [List] request.

##### Parameters

###### request

[`GetClusterRequest`](../interfaces/GetClusterRequest.md)

##### Returns

`Request`\<[`GetClusterRequest`](../interfaces/GetClusterRequest.md), [`Cluster`](../interfaces/Cluster.md)\>

#### Call Signature

> **get**(`request`, `metadata`): `Request`\<[`GetClusterRequest`](../interfaces/GetClusterRequest.md), [`Cluster`](../interfaces/Cluster.md)\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2411

Returns the specified PostgreSQL Cluster resource.
 To get the list of available PostgreSQL Cluster resources, make a [List] request.

##### Parameters

###### request

[`GetClusterRequest`](../interfaces/GetClusterRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`GetClusterRequest`](../interfaces/GetClusterRequest.md), [`Cluster`](../interfaces/Cluster.md)\>

#### Call Signature

> **get**(`request`, `metadata`, `options`): `Request`\<[`GetClusterRequest`](../interfaces/GetClusterRequest.md), [`Cluster`](../interfaces/Cluster.md)\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2412

Returns the specified PostgreSQL Cluster resource.
 To get the list of available PostgreSQL Cluster resources, make a [List] request.

##### Parameters

###### request

[`GetClusterRequest`](../interfaces/GetClusterRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`GetClusterRequest`](../interfaces/GetClusterRequest.md), [`Cluster`](../interfaces/Cluster.md)\>

***

### getByName()

#### Call Signature

> **getByName**(`request`): `Request`\<[`GetByNameRequest`](../../../../common/v1/interfaces/GetByNameRequest.md), [`Cluster`](../interfaces/Cluster.md)\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2332

Returns the specified PostgreSQL Cluster resource by name.

##### Parameters

###### request

[`GetByNameRequest`](../../../../common/v1/interfaces/GetByNameRequest.md)

##### Returns

`Request`\<[`GetByNameRequest`](../../../../common/v1/interfaces/GetByNameRequest.md), [`Cluster`](../interfaces/Cluster.md)\>

#### Call Signature

> **getByName**(`request`, `metadata`): `Request`\<[`GetByNameRequest`](../../../../common/v1/interfaces/GetByNameRequest.md), [`Cluster`](../interfaces/Cluster.md)\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2333

##### Parameters

###### request

[`GetByNameRequest`](../../../../common/v1/interfaces/GetByNameRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`GetByNameRequest`](../../../../common/v1/interfaces/GetByNameRequest.md), [`Cluster`](../interfaces/Cluster.md)\>

#### Call Signature

> **getByName**(`request`, `metadata`, `options`): `Request`\<[`GetByNameRequest`](../../../../common/v1/interfaces/GetByNameRequest.md), [`Cluster`](../interfaces/Cluster.md)\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2334

##### Parameters

###### request

[`GetByNameRequest`](../../../../common/v1/interfaces/GetByNameRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`GetByNameRequest`](../../../../common/v1/interfaces/GetByNameRequest.md), [`Cluster`](../interfaces/Cluster.md)\>

#### Call Signature

> **getByName**(`request`): `Request`\<[`GetByNameRequest`](../../../../common/v1/interfaces/GetByNameRequest.md), [`Cluster`](../interfaces/Cluster.md)\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2422

Returns the specified PostgreSQL Cluster resource by name.

##### Parameters

###### request

[`GetByNameRequest`](../../../../common/v1/interfaces/GetByNameRequest.md)

##### Returns

`Request`\<[`GetByNameRequest`](../../../../common/v1/interfaces/GetByNameRequest.md), [`Cluster`](../interfaces/Cluster.md)\>

#### Call Signature

> **getByName**(`request`, `metadata`): `Request`\<[`GetByNameRequest`](../../../../common/v1/interfaces/GetByNameRequest.md), [`Cluster`](../interfaces/Cluster.md)\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2423

Returns the specified PostgreSQL Cluster resource by name.

##### Parameters

###### request

[`GetByNameRequest`](../../../../common/v1/interfaces/GetByNameRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`GetByNameRequest`](../../../../common/v1/interfaces/GetByNameRequest.md), [`Cluster`](../interfaces/Cluster.md)\>

#### Call Signature

> **getByName**(`request`, `metadata`, `options`): `Request`\<[`GetByNameRequest`](../../../../common/v1/interfaces/GetByNameRequest.md), [`Cluster`](../interfaces/Cluster.md)\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2424

Returns the specified PostgreSQL Cluster resource by name.

##### Parameters

###### request

[`GetByNameRequest`](../../../../common/v1/interfaces/GetByNameRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`GetByNameRequest`](../../../../common/v1/interfaces/GetByNameRequest.md), [`Cluster`](../interfaces/Cluster.md)\>

***

### getForBackup()

#### Call Signature

> **getForBackup**(`request`): `Request`\<[`GetClusterForBackupRequest`](../interfaces/GetClusterForBackupRequest.md), [`Cluster`](../interfaces/Cluster.md)\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2340

Returns the specified PostgreSQL Cluster resource for backup.
 It should be used as a hint of cluster configuration in case of backup restoration.

##### Parameters

###### request

[`GetClusterForBackupRequest`](../interfaces/GetClusterForBackupRequest.md)

##### Returns

`Request`\<[`GetClusterForBackupRequest`](../interfaces/GetClusterForBackupRequest.md), [`Cluster`](../interfaces/Cluster.md)\>

#### Call Signature

> **getForBackup**(`request`, `metadata`): `Request`\<[`GetClusterForBackupRequest`](../interfaces/GetClusterForBackupRequest.md), [`Cluster`](../interfaces/Cluster.md)\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2341

##### Parameters

###### request

[`GetClusterForBackupRequest`](../interfaces/GetClusterForBackupRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`GetClusterForBackupRequest`](../interfaces/GetClusterForBackupRequest.md), [`Cluster`](../interfaces/Cluster.md)\>

#### Call Signature

> **getForBackup**(`request`, `metadata`, `options`): `Request`\<[`GetClusterForBackupRequest`](../interfaces/GetClusterForBackupRequest.md), [`Cluster`](../interfaces/Cluster.md)\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2342

##### Parameters

###### request

[`GetClusterForBackupRequest`](../interfaces/GetClusterForBackupRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`GetClusterForBackupRequest`](../interfaces/GetClusterForBackupRequest.md), [`Cluster`](../interfaces/Cluster.md)\>

#### Call Signature

> **getForBackup**(`request`): `Request`\<[`GetClusterForBackupRequest`](../interfaces/GetClusterForBackupRequest.md), [`Cluster`](../interfaces/Cluster.md)\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2434

Returns the specified PostgreSQL Cluster resource for backup.
 It should be used as a hint of cluster configuration in case of backup restoration.

##### Parameters

###### request

[`GetClusterForBackupRequest`](../interfaces/GetClusterForBackupRequest.md)

##### Returns

`Request`\<[`GetClusterForBackupRequest`](../interfaces/GetClusterForBackupRequest.md), [`Cluster`](../interfaces/Cluster.md)\>

#### Call Signature

> **getForBackup**(`request`, `metadata`): `Request`\<[`GetClusterForBackupRequest`](../interfaces/GetClusterForBackupRequest.md), [`Cluster`](../interfaces/Cluster.md)\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2435

Returns the specified PostgreSQL Cluster resource for backup.
 It should be used as a hint of cluster configuration in case of backup restoration.

##### Parameters

###### request

[`GetClusterForBackupRequest`](../interfaces/GetClusterForBackupRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`GetClusterForBackupRequest`](../interfaces/GetClusterForBackupRequest.md), [`Cluster`](../interfaces/Cluster.md)\>

#### Call Signature

> **getForBackup**(`request`, `metadata`, `options`): `Request`\<[`GetClusterForBackupRequest`](../interfaces/GetClusterForBackupRequest.md), [`Cluster`](../interfaces/Cluster.md)\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2436

Returns the specified PostgreSQL Cluster resource for backup.
 It should be used as a hint of cluster configuration in case of backup restoration.

##### Parameters

###### request

[`GetClusterForBackupRequest`](../interfaces/GetClusterForBackupRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`GetClusterForBackupRequest`](../interfaces/GetClusterForBackupRequest.md), [`Cluster`](../interfaces/Cluster.md)\>

***

### getOperationService()

> **getOperationService**(): [`OperationService`](../../../../common/v1alpha1/classes/OperationService.md)

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2406

#### Returns

[`OperationService`](../../../../common/v1alpha1/classes/OperationService.md)

***

### list()

#### Call Signature

> **list**(`request`): `Request`\<[`ListClustersRequest`](../interfaces/ListClustersRequest.md), [`ListClustersResponse`](../interfaces/ListClustersResponse.md)\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2348

Retrieves the list of PostgreSQL Cluster resources that belong
 to the specified folder.

##### Parameters

###### request

[`ListClustersRequest`](../interfaces/ListClustersRequest.md)

##### Returns

`Request`\<[`ListClustersRequest`](../interfaces/ListClustersRequest.md), [`ListClustersResponse`](../interfaces/ListClustersResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`): `Request`\<[`ListClustersRequest`](../interfaces/ListClustersRequest.md), [`ListClustersResponse`](../interfaces/ListClustersResponse.md)\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2349

##### Parameters

###### request

[`ListClustersRequest`](../interfaces/ListClustersRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`ListClustersRequest`](../interfaces/ListClustersRequest.md), [`ListClustersResponse`](../interfaces/ListClustersResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`, `options`): `Request`\<[`ListClustersRequest`](../interfaces/ListClustersRequest.md), [`ListClustersResponse`](../interfaces/ListClustersResponse.md)\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2350

##### Parameters

###### request

[`ListClustersRequest`](../interfaces/ListClustersRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`ListClustersRequest`](../interfaces/ListClustersRequest.md), [`ListClustersResponse`](../interfaces/ListClustersResponse.md)\>

#### Call Signature

> **list**(`request`): `Request`\<[`ListClustersRequest`](../interfaces/ListClustersRequest.md), [`ListClustersResponse`](../interfaces/ListClustersResponse.md)\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2446

Retrieves the list of PostgreSQL Cluster resources that belong
 to the specified folder.

##### Parameters

###### request

[`ListClustersRequest`](../interfaces/ListClustersRequest.md)

##### Returns

`Request`\<[`ListClustersRequest`](../interfaces/ListClustersRequest.md), [`ListClustersResponse`](../interfaces/ListClustersResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`): `Request`\<[`ListClustersRequest`](../interfaces/ListClustersRequest.md), [`ListClustersResponse`](../interfaces/ListClustersResponse.md)\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2447

Retrieves the list of PostgreSQL Cluster resources that belong
 to the specified folder.

##### Parameters

###### request

[`ListClustersRequest`](../interfaces/ListClustersRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`ListClustersRequest`](../interfaces/ListClustersRequest.md), [`ListClustersResponse`](../interfaces/ListClustersResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`, `options`): `Request`\<[`ListClustersRequest`](../interfaces/ListClustersRequest.md), [`ListClustersResponse`](../interfaces/ListClustersResponse.md)\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2448

Retrieves the list of PostgreSQL Cluster resources that belong
 to the specified folder.

##### Parameters

###### request

[`ListClustersRequest`](../interfaces/ListClustersRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`ListClustersRequest`](../interfaces/ListClustersRequest.md), [`ListClustersResponse`](../interfaces/ListClustersResponse.md)\>

***

### restore()

#### Call Signature

> **restore**(`request`): `Request`\<[`RestoreClusterRequest`](../interfaces/RestoreClusterRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2376

Creates a new PostgreSQL cluster from a previously created backup.

##### Parameters

###### request

[`RestoreClusterRequest`](../interfaces/RestoreClusterRequest.md)

##### Returns

`Request`\<[`RestoreClusterRequest`](../interfaces/RestoreClusterRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **restore**(`request`, `metadata`): `Request`\<[`RestoreClusterRequest`](../interfaces/RestoreClusterRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2377

##### Parameters

###### request

[`RestoreClusterRequest`](../interfaces/RestoreClusterRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`RestoreClusterRequest`](../interfaces/RestoreClusterRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **restore**(`request`, `metadata`, `options`): `Request`\<[`RestoreClusterRequest`](../interfaces/RestoreClusterRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2378

##### Parameters

###### request

[`RestoreClusterRequest`](../interfaces/RestoreClusterRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`RestoreClusterRequest`](../interfaces/RestoreClusterRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **restore**(`request`): `Request`\<[`RestoreClusterRequest`](../interfaces/RestoreClusterRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2503

Creates a new PostgreSQL cluster from a previously created backup.

##### Parameters

###### request

[`RestoreClusterRequest`](../interfaces/RestoreClusterRequest.md)

##### Returns

`Request`\<[`RestoreClusterRequest`](../interfaces/RestoreClusterRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **restore**(`request`, `metadata`): `Request`\<[`RestoreClusterRequest`](../interfaces/RestoreClusterRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2504

Creates a new PostgreSQL cluster from a previously created backup.

##### Parameters

###### request

[`RestoreClusterRequest`](../interfaces/RestoreClusterRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`RestoreClusterRequest`](../interfaces/RestoreClusterRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **restore**(`request`, `metadata`, `options`): `Request`\<[`RestoreClusterRequest`](../interfaces/RestoreClusterRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2505

Creates a new PostgreSQL cluster from a previously created backup.

##### Parameters

###### request

[`RestoreClusterRequest`](../interfaces/RestoreClusterRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`RestoreClusterRequest`](../interfaces/RestoreClusterRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

***

### start()

#### Call Signature

> **start**(`request`): `Request`\<[`StartClusterRequest`](../interfaces/StartClusterRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2390

Wakes up suspended PostgreSQL cluster.

##### Parameters

###### request

[`StartClusterRequest`](../interfaces/StartClusterRequest.md)

##### Returns

`Request`\<[`StartClusterRequest`](../interfaces/StartClusterRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **start**(`request`, `metadata`): `Request`\<[`StartClusterRequest`](../interfaces/StartClusterRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2391

##### Parameters

###### request

[`StartClusterRequest`](../interfaces/StartClusterRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`StartClusterRequest`](../interfaces/StartClusterRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **start**(`request`, `metadata`, `options`): `Request`\<[`StartClusterRequest`](../interfaces/StartClusterRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2392

##### Parameters

###### request

[`StartClusterRequest`](../interfaces/StartClusterRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`StartClusterRequest`](../interfaces/StartClusterRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **start**(`request`): `Request`\<[`StartClusterRequest`](../interfaces/StartClusterRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2533

Wakes up suspended PostgreSQL cluster.

##### Parameters

###### request

[`StartClusterRequest`](../interfaces/StartClusterRequest.md)

##### Returns

`Request`\<[`StartClusterRequest`](../interfaces/StartClusterRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **start**(`request`, `metadata`): `Request`\<[`StartClusterRequest`](../interfaces/StartClusterRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2534

Wakes up suspended PostgreSQL cluster.

##### Parameters

###### request

[`StartClusterRequest`](../interfaces/StartClusterRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`StartClusterRequest`](../interfaces/StartClusterRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **start**(`request`, `metadata`, `options`): `Request`\<[`StartClusterRequest`](../interfaces/StartClusterRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2535

Wakes up suspended PostgreSQL cluster.

##### Parameters

###### request

[`StartClusterRequest`](../interfaces/StartClusterRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`StartClusterRequest`](../interfaces/StartClusterRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

***

### stop()

#### Call Signature

> **stop**(`request`): `Request`\<[`StopClusterRequest`](../interfaces/StopClusterRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2383

Suspends the PostgreSQL cluster to save resources.

##### Parameters

###### request

[`StopClusterRequest`](../interfaces/StopClusterRequest.md)

##### Returns

`Request`\<[`StopClusterRequest`](../interfaces/StopClusterRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **stop**(`request`, `metadata`): `Request`\<[`StopClusterRequest`](../interfaces/StopClusterRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2384

##### Parameters

###### request

[`StopClusterRequest`](../interfaces/StopClusterRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`StopClusterRequest`](../interfaces/StopClusterRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **stop**(`request`, `metadata`, `options`): `Request`\<[`StopClusterRequest`](../interfaces/StopClusterRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2385

##### Parameters

###### request

[`StopClusterRequest`](../interfaces/StopClusterRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`StopClusterRequest`](../interfaces/StopClusterRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **stop**(`request`): `Request`\<[`StopClusterRequest`](../interfaces/StopClusterRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2518

Suspends the PostgreSQL cluster to save resources.

##### Parameters

###### request

[`StopClusterRequest`](../interfaces/StopClusterRequest.md)

##### Returns

`Request`\<[`StopClusterRequest`](../interfaces/StopClusterRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **stop**(`request`, `metadata`): `Request`\<[`StopClusterRequest`](../interfaces/StopClusterRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2519

Suspends the PostgreSQL cluster to save resources.

##### Parameters

###### request

[`StopClusterRequest`](../interfaces/StopClusterRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`StopClusterRequest`](../interfaces/StopClusterRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **stop**(`request`, `metadata`, `options`): `Request`\<[`StopClusterRequest`](../interfaces/StopClusterRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2520

Suspends the PostgreSQL cluster to save resources.

##### Parameters

###### request

[`StopClusterRequest`](../interfaces/StopClusterRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`StopClusterRequest`](../interfaces/StopClusterRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

***

### update()

#### Call Signature

> **update**(`request`): `Request`\<[`UpdateClusterRequest`](../interfaces/UpdateClusterRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2369

Updates the PostgreSQL cluster.

##### Parameters

###### request

[`UpdateClusterRequest`](../interfaces/UpdateClusterRequest.md)

##### Returns

`Request`\<[`UpdateClusterRequest`](../interfaces/UpdateClusterRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **update**(`request`, `metadata`): `Request`\<[`UpdateClusterRequest`](../interfaces/UpdateClusterRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2370

##### Parameters

###### request

[`UpdateClusterRequest`](../interfaces/UpdateClusterRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`UpdateClusterRequest`](../interfaces/UpdateClusterRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **update**(`request`, `metadata`, `options`): `Request`\<[`UpdateClusterRequest`](../interfaces/UpdateClusterRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2371

##### Parameters

###### request

[`UpdateClusterRequest`](../interfaces/UpdateClusterRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`UpdateClusterRequest`](../interfaces/UpdateClusterRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **update**(`request`): `Request`\<[`UpdateClusterRequest`](../interfaces/UpdateClusterRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2488

Updates the PostgreSQL cluster.

##### Parameters

###### request

[`UpdateClusterRequest`](../interfaces/UpdateClusterRequest.md)

##### Returns

`Request`\<[`UpdateClusterRequest`](../interfaces/UpdateClusterRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **update**(`request`, `metadata`): `Request`\<[`UpdateClusterRequest`](../interfaces/UpdateClusterRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2489

Updates the PostgreSQL cluster.

##### Parameters

###### request

[`UpdateClusterRequest`](../interfaces/UpdateClusterRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`UpdateClusterRequest`](../interfaces/UpdateClusterRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **update**(`request`, `metadata`, `options`): `Request`\<[`UpdateClusterRequest`](../interfaces/UpdateClusterRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:2490

Updates the PostgreSQL cluster.

##### Parameters

###### request

[`UpdateClusterRequest`](../interfaces/UpdateClusterRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`UpdateClusterRequest`](../interfaces/UpdateClusterRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>
