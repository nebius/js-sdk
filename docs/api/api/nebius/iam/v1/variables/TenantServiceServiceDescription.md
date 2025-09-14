[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/iam/v1](../README.md) / TenantServiceServiceDescription

# Variable: TenantServiceServiceDescription

> **TenantServiceServiceDescription**: `object`

Defined in: src/api/nebius/iam/v1/index.ts:19781

## Type Declaration

### get

> `readonly` **get**: `object`

#### get.path

> `readonly` **path**: `"/nebius.iam.v1.TenantService/Get"` = `"/nebius.iam.v1.TenantService/Get"`

#### get.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetTenantRequest`](../interfaces/GetTenantRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetTenantRequest`](../interfaces/GetTenantRequest.md)

#### get.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetTenantRequest`](../interfaces/GetTenantRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### get.requestStream

> `readonly` **requestStream**: `false` = `false`

#### get.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Container`](../interfaces/Container.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Container`](../interfaces/Container.md)

#### get.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Container`](../interfaces/Container.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### get.responseStream

> `readonly` **responseStream**: `false` = `false`

### list

> `readonly` **list**: `object`

#### list.path

> `readonly` **path**: `"/nebius.iam.v1.TenantService/List"` = `"/nebius.iam.v1.TenantService/List"`

#### list.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListTenantsRequest`](../interfaces/ListTenantsRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListTenantsRequest`](../interfaces/ListTenantsRequest.md)

#### list.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListTenantsRequest`](../interfaces/ListTenantsRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### list.requestStream

> `readonly` **requestStream**: `false` = `false`

#### list.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListTenantsResponse`](../interfaces/ListTenantsResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListTenantsResponse`](../interfaces/ListTenantsResponse.md)

#### list.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListTenantsResponse`](../interfaces/ListTenantsResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### list.responseStream

> `readonly` **responseStream**: `false` = `false`
