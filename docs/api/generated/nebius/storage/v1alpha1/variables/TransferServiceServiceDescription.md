[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/storage/v1alpha1](../README.md) / TransferServiceServiceDescription

# Variable: TransferServiceServiceDescription

> **TransferServiceServiceDescription**: `object`

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:1088

## Type Declaration

### create

> `readonly` **create**: `object`

#### create.path

> `readonly` **path**: `"/nebius.storage.v1alpha1.TransferService/Create"` = `"/nebius.storage.v1alpha1.TransferService/Create"`

#### create.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`CreateTransferRequest`](../interfaces/CreateTransferRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`CreateTransferRequest`](../interfaces/CreateTransferRequest.md)

#### create.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`CreateTransferRequest`](../interfaces/CreateTransferRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### create.requestStream

> `readonly` **requestStream**: `false` = `false`

#### create.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../common/v1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../common/v1/interfaces/Operation.md)

#### create.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../common/v1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### create.responseStream

> `readonly` **responseStream**: `false` = `false`

### delete

> `readonly` **delete**: `object`

#### delete.path

> `readonly` **path**: `"/nebius.storage.v1alpha1.TransferService/Delete"` = `"/nebius.storage.v1alpha1.TransferService/Delete"`

#### delete.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`DeleteTransferRequest`](../interfaces/DeleteTransferRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`DeleteTransferRequest`](../interfaces/DeleteTransferRequest.md)

#### delete.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`DeleteTransferRequest`](../interfaces/DeleteTransferRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### delete.requestStream

> `readonly` **requestStream**: `false` = `false`

#### delete.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../common/v1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../common/v1/interfaces/Operation.md)

#### delete.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../common/v1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### delete.responseStream

> `readonly` **responseStream**: `false` = `false`

### get

> `readonly` **get**: `object`

#### get.path

> `readonly` **path**: `"/nebius.storage.v1alpha1.TransferService/Get"` = `"/nebius.storage.v1alpha1.TransferService/Get"`

#### get.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetTransferRequest`](../interfaces/GetTransferRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetTransferRequest`](../interfaces/GetTransferRequest.md)

#### get.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetTransferRequest`](../interfaces/GetTransferRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### get.requestStream

> `readonly` **requestStream**: `false` = `false`

#### get.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Transfer`](../interfaces/Transfer.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Transfer`](../interfaces/Transfer.md)

#### get.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Transfer`](../interfaces/Transfer.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### get.responseStream

> `readonly` **responseStream**: `false` = `false`

### getByName

> `readonly` **getByName**: `object`

#### getByName.path

> `readonly` **path**: `"/nebius.storage.v1alpha1.TransferService/GetByName"` = `"/nebius.storage.v1alpha1.TransferService/GetByName"`

#### getByName.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

#### getByName.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### getByName.requestStream

> `readonly` **requestStream**: `false` = `false`

#### getByName.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Transfer`](../interfaces/Transfer.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Transfer`](../interfaces/Transfer.md)

#### getByName.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Transfer`](../interfaces/Transfer.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### getByName.responseStream

> `readonly` **responseStream**: `false` = `false`

### getIterationHistory

> `readonly` **getIterationHistory**: `object`

#### getIterationHistory.path

> `readonly` **path**: `"/nebius.storage.v1alpha1.TransferService/GetIterationHistory"` = `"/nebius.storage.v1alpha1.TransferService/GetIterationHistory"`

#### getIterationHistory.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetIterationHistoryRequest`](../interfaces/GetIterationHistoryRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetIterationHistoryRequest`](../interfaces/GetIterationHistoryRequest.md)

#### getIterationHistory.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetIterationHistoryRequest`](../interfaces/GetIterationHistoryRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### getIterationHistory.requestStream

> `readonly` **requestStream**: `false` = `false`

#### getIterationHistory.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`GetIterationHistoryResponse`](../interfaces/GetIterationHistoryResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetIterationHistoryResponse`](../interfaces/GetIterationHistoryResponse.md)

#### getIterationHistory.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetIterationHistoryResponse`](../interfaces/GetIterationHistoryResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### getIterationHistory.responseStream

> `readonly` **responseStream**: `false` = `false`

### list

> `readonly` **list**: `object`

#### list.path

> `readonly` **path**: `"/nebius.storage.v1alpha1.TransferService/List"` = `"/nebius.storage.v1alpha1.TransferService/List"`

#### list.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListTransfersRequest`](../interfaces/ListTransfersRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListTransfersRequest`](../interfaces/ListTransfersRequest.md)

#### list.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListTransfersRequest`](../interfaces/ListTransfersRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### list.requestStream

> `readonly` **requestStream**: `false` = `false`

#### list.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListTransfersResponse`](../interfaces/ListTransfersResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListTransfersResponse`](../interfaces/ListTransfersResponse.md)

#### list.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListTransfersResponse`](../interfaces/ListTransfersResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### list.responseStream

> `readonly` **responseStream**: `false` = `false`

### resume

> `readonly` **resume**: `object`

#### resume.path

> `readonly` **path**: `"/nebius.storage.v1alpha1.TransferService/Resume"` = `"/nebius.storage.v1alpha1.TransferService/Resume"`

#### resume.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ResumeTransferRequest`](../interfaces/ResumeTransferRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ResumeTransferRequest`](../interfaces/ResumeTransferRequest.md)

#### resume.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ResumeTransferRequest`](../interfaces/ResumeTransferRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### resume.requestStream

> `readonly` **requestStream**: `false` = `false`

#### resume.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../common/v1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../common/v1/interfaces/Operation.md)

#### resume.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../common/v1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### resume.responseStream

> `readonly` **responseStream**: `false` = `false`

### stop

> `readonly` **stop**: `object`

#### stop.path

> `readonly` **path**: `"/nebius.storage.v1alpha1.TransferService/Stop"` = `"/nebius.storage.v1alpha1.TransferService/Stop"`

#### stop.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`StopTransferRequest`](../interfaces/StopTransferRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`StopTransferRequest`](../interfaces/StopTransferRequest.md)

#### stop.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`StopTransferRequest`](../interfaces/StopTransferRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### stop.requestStream

> `readonly` **requestStream**: `false` = `false`

#### stop.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../common/v1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../common/v1/interfaces/Operation.md)

#### stop.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../common/v1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### stop.responseStream

> `readonly` **responseStream**: `false` = `false`

### update

> `readonly` **update**: `object`

#### update.path

> `readonly` **path**: `"/nebius.storage.v1alpha1.TransferService/Update"` = `"/nebius.storage.v1alpha1.TransferService/Update"`

#### update.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`UpdateTransferRequest`](../interfaces/UpdateTransferRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`UpdateTransferRequest`](../interfaces/UpdateTransferRequest.md)

#### update.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`UpdateTransferRequest`](../interfaces/UpdateTransferRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### update.requestStream

> `readonly` **requestStream**: `false` = `false`

#### update.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../common/v1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../common/v1/interfaces/Operation.md)

#### update.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../common/v1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### update.responseStream

> `readonly` **responseStream**: `false` = `false`
