[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/iam/v1](../README.md) / ServiceAccountServiceBaseClient

# Variable: ServiceAccountServiceBaseClient

> **ServiceAccountServiceBaseClient**: \{(`address`, `credentials`, `options?`): [`ServiceAccountServiceBaseClient`](../interfaces/ServiceAccountServiceBaseClient.md); `service`: `object`; `serviceName`: `string`; \}

Defined in: src/generated/nebius/iam/v1/index.ts:16879

## Type Declaration

## Parameters

### address

`string`

### credentials

`ChannelCredentials`

### options?

`Partial`\<`ClientOptions`\>

## Returns

[`ServiceAccountServiceBaseClient`](../interfaces/ServiceAccountServiceBaseClient.md)

### service

> **service**: `object`

#### service.create

> `readonly` **create**: `object`

#### service.create.path

> `readonly` **path**: `"/nebius.iam.v1.ServiceAccountService/Create"` = `"/nebius.iam.v1.ServiceAccountService/Create"`

#### service.create.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`CreateServiceAccountRequest`](../interfaces/CreateServiceAccountRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`CreateServiceAccountRequest`](../interfaces/CreateServiceAccountRequest.md)

#### service.create.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`CreateServiceAccountRequest`](../interfaces/CreateServiceAccountRequest.md)

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

> `readonly` **path**: `"/nebius.iam.v1.ServiceAccountService/Delete"` = `"/nebius.iam.v1.ServiceAccountService/Delete"`

#### service.delete.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`DeleteServiceAccountRequest`](../interfaces/DeleteServiceAccountRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`DeleteServiceAccountRequest`](../interfaces/DeleteServiceAccountRequest.md)

#### service.delete.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`DeleteServiceAccountRequest`](../interfaces/DeleteServiceAccountRequest.md)

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

> `readonly` **path**: `"/nebius.iam.v1.ServiceAccountService/Get"` = `"/nebius.iam.v1.ServiceAccountService/Get"`

#### service.get.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetServiceAccountRequest`](../interfaces/GetServiceAccountRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetServiceAccountRequest`](../interfaces/GetServiceAccountRequest.md)

#### service.get.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetServiceAccountRequest`](../interfaces/GetServiceAccountRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.get.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.get.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ServiceAccount`](../interfaces/ServiceAccount.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ServiceAccount`](../interfaces/ServiceAccount.md)

#### service.get.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ServiceAccount`](../interfaces/ServiceAccount.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.get.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.getByName

> `readonly` **getByName**: `object`

#### service.getByName.path

> `readonly` **path**: `"/nebius.iam.v1.ServiceAccountService/GetByName"` = `"/nebius.iam.v1.ServiceAccountService/GetByName"`

#### service.getByName.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetServiceAccountByNameRequest`](../interfaces/GetServiceAccountByNameRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetServiceAccountByNameRequest`](../interfaces/GetServiceAccountByNameRequest.md)

#### service.getByName.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetServiceAccountByNameRequest`](../interfaces/GetServiceAccountByNameRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.getByName.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.getByName.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ServiceAccount`](../interfaces/ServiceAccount.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ServiceAccount`](../interfaces/ServiceAccount.md)

#### service.getByName.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ServiceAccount`](../interfaces/ServiceAccount.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.getByName.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.list

> `readonly` **list**: `object`

#### service.list.path

> `readonly` **path**: `"/nebius.iam.v1.ServiceAccountService/List"` = `"/nebius.iam.v1.ServiceAccountService/List"`

#### service.list.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListServiceAccountRequest`](../interfaces/ListServiceAccountRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListServiceAccountRequest`](../interfaces/ListServiceAccountRequest.md)

#### service.list.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListServiceAccountRequest`](../interfaces/ListServiceAccountRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.list.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.list.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListServiceAccountResponse`](../interfaces/ListServiceAccountResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListServiceAccountResponse`](../interfaces/ListServiceAccountResponse.md)

#### service.list.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListServiceAccountResponse`](../interfaces/ListServiceAccountResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.list.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.update

> `readonly` **update**: `object`

#### service.update.path

> `readonly` **path**: `"/nebius.iam.v1.ServiceAccountService/Update"` = `"/nebius.iam.v1.ServiceAccountService/Update"`

#### service.update.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`UpdateServiceAccountRequest`](../interfaces/UpdateServiceAccountRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`UpdateServiceAccountRequest`](../interfaces/UpdateServiceAccountRequest.md)

#### service.update.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`UpdateServiceAccountRequest`](../interfaces/UpdateServiceAccountRequest.md)

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
