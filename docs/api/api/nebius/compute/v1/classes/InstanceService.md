[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/compute/v1](../README.md) / InstanceService

# Class: InstanceService

Defined in: src/api/nebius/compute/v1/index.ts:7034

## Implements

- `InstanceService`

## Constructors

### Constructor

> **new InstanceService**(`sdk`): `InstanceService`

Defined in: src/api/nebius/compute/v1/index.ts:7107

#### Parameters

##### sdk

[`SDKInterface`](../../../../../sdk/interfaces/SDKInterface.md)

#### Returns

`InstanceService`

## Properties

### $type

> **$type**: `"nebius.compute.v1.InstanceService"`

Defined in: src/api/nebius/compute/v1/index.ts:7035

## Methods

### create()

#### Call Signature

> **create**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`CreateInstanceRequest`](../interfaces/CreateInstanceRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/compute/v1/index.ts:7062

Creates a new VM instance based on the provided specification.
For details, see https://docs.nebius.com/compute/virtual-machines/manage

##### Parameters

###### request

[`CreateInstanceRequest`](../interfaces/CreateInstanceRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`CreateInstanceRequest`](../interfaces/CreateInstanceRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **create**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`CreateInstanceRequest`](../interfaces/CreateInstanceRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/compute/v1/index.ts:7063

##### Parameters

###### request

[`CreateInstanceRequest`](../interfaces/CreateInstanceRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`CreateInstanceRequest`](../interfaces/CreateInstanceRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **create**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`CreateInstanceRequest`](../interfaces/CreateInstanceRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/compute/v1/index.ts:7064

##### Parameters

###### request

[`CreateInstanceRequest`](../interfaces/CreateInstanceRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`CreateInstanceRequest`](../interfaces/CreateInstanceRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **create**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`CreateInstanceRequest`](../interfaces/CreateInstanceRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/compute/v1/index.ts:7153

Creates a new VM instance based on the provided specification.
For details, see https://docs.nebius.com/compute/virtual-machines/manage

##### Parameters

###### request

[`CreateInstanceRequest`](../interfaces/CreateInstanceRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`CreateInstanceRequest`](../interfaces/CreateInstanceRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **create**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`CreateInstanceRequest`](../interfaces/CreateInstanceRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/compute/v1/index.ts:7154

Creates a new VM instance based on the provided specification.
For details, see https://docs.nebius.com/compute/virtual-machines/manage

##### Parameters

###### request

[`CreateInstanceRequest`](../interfaces/CreateInstanceRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`CreateInstanceRequest`](../interfaces/CreateInstanceRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **create**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`CreateInstanceRequest`](../interfaces/CreateInstanceRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/compute/v1/index.ts:7155

Creates a new VM instance based on the provided specification.
For details, see https://docs.nebius.com/compute/virtual-machines/manage

##### Parameters

###### request

[`CreateInstanceRequest`](../interfaces/CreateInstanceRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`CreateInstanceRequest`](../interfaces/CreateInstanceRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

---

### delete()

#### Call Signature

> **delete**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteInstanceRequest`](../interfaces/DeleteInstanceRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/compute/v1/index.ts:7076

Deletes a VM instance by its ID.

##### Parameters

###### request

[`DeleteInstanceRequest`](../interfaces/DeleteInstanceRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteInstanceRequest`](../interfaces/DeleteInstanceRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **delete**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteInstanceRequest`](../interfaces/DeleteInstanceRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/compute/v1/index.ts:7077

##### Parameters

###### request

[`DeleteInstanceRequest`](../interfaces/DeleteInstanceRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteInstanceRequest`](../interfaces/DeleteInstanceRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **delete**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteInstanceRequest`](../interfaces/DeleteInstanceRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/compute/v1/index.ts:7078

##### Parameters

###### request

[`DeleteInstanceRequest`](../interfaces/DeleteInstanceRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteInstanceRequest`](../interfaces/DeleteInstanceRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **delete**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteInstanceRequest`](../interfaces/DeleteInstanceRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/compute/v1/index.ts:7183

Deletes a VM instance by its ID.

##### Parameters

###### request

[`DeleteInstanceRequest`](../interfaces/DeleteInstanceRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteInstanceRequest`](../interfaces/DeleteInstanceRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **delete**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteInstanceRequest`](../interfaces/DeleteInstanceRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/compute/v1/index.ts:7184

Deletes a VM instance by its ID.

##### Parameters

###### request

[`DeleteInstanceRequest`](../interfaces/DeleteInstanceRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteInstanceRequest`](../interfaces/DeleteInstanceRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **delete**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteInstanceRequest`](../interfaces/DeleteInstanceRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/compute/v1/index.ts:7185

Deletes a VM instance by its ID.

##### Parameters

###### request

[`DeleteInstanceRequest`](../interfaces/DeleteInstanceRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteInstanceRequest`](../interfaces/DeleteInstanceRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

---

### get()

#### Call Signature

> **get**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetInstanceRequest`](../interfaces/GetInstanceRequest.md), [`Instance`](../interfaces/Instance.md)\>

Defined in: src/api/nebius/compute/v1/index.ts:7040

Retrieves detailed information about a specific VM instance by its ID.

##### Parameters

###### request

[`GetInstanceRequest`](../interfaces/GetInstanceRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetInstanceRequest`](../interfaces/GetInstanceRequest.md), [`Instance`](../interfaces/Instance.md)\>

#### Call Signature

> **get**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetInstanceRequest`](../interfaces/GetInstanceRequest.md), [`Instance`](../interfaces/Instance.md)\>

Defined in: src/api/nebius/compute/v1/index.ts:7041

##### Parameters

###### request

[`GetInstanceRequest`](../interfaces/GetInstanceRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetInstanceRequest`](../interfaces/GetInstanceRequest.md), [`Instance`](../interfaces/Instance.md)\>

#### Call Signature

> **get**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetInstanceRequest`](../interfaces/GetInstanceRequest.md), [`Instance`](../interfaces/Instance.md)\>

Defined in: src/api/nebius/compute/v1/index.ts:7042

##### Parameters

###### request

[`GetInstanceRequest`](../interfaces/GetInstanceRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetInstanceRequest`](../interfaces/GetInstanceRequest.md), [`Instance`](../interfaces/Instance.md)\>

#### Call Signature

> **get**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetInstanceRequest`](../interfaces/GetInstanceRequest.md), [`Instance`](../interfaces/Instance.md)\>

Defined in: src/api/nebius/compute/v1/index.ts:7117

Retrieves detailed information about a specific VM instance by its ID.

##### Parameters

###### request

[`GetInstanceRequest`](../interfaces/GetInstanceRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetInstanceRequest`](../interfaces/GetInstanceRequest.md), [`Instance`](../interfaces/Instance.md)\>

#### Call Signature

> **get**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetInstanceRequest`](../interfaces/GetInstanceRequest.md), [`Instance`](../interfaces/Instance.md)\>

Defined in: src/api/nebius/compute/v1/index.ts:7118

Retrieves detailed information about a specific VM instance by its ID.

##### Parameters

###### request

[`GetInstanceRequest`](../interfaces/GetInstanceRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetInstanceRequest`](../interfaces/GetInstanceRequest.md), [`Instance`](../interfaces/Instance.md)\>

#### Call Signature

> **get**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetInstanceRequest`](../interfaces/GetInstanceRequest.md), [`Instance`](../interfaces/Instance.md)\>

Defined in: src/api/nebius/compute/v1/index.ts:7119

Retrieves detailed information about a specific VM instance by its ID.

##### Parameters

###### request

[`GetInstanceRequest`](../interfaces/GetInstanceRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetInstanceRequest`](../interfaces/GetInstanceRequest.md), [`Instance`](../interfaces/Instance.md)\>

---

### getByName()

#### Call Signature

> **getByName**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Instance`](../interfaces/Instance.md)\>

Defined in: src/api/nebius/compute/v1/index.ts:7047

Retrieves detailed information about a specific VM instance by its parent and name.

##### Parameters

###### request

[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Instance`](../interfaces/Instance.md)\>

#### Call Signature

> **getByName**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Instance`](../interfaces/Instance.md)\>

Defined in: src/api/nebius/compute/v1/index.ts:7048

##### Parameters

###### request

[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Instance`](../interfaces/Instance.md)\>

#### Call Signature

> **getByName**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Instance`](../interfaces/Instance.md)\>

Defined in: src/api/nebius/compute/v1/index.ts:7049

##### Parameters

###### request

[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Instance`](../interfaces/Instance.md)\>

#### Call Signature

> **getByName**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Instance`](../interfaces/Instance.md)\>

Defined in: src/api/nebius/compute/v1/index.ts:7129

Retrieves detailed information about a specific VM instance by its parent and name.

##### Parameters

###### request

[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Instance`](../interfaces/Instance.md)\>

#### Call Signature

> **getByName**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Instance`](../interfaces/Instance.md)\>

Defined in: src/api/nebius/compute/v1/index.ts:7130

Retrieves detailed information about a specific VM instance by its parent and name.

##### Parameters

###### request

[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Instance`](../interfaces/Instance.md)\>

#### Call Signature

> **getByName**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Instance`](../interfaces/Instance.md)\>

Defined in: src/api/nebius/compute/v1/index.ts:7131

Retrieves detailed information about a specific VM instance by its parent and name.

##### Parameters

###### request

[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Instance`](../interfaces/Instance.md)\>

---

### getOperationService()

> **getOperationService**(): [`OperationService`](../../../common/v1/classes/OperationService.md)

Defined in: src/api/nebius/compute/v1/index.ts:7113

#### Returns

[`OperationService`](../../../common/v1/classes/OperationService.md)

---

### list()

#### Call Signature

> **list**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListInstancesRequest`](../interfaces/ListInstancesRequest.md), [`ListInstancesResponse`](../interfaces/ListInstancesResponse.md)\>

Defined in: src/api/nebius/compute/v1/index.ts:7054

Lists all VM instances within a specified parent.

##### Parameters

###### request

[`ListInstancesRequest`](../interfaces/ListInstancesRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListInstancesRequest`](../interfaces/ListInstancesRequest.md), [`ListInstancesResponse`](../interfaces/ListInstancesResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListInstancesRequest`](../interfaces/ListInstancesRequest.md), [`ListInstancesResponse`](../interfaces/ListInstancesResponse.md)\>

Defined in: src/api/nebius/compute/v1/index.ts:7055

##### Parameters

###### request

[`ListInstancesRequest`](../interfaces/ListInstancesRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListInstancesRequest`](../interfaces/ListInstancesRequest.md), [`ListInstancesResponse`](../interfaces/ListInstancesResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListInstancesRequest`](../interfaces/ListInstancesRequest.md), [`ListInstancesResponse`](../interfaces/ListInstancesResponse.md)\>

Defined in: src/api/nebius/compute/v1/index.ts:7056

##### Parameters

###### request

[`ListInstancesRequest`](../interfaces/ListInstancesRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListInstancesRequest`](../interfaces/ListInstancesRequest.md), [`ListInstancesResponse`](../interfaces/ListInstancesResponse.md)\>

#### Call Signature

> **list**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListInstancesRequest`](../interfaces/ListInstancesRequest.md), [`ListInstancesResponse`](../interfaces/ListInstancesResponse.md)\>

Defined in: src/api/nebius/compute/v1/index.ts:7141

Lists all VM instances within a specified parent.

##### Parameters

###### request

[`ListInstancesRequest`](../interfaces/ListInstancesRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListInstancesRequest`](../interfaces/ListInstancesRequest.md), [`ListInstancesResponse`](../interfaces/ListInstancesResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListInstancesRequest`](../interfaces/ListInstancesRequest.md), [`ListInstancesResponse`](../interfaces/ListInstancesResponse.md)\>

Defined in: src/api/nebius/compute/v1/index.ts:7142

Lists all VM instances within a specified parent.

##### Parameters

###### request

[`ListInstancesRequest`](../interfaces/ListInstancesRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListInstancesRequest`](../interfaces/ListInstancesRequest.md), [`ListInstancesResponse`](../interfaces/ListInstancesResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListInstancesRequest`](../interfaces/ListInstancesRequest.md), [`ListInstancesResponse`](../interfaces/ListInstancesResponse.md)\>

Defined in: src/api/nebius/compute/v1/index.ts:7143

Lists all VM instances within a specified parent.

##### Parameters

###### request

[`ListInstancesRequest`](../interfaces/ListInstancesRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListInstancesRequest`](../interfaces/ListInstancesRequest.md), [`ListInstancesResponse`](../interfaces/ListInstancesResponse.md)\>

---

### listOperationsByParent()

#### Call Signature

> **listOperationsByParent**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md), [`ListOperationsResponse`](../../../common/v1/interfaces/ListOperationsResponse.md)\>

Defined in: src/api/nebius/compute/v1/index.ts:7097

Lists all operations that were performed within a specific parent resource.

##### Parameters

###### request

[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md), [`ListOperationsResponse`](../../../common/v1/interfaces/ListOperationsResponse.md)\>

#### Call Signature

> **listOperationsByParent**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md), [`ListOperationsResponse`](../../../common/v1/interfaces/ListOperationsResponse.md)\>

Defined in: src/api/nebius/compute/v1/index.ts:7098

##### Parameters

###### request

[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md), [`ListOperationsResponse`](../../../common/v1/interfaces/ListOperationsResponse.md)\>

#### Call Signature

> **listOperationsByParent**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md), [`ListOperationsResponse`](../../../common/v1/interfaces/ListOperationsResponse.md)\>

Defined in: src/api/nebius/compute/v1/index.ts:7099

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

Defined in: src/api/nebius/compute/v1/index.ts:7228

Lists all operations that were performed within a specific parent resource.

##### Parameters

###### request

[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md), [`ListOperationsResponse`](../../../common/v1/interfaces/ListOperationsResponse.md)\>

#### Call Signature

> **listOperationsByParent**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md), [`ListOperationsResponse`](../../../common/v1/interfaces/ListOperationsResponse.md)\>

Defined in: src/api/nebius/compute/v1/index.ts:7229

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

Defined in: src/api/nebius/compute/v1/index.ts:7230

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

### start()

#### Call Signature

> **start**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`StartInstanceRequest`](../interfaces/StartInstanceRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/compute/v1/index.ts:7083

Starts a stopped VM instance.

##### Parameters

###### request

[`StartInstanceRequest`](../interfaces/StartInstanceRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`StartInstanceRequest`](../interfaces/StartInstanceRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **start**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`StartInstanceRequest`](../interfaces/StartInstanceRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/compute/v1/index.ts:7084

##### Parameters

###### request

[`StartInstanceRequest`](../interfaces/StartInstanceRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`StartInstanceRequest`](../interfaces/StartInstanceRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **start**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`StartInstanceRequest`](../interfaces/StartInstanceRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/compute/v1/index.ts:7085

##### Parameters

###### request

[`StartInstanceRequest`](../interfaces/StartInstanceRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`StartInstanceRequest`](../interfaces/StartInstanceRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **start**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`StartInstanceRequest`](../interfaces/StartInstanceRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/compute/v1/index.ts:7198

Starts a stopped VM instance.

##### Parameters

###### request

[`StartInstanceRequest`](../interfaces/StartInstanceRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`StartInstanceRequest`](../interfaces/StartInstanceRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **start**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`StartInstanceRequest`](../interfaces/StartInstanceRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/compute/v1/index.ts:7199

Starts a stopped VM instance.

##### Parameters

###### request

[`StartInstanceRequest`](../interfaces/StartInstanceRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`StartInstanceRequest`](../interfaces/StartInstanceRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **start**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`StartInstanceRequest`](../interfaces/StartInstanceRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/compute/v1/index.ts:7200

Starts a stopped VM instance.

##### Parameters

###### request

[`StartInstanceRequest`](../interfaces/StartInstanceRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`StartInstanceRequest`](../interfaces/StartInstanceRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

---

### stop()

#### Call Signature

> **stop**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`StopInstanceRequest`](../interfaces/StopInstanceRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/compute/v1/index.ts:7090

Stops a running VM instance.

##### Parameters

###### request

[`StopInstanceRequest`](../interfaces/StopInstanceRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`StopInstanceRequest`](../interfaces/StopInstanceRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **stop**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`StopInstanceRequest`](../interfaces/StopInstanceRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/compute/v1/index.ts:7091

##### Parameters

###### request

[`StopInstanceRequest`](../interfaces/StopInstanceRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`StopInstanceRequest`](../interfaces/StopInstanceRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **stop**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`StopInstanceRequest`](../interfaces/StopInstanceRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/compute/v1/index.ts:7092

##### Parameters

###### request

[`StopInstanceRequest`](../interfaces/StopInstanceRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`StopInstanceRequest`](../interfaces/StopInstanceRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **stop**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`StopInstanceRequest`](../interfaces/StopInstanceRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/compute/v1/index.ts:7213

Stops a running VM instance.

##### Parameters

###### request

[`StopInstanceRequest`](../interfaces/StopInstanceRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`StopInstanceRequest`](../interfaces/StopInstanceRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **stop**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`StopInstanceRequest`](../interfaces/StopInstanceRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/compute/v1/index.ts:7214

Stops a running VM instance.

##### Parameters

###### request

[`StopInstanceRequest`](../interfaces/StopInstanceRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`StopInstanceRequest`](../interfaces/StopInstanceRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **stop**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`StopInstanceRequest`](../interfaces/StopInstanceRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/compute/v1/index.ts:7215

Stops a running VM instance.

##### Parameters

###### request

[`StopInstanceRequest`](../interfaces/StopInstanceRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`StopInstanceRequest`](../interfaces/StopInstanceRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

---

### update()

#### Call Signature

> **update**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`UpdateInstanceRequest`](../interfaces/UpdateInstanceRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/compute/v1/index.ts:7069

Updates an existing VM instance with new configuration parameters.

##### Parameters

###### request

[`UpdateInstanceRequest`](../interfaces/UpdateInstanceRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`UpdateInstanceRequest`](../interfaces/UpdateInstanceRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **update**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`UpdateInstanceRequest`](../interfaces/UpdateInstanceRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/compute/v1/index.ts:7070

##### Parameters

###### request

[`UpdateInstanceRequest`](../interfaces/UpdateInstanceRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`UpdateInstanceRequest`](../interfaces/UpdateInstanceRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **update**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`UpdateInstanceRequest`](../interfaces/UpdateInstanceRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/compute/v1/index.ts:7071

##### Parameters

###### request

[`UpdateInstanceRequest`](../interfaces/UpdateInstanceRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`UpdateInstanceRequest`](../interfaces/UpdateInstanceRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **update**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`UpdateInstanceRequest`](../interfaces/UpdateInstanceRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/compute/v1/index.ts:7168

Updates an existing VM instance with new configuration parameters.

##### Parameters

###### request

[`UpdateInstanceRequest`](../interfaces/UpdateInstanceRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`UpdateInstanceRequest`](../interfaces/UpdateInstanceRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **update**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`UpdateInstanceRequest`](../interfaces/UpdateInstanceRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/compute/v1/index.ts:7169

Updates an existing VM instance with new configuration parameters.

##### Parameters

###### request

[`UpdateInstanceRequest`](../interfaces/UpdateInstanceRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`UpdateInstanceRequest`](../interfaces/UpdateInstanceRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **update**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`UpdateInstanceRequest`](../interfaces/UpdateInstanceRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/compute/v1/index.ts:7170

Updates an existing VM instance with new configuration parameters.

##### Parameters

###### request

[`UpdateInstanceRequest`](../interfaces/UpdateInstanceRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`UpdateInstanceRequest`](../interfaces/UpdateInstanceRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>
