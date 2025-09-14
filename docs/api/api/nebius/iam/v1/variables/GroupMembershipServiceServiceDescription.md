[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/iam/v1](../README.md) / GroupMembershipServiceServiceDescription

# Variable: GroupMembershipServiceServiceDescription

> **GroupMembershipServiceServiceDescription**: `object`

Defined in: src/api/nebius/iam/v1/index.ts:10730

## Type Declaration

### create

> `readonly` **create**: `object`

#### create.path

> `readonly` **path**: `"/nebius.iam.v1.GroupMembershipService/Create"` = `"/nebius.iam.v1.GroupMembershipService/Create"`

#### create.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`CreateGroupMembershipRequest`](../interfaces/CreateGroupMembershipRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`CreateGroupMembershipRequest`](../interfaces/CreateGroupMembershipRequest.md)

#### create.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`CreateGroupMembershipRequest`](../interfaces/CreateGroupMembershipRequest.md)

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

> `readonly` **path**: `"/nebius.iam.v1.GroupMembershipService/Delete"` = `"/nebius.iam.v1.GroupMembershipService/Delete"`

#### delete.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`DeleteGroupMembershipRequest`](../interfaces/DeleteGroupMembershipRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`DeleteGroupMembershipRequest`](../interfaces/DeleteGroupMembershipRequest.md)

#### delete.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`DeleteGroupMembershipRequest`](../interfaces/DeleteGroupMembershipRequest.md)

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

> `readonly` **path**: `"/nebius.iam.v1.GroupMembershipService/Get"` = `"/nebius.iam.v1.GroupMembershipService/Get"`

#### get.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetGroupMembershipRequest`](../interfaces/GetGroupMembershipRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetGroupMembershipRequest`](../interfaces/GetGroupMembershipRequest.md)

#### get.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetGroupMembershipRequest`](../interfaces/GetGroupMembershipRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### get.requestStream

> `readonly` **requestStream**: `false` = `false`

#### get.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`GroupMembership`](../interfaces/GroupMembership.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GroupMembership`](../interfaces/GroupMembership.md)

#### get.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GroupMembership`](../interfaces/GroupMembership.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### get.responseStream

> `readonly` **responseStream**: `false` = `false`

### getWithAttributes

> `readonly` **getWithAttributes**: `object`

#### getWithAttributes.path

> `readonly` **path**: `"/nebius.iam.v1.GroupMembershipService/GetWithAttributes"` = `"/nebius.iam.v1.GroupMembershipService/GetWithAttributes"`

#### getWithAttributes.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetGroupMembershipRequest`](../interfaces/GetGroupMembershipRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetGroupMembershipRequest`](../interfaces/GetGroupMembershipRequest.md)

#### getWithAttributes.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetGroupMembershipRequest`](../interfaces/GetGroupMembershipRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### getWithAttributes.requestStream

> `readonly` **requestStream**: `false` = `false`

#### getWithAttributes.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`GroupMembershipWithAttributes`](../interfaces/GroupMembershipWithAttributes.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GroupMembershipWithAttributes`](../interfaces/GroupMembershipWithAttributes.md)

#### getWithAttributes.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GroupMembershipWithAttributes`](../interfaces/GroupMembershipWithAttributes.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### getWithAttributes.responseStream

> `readonly` **responseStream**: `false` = `false`

### listMemberOf

> `readonly` **listMemberOf**: `object`

#### listMemberOf.path

> `readonly` **path**: `"/nebius.iam.v1.GroupMembershipService/ListMemberOf"` = `"/nebius.iam.v1.GroupMembershipService/ListMemberOf"`

#### listMemberOf.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListMemberOfRequest`](../interfaces/ListMemberOfRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListMemberOfRequest`](../interfaces/ListMemberOfRequest.md)

#### listMemberOf.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListMemberOfRequest`](../interfaces/ListMemberOfRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### listMemberOf.requestStream

> `readonly` **requestStream**: `false` = `false`

#### listMemberOf.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListMemberOfResponse`](../interfaces/ListMemberOfResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListMemberOfResponse`](../interfaces/ListMemberOfResponse.md)

#### listMemberOf.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListMemberOfResponse`](../interfaces/ListMemberOfResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### listMemberOf.responseStream

> `readonly` **responseStream**: `false` = `false`

### listMembers

> `readonly` **listMembers**: `object`

#### listMembers.path

> `readonly` **path**: `"/nebius.iam.v1.GroupMembershipService/ListMembers"` = `"/nebius.iam.v1.GroupMembershipService/ListMembers"`

#### listMembers.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListGroupMembershipsRequest`](../interfaces/ListGroupMembershipsRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListGroupMembershipsRequest`](../interfaces/ListGroupMembershipsRequest.md)

#### listMembers.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListGroupMembershipsRequest`](../interfaces/ListGroupMembershipsRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### listMembers.requestStream

> `readonly` **requestStream**: `false` = `false`

#### listMembers.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListGroupMembershipsResponse`](../interfaces/ListGroupMembershipsResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListGroupMembershipsResponse`](../interfaces/ListGroupMembershipsResponse.md)

#### listMembers.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListGroupMembershipsResponse`](../interfaces/ListGroupMembershipsResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### listMembers.responseStream

> `readonly` **responseStream**: `false` = `false`

### listMembersWithAttributes

> `readonly` **listMembersWithAttributes**: `object`

#### listMembersWithAttributes.path

> `readonly` **path**: `"/nebius.iam.v1.GroupMembershipService/ListMembersWithAttributes"` = `"/nebius.iam.v1.GroupMembershipService/ListMembersWithAttributes"`

#### listMembersWithAttributes.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListGroupMembershipsRequest`](../interfaces/ListGroupMembershipsRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListGroupMembershipsRequest`](../interfaces/ListGroupMembershipsRequest.md)

#### listMembersWithAttributes.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListGroupMembershipsRequest`](../interfaces/ListGroupMembershipsRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### listMembersWithAttributes.requestStream

> `readonly` **requestStream**: `false` = `false`

#### listMembersWithAttributes.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListGroupMembershipsWithAttributesResponse`](../interfaces/ListGroupMembershipsWithAttributesResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListGroupMembershipsWithAttributesResponse`](../interfaces/ListGroupMembershipsWithAttributesResponse.md)

#### listMembersWithAttributes.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListGroupMembershipsWithAttributesResponse`](../interfaces/ListGroupMembershipsWithAttributesResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### listMembersWithAttributes.responseStream

> `readonly` **responseStream**: `false` = `false`
