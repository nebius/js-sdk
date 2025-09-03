[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/iam/v1](../README.md) / InvitationServiceServiceDescription

# Variable: InvitationServiceServiceDescription

> **InvitationServiceServiceDescription**: `object`

Defined in: src/generated/nebius/iam/v1/index.ts:13741

## Type Declaration

### create

> `readonly` **create**: `object`

#### create.path

> `readonly` **path**: `"/nebius.iam.v1.InvitationService/Create"` = `"/nebius.iam.v1.InvitationService/Create"`

#### create.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`CreateInvitationRequest`](../interfaces/CreateInvitationRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`CreateInvitationRequest`](../interfaces/CreateInvitationRequest.md)

#### create.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`CreateInvitationRequest`](../interfaces/CreateInvitationRequest.md)

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

> `readonly` **path**: `"/nebius.iam.v1.InvitationService/Delete"` = `"/nebius.iam.v1.InvitationService/Delete"`

#### delete.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`DeleteInvitationRequest`](../interfaces/DeleteInvitationRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`DeleteInvitationRequest`](../interfaces/DeleteInvitationRequest.md)

#### delete.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`DeleteInvitationRequest`](../interfaces/DeleteInvitationRequest.md)

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

> `readonly` **path**: `"/nebius.iam.v1.InvitationService/Get"` = `"/nebius.iam.v1.InvitationService/Get"`

#### get.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetInvitationRequest`](../interfaces/GetInvitationRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetInvitationRequest`](../interfaces/GetInvitationRequest.md)

#### get.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetInvitationRequest`](../interfaces/GetInvitationRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### get.requestStream

> `readonly` **requestStream**: `false` = `false`

#### get.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Invitation`](../interfaces/Invitation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Invitation`](../interfaces/Invitation.md)

#### get.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Invitation`](../interfaces/Invitation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### get.responseStream

> `readonly` **responseStream**: `false` = `false`

### list

> `readonly` **list**: `object`

#### list.path

> `readonly` **path**: `"/nebius.iam.v1.InvitationService/List"` = `"/nebius.iam.v1.InvitationService/List"`

#### list.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListInvitationsRequest`](../interfaces/ListInvitationsRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListInvitationsRequest`](../interfaces/ListInvitationsRequest.md)

#### list.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListInvitationsRequest`](../interfaces/ListInvitationsRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### list.requestStream

> `readonly` **requestStream**: `false` = `false`

#### list.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListInvitationsResponse`](../interfaces/ListInvitationsResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListInvitationsResponse`](../interfaces/ListInvitationsResponse.md)

#### list.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListInvitationsResponse`](../interfaces/ListInvitationsResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### list.responseStream

> `readonly` **responseStream**: `false` = `false`

### resend

> `readonly` **resend**: `object`

#### resend.path

> `readonly` **path**: `"/nebius.iam.v1.InvitationService/Resend"` = `"/nebius.iam.v1.InvitationService/Resend"`

#### resend.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ResendInvitationRequest`](../interfaces/ResendInvitationRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ResendInvitationRequest`](../interfaces/ResendInvitationRequest.md)

#### resend.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ResendInvitationRequest`](../interfaces/ResendInvitationRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### resend.requestStream

> `readonly` **requestStream**: `false` = `false`

#### resend.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../common/v1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../common/v1/interfaces/Operation.md)

#### resend.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../common/v1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### resend.responseStream

> `readonly` **responseStream**: `false` = `false`

### update

> `readonly` **update**: `object`

#### update.path

> `readonly` **path**: `"/nebius.iam.v1.InvitationService/Update"` = `"/nebius.iam.v1.InvitationService/Update"`

#### update.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`UpdateInvitationRequest`](../interfaces/UpdateInvitationRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`UpdateInvitationRequest`](../interfaces/UpdateInvitationRequest.md)

#### update.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`UpdateInvitationRequest`](../interfaces/UpdateInvitationRequest.md)

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
