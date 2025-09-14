[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/compute/v1](../README.md) / GpuClusterServiceServiceDescription

# Variable: GpuClusterServiceServiceDescription

> **GpuClusterServiceServiceDescription**: `object`

Defined in: src/api/nebius/compute/v1/index.ts:4187

## Type Declaration

### create

> `readonly` **create**: `object`

#### create.path

> `readonly` **path**: `"/nebius.compute.v1.GpuClusterService/Create"` = `"/nebius.compute.v1.GpuClusterService/Create"`

#### create.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`CreateGpuClusterRequest`](../interfaces/CreateGpuClusterRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`CreateGpuClusterRequest`](../interfaces/CreateGpuClusterRequest.md)

#### create.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`CreateGpuClusterRequest`](../interfaces/CreateGpuClusterRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### create.requestStream

> `readonly` **requestStream**: `false` = `false`

#### create.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../common/v1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../common/v1/interfaces/Operation.md)

#### create.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../common/v1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### create.responseStream

> `readonly` **responseStream**: `false` = `false`

### delete

> `readonly` **delete**: `object`

#### delete.path

> `readonly` **path**: `"/nebius.compute.v1.GpuClusterService/Delete"` = `"/nebius.compute.v1.GpuClusterService/Delete"`

#### delete.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`DeleteGpuClusterRequest`](../interfaces/DeleteGpuClusterRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`DeleteGpuClusterRequest`](../interfaces/DeleteGpuClusterRequest.md)

#### delete.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`DeleteGpuClusterRequest`](../interfaces/DeleteGpuClusterRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### delete.requestStream

> `readonly` **requestStream**: `false` = `false`

#### delete.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../common/v1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../common/v1/interfaces/Operation.md)

#### delete.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../common/v1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### delete.responseStream

> `readonly` **responseStream**: `false` = `false`

### get

> `readonly` **get**: `object`

#### get.path

> `readonly` **path**: `"/nebius.compute.v1.GpuClusterService/Get"` = `"/nebius.compute.v1.GpuClusterService/Get"`

#### get.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetGpuClusterRequest`](../interfaces/GetGpuClusterRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetGpuClusterRequest`](../interfaces/GetGpuClusterRequest.md)

#### get.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetGpuClusterRequest`](../interfaces/GetGpuClusterRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### get.requestStream

> `readonly` **requestStream**: `false` = `false`

#### get.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`GpuCluster`](../interfaces/GpuCluster.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GpuCluster`](../interfaces/GpuCluster.md)

#### get.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GpuCluster`](../interfaces/GpuCluster.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### get.responseStream

> `readonly` **responseStream**: `false` = `false`

### getByName

> `readonly` **getByName**: `object`

#### getByName.path

> `readonly` **path**: `"/nebius.compute.v1.GpuClusterService/GetByName"` = `"/nebius.compute.v1.GpuClusterService/GetByName"`

#### getByName.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

#### getByName.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### getByName.requestStream

> `readonly` **requestStream**: `false` = `false`

#### getByName.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`GpuCluster`](../interfaces/GpuCluster.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GpuCluster`](../interfaces/GpuCluster.md)

#### getByName.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GpuCluster`](../interfaces/GpuCluster.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### getByName.responseStream

> `readonly` **responseStream**: `false` = `false`

### list

> `readonly` **list**: `object`

#### list.path

> `readonly` **path**: `"/nebius.compute.v1.GpuClusterService/List"` = `"/nebius.compute.v1.GpuClusterService/List"`

#### list.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListGpuClustersRequest`](../interfaces/ListGpuClustersRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListGpuClustersRequest`](../interfaces/ListGpuClustersRequest.md)

#### list.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListGpuClustersRequest`](../interfaces/ListGpuClustersRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### list.requestStream

> `readonly` **requestStream**: `false` = `false`

#### list.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListGpuClustersResponse`](../interfaces/ListGpuClustersResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListGpuClustersResponse`](../interfaces/ListGpuClustersResponse.md)

#### list.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListGpuClustersResponse`](../interfaces/ListGpuClustersResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### list.responseStream

> `readonly` **responseStream**: `false` = `false`

### listOperationsByParent

> `readonly` **listOperationsByParent**: `object`

#### listOperationsByParent.path

> `readonly` **path**: `"/nebius.compute.v1.GpuClusterService/ListOperationsByParent"` = `"/nebius.compute.v1.GpuClusterService/ListOperationsByParent"`

#### listOperationsByParent.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md)

#### listOperationsByParent.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### listOperationsByParent.requestStream

> `readonly` **requestStream**: `false` = `false`

#### listOperationsByParent.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListOperationsResponse`](../../../common/v1/interfaces/ListOperationsResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListOperationsResponse`](../../../common/v1/interfaces/ListOperationsResponse.md)

#### listOperationsByParent.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListOperationsResponse`](../../../common/v1/interfaces/ListOperationsResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### listOperationsByParent.responseStream

> `readonly` **responseStream**: `false` = `false`

### update

> `readonly` **update**: `object`

#### update.path

> `readonly` **path**: `"/nebius.compute.v1.GpuClusterService/Update"` = `"/nebius.compute.v1.GpuClusterService/Update"`

#### update.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`UpdateGpuClusterRequest`](../interfaces/UpdateGpuClusterRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`UpdateGpuClusterRequest`](../interfaces/UpdateGpuClusterRequest.md)

#### update.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`UpdateGpuClusterRequest`](../interfaces/UpdateGpuClusterRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### update.requestStream

> `readonly` **requestStream**: `false` = `false`

#### update.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../common/v1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../common/v1/interfaces/Operation.md)

#### update.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../common/v1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### update.responseStream

> `readonly` **responseStream**: `false` = `false`
