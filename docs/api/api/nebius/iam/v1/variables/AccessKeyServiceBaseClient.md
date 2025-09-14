[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/iam/v1](../README.md) / AccessKeyServiceBaseClient

# ~~Variable: AccessKeyServiceBaseClient~~

> **AccessKeyServiceBaseClient**: \{(`address`, `credentials`, `options?`): [`AccessKeyServiceBaseClient`](../interfaces/AccessKeyServiceBaseClient.md); `service`: `object`; `serviceName`: `string`; \}

Defined in: src/api/nebius/iam/v1/index.ts:1541

## Type Declaration

## Parameters

### address

`string`

### credentials

`ChannelCredentials`

### options?

`Partial`\<`ClientOptions`\>

## Returns

[`AccessKeyServiceBaseClient`](../interfaces/AccessKeyServiceBaseClient.md)

### ~~service~~

> **service**: `object`

#### service.activate

> `readonly` **activate**: `object`

#### service.activate.path

> `readonly` **path**: `"/nebius.iam.v1.AccessKeyService/Activate"` = `"/nebius.iam.v1.AccessKeyService/Activate"`

#### service.activate.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ActivateAccessKeyRequest`](../interfaces/ActivateAccessKeyRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ActivateAccessKeyRequest`](../interfaces/ActivateAccessKeyRequest.md)

#### service.activate.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ActivateAccessKeyRequest`](../interfaces/ActivateAccessKeyRequest.md)

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

> `readonly` **path**: `"/nebius.iam.v1.AccessKeyService/Create"` = `"/nebius.iam.v1.AccessKeyService/Create"`

#### service.create.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`CreateAccessKeyRequest`](../interfaces/CreateAccessKeyRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`CreateAccessKeyRequest`](../interfaces/CreateAccessKeyRequest.md)

#### service.create.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`CreateAccessKeyRequest`](../interfaces/CreateAccessKeyRequest.md)

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

> `readonly` **path**: `"/nebius.iam.v1.AccessKeyService/Deactivate"` = `"/nebius.iam.v1.AccessKeyService/Deactivate"`

#### service.deactivate.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`DeactivateAccessKeyRequest`](../interfaces/DeactivateAccessKeyRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`DeactivateAccessKeyRequest`](../interfaces/DeactivateAccessKeyRequest.md)

#### service.deactivate.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`DeactivateAccessKeyRequest`](../interfaces/DeactivateAccessKeyRequest.md)

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

> `readonly` **path**: `"/nebius.iam.v1.AccessKeyService/Delete"` = `"/nebius.iam.v1.AccessKeyService/Delete"`

#### service.delete.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`DeleteAccessKeyRequest`](../interfaces/DeleteAccessKeyRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`DeleteAccessKeyRequest`](../interfaces/DeleteAccessKeyRequest.md)

#### service.delete.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`DeleteAccessKeyRequest`](../interfaces/DeleteAccessKeyRequest.md)

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

#### service.getByAwsId

> `readonly` **getByAwsId**: `object`

#### service.getByAwsId.path

> `readonly` **path**: `"/nebius.iam.v1.AccessKeyService/GetByAwsId"` = `"/nebius.iam.v1.AccessKeyService/GetByAwsId"`

#### service.getByAwsId.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetAccessKeyByAwsIdRequest`](../interfaces/GetAccessKeyByAwsIdRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetAccessKeyByAwsIdRequest`](../interfaces/GetAccessKeyByAwsIdRequest.md)

#### service.getByAwsId.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetAccessKeyByAwsIdRequest`](../interfaces/GetAccessKeyByAwsIdRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.getByAwsId.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.getByAwsId.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`AccessKey`](../interfaces/AccessKey.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`AccessKey`](../interfaces/AccessKey.md)

#### service.getByAwsId.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`AccessKey`](../interfaces/AccessKey.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.getByAwsId.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.getById

> `readonly` **getById**: `object`

#### service.getById.path

> `readonly` **path**: `"/nebius.iam.v1.AccessKeyService/GetById"` = `"/nebius.iam.v1.AccessKeyService/GetById"`

#### service.getById.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetAccessKeyByIdRequest`](../interfaces/GetAccessKeyByIdRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetAccessKeyByIdRequest`](../interfaces/GetAccessKeyByIdRequest.md)

#### service.getById.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetAccessKeyByIdRequest`](../interfaces/GetAccessKeyByIdRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.getById.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.getById.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`AccessKey`](../interfaces/AccessKey.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`AccessKey`](../interfaces/AccessKey.md)

#### service.getById.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`AccessKey`](../interfaces/AccessKey.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.getById.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.getSecretOnce

> `readonly` **getSecretOnce**: `object`

#### service.getSecretOnce.path

> `readonly` **path**: `"/nebius.iam.v1.AccessKeyService/GetSecretOnce"` = `"/nebius.iam.v1.AccessKeyService/GetSecretOnce"`

#### service.getSecretOnce.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetAccessKeySecretOnceRequest`](../interfaces/GetAccessKeySecretOnceRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetAccessKeySecretOnceRequest`](../interfaces/GetAccessKeySecretOnceRequest.md)

#### service.getSecretOnce.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetAccessKeySecretOnceRequest`](../interfaces/GetAccessKeySecretOnceRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.getSecretOnce.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.getSecretOnce.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`GetAccessKeySecretOnceResponse`](../interfaces/GetAccessKeySecretOnceResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetAccessKeySecretOnceResponse`](../interfaces/GetAccessKeySecretOnceResponse.md)

#### service.getSecretOnce.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetAccessKeySecretOnceResponse`](../interfaces/GetAccessKeySecretOnceResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.getSecretOnce.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.list

> `readonly` **list**: `object`

#### service.list.path

> `readonly` **path**: `"/nebius.iam.v1.AccessKeyService/List"` = `"/nebius.iam.v1.AccessKeyService/List"`

#### service.list.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListAccessKeysRequest`](../interfaces/ListAccessKeysRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListAccessKeysRequest`](../interfaces/ListAccessKeysRequest.md)

#### service.list.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListAccessKeysRequest`](../interfaces/ListAccessKeysRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.list.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.list.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListAccessKeysResponse`](../interfaces/ListAccessKeysResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListAccessKeysResponse`](../interfaces/ListAccessKeysResponse.md)

#### service.list.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListAccessKeysResponse`](../interfaces/ListAccessKeysResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.list.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.listByAccount

> `readonly` **listByAccount**: `object`

#### service.listByAccount.path

> `readonly` **path**: `"/nebius.iam.v1.AccessKeyService/ListByAccount"` = `"/nebius.iam.v1.AccessKeyService/ListByAccount"`

#### service.listByAccount.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListAccessKeysByAccountRequest`](../interfaces/ListAccessKeysByAccountRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListAccessKeysByAccountRequest`](../interfaces/ListAccessKeysByAccountRequest.md)

#### service.listByAccount.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListAccessKeysByAccountRequest`](../interfaces/ListAccessKeysByAccountRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.listByAccount.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.listByAccount.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListAccessKeysResponse`](../interfaces/ListAccessKeysResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListAccessKeysResponse`](../interfaces/ListAccessKeysResponse.md)

#### service.listByAccount.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListAccessKeysResponse`](../interfaces/ListAccessKeysResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.listByAccount.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.update

> `readonly` **update**: `object`

#### service.update.path

> `readonly` **path**: `"/nebius.iam.v1.AccessKeyService/Update"` = `"/nebius.iam.v1.AccessKeyService/Update"`

#### service.update.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`UpdateAccessKeyRequest`](../interfaces/UpdateAccessKeyRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`UpdateAccessKeyRequest`](../interfaces/UpdateAccessKeyRequest.md)

#### service.update.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`UpdateAccessKeyRequest`](../interfaces/UpdateAccessKeyRequest.md)

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

### ~~serviceName~~

> **serviceName**: `string`

## Deprecated

Deprecated, will be removed on 2026-09-01: Access keys API v1 is deprecated, use the v2 version instead. Keys produced by API v1 are available using v2..
