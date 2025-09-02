[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/billing/v1alpha1](../README.md) / CalculatorService

# Class: CalculatorService

Defined in: src/generated/nebius/billing/v1alpha1/index.ts:546

## Implements

- `CalculatorService`

## Constructors

### Constructor

> **new CalculatorService**(`sdk`): `CalculatorService`

Defined in: src/generated/nebius/billing/v1alpha1/index.ts:571

#### Parameters

##### sdk

[`SDKInterface`](../../../../../sdk/interfaces/SDKInterface.md)

#### Returns

`CalculatorService`

## Properties

### $type

> **$type**: `"nebius.billing.v1alpha1.CalculatorService"`

Defined in: src/generated/nebius/billing/v1alpha1/index.ts:547

## Methods

### estimate()

#### Call Signature

> **estimate**(`request`): `Request`\<[`EstimateRequest`](../interfaces/EstimateRequest.md), [`EstimateResponse`](../interfaces/EstimateResponse.md)\>

Defined in: src/generated/nebius/billing/v1alpha1/index.ts:553

Estimates prices for a single resource.
 Returns both hourly and monthly cost estimates for the specified resource configuration.

##### Parameters

###### request

[`EstimateRequest`](../interfaces/EstimateRequest.md)

##### Returns

`Request`\<[`EstimateRequest`](../interfaces/EstimateRequest.md), [`EstimateResponse`](../interfaces/EstimateResponse.md)\>

#### Call Signature

> **estimate**(`request`, `metadata`): `Request`\<[`EstimateRequest`](../interfaces/EstimateRequest.md), [`EstimateResponse`](../interfaces/EstimateResponse.md)\>

Defined in: src/generated/nebius/billing/v1alpha1/index.ts:554

##### Parameters

###### request

[`EstimateRequest`](../interfaces/EstimateRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`EstimateRequest`](../interfaces/EstimateRequest.md), [`EstimateResponse`](../interfaces/EstimateResponse.md)\>

#### Call Signature

> **estimate**(`request`, `metadata`, `options`): `Request`\<[`EstimateRequest`](../interfaces/EstimateRequest.md), [`EstimateResponse`](../interfaces/EstimateResponse.md)\>

Defined in: src/generated/nebius/billing/v1alpha1/index.ts:555

##### Parameters

###### request

[`EstimateRequest`](../interfaces/EstimateRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`EstimateRequest`](../interfaces/EstimateRequest.md), [`EstimateResponse`](../interfaces/EstimateResponse.md)\>

#### Call Signature

> **estimate**(`request`): `Request`\<[`EstimateRequest`](../interfaces/EstimateRequest.md), [`EstimateResponse`](../interfaces/EstimateResponse.md)\>

Defined in: src/generated/nebius/billing/v1alpha1/index.ts:577

Estimates prices for a single resource.
 Returns both hourly and monthly cost estimates for the specified resource configuration.

##### Parameters

###### request

[`EstimateRequest`](../interfaces/EstimateRequest.md)

##### Returns

`Request`\<[`EstimateRequest`](../interfaces/EstimateRequest.md), [`EstimateResponse`](../interfaces/EstimateResponse.md)\>

#### Call Signature

> **estimate**(`request`, `metadata`): `Request`\<[`EstimateRequest`](../interfaces/EstimateRequest.md), [`EstimateResponse`](../interfaces/EstimateResponse.md)\>

Defined in: src/generated/nebius/billing/v1alpha1/index.ts:578

Estimates prices for a single resource.
 Returns both hourly and monthly cost estimates for the specified resource configuration.

##### Parameters

###### request

[`EstimateRequest`](../interfaces/EstimateRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`EstimateRequest`](../interfaces/EstimateRequest.md), [`EstimateResponse`](../interfaces/EstimateResponse.md)\>

#### Call Signature

> **estimate**(`request`, `metadata`, `options`): `Request`\<[`EstimateRequest`](../interfaces/EstimateRequest.md), [`EstimateResponse`](../interfaces/EstimateResponse.md)\>

Defined in: src/generated/nebius/billing/v1alpha1/index.ts:579

Estimates prices for a single resource.
 Returns both hourly and monthly cost estimates for the specified resource configuration.

##### Parameters

###### request

[`EstimateRequest`](../interfaces/EstimateRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`EstimateRequest`](../interfaces/EstimateRequest.md), [`EstimateResponse`](../interfaces/EstimateResponse.md)\>

***

### estimateBatch()

#### Call Signature

> **estimateBatch**(`request`): `Request`\<[`EstimateBatchRequest`](../interfaces/EstimateBatchRequest.md), [`EstimateBatchResponse`](../interfaces/EstimateBatchResponse.md)\>

Defined in: src/generated/nebius/billing/v1alpha1/index.ts:561

Estimates prices for multiple resources.
 Returns aggregated hourly and monthly cost estimates for all specified resources.

##### Parameters

###### request

[`EstimateBatchRequest`](../interfaces/EstimateBatchRequest.md)

##### Returns

`Request`\<[`EstimateBatchRequest`](../interfaces/EstimateBatchRequest.md), [`EstimateBatchResponse`](../interfaces/EstimateBatchResponse.md)\>

#### Call Signature

> **estimateBatch**(`request`, `metadata`): `Request`\<[`EstimateBatchRequest`](../interfaces/EstimateBatchRequest.md), [`EstimateBatchResponse`](../interfaces/EstimateBatchResponse.md)\>

Defined in: src/generated/nebius/billing/v1alpha1/index.ts:562

##### Parameters

###### request

[`EstimateBatchRequest`](../interfaces/EstimateBatchRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`EstimateBatchRequest`](../interfaces/EstimateBatchRequest.md), [`EstimateBatchResponse`](../interfaces/EstimateBatchResponse.md)\>

#### Call Signature

> **estimateBatch**(`request`, `metadata`, `options`): `Request`\<[`EstimateBatchRequest`](../interfaces/EstimateBatchRequest.md), [`EstimateBatchResponse`](../interfaces/EstimateBatchResponse.md)\>

Defined in: src/generated/nebius/billing/v1alpha1/index.ts:563

##### Parameters

###### request

[`EstimateBatchRequest`](../interfaces/EstimateBatchRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`EstimateBatchRequest`](../interfaces/EstimateBatchRequest.md), [`EstimateBatchResponse`](../interfaces/EstimateBatchResponse.md)\>

#### Call Signature

> **estimateBatch**(`request`): `Request`\<[`EstimateBatchRequest`](../interfaces/EstimateBatchRequest.md), [`EstimateBatchResponse`](../interfaces/EstimateBatchResponse.md)\>

Defined in: src/generated/nebius/billing/v1alpha1/index.ts:589

Estimates prices for multiple resources.
 Returns aggregated hourly and monthly cost estimates for all specified resources.

##### Parameters

###### request

[`EstimateBatchRequest`](../interfaces/EstimateBatchRequest.md)

##### Returns

`Request`\<[`EstimateBatchRequest`](../interfaces/EstimateBatchRequest.md), [`EstimateBatchResponse`](../interfaces/EstimateBatchResponse.md)\>

#### Call Signature

> **estimateBatch**(`request`, `metadata`): `Request`\<[`EstimateBatchRequest`](../interfaces/EstimateBatchRequest.md), [`EstimateBatchResponse`](../interfaces/EstimateBatchResponse.md)\>

Defined in: src/generated/nebius/billing/v1alpha1/index.ts:590

Estimates prices for multiple resources.
 Returns aggregated hourly and monthly cost estimates for all specified resources.

##### Parameters

###### request

[`EstimateBatchRequest`](../interfaces/EstimateBatchRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`EstimateBatchRequest`](../interfaces/EstimateBatchRequest.md), [`EstimateBatchResponse`](../interfaces/EstimateBatchResponse.md)\>

#### Call Signature

> **estimateBatch**(`request`, `metadata`, `options`): `Request`\<[`EstimateBatchRequest`](../interfaces/EstimateBatchRequest.md), [`EstimateBatchResponse`](../interfaces/EstimateBatchResponse.md)\>

Defined in: src/generated/nebius/billing/v1alpha1/index.ts:591

Estimates prices for multiple resources.
 Returns aggregated hourly and monthly cost estimates for all specified resources.

##### Parameters

###### request

[`EstimateBatchRequest`](../interfaces/EstimateBatchRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`EstimateBatchRequest`](../interfaces/EstimateBatchRequest.md), [`EstimateBatchResponse`](../interfaces/EstimateBatchResponse.md)\>
