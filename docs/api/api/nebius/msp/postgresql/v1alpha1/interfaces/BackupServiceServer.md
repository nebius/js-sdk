[**@nebius/nodejs-sdk**](../../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../../README.md) / [api/nebius/msp/postgresql/v1alpha1](../README.md) / BackupServiceServer

# Interface: BackupServiceServer

Defined in: src/api/nebius/msp/postgresql/v1alpha1/index.ts:649

## Extends

- `UntypedServiceImplementation`

## Indexable

\[`name`: `string`\]: `UntypedHandleCall`

## Properties

### create

> **create**: `handleUnaryCall`\<[`CreateBackupRequest`](CreateBackupRequest.md), [`Operation`](../../../../common/v1alpha1/interfaces/Operation.md)\>

Defined in: src/api/nebius/msp/postgresql/v1alpha1/index.ts:653

***

### delete

> **delete**: `handleUnaryCall`\<[`DeleteBackupRequest`](DeleteBackupRequest.md), [`Operation`](../../../../common/v1alpha1/interfaces/Operation.md)\>

Defined in: src/api/nebius/msp/postgresql/v1alpha1/index.ts:654

***

### get

> **get**: `handleUnaryCall`\<[`GetBackupRequest`](GetBackupRequest.md), [`Backup`](Backup.md)\>

Defined in: src/api/nebius/msp/postgresql/v1alpha1/index.ts:650

***

### list

> **list**: `handleUnaryCall`\<[`ListBackupsRequest`](ListBackupsRequest.md), [`ListBackupsResponse`](ListBackupsResponse.md)\>

Defined in: src/api/nebius/msp/postgresql/v1alpha1/index.ts:651

***

### listByCluster

> **listByCluster**: `handleUnaryCall`\<[`ListBackupsByClusterRequest`](ListBackupsByClusterRequest.md), [`ListBackupsResponse`](ListBackupsResponse.md)\>

Defined in: src/api/nebius/msp/postgresql/v1alpha1/index.ts:652
