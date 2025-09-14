[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/iam/v1](../README.md) / GroupServiceServiceDescription

# Variable: GroupServiceServiceDescription

> **GroupServiceServiceDescription**: `object`

Defined in: src/generated/nebius/iam/v1/index.ts:12430

## Type Declaration

### create

> `readonly` **create**: `object`

#### create.path

> `readonly` **path**: `"/nebius.iam.v1.GroupService/Create"` = `"/nebius.iam.v1.GroupService/Create"`

#### create.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`CreateGroupRequest`](../interfaces/CreateGroupRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`CreateGroupRequest`](../interfaces/CreateGroupRequest.md)

#### create.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`CreateGroupRequest`](../interfaces/CreateGroupRequest.md)

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

> `readonly` **path**: `"/nebius.iam.v1.GroupService/Delete"` = `"/nebius.iam.v1.GroupService/Delete"`

#### delete.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`DeleteGroupRequest`](../interfaces/DeleteGroupRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`DeleteGroupRequest`](../interfaces/DeleteGroupRequest.md)

#### delete.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`DeleteGroupRequest`](../interfaces/DeleteGroupRequest.md)

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

> `readonly` **path**: `"/nebius.iam.v1.GroupService/Get"` = `"/nebius.iam.v1.GroupService/Get"`

#### get.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetGroupRequest`](../interfaces/GetGroupRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetGroupRequest`](../interfaces/GetGroupRequest.md)

#### get.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetGroupRequest`](../interfaces/GetGroupRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### get.requestStream

> `readonly` **requestStream**: `false` = `false`

#### get.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Group`](../interfaces/Group.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Group`](../interfaces/Group.md)

#### get.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Group`](../interfaces/Group.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### get.responseStream

> `readonly` **responseStream**: `false` = `false`

### getByName

> `readonly` **getByName**: `object`

#### getByName.path

> `readonly` **path**: `"/nebius.iam.v1.GroupService/GetByName"` = `"/nebius.iam.v1.GroupService/GetByName"`

#### getByName.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetGroupByNameRequest`](../interfaces/GetGroupByNameRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetGroupByNameRequest`](../interfaces/GetGroupByNameRequest.md)

#### getByName.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetGroupByNameRequest`](../interfaces/GetGroupByNameRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### getByName.requestStream

> `readonly` **requestStream**: `false` = `false`

#### getByName.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Group`](../interfaces/Group.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Group`](../interfaces/Group.md)

#### getByName.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Group`](../interfaces/Group.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### getByName.responseStream

> `readonly` **responseStream**: `false` = `false`

### list

> `readonly` **list**: `object`

#### list.path

> `readonly` **path**: `"/nebius.iam.v1.GroupService/List"` = `"/nebius.iam.v1.GroupService/List"`

#### list.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListGroupsRequest`](../interfaces/ListGroupsRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListGroupsRequest`](../interfaces/ListGroupsRequest.md)

#### list.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListGroupsRequest`](../interfaces/ListGroupsRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### list.requestStream

> `readonly` **requestStream**: `false` = `false`

#### list.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListGroupsResponse`](../interfaces/ListGroupsResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListGroupsResponse`](../interfaces/ListGroupsResponse.md)

#### list.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListGroupsResponse`](../interfaces/ListGroupsResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### list.responseStream

> `readonly` **responseStream**: `false` = `false`

### update

> `readonly` **update**: `object`

#### update.path

> `readonly` **path**: `"/nebius.iam.v1.GroupService/Update"` = `"/nebius.iam.v1.GroupService/Update"`

#### update.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`UpdateGroupRequest`](../interfaces/UpdateGroupRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`UpdateGroupRequest`](../interfaces/UpdateGroupRequest.md)

#### update.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`UpdateGroupRequest`](../interfaces/UpdateGroupRequest.md)

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
