[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/billing/v1alpha1](../README.md) / CalculatorServiceBaseClient

# Variable: CalculatorServiceBaseClient

> **CalculatorServiceBaseClient**: \{(`address`, `credentials`, `options?`): [`CalculatorServiceBaseClient`](../interfaces/CalculatorServiceBaseClient.md); `service`: `object`; `serviceName`: `string`; \}

Defined in: src/api/nebius/billing/v1alpha1/index.ts:532

## Type Declaration

## Parameters

### address

`string`

### credentials

`ChannelCredentials`

### options?

`Partial`\<`ClientOptions`\>

## Returns

[`CalculatorServiceBaseClient`](../interfaces/CalculatorServiceBaseClient.md)

### service

> **service**: `object`

#### service.estimate

> `readonly` **estimate**: `object`

#### service.estimate.path

> `readonly` **path**: `"/nebius.billing.v1alpha1.CalculatorService/Estimate"` = `"/nebius.billing.v1alpha1.CalculatorService/Estimate"`

#### service.estimate.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`EstimateRequest`](../interfaces/EstimateRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`EstimateRequest`](../interfaces/EstimateRequest.md)

#### service.estimate.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`EstimateRequest`](../interfaces/EstimateRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.estimate.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.estimate.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`EstimateResponse`](../interfaces/EstimateResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`EstimateResponse`](../interfaces/EstimateResponse.md)

#### service.estimate.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`EstimateResponse`](../interfaces/EstimateResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.estimate.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.estimateBatch

> `readonly` **estimateBatch**: `object`

#### service.estimateBatch.path

> `readonly` **path**: `"/nebius.billing.v1alpha1.CalculatorService/EstimateBatch"` = `"/nebius.billing.v1alpha1.CalculatorService/EstimateBatch"`

#### service.estimateBatch.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`EstimateBatchRequest`](../interfaces/EstimateBatchRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`EstimateBatchRequest`](../interfaces/EstimateBatchRequest.md)

#### service.estimateBatch.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`EstimateBatchRequest`](../interfaces/EstimateBatchRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.estimateBatch.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.estimateBatch.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`EstimateBatchResponse`](../interfaces/EstimateBatchResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`EstimateBatchResponse`](../interfaces/EstimateBatchResponse.md)

#### service.estimateBatch.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`EstimateBatchResponse`](../interfaces/EstimateBatchResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.estimateBatch.responseStream

> `readonly` **responseStream**: `false` = `false`

### serviceName

> **serviceName**: `string`
