[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/quotas/v1](../README.md) / QuotaAllowanceService

# Class: QuotaAllowanceService

Defined in: src/generated/nebius/quotas/v1/index.ts:537

## Implements

- `QuotaAllowanceService`

## Constructors

### Constructor

> **new QuotaAllowanceService**(`sdk`): `QuotaAllowanceService`

Defined in: src/generated/nebius/quotas/v1/index.ts:567

#### Parameters

##### sdk

[`SDKInterface`](../../../../../sdk/interfaces/SDKInterface.md)

#### Returns

`QuotaAllowanceService`

## Properties

### $type

> **$type**: `"nebius.quotas.v1.QuotaAllowanceService"`

Defined in: src/generated/nebius/quotas/v1/index.ts:538

## Methods

### get()

#### Call Signature

> **get**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetQuotaAllowanceRequest`](../interfaces/GetQuotaAllowanceRequest.md), [`QuotaAllowance`](../interfaces/QuotaAllowance.md)\>

Defined in: src/generated/nebius/quotas/v1/index.ts:550

Gets a quota by its ID.

##### Parameters

###### request

[`GetQuotaAllowanceRequest`](../interfaces/GetQuotaAllowanceRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetQuotaAllowanceRequest`](../interfaces/GetQuotaAllowanceRequest.md), [`QuotaAllowance`](../interfaces/QuotaAllowance.md)\>

#### Call Signature

> **get**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetQuotaAllowanceRequest`](../interfaces/GetQuotaAllowanceRequest.md), [`QuotaAllowance`](../interfaces/QuotaAllowance.md)\>

Defined in: src/generated/nebius/quotas/v1/index.ts:551

##### Parameters

###### request

[`GetQuotaAllowanceRequest`](../interfaces/GetQuotaAllowanceRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetQuotaAllowanceRequest`](../interfaces/GetQuotaAllowanceRequest.md), [`QuotaAllowance`](../interfaces/QuotaAllowance.md)\>

#### Call Signature

> **get**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetQuotaAllowanceRequest`](../interfaces/GetQuotaAllowanceRequest.md), [`QuotaAllowance`](../interfaces/QuotaAllowance.md)\>

Defined in: src/generated/nebius/quotas/v1/index.ts:552

##### Parameters

###### request

[`GetQuotaAllowanceRequest`](../interfaces/GetQuotaAllowanceRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetQuotaAllowanceRequest`](../interfaces/GetQuotaAllowanceRequest.md), [`QuotaAllowance`](../interfaces/QuotaAllowance.md)\>

#### Call Signature

> **get**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetQuotaAllowanceRequest`](../interfaces/GetQuotaAllowanceRequest.md), [`QuotaAllowance`](../interfaces/QuotaAllowance.md)\>

Defined in: src/generated/nebius/quotas/v1/index.ts:585

Gets a quota by its ID.

##### Parameters

###### request

[`GetQuotaAllowanceRequest`](../interfaces/GetQuotaAllowanceRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetQuotaAllowanceRequest`](../interfaces/GetQuotaAllowanceRequest.md), [`QuotaAllowance`](../interfaces/QuotaAllowance.md)\>

#### Call Signature

> **get**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetQuotaAllowanceRequest`](../interfaces/GetQuotaAllowanceRequest.md), [`QuotaAllowance`](../interfaces/QuotaAllowance.md)\>

Defined in: src/generated/nebius/quotas/v1/index.ts:586

Gets a quota by its ID.

##### Parameters

###### request

[`GetQuotaAllowanceRequest`](../interfaces/GetQuotaAllowanceRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetQuotaAllowanceRequest`](../interfaces/GetQuotaAllowanceRequest.md), [`QuotaAllowance`](../interfaces/QuotaAllowance.md)\>

#### Call Signature

> **get**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetQuotaAllowanceRequest`](../interfaces/GetQuotaAllowanceRequest.md), [`QuotaAllowance`](../interfaces/QuotaAllowance.md)\>

Defined in: src/generated/nebius/quotas/v1/index.ts:587

Gets a quota by its ID.

##### Parameters

###### request

[`GetQuotaAllowanceRequest`](../interfaces/GetQuotaAllowanceRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetQuotaAllowanceRequest`](../interfaces/GetQuotaAllowanceRequest.md), [`QuotaAllowance`](../interfaces/QuotaAllowance.md)\>

***

### getByName()

#### Call Signature

> **getByName**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../interfaces/GetByNameRequest.md), [`QuotaAllowance`](../interfaces/QuotaAllowance.md)\>

Defined in: src/generated/nebius/quotas/v1/index.ts:557

Gets a quota by an ID of a Tenant or a Project, its region, and name.

##### Parameters

###### request

[`GetByNameRequest`](../interfaces/GetByNameRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../interfaces/GetByNameRequest.md), [`QuotaAllowance`](../interfaces/QuotaAllowance.md)\>

#### Call Signature

> **getByName**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../interfaces/GetByNameRequest.md), [`QuotaAllowance`](../interfaces/QuotaAllowance.md)\>

Defined in: src/generated/nebius/quotas/v1/index.ts:558

##### Parameters

###### request

[`GetByNameRequest`](../interfaces/GetByNameRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../interfaces/GetByNameRequest.md), [`QuotaAllowance`](../interfaces/QuotaAllowance.md)\>

#### Call Signature

> **getByName**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../interfaces/GetByNameRequest.md), [`QuotaAllowance`](../interfaces/QuotaAllowance.md)\>

Defined in: src/generated/nebius/quotas/v1/index.ts:559

##### Parameters

###### request

[`GetByNameRequest`](../interfaces/GetByNameRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../interfaces/GetByNameRequest.md), [`QuotaAllowance`](../interfaces/QuotaAllowance.md)\>

#### Call Signature

> **getByName**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../interfaces/GetByNameRequest.md), [`QuotaAllowance`](../interfaces/QuotaAllowance.md)\>

Defined in: src/generated/nebius/quotas/v1/index.ts:597

Gets a quota by an ID of a Tenant or a Project, its region, and name.

##### Parameters

###### request

[`GetByNameRequest`](../interfaces/GetByNameRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../interfaces/GetByNameRequest.md), [`QuotaAllowance`](../interfaces/QuotaAllowance.md)\>

#### Call Signature

> **getByName**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../interfaces/GetByNameRequest.md), [`QuotaAllowance`](../interfaces/QuotaAllowance.md)\>

Defined in: src/generated/nebius/quotas/v1/index.ts:598

Gets a quota by an ID of a Tenant or a Project, its region, and name.

##### Parameters

###### request

[`GetByNameRequest`](../interfaces/GetByNameRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../interfaces/GetByNameRequest.md), [`QuotaAllowance`](../interfaces/QuotaAllowance.md)\>

#### Call Signature

> **getByName**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../interfaces/GetByNameRequest.md), [`QuotaAllowance`](../interfaces/QuotaAllowance.md)\>

Defined in: src/generated/nebius/quotas/v1/index.ts:599

Gets a quota by an ID of a Tenant or a Project, its region, and name.

##### Parameters

###### request

[`GetByNameRequest`](../interfaces/GetByNameRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`GetByNameRequest`](../interfaces/GetByNameRequest.md), [`QuotaAllowance`](../interfaces/QuotaAllowance.md)\>

***

### list()

#### Call Signature

> **list**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListQuotaAllowancesRequest`](../interfaces/ListQuotaAllowancesRequest.md), [`ListQuotaAllowancesResponse`](../interfaces/ListQuotaAllowancesResponse.md)\>

Defined in: src/generated/nebius/quotas/v1/index.ts:543

Lists quotas by an ID of a Tenant or a Project.

##### Parameters

###### request

[`ListQuotaAllowancesRequest`](../interfaces/ListQuotaAllowancesRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListQuotaAllowancesRequest`](../interfaces/ListQuotaAllowancesRequest.md), [`ListQuotaAllowancesResponse`](../interfaces/ListQuotaAllowancesResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListQuotaAllowancesRequest`](../interfaces/ListQuotaAllowancesRequest.md), [`ListQuotaAllowancesResponse`](../interfaces/ListQuotaAllowancesResponse.md)\>

Defined in: src/generated/nebius/quotas/v1/index.ts:544

##### Parameters

###### request

[`ListQuotaAllowancesRequest`](../interfaces/ListQuotaAllowancesRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListQuotaAllowancesRequest`](../interfaces/ListQuotaAllowancesRequest.md), [`ListQuotaAllowancesResponse`](../interfaces/ListQuotaAllowancesResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListQuotaAllowancesRequest`](../interfaces/ListQuotaAllowancesRequest.md), [`ListQuotaAllowancesResponse`](../interfaces/ListQuotaAllowancesResponse.md)\>

Defined in: src/generated/nebius/quotas/v1/index.ts:545

##### Parameters

###### request

[`ListQuotaAllowancesRequest`](../interfaces/ListQuotaAllowancesRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListQuotaAllowancesRequest`](../interfaces/ListQuotaAllowancesRequest.md), [`ListQuotaAllowancesResponse`](../interfaces/ListQuotaAllowancesResponse.md)\>

#### Call Signature

> **list**(`request`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListQuotaAllowancesRequest`](../interfaces/ListQuotaAllowancesRequest.md), [`ListQuotaAllowancesResponse`](../interfaces/ListQuotaAllowancesResponse.md)\>

Defined in: src/generated/nebius/quotas/v1/index.ts:573

Lists quotas by an ID of a Tenant or a Project.

##### Parameters

###### request

[`ListQuotaAllowancesRequest`](../interfaces/ListQuotaAllowancesRequest.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListQuotaAllowancesRequest`](../interfaces/ListQuotaAllowancesRequest.md), [`ListQuotaAllowancesResponse`](../interfaces/ListQuotaAllowancesResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListQuotaAllowancesRequest`](../interfaces/ListQuotaAllowancesRequest.md), [`ListQuotaAllowancesResponse`](../interfaces/ListQuotaAllowancesResponse.md)\>

Defined in: src/generated/nebius/quotas/v1/index.ts:574

Lists quotas by an ID of a Tenant or a Project.

##### Parameters

###### request

[`ListQuotaAllowancesRequest`](../interfaces/ListQuotaAllowancesRequest.md)

###### metadata

`Metadata`

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListQuotaAllowancesRequest`](../interfaces/ListQuotaAllowancesRequest.md), [`ListQuotaAllowancesResponse`](../interfaces/ListQuotaAllowancesResponse.md)\>

#### Call Signature

> **list**(`request`, `metadata`, `options`): [`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListQuotaAllowancesRequest`](../interfaces/ListQuotaAllowancesRequest.md), [`ListQuotaAllowancesResponse`](../interfaces/ListQuotaAllowancesResponse.md)\>

Defined in: src/generated/nebius/quotas/v1/index.ts:575

Lists quotas by an ID of a Tenant or a Project.

##### Parameters

###### request

[`ListQuotaAllowancesRequest`](../interfaces/ListQuotaAllowancesRequest.md)

###### metadata

`Metadata`

###### options

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../../../../runtime/request/interfaces/RetryOptions.md)

##### Returns

[`Request`](../../../../../runtime/request/classes/Request.md)\<[`ListQuotaAllowancesRequest`](../interfaces/ListQuotaAllowancesRequest.md), [`ListQuotaAllowancesResponse`](../interfaces/ListQuotaAllowancesResponse.md)\>
