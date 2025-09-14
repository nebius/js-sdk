[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/common/v1](../README.md) / OperationServiceBaseClient

# Variable: OperationServiceBaseClient

> **OperationServiceBaseClient**: \{(`address`, `credentials`, `options?`): [`OperationServiceBaseClient`](../interfaces/OperationServiceBaseClient.md); `service`: `object`; `serviceName`: `string`; \}

Defined in: src/api/nebius/common/v1/index.ts:3022

## Type Declaration

## Parameters

### address

`string`

### credentials

`ChannelCredentials`

### options?

`Partial`\<`ClientOptions`\>

## Returns

[`OperationServiceBaseClient`](../interfaces/OperationServiceBaseClient.md)

### service

> **service**: `object`

#### service.get

> `readonly` **get**: `object`

#### service.get.path

> `readonly` **path**: `"/nebius.common.v1.OperationService/Get"` = `"/nebius.common.v1.OperationService/Get"`

#### service.get.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetOperationRequest`](../interfaces/GetOperationRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetOperationRequest`](../interfaces/GetOperationRequest.md)

#### service.get.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetOperationRequest`](../interfaces/GetOperationRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.get.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.get.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../interfaces/Operation.md)

#### service.get.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.get.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.list

> `readonly` **list**: `object`

#### service.list.path

> `readonly` **path**: `"/nebius.common.v1.OperationService/List"` = `"/nebius.common.v1.OperationService/List"`

#### service.list.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListOperationsRequest`](../interfaces/ListOperationsRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListOperationsRequest`](../interfaces/ListOperationsRequest.md)

#### service.list.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListOperationsRequest`](../interfaces/ListOperationsRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.list.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.list.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListOperationsResponse`](../interfaces/ListOperationsResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListOperationsResponse`](../interfaces/ListOperationsResponse.md)

#### service.list.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListOperationsResponse`](../interfaces/ListOperationsResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.list.responseStream

> `readonly` **responseStream**: `false` = `false`

### serviceName

> **serviceName**: `string`
