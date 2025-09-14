[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/iam/v1](../README.md) / StaticKeyServiceBaseClient

# Variable: StaticKeyServiceBaseClient

> **StaticKeyServiceBaseClient**: \{(`address`, `credentials`, `options?`): [`StaticKeyServiceBaseClient`](../interfaces/StaticKeyServiceBaseClient.md); `service`: `object`; `serviceName`: `string`; \}

Defined in: src/api/nebius/iam/v1/index.ts:18898

## Type Declaration

## Parameters

### address

`string`

### credentials

`ChannelCredentials`

### options?

`Partial`\<`ClientOptions`\>

## Returns

[`StaticKeyServiceBaseClient`](../interfaces/StaticKeyServiceBaseClient.md)

### service

> **service**: `object`

#### service.delete

> `readonly` **delete**: `object`

#### service.delete.path

> `readonly` **path**: `"/nebius.iam.v1.StaticKeyService/Delete"` = `"/nebius.iam.v1.StaticKeyService/Delete"`

#### service.delete.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`DeleteStaticKeyRequest`](../interfaces/DeleteStaticKeyRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`DeleteStaticKeyRequest`](../interfaces/DeleteStaticKeyRequest.md)

#### service.delete.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`DeleteStaticKeyRequest`](../interfaces/DeleteStaticKeyRequest.md)

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

#### service.find

> `readonly` **find**: `object`

#### service.find.path

> `readonly` **path**: `"/nebius.iam.v1.StaticKeyService/Find"` = `"/nebius.iam.v1.StaticKeyService/Find"`

#### service.find.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`FindStaticKeyRequest`](../interfaces/FindStaticKeyRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`FindStaticKeyRequest`](../interfaces/FindStaticKeyRequest.md)

#### service.find.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`FindStaticKeyRequest`](../interfaces/FindStaticKeyRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.find.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.find.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`FindStaticKeyResponse`](../interfaces/FindStaticKeyResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`FindStaticKeyResponse`](../interfaces/FindStaticKeyResponse.md)

#### service.find.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`FindStaticKeyResponse`](../interfaces/FindStaticKeyResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.find.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.get

> `readonly` **get**: `object`

#### service.get.path

> `readonly` **path**: `"/nebius.iam.v1.StaticKeyService/Get"` = `"/nebius.iam.v1.StaticKeyService/Get"`

#### service.get.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetStaticKeyRequest`](../interfaces/GetStaticKeyRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetStaticKeyRequest`](../interfaces/GetStaticKeyRequest.md)

#### service.get.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetStaticKeyRequest`](../interfaces/GetStaticKeyRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.get.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.get.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`StaticKey`](../interfaces/StaticKey.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`StaticKey`](../interfaces/StaticKey.md)

#### service.get.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`StaticKey`](../interfaces/StaticKey.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.get.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.getByName

> `readonly` **getByName**: `object`

#### service.getByName.path

> `readonly` **path**: `"/nebius.iam.v1.StaticKeyService/GetByName"` = `"/nebius.iam.v1.StaticKeyService/GetByName"`

#### service.getByName.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetStaticKeyByNameRequest`](../interfaces/GetStaticKeyByNameRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetStaticKeyByNameRequest`](../interfaces/GetStaticKeyByNameRequest.md)

#### service.getByName.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetStaticKeyByNameRequest`](../interfaces/GetStaticKeyByNameRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.getByName.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.getByName.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`StaticKey`](../interfaces/StaticKey.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`StaticKey`](../interfaces/StaticKey.md)

#### service.getByName.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`StaticKey`](../interfaces/StaticKey.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.getByName.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.issue

> `readonly` **issue**: `object`

#### service.issue.path

> `readonly` **path**: `"/nebius.iam.v1.StaticKeyService/Issue"` = `"/nebius.iam.v1.StaticKeyService/Issue"`

#### service.issue.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`IssueStaticKeyRequest`](../interfaces/IssueStaticKeyRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`IssueStaticKeyRequest`](../interfaces/IssueStaticKeyRequest.md)

#### service.issue.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`IssueStaticKeyRequest`](../interfaces/IssueStaticKeyRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.issue.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.issue.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`IssueStaticKeyResponse`](../interfaces/IssueStaticKeyResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`IssueStaticKeyResponse`](../interfaces/IssueStaticKeyResponse.md)

#### service.issue.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`IssueStaticKeyResponse`](../interfaces/IssueStaticKeyResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.issue.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.list

> `readonly` **list**: `object`

#### service.list.path

> `readonly` **path**: `"/nebius.iam.v1.StaticKeyService/List"` = `"/nebius.iam.v1.StaticKeyService/List"`

#### service.list.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListStaticKeysRequest`](../interfaces/ListStaticKeysRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListStaticKeysRequest`](../interfaces/ListStaticKeysRequest.md)

#### service.list.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListStaticKeysRequest`](../interfaces/ListStaticKeysRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.list.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.list.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListStaticKeysResponse`](../interfaces/ListStaticKeysResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListStaticKeysResponse`](../interfaces/ListStaticKeysResponse.md)

#### service.list.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListStaticKeysResponse`](../interfaces/ListStaticKeysResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.list.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.revoke

> `readonly` **revoke**: `object`

#### service.revoke.path

> `readonly` **path**: `"/nebius.iam.v1.StaticKeyService/Revoke"` = `"/nebius.iam.v1.StaticKeyService/Revoke"`

#### service.revoke.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`RevokeStaticKeyRequest`](../interfaces/RevokeStaticKeyRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`RevokeStaticKeyRequest`](../interfaces/RevokeStaticKeyRequest.md)

#### service.revoke.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`RevokeStaticKeyRequest`](../interfaces/RevokeStaticKeyRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.revoke.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.revoke.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../common/v1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../common/v1/interfaces/Operation.md)

#### service.revoke.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../common/v1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.revoke.responseStream

> `readonly` **responseStream**: `false` = `false`

### serviceName

> **serviceName**: `string`
