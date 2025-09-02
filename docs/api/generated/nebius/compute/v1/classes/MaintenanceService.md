[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/compute/v1](../README.md) / MaintenanceService

# Class: MaintenanceService

Defined in: src/generated/nebius/compute/v1/index.ts:9688

## Implements

- `MaintenanceService`

## Constructors

### Constructor

> **new MaintenanceService**(`sdk`): `MaintenanceService`

Defined in: src/generated/nebius/compute/v1/index.ts:9711

#### Parameters

##### sdk

[`SDKInterface`](../../../../../sdk/interfaces/SDKInterface.md)

#### Returns

`MaintenanceService`

## Properties

### $type

> **$type**: `"nebius.compute.v1.MaintenanceService"`

Defined in: src/generated/nebius/compute/v1/index.ts:9689

## Methods

### getByInstance()

#### Call Signature

> **getByInstance**(`request`): `Request`\<[`GetMaintenanceEventByInstanceRequest`](../interfaces/GetMaintenanceEventByInstanceRequest.md), [`MaintenanceEvent`](../interfaces/MaintenanceEvent.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:9694

Returns only active maintenance event for the instance

##### Parameters

###### request

[`GetMaintenanceEventByInstanceRequest`](../interfaces/GetMaintenanceEventByInstanceRequest.md)

##### Returns

`Request`\<[`GetMaintenanceEventByInstanceRequest`](../interfaces/GetMaintenanceEventByInstanceRequest.md), [`MaintenanceEvent`](../interfaces/MaintenanceEvent.md)\>

#### Call Signature

> **getByInstance**(`request`, `metadata`): `Request`\<[`GetMaintenanceEventByInstanceRequest`](../interfaces/GetMaintenanceEventByInstanceRequest.md), [`MaintenanceEvent`](../interfaces/MaintenanceEvent.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:9695

##### Parameters

###### request

[`GetMaintenanceEventByInstanceRequest`](../interfaces/GetMaintenanceEventByInstanceRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`GetMaintenanceEventByInstanceRequest`](../interfaces/GetMaintenanceEventByInstanceRequest.md), [`MaintenanceEvent`](../interfaces/MaintenanceEvent.md)\>

#### Call Signature

> **getByInstance**(`request`, `metadata`, `options`): `Request`\<[`GetMaintenanceEventByInstanceRequest`](../interfaces/GetMaintenanceEventByInstanceRequest.md), [`MaintenanceEvent`](../interfaces/MaintenanceEvent.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:9696

##### Parameters

###### request

[`GetMaintenanceEventByInstanceRequest`](../interfaces/GetMaintenanceEventByInstanceRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`GetMaintenanceEventByInstanceRequest`](../interfaces/GetMaintenanceEventByInstanceRequest.md), [`MaintenanceEvent`](../interfaces/MaintenanceEvent.md)\>

#### Call Signature

> **getByInstance**(`request`): `Request`\<[`GetMaintenanceEventByInstanceRequest`](../interfaces/GetMaintenanceEventByInstanceRequest.md), [`MaintenanceEvent`](../interfaces/MaintenanceEvent.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:9717

Returns only active maintenance event for the instance

##### Parameters

###### request

[`GetMaintenanceEventByInstanceRequest`](../interfaces/GetMaintenanceEventByInstanceRequest.md)

##### Returns

`Request`\<[`GetMaintenanceEventByInstanceRequest`](../interfaces/GetMaintenanceEventByInstanceRequest.md), [`MaintenanceEvent`](../interfaces/MaintenanceEvent.md)\>

#### Call Signature

> **getByInstance**(`request`, `metadata`): `Request`\<[`GetMaintenanceEventByInstanceRequest`](../interfaces/GetMaintenanceEventByInstanceRequest.md), [`MaintenanceEvent`](../interfaces/MaintenanceEvent.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:9718

Returns only active maintenance event for the instance

##### Parameters

###### request

[`GetMaintenanceEventByInstanceRequest`](../interfaces/GetMaintenanceEventByInstanceRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`GetMaintenanceEventByInstanceRequest`](../interfaces/GetMaintenanceEventByInstanceRequest.md), [`MaintenanceEvent`](../interfaces/MaintenanceEvent.md)\>

#### Call Signature

> **getByInstance**(`request`, `metadata`, `options`): `Request`\<[`GetMaintenanceEventByInstanceRequest`](../interfaces/GetMaintenanceEventByInstanceRequest.md), [`MaintenanceEvent`](../interfaces/MaintenanceEvent.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:9719

Returns only active maintenance event for the instance

##### Parameters

###### request

[`GetMaintenanceEventByInstanceRequest`](../interfaces/GetMaintenanceEventByInstanceRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`GetMaintenanceEventByInstanceRequest`](../interfaces/GetMaintenanceEventByInstanceRequest.md), [`MaintenanceEvent`](../interfaces/MaintenanceEvent.md)\>

***

### listActive()

#### Call Signature

> **listActive**(`request`): `Request`\<[`ListMaintenanceEventsRequest`](../interfaces/ListMaintenanceEventsRequest.md), [`ListMaintenanceEventsResponse`](../interfaces/ListMaintenanceEventsResponse.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:9701

Returns all unfinished maintenance events for the parent

##### Parameters

###### request

[`ListMaintenanceEventsRequest`](../interfaces/ListMaintenanceEventsRequest.md)

##### Returns

`Request`\<[`ListMaintenanceEventsRequest`](../interfaces/ListMaintenanceEventsRequest.md), [`ListMaintenanceEventsResponse`](../interfaces/ListMaintenanceEventsResponse.md)\>

#### Call Signature

> **listActive**(`request`, `metadata`): `Request`\<[`ListMaintenanceEventsRequest`](../interfaces/ListMaintenanceEventsRequest.md), [`ListMaintenanceEventsResponse`](../interfaces/ListMaintenanceEventsResponse.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:9702

##### Parameters

###### request

[`ListMaintenanceEventsRequest`](../interfaces/ListMaintenanceEventsRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`ListMaintenanceEventsRequest`](../interfaces/ListMaintenanceEventsRequest.md), [`ListMaintenanceEventsResponse`](../interfaces/ListMaintenanceEventsResponse.md)\>

#### Call Signature

> **listActive**(`request`, `metadata`, `options`): `Request`\<[`ListMaintenanceEventsRequest`](../interfaces/ListMaintenanceEventsRequest.md), [`ListMaintenanceEventsResponse`](../interfaces/ListMaintenanceEventsResponse.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:9703

##### Parameters

###### request

[`ListMaintenanceEventsRequest`](../interfaces/ListMaintenanceEventsRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`ListMaintenanceEventsRequest`](../interfaces/ListMaintenanceEventsRequest.md), [`ListMaintenanceEventsResponse`](../interfaces/ListMaintenanceEventsResponse.md)\>

#### Call Signature

> **listActive**(`request`): `Request`\<[`ListMaintenanceEventsRequest`](../interfaces/ListMaintenanceEventsRequest.md), [`ListMaintenanceEventsResponse`](../interfaces/ListMaintenanceEventsResponse.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:9729

Returns all unfinished maintenance events for the parent

##### Parameters

###### request

[`ListMaintenanceEventsRequest`](../interfaces/ListMaintenanceEventsRequest.md)

##### Returns

`Request`\<[`ListMaintenanceEventsRequest`](../interfaces/ListMaintenanceEventsRequest.md), [`ListMaintenanceEventsResponse`](../interfaces/ListMaintenanceEventsResponse.md)\>

#### Call Signature

> **listActive**(`request`, `metadata`): `Request`\<[`ListMaintenanceEventsRequest`](../interfaces/ListMaintenanceEventsRequest.md), [`ListMaintenanceEventsResponse`](../interfaces/ListMaintenanceEventsResponse.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:9730

Returns all unfinished maintenance events for the parent

##### Parameters

###### request

[`ListMaintenanceEventsRequest`](../interfaces/ListMaintenanceEventsRequest.md)

###### metadata

`Metadata`

##### Returns

`Request`\<[`ListMaintenanceEventsRequest`](../interfaces/ListMaintenanceEventsRequest.md), [`ListMaintenanceEventsResponse`](../interfaces/ListMaintenanceEventsResponse.md)\>

#### Call Signature

> **listActive**(`request`, `metadata`, `options`): `Request`\<[`ListMaintenanceEventsRequest`](../interfaces/ListMaintenanceEventsRequest.md), [`ListMaintenanceEventsResponse`](../interfaces/ListMaintenanceEventsResponse.md)\>

Defined in: src/generated/nebius/compute/v1/index.ts:9731

Returns all unfinished maintenance events for the parent

##### Parameters

###### request

[`ListMaintenanceEventsRequest`](../interfaces/ListMaintenanceEventsRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & `RetryOptions`

##### Returns

`Request`\<[`ListMaintenanceEventsRequest`](../interfaces/ListMaintenanceEventsRequest.md), [`ListMaintenanceEventsResponse`](../interfaces/ListMaintenanceEventsResponse.md)\>
