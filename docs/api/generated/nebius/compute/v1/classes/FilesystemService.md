[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/compute/v1](../README.md) / FilesystemService

# Class: FilesystemService

Defined in: src/generated/nebius/compute/v1/index.ts:2722

## Implements

- `FilesystemService`

## Constructors

### Constructor

> **new FilesystemService**(`sdk`): `FilesystemService`

Defined in: src/generated/nebius/compute/v1/index.ts:2782

#### Parameters

##### sdk

[`SDKInterface`](../../../../../sdk/interfaces/SDKInterface.md)

#### Returns

`FilesystemService`

## Properties

### $type

> **$type**: `"nebius.compute.v1.FilesystemService"`

Defined in: src/generated/nebius/compute/v1/index.ts:2723

## Methods

### create()

#### Call Signature

> **create**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`CreateFilesystemRequest`](../interfaces/CreateFilesystemRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/compute/v1/index.ts:2750

Creates a new filesystem with the specified configuration.
For details, see https://docs.nebius.com/compute/storage/manage

##### Parameters

###### request

[`CreateFilesystemRequest`](../interfaces/CreateFilesystemRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`CreateFilesystemRequest`](../interfaces/CreateFilesystemRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **create**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`CreateFilesystemRequest`](../interfaces/CreateFilesystemRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/compute/v1/index.ts:2751

##### Parameters

###### request

[`CreateFilesystemRequest`](../interfaces/CreateFilesystemRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`CreateFilesystemRequest`](../interfaces/CreateFilesystemRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **create**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`CreateFilesystemRequest`](../interfaces/CreateFilesystemRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/compute/v1/index.ts:2752

##### Parameters

###### request

[`CreateFilesystemRequest`](../interfaces/CreateFilesystemRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`CreateFilesystemRequest`](../interfaces/CreateFilesystemRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **create**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`CreateFilesystemRequest`](../interfaces/CreateFilesystemRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/compute/v1/index.ts:2828

Creates a new filesystem with the specified configuration.
For details, see https://docs.nebius.com/compute/storage/manage

##### Parameters

###### request

[`CreateFilesystemRequest`](../interfaces/CreateFilesystemRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`CreateFilesystemRequest`](../interfaces/CreateFilesystemRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **create**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`CreateFilesystemRequest`](../interfaces/CreateFilesystemRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/compute/v1/index.ts:2829

Creates a new filesystem with the specified configuration.
For details, see https://docs.nebius.com/compute/storage/manage

##### Parameters

###### request

[`CreateFilesystemRequest`](../interfaces/CreateFilesystemRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`CreateFilesystemRequest`](../interfaces/CreateFilesystemRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **create**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`CreateFilesystemRequest`](../interfaces/CreateFilesystemRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/compute/v1/index.ts:2830

Creates a new filesystem with the specified configuration.
For details, see https://docs.nebius.com/compute/storage/manage

##### Parameters

###### request

[`CreateFilesystemRequest`](../interfaces/CreateFilesystemRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`CreateFilesystemRequest`](../interfaces/CreateFilesystemRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

---

### delete()

#### Call Signature

> **delete**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteFilesystemRequest`](../interfaces/DeleteFilesystemRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/compute/v1/index.ts:2765

Deletes a disk by its ID.

##### Parameters

###### request

[`DeleteFilesystemRequest`](../interfaces/DeleteFilesystemRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteFilesystemRequest`](../interfaces/DeleteFilesystemRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **delete**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteFilesystemRequest`](../interfaces/DeleteFilesystemRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/compute/v1/index.ts:2766

##### Parameters

###### request

[`DeleteFilesystemRequest`](../interfaces/DeleteFilesystemRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteFilesystemRequest`](../interfaces/DeleteFilesystemRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **delete**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteFilesystemRequest`](../interfaces/DeleteFilesystemRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/compute/v1/index.ts:2767

##### Parameters

###### request

[`DeleteFilesystemRequest`](../interfaces/DeleteFilesystemRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteFilesystemRequest`](../interfaces/DeleteFilesystemRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **delete**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteFilesystemRequest`](../interfaces/DeleteFilesystemRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/compute/v1/index.ts:2858

Deletes a disk by its ID.

##### Parameters

###### request

[`DeleteFilesystemRequest`](../interfaces/DeleteFilesystemRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteFilesystemRequest`](../interfaces/DeleteFilesystemRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **delete**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteFilesystemRequest`](../interfaces/DeleteFilesystemRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/compute/v1/index.ts:2859

Deletes a disk by its ID.

##### Parameters

###### request

[`DeleteFilesystemRequest`](../interfaces/DeleteFilesystemRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteFilesystemRequest`](../interfaces/DeleteFilesystemRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **delete**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteFilesystemRequest`](../interfaces/DeleteFilesystemRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/compute/v1/index.ts:2860

Deletes a disk by its ID.

##### Parameters

###### request

[`DeleteFilesystemRequest`](../interfaces/DeleteFilesystemRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteFilesystemRequest`](../interfaces/DeleteFilesystemRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

---

### get()

#### Call Signature

> **get**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetFilesystemRequest`](../interfaces/GetFilesystemRequest.md), [`Filesystem`](../interfaces/Filesystem.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:2728

Retrieves information about a filesystem by its ID.

##### Parameters

###### request

[`GetFilesystemRequest`](../interfaces/GetFilesystemRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetFilesystemRequest`](../interfaces/GetFilesystemRequest.md), [`Filesystem`](../interfaces/Filesystem.md)\>

#### Call Signature

> **get**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetFilesystemRequest`](../interfaces/GetFilesystemRequest.md), [`Filesystem`](../interfaces/Filesystem.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:2729

##### Parameters

###### request

[`GetFilesystemRequest`](../interfaces/GetFilesystemRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetFilesystemRequest`](../interfaces/GetFilesystemRequest.md), [`Filesystem`](../interfaces/Filesystem.md)\>

#### Call Signature

> **get**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetFilesystemRequest`](../interfaces/GetFilesystemRequest.md), [`Filesystem`](../interfaces/Filesystem.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:2730

##### Parameters

###### request

[`GetFilesystemRequest`](../interfaces/GetFilesystemRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetFilesystemRequest`](../interfaces/GetFilesystemRequest.md), [`Filesystem`](../interfaces/Filesystem.md)\>

#### Call Signature

> **get**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetFilesystemRequest`](../interfaces/GetFilesystemRequest.md), [`Filesystem`](../interfaces/Filesystem.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:2792

Retrieves information about a filesystem by its ID.

##### Parameters

###### request

[`GetFilesystemRequest`](../interfaces/GetFilesystemRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetFilesystemRequest`](../interfaces/GetFilesystemRequest.md), [`Filesystem`](../interfaces/Filesystem.md)\>

#### Call Signature

> **get**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetFilesystemRequest`](../interfaces/GetFilesystemRequest.md), [`Filesystem`](../interfaces/Filesystem.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:2793

Retrieves information about a filesystem by its ID.

##### Parameters

###### request

[`GetFilesystemRequest`](../interfaces/GetFilesystemRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetFilesystemRequest`](../interfaces/GetFilesystemRequest.md), [`Filesystem`](../interfaces/Filesystem.md)\>

#### Call Signature

> **get**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetFilesystemRequest`](../interfaces/GetFilesystemRequest.md), [`Filesystem`](../interfaces/Filesystem.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:2794

Retrieves information about a filesystem by its ID.

##### Parameters

###### request

[`GetFilesystemRequest`](../interfaces/GetFilesystemRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetFilesystemRequest`](../interfaces/GetFilesystemRequest.md), [`Filesystem`](../interfaces/Filesystem.md)\>

---

### getByName()

#### Call Signature

> **getByName**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Filesystem`](../interfaces/Filesystem.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:2735

Retrieves information about a filesystem by its parent and name.

##### Parameters

###### request

[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Filesystem`](../interfaces/Filesystem.md)\>

#### Call Signature

> **getByName**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Filesystem`](../interfaces/Filesystem.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:2736

##### Parameters

###### request

[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Filesystem`](../interfaces/Filesystem.md)\>

#### Call Signature

> **getByName**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Filesystem`](../interfaces/Filesystem.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:2737

##### Parameters

###### request

[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Filesystem`](../interfaces/Filesystem.md)\>

#### Call Signature

> **getByName**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Filesystem`](../interfaces/Filesystem.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:2804

Retrieves information about a filesystem by its parent and name.

##### Parameters

###### request

[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Filesystem`](../interfaces/Filesystem.md)\>

#### Call Signature

> **getByName**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Filesystem`](../interfaces/Filesystem.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:2805

Retrieves information about a filesystem by its parent and name.

##### Parameters

###### request

[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Filesystem`](../interfaces/Filesystem.md)\>

#### Call Signature

> **getByName**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Filesystem`](../interfaces/Filesystem.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:2806

Retrieves information about a filesystem by its parent and name.

##### Parameters

###### request

[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Filesystem`](../interfaces/Filesystem.md)\>

---

### getOperationService()

> **getOperationService**(): [`OperationService`](../../../common/v1/classes/OperationService.md)

Defined in: src/generated/nebius/compute/v1/index.ts:2788

#### Returns

[`OperationService`](../../../common/v1/classes/OperationService.md)

---

### list()

#### Call Signature

> **list**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListFilesystemsRequest`](../interfaces/ListFilesystemsRequest.md), [`ListFilesystemsResponse`](../interfaces/ListFilesystemsResponse.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:2742

Lists all filesystems within a specified parent.

##### Parameters

###### request

[`ListFilesystemsRequest`](../interfaces/ListFilesystemsRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListFilesystemsRequest`](../interfaces/ListFilesystemsRequest.md), [`ListFilesystemsResponse`](../interfaces/ListFilesystemsResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListFilesystemsRequest`](../interfaces/ListFilesystemsRequest.md), [`ListFilesystemsResponse`](../interfaces/ListFilesystemsResponse.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:2743

##### Parameters

###### request

[`ListFilesystemsRequest`](../interfaces/ListFilesystemsRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListFilesystemsRequest`](../interfaces/ListFilesystemsRequest.md), [`ListFilesystemsResponse`](../interfaces/ListFilesystemsResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListFilesystemsRequest`](../interfaces/ListFilesystemsRequest.md), [`ListFilesystemsResponse`](../interfaces/ListFilesystemsResponse.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:2744

##### Parameters

###### request

[`ListFilesystemsRequest`](../interfaces/ListFilesystemsRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListFilesystemsRequest`](../interfaces/ListFilesystemsRequest.md), [`ListFilesystemsResponse`](../interfaces/ListFilesystemsResponse.md)\>

#### Call Signature

> **list**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListFilesystemsRequest`](../interfaces/ListFilesystemsRequest.md), [`ListFilesystemsResponse`](../interfaces/ListFilesystemsResponse.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:2816

Lists all filesystems within a specified parent.

##### Parameters

###### request

[`ListFilesystemsRequest`](../interfaces/ListFilesystemsRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListFilesystemsRequest`](../interfaces/ListFilesystemsRequest.md), [`ListFilesystemsResponse`](../interfaces/ListFilesystemsResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListFilesystemsRequest`](../interfaces/ListFilesystemsRequest.md), [`ListFilesystemsResponse`](../interfaces/ListFilesystemsResponse.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:2817

Lists all filesystems within a specified parent.

##### Parameters

###### request

[`ListFilesystemsRequest`](../interfaces/ListFilesystemsRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListFilesystemsRequest`](../interfaces/ListFilesystemsRequest.md), [`ListFilesystemsResponse`](../interfaces/ListFilesystemsResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListFilesystemsRequest`](../interfaces/ListFilesystemsRequest.md), [`ListFilesystemsResponse`](../interfaces/ListFilesystemsResponse.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:2818

Lists all filesystems within a specified parent.

##### Parameters

###### request

[`ListFilesystemsRequest`](../interfaces/ListFilesystemsRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListFilesystemsRequest`](../interfaces/ListFilesystemsRequest.md), [`ListFilesystemsResponse`](../interfaces/ListFilesystemsResponse.md)\>

---

### listOperationsByParent()

#### Call Signature

> **listOperationsByParent**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md), [`ListOperationsResponse`](../../../common/v1/interfaces/ListOperationsResponse.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:2772

Lists all operations that were performed within a specific parent resource.

##### Parameters

###### request

[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md), [`ListOperationsResponse`](../../../common/v1/interfaces/ListOperationsResponse.md)\>

#### Call Signature

> **listOperationsByParent**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md), [`ListOperationsResponse`](../../../common/v1/interfaces/ListOperationsResponse.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:2773

##### Parameters

###### request

[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md), [`ListOperationsResponse`](../../../common/v1/interfaces/ListOperationsResponse.md)\>

#### Call Signature

> **listOperationsByParent**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md), [`ListOperationsResponse`](../../../common/v1/interfaces/ListOperationsResponse.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:2774

##### Parameters

###### request

[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md), [`ListOperationsResponse`](../../../common/v1/interfaces/ListOperationsResponse.md)\>

#### Call Signature

> **listOperationsByParent**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md), [`ListOperationsResponse`](../../../common/v1/interfaces/ListOperationsResponse.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:2873

Lists all operations that were performed within a specific parent resource.

##### Parameters

###### request

[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md), [`ListOperationsResponse`](../../../common/v1/interfaces/ListOperationsResponse.md)\>

#### Call Signature

> **listOperationsByParent**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md), [`ListOperationsResponse`](../../../common/v1/interfaces/ListOperationsResponse.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:2874

Lists all operations that were performed within a specific parent resource.

##### Parameters

###### request

[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md), [`ListOperationsResponse`](../../../common/v1/interfaces/ListOperationsResponse.md)\>

#### Call Signature

> **listOperationsByParent**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md), [`ListOperationsResponse`](../../../common/v1/interfaces/ListOperationsResponse.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:2875

Lists all operations that were performed within a specific parent resource.

##### Parameters

###### request

[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md), [`ListOperationsResponse`](../../../common/v1/interfaces/ListOperationsResponse.md)\>

---

### update()

#### Call Signature

> **update**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`UpdateFilesystemRequest`](../interfaces/UpdateFilesystemRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/compute/v1/index.ts:2758

Updates an existing filesystem with new configuration parameters.
For details, see https://docs.nebius.com/compute/storage/manage#parameters

##### Parameters

###### request

[`UpdateFilesystemRequest`](../interfaces/UpdateFilesystemRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`UpdateFilesystemRequest`](../interfaces/UpdateFilesystemRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **update**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`UpdateFilesystemRequest`](../interfaces/UpdateFilesystemRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/compute/v1/index.ts:2759

##### Parameters

###### request

[`UpdateFilesystemRequest`](../interfaces/UpdateFilesystemRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`UpdateFilesystemRequest`](../interfaces/UpdateFilesystemRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **update**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`UpdateFilesystemRequest`](../interfaces/UpdateFilesystemRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/compute/v1/index.ts:2760

##### Parameters

###### request

[`UpdateFilesystemRequest`](../interfaces/UpdateFilesystemRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`UpdateFilesystemRequest`](../interfaces/UpdateFilesystemRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **update**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`UpdateFilesystemRequest`](../interfaces/UpdateFilesystemRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/compute/v1/index.ts:2843

Updates an existing filesystem with new configuration parameters.
For details, see https://docs.nebius.com/compute/storage/manage#parameters

##### Parameters

###### request

[`UpdateFilesystemRequest`](../interfaces/UpdateFilesystemRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`UpdateFilesystemRequest`](../interfaces/UpdateFilesystemRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **update**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`UpdateFilesystemRequest`](../interfaces/UpdateFilesystemRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/compute/v1/index.ts:2844

Updates an existing filesystem with new configuration parameters.
For details, see https://docs.nebius.com/compute/storage/manage#parameters

##### Parameters

###### request

[`UpdateFilesystemRequest`](../interfaces/UpdateFilesystemRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`UpdateFilesystemRequest`](../interfaces/UpdateFilesystemRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **update**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`UpdateFilesystemRequest`](../interfaces/UpdateFilesystemRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/compute/v1/index.ts:2845

Updates an existing filesystem with new configuration parameters.
For details, see https://docs.nebius.com/compute/storage/manage#parameters

##### Parameters

###### request

[`UpdateFilesystemRequest`](../interfaces/UpdateFilesystemRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`UpdateFilesystemRequest`](../interfaces/UpdateFilesystemRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>
