[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/iam/v1](../README.md) / TenantUserAccountWithAttributesServiceServiceDescription

# Variable: TenantUserAccountWithAttributesServiceServiceDescription

> **TenantUserAccountWithAttributesServiceServiceDescription**: `object`

Defined in: src/api/nebius/iam/v1/index.ts:20899

## Type Declaration

### get

> `readonly` **get**: `object`

#### get.path

> `readonly` **path**: `"/nebius.iam.v1.TenantUserAccountWithAttributesService/Get"` = `"/nebius.iam.v1.TenantUserAccountWithAttributesService/Get"`

#### get.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetTenantUserAccountWithAttributesRequest`](../interfaces/GetTenantUserAccountWithAttributesRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetTenantUserAccountWithAttributesRequest`](../interfaces/GetTenantUserAccountWithAttributesRequest.md)

#### get.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetTenantUserAccountWithAttributesRequest`](../interfaces/GetTenantUserAccountWithAttributesRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### get.requestStream

> `readonly` **requestStream**: `false` = `false`

#### get.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`TenantUserAccountWithAttributes`](../interfaces/TenantUserAccountWithAttributes.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`TenantUserAccountWithAttributes`](../interfaces/TenantUserAccountWithAttributes.md)

#### get.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`TenantUserAccountWithAttributes`](../interfaces/TenantUserAccountWithAttributes.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### get.responseStream

> `readonly` **responseStream**: `false` = `false`

### list

> `readonly` **list**: `object`

#### list.path

> `readonly` **path**: `"/nebius.iam.v1.TenantUserAccountWithAttributesService/List"` = `"/nebius.iam.v1.TenantUserAccountWithAttributesService/List"`

#### list.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListTenantUserAccountsWithAttributesRequest`](../interfaces/ListTenantUserAccountsWithAttributesRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListTenantUserAccountsWithAttributesRequest`](../interfaces/ListTenantUserAccountsWithAttributesRequest.md)

#### list.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListTenantUserAccountsWithAttributesRequest`](../interfaces/ListTenantUserAccountsWithAttributesRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### list.requestStream

> `readonly` **requestStream**: `false` = `false`

#### list.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListTenantUserAccountsWithAttributesResponse`](../interfaces/ListTenantUserAccountsWithAttributesResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListTenantUserAccountsWithAttributesResponse`](../interfaces/ListTenantUserAccountsWithAttributesResponse.md)

#### list.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListTenantUserAccountsWithAttributesResponse`](../interfaces/ListTenantUserAccountsWithAttributesResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### list.responseStream

> `readonly` **responseStream**: `false` = `false`
