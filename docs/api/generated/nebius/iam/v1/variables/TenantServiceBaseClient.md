[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/iam/v1](../README.md) / TenantServiceBaseClient

# Variable: TenantServiceBaseClient

> **TenantServiceBaseClient**: \{(`address`, `credentials`, `options?`): [`TenantServiceBaseClient`](../interfaces/TenantServiceBaseClient.md); `service`: `object`; `serviceName`: `string`; \}

Defined in: src/generated/nebius/iam/v1/index.ts:19808

## Type Declaration

## Parameters

### address

`string`

### credentials

`ChannelCredentials`

### options?

`Partial`\<`ClientOptions`\>

## Returns

[`TenantServiceBaseClient`](../interfaces/TenantServiceBaseClient.md)

### service

> **service**: `object`

#### service.get

> `readonly` **get**: `object`

#### service.get.path

> `readonly` **path**: `"/nebius.iam.v1.TenantService/Get"` = `"/nebius.iam.v1.TenantService/Get"`

#### service.get.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetTenantRequest`](../interfaces/GetTenantRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetTenantRequest`](../interfaces/GetTenantRequest.md)

#### service.get.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetTenantRequest`](../interfaces/GetTenantRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.get.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.get.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Container`](../interfaces/Container.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Container`](../interfaces/Container.md)

#### service.get.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Container`](../interfaces/Container.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.get.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.list

> `readonly` **list**: `object`

#### service.list.path

> `readonly` **path**: `"/nebius.iam.v1.TenantService/List"` = `"/nebius.iam.v1.TenantService/List"`

#### service.list.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListTenantsRequest`](../interfaces/ListTenantsRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListTenantsRequest`](../interfaces/ListTenantsRequest.md)

#### service.list.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListTenantsRequest`](../interfaces/ListTenantsRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.list.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.list.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListTenantsResponse`](../interfaces/ListTenantsResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListTenantsResponse`](../interfaces/ListTenantsResponse.md)

#### service.list.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListTenantsResponse`](../interfaces/ListTenantsResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.list.responseStream

> `readonly` **responseStream**: `false` = `false`

### serviceName

> **serviceName**: `string`
