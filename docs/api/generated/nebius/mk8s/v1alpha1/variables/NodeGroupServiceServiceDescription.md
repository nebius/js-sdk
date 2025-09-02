[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/mk8s/v1alpha1](../README.md) / NodeGroupServiceServiceDescription

# Variable: NodeGroupServiceServiceDescription

> **NodeGroupServiceServiceDescription**: `object`

Defined in: src/generated/nebius/mk8s/v1alpha1/index.ts:3860

## Type Declaration

### create

> `readonly` **create**: `object`

#### create.path

> `readonly` **path**: `"/nebius.mk8s.v1alpha1.NodeGroupService/Create"` = `"/nebius.mk8s.v1alpha1.NodeGroupService/Create"`

#### create.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`CreateNodeGroupRequest`](../interfaces/CreateNodeGroupRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`CreateNodeGroupRequest`](../interfaces/CreateNodeGroupRequest.md)

#### create.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`CreateNodeGroupRequest`](../interfaces/CreateNodeGroupRequest.md)

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

### delete

> `readonly` **delete**: `object`

#### delete.path

> `readonly` **path**: `"/nebius.mk8s.v1alpha1.NodeGroupService/Delete"` = `"/nebius.mk8s.v1alpha1.NodeGroupService/Delete"`

#### delete.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`DeleteNodeGroupRequest`](../interfaces/DeleteNodeGroupRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`DeleteNodeGroupRequest`](../interfaces/DeleteNodeGroupRequest.md)

#### delete.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`DeleteNodeGroupRequest`](../interfaces/DeleteNodeGroupRequest.md)

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

### get

> `readonly` **get**: `object`

#### get.path

> `readonly` **path**: `"/nebius.mk8s.v1alpha1.NodeGroupService/Get"` = `"/nebius.mk8s.v1alpha1.NodeGroupService/Get"`

#### get.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetNodeGroupRequest`](../interfaces/GetNodeGroupRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetNodeGroupRequest`](../interfaces/GetNodeGroupRequest.md)

#### get.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetNodeGroupRequest`](../interfaces/GetNodeGroupRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### get.requestStream

> `readonly` **requestStream**: `false` = `false`

#### get.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`NodeGroup`](../interfaces/NodeGroup.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`NodeGroup`](../interfaces/NodeGroup.md)

#### get.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`NodeGroup`](../interfaces/NodeGroup.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### get.responseStream

> `readonly` **responseStream**: `false` = `false`

### getByName

> `readonly` **getByName**: `object`

#### getByName.path

> `readonly` **path**: `"/nebius.mk8s.v1alpha1.NodeGroupService/GetByName"` = `"/nebius.mk8s.v1alpha1.NodeGroupService/GetByName"`

#### getByName.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetNodeGroupByNameRequest`](../interfaces/GetNodeGroupByNameRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetNodeGroupByNameRequest`](../interfaces/GetNodeGroupByNameRequest.md)

#### getByName.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetNodeGroupByNameRequest`](../interfaces/GetNodeGroupByNameRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### getByName.requestStream

> `readonly` **requestStream**: `false` = `false`

#### getByName.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`NodeGroup`](../interfaces/NodeGroup.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`NodeGroup`](../interfaces/NodeGroup.md)

#### getByName.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`NodeGroup`](../interfaces/NodeGroup.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### getByName.responseStream

> `readonly` **responseStream**: `false` = `false`

### list

> `readonly` **list**: `object`

#### list.path

> `readonly` **path**: `"/nebius.mk8s.v1alpha1.NodeGroupService/List"` = `"/nebius.mk8s.v1alpha1.NodeGroupService/List"`

#### list.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListNodeGroupsRequest`](../interfaces/ListNodeGroupsRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListNodeGroupsRequest`](../interfaces/ListNodeGroupsRequest.md)

#### list.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListNodeGroupsRequest`](../interfaces/ListNodeGroupsRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### list.requestStream

> `readonly` **requestStream**: `false` = `false`

#### list.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListNodeGroupsResponse`](../interfaces/ListNodeGroupsResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListNodeGroupsResponse`](../interfaces/ListNodeGroupsResponse.md)

#### list.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListNodeGroupsResponse`](../interfaces/ListNodeGroupsResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### list.responseStream

> `readonly` **responseStream**: `false` = `false`

### update

> `readonly` **update**: `object`

#### update.path

> `readonly` **path**: `"/nebius.mk8s.v1alpha1.NodeGroupService/Update"` = `"/nebius.mk8s.v1alpha1.NodeGroupService/Update"`

#### update.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`UpdateNodeGroupRequest`](../interfaces/UpdateNodeGroupRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`UpdateNodeGroupRequest`](../interfaces/UpdateNodeGroupRequest.md)

#### update.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`UpdateNodeGroupRequest`](../interfaces/UpdateNodeGroupRequest.md)

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

### upgrade

> `readonly` **upgrade**: `object`

#### upgrade.path

> `readonly` **path**: `"/nebius.mk8s.v1alpha1.NodeGroupService/Upgrade"` = `"/nebius.mk8s.v1alpha1.NodeGroupService/Upgrade"`

#### upgrade.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`UpgradeNodeGroupRequest`](../interfaces/UpgradeNodeGroupRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`UpgradeNodeGroupRequest`](../interfaces/UpgradeNodeGroupRequest.md)

#### upgrade.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`UpgradeNodeGroupRequest`](../interfaces/UpgradeNodeGroupRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### upgrade.requestStream

> `readonly` **requestStream**: `false` = `false`

#### upgrade.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../common/v1alpha1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../common/v1alpha1/interfaces/Operation.md)

#### upgrade.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../common/v1alpha1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### upgrade.responseStream

> `readonly` **responseStream**: `false` = `false`
