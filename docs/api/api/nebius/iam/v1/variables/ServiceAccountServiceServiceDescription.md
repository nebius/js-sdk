[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/iam/v1](../README.md) / ServiceAccountServiceServiceDescription

# Variable: ServiceAccountServiceServiceDescription

> **ServiceAccountServiceServiceDescription**: `object`

Defined in: src/api/nebius/iam/v1/index.ts:16810

## Type Declaration

### create

> `readonly` **create**: `object`

#### create.path

> `readonly` **path**: `"/nebius.iam.v1.ServiceAccountService/Create"` = `"/nebius.iam.v1.ServiceAccountService/Create"`

#### create.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`CreateServiceAccountRequest`](../interfaces/CreateServiceAccountRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`CreateServiceAccountRequest`](../interfaces/CreateServiceAccountRequest.md)

#### create.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`CreateServiceAccountRequest`](../interfaces/CreateServiceAccountRequest.md)

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

> `readonly` **path**: `"/nebius.iam.v1.ServiceAccountService/Delete"` = `"/nebius.iam.v1.ServiceAccountService/Delete"`

#### delete.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`DeleteServiceAccountRequest`](../interfaces/DeleteServiceAccountRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`DeleteServiceAccountRequest`](../interfaces/DeleteServiceAccountRequest.md)

#### delete.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`DeleteServiceAccountRequest`](../interfaces/DeleteServiceAccountRequest.md)

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

> `readonly` **path**: `"/nebius.iam.v1.ServiceAccountService/Get"` = `"/nebius.iam.v1.ServiceAccountService/Get"`

#### get.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetServiceAccountRequest`](../interfaces/GetServiceAccountRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetServiceAccountRequest`](../interfaces/GetServiceAccountRequest.md)

#### get.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetServiceAccountRequest`](../interfaces/GetServiceAccountRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### get.requestStream

> `readonly` **requestStream**: `false` = `false`

#### get.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ServiceAccount`](../interfaces/ServiceAccount.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ServiceAccount`](../interfaces/ServiceAccount.md)

#### get.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ServiceAccount`](../interfaces/ServiceAccount.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### get.responseStream

> `readonly` **responseStream**: `false` = `false`

### getByName

> `readonly` **getByName**: `object`

#### getByName.path

> `readonly` **path**: `"/nebius.iam.v1.ServiceAccountService/GetByName"` = `"/nebius.iam.v1.ServiceAccountService/GetByName"`

#### getByName.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetServiceAccountByNameRequest`](../interfaces/GetServiceAccountByNameRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetServiceAccountByNameRequest`](../interfaces/GetServiceAccountByNameRequest.md)

#### getByName.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetServiceAccountByNameRequest`](../interfaces/GetServiceAccountByNameRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### getByName.requestStream

> `readonly` **requestStream**: `false` = `false`

#### getByName.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ServiceAccount`](../interfaces/ServiceAccount.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ServiceAccount`](../interfaces/ServiceAccount.md)

#### getByName.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ServiceAccount`](../interfaces/ServiceAccount.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### getByName.responseStream

> `readonly` **responseStream**: `false` = `false`

### list

> `readonly` **list**: `object`

#### list.path

> `readonly` **path**: `"/nebius.iam.v1.ServiceAccountService/List"` = `"/nebius.iam.v1.ServiceAccountService/List"`

#### list.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListServiceAccountRequest`](../interfaces/ListServiceAccountRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListServiceAccountRequest`](../interfaces/ListServiceAccountRequest.md)

#### list.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListServiceAccountRequest`](../interfaces/ListServiceAccountRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### list.requestStream

> `readonly` **requestStream**: `false` = `false`

#### list.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListServiceAccountResponse`](../interfaces/ListServiceAccountResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListServiceAccountResponse`](../interfaces/ListServiceAccountResponse.md)

#### list.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListServiceAccountResponse`](../interfaces/ListServiceAccountResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### list.responseStream

> `readonly` **responseStream**: `false` = `false`

### update

> `readonly` **update**: `object`

#### update.path

> `readonly` **path**: `"/nebius.iam.v1.ServiceAccountService/Update"` = `"/nebius.iam.v1.ServiceAccountService/Update"`

#### update.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`UpdateServiceAccountRequest`](../interfaces/UpdateServiceAccountRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`UpdateServiceAccountRequest`](../interfaces/UpdateServiceAccountRequest.md)

#### update.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`UpdateServiceAccountRequest`](../interfaces/UpdateServiceAccountRequest.md)

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
