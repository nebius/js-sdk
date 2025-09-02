[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/maintenance/v1alpha1](../README.md) / MaintenanceService

# Class: MaintenanceService

Defined in: src/generated/nebius/maintenance/v1alpha1/index.ts:324

## Implements

- `MaintenanceService`

## Constructors

### Constructor

> **new MaintenanceService**(`sdk`): `MaintenanceService`

Defined in: src/generated/nebius/maintenance/v1alpha1/index.ts:349

#### Parameters

##### sdk

[`SDKInterface`](../../../../../sdk/interfaces/SDKInterface.md)

#### Returns

`MaintenanceService`

## Properties

### $type

> **$type**: `"nebius.maintenance.v1alpha1.MaintenanceService"`

Defined in: src/generated/nebius/maintenance/v1alpha1/index.ts:325

## Methods

### get()

#### Call Signature

> **get**(`request`): `Request`\<[`GetMaintenanceRequest`](../interfaces/GetMaintenanceRequest.md), [`Maintenance`](../interfaces/Maintenance.md)\>

Defined in: src/generated/nebius/maintenance/v1alpha1/index.ts:331

Returns the specified maintenance operation.
 To get the list of upcoming and past maintenance operations, make a [List] request.

##### Parameters

###### request

[`GetMaintenanceRequest`](../interfaces/GetMaintenanceRequest.md)

##### Returns

`Request`\<[`GetMaintenanceRequest`](../interfaces/GetMaintenanceRequest.md), [`Maintenance`](../interfaces/Maintenance.md)\>

#### Call Signature

> **get**(`request`, `metadata`): `Request`\<[`GetMaintenanceRequest`](../interfaces/GetMaintenanceRequest.md), [`Maintenance`](../interfaces/Maintenance.md)\>

Defined in: src/generated/nebius/maintenance/v1alpha1/index.ts:332

##### Parameters

###### request

[`GetMaintenanceRequest`](../interfaces/GetMaintenanceRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`GetMaintenanceRequest`](../interfaces/GetMaintenanceRequest.md), [`Maintenance`](../interfaces/Maintenance.md)\>

#### Call Signature

> **get**(`request`, `metadata`, `options`): `Request`\<[`GetMaintenanceRequest`](../interfaces/GetMaintenanceRequest.md), [`Maintenance`](../interfaces/Maintenance.md)\>

Defined in: src/generated/nebius/maintenance/v1alpha1/index.ts:333

##### Parameters

###### request

[`GetMaintenanceRequest`](../interfaces/GetMaintenanceRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`GetMaintenanceRequest`](../interfaces/GetMaintenanceRequest.md), [`Maintenance`](../interfaces/Maintenance.md)\>

#### Call Signature

> **get**(`request`): `Request`\<[`GetMaintenanceRequest`](../interfaces/GetMaintenanceRequest.md), [`Maintenance`](../interfaces/Maintenance.md)\>

Defined in: src/generated/nebius/maintenance/v1alpha1/index.ts:355

Returns the specified maintenance operation.
 To get the list of upcoming and past maintenance operations, make a [List] request.

##### Parameters

###### request

[`GetMaintenanceRequest`](../interfaces/GetMaintenanceRequest.md)

##### Returns

`Request`\<[`GetMaintenanceRequest`](../interfaces/GetMaintenanceRequest.md), [`Maintenance`](../interfaces/Maintenance.md)\>

#### Call Signature

> **get**(`request`, `metadata`): `Request`\<[`GetMaintenanceRequest`](../interfaces/GetMaintenanceRequest.md), [`Maintenance`](../interfaces/Maintenance.md)\>

Defined in: src/generated/nebius/maintenance/v1alpha1/index.ts:356

Returns the specified maintenance operation.
 To get the list of upcoming and past maintenance operations, make a [List] request.

##### Parameters

###### request

[`GetMaintenanceRequest`](../interfaces/GetMaintenanceRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`GetMaintenanceRequest`](../interfaces/GetMaintenanceRequest.md), [`Maintenance`](../interfaces/Maintenance.md)\>

#### Call Signature

> **get**(`request`, `metadata`, `options`): `Request`\<[`GetMaintenanceRequest`](../interfaces/GetMaintenanceRequest.md), [`Maintenance`](../interfaces/Maintenance.md)\>

Defined in: src/generated/nebius/maintenance/v1alpha1/index.ts:357

Returns the specified maintenance operation.
 To get the list of upcoming and past maintenance operations, make a [List] request.

##### Parameters

###### request

[`GetMaintenanceRequest`](../interfaces/GetMaintenanceRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`GetMaintenanceRequest`](../interfaces/GetMaintenanceRequest.md), [`Maintenance`](../interfaces/Maintenance.md)\>

***

### list()

#### Call Signature

> **list**(`request`): `Request`\<[`ListMaintenancesRequest`](../interfaces/ListMaintenancesRequest.md), [`ListMaintenancesResponse`](../interfaces/ListMaintenancesResponse.md)\>

Defined in: src/generated/nebius/maintenance/v1alpha1/index.ts:339

Retrieves the list of maintenance operations that belong
 to the specified container.

##### Parameters

###### request

[`ListMaintenancesRequest`](../interfaces/ListMaintenancesRequest.md)

##### Returns

`Request`\<[`ListMaintenancesRequest`](../interfaces/ListMaintenancesRequest.md), [`ListMaintenancesResponse`](../interfaces/ListMaintenancesResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`): `Request`\<[`ListMaintenancesRequest`](../interfaces/ListMaintenancesRequest.md), [`ListMaintenancesResponse`](../interfaces/ListMaintenancesResponse.md)\>

Defined in: src/generated/nebius/maintenance/v1alpha1/index.ts:340

##### Parameters

###### request

[`ListMaintenancesRequest`](../interfaces/ListMaintenancesRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`ListMaintenancesRequest`](../interfaces/ListMaintenancesRequest.md), [`ListMaintenancesResponse`](../interfaces/ListMaintenancesResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`, `options`): `Request`\<[`ListMaintenancesRequest`](../interfaces/ListMaintenancesRequest.md), [`ListMaintenancesResponse`](../interfaces/ListMaintenancesResponse.md)\>

Defined in: src/generated/nebius/maintenance/v1alpha1/index.ts:341

##### Parameters

###### request

[`ListMaintenancesRequest`](../interfaces/ListMaintenancesRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`ListMaintenancesRequest`](../interfaces/ListMaintenancesRequest.md), [`ListMaintenancesResponse`](../interfaces/ListMaintenancesResponse.md)\>

#### Call Signature

> **list**(`request`): `Request`\<[`ListMaintenancesRequest`](../interfaces/ListMaintenancesRequest.md), [`ListMaintenancesResponse`](../interfaces/ListMaintenancesResponse.md)\>

Defined in: src/generated/nebius/maintenance/v1alpha1/index.ts:367

Retrieves the list of maintenance operations that belong
 to the specified container.

##### Parameters

###### request

[`ListMaintenancesRequest`](../interfaces/ListMaintenancesRequest.md)

##### Returns

`Request`\<[`ListMaintenancesRequest`](../interfaces/ListMaintenancesRequest.md), [`ListMaintenancesResponse`](../interfaces/ListMaintenancesResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`): `Request`\<[`ListMaintenancesRequest`](../interfaces/ListMaintenancesRequest.md), [`ListMaintenancesResponse`](../interfaces/ListMaintenancesResponse.md)\>

Defined in: src/generated/nebius/maintenance/v1alpha1/index.ts:368

Retrieves the list of maintenance operations that belong
 to the specified container.

##### Parameters

###### request

[`ListMaintenancesRequest`](../interfaces/ListMaintenancesRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`ListMaintenancesRequest`](../interfaces/ListMaintenancesRequest.md), [`ListMaintenancesResponse`](../interfaces/ListMaintenancesResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`, `options`): `Request`\<[`ListMaintenancesRequest`](../interfaces/ListMaintenancesRequest.md), [`ListMaintenancesResponse`](../interfaces/ListMaintenancesResponse.md)\>

Defined in: src/generated/nebius/maintenance/v1alpha1/index.ts:369

Retrieves the list of maintenance operations that belong
 to the specified container.

##### Parameters

###### request

[`ListMaintenancesRequest`](../interfaces/ListMaintenancesRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`ListMaintenancesRequest`](../interfaces/ListMaintenancesRequest.md), [`ListMaintenancesResponse`](../interfaces/ListMaintenancesResponse.md)\>
