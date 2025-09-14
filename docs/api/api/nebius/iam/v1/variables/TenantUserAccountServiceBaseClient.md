[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/iam/v1](../README.md) / TenantUserAccountServiceBaseClient

# Variable: TenantUserAccountServiceBaseClient

> **TenantUserAccountServiceBaseClient**: \{(`address`, `credentials`, `options?`): [`TenantUserAccountServiceBaseClient`](../interfaces/TenantUserAccountServiceBaseClient.md); `service`: `object`; `serviceName`: `string`; \}

Defined in: src/api/nebius/iam/v1/index.ts:20441

## Type Declaration

## Parameters

### address

`string`

### credentials

`ChannelCredentials`

### options?

`Partial`\<`ClientOptions`\>

## Returns

[`TenantUserAccountServiceBaseClient`](../interfaces/TenantUserAccountServiceBaseClient.md)

### service

> **service**: `object`

#### service.block

> `readonly` **block**: `object`

#### service.block.path

> `readonly` **path**: `"/nebius.iam.v1.TenantUserAccountService/Block"` = `"/nebius.iam.v1.TenantUserAccountService/Block"`

#### service.block.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`BlockTenantUserAccountRequest`](../interfaces/BlockTenantUserAccountRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`BlockTenantUserAccountRequest`](../interfaces/BlockTenantUserAccountRequest.md)

#### service.block.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`BlockTenantUserAccountRequest`](../interfaces/BlockTenantUserAccountRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.block.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.block.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../common/v1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../common/v1/interfaces/Operation.md)

#### service.block.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../common/v1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.block.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.get

> `readonly` **get**: `object`

#### service.get.path

> `readonly` **path**: `"/nebius.iam.v1.TenantUserAccountService/Get"` = `"/nebius.iam.v1.TenantUserAccountService/Get"`

#### service.get.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetTenantUserAccountRequest`](../interfaces/GetTenantUserAccountRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetTenantUserAccountRequest`](../interfaces/GetTenantUserAccountRequest.md)

#### service.get.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetTenantUserAccountRequest`](../interfaces/GetTenantUserAccountRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.get.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.get.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`TenantUserAccount`](../interfaces/TenantUserAccount.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`TenantUserAccount`](../interfaces/TenantUserAccount.md)

#### service.get.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`TenantUserAccount`](../interfaces/TenantUserAccount.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.get.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.list

> `readonly` **list**: `object`

#### service.list.path

> `readonly` **path**: `"/nebius.iam.v1.TenantUserAccountService/List"` = `"/nebius.iam.v1.TenantUserAccountService/List"`

#### service.list.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListTenantUserAccountsRequest`](../interfaces/ListTenantUserAccountsRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListTenantUserAccountsRequest`](../interfaces/ListTenantUserAccountsRequest.md)

#### service.list.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListTenantUserAccountsRequest`](../interfaces/ListTenantUserAccountsRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.list.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.list.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListTenantUserAccountsResponse`](../interfaces/ListTenantUserAccountsResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListTenantUserAccountsResponse`](../interfaces/ListTenantUserAccountsResponse.md)

#### service.list.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListTenantUserAccountsResponse`](../interfaces/ListTenantUserAccountsResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.list.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.unblock

> `readonly` **unblock**: `object`

#### service.unblock.path

> `readonly` **path**: `"/nebius.iam.v1.TenantUserAccountService/Unblock"` = `"/nebius.iam.v1.TenantUserAccountService/Unblock"`

#### service.unblock.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`UnblockTenantUserAccountRequest`](../interfaces/UnblockTenantUserAccountRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`UnblockTenantUserAccountRequest`](../interfaces/UnblockTenantUserAccountRequest.md)

#### service.unblock.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`UnblockTenantUserAccountRequest`](../interfaces/UnblockTenantUserAccountRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.unblock.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.unblock.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../common/v1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../common/v1/interfaces/Operation.md)

#### service.unblock.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../common/v1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.unblock.responseStream

> `readonly` **responseStream**: `false` = `false`

### serviceName

> **serviceName**: `string`
