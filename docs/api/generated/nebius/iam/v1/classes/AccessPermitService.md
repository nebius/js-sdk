[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/iam/v1](../README.md) / AccessPermitService

# Class: AccessPermitService

Defined in: src/generated/nebius/iam/v1/index.ts:2848

## Implements

- `AccessPermitService`

## Constructors

### Constructor

> **new AccessPermitService**(`sdk`): `AccessPermitService`

Defined in: src/generated/nebius/iam/v1/index.ts:2888

#### Parameters

##### sdk

[`SDKInterface`](../../../../../sdk/interfaces/SDKInterface.md)

#### Returns

`AccessPermitService`

## Properties

### $type

> **$type**: `"nebius.iam.v1.AccessPermitService"`

Defined in: src/generated/nebius/iam/v1/index.ts:2849

## Methods

### create()

#### Call Signature

> **create**(`request`): `Request`\<[`CreateAccessPermitRequest`](../interfaces/CreateAccessPermitRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/iam/v1/index.ts:2857

Creates access permit for provided resource with provided role.
 Subject of access permit is also a parent of access permit.
 If resource is unknown - NOT_FOUND will be thrown.
 If parent of subject is not from resource's hierarchy - NOT_FOUND will be thrown.

##### Parameters

###### request

[`CreateAccessPermitRequest`](../interfaces/CreateAccessPermitRequest.md)

##### Returns

`Request`\<[`CreateAccessPermitRequest`](../interfaces/CreateAccessPermitRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **create**(`request`, `metadata`): `Request`\<[`CreateAccessPermitRequest`](../interfaces/CreateAccessPermitRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/iam/v1/index.ts:2858

##### Parameters

###### request

[`CreateAccessPermitRequest`](../interfaces/CreateAccessPermitRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`CreateAccessPermitRequest`](../interfaces/CreateAccessPermitRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **create**(`request`, `metadata`, `options`): `Request`\<[`CreateAccessPermitRequest`](../interfaces/CreateAccessPermitRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/iam/v1/index.ts:2859

##### Parameters

###### request

[`CreateAccessPermitRequest`](../interfaces/CreateAccessPermitRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`CreateAccessPermitRequest`](../interfaces/CreateAccessPermitRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **create**(`request`): `Request`\<[`CreateAccessPermitRequest`](../interfaces/CreateAccessPermitRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/iam/v1/index.ts:2898

Creates access permit for provided resource with provided role.
 Subject of access permit is also a parent of access permit.
 If resource is unknown - NOT_FOUND will be thrown.
 If parent of subject is not from resource's hierarchy - NOT_FOUND will be thrown.

##### Parameters

###### request

[`CreateAccessPermitRequest`](../interfaces/CreateAccessPermitRequest.md)

##### Returns

`Request`\<[`CreateAccessPermitRequest`](../interfaces/CreateAccessPermitRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **create**(`request`, `metadata`): `Request`\<[`CreateAccessPermitRequest`](../interfaces/CreateAccessPermitRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/iam/v1/index.ts:2899

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

`Request`\<[`CreateAccessPermitRequest`](../interfaces/CreateAccessPermitRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **create**(`request`, `metadata`, `options`): `Request`\<[`CreateAccessPermitRequest`](../interfaces/CreateAccessPermitRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/iam/v1/index.ts:2900

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

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`CreateAccessPermitRequest`](../interfaces/CreateAccessPermitRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

***

### delete()

#### Call Signature

> **delete**(`request`): `Request`\<[`DeleteAccessPermitRequest`](../interfaces/DeleteAccessPermitRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/iam/v1/index.ts:2871

Delete access permit by id

##### Parameters

###### request

[`DeleteAccessPermitRequest`](../interfaces/DeleteAccessPermitRequest.md)

##### Returns

`Request`\<[`DeleteAccessPermitRequest`](../interfaces/DeleteAccessPermitRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **delete**(`request`, `metadata`): `Request`\<[`DeleteAccessPermitRequest`](../interfaces/DeleteAccessPermitRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/iam/v1/index.ts:2872

##### Parameters

###### request

[`DeleteAccessPermitRequest`](../interfaces/DeleteAccessPermitRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`DeleteAccessPermitRequest`](../interfaces/DeleteAccessPermitRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **delete**(`request`, `metadata`, `options`): `Request`\<[`DeleteAccessPermitRequest`](../interfaces/DeleteAccessPermitRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/iam/v1/index.ts:2873

##### Parameters

###### request

[`DeleteAccessPermitRequest`](../interfaces/DeleteAccessPermitRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`DeleteAccessPermitRequest`](../interfaces/DeleteAccessPermitRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **delete**(`request`): `Request`\<[`DeleteAccessPermitRequest`](../interfaces/DeleteAccessPermitRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/iam/v1/index.ts:2925

Delete access permit by id

##### Parameters

###### request

[`DeleteAccessPermitRequest`](../interfaces/DeleteAccessPermitRequest.md)

##### Returns

`Request`\<[`DeleteAccessPermitRequest`](../interfaces/DeleteAccessPermitRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **delete**(`request`, `metadata`): `Request`\<[`DeleteAccessPermitRequest`](../interfaces/DeleteAccessPermitRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/iam/v1/index.ts:2926

Delete access permit by id

##### Parameters

###### request

[`DeleteAccessPermitRequest`](../interfaces/DeleteAccessPermitRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`DeleteAccessPermitRequest`](../interfaces/DeleteAccessPermitRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

#### Call Signature

> **delete**(`request`, `metadata`, `options`): `Request`\<[`DeleteAccessPermitRequest`](../interfaces/DeleteAccessPermitRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

Defined in: src/generated/nebius/iam/v1/index.ts:2927

Delete access permit by id

##### Parameters

###### request

[`DeleteAccessPermitRequest`](../interfaces/DeleteAccessPermitRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`DeleteAccessPermitRequest`](../interfaces/DeleteAccessPermitRequest.md), `Operation`\<[`GetOperationRequest`](../../../common/v1/interfaces/GetOperationRequest.md)\>\>

***

### get()

#### Call Signature

> **get**(`request`): `Request`\<[`GetAccessPermitRequest`](../interfaces/GetAccessPermitRequest.md), [`AccessPermit`](../interfaces/AccessPermit.md)\>

Defined in: src/generated/nebius/iam/v1/index.ts:2878

Gets access permit by id

##### Parameters

###### request

[`GetAccessPermitRequest`](../interfaces/GetAccessPermitRequest.md)

##### Returns

`Request`\<[`GetAccessPermitRequest`](../interfaces/GetAccessPermitRequest.md), [`AccessPermit`](../interfaces/AccessPermit.md)\>

#### Call Signature

> **get**(`request`, `metadata`): `Request`\<[`GetAccessPermitRequest`](../interfaces/GetAccessPermitRequest.md), [`AccessPermit`](../interfaces/AccessPermit.md)\>

Defined in: src/generated/nebius/iam/v1/index.ts:2879

##### Parameters

###### request

[`GetAccessPermitRequest`](../interfaces/GetAccessPermitRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`GetAccessPermitRequest`](../interfaces/GetAccessPermitRequest.md), [`AccessPermit`](../interfaces/AccessPermit.md)\>

#### Call Signature

> **get**(`request`, `metadata`, `options`): `Request`\<[`GetAccessPermitRequest`](../interfaces/GetAccessPermitRequest.md), [`AccessPermit`](../interfaces/AccessPermit.md)\>

Defined in: src/generated/nebius/iam/v1/index.ts:2880

##### Parameters

###### request

[`GetAccessPermitRequest`](../interfaces/GetAccessPermitRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`GetAccessPermitRequest`](../interfaces/GetAccessPermitRequest.md), [`AccessPermit`](../interfaces/AccessPermit.md)\>

#### Call Signature

> **get**(`request`): `Request`\<[`GetAccessPermitRequest`](../interfaces/GetAccessPermitRequest.md), [`AccessPermit`](../interfaces/AccessPermit.md)\>

Defined in: src/generated/nebius/iam/v1/index.ts:2940

Gets access permit by id

##### Parameters

###### request

[`GetAccessPermitRequest`](../interfaces/GetAccessPermitRequest.md)

##### Returns

`Request`\<[`GetAccessPermitRequest`](../interfaces/GetAccessPermitRequest.md), [`AccessPermit`](../interfaces/AccessPermit.md)\>

#### Call Signature

> **get**(`request`, `metadata`): `Request`\<[`GetAccessPermitRequest`](../interfaces/GetAccessPermitRequest.md), [`AccessPermit`](../interfaces/AccessPermit.md)\>

Defined in: src/generated/nebius/iam/v1/index.ts:2941

Gets access permit by id

##### Parameters

###### request

[`GetAccessPermitRequest`](../interfaces/GetAccessPermitRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`GetAccessPermitRequest`](../interfaces/GetAccessPermitRequest.md), [`AccessPermit`](../interfaces/AccessPermit.md)\>

#### Call Signature

> **get**(`request`, `metadata`, `options`): `Request`\<[`GetAccessPermitRequest`](../interfaces/GetAccessPermitRequest.md), [`AccessPermit`](../interfaces/AccessPermit.md)\>

Defined in: src/generated/nebius/iam/v1/index.ts:2942

Gets access permit by id

##### Parameters

###### request

[`GetAccessPermitRequest`](../interfaces/GetAccessPermitRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`GetAccessPermitRequest`](../interfaces/GetAccessPermitRequest.md), [`AccessPermit`](../interfaces/AccessPermit.md)\>

***

### getOperationService()

> **getOperationService**(): [`OperationService`](../../../common/v1/classes/OperationService.md)

Defined in: src/generated/nebius/iam/v1/index.ts:2894

#### Returns

[`OperationService`](../../../common/v1/classes/OperationService.md)

***

### list()

#### Call Signature

> **list**(`request`): `Request`\<[`ListAccessPermitRequest`](../interfaces/ListAccessPermitRequest.md), [`ListAccessPermitResponse`](../interfaces/ListAccessPermitResponse.md)\>

Defined in: src/generated/nebius/iam/v1/index.ts:2864

Lists access permits for provided parent

##### Parameters

###### request

[`ListAccessPermitRequest`](../interfaces/ListAccessPermitRequest.md)

##### Returns

`Request`\<[`ListAccessPermitRequest`](../interfaces/ListAccessPermitRequest.md), [`ListAccessPermitResponse`](../interfaces/ListAccessPermitResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`): `Request`\<[`ListAccessPermitRequest`](../interfaces/ListAccessPermitRequest.md), [`ListAccessPermitResponse`](../interfaces/ListAccessPermitResponse.md)\>

Defined in: src/generated/nebius/iam/v1/index.ts:2865

##### Parameters

###### request

[`ListAccessPermitRequest`](../interfaces/ListAccessPermitRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`ListAccessPermitRequest`](../interfaces/ListAccessPermitRequest.md), [`ListAccessPermitResponse`](../interfaces/ListAccessPermitResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`, `options`): `Request`\<[`ListAccessPermitRequest`](../interfaces/ListAccessPermitRequest.md), [`ListAccessPermitResponse`](../interfaces/ListAccessPermitResponse.md)\>

Defined in: src/generated/nebius/iam/v1/index.ts:2866

##### Parameters

###### request

[`ListAccessPermitRequest`](../interfaces/ListAccessPermitRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`ListAccessPermitRequest`](../interfaces/ListAccessPermitRequest.md), [`ListAccessPermitResponse`](../interfaces/ListAccessPermitResponse.md)\>

#### Call Signature

> **list**(`request`): `Request`\<[`ListAccessPermitRequest`](../interfaces/ListAccessPermitRequest.md), [`ListAccessPermitResponse`](../interfaces/ListAccessPermitResponse.md)\>

Defined in: src/generated/nebius/iam/v1/index.ts:2913

Lists access permits for provided parent

##### Parameters

###### request

[`ListAccessPermitRequest`](../interfaces/ListAccessPermitRequest.md)

##### Returns

`Request`\<[`ListAccessPermitRequest`](../interfaces/ListAccessPermitRequest.md), [`ListAccessPermitResponse`](../interfaces/ListAccessPermitResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`): `Request`\<[`ListAccessPermitRequest`](../interfaces/ListAccessPermitRequest.md), [`ListAccessPermitResponse`](../interfaces/ListAccessPermitResponse.md)\>

Defined in: src/generated/nebius/iam/v1/index.ts:2914

Lists access permits for provided parent

##### Parameters

###### request

[`ListAccessPermitRequest`](../interfaces/ListAccessPermitRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`ListAccessPermitRequest`](../interfaces/ListAccessPermitRequest.md), [`ListAccessPermitResponse`](../interfaces/ListAccessPermitResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`, `options`): `Request`\<[`ListAccessPermitRequest`](../interfaces/ListAccessPermitRequest.md), [`ListAccessPermitResponse`](../interfaces/ListAccessPermitResponse.md)\>

Defined in: src/generated/nebius/iam/v1/index.ts:2915

Lists access permits for provided parent

##### Parameters

###### request

[`ListAccessPermitRequest`](../interfaces/ListAccessPermitRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`ListAccessPermitRequest`](../interfaces/ListAccessPermitRequest.md), [`ListAccessPermitResponse`](../interfaces/ListAccessPermitResponse.md)\>
