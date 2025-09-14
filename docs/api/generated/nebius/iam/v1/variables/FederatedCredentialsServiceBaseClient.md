[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/iam/v1](../README.md) / FederatedCredentialsServiceBaseClient

# Variable: FederatedCredentialsServiceBaseClient

> **FederatedCredentialsServiceBaseClient**: \{(`address`, `credentials`, `options?`): [`FederatedCredentialsServiceBaseClient`](../interfaces/FederatedCredentialsServiceBaseClient.md); `service`: `object`; `serviceName`: `string`; \}

Defined in: src/generated/nebius/iam/v1/index.ts:6584

## Type Declaration

## Parameters

### address

`string`

### credentials

`ChannelCredentials`

### options?

`Partial`\<`ClientOptions`\>

## Returns

[`FederatedCredentialsServiceBaseClient`](../interfaces/FederatedCredentialsServiceBaseClient.md)

### service

> **service**: `object`

#### service.create

> `readonly` **create**: `object`

#### service.create.path

> `readonly` **path**: `"/nebius.iam.v1.FederatedCredentialsService/Create"` = `"/nebius.iam.v1.FederatedCredentialsService/Create"`

#### service.create.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`CreateFederatedCredentialsRequest`](../interfaces/CreateFederatedCredentialsRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`CreateFederatedCredentialsRequest`](../interfaces/CreateFederatedCredentialsRequest.md)

#### service.create.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`CreateFederatedCredentialsRequest`](../interfaces/CreateFederatedCredentialsRequest.md)

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

> `readonly` **path**: `"/nebius.iam.v1.FederatedCredentialsService/Delete"` = `"/nebius.iam.v1.FederatedCredentialsService/Delete"`

#### service.delete.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`DeleteFederatedCredentialsRequest`](../interfaces/DeleteFederatedCredentialsRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`DeleteFederatedCredentialsRequest`](../interfaces/DeleteFederatedCredentialsRequest.md)

#### service.delete.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`DeleteFederatedCredentialsRequest`](../interfaces/DeleteFederatedCredentialsRequest.md)

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

> `readonly` **path**: `"/nebius.iam.v1.FederatedCredentialsService/Get"` = `"/nebius.iam.v1.FederatedCredentialsService/Get"`

#### service.get.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetFederatedCredentialsRequest`](../interfaces/GetFederatedCredentialsRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetFederatedCredentialsRequest`](../interfaces/GetFederatedCredentialsRequest.md)

#### service.get.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetFederatedCredentialsRequest`](../interfaces/GetFederatedCredentialsRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.get.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.get.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`FederatedCredentials`](../interfaces/FederatedCredentials.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`FederatedCredentials`](../interfaces/FederatedCredentials.md)

#### service.get.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`FederatedCredentials`](../interfaces/FederatedCredentials.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.get.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.getByName

> `readonly` **getByName**: `object`

#### service.getByName.path

> `readonly` **path**: `"/nebius.iam.v1.FederatedCredentialsService/GetByName"` = `"/nebius.iam.v1.FederatedCredentialsService/GetByName"`

#### service.getByName.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetByNameFederatedCredentialsRequest`](../interfaces/GetByNameFederatedCredentialsRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetByNameFederatedCredentialsRequest`](../interfaces/GetByNameFederatedCredentialsRequest.md)

#### service.getByName.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetByNameFederatedCredentialsRequest`](../interfaces/GetByNameFederatedCredentialsRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.getByName.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.getByName.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`FederatedCredentials`](../interfaces/FederatedCredentials.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`FederatedCredentials`](../interfaces/FederatedCredentials.md)

#### service.getByName.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`FederatedCredentials`](../interfaces/FederatedCredentials.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.getByName.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.list

> `readonly` **list**: `object`

#### service.list.path

> `readonly` **path**: `"/nebius.iam.v1.FederatedCredentialsService/List"` = `"/nebius.iam.v1.FederatedCredentialsService/List"`

#### service.list.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListFederatedCredentialsRequest`](../interfaces/ListFederatedCredentialsRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListFederatedCredentialsRequest`](../interfaces/ListFederatedCredentialsRequest.md)

#### service.list.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListFederatedCredentialsRequest`](../interfaces/ListFederatedCredentialsRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.list.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.list.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListFederatedCredentialsResponse`](../interfaces/ListFederatedCredentialsResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListFederatedCredentialsResponse`](../interfaces/ListFederatedCredentialsResponse.md)

#### service.list.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListFederatedCredentialsResponse`](../interfaces/ListFederatedCredentialsResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.list.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.update

> `readonly` **update**: `object`

#### service.update.path

> `readonly` **path**: `"/nebius.iam.v1.FederatedCredentialsService/Update"` = `"/nebius.iam.v1.FederatedCredentialsService/Update"`

#### service.update.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`UpdateFederatedCredentialsRequest`](../interfaces/UpdateFederatedCredentialsRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`UpdateFederatedCredentialsRequest`](../interfaces/UpdateFederatedCredentialsRequest.md)

#### service.update.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`UpdateFederatedCredentialsRequest`](../interfaces/UpdateFederatedCredentialsRequest.md)

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
