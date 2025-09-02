[**@nebius/nodejs-sdk**](../../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../../README.md) / [generated/nebius/msp/postgresql/v1alpha1](../README.md) / BackupServiceBaseClient

# Variable: BackupServiceBaseClient

> **BackupServiceBaseClient**: \{(`address`, `credentials`, `options?`): [`BackupServiceBaseClient`](../interfaces/BackupServiceBaseClient.md); `service`: `object`; `serviceName`: `string`; \}

Defined in: src/generated/nebius/msp/postgresql/v1alpha1/index.ts:656

## Type Declaration

## Parameters

### address

`string`

### credentials

`ChannelCredentials`

### options?

`Partial`\<`ClientOptions`\>

## Returns

[`BackupServiceBaseClient`](../interfaces/BackupServiceBaseClient.md)

### service

> **service**: `object`

#### service.create

> `readonly` **create**: `object`

#### service.create.path

> `readonly` **path**: `"/nebius.msp.postgresql.v1alpha1.BackupService/Create"` = `"/nebius.msp.postgresql.v1alpha1.BackupService/Create"`

#### service.create.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`CreateBackupRequest`](../interfaces/CreateBackupRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`CreateBackupRequest`](../interfaces/CreateBackupRequest.md)

#### service.create.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`CreateBackupRequest`](../interfaces/CreateBackupRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.create.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.create.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../../common/v1alpha1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../../common/v1alpha1/interfaces/Operation.md)

#### service.create.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../../common/v1alpha1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.create.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.delete

> `readonly` **delete**: `object`

#### service.delete.path

> `readonly` **path**: `"/nebius.msp.postgresql.v1alpha1.BackupService/Delete"` = `"/nebius.msp.postgresql.v1alpha1.BackupService/Delete"`

#### service.delete.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`DeleteBackupRequest`](../interfaces/DeleteBackupRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`DeleteBackupRequest`](../interfaces/DeleteBackupRequest.md)

#### service.delete.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`DeleteBackupRequest`](../interfaces/DeleteBackupRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.delete.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.delete.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../../common/v1alpha1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../../common/v1alpha1/interfaces/Operation.md)

#### service.delete.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../../common/v1alpha1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.delete.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.get

> `readonly` **get**: `object`

#### service.get.path

> `readonly` **path**: `"/nebius.msp.postgresql.v1alpha1.BackupService/Get"` = `"/nebius.msp.postgresql.v1alpha1.BackupService/Get"`

#### service.get.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetBackupRequest`](../interfaces/GetBackupRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetBackupRequest`](../interfaces/GetBackupRequest.md)

#### service.get.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetBackupRequest`](../interfaces/GetBackupRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.get.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.get.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Backup`](../interfaces/Backup.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Backup`](../interfaces/Backup.md)

#### service.get.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Backup`](../interfaces/Backup.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.get.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.list

> `readonly` **list**: `object`

#### service.list.path

> `readonly` **path**: `"/nebius.msp.postgresql.v1alpha1.BackupService/List"` = `"/nebius.msp.postgresql.v1alpha1.BackupService/List"`

#### service.list.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListBackupsRequest`](../interfaces/ListBackupsRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListBackupsRequest`](../interfaces/ListBackupsRequest.md)

#### service.list.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListBackupsRequest`](../interfaces/ListBackupsRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.list.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.list.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListBackupsResponse`](../interfaces/ListBackupsResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListBackupsResponse`](../interfaces/ListBackupsResponse.md)

#### service.list.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListBackupsResponse`](../interfaces/ListBackupsResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.list.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.listByCluster

> `readonly` **listByCluster**: `object`

#### service.listByCluster.path

> `readonly` **path**: `"/nebius.msp.postgresql.v1alpha1.BackupService/ListByCluster"` = `"/nebius.msp.postgresql.v1alpha1.BackupService/ListByCluster"`

#### service.listByCluster.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListBackupsByClusterRequest`](../interfaces/ListBackupsByClusterRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListBackupsByClusterRequest`](../interfaces/ListBackupsByClusterRequest.md)

#### service.listByCluster.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListBackupsByClusterRequest`](../interfaces/ListBackupsByClusterRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.listByCluster.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.listByCluster.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListBackupsResponse`](../interfaces/ListBackupsResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListBackupsResponse`](../interfaces/ListBackupsResponse.md)

#### service.listByCluster.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListBackupsResponse`](../interfaces/ListBackupsResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.listByCluster.responseStream

> `readonly` **responseStream**: `false` = `false`

### serviceName

> **serviceName**: `string`
