[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/storage/v1alpha1](../README.md) / TransferServiceBaseClient

# Variable: TransferServiceBaseClient

> **TransferServiceBaseClient**: \{(`address`, `credentials`, `options?`): [`TransferServiceBaseClient`](../interfaces/TransferServiceBaseClient.md); `service`: `object`; `serviceName`: `string`; \}

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:1185

## Type Declaration

## Parameters

### address

`string`

### credentials

`ChannelCredentials`

### options?

`Partial`\<`ClientOptions`\>

## Returns

[`TransferServiceBaseClient`](../interfaces/TransferServiceBaseClient.md)

### service

> **service**: `object`

#### service.create

> `readonly` **create**: `object`

#### service.create.path

> `readonly` **path**: `"/nebius.storage.v1alpha1.TransferService/Create"` = `"/nebius.storage.v1alpha1.TransferService/Create"`

#### service.create.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`CreateTransferRequest`](../interfaces/CreateTransferRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`CreateTransferRequest`](../interfaces/CreateTransferRequest.md)

#### service.create.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`CreateTransferRequest`](../interfaces/CreateTransferRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.create.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.create.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../common/v1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../common/v1/interfaces/Operation.md)

#### service.create.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../common/v1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.create.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.delete

> `readonly` **delete**: `object`

#### service.delete.path

> `readonly` **path**: `"/nebius.storage.v1alpha1.TransferService/Delete"` = `"/nebius.storage.v1alpha1.TransferService/Delete"`

#### service.delete.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`DeleteTransferRequest`](../interfaces/DeleteTransferRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`DeleteTransferRequest`](../interfaces/DeleteTransferRequest.md)

#### service.delete.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`DeleteTransferRequest`](../interfaces/DeleteTransferRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.delete.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.delete.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../common/v1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../common/v1/interfaces/Operation.md)

#### service.delete.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../common/v1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.delete.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.get

> `readonly` **get**: `object`

#### service.get.path

> `readonly` **path**: `"/nebius.storage.v1alpha1.TransferService/Get"` = `"/nebius.storage.v1alpha1.TransferService/Get"`

#### service.get.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetTransferRequest`](../interfaces/GetTransferRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetTransferRequest`](../interfaces/GetTransferRequest.md)

#### service.get.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetTransferRequest`](../interfaces/GetTransferRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.get.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.get.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Transfer`](../interfaces/Transfer.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Transfer`](../interfaces/Transfer.md)

#### service.get.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Transfer`](../interfaces/Transfer.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.get.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.getByName

> `readonly` **getByName**: `object`

#### service.getByName.path

> `readonly` **path**: `"/nebius.storage.v1alpha1.TransferService/GetByName"` = `"/nebius.storage.v1alpha1.TransferService/GetByName"`

#### service.getByName.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

#### service.getByName.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.getByName.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.getByName.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Transfer`](../interfaces/Transfer.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Transfer`](../interfaces/Transfer.md)

#### service.getByName.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Transfer`](../interfaces/Transfer.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.getByName.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.getIterationHistory

> `readonly` **getIterationHistory**: `object`

#### service.getIterationHistory.path

> `readonly` **path**: `"/nebius.storage.v1alpha1.TransferService/GetIterationHistory"` = `"/nebius.storage.v1alpha1.TransferService/GetIterationHistory"`

#### service.getIterationHistory.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetIterationHistoryRequest`](../interfaces/GetIterationHistoryRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetIterationHistoryRequest`](../interfaces/GetIterationHistoryRequest.md)

#### service.getIterationHistory.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetIterationHistoryRequest`](../interfaces/GetIterationHistoryRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.getIterationHistory.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.getIterationHistory.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`GetIterationHistoryResponse`](../interfaces/GetIterationHistoryResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetIterationHistoryResponse`](../interfaces/GetIterationHistoryResponse.md)

#### service.getIterationHistory.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetIterationHistoryResponse`](../interfaces/GetIterationHistoryResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.getIterationHistory.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.list

> `readonly` **list**: `object`

#### service.list.path

> `readonly` **path**: `"/nebius.storage.v1alpha1.TransferService/List"` = `"/nebius.storage.v1alpha1.TransferService/List"`

#### service.list.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListTransfersRequest`](../interfaces/ListTransfersRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListTransfersRequest`](../interfaces/ListTransfersRequest.md)

#### service.list.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListTransfersRequest`](../interfaces/ListTransfersRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.list.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.list.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListTransfersResponse`](../interfaces/ListTransfersResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListTransfersResponse`](../interfaces/ListTransfersResponse.md)

#### service.list.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListTransfersResponse`](../interfaces/ListTransfersResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.list.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.resume

> `readonly` **resume**: `object`

#### service.resume.path

> `readonly` **path**: `"/nebius.storage.v1alpha1.TransferService/Resume"` = `"/nebius.storage.v1alpha1.TransferService/Resume"`

#### service.resume.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ResumeTransferRequest`](../interfaces/ResumeTransferRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ResumeTransferRequest`](../interfaces/ResumeTransferRequest.md)

#### service.resume.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ResumeTransferRequest`](../interfaces/ResumeTransferRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.resume.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.resume.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../common/v1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../common/v1/interfaces/Operation.md)

#### service.resume.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../common/v1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.resume.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.stop

> `readonly` **stop**: `object`

#### service.stop.path

> `readonly` **path**: `"/nebius.storage.v1alpha1.TransferService/Stop"` = `"/nebius.storage.v1alpha1.TransferService/Stop"`

#### service.stop.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`StopTransferRequest`](../interfaces/StopTransferRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`StopTransferRequest`](../interfaces/StopTransferRequest.md)

#### service.stop.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`StopTransferRequest`](../interfaces/StopTransferRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.stop.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.stop.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../common/v1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../common/v1/interfaces/Operation.md)

#### service.stop.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../common/v1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.stop.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.update

> `readonly` **update**: `object`

#### service.update.path

> `readonly` **path**: `"/nebius.storage.v1alpha1.TransferService/Update"` = `"/nebius.storage.v1alpha1.TransferService/Update"`

#### service.update.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`UpdateTransferRequest`](../interfaces/UpdateTransferRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`UpdateTransferRequest`](../interfaces/UpdateTransferRequest.md)

#### service.update.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`UpdateTransferRequest`](../interfaces/UpdateTransferRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.update.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.update.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../common/v1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../common/v1/interfaces/Operation.md)

#### service.update.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../common/v1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.update.responseStream

> `readonly` **responseStream**: `false` = `false`

### serviceName

> **serviceName**: `string`
