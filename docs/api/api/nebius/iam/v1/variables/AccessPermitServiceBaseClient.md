[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/iam/v1](../README.md) / AccessPermitServiceBaseClient

# Variable: AccessPermitServiceBaseClient

> **AccessPermitServiceBaseClient**: \{(`address`, `credentials`, `options?`): [`AccessPermitServiceBaseClient`](../interfaces/AccessPermitServiceBaseClient.md); `service`: `object`; `serviceName`: `string`; \}

Defined in: src/api/nebius/iam/v1/index.ts:2833

## Type Declaration

## Parameters

### address

`string`

### credentials

`ChannelCredentials`

### options?

`Partial`\<`ClientOptions`\>

## Returns

[`AccessPermitServiceBaseClient`](../interfaces/AccessPermitServiceBaseClient.md)

### service

> **service**: `object`

#### service.create

> `readonly` **create**: `object`

#### service.create.path

> `readonly` **path**: `"/nebius.iam.v1.AccessPermitService/Create"` = `"/nebius.iam.v1.AccessPermitService/Create"`

#### service.create.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`CreateAccessPermitRequest`](../interfaces/CreateAccessPermitRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`CreateAccessPermitRequest`](../interfaces/CreateAccessPermitRequest.md)

#### service.create.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`CreateAccessPermitRequest`](../interfaces/CreateAccessPermitRequest.md)

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

> `readonly` **path**: `"/nebius.iam.v1.AccessPermitService/Delete"` = `"/nebius.iam.v1.AccessPermitService/Delete"`

#### service.delete.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`DeleteAccessPermitRequest`](../interfaces/DeleteAccessPermitRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`DeleteAccessPermitRequest`](../interfaces/DeleteAccessPermitRequest.md)

#### service.delete.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`DeleteAccessPermitRequest`](../interfaces/DeleteAccessPermitRequest.md)

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

> `readonly` **path**: `"/nebius.iam.v1.AccessPermitService/Get"` = `"/nebius.iam.v1.AccessPermitService/Get"`

#### service.get.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetAccessPermitRequest`](../interfaces/GetAccessPermitRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetAccessPermitRequest`](../interfaces/GetAccessPermitRequest.md)

#### service.get.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetAccessPermitRequest`](../interfaces/GetAccessPermitRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.get.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.get.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`AccessPermit`](../interfaces/AccessPermit.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`AccessPermit`](../interfaces/AccessPermit.md)

#### service.get.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`AccessPermit`](../interfaces/AccessPermit.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.get.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.list

> `readonly` **list**: `object`

#### service.list.path

> `readonly` **path**: `"/nebius.iam.v1.AccessPermitService/List"` = `"/nebius.iam.v1.AccessPermitService/List"`

#### service.list.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListAccessPermitRequest`](../interfaces/ListAccessPermitRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListAccessPermitRequest`](../interfaces/ListAccessPermitRequest.md)

#### service.list.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListAccessPermitRequest`](../interfaces/ListAccessPermitRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.list.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.list.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListAccessPermitResponse`](../interfaces/ListAccessPermitResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListAccessPermitResponse`](../interfaces/ListAccessPermitResponse.md)

#### service.list.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListAccessPermitResponse`](../interfaces/ListAccessPermitResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.list.responseStream

> `readonly` **responseStream**: `false` = `false`

### serviceName

> **serviceName**: `string`
