[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/iam/v1](../README.md) / AccessPermitService

# Class: AccessPermitService

Defined in: src/api/nebius/iam/v1/index.ts:2846

## Implements

- `AccessPermitService`

## Constructors

### Constructor

> **new AccessPermitService**(`sdk`): `AccessPermitService`

Defined in: src/api/nebius/iam/v1/index.ts:2886

#### Parameters

##### sdk

[`SDKInterface`](../../../../../sdk/interfaces/SDKInterface.md)

#### Returns

`AccessPermitService`

## Properties

### $type

> **$type**: `"nebius.iam.v1.AccessPermitService"`

Defined in: src/api/nebius/iam/v1/index.ts:2847

## Methods

### create()

#### Call Signature

> **create**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`CreateAccessPermitRequest`](../interfaces/CreateAccessPermitRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/iam/v1/index.ts:2855

Creates access permit for provided resource with provided role.
Subject of access permit is also a parent of access permit.
If resource is unknown - NOT_FOUND will be thrown.
If parent of subject is not from resource's hierarchy - NOT_FOUND will be thrown.

##### Parameters

###### request

[`CreateAccessPermitRequest`](../interfaces/CreateAccessPermitRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`CreateAccessPermitRequest`](../interfaces/CreateAccessPermitRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **create**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`CreateAccessPermitRequest`](../interfaces/CreateAccessPermitRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/iam/v1/index.ts:2856

##### Parameters

###### request

[`CreateAccessPermitRequest`](../interfaces/CreateAccessPermitRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`CreateAccessPermitRequest`](../interfaces/CreateAccessPermitRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **create**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`CreateAccessPermitRequest`](../interfaces/CreateAccessPermitRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/iam/v1/index.ts:2857

##### Parameters

###### request

[`CreateAccessPermitRequest`](../interfaces/CreateAccessPermitRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`CreateAccessPermitRequest`](../interfaces/CreateAccessPermitRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **create**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`CreateAccessPermitRequest`](../interfaces/CreateAccessPermitRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/iam/v1/index.ts:2896

Creates access permit for provided resource with provided role.
Subject of access permit is also a parent of access permit.
If resource is unknown - NOT_FOUND will be thrown.
If parent of subject is not from resource's hierarchy - NOT_FOUND will be thrown.

##### Parameters

###### request

[`CreateAccessPermitRequest`](../interfaces/CreateAccessPermitRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`CreateAccessPermitRequest`](../interfaces/CreateAccessPermitRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **create**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`CreateAccessPermitRequest`](../interfaces/CreateAccessPermitRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/iam/v1/index.ts:2897

Creates access permit for provided resource with provided role.
Subject of access permit is also a parent of access permit.
If resource is unknown - NOT_FOUND will be thrown.
If parent of subject is not from resource's hierarchy - NOT_FOUND will be thrown.

##### Parameters

###### request

[`CreateAccessPermitRequest`](../interfaces/CreateAccessPermitRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`CreateAccessPermitRequest`](../interfaces/CreateAccessPermitRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **create**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`CreateAccessPermitRequest`](../interfaces/CreateAccessPermitRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/iam/v1/index.ts:2898

Creates access permit for provided resource with provided role.
Subject of access permit is also a parent of access permit.
If resource is unknown - NOT_FOUND will be thrown.
If parent of subject is not from resource's hierarchy - NOT_FOUND will be thrown.

##### Parameters

###### request

[`CreateAccessPermitRequest`](../interfaces/CreateAccessPermitRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`CreateAccessPermitRequest`](../interfaces/CreateAccessPermitRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

---

### delete()

#### Call Signature

> **delete**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteAccessPermitRequest`](../interfaces/DeleteAccessPermitRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/iam/v1/index.ts:2869

Delete access permit by id

##### Parameters

###### request

[`DeleteAccessPermitRequest`](../interfaces/DeleteAccessPermitRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteAccessPermitRequest`](../interfaces/DeleteAccessPermitRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **delete**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteAccessPermitRequest`](../interfaces/DeleteAccessPermitRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/iam/v1/index.ts:2870

##### Parameters

###### request

[`DeleteAccessPermitRequest`](../interfaces/DeleteAccessPermitRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteAccessPermitRequest`](../interfaces/DeleteAccessPermitRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **delete**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteAccessPermitRequest`](../interfaces/DeleteAccessPermitRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/iam/v1/index.ts:2871

##### Parameters

###### request

[`DeleteAccessPermitRequest`](../interfaces/DeleteAccessPermitRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteAccessPermitRequest`](../interfaces/DeleteAccessPermitRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **delete**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteAccessPermitRequest`](../interfaces/DeleteAccessPermitRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/iam/v1/index.ts:2923

Delete access permit by id

##### Parameters

###### request

[`DeleteAccessPermitRequest`](../interfaces/DeleteAccessPermitRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteAccessPermitRequest`](../interfaces/DeleteAccessPermitRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **delete**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteAccessPermitRequest`](../interfaces/DeleteAccessPermitRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/iam/v1/index.ts:2924

Delete access permit by id

##### Parameters

###### request

[`DeleteAccessPermitRequest`](../interfaces/DeleteAccessPermitRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteAccessPermitRequest`](../interfaces/DeleteAccessPermitRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **delete**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteAccessPermitRequest`](../interfaces/DeleteAccessPermitRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/api/nebius/iam/v1/index.ts:2925

Delete access permit by id

##### Parameters

###### request

[`DeleteAccessPermitRequest`](../interfaces/DeleteAccessPermitRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`DeleteAccessPermitRequest`](../interfaces/DeleteAccessPermitRequest.md), [`Operation`](../../../../../runtime/operation/classes/Operation.md)\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

---

### get()

#### Call Signature

> **get**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetAccessPermitRequest`](../interfaces/GetAccessPermitRequest.md), [`AccessPermit`](../interfaces/AccessPermit.md)\>

Defined in: src/api/nebius/iam/v1/index.ts:2876

Gets access permit by id

##### Parameters

###### request

[`GetAccessPermitRequest`](../interfaces/GetAccessPermitRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetAccessPermitRequest`](../interfaces/GetAccessPermitRequest.md), [`AccessPermit`](../interfaces/AccessPermit.md)\>

#### Call Signature

> **get**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetAccessPermitRequest`](../interfaces/GetAccessPermitRequest.md), [`AccessPermit`](../interfaces/AccessPermit.md)\>

Defined in: src/api/nebius/iam/v1/index.ts:2877

##### Parameters

###### request

[`GetAccessPermitRequest`](../interfaces/GetAccessPermitRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetAccessPermitRequest`](../interfaces/GetAccessPermitRequest.md), [`AccessPermit`](../interfaces/AccessPermit.md)\>

#### Call Signature

> **get**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetAccessPermitRequest`](../interfaces/GetAccessPermitRequest.md), [`AccessPermit`](../interfaces/AccessPermit.md)\>

Defined in: src/api/nebius/iam/v1/index.ts:2878

##### Parameters

###### request

[`GetAccessPermitRequest`](../interfaces/GetAccessPermitRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetAccessPermitRequest`](../interfaces/GetAccessPermitRequest.md), [`AccessPermit`](../interfaces/AccessPermit.md)\>

#### Call Signature

> **get**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetAccessPermitRequest`](../interfaces/GetAccessPermitRequest.md), [`AccessPermit`](../interfaces/AccessPermit.md)\>

Defined in: src/api/nebius/iam/v1/index.ts:2938

Gets access permit by id

##### Parameters

###### request

[`GetAccessPermitRequest`](../interfaces/GetAccessPermitRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetAccessPermitRequest`](../interfaces/GetAccessPermitRequest.md), [`AccessPermit`](../interfaces/AccessPermit.md)\>

#### Call Signature

> **get**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetAccessPermitRequest`](../interfaces/GetAccessPermitRequest.md), [`AccessPermit`](../interfaces/AccessPermit.md)\>

Defined in: src/api/nebius/iam/v1/index.ts:2939

Gets access permit by id

##### Parameters

###### request

[`GetAccessPermitRequest`](../interfaces/GetAccessPermitRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetAccessPermitRequest`](../interfaces/GetAccessPermitRequest.md), [`AccessPermit`](../interfaces/AccessPermit.md)\>

#### Call Signature

> **get**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetAccessPermitRequest`](../interfaces/GetAccessPermitRequest.md), [`AccessPermit`](../interfaces/AccessPermit.md)\>

Defined in: src/api/nebius/iam/v1/index.ts:2940

Gets access permit by id

##### Parameters

###### request

[`GetAccessPermitRequest`](../interfaces/GetAccessPermitRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetAccessPermitRequest`](../interfaces/GetAccessPermitRequest.md), [`AccessPermit`](../interfaces/AccessPermit.md)\>

---

### getOperationService()

> **getOperationService**(): [`OperationService`](../../../common/v1/classes/OperationService.md)

Defined in: src/api/nebius/iam/v1/index.ts:2892

#### Returns

[`OperationService`](../../../common/v1/classes/OperationService.md)

---

### list()

#### Call Signature

> **list**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListAccessPermitRequest`](../interfaces/ListAccessPermitRequest.md), [`ListAccessPermitResponse`](../interfaces/ListAccessPermitResponse.md)\>

Defined in: src/api/nebius/iam/v1/index.ts:2862

Lists access permits for provided parent

##### Parameters

###### request

[`ListAccessPermitRequest`](../interfaces/ListAccessPermitRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListAccessPermitRequest`](../interfaces/ListAccessPermitRequest.md), [`ListAccessPermitResponse`](../interfaces/ListAccessPermitResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListAccessPermitRequest`](../interfaces/ListAccessPermitRequest.md), [`ListAccessPermitResponse`](../interfaces/ListAccessPermitResponse.md)\>

Defined in: src/api/nebius/iam/v1/index.ts:2863

##### Parameters

###### request

[`ListAccessPermitRequest`](../interfaces/ListAccessPermitRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListAccessPermitRequest`](../interfaces/ListAccessPermitRequest.md), [`ListAccessPermitResponse`](../interfaces/ListAccessPermitResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListAccessPermitRequest`](../interfaces/ListAccessPermitRequest.md), [`ListAccessPermitResponse`](../interfaces/ListAccessPermitResponse.md)\>

Defined in: src/api/nebius/iam/v1/index.ts:2864

##### Parameters

###### request

[`ListAccessPermitRequest`](../interfaces/ListAccessPermitRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListAccessPermitRequest`](../interfaces/ListAccessPermitRequest.md), [`ListAccessPermitResponse`](../interfaces/ListAccessPermitResponse.md)\>

#### Call Signature

> **list**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListAccessPermitRequest`](../interfaces/ListAccessPermitRequest.md), [`ListAccessPermitResponse`](../interfaces/ListAccessPermitResponse.md)\>

Defined in: src/api/nebius/iam/v1/index.ts:2911

Lists access permits for provided parent

##### Parameters

###### request

[`ListAccessPermitRequest`](../interfaces/ListAccessPermitRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListAccessPermitRequest`](../interfaces/ListAccessPermitRequest.md), [`ListAccessPermitResponse`](../interfaces/ListAccessPermitResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListAccessPermitRequest`](../interfaces/ListAccessPermitRequest.md), [`ListAccessPermitResponse`](../interfaces/ListAccessPermitResponse.md)\>

Defined in: src/api/nebius/iam/v1/index.ts:2912

Lists access permits for provided parent

##### Parameters

###### request

[`ListAccessPermitRequest`](../interfaces/ListAccessPermitRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListAccessPermitRequest`](../interfaces/ListAccessPermitRequest.md), [`ListAccessPermitResponse`](../interfaces/ListAccessPermitResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListAccessPermitRequest`](../interfaces/ListAccessPermitRequest.md), [`ListAccessPermitResponse`](../interfaces/ListAccessPermitResponse.md)\>

Defined in: src/api/nebius/iam/v1/index.ts:2913

Lists access permits for provided parent

##### Parameters

###### request

[`ListAccessPermitRequest`](../interfaces/ListAccessPermitRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListAccessPermitRequest`](../interfaces/ListAccessPermitRequest.md), [`ListAccessPermitResponse`](../interfaces/ListAccessPermitResponse.md)\>
