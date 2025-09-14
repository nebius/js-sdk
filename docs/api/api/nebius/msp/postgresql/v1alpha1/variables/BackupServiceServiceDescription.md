[**@nebius/nodejs-sdk**](../../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../../README.md) / [api/nebius/msp/postgresql/v1alpha1](../README.md) / BackupServiceServiceDescription

# Variable: BackupServiceServiceDescription

> **BackupServiceServiceDescription**: `object`

Defined in: src/api/nebius/msp/postgresql/v1alpha1/index.ts:600

## Type Declaration

### create

> `readonly` **create**: `object`

#### create.path

> `readonly` **path**: `"/nebius.msp.postgresql.v1alpha1.BackupService/Create"` = `"/nebius.msp.postgresql.v1alpha1.BackupService/Create"`

#### create.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`CreateBackupRequest`](../interfaces/CreateBackupRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`CreateBackupRequest`](../interfaces/CreateBackupRequest.md)

#### create.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`CreateBackupRequest`](../interfaces/CreateBackupRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### create.requestStream

> `readonly` **requestStream**: `false` = `false`

#### create.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../../common/v1alpha1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../../common/v1alpha1/interfaces/Operation.md)

#### create.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../../common/v1alpha1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### create.responseStream

> `readonly` **responseStream**: `false` = `false`

### delete

> `readonly` **delete**: `object`

#### delete.path

> `readonly` **path**: `"/nebius.msp.postgresql.v1alpha1.BackupService/Delete"` = `"/nebius.msp.postgresql.v1alpha1.BackupService/Delete"`

#### delete.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`DeleteBackupRequest`](../interfaces/DeleteBackupRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`DeleteBackupRequest`](../interfaces/DeleteBackupRequest.md)

#### delete.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`DeleteBackupRequest`](../interfaces/DeleteBackupRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### delete.requestStream

> `readonly` **requestStream**: `false` = `false`

#### delete.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../../common/v1alpha1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../../common/v1alpha1/interfaces/Operation.md)

#### delete.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../../common/v1alpha1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### delete.responseStream

> `readonly` **responseStream**: `false` = `false`

### get

> `readonly` **get**: `object`

#### get.path

> `readonly` **path**: `"/nebius.msp.postgresql.v1alpha1.BackupService/Get"` = `"/nebius.msp.postgresql.v1alpha1.BackupService/Get"`

#### get.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetBackupRequest`](../interfaces/GetBackupRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetBackupRequest`](../interfaces/GetBackupRequest.md)

#### get.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetBackupRequest`](../interfaces/GetBackupRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### get.requestStream

> `readonly` **requestStream**: `false` = `false`

#### get.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Backup`](../interfaces/Backup.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Backup`](../interfaces/Backup.md)

#### get.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Backup`](../interfaces/Backup.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### get.responseStream

> `readonly` **responseStream**: `false` = `false`

### list

> `readonly` **list**: `object`

#### list.path

> `readonly` **path**: `"/nebius.msp.postgresql.v1alpha1.BackupService/List"` = `"/nebius.msp.postgresql.v1alpha1.BackupService/List"`

#### list.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListBackupsRequest`](../interfaces/ListBackupsRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListBackupsRequest`](../interfaces/ListBackupsRequest.md)

#### list.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListBackupsRequest`](../interfaces/ListBackupsRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### list.requestStream

> `readonly` **requestStream**: `false` = `false`

#### list.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListBackupsResponse`](../interfaces/ListBackupsResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListBackupsResponse`](../interfaces/ListBackupsResponse.md)

#### list.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListBackupsResponse`](../interfaces/ListBackupsResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### list.responseStream

> `readonly` **responseStream**: `false` = `false`

### listByCluster

> `readonly` **listByCluster**: `object`

#### listByCluster.path

> `readonly` **path**: `"/nebius.msp.postgresql.v1alpha1.BackupService/ListByCluster"` = `"/nebius.msp.postgresql.v1alpha1.BackupService/ListByCluster"`

#### listByCluster.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListBackupsByClusterRequest`](../interfaces/ListBackupsByClusterRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListBackupsByClusterRequest`](../interfaces/ListBackupsByClusterRequest.md)

#### listByCluster.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListBackupsByClusterRequest`](../interfaces/ListBackupsByClusterRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### listByCluster.requestStream

> `readonly` **requestStream**: `false` = `false`

#### listByCluster.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListBackupsResponse`](../interfaces/ListBackupsResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListBackupsResponse`](../interfaces/ListBackupsResponse.md)

#### listByCluster.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListBackupsResponse`](../interfaces/ListBackupsResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### listByCluster.responseStream

> `readonly` **responseStream**: `false` = `false`
