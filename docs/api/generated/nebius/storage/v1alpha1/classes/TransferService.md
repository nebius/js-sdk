[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/storage/v1alpha1](../README.md) / TransferService

# Class: TransferService

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:1212

## Implements

- `TransferService`

## Constructors

### Constructor

> **new TransferService**(`sdk`): `TransferService`

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:1263

#### Parameters

##### sdk

[`SDKInterface`](../../../../../sdk/interfaces/SDKInterface.md)

#### Returns

`TransferService`

## Properties

### $type

> **$type**: `"nebius.storage.v1alpha1.TransferService"`

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:1213

## Methods

### create()

#### Call Signature

> **create**(`request`): `Request`\<[`CreateTransferRequest`](../interfaces/CreateTransferRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:1223

##### Parameters

###### request

[`CreateTransferRequest`](../interfaces/CreateTransferRequest.md)

##### Returns

`Request`\<[`CreateTransferRequest`](../interfaces/CreateTransferRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **create**(`request`, `metadata`): `Request`\<[`CreateTransferRequest`](../interfaces/CreateTransferRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:1224

##### Parameters

###### request

[`CreateTransferRequest`](../interfaces/CreateTransferRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`CreateTransferRequest`](../interfaces/CreateTransferRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **create**(`request`, `metadata`, `options`): `Request`\<[`CreateTransferRequest`](../interfaces/CreateTransferRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:1225

##### Parameters

###### request

[`CreateTransferRequest`](../interfaces/CreateTransferRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`CreateTransferRequest`](../interfaces/CreateTransferRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **create**(`request`): `Request`\<[`CreateTransferRequest`](../interfaces/CreateTransferRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:1309

##### Parameters

###### request

[`CreateTransferRequest`](../interfaces/CreateTransferRequest.md)

##### Returns

`Request`\<[`CreateTransferRequest`](../interfaces/CreateTransferRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **create**(`request`, `metadata`): `Request`\<[`CreateTransferRequest`](../interfaces/CreateTransferRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:1310

##### Parameters

###### request

[`CreateTransferRequest`](../interfaces/CreateTransferRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`CreateTransferRequest`](../interfaces/CreateTransferRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **create**(`request`, `metadata`, `options`): `Request`\<[`CreateTransferRequest`](../interfaces/CreateTransferRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:1311

##### Parameters

###### request

[`CreateTransferRequest`](../interfaces/CreateTransferRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`CreateTransferRequest`](../interfaces/CreateTransferRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

***

### delete()

#### Call Signature

> **delete**(`request`): `Request`\<[`DeleteTransferRequest`](../interfaces/DeleteTransferRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:1250

Fully delete a transfer along with its history. Only stopped or failed transfers can be deleted.

##### Parameters

###### request

[`DeleteTransferRequest`](../interfaces/DeleteTransferRequest.md)

##### Returns

`Request`\<[`DeleteTransferRequest`](../interfaces/DeleteTransferRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **delete**(`request`, `metadata`): `Request`\<[`DeleteTransferRequest`](../interfaces/DeleteTransferRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:1251

##### Parameters

###### request

[`DeleteTransferRequest`](../interfaces/DeleteTransferRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`DeleteTransferRequest`](../interfaces/DeleteTransferRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **delete**(`request`, `metadata`, `options`): `Request`\<[`DeleteTransferRequest`](../interfaces/DeleteTransferRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:1252

##### Parameters

###### request

[`DeleteTransferRequest`](../interfaces/DeleteTransferRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`DeleteTransferRequest`](../interfaces/DeleteTransferRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **delete**(`request`): `Request`\<[`DeleteTransferRequest`](../interfaces/DeleteTransferRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:1369

Fully delete a transfer along with its history. Only stopped or failed transfers can be deleted.

##### Parameters

###### request

[`DeleteTransferRequest`](../interfaces/DeleteTransferRequest.md)

##### Returns

`Request`\<[`DeleteTransferRequest`](../interfaces/DeleteTransferRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **delete**(`request`, `metadata`): `Request`\<[`DeleteTransferRequest`](../interfaces/DeleteTransferRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:1370

Fully delete a transfer along with its history. Only stopped or failed transfers can be deleted.

##### Parameters

###### request

[`DeleteTransferRequest`](../interfaces/DeleteTransferRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`DeleteTransferRequest`](../interfaces/DeleteTransferRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **delete**(`request`, `metadata`, `options`): `Request`\<[`DeleteTransferRequest`](../interfaces/DeleteTransferRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:1371

Fully delete a transfer along with its history. Only stopped or failed transfers can be deleted.

##### Parameters

###### request

[`DeleteTransferRequest`](../interfaces/DeleteTransferRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`DeleteTransferRequest`](../interfaces/DeleteTransferRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

***

### get()

#### Call Signature

> **get**(`request`): `Request`\<[`GetTransferRequest`](../interfaces/GetTransferRequest.md), [`Transfer`](../interfaces/Transfer.md)\>

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:1214

##### Parameters

###### request

[`GetTransferRequest`](../interfaces/GetTransferRequest.md)

##### Returns

`Request`\<[`GetTransferRequest`](../interfaces/GetTransferRequest.md), [`Transfer`](../interfaces/Transfer.md)\>

#### Call Signature

> **get**(`request`, `metadata`): `Request`\<[`GetTransferRequest`](../interfaces/GetTransferRequest.md), [`Transfer`](../interfaces/Transfer.md)\>

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:1215

##### Parameters

###### request

[`GetTransferRequest`](../interfaces/GetTransferRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`GetTransferRequest`](../interfaces/GetTransferRequest.md), [`Transfer`](../interfaces/Transfer.md)\>

#### Call Signature

> **get**(`request`, `metadata`, `options`): `Request`\<[`GetTransferRequest`](../interfaces/GetTransferRequest.md), [`Transfer`](../interfaces/Transfer.md)\>

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:1216

##### Parameters

###### request

[`GetTransferRequest`](../interfaces/GetTransferRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`GetTransferRequest`](../interfaces/GetTransferRequest.md), [`Transfer`](../interfaces/Transfer.md)\>

#### Call Signature

> **get**(`request`): `Request`\<[`GetTransferRequest`](../interfaces/GetTransferRequest.md), [`Transfer`](../interfaces/Transfer.md)\>

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:1273

##### Parameters

###### request

[`GetTransferRequest`](../interfaces/GetTransferRequest.md)

##### Returns

`Request`\<[`GetTransferRequest`](../interfaces/GetTransferRequest.md), [`Transfer`](../interfaces/Transfer.md)\>

#### Call Signature

> **get**(`request`, `metadata`): `Request`\<[`GetTransferRequest`](../interfaces/GetTransferRequest.md), [`Transfer`](../interfaces/Transfer.md)\>

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:1274

##### Parameters

###### request

[`GetTransferRequest`](../interfaces/GetTransferRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`GetTransferRequest`](../interfaces/GetTransferRequest.md), [`Transfer`](../interfaces/Transfer.md)\>

#### Call Signature

> **get**(`request`, `metadata`, `options`): `Request`\<[`GetTransferRequest`](../interfaces/GetTransferRequest.md), [`Transfer`](../interfaces/Transfer.md)\>

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:1275

##### Parameters

###### request

[`GetTransferRequest`](../interfaces/GetTransferRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`GetTransferRequest`](../interfaces/GetTransferRequest.md), [`Transfer`](../interfaces/Transfer.md)\>

***

### getByName()

#### Call Signature

> **getByName**(`request`): `Request`\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Transfer`](../interfaces/Transfer.md)\>

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:1217

##### Parameters

###### request

[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

##### Returns

`Request`\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Transfer`](../interfaces/Transfer.md)\>

#### Call Signature

> **getByName**(`request`, `metadata`): `Request`\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Transfer`](../interfaces/Transfer.md)\>

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:1218

##### Parameters

###### request

[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Transfer`](../interfaces/Transfer.md)\>

#### Call Signature

> **getByName**(`request`, `metadata`, `options`): `Request`\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Transfer`](../interfaces/Transfer.md)\>

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:1219

##### Parameters

###### request

[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Transfer`](../interfaces/Transfer.md)\>

#### Call Signature

> **getByName**(`request`): `Request`\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Transfer`](../interfaces/Transfer.md)\>

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:1285

##### Parameters

###### request

[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

##### Returns

`Request`\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Transfer`](../interfaces/Transfer.md)\>

#### Call Signature

> **getByName**(`request`, `metadata`): `Request`\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Transfer`](../interfaces/Transfer.md)\>

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:1286

##### Parameters

###### request

[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Transfer`](../interfaces/Transfer.md)\>

#### Call Signature

> **getByName**(`request`, `metadata`, `options`): `Request`\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Transfer`](../interfaces/Transfer.md)\>

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:1287

##### Parameters

###### request

[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Transfer`](../interfaces/Transfer.md)\>

***

### getIterationHistory()

#### Call Signature

> **getIterationHistory**(`request`): `Request`\<[`GetIterationHistoryRequest`](../interfaces/GetIterationHistoryRequest.md), [`GetIterationHistoryResponse`](../interfaces/GetIterationHistoryResponse.md)\>

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:1253

##### Parameters

###### request

[`GetIterationHistoryRequest`](../interfaces/GetIterationHistoryRequest.md)

##### Returns

`Request`\<[`GetIterationHistoryRequest`](../interfaces/GetIterationHistoryRequest.md), [`GetIterationHistoryResponse`](../interfaces/GetIterationHistoryResponse.md)\>

#### Call Signature

> **getIterationHistory**(`request`, `metadata`): `Request`\<[`GetIterationHistoryRequest`](../interfaces/GetIterationHistoryRequest.md), [`GetIterationHistoryResponse`](../interfaces/GetIterationHistoryResponse.md)\>

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:1254

##### Parameters

###### request

[`GetIterationHistoryRequest`](../interfaces/GetIterationHistoryRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`GetIterationHistoryRequest`](../interfaces/GetIterationHistoryRequest.md), [`GetIterationHistoryResponse`](../interfaces/GetIterationHistoryResponse.md)\>

#### Call Signature

> **getIterationHistory**(`request`, `metadata`, `options`): `Request`\<[`GetIterationHistoryRequest`](../interfaces/GetIterationHistoryRequest.md), [`GetIterationHistoryResponse`](../interfaces/GetIterationHistoryResponse.md)\>

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:1255

##### Parameters

###### request

[`GetIterationHistoryRequest`](../interfaces/GetIterationHistoryRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`GetIterationHistoryRequest`](../interfaces/GetIterationHistoryRequest.md), [`GetIterationHistoryResponse`](../interfaces/GetIterationHistoryResponse.md)\>

#### Call Signature

> **getIterationHistory**(`request`): `Request`\<[`GetIterationHistoryRequest`](../interfaces/GetIterationHistoryRequest.md), [`GetIterationHistoryResponse`](../interfaces/GetIterationHistoryResponse.md)\>

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:1384

##### Parameters

###### request

[`GetIterationHistoryRequest`](../interfaces/GetIterationHistoryRequest.md)

##### Returns

`Request`\<[`GetIterationHistoryRequest`](../interfaces/GetIterationHistoryRequest.md), [`GetIterationHistoryResponse`](../interfaces/GetIterationHistoryResponse.md)\>

#### Call Signature

> **getIterationHistory**(`request`, `metadata`): `Request`\<[`GetIterationHistoryRequest`](../interfaces/GetIterationHistoryRequest.md), [`GetIterationHistoryResponse`](../interfaces/GetIterationHistoryResponse.md)\>

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:1385

##### Parameters

###### request

[`GetIterationHistoryRequest`](../interfaces/GetIterationHistoryRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`GetIterationHistoryRequest`](../interfaces/GetIterationHistoryRequest.md), [`GetIterationHistoryResponse`](../interfaces/GetIterationHistoryResponse.md)\>

#### Call Signature

> **getIterationHistory**(`request`, `metadata`, `options`): `Request`\<[`GetIterationHistoryRequest`](../interfaces/GetIterationHistoryRequest.md), [`GetIterationHistoryResponse`](../interfaces/GetIterationHistoryResponse.md)\>

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:1386

##### Parameters

###### request

[`GetIterationHistoryRequest`](../interfaces/GetIterationHistoryRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`GetIterationHistoryRequest`](../interfaces/GetIterationHistoryRequest.md), [`GetIterationHistoryResponse`](../interfaces/GetIterationHistoryResponse.md)\>

***

### getOperationService()

> **getOperationService**(): [`OperationService`](../../../common/v1/classes/OperationService.md)

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:1269

#### Returns

[`OperationService`](../../../common/v1/classes/OperationService.md)

***

### list()

#### Call Signature

> **list**(`request`): `Request`\<[`ListTransfersRequest`](../interfaces/ListTransfersRequest.md), [`ListTransfersResponse`](../interfaces/ListTransfersResponse.md)\>

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:1220

##### Parameters

###### request

[`ListTransfersRequest`](../interfaces/ListTransfersRequest.md)

##### Returns

`Request`\<[`ListTransfersRequest`](../interfaces/ListTransfersRequest.md), [`ListTransfersResponse`](../interfaces/ListTransfersResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`): `Request`\<[`ListTransfersRequest`](../interfaces/ListTransfersRequest.md), [`ListTransfersResponse`](../interfaces/ListTransfersResponse.md)\>

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:1221

##### Parameters

###### request

[`ListTransfersRequest`](../interfaces/ListTransfersRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`ListTransfersRequest`](../interfaces/ListTransfersRequest.md), [`ListTransfersResponse`](../interfaces/ListTransfersResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`, `options`): `Request`\<[`ListTransfersRequest`](../interfaces/ListTransfersRequest.md), [`ListTransfersResponse`](../interfaces/ListTransfersResponse.md)\>

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:1222

##### Parameters

###### request

[`ListTransfersRequest`](../interfaces/ListTransfersRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`ListTransfersRequest`](../interfaces/ListTransfersRequest.md), [`ListTransfersResponse`](../interfaces/ListTransfersResponse.md)\>

#### Call Signature

> **list**(`request`): `Request`\<[`ListTransfersRequest`](../interfaces/ListTransfersRequest.md), [`ListTransfersResponse`](../interfaces/ListTransfersResponse.md)\>

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:1297

##### Parameters

###### request

[`ListTransfersRequest`](../interfaces/ListTransfersRequest.md)

##### Returns

`Request`\<[`ListTransfersRequest`](../interfaces/ListTransfersRequest.md), [`ListTransfersResponse`](../interfaces/ListTransfersResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`): `Request`\<[`ListTransfersRequest`](../interfaces/ListTransfersRequest.md), [`ListTransfersResponse`](../interfaces/ListTransfersResponse.md)\>

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:1298

##### Parameters

###### request

[`ListTransfersRequest`](../interfaces/ListTransfersRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`ListTransfersRequest`](../interfaces/ListTransfersRequest.md), [`ListTransfersResponse`](../interfaces/ListTransfersResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`, `options`): `Request`\<[`ListTransfersRequest`](../interfaces/ListTransfersRequest.md), [`ListTransfersResponse`](../interfaces/ListTransfersResponse.md)\>

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:1299

##### Parameters

###### request

[`ListTransfersRequest`](../interfaces/ListTransfersRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`ListTransfersRequest`](../interfaces/ListTransfersRequest.md), [`ListTransfersResponse`](../interfaces/ListTransfersResponse.md)\>

***

### resume()

#### Call Signature

> **resume**(`request`): `Request`\<[`ResumeTransferRequest`](../interfaces/ResumeTransferRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:1243

Resume stopped or failed transfer.

##### Parameters

###### request

[`ResumeTransferRequest`](../interfaces/ResumeTransferRequest.md)

##### Returns

`Request`\<[`ResumeTransferRequest`](../interfaces/ResumeTransferRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **resume**(`request`, `metadata`): `Request`\<[`ResumeTransferRequest`](../interfaces/ResumeTransferRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:1244

##### Parameters

###### request

[`ResumeTransferRequest`](../interfaces/ResumeTransferRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`ResumeTransferRequest`](../interfaces/ResumeTransferRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **resume**(`request`, `metadata`, `options`): `Request`\<[`ResumeTransferRequest`](../interfaces/ResumeTransferRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:1245

##### Parameters

###### request

[`ResumeTransferRequest`](../interfaces/ResumeTransferRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`ResumeTransferRequest`](../interfaces/ResumeTransferRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **resume**(`request`): `Request`\<[`ResumeTransferRequest`](../interfaces/ResumeTransferRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:1354

Resume stopped or failed transfer.

##### Parameters

###### request

[`ResumeTransferRequest`](../interfaces/ResumeTransferRequest.md)

##### Returns

`Request`\<[`ResumeTransferRequest`](../interfaces/ResumeTransferRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **resume**(`request`, `metadata`): `Request`\<[`ResumeTransferRequest`](../interfaces/ResumeTransferRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:1355

Resume stopped or failed transfer.

##### Parameters

###### request

[`ResumeTransferRequest`](../interfaces/ResumeTransferRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`ResumeTransferRequest`](../interfaces/ResumeTransferRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **resume**(`request`, `metadata`, `options`): `Request`\<[`ResumeTransferRequest`](../interfaces/ResumeTransferRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:1356

Resume stopped or failed transfer.

##### Parameters

###### request

[`ResumeTransferRequest`](../interfaces/ResumeTransferRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`ResumeTransferRequest`](../interfaces/ResumeTransferRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

***

### stop()

#### Call Signature

> **stop**(`request`): `Request`\<[`StopTransferRequest`](../interfaces/StopTransferRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:1236

Stop active transfer. If the transfer is currently moving data,
 it will be transitioned to the Stopping state and will move to the Stopped state once all processes have been stopped.
 If the transfer is waiting between iterations, it will stop immediately.
 Only transfer in Active state can be stopped.

##### Parameters

###### request

[`StopTransferRequest`](../interfaces/StopTransferRequest.md)

##### Returns

`Request`\<[`StopTransferRequest`](../interfaces/StopTransferRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **stop**(`request`, `metadata`): `Request`\<[`StopTransferRequest`](../interfaces/StopTransferRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:1237

##### Parameters

###### request

[`StopTransferRequest`](../interfaces/StopTransferRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`StopTransferRequest`](../interfaces/StopTransferRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **stop**(`request`, `metadata`, `options`): `Request`\<[`StopTransferRequest`](../interfaces/StopTransferRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:1238

##### Parameters

###### request

[`StopTransferRequest`](../interfaces/StopTransferRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`StopTransferRequest`](../interfaces/StopTransferRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **stop**(`request`): `Request`\<[`StopTransferRequest`](../interfaces/StopTransferRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:1339

Stop active transfer. If the transfer is currently moving data,
 it will be transitioned to the Stopping state and will move to the Stopped state once all processes have been stopped.
 If the transfer is waiting between iterations, it will stop immediately.
 Only transfer in Active state can be stopped.

##### Parameters

###### request

[`StopTransferRequest`](../interfaces/StopTransferRequest.md)

##### Returns

`Request`\<[`StopTransferRequest`](../interfaces/StopTransferRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **stop**(`request`, `metadata`): `Request`\<[`StopTransferRequest`](../interfaces/StopTransferRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:1340

Stop active transfer. If the transfer is currently moving data,
 it will be transitioned to the Stopping state and will move to the Stopped state once all processes have been stopped.
 If the transfer is waiting between iterations, it will stop immediately.
 Only transfer in Active state can be stopped.

##### Parameters

###### request

[`StopTransferRequest`](../interfaces/StopTransferRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`StopTransferRequest`](../interfaces/StopTransferRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **stop**(`request`, `metadata`, `options`): `Request`\<[`StopTransferRequest`](../interfaces/StopTransferRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:1341

Stop active transfer. If the transfer is currently moving data,
 it will be transitioned to the Stopping state and will move to the Stopped state once all processes have been stopped.
 If the transfer is waiting between iterations, it will stop immediately.
 Only transfer in Active state can be stopped.

##### Parameters

###### request

[`StopTransferRequest`](../interfaces/StopTransferRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`StopTransferRequest`](../interfaces/StopTransferRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

***

### update()

#### Call Signature

> **update**(`request`): `Request`\<[`UpdateTransferRequest`](../interfaces/UpdateTransferRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:1226

##### Parameters

###### request

[`UpdateTransferRequest`](../interfaces/UpdateTransferRequest.md)

##### Returns

`Request`\<[`UpdateTransferRequest`](../interfaces/UpdateTransferRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **update**(`request`, `metadata`): `Request`\<[`UpdateTransferRequest`](../interfaces/UpdateTransferRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:1227

##### Parameters

###### request

[`UpdateTransferRequest`](../interfaces/UpdateTransferRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`UpdateTransferRequest`](../interfaces/UpdateTransferRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **update**(`request`, `metadata`, `options`): `Request`\<[`UpdateTransferRequest`](../interfaces/UpdateTransferRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:1228

##### Parameters

###### request

[`UpdateTransferRequest`](../interfaces/UpdateTransferRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`UpdateTransferRequest`](../interfaces/UpdateTransferRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **update**(`request`): `Request`\<[`UpdateTransferRequest`](../interfaces/UpdateTransferRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:1324

##### Parameters

###### request

[`UpdateTransferRequest`](../interfaces/UpdateTransferRequest.md)

##### Returns

`Request`\<[`UpdateTransferRequest`](../interfaces/UpdateTransferRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **update**(`request`, `metadata`): `Request`\<[`UpdateTransferRequest`](../interfaces/UpdateTransferRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:1325

##### Parameters

###### request

[`UpdateTransferRequest`](../interfaces/UpdateTransferRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`UpdateTransferRequest`](../interfaces/UpdateTransferRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **update**(`request`, `metadata`, `options`): `Request`\<[`UpdateTransferRequest`](../interfaces/UpdateTransferRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/storage/v1alpha1/index.ts:1326

##### Parameters

###### request

[`UpdateTransferRequest`](../interfaces/UpdateTransferRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`UpdateTransferRequest`](../interfaces/UpdateTransferRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>
