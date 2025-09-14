[**@nebius/nodejs-sdk**](../../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../../README.md) / [api/nebius/msp/postgresql/v1alpha1](../README.md) / ClusterServiceBaseClient

# Variable: ClusterServiceBaseClient

> **ClusterServiceBaseClient**: \{(`address`, `credentials`, `options?`): [`ClusterServiceBaseClient`](../interfaces/ClusterServiceBaseClient.md); `service`: `object`; `serviceName`: `string`; \}

Defined in: src/api/nebius/msp/postgresql/v1alpha1/index.ts:2296

## Type Declaration

## Parameters

### address

`string`

### credentials

`ChannelCredentials`

### options?

`Partial`\<`ClientOptions`\>

## Returns

[`ClusterServiceBaseClient`](../interfaces/ClusterServiceBaseClient.md)

### service

> **service**: `object`

#### service.create

> `readonly` **create**: `object`

#### service.create.path

> `readonly` **path**: `"/nebius.msp.postgresql.v1alpha1.ClusterService/Create"` = `"/nebius.msp.postgresql.v1alpha1.ClusterService/Create"`

#### service.create.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`CreateClusterRequest`](../interfaces/CreateClusterRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`CreateClusterRequest`](../interfaces/CreateClusterRequest.md)

#### service.create.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`CreateClusterRequest`](../interfaces/CreateClusterRequest.md)

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

> `readonly` **path**: `"/nebius.msp.postgresql.v1alpha1.ClusterService/Delete"` = `"/nebius.msp.postgresql.v1alpha1.ClusterService/Delete"`

#### service.delete.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`DeleteClusterRequest`](../interfaces/DeleteClusterRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`DeleteClusterRequest`](../interfaces/DeleteClusterRequest.md)

#### service.delete.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`DeleteClusterRequest`](../interfaces/DeleteClusterRequest.md)

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

> `readonly` **path**: `"/nebius.msp.postgresql.v1alpha1.ClusterService/Get"` = `"/nebius.msp.postgresql.v1alpha1.ClusterService/Get"`

#### service.get.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetClusterRequest`](../interfaces/GetClusterRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetClusterRequest`](../interfaces/GetClusterRequest.md)

#### service.get.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetClusterRequest`](../interfaces/GetClusterRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.get.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.get.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Cluster`](../interfaces/Cluster.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Cluster`](../interfaces/Cluster.md)

#### service.get.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Cluster`](../interfaces/Cluster.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.get.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.getByName

> `readonly` **getByName**: `object`

#### service.getByName.path

> `readonly` **path**: `"/nebius.msp.postgresql.v1alpha1.ClusterService/GetByName"` = `"/nebius.msp.postgresql.v1alpha1.ClusterService/GetByName"`

#### service.getByName.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetByNameRequest`](../../../../common/v1/interfaces/GetByNameRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetByNameRequest`](../../../../common/v1/interfaces/GetByNameRequest.md)

#### service.getByName.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetByNameRequest`](../../../../common/v1/interfaces/GetByNameRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.getByName.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.getByName.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Cluster`](../interfaces/Cluster.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Cluster`](../interfaces/Cluster.md)

#### service.getByName.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Cluster`](../interfaces/Cluster.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.getByName.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.getForBackup

> `readonly` **getForBackup**: `object`

#### service.getForBackup.path

> `readonly` **path**: `"/nebius.msp.postgresql.v1alpha1.ClusterService/GetForBackup"` = `"/nebius.msp.postgresql.v1alpha1.ClusterService/GetForBackup"`

#### service.getForBackup.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetClusterForBackupRequest`](../interfaces/GetClusterForBackupRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetClusterForBackupRequest`](../interfaces/GetClusterForBackupRequest.md)

#### service.getForBackup.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetClusterForBackupRequest`](../interfaces/GetClusterForBackupRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.getForBackup.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.getForBackup.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Cluster`](../interfaces/Cluster.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Cluster`](../interfaces/Cluster.md)

#### service.getForBackup.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Cluster`](../interfaces/Cluster.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.getForBackup.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.list

> `readonly` **list**: `object`

#### service.list.path

> `readonly` **path**: `"/nebius.msp.postgresql.v1alpha1.ClusterService/List"` = `"/nebius.msp.postgresql.v1alpha1.ClusterService/List"`

#### service.list.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListClustersRequest`](../interfaces/ListClustersRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListClustersRequest`](../interfaces/ListClustersRequest.md)

#### service.list.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListClustersRequest`](../interfaces/ListClustersRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.list.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.list.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListClustersResponse`](../interfaces/ListClustersResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListClustersResponse`](../interfaces/ListClustersResponse.md)

#### service.list.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListClustersResponse`](../interfaces/ListClustersResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.list.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.restore

> `readonly` **restore**: `object`

#### service.restore.path

> `readonly` **path**: `"/nebius.msp.postgresql.v1alpha1.ClusterService/Restore"` = `"/nebius.msp.postgresql.v1alpha1.ClusterService/Restore"`

#### service.restore.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`RestoreClusterRequest`](../interfaces/RestoreClusterRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`RestoreClusterRequest`](../interfaces/RestoreClusterRequest.md)

#### service.restore.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`RestoreClusterRequest`](../interfaces/RestoreClusterRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.restore.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.restore.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../../common/v1alpha1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../../common/v1alpha1/interfaces/Operation.md)

#### service.restore.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../../common/v1alpha1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.restore.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.start

> `readonly` **start**: `object`

#### service.start.path

> `readonly` **path**: `"/nebius.msp.postgresql.v1alpha1.ClusterService/Start"` = `"/nebius.msp.postgresql.v1alpha1.ClusterService/Start"`

#### service.start.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`StartClusterRequest`](../interfaces/StartClusterRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`StartClusterRequest`](../interfaces/StartClusterRequest.md)

#### service.start.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`StartClusterRequest`](../interfaces/StartClusterRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.start.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.start.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../../common/v1alpha1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../../common/v1alpha1/interfaces/Operation.md)

#### service.start.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../../common/v1alpha1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.start.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.stop

> `readonly` **stop**: `object`

#### service.stop.path

> `readonly` **path**: `"/nebius.msp.postgresql.v1alpha1.ClusterService/Stop"` = `"/nebius.msp.postgresql.v1alpha1.ClusterService/Stop"`

#### service.stop.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`StopClusterRequest`](../interfaces/StopClusterRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`StopClusterRequest`](../interfaces/StopClusterRequest.md)

#### service.stop.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`StopClusterRequest`](../interfaces/StopClusterRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.stop.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.stop.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../../common/v1alpha1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../../common/v1alpha1/interfaces/Operation.md)

#### service.stop.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../../common/v1alpha1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.stop.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.update

> `readonly` **update**: `object`

#### service.update.path

> `readonly` **path**: `"/nebius.msp.postgresql.v1alpha1.ClusterService/Update"` = `"/nebius.msp.postgresql.v1alpha1.ClusterService/Update"`

#### service.update.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`UpdateClusterRequest`](../interfaces/UpdateClusterRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`UpdateClusterRequest`](../interfaces/UpdateClusterRequest.md)

#### service.update.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`UpdateClusterRequest`](../interfaces/UpdateClusterRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.update.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.update.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../../common/v1alpha1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../../common/v1alpha1/interfaces/Operation.md)

#### service.update.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../../common/v1alpha1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.update.responseStream

> `readonly` **responseStream**: `false` = `false`

### serviceName

> **serviceName**: `string`
