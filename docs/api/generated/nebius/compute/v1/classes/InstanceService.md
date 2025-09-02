[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/compute/v1](../README.md) / InstanceService

# Class: InstanceService

Defined in: src/generated/nebius/compute/v1/index.ts:7033

## Implements

- `InstanceService`

## Constructors

### Constructor

> **new InstanceService**(`sdk`): `InstanceService`

Defined in: src/generated/nebius/compute/v1/index.ts:7106

#### Parameters

##### sdk

[`SDKInterface`](../../../../../sdk/interfaces/SDKInterface.md)

#### Returns

`InstanceService`

## Properties

### $type

> **$type**: `"nebius.compute.v1.InstanceService"`

Defined in: src/generated/nebius/compute/v1/index.ts:7034

## Methods

### create()

#### Call Signature

> **create**(`request`): `Request`\<[`CreateInstanceRequest`](../interfaces/CreateInstanceRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/compute/v1/index.ts:7061

Creates a new VM instance based on the provided specification.
 For details, see https://docs.nebius.com/compute/virtual-machines/manage

##### Parameters

###### request

[`CreateInstanceRequest`](../interfaces/CreateInstanceRequest.md)

##### Returns

`Request`\<[`CreateInstanceRequest`](../interfaces/CreateInstanceRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **create**(`request`, `metadata`): `Request`\<[`CreateInstanceRequest`](../interfaces/CreateInstanceRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/compute/v1/index.ts:7062

##### Parameters

###### request

[`CreateInstanceRequest`](../interfaces/CreateInstanceRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`CreateInstanceRequest`](../interfaces/CreateInstanceRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **create**(`request`, `metadata`, `options`): `Request`\<[`CreateInstanceRequest`](../interfaces/CreateInstanceRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/compute/v1/index.ts:7063

##### Parameters

###### request

[`CreateInstanceRequest`](../interfaces/CreateInstanceRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`CreateInstanceRequest`](../interfaces/CreateInstanceRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **create**(`request`): `Request`\<[`CreateInstanceRequest`](../interfaces/CreateInstanceRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/compute/v1/index.ts:7152

Creates a new VM instance based on the provided specification.
 For details, see https://docs.nebius.com/compute/virtual-machines/manage

##### Parameters

###### request

[`CreateInstanceRequest`](../interfaces/CreateInstanceRequest.md)

##### Returns

`Request`\<[`CreateInstanceRequest`](../interfaces/CreateInstanceRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **create**(`request`, `metadata`): `Request`\<[`CreateInstanceRequest`](../interfaces/CreateInstanceRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/compute/v1/index.ts:7153

Creates a new VM instance based on the provided specification.
 For details, see https://docs.nebius.com/compute/virtual-machines/manage

##### Parameters

###### request

[`CreateInstanceRequest`](../interfaces/CreateInstanceRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`CreateInstanceRequest`](../interfaces/CreateInstanceRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **create**(`request`, `metadata`, `options`): `Request`\<[`CreateInstanceRequest`](../interfaces/CreateInstanceRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/compute/v1/index.ts:7154

Creates a new VM instance based on the provided specification.
 For details, see https://docs.nebius.com/compute/virtual-machines/manage

##### Parameters

###### request

[`CreateInstanceRequest`](../interfaces/CreateInstanceRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`CreateInstanceRequest`](../interfaces/CreateInstanceRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

***

### delete()

#### Call Signature

> **delete**(`request`): `Request`\<[`DeleteInstanceRequest`](../interfaces/DeleteInstanceRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/compute/v1/index.ts:7075

Deletes a VM instance by its ID.

##### Parameters

###### request

[`DeleteInstanceRequest`](../interfaces/DeleteInstanceRequest.md)

##### Returns

`Request`\<[`DeleteInstanceRequest`](../interfaces/DeleteInstanceRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **delete**(`request`, `metadata`): `Request`\<[`DeleteInstanceRequest`](../interfaces/DeleteInstanceRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/compute/v1/index.ts:7076

##### Parameters

###### request

[`DeleteInstanceRequest`](../interfaces/DeleteInstanceRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`DeleteInstanceRequest`](../interfaces/DeleteInstanceRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **delete**(`request`, `metadata`, `options`): `Request`\<[`DeleteInstanceRequest`](../interfaces/DeleteInstanceRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/compute/v1/index.ts:7077

##### Parameters

###### request

[`DeleteInstanceRequest`](../interfaces/DeleteInstanceRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`DeleteInstanceRequest`](../interfaces/DeleteInstanceRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **delete**(`request`): `Request`\<[`DeleteInstanceRequest`](../interfaces/DeleteInstanceRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/compute/v1/index.ts:7182

Deletes a VM instance by its ID.

##### Parameters

###### request

[`DeleteInstanceRequest`](../interfaces/DeleteInstanceRequest.md)

##### Returns

`Request`\<[`DeleteInstanceRequest`](../interfaces/DeleteInstanceRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **delete**(`request`, `metadata`): `Request`\<[`DeleteInstanceRequest`](../interfaces/DeleteInstanceRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/compute/v1/index.ts:7183

Deletes a VM instance by its ID.

##### Parameters

###### request

[`DeleteInstanceRequest`](../interfaces/DeleteInstanceRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`DeleteInstanceRequest`](../interfaces/DeleteInstanceRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **delete**(`request`, `metadata`, `options`): `Request`\<[`DeleteInstanceRequest`](../interfaces/DeleteInstanceRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/compute/v1/index.ts:7184

Deletes a VM instance by its ID.

##### Parameters

###### request

[`DeleteInstanceRequest`](../interfaces/DeleteInstanceRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`DeleteInstanceRequest`](../interfaces/DeleteInstanceRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

***

### get()

#### Call Signature

> **get**(`request`): `Request`\<[`GetInstanceRequest`](../interfaces/GetInstanceRequest.md), [`Instance`](../interfaces/Instance.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:7039

Retrieves detailed information about a specific VM instance by its ID.

##### Parameters

###### request

[`GetInstanceRequest`](../interfaces/GetInstanceRequest.md)

##### Returns

`Request`\<[`GetInstanceRequest`](../interfaces/GetInstanceRequest.md), [`Instance`](../interfaces/Instance.md)\>

#### Call Signature

> **get**(`request`, `metadata`): `Request`\<[`GetInstanceRequest`](../interfaces/GetInstanceRequest.md), [`Instance`](../interfaces/Instance.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:7040

##### Parameters

###### request

[`GetInstanceRequest`](../interfaces/GetInstanceRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`GetInstanceRequest`](../interfaces/GetInstanceRequest.md), [`Instance`](../interfaces/Instance.md)\>

#### Call Signature

> **get**(`request`, `metadata`, `options`): `Request`\<[`GetInstanceRequest`](../interfaces/GetInstanceRequest.md), [`Instance`](../interfaces/Instance.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:7041

##### Parameters

###### request

[`GetInstanceRequest`](../interfaces/GetInstanceRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`GetInstanceRequest`](../interfaces/GetInstanceRequest.md), [`Instance`](../interfaces/Instance.md)\>

#### Call Signature

> **get**(`request`): `Request`\<[`GetInstanceRequest`](../interfaces/GetInstanceRequest.md), [`Instance`](../interfaces/Instance.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:7116

Retrieves detailed information about a specific VM instance by its ID.

##### Parameters

###### request

[`GetInstanceRequest`](../interfaces/GetInstanceRequest.md)

##### Returns

`Request`\<[`GetInstanceRequest`](../interfaces/GetInstanceRequest.md), [`Instance`](../interfaces/Instance.md)\>

#### Call Signature

> **get**(`request`, `metadata`): `Request`\<[`GetInstanceRequest`](../interfaces/GetInstanceRequest.md), [`Instance`](../interfaces/Instance.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:7117

Retrieves detailed information about a specific VM instance by its ID.

##### Parameters

###### request

[`GetInstanceRequest`](../interfaces/GetInstanceRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`GetInstanceRequest`](../interfaces/GetInstanceRequest.md), [`Instance`](../interfaces/Instance.md)\>

#### Call Signature

> **get**(`request`, `metadata`, `options`): `Request`\<[`GetInstanceRequest`](../interfaces/GetInstanceRequest.md), [`Instance`](../interfaces/Instance.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:7118

Retrieves detailed information about a specific VM instance by its ID.

##### Parameters

###### request

[`GetInstanceRequest`](../interfaces/GetInstanceRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`GetInstanceRequest`](../interfaces/GetInstanceRequest.md), [`Instance`](../interfaces/Instance.md)\>

***

### getByName()

#### Call Signature

> **getByName**(`request`): `Request`\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Instance`](../interfaces/Instance.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:7046

Retrieves detailed information about a specific VM instance by its parent and name.

##### Parameters

###### request

[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

##### Returns

`Request`\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Instance`](../interfaces/Instance.md)\>

#### Call Signature

> **getByName**(`request`, `metadata`): `Request`\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Instance`](../interfaces/Instance.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:7047

##### Parameters

###### request

[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Instance`](../interfaces/Instance.md)\>

#### Call Signature

> **getByName**(`request`, `metadata`, `options`): `Request`\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Instance`](../interfaces/Instance.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:7048

##### Parameters

###### request

[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Instance`](../interfaces/Instance.md)\>

#### Call Signature

> **getByName**(`request`): `Request`\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Instance`](../interfaces/Instance.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:7128

Retrieves detailed information about a specific VM instance by its parent and name.

##### Parameters

###### request

[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

##### Returns

`Request`\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Instance`](../interfaces/Instance.md)\>

#### Call Signature

> **getByName**(`request`, `metadata`): `Request`\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Instance`](../interfaces/Instance.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:7129

Retrieves detailed information about a specific VM instance by its parent and name.

##### Parameters

###### request

[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Instance`](../interfaces/Instance.md)\>

#### Call Signature

> **getByName**(`request`, `metadata`, `options`): `Request`\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Instance`](../interfaces/Instance.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:7130

Retrieves detailed information about a specific VM instance by its parent and name.

##### Parameters

###### request

[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md), [`Instance`](../interfaces/Instance.md)\>

***

### getOperationService()

> **getOperationService**(): [`OperationService`](../../../common/v1/classes/OperationService.md)

Defined in: src/generated/nebius/compute/v1/index.ts:7112

#### Returns

[`OperationService`](../../../common/v1/classes/OperationService.md)

***

### list()

#### Call Signature

> **list**(`request`): `Request`\<[`ListInstancesRequest`](../interfaces/ListInstancesRequest.md), [`ListInstancesResponse`](../interfaces/ListInstancesResponse.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:7053

Lists all VM instances within a specified parent.

##### Parameters

###### request

[`ListInstancesRequest`](../interfaces/ListInstancesRequest.md)

##### Returns

`Request`\<[`ListInstancesRequest`](../interfaces/ListInstancesRequest.md), [`ListInstancesResponse`](../interfaces/ListInstancesResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`): `Request`\<[`ListInstancesRequest`](../interfaces/ListInstancesRequest.md), [`ListInstancesResponse`](../interfaces/ListInstancesResponse.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:7054

##### Parameters

###### request

[`ListInstancesRequest`](../interfaces/ListInstancesRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`ListInstancesRequest`](../interfaces/ListInstancesRequest.md), [`ListInstancesResponse`](../interfaces/ListInstancesResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`, `options`): `Request`\<[`ListInstancesRequest`](../interfaces/ListInstancesRequest.md), [`ListInstancesResponse`](../interfaces/ListInstancesResponse.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:7055

##### Parameters

###### request

[`ListInstancesRequest`](../interfaces/ListInstancesRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`ListInstancesRequest`](../interfaces/ListInstancesRequest.md), [`ListInstancesResponse`](../interfaces/ListInstancesResponse.md)\>

#### Call Signature

> **list**(`request`): `Request`\<[`ListInstancesRequest`](../interfaces/ListInstancesRequest.md), [`ListInstancesResponse`](../interfaces/ListInstancesResponse.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:7140

Lists all VM instances within a specified parent.

##### Parameters

###### request

[`ListInstancesRequest`](../interfaces/ListInstancesRequest.md)

##### Returns

`Request`\<[`ListInstancesRequest`](../interfaces/ListInstancesRequest.md), [`ListInstancesResponse`](../interfaces/ListInstancesResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`): `Request`\<[`ListInstancesRequest`](../interfaces/ListInstancesRequest.md), [`ListInstancesResponse`](../interfaces/ListInstancesResponse.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:7141

Lists all VM instances within a specified parent.

##### Parameters

###### request

[`ListInstancesRequest`](../interfaces/ListInstancesRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`ListInstancesRequest`](../interfaces/ListInstancesRequest.md), [`ListInstancesResponse`](../interfaces/ListInstancesResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`, `options`): `Request`\<[`ListInstancesRequest`](../interfaces/ListInstancesRequest.md), [`ListInstancesResponse`](../interfaces/ListInstancesResponse.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:7142

Lists all VM instances within a specified parent.

##### Parameters

###### request

[`ListInstancesRequest`](../interfaces/ListInstancesRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`ListInstancesRequest`](../interfaces/ListInstancesRequest.md), [`ListInstancesResponse`](../interfaces/ListInstancesResponse.md)\>

***

### listOperationsByParent()

#### Call Signature

> **listOperationsByParent**(`request`): `Request`\<[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md), [`ListOperationsResponse`](../../../common/v1/interfaces/ListOperationsResponse.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:7096

Lists all operations that were performed within a specific parent resource.

##### Parameters

###### request

[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md)

##### Returns

`Request`\<[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md), [`ListOperationsResponse`](../../../common/v1/interfaces/ListOperationsResponse.md)\>

#### Call Signature

> **listOperationsByParent**(`request`, `metadata`): `Request`\<[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md), [`ListOperationsResponse`](../../../common/v1/interfaces/ListOperationsResponse.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:7097

##### Parameters

###### request

[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md), [`ListOperationsResponse`](../../../common/v1/interfaces/ListOperationsResponse.md)\>

#### Call Signature

> **listOperationsByParent**(`request`, `metadata`, `options`): `Request`\<[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md), [`ListOperationsResponse`](../../../common/v1/interfaces/ListOperationsResponse.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:7098

##### Parameters

###### request

[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md), [`ListOperationsResponse`](../../../common/v1/interfaces/ListOperationsResponse.md)\>

#### Call Signature

> **listOperationsByParent**(`request`): `Request`\<[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md), [`ListOperationsResponse`](../../../common/v1/interfaces/ListOperationsResponse.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:7227

Lists all operations that were performed within a specific parent resource.

##### Parameters

###### request

[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md)

##### Returns

`Request`\<[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md), [`ListOperationsResponse`](../../../common/v1/interfaces/ListOperationsResponse.md)\>

#### Call Signature

> **listOperationsByParent**(`request`, `metadata`): `Request`\<[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md), [`ListOperationsResponse`](../../../common/v1/interfaces/ListOperationsResponse.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:7228

Lists all operations that were performed within a specific parent resource.

##### Parameters

###### request

[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md), [`ListOperationsResponse`](../../../common/v1/interfaces/ListOperationsResponse.md)\>

#### Call Signature

> **listOperationsByParent**(`request`, `metadata`, `options`): `Request`\<[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md), [`ListOperationsResponse`](../../../common/v1/interfaces/ListOperationsResponse.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:7229

Lists all operations that were performed within a specific parent resource.

##### Parameters

###### request

[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`ListOperationsByParentRequest`](../interfaces/ListOperationsByParentRequest.md), [`ListOperationsResponse`](../../../common/v1/interfaces/ListOperationsResponse.md)\>

***

### start()

#### Call Signature

> **start**(`request`): `Request`\<[`StartInstanceRequest`](../interfaces/StartInstanceRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/compute/v1/index.ts:7082

Starts a stopped VM instance.

##### Parameters

###### request

[`StartInstanceRequest`](../interfaces/StartInstanceRequest.md)

##### Returns

`Request`\<[`StartInstanceRequest`](../interfaces/StartInstanceRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **start**(`request`, `metadata`): `Request`\<[`StartInstanceRequest`](../interfaces/StartInstanceRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/compute/v1/index.ts:7083

##### Parameters

###### request

[`StartInstanceRequest`](../interfaces/StartInstanceRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`StartInstanceRequest`](../interfaces/StartInstanceRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **start**(`request`, `metadata`, `options`): `Request`\<[`StartInstanceRequest`](../interfaces/StartInstanceRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/compute/v1/index.ts:7084

##### Parameters

###### request

[`StartInstanceRequest`](../interfaces/StartInstanceRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`StartInstanceRequest`](../interfaces/StartInstanceRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **start**(`request`): `Request`\<[`StartInstanceRequest`](../interfaces/StartInstanceRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/compute/v1/index.ts:7197

Starts a stopped VM instance.

##### Parameters

###### request

[`StartInstanceRequest`](../interfaces/StartInstanceRequest.md)

##### Returns

`Request`\<[`StartInstanceRequest`](../interfaces/StartInstanceRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **start**(`request`, `metadata`): `Request`\<[`StartInstanceRequest`](../interfaces/StartInstanceRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/compute/v1/index.ts:7198

Starts a stopped VM instance.

##### Parameters

###### request

[`StartInstanceRequest`](../interfaces/StartInstanceRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`StartInstanceRequest`](../interfaces/StartInstanceRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **start**(`request`, `metadata`, `options`): `Request`\<[`StartInstanceRequest`](../interfaces/StartInstanceRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/compute/v1/index.ts:7199

Starts a stopped VM instance.

##### Parameters

###### request

[`StartInstanceRequest`](../interfaces/StartInstanceRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`StartInstanceRequest`](../interfaces/StartInstanceRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

***

### stop()

#### Call Signature

> **stop**(`request`): `Request`\<[`StopInstanceRequest`](../interfaces/StopInstanceRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/compute/v1/index.ts:7089

Stops a running VM instance.

##### Parameters

###### request

[`StopInstanceRequest`](../interfaces/StopInstanceRequest.md)

##### Returns

`Request`\<[`StopInstanceRequest`](../interfaces/StopInstanceRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **stop**(`request`, `metadata`): `Request`\<[`StopInstanceRequest`](../interfaces/StopInstanceRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/compute/v1/index.ts:7090

##### Parameters

###### request

[`StopInstanceRequest`](../interfaces/StopInstanceRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`StopInstanceRequest`](../interfaces/StopInstanceRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **stop**(`request`, `metadata`, `options`): `Request`\<[`StopInstanceRequest`](../interfaces/StopInstanceRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/compute/v1/index.ts:7091

##### Parameters

###### request

[`StopInstanceRequest`](../interfaces/StopInstanceRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`StopInstanceRequest`](../interfaces/StopInstanceRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **stop**(`request`): `Request`\<[`StopInstanceRequest`](../interfaces/StopInstanceRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/compute/v1/index.ts:7212

Stops a running VM instance.

##### Parameters

###### request

[`StopInstanceRequest`](../interfaces/StopInstanceRequest.md)

##### Returns

`Request`\<[`StopInstanceRequest`](../interfaces/StopInstanceRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **stop**(`request`, `metadata`): `Request`\<[`StopInstanceRequest`](../interfaces/StopInstanceRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/compute/v1/index.ts:7213

Stops a running VM instance.

##### Parameters

###### request

[`StopInstanceRequest`](../interfaces/StopInstanceRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`StopInstanceRequest`](../interfaces/StopInstanceRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **stop**(`request`, `metadata`, `options`): `Request`\<[`StopInstanceRequest`](../interfaces/StopInstanceRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/compute/v1/index.ts:7214

Stops a running VM instance.

##### Parameters

###### request

[`StopInstanceRequest`](../interfaces/StopInstanceRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`StopInstanceRequest`](../interfaces/StopInstanceRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

***

### update()

#### Call Signature

> **update**(`request`): `Request`\<[`UpdateInstanceRequest`](../interfaces/UpdateInstanceRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/compute/v1/index.ts:7068

Updates an existing VM instance with new configuration parameters.

##### Parameters

###### request

[`UpdateInstanceRequest`](../interfaces/UpdateInstanceRequest.md)

##### Returns

`Request`\<[`UpdateInstanceRequest`](../interfaces/UpdateInstanceRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **update**(`request`, `metadata`): `Request`\<[`UpdateInstanceRequest`](../interfaces/UpdateInstanceRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/compute/v1/index.ts:7069

##### Parameters

###### request

[`UpdateInstanceRequest`](../interfaces/UpdateInstanceRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`UpdateInstanceRequest`](../interfaces/UpdateInstanceRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **update**(`request`, `metadata`, `options`): `Request`\<[`UpdateInstanceRequest`](../interfaces/UpdateInstanceRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/compute/v1/index.ts:7070

##### Parameters

###### request

[`UpdateInstanceRequest`](../interfaces/UpdateInstanceRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`UpdateInstanceRequest`](../interfaces/UpdateInstanceRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **update**(`request`): `Request`\<[`UpdateInstanceRequest`](../interfaces/UpdateInstanceRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/compute/v1/index.ts:7167

Updates an existing VM instance with new configuration parameters.

##### Parameters

###### request

[`UpdateInstanceRequest`](../interfaces/UpdateInstanceRequest.md)

##### Returns

`Request`\<[`UpdateInstanceRequest`](../interfaces/UpdateInstanceRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **update**(`request`, `metadata`): `Request`\<[`UpdateInstanceRequest`](../interfaces/UpdateInstanceRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/compute/v1/index.ts:7168

Updates an existing VM instance with new configuration parameters.

##### Parameters

###### request

[`UpdateInstanceRequest`](../interfaces/UpdateInstanceRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`UpdateInstanceRequest`](../interfaces/UpdateInstanceRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **update**(`request`, `metadata`, `options`): `Request`\<[`UpdateInstanceRequest`](../interfaces/UpdateInstanceRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/compute/v1/index.ts:7169

Updates an existing VM instance with new configuration parameters.

##### Parameters

###### request

[`UpdateInstanceRequest`](../interfaces/UpdateInstanceRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`UpdateInstanceRequest`](../interfaces/UpdateInstanceRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>
