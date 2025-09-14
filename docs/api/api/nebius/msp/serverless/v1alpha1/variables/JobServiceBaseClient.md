[**@nebius/nodejs-sdk**](../../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../../README.md) / [api/nebius/msp/serverless/v1alpha1](../README.md) / JobServiceBaseClient

# Variable: JobServiceBaseClient

> **JobServiceBaseClient**: \{(`address`, `credentials`, `options?`): [`JobServiceBaseClient`](../interfaces/JobServiceBaseClient.md); `service`: `object`; `serviceName`: `string`; \}

Defined in: src/api/nebius/msp/serverless/v1alpha1/index.ts:1988

## Type Declaration

## Parameters

### address

`string`

### credentials

`ChannelCredentials`

### options?

`Partial`\<`ClientOptions`\>

## Returns

[`JobServiceBaseClient`](../interfaces/JobServiceBaseClient.md)

### service

> **service**: `object`

#### service.cancel

> `readonly` **cancel**: `object`

#### service.cancel.path

> `readonly` **path**: `"/nebius.msp.serverless.v1alpha1.JobService/Cancel"` = `"/nebius.msp.serverless.v1alpha1.JobService/Cancel"`

#### service.cancel.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`CancelJobRequest`](../interfaces/CancelJobRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`CancelJobRequest`](../interfaces/CancelJobRequest.md)

#### service.cancel.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`CancelJobRequest`](../interfaces/CancelJobRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.cancel.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.cancel.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../../common/v1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../../common/v1/interfaces/Operation.md)

#### service.cancel.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../../common/v1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.cancel.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.create

> `readonly` **create**: `object`

#### service.create.path

> `readonly` **path**: `"/nebius.msp.serverless.v1alpha1.JobService/Create"` = `"/nebius.msp.serverless.v1alpha1.JobService/Create"`

#### service.create.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`CreateJobRequest`](../interfaces/CreateJobRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`CreateJobRequest`](../interfaces/CreateJobRequest.md)

#### service.create.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`CreateJobRequest`](../interfaces/CreateJobRequest.md)

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

> `readonly` **path**: `"/nebius.msp.serverless.v1alpha1.JobService/Delete"` = `"/nebius.msp.serverless.v1alpha1.JobService/Delete"`

#### service.delete.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`DeleteRequest`](../../../v1alpha1/interfaces/DeleteRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`DeleteRequest`](../../../v1alpha1/interfaces/DeleteRequest.md)

#### service.delete.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`DeleteRequest`](../../../v1alpha1/interfaces/DeleteRequest.md)

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

> `readonly` **path**: `"/nebius.msp.serverless.v1alpha1.JobService/Get"` = `"/nebius.msp.serverless.v1alpha1.JobService/Get"`

#### service.get.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetRequest`](../../../v1alpha1/interfaces/GetRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetRequest`](../../../v1alpha1/interfaces/GetRequest.md)

#### service.get.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetRequest`](../../../v1alpha1/interfaces/GetRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.get.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.get.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Job`](../interfaces/Job.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Job`](../interfaces/Job.md)

#### service.get.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Job`](../interfaces/Job.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.get.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.list

> `readonly` **list**: `object`

#### service.list.path

> `readonly` **path**: `"/nebius.msp.serverless.v1alpha1.JobService/List"` = `"/nebius.msp.serverless.v1alpha1.JobService/List"`

#### service.list.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListRequest`](../../../v1alpha1/interfaces/ListRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListRequest`](../../../v1alpha1/interfaces/ListRequest.md)

#### service.list.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListRequest`](../../../v1alpha1/interfaces/ListRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.list.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.list.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListJobsResponse`](../interfaces/ListJobsResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListJobsResponse`](../interfaces/ListJobsResponse.md)

#### service.list.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListJobsResponse`](../interfaces/ListJobsResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.list.responseStream

> `readonly` **responseStream**: `false` = `false`

### serviceName

> **serviceName**: `string`
