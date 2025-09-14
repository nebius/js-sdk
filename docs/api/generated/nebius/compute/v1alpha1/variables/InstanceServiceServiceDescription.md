[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/compute/v1alpha1](../README.md) / InstanceServiceServiceDescription

# ~~Variable: InstanceServiceServiceDescription~~

> **InstanceServiceServiceDescription**: `object`

Defined in: src/generated/nebius/compute/v1alpha1/index.ts:6238

## Type Declaration

### ~~create~~

> `readonly` **create**: `object`

#### create.path

> `readonly` **path**: `"/nebius.compute.v1alpha1.InstanceService/Create"` = `"/nebius.compute.v1alpha1.InstanceService/Create"`

#### create.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`CreateInstanceRequest`](../interfaces/CreateInstanceRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`CreateInstanceRequest`](../interfaces/CreateInstanceRequest.md)

#### create.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`CreateInstanceRequest`](../interfaces/CreateInstanceRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### create.requestStream

> `readonly` **requestStream**: `false` = `false`

#### create.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../common/v1alpha1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../common/v1alpha1/interfaces/Operation.md)

#### create.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../common/v1alpha1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### create.responseStream

> `readonly` **responseStream**: `false` = `false`

### ~~delete~~

> `readonly` **delete**: `object`

#### delete.path

> `readonly` **path**: `"/nebius.compute.v1alpha1.InstanceService/Delete"` = `"/nebius.compute.v1alpha1.InstanceService/Delete"`

#### delete.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`DeleteInstanceRequest`](../interfaces/DeleteInstanceRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`DeleteInstanceRequest`](../interfaces/DeleteInstanceRequest.md)

#### delete.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`DeleteInstanceRequest`](../interfaces/DeleteInstanceRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### delete.requestStream

> `readonly` **requestStream**: `false` = `false`

#### delete.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../common/v1alpha1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../common/v1alpha1/interfaces/Operation.md)

#### delete.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../common/v1alpha1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### delete.responseStream

> `readonly` **responseStream**: `false` = `false`

### ~~get~~

> `readonly` **get**: `object`

#### get.path

> `readonly` **path**: `"/nebius.compute.v1alpha1.InstanceService/Get"` = `"/nebius.compute.v1alpha1.InstanceService/Get"`

#### get.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetInstanceRequest`](../interfaces/GetInstanceRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetInstanceRequest`](../interfaces/GetInstanceRequest.md)

#### get.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetInstanceRequest`](../interfaces/GetInstanceRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### get.requestStream

> `readonly` **requestStream**: `false` = `false`

#### get.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Instance`](../interfaces/Instance.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Instance`](../interfaces/Instance.md)

#### get.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Instance`](../interfaces/Instance.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### get.responseStream

> `readonly` **responseStream**: `false` = `false`

### ~~getByName~~

> `readonly` **getByName**: `object`

#### getByName.path

> `readonly` **path**: `"/nebius.compute.v1alpha1.InstanceService/GetByName"` = `"/nebius.compute.v1alpha1.InstanceService/GetByName"`

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

> `readonly` **responseDeserialize**: (`value`) => [`Instance`](../interfaces/Instance.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Instance`](../interfaces/Instance.md)

#### getByName.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Instance`](../interfaces/Instance.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### getByName.responseStream

> `readonly` **responseStream**: `false` = `false`

### ~~list~~

> `readonly` **list**: `object`

#### list.path

> `readonly` **path**: `"/nebius.compute.v1alpha1.InstanceService/List"` = `"/nebius.compute.v1alpha1.InstanceService/List"`

#### list.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListInstancesRequest`](../interfaces/ListInstancesRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListInstancesRequest`](../interfaces/ListInstancesRequest.md)

#### list.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListInstancesRequest`](../interfaces/ListInstancesRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### list.requestStream

> `readonly` **requestStream**: `false` = `false`

#### list.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListInstancesResponse`](../interfaces/ListInstancesResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListInstancesResponse`](../interfaces/ListInstancesResponse.md)

#### list.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListInstancesResponse`](../interfaces/ListInstancesResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### list.responseStream

> `readonly` **responseStream**: `false` = `false`

### ~~listOperationsByParent~~

> `readonly` **listOperationsByParent**: `object`

#### listOperationsByParent.path

> `readonly` **path**: `"/nebius.compute.v1alpha1.InstanceService/ListOperationsByParent"` = `"/nebius.compute.v1alpha1.InstanceService/ListOperationsByParent"`

#### listOperationsByParent.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListOperationsByParentRequest`](../../../common/v1alpha1/interfaces/ListOperationsByParentRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListOperationsByParentRequest`](../../../common/v1alpha1/interfaces/ListOperationsByParentRequest.md)

#### listOperationsByParent.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListOperationsByParentRequest`](../../../common/v1alpha1/interfaces/ListOperationsByParentRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### listOperationsByParent.requestStream

> `readonly` **requestStream**: `false` = `false`

#### listOperationsByParent.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListOperationsResponse`](../../../common/v1alpha1/interfaces/ListOperationsResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListOperationsResponse`](../../../common/v1alpha1/interfaces/ListOperationsResponse.md)

#### listOperationsByParent.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListOperationsResponse`](../../../common/v1alpha1/interfaces/ListOperationsResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### listOperationsByParent.responseStream

> `readonly` **responseStream**: `false` = `false`

### ~~start~~

> `readonly` **start**: `object`

#### start.path

> `readonly` **path**: `"/nebius.compute.v1alpha1.InstanceService/Start"` = `"/nebius.compute.v1alpha1.InstanceService/Start"`

#### start.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`StartInstanceRequest`](../interfaces/StartInstanceRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`StartInstanceRequest`](../interfaces/StartInstanceRequest.md)

#### start.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`StartInstanceRequest`](../interfaces/StartInstanceRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### start.requestStream

> `readonly` **requestStream**: `false` = `false`

#### start.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../common/v1alpha1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../common/v1alpha1/interfaces/Operation.md)

#### start.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../common/v1alpha1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### start.responseStream

> `readonly` **responseStream**: `false` = `false`

### ~~stop~~

> `readonly` **stop**: `object`

#### stop.path

> `readonly` **path**: `"/nebius.compute.v1alpha1.InstanceService/Stop"` = `"/nebius.compute.v1alpha1.InstanceService/Stop"`

#### stop.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`StopInstanceRequest`](../interfaces/StopInstanceRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`StopInstanceRequest`](../interfaces/StopInstanceRequest.md)

#### stop.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`StopInstanceRequest`](../interfaces/StopInstanceRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### stop.requestStream

> `readonly` **requestStream**: `false` = `false`

#### stop.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../common/v1alpha1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../common/v1alpha1/interfaces/Operation.md)

#### stop.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../common/v1alpha1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### stop.responseStream

> `readonly` **responseStream**: `false` = `false`

### ~~update~~

> `readonly` **update**: `object`

#### update.path

> `readonly` **path**: `"/nebius.compute.v1alpha1.InstanceService/Update"` = `"/nebius.compute.v1alpha1.InstanceService/Update"`

#### update.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`UpdateInstanceRequest`](../interfaces/UpdateInstanceRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`UpdateInstanceRequest`](../interfaces/UpdateInstanceRequest.md)

#### update.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`UpdateInstanceRequest`](../interfaces/UpdateInstanceRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### update.requestStream

> `readonly` **requestStream**: `false` = `false`

#### update.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../common/v1alpha1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../common/v1alpha1/interfaces/Operation.md)

#### update.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../common/v1alpha1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### update.responseStream

> `readonly` **responseStream**: `false` = `false`

## Deprecated

Deprecated.
