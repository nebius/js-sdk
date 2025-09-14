[**@nebius/nodejs-sdk**](../../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../../README.md) / [api/nebius/msp/spark/v1alpha1](../README.md) / JobService

# Class: JobService

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:2515

## Implements

- `JobService`

## Constructors

### Constructor

> **new JobService**(`sdk`): `JobService`

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:2555

#### Parameters

##### sdk

[`SDKInterface`](../../../../../../sdk/interfaces/SDKInterface.md)

#### Returns

`JobService`

## Properties

### $type

> **$type**: `"nebius.msp.spark.v1alpha1.JobService"`

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:2516

## Methods

### cancel()

#### Call Signature

> **cancel**(`request`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`CancelJobRequest`](../interfaces/CancelJobRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:2542

Cancel the job.

##### Parameters

###### request

[`CancelJobRequest`](../interfaces/CancelJobRequest.md)

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`CancelJobRequest`](../interfaces/CancelJobRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **cancel**(`request`, `metadata`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`CancelJobRequest`](../interfaces/CancelJobRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:2543

##### Parameters

###### request

[`CancelJobRequest`](../interfaces/CancelJobRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`CancelJobRequest`](../interfaces/CancelJobRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **cancel**(`request`, `metadata`, `options`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`CancelJobRequest`](../interfaces/CancelJobRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:2544

##### Parameters

###### request

[`CancelJobRequest`](../interfaces/CancelJobRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`CancelJobRequest`](../interfaces/CancelJobRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **cancel**(`request`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`CancelJobRequest`](../interfaces/CancelJobRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:2608

Cancel the job.

##### Parameters

###### request

[`CancelJobRequest`](../interfaces/CancelJobRequest.md)

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`CancelJobRequest`](../interfaces/CancelJobRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **cancel**(`request`, `metadata`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`CancelJobRequest`](../interfaces/CancelJobRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:2609

Cancel the job.

##### Parameters

###### request

[`CancelJobRequest`](../interfaces/CancelJobRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`CancelJobRequest`](../interfaces/CancelJobRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **cancel**(`request`, `metadata`, `options`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`CancelJobRequest`](../interfaces/CancelJobRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:2610

Cancel the job.

##### Parameters

###### request

[`CancelJobRequest`](../interfaces/CancelJobRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`CancelJobRequest`](../interfaces/CancelJobRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1/interfaces/GetOperationRequest.md)\>\>

***

### create()

#### Call Signature

> **create**(`request`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`CreateJobRequest`](../interfaces/CreateJobRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:2535

Creates a job.

##### Parameters

###### request

[`CreateJobRequest`](../interfaces/CreateJobRequest.md)

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`CreateJobRequest`](../interfaces/CreateJobRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **create**(`request`, `metadata`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`CreateJobRequest`](../interfaces/CreateJobRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:2536

##### Parameters

###### request

[`CreateJobRequest`](../interfaces/CreateJobRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`CreateJobRequest`](../interfaces/CreateJobRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **create**(`request`, `metadata`, `options`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`CreateJobRequest`](../interfaces/CreateJobRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:2537

##### Parameters

###### request

[`CreateJobRequest`](../interfaces/CreateJobRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`CreateJobRequest`](../interfaces/CreateJobRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **create**(`request`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`CreateJobRequest`](../interfaces/CreateJobRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:2593

Creates a job.

##### Parameters

###### request

[`CreateJobRequest`](../interfaces/CreateJobRequest.md)

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`CreateJobRequest`](../interfaces/CreateJobRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **create**(`request`, `metadata`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`CreateJobRequest`](../interfaces/CreateJobRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:2594

Creates a job.

##### Parameters

###### request

[`CreateJobRequest`](../interfaces/CreateJobRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`CreateJobRequest`](../interfaces/CreateJobRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **create**(`request`, `metadata`, `options`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`CreateJobRequest`](../interfaces/CreateJobRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:2595

Creates a job.

##### Parameters

###### request

[`CreateJobRequest`](../interfaces/CreateJobRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`CreateJobRequest`](../interfaces/CreateJobRequest.md), [`Operation`](../../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../../common/v1/interfaces/GetOperationRequest.md)\>\>

***

### get()

#### Call Signature

> **get**(`request`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`GetJobRequest`](../interfaces/GetJobRequest.md), [`Job`](../interfaces/Job.md)\>

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:2521

Returns the specified job.

##### Parameters

###### request

[`GetJobRequest`](../interfaces/GetJobRequest.md)

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`GetJobRequest`](../interfaces/GetJobRequest.md), [`Job`](../interfaces/Job.md)\>

#### Call Signature

> **get**(`request`, `metadata`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`GetJobRequest`](../interfaces/GetJobRequest.md), [`Job`](../interfaces/Job.md)\>

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:2522

##### Parameters

###### request

[`GetJobRequest`](../interfaces/GetJobRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`GetJobRequest`](../interfaces/GetJobRequest.md), [`Job`](../interfaces/Job.md)\>

#### Call Signature

> **get**(`request`, `metadata`, `options`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`GetJobRequest`](../interfaces/GetJobRequest.md), [`Job`](../interfaces/Job.md)\>

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:2523

##### Parameters

###### request

[`GetJobRequest`](../interfaces/GetJobRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`GetJobRequest`](../interfaces/GetJobRequest.md), [`Job`](../interfaces/Job.md)\>

#### Call Signature

> **get**(`request`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`GetJobRequest`](../interfaces/GetJobRequest.md), [`Job`](../interfaces/Job.md)\>

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:2569

Returns the specified job.

##### Parameters

###### request

[`GetJobRequest`](../interfaces/GetJobRequest.md)

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`GetJobRequest`](../interfaces/GetJobRequest.md), [`Job`](../interfaces/Job.md)\>

#### Call Signature

> **get**(`request`, `metadata`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`GetJobRequest`](../interfaces/GetJobRequest.md), [`Job`](../interfaces/Job.md)\>

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:2570

Returns the specified job.

##### Parameters

###### request

[`GetJobRequest`](../interfaces/GetJobRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`GetJobRequest`](../interfaces/GetJobRequest.md), [`Job`](../interfaces/Job.md)\>

#### Call Signature

> **get**(`request`, `metadata`, `options`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`GetJobRequest`](../interfaces/GetJobRequest.md), [`Job`](../interfaces/Job.md)\>

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:2571

Returns the specified job.

##### Parameters

###### request

[`GetJobRequest`](../interfaces/GetJobRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`GetJobRequest`](../interfaces/GetJobRequest.md), [`Job`](../interfaces/Job.md)\>

***

### getOperationService()

> **getOperationService**(): [`OperationService`](../../../../common/v1/classes/OperationService.md)

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:2565

#### Returns

[`OperationService`](../../../../common/v1/classes/OperationService.md)

***

### list()

#### Call Signature

> **list**(`request`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`ListJobsRequest`](../interfaces/ListJobsRequest.md), [`ListJobsResponse`](../interfaces/ListJobsResponse.md)\>

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:2528

Retrieves a list of jobs.

##### Parameters

###### request

[`ListJobsRequest`](../interfaces/ListJobsRequest.md)

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`ListJobsRequest`](../interfaces/ListJobsRequest.md), [`ListJobsResponse`](../interfaces/ListJobsResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`ListJobsRequest`](../interfaces/ListJobsRequest.md), [`ListJobsResponse`](../interfaces/ListJobsResponse.md)\>

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:2529

##### Parameters

###### request

[`ListJobsRequest`](../interfaces/ListJobsRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`ListJobsRequest`](../interfaces/ListJobsRequest.md), [`ListJobsResponse`](../interfaces/ListJobsResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`, `options`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`ListJobsRequest`](../interfaces/ListJobsRequest.md), [`ListJobsResponse`](../interfaces/ListJobsResponse.md)\>

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:2530

##### Parameters

###### request

[`ListJobsRequest`](../interfaces/ListJobsRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`ListJobsRequest`](../interfaces/ListJobsRequest.md), [`ListJobsResponse`](../interfaces/ListJobsResponse.md)\>

#### Call Signature

> **list**(`request`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`ListJobsRequest`](../interfaces/ListJobsRequest.md), [`ListJobsResponse`](../interfaces/ListJobsResponse.md)\>

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:2581

Retrieves a list of jobs.

##### Parameters

###### request

[`ListJobsRequest`](../interfaces/ListJobsRequest.md)

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`ListJobsRequest`](../interfaces/ListJobsRequest.md), [`ListJobsResponse`](../interfaces/ListJobsResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`ListJobsRequest`](../interfaces/ListJobsRequest.md), [`ListJobsResponse`](../interfaces/ListJobsResponse.md)\>

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:2582

Retrieves a list of jobs.

##### Parameters

###### request

[`ListJobsRequest`](../interfaces/ListJobsRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`ListJobsRequest`](../interfaces/ListJobsRequest.md), [`ListJobsResponse`](../interfaces/ListJobsResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`, `options`): [`Request`](../../../../../../runtime/request/classes/Request.md)\<[`ListJobsRequest`](../interfaces/ListJobsRequest.md), [`ListJobsResponse`](../interfaces/ListJobsResponse.md)\>

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:2583

Retrieves a list of jobs.

##### Parameters

###### request

[`ListJobsRequest`](../interfaces/ListJobsRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../../runtime/request/classes/Request.md)\<[`ListJobsRequest`](../interfaces/ListJobsRequest.md), [`ListJobsResponse`](../interfaces/ListJobsResponse.md)\>
