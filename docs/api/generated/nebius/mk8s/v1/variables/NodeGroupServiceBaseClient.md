[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/mk8s/v1](../README.md) / NodeGroupServiceBaseClient

# Variable: NodeGroupServiceBaseClient

> **NodeGroupServiceBaseClient**: \{(`address`, `credentials`, `options?`): [`NodeGroupServiceBaseClient`](../interfaces/NodeGroupServiceBaseClient.md); `service`: `object`; `serviceName`: `string`; \}

Defined in: src/generated/nebius/mk8s/v1/index.ts:4020

## Type Declaration

## Parameters

### address

`string`

### credentials

`ChannelCredentials`

### options?

`Partial`\<`ClientOptions`\>

## Returns

[`NodeGroupServiceBaseClient`](../interfaces/NodeGroupServiceBaseClient.md)

### service

> **service**: `object`

#### service.create

> `readonly` **create**: `object`

#### service.create.path

> `readonly` **path**: `"/nebius.mk8s.v1.NodeGroupService/Create"` = `"/nebius.mk8s.v1.NodeGroupService/Create"`

#### service.create.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`CreateNodeGroupRequest`](../interfaces/CreateNodeGroupRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`CreateNodeGroupRequest`](../interfaces/CreateNodeGroupRequest.md)

#### service.create.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`CreateNodeGroupRequest`](../interfaces/CreateNodeGroupRequest.md)

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

> `readonly` **path**: `"/nebius.mk8s.v1.NodeGroupService/Delete"` = `"/nebius.mk8s.v1.NodeGroupService/Delete"`

#### service.delete.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`DeleteNodeGroupRequest`](../interfaces/DeleteNodeGroupRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`DeleteNodeGroupRequest`](../interfaces/DeleteNodeGroupRequest.md)

#### service.delete.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`DeleteNodeGroupRequest`](../interfaces/DeleteNodeGroupRequest.md)

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

> `readonly` **path**: `"/nebius.mk8s.v1.NodeGroupService/Get"` = `"/nebius.mk8s.v1.NodeGroupService/Get"`

#### service.get.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetNodeGroupRequest`](../interfaces/GetNodeGroupRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetNodeGroupRequest`](../interfaces/GetNodeGroupRequest.md)

#### service.get.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetNodeGroupRequest`](../interfaces/GetNodeGroupRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.get.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.get.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`NodeGroup`](../interfaces/NodeGroup.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`NodeGroup`](../interfaces/NodeGroup.md)

#### service.get.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`NodeGroup`](../interfaces/NodeGroup.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.get.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.getByName

> `readonly` **getByName**: `object`

#### service.getByName.path

> `readonly` **path**: `"/nebius.mk8s.v1.NodeGroupService/GetByName"` = `"/nebius.mk8s.v1.NodeGroupService/GetByName"`

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

> `readonly` **responseDeserialize**: (`value`) => [`NodeGroup`](../interfaces/NodeGroup.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`NodeGroup`](../interfaces/NodeGroup.md)

#### service.getByName.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`NodeGroup`](../interfaces/NodeGroup.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.getByName.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.list

> `readonly` **list**: `object`

#### service.list.path

> `readonly` **path**: `"/nebius.mk8s.v1.NodeGroupService/List"` = `"/nebius.mk8s.v1.NodeGroupService/List"`

#### service.list.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListNodeGroupsRequest`](../interfaces/ListNodeGroupsRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListNodeGroupsRequest`](../interfaces/ListNodeGroupsRequest.md)

#### service.list.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListNodeGroupsRequest`](../interfaces/ListNodeGroupsRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.list.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.list.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListNodeGroupsResponse`](../interfaces/ListNodeGroupsResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListNodeGroupsResponse`](../interfaces/ListNodeGroupsResponse.md)

#### service.list.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListNodeGroupsResponse`](../interfaces/ListNodeGroupsResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.list.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.update

> `readonly` **update**: `object`

#### service.update.path

> `readonly` **path**: `"/nebius.mk8s.v1.NodeGroupService/Update"` = `"/nebius.mk8s.v1.NodeGroupService/Update"`

#### service.update.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`UpdateNodeGroupRequest`](../interfaces/UpdateNodeGroupRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`UpdateNodeGroupRequest`](../interfaces/UpdateNodeGroupRequest.md)

#### service.update.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`UpdateNodeGroupRequest`](../interfaces/UpdateNodeGroupRequest.md)

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

#### service.upgrade

> `readonly` **upgrade**: `object`

#### service.upgrade.path

> `readonly` **path**: `"/nebius.mk8s.v1.NodeGroupService/Upgrade"` = `"/nebius.mk8s.v1.NodeGroupService/Upgrade"`

#### service.upgrade.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`UpgradeNodeGroupRequest`](../interfaces/UpgradeNodeGroupRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`UpgradeNodeGroupRequest`](../interfaces/UpgradeNodeGroupRequest.md)

#### service.upgrade.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`UpgradeNodeGroupRequest`](../interfaces/UpgradeNodeGroupRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.upgrade.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.upgrade.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../common/v1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../common/v1/interfaces/Operation.md)

#### service.upgrade.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../common/v1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.upgrade.responseStream

> `readonly` **responseStream**: `false` = `false`

### serviceName

> **serviceName**: `string`
