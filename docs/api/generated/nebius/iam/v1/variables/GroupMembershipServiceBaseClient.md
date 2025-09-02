[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/iam/v1](../README.md) / GroupMembershipServiceBaseClient

# Variable: GroupMembershipServiceBaseClient

> **GroupMembershipServiceBaseClient**: \{(`address`, `credentials`, `options?`): [`GroupMembershipServiceBaseClient`](../interfaces/GroupMembershipServiceBaseClient.md); `service`: `object`; `serviceName`: `string`; \}

Defined in: src/generated/nebius/iam/v1/index.ts:10809

## Type Declaration

## Parameters

### address

`string`

### credentials

`ChannelCredentials`

### options?

`Partial`\<`ClientOptions`\>

## Returns

[`GroupMembershipServiceBaseClient`](../interfaces/GroupMembershipServiceBaseClient.md)

### service

> **service**: `object`

#### service.create

> `readonly` **create**: `object`

#### service.create.path

> `readonly` **path**: `"/nebius.iam.v1.GroupMembershipService/Create"` = `"/nebius.iam.v1.GroupMembershipService/Create"`

#### service.create.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`CreateGroupMembershipRequest`](../interfaces/CreateGroupMembershipRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`CreateGroupMembershipRequest`](../interfaces/CreateGroupMembershipRequest.md)

#### service.create.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`CreateGroupMembershipRequest`](../interfaces/CreateGroupMembershipRequest.md)

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

> `readonly` **path**: `"/nebius.iam.v1.GroupMembershipService/Delete"` = `"/nebius.iam.v1.GroupMembershipService/Delete"`

#### service.delete.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`DeleteGroupMembershipRequest`](../interfaces/DeleteGroupMembershipRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`DeleteGroupMembershipRequest`](../interfaces/DeleteGroupMembershipRequest.md)

#### service.delete.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`DeleteGroupMembershipRequest`](../interfaces/DeleteGroupMembershipRequest.md)

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

> `readonly` **path**: `"/nebius.iam.v1.GroupMembershipService/Get"` = `"/nebius.iam.v1.GroupMembershipService/Get"`

#### service.get.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetGroupMembershipRequest`](../interfaces/GetGroupMembershipRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetGroupMembershipRequest`](../interfaces/GetGroupMembershipRequest.md)

#### service.get.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetGroupMembershipRequest`](../interfaces/GetGroupMembershipRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.get.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.get.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`GroupMembership`](../interfaces/GroupMembership.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GroupMembership`](../interfaces/GroupMembership.md)

#### service.get.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GroupMembership`](../interfaces/GroupMembership.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.get.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.getWithAttributes

> `readonly` **getWithAttributes**: `object`

#### service.getWithAttributes.path

> `readonly` **path**: `"/nebius.iam.v1.GroupMembershipService/GetWithAttributes"` = `"/nebius.iam.v1.GroupMembershipService/GetWithAttributes"`

#### service.getWithAttributes.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetGroupMembershipRequest`](../interfaces/GetGroupMembershipRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetGroupMembershipRequest`](../interfaces/GetGroupMembershipRequest.md)

#### service.getWithAttributes.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetGroupMembershipRequest`](../interfaces/GetGroupMembershipRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.getWithAttributes.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.getWithAttributes.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`GroupMembershipWithAttributes`](../interfaces/GroupMembershipWithAttributes.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GroupMembershipWithAttributes`](../interfaces/GroupMembershipWithAttributes.md)

#### service.getWithAttributes.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GroupMembershipWithAttributes`](../interfaces/GroupMembershipWithAttributes.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.getWithAttributes.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.listMemberOf

> `readonly` **listMemberOf**: `object`

#### service.listMemberOf.path

> `readonly` **path**: `"/nebius.iam.v1.GroupMembershipService/ListMemberOf"` = `"/nebius.iam.v1.GroupMembershipService/ListMemberOf"`

#### service.listMemberOf.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListMemberOfRequest`](../interfaces/ListMemberOfRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListMemberOfRequest`](../interfaces/ListMemberOfRequest.md)

#### service.listMemberOf.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListMemberOfRequest`](../interfaces/ListMemberOfRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.listMemberOf.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.listMemberOf.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListMemberOfResponse`](../interfaces/ListMemberOfResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListMemberOfResponse`](../interfaces/ListMemberOfResponse.md)

#### service.listMemberOf.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListMemberOfResponse`](../interfaces/ListMemberOfResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.listMemberOf.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.listMembers

> `readonly` **listMembers**: `object`

#### service.listMembers.path

> `readonly` **path**: `"/nebius.iam.v1.GroupMembershipService/ListMembers"` = `"/nebius.iam.v1.GroupMembershipService/ListMembers"`

#### service.listMembers.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListGroupMembershipsRequest`](../interfaces/ListGroupMembershipsRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListGroupMembershipsRequest`](../interfaces/ListGroupMembershipsRequest.md)

#### service.listMembers.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListGroupMembershipsRequest`](../interfaces/ListGroupMembershipsRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.listMembers.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.listMembers.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListGroupMembershipsResponse`](../interfaces/ListGroupMembershipsResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListGroupMembershipsResponse`](../interfaces/ListGroupMembershipsResponse.md)

#### service.listMembers.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListGroupMembershipsResponse`](../interfaces/ListGroupMembershipsResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.listMembers.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.listMembersWithAttributes

> `readonly` **listMembersWithAttributes**: `object`

#### service.listMembersWithAttributes.path

> `readonly` **path**: `"/nebius.iam.v1.GroupMembershipService/ListMembersWithAttributes"` = `"/nebius.iam.v1.GroupMembershipService/ListMembersWithAttributes"`

#### service.listMembersWithAttributes.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListGroupMembershipsRequest`](../interfaces/ListGroupMembershipsRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListGroupMembershipsRequest`](../interfaces/ListGroupMembershipsRequest.md)

#### service.listMembersWithAttributes.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListGroupMembershipsRequest`](../interfaces/ListGroupMembershipsRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.listMembersWithAttributes.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.listMembersWithAttributes.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListGroupMembershipsWithAttributesResponse`](../interfaces/ListGroupMembershipsWithAttributesResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListGroupMembershipsWithAttributesResponse`](../interfaces/ListGroupMembershipsWithAttributesResponse.md)

#### service.listMembersWithAttributes.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListGroupMembershipsWithAttributesResponse`](../interfaces/ListGroupMembershipsWithAttributesResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.listMembersWithAttributes.responseStream

> `readonly` **responseStream**: `false` = `false`

### serviceName

> **serviceName**: `string`
