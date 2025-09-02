[**@nebius/nodejs-sdk**](../../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../../README.md) / [generated/nebius/msp/postgresql/v1alpha1](../README.md) / BackupService

# Class: BackupService

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:674

## Implements

- `BackupService`

## Constructors

### Constructor

> **new BackupService**(`sdk`): `BackupService`

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:719

#### Parameters

##### sdk

[`SDKInterface`](../../../../../../sdk/interfaces/SDKInterface.md)

#### Returns

`BackupService`

## Properties

### $type

> **$type**: `"nebius.msp.postgresql.v1alpha1.BackupService"`

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:675

## Methods

### create()

#### Call Signature

> **create**(`request`): `Request`\<[`CreateBackupRequest`](../interfaces/CreateBackupRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:702

Creates a new on-demand backup.

##### Parameters

###### request

[`CreateBackupRequest`](../interfaces/CreateBackupRequest.md)

##### Returns

`Request`\<[`CreateBackupRequest`](../interfaces/CreateBackupRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **create**(`request`, `metadata`): `Request`\<[`CreateBackupRequest`](../interfaces/CreateBackupRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:703

##### Parameters

###### request

[`CreateBackupRequest`](../interfaces/CreateBackupRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`CreateBackupRequest`](../interfaces/CreateBackupRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **create**(`request`, `metadata`, `options`): `Request`\<[`CreateBackupRequest`](../interfaces/CreateBackupRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:704

##### Parameters

###### request

[`CreateBackupRequest`](../interfaces/CreateBackupRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`CreateBackupRequest`](../interfaces/CreateBackupRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **create**(`request`): `Request`\<[`CreateBackupRequest`](../interfaces/CreateBackupRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:765

Creates a new on-demand backup.

##### Parameters

###### request

[`CreateBackupRequest`](../interfaces/CreateBackupRequest.md)

##### Returns

`Request`\<[`CreateBackupRequest`](../interfaces/CreateBackupRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **create**(`request`, `metadata`): `Request`\<[`CreateBackupRequest`](../interfaces/CreateBackupRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:766

Creates a new on-demand backup.

##### Parameters

###### request

[`CreateBackupRequest`](../interfaces/CreateBackupRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`CreateBackupRequest`](../interfaces/CreateBackupRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **create**(`request`, `metadata`, `options`): `Request`\<[`CreateBackupRequest`](../interfaces/CreateBackupRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:767

Creates a new on-demand backup.

##### Parameters

###### request

[`CreateBackupRequest`](../interfaces/CreateBackupRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`CreateBackupRequest`](../interfaces/CreateBackupRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

***

### delete()

#### Call Signature

> **delete**(`request`): `Request`\<[`DeleteBackupRequest`](../interfaces/DeleteBackupRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:709

Deletes an on-demand backup.

##### Parameters

###### request

[`DeleteBackupRequest`](../interfaces/DeleteBackupRequest.md)

##### Returns

`Request`\<[`DeleteBackupRequest`](../interfaces/DeleteBackupRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **delete**(`request`, `metadata`): `Request`\<[`DeleteBackupRequest`](../interfaces/DeleteBackupRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:710

##### Parameters

###### request

[`DeleteBackupRequest`](../interfaces/DeleteBackupRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`DeleteBackupRequest`](../interfaces/DeleteBackupRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **delete**(`request`, `metadata`, `options`): `Request`\<[`DeleteBackupRequest`](../interfaces/DeleteBackupRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:711

##### Parameters

###### request

[`DeleteBackupRequest`](../interfaces/DeleteBackupRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`DeleteBackupRequest`](../interfaces/DeleteBackupRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **delete**(`request`): `Request`\<[`DeleteBackupRequest`](../interfaces/DeleteBackupRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:780

Deletes an on-demand backup.

##### Parameters

###### request

[`DeleteBackupRequest`](../interfaces/DeleteBackupRequest.md)

##### Returns

`Request`\<[`DeleteBackupRequest`](../interfaces/DeleteBackupRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **delete**(`request`, `metadata`): `Request`\<[`DeleteBackupRequest`](../interfaces/DeleteBackupRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:781

Deletes an on-demand backup.

##### Parameters

###### request

[`DeleteBackupRequest`](../interfaces/DeleteBackupRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`DeleteBackupRequest`](../interfaces/DeleteBackupRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **delete**(`request`, `metadata`, `options`): `Request`\<[`DeleteBackupRequest`](../interfaces/DeleteBackupRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:782

Deletes an on-demand backup.

##### Parameters

###### request

[`DeleteBackupRequest`](../interfaces/DeleteBackupRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`DeleteBackupRequest`](../interfaces/DeleteBackupRequest.md), `Operation`\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

***

### get()

#### Call Signature

> **get**(`request`): `Request`\<[`GetBackupRequest`](../interfaces/GetBackupRequest.md), [`Backup`](../interfaces/Backup.md)\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:681

Returns the specified PostgreSQL Cluster backup.
 To get the list of available PostgreSQL Cluster backups, make a [List] or [ListByCluster] request.

##### Parameters

###### request

[`GetBackupRequest`](../interfaces/GetBackupRequest.md)

##### Returns

`Request`\<[`GetBackupRequest`](../interfaces/GetBackupRequest.md), [`Backup`](../interfaces/Backup.md)\>

#### Call Signature

> **get**(`request`, `metadata`): `Request`\<[`GetBackupRequest`](../interfaces/GetBackupRequest.md), [`Backup`](../interfaces/Backup.md)\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:682

##### Parameters

###### request

[`GetBackupRequest`](../interfaces/GetBackupRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`GetBackupRequest`](../interfaces/GetBackupRequest.md), [`Backup`](../interfaces/Backup.md)\>

#### Call Signature

> **get**(`request`, `metadata`, `options`): `Request`\<[`GetBackupRequest`](../interfaces/GetBackupRequest.md), [`Backup`](../interfaces/Backup.md)\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:683

##### Parameters

###### request

[`GetBackupRequest`](../interfaces/GetBackupRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`GetBackupRequest`](../interfaces/GetBackupRequest.md), [`Backup`](../interfaces/Backup.md)\>

#### Call Signature

> **get**(`request`): `Request`\<[`GetBackupRequest`](../interfaces/GetBackupRequest.md), [`Backup`](../interfaces/Backup.md)\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:729

Returns the specified PostgreSQL Cluster backup.
 To get the list of available PostgreSQL Cluster backups, make a [List] or [ListByCluster] request.

##### Parameters

###### request

[`GetBackupRequest`](../interfaces/GetBackupRequest.md)

##### Returns

`Request`\<[`GetBackupRequest`](../interfaces/GetBackupRequest.md), [`Backup`](../interfaces/Backup.md)\>

#### Call Signature

> **get**(`request`, `metadata`): `Request`\<[`GetBackupRequest`](../interfaces/GetBackupRequest.md), [`Backup`](../interfaces/Backup.md)\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:730

Returns the specified PostgreSQL Cluster backup.
 To get the list of available PostgreSQL Cluster backups, make a [List] or [ListByCluster] request.

##### Parameters

###### request

[`GetBackupRequest`](../interfaces/GetBackupRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`GetBackupRequest`](../interfaces/GetBackupRequest.md), [`Backup`](../interfaces/Backup.md)\>

#### Call Signature

> **get**(`request`, `metadata`, `options`): `Request`\<[`GetBackupRequest`](../interfaces/GetBackupRequest.md), [`Backup`](../interfaces/Backup.md)\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:731

Returns the specified PostgreSQL Cluster backup.
 To get the list of available PostgreSQL Cluster backups, make a [List] or [ListByCluster] request.

##### Parameters

###### request

[`GetBackupRequest`](../interfaces/GetBackupRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`GetBackupRequest`](../interfaces/GetBackupRequest.md), [`Backup`](../interfaces/Backup.md)\>

***

### getOperationService()

> **getOperationService**(): [`OperationService`](../../../../common/v1alpha1/classes/OperationService.md)

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:725

#### Returns

[`OperationService`](../../../../common/v1alpha1/classes/OperationService.md)

***

### list()

#### Call Signature

> **list**(`request`): `Request`\<[`ListBackupsRequest`](../interfaces/ListBackupsRequest.md), [`ListBackupsResponse`](../interfaces/ListBackupsResponse.md)\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:688

Retrieves the list of PostgreSQL Cluster backups by project.

##### Parameters

###### request

[`ListBackupsRequest`](../interfaces/ListBackupsRequest.md)

##### Returns

`Request`\<[`ListBackupsRequest`](../interfaces/ListBackupsRequest.md), [`ListBackupsResponse`](../interfaces/ListBackupsResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`): `Request`\<[`ListBackupsRequest`](../interfaces/ListBackupsRequest.md), [`ListBackupsResponse`](../interfaces/ListBackupsResponse.md)\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:689

##### Parameters

###### request

[`ListBackupsRequest`](../interfaces/ListBackupsRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`ListBackupsRequest`](../interfaces/ListBackupsRequest.md), [`ListBackupsResponse`](../interfaces/ListBackupsResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`, `options`): `Request`\<[`ListBackupsRequest`](../interfaces/ListBackupsRequest.md), [`ListBackupsResponse`](../interfaces/ListBackupsResponse.md)\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:690

##### Parameters

###### request

[`ListBackupsRequest`](../interfaces/ListBackupsRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`ListBackupsRequest`](../interfaces/ListBackupsRequest.md), [`ListBackupsResponse`](../interfaces/ListBackupsResponse.md)\>

#### Call Signature

> **list**(`request`): `Request`\<[`ListBackupsRequest`](../interfaces/ListBackupsRequest.md), [`ListBackupsResponse`](../interfaces/ListBackupsResponse.md)\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:741

Retrieves the list of PostgreSQL Cluster backups by project.

##### Parameters

###### request

[`ListBackupsRequest`](../interfaces/ListBackupsRequest.md)

##### Returns

`Request`\<[`ListBackupsRequest`](../interfaces/ListBackupsRequest.md), [`ListBackupsResponse`](../interfaces/ListBackupsResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`): `Request`\<[`ListBackupsRequest`](../interfaces/ListBackupsRequest.md), [`ListBackupsResponse`](../interfaces/ListBackupsResponse.md)\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:742

Retrieves the list of PostgreSQL Cluster backups by project.

##### Parameters

###### request

[`ListBackupsRequest`](../interfaces/ListBackupsRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`ListBackupsRequest`](../interfaces/ListBackupsRequest.md), [`ListBackupsResponse`](../interfaces/ListBackupsResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`, `options`): `Request`\<[`ListBackupsRequest`](../interfaces/ListBackupsRequest.md), [`ListBackupsResponse`](../interfaces/ListBackupsResponse.md)\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:743

Retrieves the list of PostgreSQL Cluster backups by project.

##### Parameters

###### request

[`ListBackupsRequest`](../interfaces/ListBackupsRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`ListBackupsRequest`](../interfaces/ListBackupsRequest.md), [`ListBackupsResponse`](../interfaces/ListBackupsResponse.md)\>

***

### listByCluster()

#### Call Signature

> **listByCluster**(`request`): `Request`\<[`ListBackupsByClusterRequest`](../interfaces/ListBackupsByClusterRequest.md), [`ListBackupsResponse`](../interfaces/ListBackupsResponse.md)\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:695

Retrieves the list of PostgreSQL Cluster backups by cluster.

##### Parameters

###### request

[`ListBackupsByClusterRequest`](../interfaces/ListBackupsByClusterRequest.md)

##### Returns

`Request`\<[`ListBackupsByClusterRequest`](../interfaces/ListBackupsByClusterRequest.md), [`ListBackupsResponse`](../interfaces/ListBackupsResponse.md)\>

#### Call Signature

> **listByCluster**(`request`, `metadata`): `Request`\<[`ListBackupsByClusterRequest`](../interfaces/ListBackupsByClusterRequest.md), [`ListBackupsResponse`](../interfaces/ListBackupsResponse.md)\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:696

##### Parameters

###### request

[`ListBackupsByClusterRequest`](../interfaces/ListBackupsByClusterRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`ListBackupsByClusterRequest`](../interfaces/ListBackupsByClusterRequest.md), [`ListBackupsResponse`](../interfaces/ListBackupsResponse.md)\>

#### Call Signature

> **listByCluster**(`request`, `metadata`, `options`): `Request`\<[`ListBackupsByClusterRequest`](../interfaces/ListBackupsByClusterRequest.md), [`ListBackupsResponse`](../interfaces/ListBackupsResponse.md)\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:697

##### Parameters

###### request

[`ListBackupsByClusterRequest`](../interfaces/ListBackupsByClusterRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`ListBackupsByClusterRequest`](../interfaces/ListBackupsByClusterRequest.md), [`ListBackupsResponse`](../interfaces/ListBackupsResponse.md)\>

#### Call Signature

> **listByCluster**(`request`): `Request`\<[`ListBackupsByClusterRequest`](../interfaces/ListBackupsByClusterRequest.md), [`ListBackupsResponse`](../interfaces/ListBackupsResponse.md)\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:753

Retrieves the list of PostgreSQL Cluster backups by cluster.

##### Parameters

###### request

[`ListBackupsByClusterRequest`](../interfaces/ListBackupsByClusterRequest.md)

##### Returns

`Request`\<[`ListBackupsByClusterRequest`](../interfaces/ListBackupsByClusterRequest.md), [`ListBackupsResponse`](../interfaces/ListBackupsResponse.md)\>

#### Call Signature

> **listByCluster**(`request`, `metadata`): `Request`\<[`ListBackupsByClusterRequest`](../interfaces/ListBackupsByClusterRequest.md), [`ListBackupsResponse`](../interfaces/ListBackupsResponse.md)\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:754

Retrieves the list of PostgreSQL Cluster backups by cluster.

##### Parameters

###### request

[`ListBackupsByClusterRequest`](../interfaces/ListBackupsByClusterRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`ListBackupsByClusterRequest`](../interfaces/ListBackupsByClusterRequest.md), [`ListBackupsResponse`](../interfaces/ListBackupsResponse.md)\>

#### Call Signature

> **listByCluster**(`request`, `metadata`, `options`): `Request`\<[`ListBackupsByClusterRequest`](../interfaces/ListBackupsByClusterRequest.md), [`ListBackupsResponse`](../interfaces/ListBackupsResponse.md)\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:755

Retrieves the list of PostgreSQL Cluster backups by cluster.

##### Parameters

###### request

[`ListBackupsByClusterRequest`](../interfaces/ListBackupsByClusterRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`ListBackupsByClusterRequest`](../interfaces/ListBackupsByClusterRequest.md), [`ListBackupsResponse`](../interfaces/ListBackupsResponse.md)\>
