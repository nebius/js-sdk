[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/iam/v1](../README.md) / TenantUserAccountServiceServiceDescription

# Variable: TenantUserAccountServiceServiceDescription

> **TenantUserAccountServiceServiceDescription**: `object`

Defined in: src/api/nebius/iam/v1/index.ts:20394

## Type Declaration

### block

> `readonly` **block**: `object`

#### block.path

> `readonly` **path**: `"/nebius.iam.v1.TenantUserAccountService/Block"` = `"/nebius.iam.v1.TenantUserAccountService/Block"`

#### block.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`BlockTenantUserAccountRequest`](../interfaces/BlockTenantUserAccountRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`BlockTenantUserAccountRequest`](../interfaces/BlockTenantUserAccountRequest.md)

#### block.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`BlockTenantUserAccountRequest`](../interfaces/BlockTenantUserAccountRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### block.requestStream

> `readonly` **requestStream**: `false` = `false`

#### block.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../common/v1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../common/v1/interfaces/Operation.md)

#### block.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../common/v1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### block.responseStream

> `readonly` **responseStream**: `false` = `false`

### get

> `readonly` **get**: `object`

#### get.path

> `readonly` **path**: `"/nebius.iam.v1.TenantUserAccountService/Get"` = `"/nebius.iam.v1.TenantUserAccountService/Get"`

#### get.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetTenantUserAccountRequest`](../interfaces/GetTenantUserAccountRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetTenantUserAccountRequest`](../interfaces/GetTenantUserAccountRequest.md)

#### get.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetTenantUserAccountRequest`](../interfaces/GetTenantUserAccountRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### get.requestStream

> `readonly` **requestStream**: `false` = `false`

#### get.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`TenantUserAccount`](../interfaces/TenantUserAccount.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`TenantUserAccount`](../interfaces/TenantUserAccount.md)

#### get.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`TenantUserAccount`](../interfaces/TenantUserAccount.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### get.responseStream

> `readonly` **responseStream**: `false` = `false`

### list

> `readonly` **list**: `object`

#### list.path

> `readonly` **path**: `"/nebius.iam.v1.TenantUserAccountService/List"` = `"/nebius.iam.v1.TenantUserAccountService/List"`

#### list.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListTenantUserAccountsRequest`](../interfaces/ListTenantUserAccountsRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListTenantUserAccountsRequest`](../interfaces/ListTenantUserAccountsRequest.md)

#### list.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListTenantUserAccountsRequest`](../interfaces/ListTenantUserAccountsRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### list.requestStream

> `readonly` **requestStream**: `false` = `false`

#### list.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListTenantUserAccountsResponse`](../interfaces/ListTenantUserAccountsResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListTenantUserAccountsResponse`](../interfaces/ListTenantUserAccountsResponse.md)

#### list.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListTenantUserAccountsResponse`](../interfaces/ListTenantUserAccountsResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### list.responseStream

> `readonly` **responseStream**: `false` = `false`

### unblock

> `readonly` **unblock**: `object`

#### unblock.path

> `readonly` **path**: `"/nebius.iam.v1.TenantUserAccountService/Unblock"` = `"/nebius.iam.v1.TenantUserAccountService/Unblock"`

#### unblock.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`UnblockTenantUserAccountRequest`](../interfaces/UnblockTenantUserAccountRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`UnblockTenantUserAccountRequest`](../interfaces/UnblockTenantUserAccountRequest.md)

#### unblock.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`UnblockTenantUserAccountRequest`](../interfaces/UnblockTenantUserAccountRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### unblock.requestStream

> `readonly` **requestStream**: `false` = `false`

#### unblock.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../common/v1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../common/v1/interfaces/Operation.md)

#### unblock.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../common/v1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### unblock.responseStream

> `readonly` **responseStream**: `false` = `false`
