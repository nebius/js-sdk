[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/compute/v1](../README.md) / GpuClusterServiceBaseClient

# Variable: GpuClusterServiceBaseClient

> **GpuClusterServiceBaseClient**: \{(`address`, `credentials`, `options?`): [`GpuClusterServiceBaseClient`](../interfaces/GpuClusterServiceBaseClient.md); `service`: `object`; `serviceName`: `string`; \}

Defined in: src/api/nebius/compute/v1/index.ts:4264

## Type Declaration

## Parameters

### address

`string`

### credentials

`ChannelCredentials`

### options?

`Partial`\<`ClientOptions`\>

## Returns

[`GpuClusterServiceBaseClient`](../interfaces/GpuClusterServiceBaseClient.md)

### service

> **service**: `object`

#### service.create

> `readonly` **create**: `object`

#### service.create.path

> `readonly` **path**: `"/nebius.compute.v1.GpuClusterService/Create"` = `"/nebius.compute.v1.GpuClusterService/Create"`

#### service.create.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`CreateGpuClusterRequest`](../interfaces/CreateGpuClusterRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`CreateGpuClusterRequest`](../interfaces/CreateGpuClusterRequest.md)

#### service.create.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`CreateGpuClusterRequest`](../interfaces/CreateGpuClusterRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.create.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.create.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../common/v1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../common/v1/interfaces/Operation.md)

#### service.create.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../common/v1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.create.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.delete

> `readonly` **delete**: `object`

#### service.delete.path

> `readonly` **path**: `"/nebius.compute.v1.GpuClusterService/Delete"` = `"/nebius.compute.v1.GpuClusterService/Delete"`

#### service.delete.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`DeleteGpuClusterRequest`](../interfaces/DeleteGpuClusterRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`DeleteGpuClusterRequest`](../interfaces/DeleteGpuClusterRequest.md)

#### service.delete.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`DeleteGpuClusterRequest`](../interfaces/DeleteGpuClusterRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.delete.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.delete.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../common/v1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../common/v1/interfaces/Operation.md)

#### service.delete.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../common/v1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.delete.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.get

> `readonly` **get**: `object`

#### service.get.path

> `readonly` **path**: `"/nebius.compute.v1.GpuClusterService/Get"` = `"/nebius.compute.v1.GpuClusterService/Get"`

#### service.get.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetGpuClusterRequest`](../interfaces/GetGpuClusterRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetGpuClusterRequest`](../interfaces/GetGpuClusterRequest.md)

#### service.get.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetGpuClusterRequest`](../interfaces/GetGpuClusterRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.get.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.get.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`GpuCluster`](../interfaces/GpuCluster.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GpuCluster`](../interfaces/GpuCluster.md)

#### service.get.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GpuCluster`](../interfaces/GpuCluster.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.get.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.getByName

> `readonly` **getByName**: `object`

#### service.getByName.path

> `readonly` **path**: `"/nebius.compute.v1.GpuClusterService/GetByName"` = `"/nebius.compute.v1.GpuClusterService/GetByName"`

#### service.getByName.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

#### service.getByName.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.getByName.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.getByName.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`GpuCluster`](../interfaces/GpuCluster.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GpuCluster`](../interfaces/GpuCluster.md)

#### service.getByName.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GpuCluster`](../interfaces/GpuCluster.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.getByName.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.list

> `readonly` **list**: `object`

#### service.list.path

> `readonly` **path**: `"/nebius.compute.v1.GpuClusterService/List"` = `"/nebius.compute.v1.GpuClusterService/List"`

#### service.list.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListGpuClustersRequest`](../interfaces/ListGpuClustersRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListGpuClustersRequest`](../interfaces/ListGpuClustersRequest.md)

#### service.list.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListGpuClustersRequest`](../interfaces/ListGpuClustersRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.list.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.list.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListGpuClustersResponse`](../interfaces/ListGpuClustersResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListGpuClustersResponse`](../interfaces/ListGpuClustersResponse.md)

#### service.list.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListGpuClustersResponse`](../interfaces/ListGpuClustersResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.list.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.listOperationsByParent

> `readonly` **listOperationsByParent**: `object`

#### service.listOperationsByParent.path

> `readonly` **path**: `"/nebius.compute.v1.GpuClusterService/ListOperationsByParent"` = `"/nebius.compute.v1.GpuClusterService/ListOperationsByParent"`

#### service.listOperationsByParent.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md)

#### service.listOperationsByParent.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.listOperationsByParent.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.listOperationsByParent.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListOperationsResponse`](../../../common/v1/interfaces/ListOperationsResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListOperationsResponse`](../../../common/v1/interfaces/ListOperationsResponse.md)

#### service.listOperationsByParent.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListOperationsResponse`](../../../common/v1/interfaces/ListOperationsResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.listOperationsByParent.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.update

> `readonly` **update**: `object`

#### service.update.path

> `readonly` **path**: `"/nebius.compute.v1.GpuClusterService/Update"` = `"/nebius.compute.v1.GpuClusterService/Update"`

#### service.update.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`UpdateGpuClusterRequest`](../interfaces/UpdateGpuClusterRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`UpdateGpuClusterRequest`](../interfaces/UpdateGpuClusterRequest.md)

#### service.update.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`UpdateGpuClusterRequest`](../interfaces/UpdateGpuClusterRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.update.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.update.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../common/v1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../common/v1/interfaces/Operation.md)

#### service.update.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../common/v1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.update.responseStream

> `readonly` **responseStream**: `false` = `false`

### serviceName

> **serviceName**: `string`
