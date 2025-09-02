[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/common/v1alpha1](../README.md) / OperationService

# ~~Class: OperationService~~

Defined in: src/generated/nebius/common/v1alpha1/index.ts:631

## Deprecated

Deprecated.

## Implements

- `OperationService`

## Constructors

### Constructor

> **new OperationService**(`sdk`, `serviceType`, `apiServiceName?`): `OperationService`

Defined in: src/generated/nebius/common/v1alpha1/index.ts:661

#### Parameters

##### sdk

[`SDKInterface`](../../../../../sdk/interfaces/SDKInterface.md)

##### serviceType

`string`

##### apiServiceName?

`string`

#### Returns

`OperationService`

#### Deprecated

Deprecated.

## Properties

### ~~$type~~

> **$type**: `"nebius.common.v1alpha1.OperationService"`

Defined in: src/generated/nebius/common/v1alpha1/index.ts:632

## Methods

### ~~get()~~

#### Call Signature

> **get**(`request`): `Request`\<[`GetOperationRequest`](../interfaces/GetOperationRequest.md), `Operation`\<[`GetOperationRequest`](../interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/common/v1alpha1/index.ts:637

Returns the latest state of the specified operation.

##### Parameters

###### request

[`GetOperationRequest`](../interfaces/GetOperationRequest.md)

##### Returns

`Request`\<[`GetOperationRequest`](../interfaces/GetOperationRequest.md), `Operation`\<[`GetOperationRequest`](../interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **get**(`request`, `metadata`): `Request`\<[`GetOperationRequest`](../interfaces/GetOperationRequest.md), `Operation`\<[`GetOperationRequest`](../interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/common/v1alpha1/index.ts:638

##### Parameters

###### request

[`GetOperationRequest`](../interfaces/GetOperationRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`GetOperationRequest`](../interfaces/GetOperationRequest.md), `Operation`\<[`GetOperationRequest`](../interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **get**(`request`, `metadata`, `options`): `Request`\<[`GetOperationRequest`](../interfaces/GetOperationRequest.md), `Operation`\<[`GetOperationRequest`](../interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/common/v1alpha1/index.ts:639

##### Parameters

###### request

[`GetOperationRequest`](../interfaces/GetOperationRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`GetOperationRequest`](../interfaces/GetOperationRequest.md), `Operation`\<[`GetOperationRequest`](../interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **get**(`request`): `Request`\<[`GetOperationRequest`](../interfaces/GetOperationRequest.md), `Operation`\<[`GetOperationRequest`](../interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/common/v1alpha1/index.ts:671

Returns the latest state of the specified operation.

##### Parameters

###### request

[`GetOperationRequest`](../interfaces/GetOperationRequest.md)

##### Returns

`Request`\<[`GetOperationRequest`](../interfaces/GetOperationRequest.md), `Operation`\<[`GetOperationRequest`](../interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **get**(`request`, `metadata`): `Request`\<[`GetOperationRequest`](../interfaces/GetOperationRequest.md), `Operation`\<[`GetOperationRequest`](../interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/common/v1alpha1/index.ts:672

Returns the latest state of the specified operation.

##### Parameters

###### request

[`GetOperationRequest`](../interfaces/GetOperationRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`GetOperationRequest`](../interfaces/GetOperationRequest.md), `Operation`\<[`GetOperationRequest`](../interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **get**(`request`, `metadata`, `options`): `Request`\<[`GetOperationRequest`](../interfaces/GetOperationRequest.md), `Operation`\<[`GetOperationRequest`](../interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/common/v1alpha1/index.ts:673

Returns the latest state of the specified operation.

##### Parameters

###### request

[`GetOperationRequest`](../interfaces/GetOperationRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`GetOperationRequest`](../interfaces/GetOperationRequest.md), `Operation`\<[`GetOperationRequest`](../interfaces/GetOperationRequest.md)\>\>

***

### ~~list()~~

#### Call Signature

> **list**(`request`): `Request`\<[`ListOperationsRequest`](../interfaces/ListOperationsRequest.md), [`OperationServiceListResponse`](../interfaces/OperationServiceListResponse.md)\>

Defined in: src/generated/nebius/common/v1alpha1/index.ts:644

Lists operations for the specified resource.

##### Parameters

###### request

[`ListOperationsRequest`](../interfaces/ListOperationsRequest.md)

##### Returns

`Request`\<[`ListOperationsRequest`](../interfaces/ListOperationsRequest.md), [`OperationServiceListResponse`](../interfaces/OperationServiceListResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`): `Request`\<[`ListOperationsRequest`](../interfaces/ListOperationsRequest.md), [`OperationServiceListResponse`](../interfaces/OperationServiceListResponse.md)\>

Defined in: src/generated/nebius/common/v1alpha1/index.ts:645

##### Parameters

###### request

[`ListOperationsRequest`](../interfaces/ListOperationsRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`ListOperationsRequest`](../interfaces/ListOperationsRequest.md), [`OperationServiceListResponse`](../interfaces/OperationServiceListResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`, `options`): `Request`\<[`ListOperationsRequest`](../interfaces/ListOperationsRequest.md), [`OperationServiceListResponse`](../interfaces/OperationServiceListResponse.md)\>

Defined in: src/generated/nebius/common/v1alpha1/index.ts:646

##### Parameters

###### request

[`ListOperationsRequest`](../interfaces/ListOperationsRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`ListOperationsRequest`](../interfaces/ListOperationsRequest.md), [`OperationServiceListResponse`](../interfaces/OperationServiceListResponse.md)\>

#### Call Signature

> **list**(`request`): `Request`\<[`ListOperationsRequest`](../interfaces/ListOperationsRequest.md), [`OperationServiceListResponse`](../interfaces/OperationServiceListResponse.md)\>

Defined in: src/generated/nebius/common/v1alpha1/index.ts:686

Lists operations for the specified resource.

##### Parameters

###### request

[`ListOperationsRequest`](../interfaces/ListOperationsRequest.md)

##### Returns

`Request`\<[`ListOperationsRequest`](../interfaces/ListOperationsRequest.md), [`OperationServiceListResponse`](../interfaces/OperationServiceListResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`): `Request`\<[`ListOperationsRequest`](../interfaces/ListOperationsRequest.md), [`OperationServiceListResponse`](../interfaces/OperationServiceListResponse.md)\>

Defined in: src/generated/nebius/common/v1alpha1/index.ts:687

Lists operations for the specified resource.

##### Parameters

###### request

[`ListOperationsRequest`](../interfaces/ListOperationsRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`ListOperationsRequest`](../interfaces/ListOperationsRequest.md), [`OperationServiceListResponse`](../interfaces/OperationServiceListResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`, `options`): `Request`\<[`ListOperationsRequest`](../interfaces/ListOperationsRequest.md), [`OperationServiceListResponse`](../interfaces/OperationServiceListResponse.md)\>

Defined in: src/generated/nebius/common/v1alpha1/index.ts:688

Lists operations for the specified resource.

##### Parameters

###### request

[`ListOperationsRequest`](../interfaces/ListOperationsRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`ListOperationsRequest`](../interfaces/ListOperationsRequest.md), [`OperationServiceListResponse`](../interfaces/OperationServiceListResponse.md)\>
