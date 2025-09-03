[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/compute/v1alpha1](../README.md) / InstanceServiceBaseClient

# ~~Variable: InstanceServiceBaseClient~~

> **InstanceServiceBaseClient**: \{(`address`, `credentials`, `options?`): [`InstanceServiceBaseClient`](../interfaces/InstanceServiceBaseClient.md); `service`: `object`; `serviceName`: `string`; \}

Defined in: src/generated/nebius/compute/v1alpha1/index.ts:6343

## Type Declaration

## Parameters

### address

`string`

### credentials

`ChannelCredentials`

### options?

`Partial`\<`ClientOptions`\>

## Returns

[`InstanceServiceBaseClient`](../interfaces/InstanceServiceBaseClient.md)

### ~~service~~

> **service**: `object`

#### service.create

> `readonly` **create**: `object`

#### service.create.path

> `readonly` **path**: `"/nebius.compute.v1alpha1.InstanceService/Create"` = `"/nebius.compute.v1alpha1.InstanceService/Create"`

#### service.create.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`CreateInstanceRequest`](../interfaces/CreateInstanceRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`CreateInstanceRequest`](../interfaces/CreateInstanceRequest.md)

#### service.create.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`CreateInstanceRequest`](../interfaces/CreateInstanceRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.create.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.create.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../common/v1alpha1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../common/v1alpha1/interfaces/Operation.md)

#### service.create.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../common/v1alpha1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.create.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.delete

> `readonly` **delete**: `object`

#### service.delete.path

> `readonly` **path**: `"/nebius.compute.v1alpha1.InstanceService/Delete"` = `"/nebius.compute.v1alpha1.InstanceService/Delete"`

#### service.delete.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`DeleteInstanceRequest`](../interfaces/DeleteInstanceRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`DeleteInstanceRequest`](../interfaces/DeleteInstanceRequest.md)

#### service.delete.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`DeleteInstanceRequest`](../interfaces/DeleteInstanceRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.delete.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.delete.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../common/v1alpha1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../common/v1alpha1/interfaces/Operation.md)

#### service.delete.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../common/v1alpha1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.delete.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.get

> `readonly` **get**: `object`

#### service.get.path

> `readonly` **path**: `"/nebius.compute.v1alpha1.InstanceService/Get"` = `"/nebius.compute.v1alpha1.InstanceService/Get"`

#### service.get.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetInstanceRequest`](../interfaces/GetInstanceRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetInstanceRequest`](../interfaces/GetInstanceRequest.md)

#### service.get.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetInstanceRequest`](../interfaces/GetInstanceRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.get.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.get.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Instance`](../interfaces/Instance.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Instance`](../interfaces/Instance.md)

#### service.get.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Instance`](../interfaces/Instance.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.get.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.getByName

> `readonly` **getByName**: `object`

#### service.getByName.path

> `readonly` **path**: `"/nebius.compute.v1alpha1.InstanceService/GetByName"` = `"/nebius.compute.v1alpha1.InstanceService/GetByName"`

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

> `readonly` **responseDeserialize**: (`value`) => [`Instance`](../interfaces/Instance.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Instance`](../interfaces/Instance.md)

#### service.getByName.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Instance`](../interfaces/Instance.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.getByName.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.list

> `readonly` **list**: `object`

#### service.list.path

> `readonly` **path**: `"/nebius.compute.v1alpha1.InstanceService/List"` = `"/nebius.compute.v1alpha1.InstanceService/List"`

#### service.list.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListInstancesRequest`](../interfaces/ListInstancesRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListInstancesRequest`](../interfaces/ListInstancesRequest.md)

#### service.list.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListInstancesRequest`](../interfaces/ListInstancesRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.list.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.list.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListInstancesResponse`](../interfaces/ListInstancesResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListInstancesResponse`](../interfaces/ListInstancesResponse.md)

#### service.list.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListInstancesResponse`](../interfaces/ListInstancesResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.list.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.listOperationsByParent

> `readonly` **listOperationsByParent**: `object`

#### service.listOperationsByParent.path

> `readonly` **path**: `"/nebius.compute.v1alpha1.InstanceService/ListOperationsByParent"` = `"/nebius.compute.v1alpha1.InstanceService/ListOperationsByParent"`

#### service.listOperationsByParent.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListOperationsByParentRequest`](../../../common/v1alpha1/interfaces/ListOperationsByParentRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListOperationsByParentRequest`](../../../common/v1alpha1/interfaces/ListOperationsByParentRequest.md)

#### service.listOperationsByParent.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListOperationsByParentRequest`](../../../common/v1alpha1/interfaces/ListOperationsByParentRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.listOperationsByParent.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.listOperationsByParent.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListOperationsResponse`](../../../common/v1alpha1/interfaces/ListOperationsResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListOperationsResponse`](../../../common/v1alpha1/interfaces/ListOperationsResponse.md)

#### service.listOperationsByParent.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListOperationsResponse`](../../../common/v1alpha1/interfaces/ListOperationsResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.listOperationsByParent.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.start

> `readonly` **start**: `object`

#### service.start.path

> `readonly` **path**: `"/nebius.compute.v1alpha1.InstanceService/Start"` = `"/nebius.compute.v1alpha1.InstanceService/Start"`

#### service.start.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`StartInstanceRequest`](../interfaces/StartInstanceRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`StartInstanceRequest`](../interfaces/StartInstanceRequest.md)

#### service.start.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`StartInstanceRequest`](../interfaces/StartInstanceRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.start.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.start.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../common/v1alpha1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../common/v1alpha1/interfaces/Operation.md)

#### service.start.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../common/v1alpha1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.start.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.stop

> `readonly` **stop**: `object`

#### service.stop.path

> `readonly` **path**: `"/nebius.compute.v1alpha1.InstanceService/Stop"` = `"/nebius.compute.v1alpha1.InstanceService/Stop"`

#### service.stop.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`StopInstanceRequest`](../interfaces/StopInstanceRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`StopInstanceRequest`](../interfaces/StopInstanceRequest.md)

#### service.stop.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`StopInstanceRequest`](../interfaces/StopInstanceRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.stop.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.stop.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../common/v1alpha1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../common/v1alpha1/interfaces/Operation.md)

#### service.stop.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../common/v1alpha1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.stop.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.update

> `readonly` **update**: `object`

#### service.update.path

> `readonly` **path**: `"/nebius.compute.v1alpha1.InstanceService/Update"` = `"/nebius.compute.v1alpha1.InstanceService/Update"`

#### service.update.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`UpdateInstanceRequest`](../interfaces/UpdateInstanceRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`UpdateInstanceRequest`](../interfaces/UpdateInstanceRequest.md)

#### service.update.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`UpdateInstanceRequest`](../interfaces/UpdateInstanceRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.update.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.update.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../common/v1alpha1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../common/v1alpha1/interfaces/Operation.md)

#### service.update.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../common/v1alpha1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.update.responseStream

> `readonly` **responseStream**: `false` = `false`

### ~~serviceName~~

> **serviceName**: `string`

## Deprecated

Deprecated.
