[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/iam/v1](../README.md) / AccessKeyServiceServiceDescription

# ~~Variable: AccessKeyServiceServiceDescription~~

> **AccessKeyServiceServiceDescription**: `object`

Defined in: src/api/nebius/iam/v1/index.ts:1425

## Type Declaration

### ~~activate~~

> `readonly` **activate**: `object`

#### activate.path

> `readonly` **path**: `"/nebius.iam.v1.AccessKeyService/Activate"` = `"/nebius.iam.v1.AccessKeyService/Activate"`

#### activate.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ActivateAccessKeyRequest`](../interfaces/ActivateAccessKeyRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ActivateAccessKeyRequest`](../interfaces/ActivateAccessKeyRequest.md)

#### activate.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ActivateAccessKeyRequest`](../interfaces/ActivateAccessKeyRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### activate.requestStream

> `readonly` **requestStream**: `false` = `false`

#### activate.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../common/v1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../common/v1/interfaces/Operation.md)

#### activate.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../common/v1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### activate.responseStream

> `readonly` **responseStream**: `false` = `false`

### ~~create~~

> `readonly` **create**: `object`

#### create.path

> `readonly` **path**: `"/nebius.iam.v1.AccessKeyService/Create"` = `"/nebius.iam.v1.AccessKeyService/Create"`

#### create.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`CreateAccessKeyRequest`](../interfaces/CreateAccessKeyRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`CreateAccessKeyRequest`](../interfaces/CreateAccessKeyRequest.md)

#### create.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`CreateAccessKeyRequest`](../interfaces/CreateAccessKeyRequest.md)

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

### ~~deactivate~~

> `readonly` **deactivate**: `object`

#### deactivate.path

> `readonly` **path**: `"/nebius.iam.v1.AccessKeyService/Deactivate"` = `"/nebius.iam.v1.AccessKeyService/Deactivate"`

#### deactivate.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`DeactivateAccessKeyRequest`](../interfaces/DeactivateAccessKeyRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`DeactivateAccessKeyRequest`](../interfaces/DeactivateAccessKeyRequest.md)

#### deactivate.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`DeactivateAccessKeyRequest`](../interfaces/DeactivateAccessKeyRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### deactivate.requestStream

> `readonly` **requestStream**: `false` = `false`

#### deactivate.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../common/v1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../common/v1/interfaces/Operation.md)

#### deactivate.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../common/v1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### deactivate.responseStream

> `readonly` **responseStream**: `false` = `false`

### ~~delete~~

> `readonly` **delete**: `object`

#### delete.path

> `readonly` **path**: `"/nebius.iam.v1.AccessKeyService/Delete"` = `"/nebius.iam.v1.AccessKeyService/Delete"`

#### delete.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`DeleteAccessKeyRequest`](../interfaces/DeleteAccessKeyRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`DeleteAccessKeyRequest`](../interfaces/DeleteAccessKeyRequest.md)

#### delete.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`DeleteAccessKeyRequest`](../interfaces/DeleteAccessKeyRequest.md)

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

### ~~getByAwsId~~

> `readonly` **getByAwsId**: `object`

#### getByAwsId.path

> `readonly` **path**: `"/nebius.iam.v1.AccessKeyService/GetByAwsId"` = `"/nebius.iam.v1.AccessKeyService/GetByAwsId"`

#### getByAwsId.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetAccessKeyByAwsIdRequest`](../interfaces/GetAccessKeyByAwsIdRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetAccessKeyByAwsIdRequest`](../interfaces/GetAccessKeyByAwsIdRequest.md)

#### getByAwsId.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetAccessKeyByAwsIdRequest`](../interfaces/GetAccessKeyByAwsIdRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### getByAwsId.requestStream

> `readonly` **requestStream**: `false` = `false`

#### getByAwsId.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`AccessKey`](../interfaces/AccessKey.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`AccessKey`](../interfaces/AccessKey.md)

#### getByAwsId.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`AccessKey`](../interfaces/AccessKey.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### getByAwsId.responseStream

> `readonly` **responseStream**: `false` = `false`

### ~~getById~~

> `readonly` **getById**: `object`

#### getById.path

> `readonly` **path**: `"/nebius.iam.v1.AccessKeyService/GetById"` = `"/nebius.iam.v1.AccessKeyService/GetById"`

#### getById.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetAccessKeyByIdRequest`](../interfaces/GetAccessKeyByIdRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetAccessKeyByIdRequest`](../interfaces/GetAccessKeyByIdRequest.md)

#### getById.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetAccessKeyByIdRequest`](../interfaces/GetAccessKeyByIdRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### getById.requestStream

> `readonly` **requestStream**: `false` = `false`

#### getById.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`AccessKey`](../interfaces/AccessKey.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`AccessKey`](../interfaces/AccessKey.md)

#### getById.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`AccessKey`](../interfaces/AccessKey.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### getById.responseStream

> `readonly` **responseStream**: `false` = `false`

### ~~getSecretOnce~~

> `readonly` **getSecretOnce**: `object`

#### getSecretOnce.path

> `readonly` **path**: `"/nebius.iam.v1.AccessKeyService/GetSecretOnce"` = `"/nebius.iam.v1.AccessKeyService/GetSecretOnce"`

#### getSecretOnce.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetAccessKeySecretOnceRequest`](../interfaces/GetAccessKeySecretOnceRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetAccessKeySecretOnceRequest`](../interfaces/GetAccessKeySecretOnceRequest.md)

#### getSecretOnce.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetAccessKeySecretOnceRequest`](../interfaces/GetAccessKeySecretOnceRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### getSecretOnce.requestStream

> `readonly` **requestStream**: `false` = `false`

#### getSecretOnce.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`GetAccessKeySecretOnceResponse`](../interfaces/GetAccessKeySecretOnceResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetAccessKeySecretOnceResponse`](../interfaces/GetAccessKeySecretOnceResponse.md)

#### getSecretOnce.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetAccessKeySecretOnceResponse`](../interfaces/GetAccessKeySecretOnceResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### getSecretOnce.responseStream

> `readonly` **responseStream**: `false` = `false`

### ~~list~~

> `readonly` **list**: `object`

#### list.path

> `readonly` **path**: `"/nebius.iam.v1.AccessKeyService/List"` = `"/nebius.iam.v1.AccessKeyService/List"`

#### list.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListAccessKeysRequest`](../interfaces/ListAccessKeysRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListAccessKeysRequest`](../interfaces/ListAccessKeysRequest.md)

#### list.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListAccessKeysRequest`](../interfaces/ListAccessKeysRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### list.requestStream

> `readonly` **requestStream**: `false` = `false`

#### list.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListAccessKeysResponse`](../interfaces/ListAccessKeysResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListAccessKeysResponse`](../interfaces/ListAccessKeysResponse.md)

#### list.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListAccessKeysResponse`](../interfaces/ListAccessKeysResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### list.responseStream

> `readonly` **responseStream**: `false` = `false`

### ~~listByAccount~~

> `readonly` **listByAccount**: `object`

#### listByAccount.path

> `readonly` **path**: `"/nebius.iam.v1.AccessKeyService/ListByAccount"` = `"/nebius.iam.v1.AccessKeyService/ListByAccount"`

#### listByAccount.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListAccessKeysByAccountRequest`](../interfaces/ListAccessKeysByAccountRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListAccessKeysByAccountRequest`](../interfaces/ListAccessKeysByAccountRequest.md)

#### listByAccount.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListAccessKeysByAccountRequest`](../interfaces/ListAccessKeysByAccountRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### listByAccount.requestStream

> `readonly` **requestStream**: `false` = `false`

#### listByAccount.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListAccessKeysResponse`](../interfaces/ListAccessKeysResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListAccessKeysResponse`](../interfaces/ListAccessKeysResponse.md)

#### listByAccount.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListAccessKeysResponse`](../interfaces/ListAccessKeysResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### listByAccount.responseStream

> `readonly` **responseStream**: `false` = `false`

### ~~update~~

> `readonly` **update**: `object`

#### update.path

> `readonly` **path**: `"/nebius.iam.v1.AccessKeyService/Update"` = `"/nebius.iam.v1.AccessKeyService/Update"`

#### update.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`UpdateAccessKeyRequest`](../interfaces/UpdateAccessKeyRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`UpdateAccessKeyRequest`](../interfaces/UpdateAccessKeyRequest.md)

#### update.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`UpdateAccessKeyRequest`](../interfaces/UpdateAccessKeyRequest.md)

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

## Deprecated

Deprecated, will be removed on 2026-09-01: Access keys API v1 is deprecated, use the v2 version instead. Keys produced by API v1 are available using v2..
