[**@nebius/nodejs-sdk**](../../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../../README.md) / [api/nebius/msp/postgresql/v1alpha1](../README.md) / ClusterServiceServiceDescription

# Variable: ClusterServiceServiceDescription

> **ClusterServiceServiceDescription**: `object`

Defined in: src/api/nebius/msp/postgresql/v1alpha1/index.ts:2189

## Type Declaration

### create

> `readonly` **create**: `object`

#### create.path

> `readonly` **path**: `"/nebius.msp.postgresql.v1alpha1.ClusterService/Create"` = `"/nebius.msp.postgresql.v1alpha1.ClusterService/Create"`

#### create.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`CreateClusterRequest`](../interfaces/CreateClusterRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`CreateClusterRequest`](../interfaces/CreateClusterRequest.md)

#### create.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`CreateClusterRequest`](../interfaces/CreateClusterRequest.md)

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

> `readonly` **path**: `"/nebius.msp.postgresql.v1alpha1.ClusterService/Delete"` = `"/nebius.msp.postgresql.v1alpha1.ClusterService/Delete"`

#### delete.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`DeleteClusterRequest`](../interfaces/DeleteClusterRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`DeleteClusterRequest`](../interfaces/DeleteClusterRequest.md)

#### delete.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`DeleteClusterRequest`](../interfaces/DeleteClusterRequest.md)

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

> `readonly` **path**: `"/nebius.msp.postgresql.v1alpha1.ClusterService/Get"` = `"/nebius.msp.postgresql.v1alpha1.ClusterService/Get"`

#### get.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetClusterRequest`](../interfaces/GetClusterRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetClusterRequest`](../interfaces/GetClusterRequest.md)

#### get.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetClusterRequest`](../interfaces/GetClusterRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### get.requestStream

> `readonly` **requestStream**: `false` = `false`

#### get.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Cluster`](../interfaces/Cluster.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Cluster`](../interfaces/Cluster.md)

#### get.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Cluster`](../interfaces/Cluster.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### get.responseStream

> `readonly` **responseStream**: `false` = `false`

### getByName

> `readonly` **getByName**: `object`

#### getByName.path

> `readonly` **path**: `"/nebius.msp.postgresql.v1alpha1.ClusterService/GetByName"` = `"/nebius.msp.postgresql.v1alpha1.ClusterService/GetByName"`

#### getByName.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetByNameRequest`](../../../../common/v1/interfaces/GetByNameRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetByNameRequest`](../../../../common/v1/interfaces/GetByNameRequest.md)

#### getByName.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetByNameRequest`](../../../../common/v1/interfaces/GetByNameRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### getByName.requestStream

> `readonly` **requestStream**: `false` = `false`

#### getByName.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Cluster`](../interfaces/Cluster.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Cluster`](../interfaces/Cluster.md)

#### getByName.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Cluster`](../interfaces/Cluster.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### getByName.responseStream

> `readonly` **responseStream**: `false` = `false`

### getForBackup

> `readonly` **getForBackup**: `object`

#### getForBackup.path

> `readonly` **path**: `"/nebius.msp.postgresql.v1alpha1.ClusterService/GetForBackup"` = `"/nebius.msp.postgresql.v1alpha1.ClusterService/GetForBackup"`

#### getForBackup.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetClusterForBackupRequest`](../interfaces/GetClusterForBackupRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetClusterForBackupRequest`](../interfaces/GetClusterForBackupRequest.md)

#### getForBackup.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetClusterForBackupRequest`](../interfaces/GetClusterForBackupRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### getForBackup.requestStream

> `readonly` **requestStream**: `false` = `false`

#### getForBackup.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Cluster`](../interfaces/Cluster.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Cluster`](../interfaces/Cluster.md)

#### getForBackup.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Cluster`](../interfaces/Cluster.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### getForBackup.responseStream

> `readonly` **responseStream**: `false` = `false`

### list

> `readonly` **list**: `object`

#### list.path

> `readonly` **path**: `"/nebius.msp.postgresql.v1alpha1.ClusterService/List"` = `"/nebius.msp.postgresql.v1alpha1.ClusterService/List"`

#### list.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListClustersRequest`](../interfaces/ListClustersRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListClustersRequest`](../interfaces/ListClustersRequest.md)

#### list.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListClustersRequest`](../interfaces/ListClustersRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### list.requestStream

> `readonly` **requestStream**: `false` = `false`

#### list.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListClustersResponse`](../interfaces/ListClustersResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListClustersResponse`](../interfaces/ListClustersResponse.md)

#### list.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListClustersResponse`](../interfaces/ListClustersResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### list.responseStream

> `readonly` **responseStream**: `false` = `false`

### restore

> `readonly` **restore**: `object`

#### restore.path

> `readonly` **path**: `"/nebius.msp.postgresql.v1alpha1.ClusterService/Restore"` = `"/nebius.msp.postgresql.v1alpha1.ClusterService/Restore"`

#### restore.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`RestoreClusterRequest`](../interfaces/RestoreClusterRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`RestoreClusterRequest`](../interfaces/RestoreClusterRequest.md)

#### restore.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`RestoreClusterRequest`](../interfaces/RestoreClusterRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### restore.requestStream

> `readonly` **requestStream**: `false` = `false`

#### restore.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../../common/v1alpha1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../../common/v1alpha1/interfaces/Operation.md)

#### restore.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../../common/v1alpha1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### restore.responseStream

> `readonly` **responseStream**: `false` = `false`

### start

> `readonly` **start**: `object`

#### start.path

> `readonly` **path**: `"/nebius.msp.postgresql.v1alpha1.ClusterService/Start"` = `"/nebius.msp.postgresql.v1alpha1.ClusterService/Start"`

#### start.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`StartClusterRequest`](../interfaces/StartClusterRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`StartClusterRequest`](../interfaces/StartClusterRequest.md)

#### start.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`StartClusterRequest`](../interfaces/StartClusterRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### start.requestStream

> `readonly` **requestStream**: `false` = `false`

#### start.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../../common/v1alpha1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../../common/v1alpha1/interfaces/Operation.md)

#### start.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../../common/v1alpha1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### start.responseStream

> `readonly` **responseStream**: `false` = `false`

### stop

> `readonly` **stop**: `object`

#### stop.path

> `readonly` **path**: `"/nebius.msp.postgresql.v1alpha1.ClusterService/Stop"` = `"/nebius.msp.postgresql.v1alpha1.ClusterService/Stop"`

#### stop.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`StopClusterRequest`](../interfaces/StopClusterRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`StopClusterRequest`](../interfaces/StopClusterRequest.md)

#### stop.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`StopClusterRequest`](../interfaces/StopClusterRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### stop.requestStream

> `readonly` **requestStream**: `false` = `false`

#### stop.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../../common/v1alpha1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../../common/v1alpha1/interfaces/Operation.md)

#### stop.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../../common/v1alpha1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### stop.responseStream

> `readonly` **responseStream**: `false` = `false`

### update

> `readonly` **update**: `object`

#### update.path

> `readonly` **path**: `"/nebius.msp.postgresql.v1alpha1.ClusterService/Update"` = `"/nebius.msp.postgresql.v1alpha1.ClusterService/Update"`

#### update.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`UpdateClusterRequest`](../interfaces/UpdateClusterRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`UpdateClusterRequest`](../interfaces/UpdateClusterRequest.md)

#### update.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`UpdateClusterRequest`](../interfaces/UpdateClusterRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### update.requestStream

> `readonly` **requestStream**: `false` = `false`

#### update.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../../common/v1alpha1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../../common/v1alpha1/interfaces/Operation.md)

#### update.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../../common/v1alpha1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### update.responseStream

> `readonly` **responseStream**: `false` = `false`
