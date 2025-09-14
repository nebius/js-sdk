[**@nebius/nodejs-sdk**](../../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../../README.md) / [generated/nebius/msp/postgresql/v1alpha1](../README.md) / BackupService

# Class: BackupService

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:675

## Implements

- `BackupService`

## Constructors

### Constructor

> **new BackupService**(`sdk`): `BackupService`

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:720

#### Parameters

##### sdk

[`SDKInterface`](../../../../../../sdk/interfaces/SDKInterface.md)

#### Returns

`BackupService`

## Properties

### $type

> **$type**: `"nebius.msp.postgresql.v1alpha1.BackupService"`

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:676

## Methods

### create()

#### Call Signature

> **create**(`request`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`CreateBackupRequest`](../interfaces/CreateBackupRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:703

Creates a new on-demand backup.

##### Parameters

###### request

[`CreateBackupRequest`](../interfaces/CreateBackupRequest.md)

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`CreateBackupRequest`](../interfaces/CreateBackupRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **create**(`request`, `metadata`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`CreateBackupRequest`](../interfaces/CreateBackupRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:704

##### Parameters

###### request

[`CreateBackupRequest`](../interfaces/CreateBackupRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`CreateBackupRequest`](../interfaces/CreateBackupRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **create**(`request`, `metadata`, `options`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`CreateBackupRequest`](../interfaces/CreateBackupRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:705

##### Parameters

###### request

[`CreateBackupRequest`](../interfaces/CreateBackupRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`CreateBackupRequest`](../interfaces/CreateBackupRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **create**(`request`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`CreateBackupRequest`](../interfaces/CreateBackupRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:766

Creates a new on-demand backup.

##### Parameters

###### request

[`CreateBackupRequest`](../interfaces/CreateBackupRequest.md)

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`CreateBackupRequest`](../interfaces/CreateBackupRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **create**(`request`, `metadata`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`CreateBackupRequest`](../interfaces/CreateBackupRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:767

Creates a new on-demand backup.

##### Parameters

###### request

[`CreateBackupRequest`](../interfaces/CreateBackupRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`CreateBackupRequest`](../interfaces/CreateBackupRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **create**(`request`, `metadata`, `options`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`CreateBackupRequest`](../interfaces/CreateBackupRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:768

Creates a new on-demand backup.

##### Parameters

###### request

[`CreateBackupRequest`](../interfaces/CreateBackupRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`CreateBackupRequest`](../interfaces/CreateBackupRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

---

### delete()

#### Call Signature

> **delete**(`request`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`DeleteBackupRequest`](../interfaces/DeleteBackupRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:710

Deletes an on-demand backup.

##### Parameters

###### request

[`DeleteBackupRequest`](../interfaces/DeleteBackupRequest.md)

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`DeleteBackupRequest`](../interfaces/DeleteBackupRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **delete**(`request`, `metadata`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`DeleteBackupRequest`](../interfaces/DeleteBackupRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:711

##### Parameters

###### request

[`DeleteBackupRequest`](../interfaces/DeleteBackupRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`DeleteBackupRequest`](../interfaces/DeleteBackupRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **delete**(`request`, `metadata`, `options`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`DeleteBackupRequest`](../interfaces/DeleteBackupRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:712

##### Parameters

###### request

[`DeleteBackupRequest`](../interfaces/DeleteBackupRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`DeleteBackupRequest`](../interfaces/DeleteBackupRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **delete**(`request`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`DeleteBackupRequest`](../interfaces/DeleteBackupRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:781

Deletes an on-demand backup.

##### Parameters

###### request

[`DeleteBackupRequest`](../interfaces/DeleteBackupRequest.md)

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`DeleteBackupRequest`](../interfaces/DeleteBackupRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **delete**(`request`, `metadata`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`DeleteBackupRequest`](../interfaces/DeleteBackupRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:782

Deletes an on-demand backup.

##### Parameters

###### request

[`DeleteBackupRequest`](../interfaces/DeleteBackupRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`DeleteBackupRequest`](../interfaces/DeleteBackupRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **delete**(`request`, `metadata`, `options`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`DeleteBackupRequest`](../interfaces/DeleteBackupRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:783

Deletes an on-demand backup.

##### Parameters

###### request

[`DeleteBackupRequest`](../interfaces/DeleteBackupRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`DeleteBackupRequest`](../interfaces/DeleteBackupRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1alpha1/interfaces/GetOperationRequest.md)\>\>

---

### get()

#### Call Signature

> **get**(`request`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`GetBackupRequest`](../interfaces/GetBackupRequest.md), [`Backup`](../interfaces/Backup.md)\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:682

Returns the specified PostgreSQL Cluster backup.
To get the list of available PostgreSQL Cluster backups, make a [List] or [ListByCluster] request.

##### Parameters

###### request

[`GetBackupRequest`](../interfaces/GetBackupRequest.md)

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`GetBackupRequest`](../interfaces/GetBackupRequest.md), [`Backup`](../interfaces/Backup.md)\>

#### Call Signature

> **get**(`request`, `metadata`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`GetBackupRequest`](../interfaces/GetBackupRequest.md), [`Backup`](../interfaces/Backup.md)\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:683

##### Parameters

###### request

[`GetBackupRequest`](../interfaces/GetBackupRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`GetBackupRequest`](../interfaces/GetBackupRequest.md), [`Backup`](../interfaces/Backup.md)\>

#### Call Signature

> **get**(`request`, `metadata`, `options`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`GetBackupRequest`](../interfaces/GetBackupRequest.md), [`Backup`](../interfaces/Backup.md)\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:684

##### Parameters

###### request

[`GetBackupRequest`](../interfaces/GetBackupRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`GetBackupRequest`](../interfaces/GetBackupRequest.md), [`Backup`](../interfaces/Backup.md)\>

#### Call Signature

> **get**(`request`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`GetBackupRequest`](../interfaces/GetBackupRequest.md), [`Backup`](../interfaces/Backup.md)\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:730

Returns the specified PostgreSQL Cluster backup.
To get the list of available PostgreSQL Cluster backups, make a [List] or [ListByCluster] request.

##### Parameters

###### request

[`GetBackupRequest`](../interfaces/GetBackupRequest.md)

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`GetBackupRequest`](../interfaces/GetBackupRequest.md), [`Backup`](../interfaces/Backup.md)\>

#### Call Signature

> **get**(`request`, `metadata`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`GetBackupRequest`](../interfaces/GetBackupRequest.md), [`Backup`](../interfaces/Backup.md)\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:731

Returns the specified PostgreSQL Cluster backup.
To get the list of available PostgreSQL Cluster backups, make a [List] or [ListByCluster] request.

##### Parameters

###### request

[`GetBackupRequest`](../interfaces/GetBackupRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`GetBackupRequest`](../interfaces/GetBackupRequest.md), [`Backup`](../interfaces/Backup.md)\>

#### Call Signature

> **get**(`request`, `metadata`, `options`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`GetBackupRequest`](../interfaces/GetBackupRequest.md), [`Backup`](../interfaces/Backup.md)\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:732

Returns the specified PostgreSQL Cluster backup.
To get the list of available PostgreSQL Cluster backups, make a [List] or [ListByCluster] request.

##### Parameters

###### request

[`GetBackupRequest`](../interfaces/GetBackupRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`GetBackupRequest`](../interfaces/GetBackupRequest.md), [`Backup`](../interfaces/Backup.md)\>

---

### getOperationService()

> **getOperationService**(): [`OperationService`](../../../../common/v1alpha1/classes/OperationService.md)

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:726

#### Returns

[`OperationService`](../../../../common/v1alpha1/classes/OperationService.md)

---

### list()

#### Call Signature

> **list**(`request`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`ListBackupsRequest`](../interfaces/ListBackupsRequest.md), [`ListBackupsResponse`](../interfaces/ListBackupsResponse.md)\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:689

Retrieves the list of PostgreSQL Cluster backups by project.

##### Parameters

###### request

[`ListBackupsRequest`](../interfaces/ListBackupsRequest.md)

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`ListBackupsRequest`](../interfaces/ListBackupsRequest.md), [`ListBackupsResponse`](../interfaces/ListBackupsResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`ListBackupsRequest`](../interfaces/ListBackupsRequest.md), [`ListBackupsResponse`](../interfaces/ListBackupsResponse.md)\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:690

##### Parameters

###### request

[`ListBackupsRequest`](../interfaces/ListBackupsRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`ListBackupsRequest`](../interfaces/ListBackupsRequest.md), [`ListBackupsResponse`](../interfaces/ListBackupsResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`, `options`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`ListBackupsRequest`](../interfaces/ListBackupsRequest.md), [`ListBackupsResponse`](../interfaces/ListBackupsResponse.md)\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:691

##### Parameters

###### request

[`ListBackupsRequest`](../interfaces/ListBackupsRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`ListBackupsRequest`](../interfaces/ListBackupsRequest.md), [`ListBackupsResponse`](../interfaces/ListBackupsResponse.md)\>

#### Call Signature

> **list**(`request`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`ListBackupsRequest`](../interfaces/ListBackupsRequest.md), [`ListBackupsResponse`](../interfaces/ListBackupsResponse.md)\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:742

Retrieves the list of PostgreSQL Cluster backups by project.

##### Parameters

###### request

[`ListBackupsRequest`](../interfaces/ListBackupsRequest.md)

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`ListBackupsRequest`](../interfaces/ListBackupsRequest.md), [`ListBackupsResponse`](../interfaces/ListBackupsResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`ListBackupsRequest`](../interfaces/ListBackupsRequest.md), [`ListBackupsResponse`](../interfaces/ListBackupsResponse.md)\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:743

Retrieves the list of PostgreSQL Cluster backups by project.

##### Parameters

###### request

[`ListBackupsRequest`](../interfaces/ListBackupsRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`ListBackupsRequest`](../interfaces/ListBackupsRequest.md), [`ListBackupsResponse`](../interfaces/ListBackupsResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`, `options`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`ListBackupsRequest`](../interfaces/ListBackupsRequest.md), [`ListBackupsResponse`](../interfaces/ListBackupsResponse.md)\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:744

Retrieves the list of PostgreSQL Cluster backups by project.

##### Parameters

###### request

[`ListBackupsRequest`](../interfaces/ListBackupsRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`ListBackupsRequest`](../interfaces/ListBackupsRequest.md), [`ListBackupsResponse`](../interfaces/ListBackupsResponse.md)\>

---

### listByCluster()

#### Call Signature

> **listByCluster**(`request`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`ListBackupsByClusterRequest`](../interfaces/ListBackupsByClusterRequest.md), [`ListBackupsResponse`](../interfaces/ListBackupsResponse.md)\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:696

Retrieves the list of PostgreSQL Cluster backups by cluster.

##### Parameters

###### request

[`ListBackupsByClusterRequest`](../interfaces/ListBackupsByClusterRequest.md)

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`ListBackupsByClusterRequest`](../interfaces/ListBackupsByClusterRequest.md), [`ListBackupsResponse`](../interfaces/ListBackupsResponse.md)\>

#### Call Signature

> **listByCluster**(`request`, `metadata`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`ListBackupsByClusterRequest`](../interfaces/ListBackupsByClusterRequest.md), [`ListBackupsResponse`](../interfaces/ListBackupsResponse.md)\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:697

##### Parameters

###### request

[`ListBackupsByClusterRequest`](../interfaces/ListBackupsByClusterRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`ListBackupsByClusterRequest`](../interfaces/ListBackupsByClusterRequest.md), [`ListBackupsResponse`](../interfaces/ListBackupsResponse.md)\>

#### Call Signature

> **listByCluster**(`request`, `metadata`, `options`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`ListBackupsByClusterRequest`](../interfaces/ListBackupsByClusterRequest.md), [`ListBackupsResponse`](../interfaces/ListBackupsResponse.md)\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:698

##### Parameters

###### request

[`ListBackupsByClusterRequest`](../interfaces/ListBackupsByClusterRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`ListBackupsByClusterRequest`](../interfaces/ListBackupsByClusterRequest.md), [`ListBackupsResponse`](../interfaces/ListBackupsResponse.md)\>

#### Call Signature

> **listByCluster**(`request`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`ListBackupsByClusterRequest`](../interfaces/ListBackupsByClusterRequest.md), [`ListBackupsResponse`](../interfaces/ListBackupsResponse.md)\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:754

Retrieves the list of PostgreSQL Cluster backups by cluster.

##### Parameters

###### request

[`ListBackupsByClusterRequest`](../interfaces/ListBackupsByClusterRequest.md)

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`ListBackupsByClusterRequest`](../interfaces/ListBackupsByClusterRequest.md), [`ListBackupsResponse`](../interfaces/ListBackupsResponse.md)\>

#### Call Signature

> **listByCluster**(`request`, `metadata`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`ListBackupsByClusterRequest`](../interfaces/ListBackupsByClusterRequest.md), [`ListBackupsResponse`](../interfaces/ListBackupsResponse.md)\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:755

Retrieves the list of PostgreSQL Cluster backups by cluster.

##### Parameters

###### request

[`ListBackupsByClusterRequest`](../interfaces/ListBackupsByClusterRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`ListBackupsByClusterRequest`](../interfaces/ListBackupsByClusterRequest.md), [`ListBackupsResponse`](../interfaces/ListBackupsResponse.md)\>

#### Call Signature

> **listByCluster**(`request`, `metadata`, `options`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`ListBackupsByClusterRequest`](../interfaces/ListBackupsByClusterRequest.md), [`ListBackupsResponse`](../interfaces/ListBackupsResponse.md)\>

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:756

Retrieves the list of PostgreSQL Cluster backups by cluster.

##### Parameters

###### request

[`ListBackupsByClusterRequest`](../interfaces/ListBackupsByClusterRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`ListBackupsByClusterRequest`](../interfaces/ListBackupsByClusterRequest.md), [`ListBackupsResponse`](../interfaces/ListBackupsResponse.md)\>
