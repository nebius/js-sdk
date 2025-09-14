[**@nebius/nodejs-sdk**](../../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../../README.md) / [api/nebius/msp/spark/v1alpha1](../README.md) / SessionServiceServiceDescription

# ~~Variable: SessionServiceServiceDescription~~

> **SessionServiceServiceDescription**: `object`

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:4569

## Type Declaration

### ~~create~~

> `readonly` **create**: `object`

#### create.path

> `readonly` **path**: `"/nebius.msp.spark.v1alpha1.SessionService/Create"` = `"/nebius.msp.spark.v1alpha1.SessionService/Create"`

#### create.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`CreateSessionRequest`](../interfaces/CreateSessionRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`CreateSessionRequest`](../interfaces/CreateSessionRequest.md)

#### create.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`CreateSessionRequest`](../interfaces/CreateSessionRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### create.requestStream

> `readonly` **requestStream**: `false` = `false`

#### create.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../../common/v1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../../common/v1/interfaces/Operation.md)

#### create.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../../common/v1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### create.responseStream

> `readonly` **responseStream**: `false` = `false`

### ~~delete~~

> `readonly` **delete**: `object`

#### delete.path

> `readonly` **path**: `"/nebius.msp.spark.v1alpha1.SessionService/Delete"` = `"/nebius.msp.spark.v1alpha1.SessionService/Delete"`

#### delete.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`DeleteSessionRequest`](../interfaces/DeleteSessionRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`DeleteSessionRequest`](../interfaces/DeleteSessionRequest.md)

#### delete.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`DeleteSessionRequest`](../interfaces/DeleteSessionRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### delete.requestStream

> `readonly` **requestStream**: `false` = `false`

#### delete.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../../common/v1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../../common/v1/interfaces/Operation.md)

#### delete.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../../common/v1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### delete.responseStream

> `readonly` **responseStream**: `false` = `false`

### ~~get~~

> `readonly` **get**: `object`

#### get.path

> `readonly` **path**: `"/nebius.msp.spark.v1alpha1.SessionService/Get"` = `"/nebius.msp.spark.v1alpha1.SessionService/Get"`

#### get.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetSessionRequest`](../interfaces/GetSessionRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetSessionRequest`](../interfaces/GetSessionRequest.md)

#### get.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetSessionRequest`](../interfaces/GetSessionRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### get.requestStream

> `readonly` **requestStream**: `false` = `false`

#### get.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Session`](../interfaces/Session.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Session`](../interfaces/Session.md)

#### get.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Session`](../interfaces/Session.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### get.responseStream

> `readonly` **responseStream**: `false` = `false`

### ~~getByName~~

> `readonly` **getByName**: `object`

#### getByName.path

> `readonly` **path**: `"/nebius.msp.spark.v1alpha1.SessionService/GetByName"` = `"/nebius.msp.spark.v1alpha1.SessionService/GetByName"`

#### getByName.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetSessionByNameRequest`](../interfaces/GetSessionByNameRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetSessionByNameRequest`](../interfaces/GetSessionByNameRequest.md)

#### getByName.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetSessionByNameRequest`](../interfaces/GetSessionByNameRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### getByName.requestStream

> `readonly` **requestStream**: `false` = `false`

#### getByName.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Session`](../interfaces/Session.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Session`](../interfaces/Session.md)

#### getByName.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Session`](../interfaces/Session.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### getByName.responseStream

> `readonly` **responseStream**: `false` = `false`

### ~~list~~

> `readonly` **list**: `object`

#### list.path

> `readonly` **path**: `"/nebius.msp.spark.v1alpha1.SessionService/List"` = `"/nebius.msp.spark.v1alpha1.SessionService/List"`

#### list.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListSessionsRequest`](../interfaces/ListSessionsRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListSessionsRequest`](../interfaces/ListSessionsRequest.md)

#### list.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListSessionsRequest`](../interfaces/ListSessionsRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### list.requestStream

> `readonly` **requestStream**: `false` = `false`

#### list.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListSessionsResponse`](../interfaces/ListSessionsResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListSessionsResponse`](../interfaces/ListSessionsResponse.md)

#### list.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListSessionsResponse`](../interfaces/ListSessionsResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### list.responseStream

> `readonly` **responseStream**: `false` = `false`

## Deprecated

Deprecated, will be removed on 2025-08-12: Nebius AI Cloud no longer supports the service. Instead, use Application for Apache Spark™ Connect in Standalone Applications..
