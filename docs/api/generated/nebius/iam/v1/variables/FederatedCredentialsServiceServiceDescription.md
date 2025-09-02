[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/iam/v1](../README.md) / FederatedCredentialsServiceServiceDescription

# Variable: FederatedCredentialsServiceServiceDescription

> **FederatedCredentialsServiceServiceDescription**: `object`

Defined in: src/generated/nebius/iam/v1/index.ts:6519

## Type Declaration

### create

> `readonly` **create**: `object`

#### create.path

> `readonly` **path**: `"/nebius.iam.v1.FederatedCredentialsService/Create"` = `"/nebius.iam.v1.FederatedCredentialsService/Create"`

#### create.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`CreateFederatedCredentialsRequest`](../interfaces/CreateFederatedCredentialsRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`CreateFederatedCredentialsRequest`](../interfaces/CreateFederatedCredentialsRequest.md)

#### create.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`CreateFederatedCredentialsRequest`](../interfaces/CreateFederatedCredentialsRequest.md)

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

> `readonly` **path**: `"/nebius.iam.v1.FederatedCredentialsService/Delete"` = `"/nebius.iam.v1.FederatedCredentialsService/Delete"`

#### delete.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`DeleteFederatedCredentialsRequest`](../interfaces/DeleteFederatedCredentialsRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`DeleteFederatedCredentialsRequest`](../interfaces/DeleteFederatedCredentialsRequest.md)

#### delete.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`DeleteFederatedCredentialsRequest`](../interfaces/DeleteFederatedCredentialsRequest.md)

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

> `readonly` **path**: `"/nebius.iam.v1.FederatedCredentialsService/Get"` = `"/nebius.iam.v1.FederatedCredentialsService/Get"`

#### get.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetFederatedCredentialsRequest`](../interfaces/GetFederatedCredentialsRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetFederatedCredentialsRequest`](../interfaces/GetFederatedCredentialsRequest.md)

#### get.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetFederatedCredentialsRequest`](../interfaces/GetFederatedCredentialsRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### get.requestStream

> `readonly` **requestStream**: `false` = `false`

#### get.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`FederatedCredentials`](../interfaces/FederatedCredentials.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`FederatedCredentials`](../interfaces/FederatedCredentials.md)

#### get.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`FederatedCredentials`](../interfaces/FederatedCredentials.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### get.responseStream

> `readonly` **responseStream**: `false` = `false`

### getByName

> `readonly` **getByName**: `object`

#### getByName.path

> `readonly` **path**: `"/nebius.iam.v1.FederatedCredentialsService/GetByName"` = `"/nebius.iam.v1.FederatedCredentialsService/GetByName"`

#### getByName.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetByNameFederatedCredentialsRequest`](../interfaces/GetByNameFederatedCredentialsRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetByNameFederatedCredentialsRequest`](../interfaces/GetByNameFederatedCredentialsRequest.md)

#### getByName.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetByNameFederatedCredentialsRequest`](../interfaces/GetByNameFederatedCredentialsRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### getByName.requestStream

> `readonly` **requestStream**: `false` = `false`

#### getByName.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`FederatedCredentials`](../interfaces/FederatedCredentials.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`FederatedCredentials`](../interfaces/FederatedCredentials.md)

#### getByName.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`FederatedCredentials`](../interfaces/FederatedCredentials.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### getByName.responseStream

> `readonly` **responseStream**: `false` = `false`

### list

> `readonly` **list**: `object`

#### list.path

> `readonly` **path**: `"/nebius.iam.v1.FederatedCredentialsService/List"` = `"/nebius.iam.v1.FederatedCredentialsService/List"`

#### list.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListFederatedCredentialsRequest`](../interfaces/ListFederatedCredentialsRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListFederatedCredentialsRequest`](../interfaces/ListFederatedCredentialsRequest.md)

#### list.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListFederatedCredentialsRequest`](../interfaces/ListFederatedCredentialsRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### list.requestStream

> `readonly` **requestStream**: `false` = `false`

#### list.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListFederatedCredentialsResponse`](../interfaces/ListFederatedCredentialsResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListFederatedCredentialsResponse`](../interfaces/ListFederatedCredentialsResponse.md)

#### list.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListFederatedCredentialsResponse`](../interfaces/ListFederatedCredentialsResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### list.responseStream

> `readonly` **responseStream**: `false` = `false`

### update

> `readonly` **update**: `object`

#### update.path

> `readonly` **path**: `"/nebius.iam.v1.FederatedCredentialsService/Update"` = `"/nebius.iam.v1.FederatedCredentialsService/Update"`

#### update.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`UpdateFederatedCredentialsRequest`](../interfaces/UpdateFederatedCredentialsRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`UpdateFederatedCredentialsRequest`](../interfaces/UpdateFederatedCredentialsRequest.md)

#### update.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`UpdateFederatedCredentialsRequest`](../interfaces/UpdateFederatedCredentialsRequest.md)

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
