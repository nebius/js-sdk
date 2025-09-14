[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/billing/v1alpha1](../README.md) / CalculatorServiceServiceDescription

# Variable: CalculatorServiceServiceDescription

> **CalculatorServiceServiceDescription**: `object`

Defined in: src/api/nebius/billing/v1alpha1/index.ts:505

## Type Declaration

### estimate

> `readonly` **estimate**: `object`

#### estimate.path

> `readonly` **path**: `"/nebius.billing.v1alpha1.CalculatorService/Estimate"` = `"/nebius.billing.v1alpha1.CalculatorService/Estimate"`

#### estimate.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`EstimateRequest`](../interfaces/EstimateRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`EstimateRequest`](../interfaces/EstimateRequest.md)

#### estimate.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`EstimateRequest`](../interfaces/EstimateRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### estimate.requestStream

> `readonly` **requestStream**: `false` = `false`

#### estimate.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`EstimateResponse`](../interfaces/EstimateResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`EstimateResponse`](../interfaces/EstimateResponse.md)

#### estimate.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`EstimateResponse`](../interfaces/EstimateResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### estimate.responseStream

> `readonly` **responseStream**: `false` = `false`

### estimateBatch

> `readonly` **estimateBatch**: `object`

#### estimateBatch.path

> `readonly` **path**: `"/nebius.billing.v1alpha1.CalculatorService/EstimateBatch"` = `"/nebius.billing.v1alpha1.CalculatorService/EstimateBatch"`

#### estimateBatch.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`EstimateBatchRequest`](../interfaces/EstimateBatchRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`EstimateBatchRequest`](../interfaces/EstimateBatchRequest.md)

#### estimateBatch.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`EstimateBatchRequest`](../interfaces/EstimateBatchRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### estimateBatch.requestStream

> `readonly` **requestStream**: `false` = `false`

#### estimateBatch.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`EstimateBatchResponse`](../interfaces/EstimateBatchResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`EstimateBatchResponse`](../interfaces/EstimateBatchResponse.md)

#### estimateBatch.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`EstimateBatchResponse`](../interfaces/EstimateBatchResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### estimateBatch.responseStream

> `readonly` **responseStream**: `false` = `false`
