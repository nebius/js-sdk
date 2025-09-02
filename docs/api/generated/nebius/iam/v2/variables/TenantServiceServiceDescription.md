[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/iam/v2](../README.md) / TenantServiceServiceDescription

# Variable: TenantServiceServiceDescription

> **TenantServiceServiceDescription**: `object`

Defined in: src/generated/nebius/iam/v2/index.ts:2772

## Type Declaration

### get

> `readonly` **get**: `object`

#### get.path

> `readonly` **path**: `"/nebius.iam.v2.TenantService/Get"` = `"/nebius.iam.v2.TenantService/Get"`

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

> `readonly` **responseDeserialize**: (`value`) => [`Tenant`](../interfaces/Tenant.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Tenant`](../interfaces/Tenant.md)

#### get.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Tenant`](../interfaces/Tenant.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### get.responseStream

> `readonly` **responseStream**: `false` = `false`

### getByName

> `readonly` **getByName**: `object`

#### getByName.path

> `readonly` **path**: `"/nebius.iam.v2.TenantService/GetByName"` = `"/nebius.iam.v2.TenantService/GetByName"`

#### getByName.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetTenantByNameRequest`](../interfaces/GetTenantByNameRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetTenantByNameRequest`](../interfaces/GetTenantByNameRequest.md)

#### getByName.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetTenantByNameRequest`](../interfaces/GetTenantByNameRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### getByName.requestStream

> `readonly` **requestStream**: `false` = `false`

#### getByName.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Tenant`](../interfaces/Tenant.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Tenant`](../interfaces/Tenant.md)

#### getByName.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Tenant`](../interfaces/Tenant.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### getByName.responseStream

> `readonly` **responseStream**: `false` = `false`

### list

> `readonly` **list**: `object`

#### list.path

> `readonly` **path**: `"/nebius.iam.v2.TenantService/List"` = `"/nebius.iam.v2.TenantService/List"`

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

### update

> `readonly` **update**: `object`

#### update.path

> `readonly` **path**: `"/nebius.iam.v2.TenantService/Update"` = `"/nebius.iam.v2.TenantService/Update"`

#### update.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`UpdateTenantRequest`](../interfaces/UpdateTenantRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`UpdateTenantRequest`](../interfaces/UpdateTenantRequest.md)

#### update.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`UpdateTenantRequest`](../interfaces/UpdateTenantRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### update.requestStream

> `readonly` **requestStream**: `false` = `false`

#### update.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../common/v1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../common/v1/interfaces/Operation.md)

#### update.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../common/v1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### update.responseStream

> `readonly` **responseStream**: `false` = `false`
