[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/quotas/v1](../README.md) / QuotaAllowanceServiceBaseClient

# Variable: QuotaAllowanceServiceBaseClient

> **QuotaAllowanceServiceBaseClient**: \{(`address`, `credentials`, `options?`): [`QuotaAllowanceServiceBaseClient`](../interfaces/QuotaAllowanceServiceBaseClient.md); `service`: `object`; `serviceName`: `string`; \}

Defined in: src/generated/nebius/quotas/v1/index.ts:526

## Type Declaration

## Parameters

### address

`string`

### credentials

`ChannelCredentials`

### options?

`Partial`\<`ClientOptions`\>

## Returns

[`QuotaAllowanceServiceBaseClient`](../interfaces/QuotaAllowanceServiceBaseClient.md)

### service

> **service**: `object`

#### service.get

> `readonly` **get**: `object`

#### service.get.path

> `readonly` **path**: `"/nebius.quotas.v1.QuotaAllowanceService/Get"` = `"/nebius.quotas.v1.QuotaAllowanceService/Get"`

#### service.get.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetQuotaAllowanceRequest`](../interfaces/GetQuotaAllowanceRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetQuotaAllowanceRequest`](../interfaces/GetQuotaAllowanceRequest.md)

#### service.get.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetQuotaAllowanceRequest`](../interfaces/GetQuotaAllowanceRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.get.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.get.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`QuotaAllowance`](../interfaces/QuotaAllowance.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`QuotaAllowance`](../interfaces/QuotaAllowance.md)

#### service.get.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`QuotaAllowance`](../interfaces/QuotaAllowance.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.get.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.getByName

> `readonly` **getByName**: `object`

#### service.getByName.path

> `readonly` **path**: `"/nebius.quotas.v1.QuotaAllowanceService/GetByName"` = `"/nebius.quotas.v1.QuotaAllowanceService/GetByName"`

#### service.getByName.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetByNameRequest`](../interfaces/GetByNameRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetByNameRequest`](../interfaces/GetByNameRequest.md)

#### service.getByName.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetByNameRequest`](../interfaces/GetByNameRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.getByName.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.getByName.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`QuotaAllowance`](../interfaces/QuotaAllowance.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`QuotaAllowance`](../interfaces/QuotaAllowance.md)

#### service.getByName.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`QuotaAllowance`](../interfaces/QuotaAllowance.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.getByName.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.list

> `readonly` **list**: `object`

#### service.list.path

> `readonly` **path**: `"/nebius.quotas.v1.QuotaAllowanceService/List"` = `"/nebius.quotas.v1.QuotaAllowanceService/List"`

#### service.list.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListQuotaAllowancesRequest`](../interfaces/ListQuotaAllowancesRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListQuotaAllowancesRequest`](../interfaces/ListQuotaAllowancesRequest.md)

#### service.list.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListQuotaAllowancesRequest`](../interfaces/ListQuotaAllowancesRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.list.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.list.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListQuotaAllowancesResponse`](../interfaces/ListQuotaAllowancesResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListQuotaAllowancesResponse`](../interfaces/ListQuotaAllowancesResponse.md)

#### service.list.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListQuotaAllowancesResponse`](../interfaces/ListQuotaAllowancesResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.list.responseStream

> `readonly` **responseStream**: `false` = `false`

### serviceName

> **serviceName**: `string`
