[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/iam/v1](../README.md) / TenantUserAccountWithAttributesServiceBaseClient

# Variable: TenantUserAccountWithAttributesServiceBaseClient

> **TenantUserAccountWithAttributesServiceBaseClient**: \{(`address`, `credentials`, `options?`): [`TenantUserAccountWithAttributesServiceBaseClient`](../interfaces/TenantUserAccountWithAttributesServiceBaseClient.md); `service`: `object`; `serviceName`: `string`; \}

Defined in: src/generated/nebius/iam/v1/index.ts:20925

## Type Declaration

## Parameters

### address

`string`

### credentials

`ChannelCredentials`

### options?

`Partial`\<`ClientOptions`\>

## Returns

[`TenantUserAccountWithAttributesServiceBaseClient`](../interfaces/TenantUserAccountWithAttributesServiceBaseClient.md)

### service

> **service**: `object`

#### service.get

> `readonly` **get**: `object`

#### service.get.path

> `readonly` **path**: `"/nebius.iam.v1.TenantUserAccountWithAttributesService/Get"` = `"/nebius.iam.v1.TenantUserAccountWithAttributesService/Get"`

#### service.get.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetTenantUserAccountWithAttributesRequest`](../interfaces/GetTenantUserAccountWithAttributesRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetTenantUserAccountWithAttributesRequest`](../interfaces/GetTenantUserAccountWithAttributesRequest.md)

#### service.get.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetTenantUserAccountWithAttributesRequest`](../interfaces/GetTenantUserAccountWithAttributesRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.get.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.get.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`TenantUserAccountWithAttributes`](../interfaces/TenantUserAccountWithAttributes.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`TenantUserAccountWithAttributes`](../interfaces/TenantUserAccountWithAttributes.md)

#### service.get.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`TenantUserAccountWithAttributes`](../interfaces/TenantUserAccountWithAttributes.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.get.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.list

> `readonly` **list**: `object`

#### service.list.path

> `readonly` **path**: `"/nebius.iam.v1.TenantUserAccountWithAttributesService/List"` = `"/nebius.iam.v1.TenantUserAccountWithAttributesService/List"`

#### service.list.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListTenantUserAccountsWithAttributesRequest`](../interfaces/ListTenantUserAccountsWithAttributesRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListTenantUserAccountsWithAttributesRequest`](../interfaces/ListTenantUserAccountsWithAttributesRequest.md)

#### service.list.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListTenantUserAccountsWithAttributesRequest`](../interfaces/ListTenantUserAccountsWithAttributesRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.list.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.list.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListTenantUserAccountsWithAttributesResponse`](../interfaces/ListTenantUserAccountsWithAttributesResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListTenantUserAccountsWithAttributesResponse`](../interfaces/ListTenantUserAccountsWithAttributesResponse.md)

#### service.list.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListTenantUserAccountsWithAttributesResponse`](../interfaces/ListTenantUserAccountsWithAttributesResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.list.responseStream

> `readonly` **responseStream**: `false` = `false`

### serviceName

> **serviceName**: `string`
