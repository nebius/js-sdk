[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/iam/v1](../README.md) / InvitationServiceBaseClient

# Variable: InvitationServiceBaseClient

> **InvitationServiceBaseClient**: \{(`address`, `credentials`, `options?`): [`InvitationServiceBaseClient`](../interfaces/InvitationServiceBaseClient.md); `service`: `object`; `serviceName`: `string`; \}

Defined in: src/generated/nebius/iam/v1/index.ts:13808

## Type Declaration

## Parameters

### address

`string`

### credentials

`ChannelCredentials`

### options?

`Partial`\<`ClientOptions`\>

## Returns

[`InvitationServiceBaseClient`](../interfaces/InvitationServiceBaseClient.md)

### service

> **service**: `object`

#### service.create

> `readonly` **create**: `object`

#### service.create.path

> `readonly` **path**: `"/nebius.iam.v1.InvitationService/Create"` = `"/nebius.iam.v1.InvitationService/Create"`

#### service.create.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`CreateInvitationRequest`](../interfaces/CreateInvitationRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`CreateInvitationRequest`](../interfaces/CreateInvitationRequest.md)

#### service.create.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`CreateInvitationRequest`](../interfaces/CreateInvitationRequest.md)

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

> `readonly` **path**: `"/nebius.iam.v1.InvitationService/Delete"` = `"/nebius.iam.v1.InvitationService/Delete"`

#### service.delete.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`DeleteInvitationRequest`](../interfaces/DeleteInvitationRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`DeleteInvitationRequest`](../interfaces/DeleteInvitationRequest.md)

#### service.delete.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`DeleteInvitationRequest`](../interfaces/DeleteInvitationRequest.md)

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

> `readonly` **path**: `"/nebius.iam.v1.InvitationService/Get"` = `"/nebius.iam.v1.InvitationService/Get"`

#### service.get.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetInvitationRequest`](../interfaces/GetInvitationRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetInvitationRequest`](../interfaces/GetInvitationRequest.md)

#### service.get.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetInvitationRequest`](../interfaces/GetInvitationRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.get.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.get.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Invitation`](../interfaces/Invitation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Invitation`](../interfaces/Invitation.md)

#### service.get.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Invitation`](../interfaces/Invitation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.get.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.list

> `readonly` **list**: `object`

#### service.list.path

> `readonly` **path**: `"/nebius.iam.v1.InvitationService/List"` = `"/nebius.iam.v1.InvitationService/List"`

#### service.list.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListInvitationsRequest`](../interfaces/ListInvitationsRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListInvitationsRequest`](../interfaces/ListInvitationsRequest.md)

#### service.list.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListInvitationsRequest`](../interfaces/ListInvitationsRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.list.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.list.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListInvitationsResponse`](../interfaces/ListInvitationsResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListInvitationsResponse`](../interfaces/ListInvitationsResponse.md)

#### service.list.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListInvitationsResponse`](../interfaces/ListInvitationsResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.list.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.resend

> `readonly` **resend**: `object`

#### service.resend.path

> `readonly` **path**: `"/nebius.iam.v1.InvitationService/Resend"` = `"/nebius.iam.v1.InvitationService/Resend"`

#### service.resend.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ResendInvitationRequest`](../interfaces/ResendInvitationRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ResendInvitationRequest`](../interfaces/ResendInvitationRequest.md)

#### service.resend.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ResendInvitationRequest`](../interfaces/ResendInvitationRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.resend.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.resend.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../common/v1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../common/v1/interfaces/Operation.md)

#### service.resend.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../common/v1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.resend.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.update

> `readonly` **update**: `object`

#### service.update.path

> `readonly` **path**: `"/nebius.iam.v1.InvitationService/Update"` = `"/nebius.iam.v1.InvitationService/Update"`

#### service.update.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`UpdateInvitationRequest`](../interfaces/UpdateInvitationRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`UpdateInvitationRequest`](../interfaces/UpdateInvitationRequest.md)

#### service.update.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`UpdateInvitationRequest`](../interfaces/UpdateInvitationRequest.md)

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

### serviceName

> **serviceName**: `string`
