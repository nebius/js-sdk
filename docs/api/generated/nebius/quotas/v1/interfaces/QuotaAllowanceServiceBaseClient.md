[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/quotas/v1](../README.md) / QuotaAllowanceServiceBaseClient

# Interface: QuotaAllowanceServiceBaseClient

Defined in: src/generated/nebius/quotas/v1/index.ts:525

## Extends

- `Client`

## Methods

### get()

> **get**(`request`, `metadata`, `options`, `callback`): `SurfaceCall`

Defined in: src/generated/nebius/quotas/v1/index.ts:527

#### Parameters

##### request

[`GetQuotaAllowanceRequest`](GetQuotaAllowanceRequest.md)

##### metadata

`Metadata`

##### options

`Partial`\<`CallOptions`\>

##### callback

(`error`, `response`) => `void`

#### Returns

`SurfaceCall`

***

### getByName()

> **getByName**(`request`, `metadata`, `options`, `callback`): `SurfaceCall`

Defined in: src/generated/nebius/quotas/v1/index.ts:528

#### Parameters

##### request

[`GetByNameRequest`](GetByNameRequest.md)

##### metadata

`Metadata`

##### options

`Partial`\<`CallOptions`\>

##### callback

(`error`, `response`) => `void`

#### Returns

`SurfaceCall`

***

### list()

> **list**(`request`, `metadata`, `options`, `callback`): `SurfaceCall`

Defined in: src/generated/nebius/quotas/v1/index.ts:526

#### Parameters

##### request

[`ListQuotaAllowancesRequest`](ListQuotaAllowancesRequest.md)

##### metadata

`Metadata`

##### options

`Partial`\<`CallOptions`\>

##### callback

(`error`, `response`) => `void`

#### Returns

`SurfaceCall`
