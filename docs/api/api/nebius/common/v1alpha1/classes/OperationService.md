[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/common/v1alpha1](../README.md) / OperationService

# Class: OperationService

Defined in: src/api/nebius/common/v1alpha1/index.ts:632

## Implements

- `OperationService`

## Constructors

### Constructor

> **new OperationService**(`sdk`, `addr`): `OperationService`

Defined in: src/api/nebius/common/v1alpha1/index.ts:658

#### Parameters

##### sdk

[`SDKInterface`](../../../../../sdk/interfaces/SDKInterface.md)

##### addr

`string`

#### Returns

`OperationService`

#### Deprecated

Deprecated.

## Properties

### $type

> **$type**: `"nebius.common.v1alpha1.OperationService"`

Defined in: src/api/nebius/common/v1alpha1/index.ts:633

## Methods

### get()

#### Call Signature

> **get**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetOperationRequest`](../interfaces/GetOperationRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/common/v1alpha1/index.ts:638

Returns the latest state of the specified operation.

##### Parameters

###### request

[`GetOperationRequest`](../interfaces/GetOperationRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetOperationRequest`](../interfaces/GetOperationRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **get**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetOperationRequest`](../interfaces/GetOperationRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/common/v1alpha1/index.ts:639

##### Parameters

###### request

[`GetOperationRequest`](../interfaces/GetOperationRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetOperationRequest`](../interfaces/GetOperationRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **get**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetOperationRequest`](../interfaces/GetOperationRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/common/v1alpha1/index.ts:640

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

Defined in: src/api/nebius/common/v1alpha1/index.ts:666

Returns the latest state of the specified operation.

##### Parameters

###### request

[`GetOperationRequest`](../interfaces/GetOperationRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetOperationRequest`](../interfaces/GetOperationRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **get**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetOperationRequest`](../interfaces/GetOperationRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/common/v1alpha1/index.ts:667

Returns the latest state of the specified operation.

##### Parameters

###### request

[`GetOperationRequest`](../interfaces/GetOperationRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetOperationRequest`](../interfaces/GetOperationRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **get**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetOperationRequest`](../interfaces/GetOperationRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/common/v1alpha1/index.ts:668

Returns the latest state of the specified operation.

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

Defined in: src/api/nebius/common/v1alpha1/index.ts:645

Lists operations for the specified resource.

##### Parameters

###### request

[`ListOperationsRequest`](../interfaces/ListOperationsRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListOperationsRequest`](../interfaces/ListOperationsRequest.md), [`OperationServiceListResponse`](../interfaces/OperationServiceListResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListOperationsRequest`](../interfaces/ListOperationsRequest.md), [`OperationServiceListResponse`](../interfaces/OperationServiceListResponse.md)\>

Defined in: src/api/nebius/common/v1alpha1/index.ts:646

##### Parameters

###### request

[`ListOperationsRequest`](../interfaces/ListOperationsRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListOperationsRequest`](../interfaces/ListOperationsRequest.md), [`OperationServiceListResponse`](../interfaces/OperationServiceListResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListOperationsRequest`](../interfaces/ListOperationsRequest.md), [`OperationServiceListResponse`](../interfaces/OperationServiceListResponse.md)\>

Defined in: src/api/nebius/common/v1alpha1/index.ts:647

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

Defined in: src/api/nebius/common/v1alpha1/index.ts:681

Lists operations for the specified resource.

##### Parameters

###### request

[`ListOperationsRequest`](../interfaces/ListOperationsRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListOperationsRequest`](../interfaces/ListOperationsRequest.md), [`OperationServiceListResponse`](../interfaces/OperationServiceListResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListOperationsRequest`](../interfaces/ListOperationsRequest.md), [`OperationServiceListResponse`](../interfaces/OperationServiceListResponse.md)\>

Defined in: src/api/nebius/common/v1alpha1/index.ts:682

Lists operations for the specified resource.

##### Parameters

###### request

[`ListOperationsRequest`](../interfaces/ListOperationsRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListOperationsRequest`](../interfaces/ListOperationsRequest.md), [`OperationServiceListResponse`](../interfaces/OperationServiceListResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListOperationsRequest`](../interfaces/ListOperationsRequest.md), [`OperationServiceListResponse`](../interfaces/OperationServiceListResponse.md)\>

Defined in: src/api/nebius/common/v1alpha1/index.ts:683

Lists operations for the specified resource.

##### Parameters

###### request

[`ListOperationsRequest`](../interfaces/ListOperationsRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListOperationsRequest`](../interfaces/ListOperationsRequest.md), [`OperationServiceListResponse`](../interfaces/OperationServiceListResponse.md)\>
