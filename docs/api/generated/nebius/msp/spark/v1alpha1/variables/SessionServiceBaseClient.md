[**@nebius/nodejs-sdk**](../../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../../README.md) / [generated/nebius/msp/spark/v1alpha1](../README.md) / SessionServiceBaseClient

# ~~Variable: SessionServiceBaseClient~~

> **SessionServiceBaseClient**: \{(`address`, `credentials`, `options?`): [`SessionServiceBaseClient`](../interfaces/SessionServiceBaseClient.md); `service`: `object`; `serviceName`: `string`; \}

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:4635

## Type Declaration

## Parameters

### address

`string`

### credentials

`ChannelCredentials`

### options?

`Partial`\<`ClientOptions`\>

## Returns

[`SessionServiceBaseClient`](../interfaces/SessionServiceBaseClient.md)

### ~~service~~

> **service**: `object`

#### service.create

> `readonly` **create**: `object`

#### service.create.path

> `readonly` **path**: `"/nebius.msp.spark.v1alpha1.SessionService/Create"` = `"/nebius.msp.spark.v1alpha1.SessionService/Create"`

#### service.create.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`CreateSessionRequest`](../interfaces/CreateSessionRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`CreateSessionRequest`](../interfaces/CreateSessionRequest.md)

#### service.create.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`CreateSessionRequest`](../interfaces/CreateSessionRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.create.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.create.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../../common/v1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../../common/v1/interfaces/Operation.md)

#### service.create.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../../common/v1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.create.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.delete

> `readonly` **delete**: `object`

#### service.delete.path

> `readonly` **path**: `"/nebius.msp.spark.v1alpha1.SessionService/Delete"` = `"/nebius.msp.spark.v1alpha1.SessionService/Delete"`

#### service.delete.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`DeleteSessionRequest`](../interfaces/DeleteSessionRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`DeleteSessionRequest`](../interfaces/DeleteSessionRequest.md)

#### service.delete.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`DeleteSessionRequest`](../interfaces/DeleteSessionRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.delete.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.delete.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../../common/v1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../../common/v1/interfaces/Operation.md)

#### service.delete.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../../common/v1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.delete.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.get

> `readonly` **get**: `object`

#### service.get.path

> `readonly` **path**: `"/nebius.msp.spark.v1alpha1.SessionService/Get"` = `"/nebius.msp.spark.v1alpha1.SessionService/Get"`

#### service.get.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetSessionRequest`](../interfaces/GetSessionRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetSessionRequest`](../interfaces/GetSessionRequest.md)

#### service.get.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetSessionRequest`](../interfaces/GetSessionRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.get.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.get.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Session`](../interfaces/Session.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Session`](../interfaces/Session.md)

#### service.get.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Session`](../interfaces/Session.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.get.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.getByName

> `readonly` **getByName**: `object`

#### service.getByName.path

> `readonly` **path**: `"/nebius.msp.spark.v1alpha1.SessionService/GetByName"` = `"/nebius.msp.spark.v1alpha1.SessionService/GetByName"`

#### service.getByName.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetSessionByNameRequest`](../interfaces/GetSessionByNameRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetSessionByNameRequest`](../interfaces/GetSessionByNameRequest.md)

#### service.getByName.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetSessionByNameRequest`](../interfaces/GetSessionByNameRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.getByName.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.getByName.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Session`](../interfaces/Session.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Session`](../interfaces/Session.md)

#### service.getByName.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Session`](../interfaces/Session.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.getByName.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.list

> `readonly` **list**: `object`

#### service.list.path

> `readonly` **path**: `"/nebius.msp.spark.v1alpha1.SessionService/List"` = `"/nebius.msp.spark.v1alpha1.SessionService/List"`

#### service.list.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListSessionsRequest`](../interfaces/ListSessionsRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListSessionsRequest`](../interfaces/ListSessionsRequest.md)

#### service.list.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListSessionsRequest`](../interfaces/ListSessionsRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.list.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.list.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListSessionsResponse`](../interfaces/ListSessionsResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListSessionsResponse`](../interfaces/ListSessionsResponse.md)

#### service.list.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListSessionsResponse`](../interfaces/ListSessionsResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.list.responseStream

> `readonly` **responseStream**: `false` = `false`

### ~~serviceName~~

> **serviceName**: `string`

## Deprecated

Deprecated, will be removed on 2025-08-12: Nebius AI Cloud no longer supports the service. Instead, use Application for Apache Spark™ Connect in Standalone Applications..
