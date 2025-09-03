[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/common/v1](../README.md) / OperationService

# Class: OperationService

Defined in: src/generated/nebius/common/v1/index.ts:3032

## Implements

- `OperationService`

## Constructors

### Constructor

> **new OperationService**(`sdk`, `serviceType`, `apiServiceName?`): `OperationService`

Defined in: src/generated/nebius/common/v1/index.ts:3048

#### Parameters

##### sdk

[`SDKInterface`](../../../../../sdk/interfaces/SDKInterface.md)

##### serviceType

`string`

##### apiServiceName?

`string`

#### Returns

`OperationService`

## Properties

### $type

> **$type**: `"nebius.common.v1.OperationService"`

Defined in: src/generated/nebius/common/v1/index.ts:3033

## Methods

### get()

#### Call Signature

> **get**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetOperationRequest`](../interfaces/GetOperationRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/common/v1/index.ts:3034

##### Parameters

###### request

[`GetOperationRequest`](../interfaces/GetOperationRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetOperationRequest`](../interfaces/GetOperationRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **get**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetOperationRequest`](../interfaces/GetOperationRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/common/v1/index.ts:3035

##### Parameters

###### request

[`GetOperationRequest`](../interfaces/GetOperationRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetOperationRequest`](../interfaces/GetOperationRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **get**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetOperationRequest`](../interfaces/GetOperationRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/common/v1/index.ts:3036

##### Parameters

###### request

[`GetOperationRequest`](../interfaces/GetOperationRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetOperationRequest`](../interfaces/GetOperationRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **get**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetOperationRequest`](../interfaces/GetOperationRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/common/v1/index.ts:3054

##### Parameters

###### request

[`GetOperationRequest`](../interfaces/GetOperationRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetOperationRequest`](../interfaces/GetOperationRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **get**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetOperationRequest`](../interfaces/GetOperationRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/common/v1/index.ts:3055

##### Parameters

###### request

[`GetOperationRequest`](../interfaces/GetOperationRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetOperationRequest`](../interfaces/GetOperationRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **get**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetOperationRequest`](../interfaces/GetOperationRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/common/v1/index.ts:3056

##### Parameters

###### request

[`GetOperationRequest`](../interfaces/GetOperationRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetOperationRequest`](../interfaces/GetOperationRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../interfaces/GetOperationRequest.md)\>\>

---

### list()

#### Call Signature

> **list**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListOperationsRequest`](../interfaces/ListOperationsRequest.md), [`OperationServiceListResponse`](../interfaces/OperationServiceListResponse.md)\>

Defined in: src/generated/nebius/common/v1/index.ts:3037

##### Parameters

###### request

[`ListOperationsRequest`](../interfaces/ListOperationsRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListOperationsRequest`](../interfaces/ListOperationsRequest.md), [`OperationServiceListResponse`](../interfaces/OperationServiceListResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListOperationsRequest`](../interfaces/ListOperationsRequest.md), [`OperationServiceListResponse`](../interfaces/OperationServiceListResponse.md)\>

Defined in: src/generated/nebius/common/v1/index.ts:3038

##### Parameters

###### request

[`ListOperationsRequest`](../interfaces/ListOperationsRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListOperationsRequest`](../interfaces/ListOperationsRequest.md), [`OperationServiceListResponse`](../interfaces/OperationServiceListResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListOperationsRequest`](../interfaces/ListOperationsRequest.md), [`OperationServiceListResponse`](../interfaces/OperationServiceListResponse.md)\>

Defined in: src/generated/nebius/common/v1/index.ts:3039

##### Parameters

###### request

[`ListOperationsRequest`](../interfaces/ListOperationsRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListOperationsRequest`](../interfaces/ListOperationsRequest.md), [`OperationServiceListResponse`](../interfaces/OperationServiceListResponse.md)\>

#### Call Signature

> **list**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListOperationsRequest`](../interfaces/ListOperationsRequest.md), [`OperationServiceListResponse`](../interfaces/OperationServiceListResponse.md)\>

Defined in: src/generated/nebius/common/v1/index.ts:3069

##### Parameters

###### request

[`ListOperationsRequest`](../interfaces/ListOperationsRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListOperationsRequest`](../interfaces/ListOperationsRequest.md), [`OperationServiceListResponse`](../interfaces/OperationServiceListResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListOperationsRequest`](../interfaces/ListOperationsRequest.md), [`OperationServiceListResponse`](../interfaces/OperationServiceListResponse.md)\>

Defined in: src/generated/nebius/common/v1/index.ts:3070

##### Parameters

###### request

[`ListOperationsRequest`](../interfaces/ListOperationsRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListOperationsRequest`](../interfaces/ListOperationsRequest.md), [`OperationServiceListResponse`](../interfaces/OperationServiceListResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListOperationsRequest`](../interfaces/ListOperationsRequest.md), [`OperationServiceListResponse`](../interfaces/OperationServiceListResponse.md)\>

Defined in: src/generated/nebius/common/v1/index.ts:3071

##### Parameters

###### request

[`ListOperationsRequest`](../interfaces/ListOperationsRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListOperationsRequest`](../interfaces/ListOperationsRequest.md), [`OperationServiceListResponse`](../interfaces/OperationServiceListResponse.md)\>
