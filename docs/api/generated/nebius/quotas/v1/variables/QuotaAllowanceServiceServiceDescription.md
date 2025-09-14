[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/quotas/v1](../README.md) / QuotaAllowanceServiceServiceDescription

# Variable: QuotaAllowanceServiceServiceDescription

> **QuotaAllowanceServiceServiceDescription**: `object`

Defined in: src/generated/nebius/quotas/v1/index.ts:489

## Type Declaration

### get

> `readonly` **get**: `object`

#### get.path

> `readonly` **path**: `"/nebius.quotas.v1.QuotaAllowanceService/Get"` = `"/nebius.quotas.v1.QuotaAllowanceService/Get"`

#### get.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetQuotaAllowanceRequest`](../interfaces/GetQuotaAllowanceRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetQuotaAllowanceRequest`](../interfaces/GetQuotaAllowanceRequest.md)

#### get.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetQuotaAllowanceRequest`](../interfaces/GetQuotaAllowanceRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### get.requestStream

> `readonly` **requestStream**: `false` = `false`

#### get.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`QuotaAllowance`](../interfaces/QuotaAllowance.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`QuotaAllowance`](../interfaces/QuotaAllowance.md)

#### get.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`QuotaAllowance`](../interfaces/QuotaAllowance.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### get.responseStream

> `readonly` **responseStream**: `false` = `false`

### getByName

> `readonly` **getByName**: `object`

#### getByName.path

> `readonly` **path**: `"/nebius.quotas.v1.QuotaAllowanceService/GetByName"` = `"/nebius.quotas.v1.QuotaAllowanceService/GetByName"`

#### getByName.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetByNameRequest`](../interfaces/GetByNameRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetByNameRequest`](../interfaces/GetByNameRequest.md)

#### getByName.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetByNameRequest`](../interfaces/GetByNameRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### getByName.requestStream

> `readonly` **requestStream**: `false` = `false`

#### getByName.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`QuotaAllowance`](../interfaces/QuotaAllowance.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`QuotaAllowance`](../interfaces/QuotaAllowance.md)

#### getByName.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`QuotaAllowance`](../interfaces/QuotaAllowance.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### getByName.responseStream

> `readonly` **responseStream**: `false` = `false`

### list

> `readonly` **list**: `object`

#### list.path

> `readonly` **path**: `"/nebius.quotas.v1.QuotaAllowanceService/List"` = `"/nebius.quotas.v1.QuotaAllowanceService/List"`

#### list.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListQuotaAllowancesRequest`](../interfaces/ListQuotaAllowancesRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListQuotaAllowancesRequest`](../interfaces/ListQuotaAllowancesRequest.md)

#### list.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListQuotaAllowancesRequest`](../interfaces/ListQuotaAllowancesRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### list.requestStream

> `readonly` **requestStream**: `false` = `false`

#### list.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListQuotaAllowancesResponse`](../interfaces/ListQuotaAllowancesResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListQuotaAllowancesResponse`](../interfaces/ListQuotaAllowancesResponse.md)

#### list.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListQuotaAllowancesResponse`](../interfaces/ListQuotaAllowancesResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### list.responseStream

> `readonly` **responseStream**: `false` = `false`
