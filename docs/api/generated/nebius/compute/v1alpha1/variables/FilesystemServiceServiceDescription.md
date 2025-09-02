[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/compute/v1alpha1](../README.md) / FilesystemServiceServiceDescription

# ~~Variable: FilesystemServiceServiceDescription~~

> **FilesystemServiceServiceDescription**: `object`

Defined in: src/generated/nebius/compute/v1alpha1/index.ts:2279

## Type Declaration

### ~~create~~

> `readonly` **create**: `object`

#### create.path

> `readonly` **path**: `"/nebius.compute.v1alpha1.FilesystemService/Create"` = `"/nebius.compute.v1alpha1.FilesystemService/Create"`

#### create.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`CreateFilesystemRequest`](../interfaces/CreateFilesystemRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`CreateFilesystemRequest`](../interfaces/CreateFilesystemRequest.md)

#### create.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`CreateFilesystemRequest`](../interfaces/CreateFilesystemRequest.md)

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

> `readonly` **path**: `"/nebius.compute.v1alpha1.FilesystemService/Delete"` = `"/nebius.compute.v1alpha1.FilesystemService/Delete"`

#### delete.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`DeleteFilesystemRequest`](../interfaces/DeleteFilesystemRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`DeleteFilesystemRequest`](../interfaces/DeleteFilesystemRequest.md)

#### delete.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`DeleteFilesystemRequest`](../interfaces/DeleteFilesystemRequest.md)

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

> `readonly` **path**: `"/nebius.compute.v1alpha1.FilesystemService/Get"` = `"/nebius.compute.v1alpha1.FilesystemService/Get"`

#### get.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetFilesystemRequest`](../interfaces/GetFilesystemRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetFilesystemRequest`](../interfaces/GetFilesystemRequest.md)

#### get.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetFilesystemRequest`](../interfaces/GetFilesystemRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### get.requestStream

> `readonly` **requestStream**: `false` = `false`

#### get.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Filesystem`](../interfaces/Filesystem.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Filesystem`](../interfaces/Filesystem.md)

#### get.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Filesystem`](../interfaces/Filesystem.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### get.responseStream

> `readonly` **responseStream**: `false` = `false`

### ~~getByName~~

> `readonly` **getByName**: `object`

#### getByName.path

> `readonly` **path**: `"/nebius.compute.v1alpha1.FilesystemService/GetByName"` = `"/nebius.compute.v1alpha1.FilesystemService/GetByName"`

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

> `readonly` **responseDeserialize**: (`value`) => [`Filesystem`](../interfaces/Filesystem.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Filesystem`](../interfaces/Filesystem.md)

#### getByName.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Filesystem`](../interfaces/Filesystem.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### getByName.responseStream

> `readonly` **responseStream**: `false` = `false`

### ~~list~~

> `readonly` **list**: `object`

#### list.path

> `readonly` **path**: `"/nebius.compute.v1alpha1.FilesystemService/List"` = `"/nebius.compute.v1alpha1.FilesystemService/List"`

#### list.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListFilesystemsRequest`](../interfaces/ListFilesystemsRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListFilesystemsRequest`](../interfaces/ListFilesystemsRequest.md)

#### list.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListFilesystemsRequest`](../interfaces/ListFilesystemsRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### list.requestStream

> `readonly` **requestStream**: `false` = `false`

#### list.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListFilesystemsResponse`](../interfaces/ListFilesystemsResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListFilesystemsResponse`](../interfaces/ListFilesystemsResponse.md)

#### list.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListFilesystemsResponse`](../interfaces/ListFilesystemsResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### list.responseStream

> `readonly` **responseStream**: `false` = `false`

### ~~listOperationsByParent~~

> `readonly` **listOperationsByParent**: `object`

#### listOperationsByParent.path

> `readonly` **path**: `"/nebius.compute.v1alpha1.FilesystemService/ListOperationsByParent"` = `"/nebius.compute.v1alpha1.FilesystemService/ListOperationsByParent"`

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

### ~~update~~

> `readonly` **update**: `object`

#### update.path

> `readonly` **path**: `"/nebius.compute.v1alpha1.FilesystemService/Update"` = `"/nebius.compute.v1alpha1.FilesystemService/Update"`

#### update.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`UpdateFilesystemRequest`](../interfaces/UpdateFilesystemRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`UpdateFilesystemRequest`](../interfaces/UpdateFilesystemRequest.md)

#### update.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`UpdateFilesystemRequest`](../interfaces/UpdateFilesystemRequest.md)

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
