[**@nebius/nodejs-sdk**](../../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../../README.md) / [generated/nebius/msp/serverless/v1alpha1](../README.md) / JobServiceServiceDescription

# Variable: JobServiceServiceDescription

> **JobServiceServiceDescription**: `object`

Defined in: src/generated/nebius/msp/serverless/v1alpha1/index.ts:1931

## Type Declaration

### cancel

> `readonly` **cancel**: `object`

#### cancel.path

> `readonly` **path**: `"/nebius.msp.serverless.v1alpha1.JobService/Cancel"` = `"/nebius.msp.serverless.v1alpha1.JobService/Cancel"`

#### cancel.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`CancelJobRequest`](../interfaces/CancelJobRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`CancelJobRequest`](../interfaces/CancelJobRequest.md)

#### cancel.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`CancelJobRequest`](../interfaces/CancelJobRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### cancel.requestStream

> `readonly` **requestStream**: `false` = `false`

#### cancel.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../../common/v1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../../common/v1/interfaces/Operation.md)

#### cancel.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../../common/v1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### cancel.responseStream

> `readonly` **responseStream**: `false` = `false`

### create

> `readonly` **create**: `object`

#### create.path

> `readonly` **path**: `"/nebius.msp.serverless.v1alpha1.JobService/Create"` = `"/nebius.msp.serverless.v1alpha1.JobService/Create"`

#### create.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`CreateJobRequest`](../interfaces/CreateJobRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`CreateJobRequest`](../interfaces/CreateJobRequest.md)

#### create.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`CreateJobRequest`](../interfaces/CreateJobRequest.md)

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

### delete

> `readonly` **delete**: `object`

#### delete.path

> `readonly` **path**: `"/nebius.msp.serverless.v1alpha1.JobService/Delete"` = `"/nebius.msp.serverless.v1alpha1.JobService/Delete"`

#### delete.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`DeleteRequest`](../../../v1alpha1/interfaces/DeleteRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`DeleteRequest`](../../../v1alpha1/interfaces/DeleteRequest.md)

#### delete.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`DeleteRequest`](../../../v1alpha1/interfaces/DeleteRequest.md)

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

### get

> `readonly` **get**: `object`

#### get.path

> `readonly` **path**: `"/nebius.msp.serverless.v1alpha1.JobService/Get"` = `"/nebius.msp.serverless.v1alpha1.JobService/Get"`

#### get.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetRequest`](../../../v1alpha1/interfaces/GetRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetRequest`](../../../v1alpha1/interfaces/GetRequest.md)

#### get.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetRequest`](../../../v1alpha1/interfaces/GetRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### get.requestStream

> `readonly` **requestStream**: `false` = `false`

#### get.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Job`](../interfaces/Job.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Job`](../interfaces/Job.md)

#### get.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Job`](../interfaces/Job.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### get.responseStream

> `readonly` **responseStream**: `false` = `false`

### list

> `readonly` **list**: `object`

#### list.path

> `readonly` **path**: `"/nebius.msp.serverless.v1alpha1.JobService/List"` = `"/nebius.msp.serverless.v1alpha1.JobService/List"`

#### list.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListRequest`](../../../v1alpha1/interfaces/ListRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListRequest`](../../../v1alpha1/interfaces/ListRequest.md)

#### list.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListRequest`](../../../v1alpha1/interfaces/ListRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### list.requestStream

> `readonly` **requestStream**: `false` = `false`

#### list.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListJobsResponse`](../interfaces/ListJobsResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListJobsResponse`](../interfaces/ListJobsResponse.md)

#### list.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListJobsResponse`](../interfaces/ListJobsResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### list.responseStream

> `readonly` **responseStream**: `false` = `false`
