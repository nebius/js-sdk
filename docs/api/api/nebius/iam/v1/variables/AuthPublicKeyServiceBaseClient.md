[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/iam/v1](../README.md) / AuthPublicKeyServiceBaseClient

# Variable: AuthPublicKeyServiceBaseClient

> **AuthPublicKeyServiceBaseClient**: \{(`address`, `credentials`, `options?`): [`AuthPublicKeyServiceBaseClient`](../interfaces/AuthPublicKeyServiceBaseClient.md); `service`: `object`; `serviceName`: `string`; \}

Defined in: src/api/nebius/iam/v1/index.ts:4770

## Type Declaration

## Parameters

### address

`string`

### credentials

`ChannelCredentials`

### options?

`Partial`\<`ClientOptions`\>

## Returns

[`AuthPublicKeyServiceBaseClient`](../interfaces/AuthPublicKeyServiceBaseClient.md)

### service

> **service**: `object`

#### service.activate

> `readonly` **activate**: `object`

#### service.activate.path

> `readonly` **path**: `"/nebius.iam.v1.AuthPublicKeyService/Activate"` = `"/nebius.iam.v1.AuthPublicKeyService/Activate"`

#### service.activate.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ActivateAuthPublicKeyRequest`](../interfaces/ActivateAuthPublicKeyRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ActivateAuthPublicKeyRequest`](../interfaces/ActivateAuthPublicKeyRequest.md)

#### service.activate.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ActivateAuthPublicKeyRequest`](../interfaces/ActivateAuthPublicKeyRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.activate.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.activate.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../common/v1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../common/v1/interfaces/Operation.md)

#### service.activate.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../common/v1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.activate.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.create

> `readonly` **create**: `object`

#### service.create.path

> `readonly` **path**: `"/nebius.iam.v1.AuthPublicKeyService/Create"` = `"/nebius.iam.v1.AuthPublicKeyService/Create"`

#### service.create.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`CreateAuthPublicKeyRequest`](../interfaces/CreateAuthPublicKeyRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`CreateAuthPublicKeyRequest`](../interfaces/CreateAuthPublicKeyRequest.md)

#### service.create.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`CreateAuthPublicKeyRequest`](../interfaces/CreateAuthPublicKeyRequest.md)

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

#### service.deactivate

> `readonly` **deactivate**: `object`

#### service.deactivate.path

> `readonly` **path**: `"/nebius.iam.v1.AuthPublicKeyService/Deactivate"` = `"/nebius.iam.v1.AuthPublicKeyService/Deactivate"`

#### service.deactivate.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`DeactivateAuthPublicKeyRequest`](../interfaces/DeactivateAuthPublicKeyRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`DeactivateAuthPublicKeyRequest`](../interfaces/DeactivateAuthPublicKeyRequest.md)

#### service.deactivate.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`DeactivateAuthPublicKeyRequest`](../interfaces/DeactivateAuthPublicKeyRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.deactivate.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.deactivate.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../common/v1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../common/v1/interfaces/Operation.md)

#### service.deactivate.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../common/v1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.deactivate.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.delete

> `readonly` **delete**: `object`

#### service.delete.path

> `readonly` **path**: `"/nebius.iam.v1.AuthPublicKeyService/Delete"` = `"/nebius.iam.v1.AuthPublicKeyService/Delete"`

#### service.delete.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`DeleteAuthPublicKeyRequest`](../interfaces/DeleteAuthPublicKeyRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`DeleteAuthPublicKeyRequest`](../interfaces/DeleteAuthPublicKeyRequest.md)

#### service.delete.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`DeleteAuthPublicKeyRequest`](../interfaces/DeleteAuthPublicKeyRequest.md)

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

> `readonly` **path**: `"/nebius.iam.v1.AuthPublicKeyService/Get"` = `"/nebius.iam.v1.AuthPublicKeyService/Get"`

#### service.get.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetAuthPublicKeyRequest`](../interfaces/GetAuthPublicKeyRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetAuthPublicKeyRequest`](../interfaces/GetAuthPublicKeyRequest.md)

#### service.get.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetAuthPublicKeyRequest`](../interfaces/GetAuthPublicKeyRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.get.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.get.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`AuthPublicKey`](../interfaces/AuthPublicKey.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`AuthPublicKey`](../interfaces/AuthPublicKey.md)

#### service.get.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`AuthPublicKey`](../interfaces/AuthPublicKey.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.get.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.list

> `readonly` **list**: `object`

#### service.list.path

> `readonly` **path**: `"/nebius.iam.v1.AuthPublicKeyService/List"` = `"/nebius.iam.v1.AuthPublicKeyService/List"`

#### service.list.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListAuthPublicKeyRequest`](../interfaces/ListAuthPublicKeyRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListAuthPublicKeyRequest`](../interfaces/ListAuthPublicKeyRequest.md)

#### service.list.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListAuthPublicKeyRequest`](../interfaces/ListAuthPublicKeyRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.list.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.list.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListAuthPublicKeyResponse`](../interfaces/ListAuthPublicKeyResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListAuthPublicKeyResponse`](../interfaces/ListAuthPublicKeyResponse.md)

#### service.list.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListAuthPublicKeyResponse`](../interfaces/ListAuthPublicKeyResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.list.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.listByAccount

> `readonly` **listByAccount**: `object`

#### service.listByAccount.path

> `readonly` **path**: `"/nebius.iam.v1.AuthPublicKeyService/ListByAccount"` = `"/nebius.iam.v1.AuthPublicKeyService/ListByAccount"`

#### service.listByAccount.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListAuthPublicKeyByAccountRequest`](../interfaces/ListAuthPublicKeyByAccountRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListAuthPublicKeyByAccountRequest`](../interfaces/ListAuthPublicKeyByAccountRequest.md)

#### service.listByAccount.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListAuthPublicKeyByAccountRequest`](../interfaces/ListAuthPublicKeyByAccountRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.listByAccount.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.listByAccount.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListAuthPublicKeyResponse`](../interfaces/ListAuthPublicKeyResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListAuthPublicKeyResponse`](../interfaces/ListAuthPublicKeyResponse.md)

#### service.listByAccount.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListAuthPublicKeyResponse`](../interfaces/ListAuthPublicKeyResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.listByAccount.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.update

> `readonly` **update**: `object`

#### service.update.path

> `readonly` **path**: `"/nebius.iam.v1.AuthPublicKeyService/Update"` = `"/nebius.iam.v1.AuthPublicKeyService/Update"`

#### service.update.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`UpdateAuthPublicKeyRequest`](../interfaces/UpdateAuthPublicKeyRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`UpdateAuthPublicKeyRequest`](../interfaces/UpdateAuthPublicKeyRequest.md)

#### service.update.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`UpdateAuthPublicKeyRequest`](../interfaces/UpdateAuthPublicKeyRequest.md)

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
