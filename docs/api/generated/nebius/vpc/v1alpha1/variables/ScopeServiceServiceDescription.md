[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/vpc/v1alpha1](../README.md) / ScopeServiceServiceDescription

# Variable: ScopeServiceServiceDescription

> **ScopeServiceServiceDescription**: `object`

Defined in: src/generated/nebius/vpc/v1alpha1/index.ts:5887

## Type Declaration

### get

> `readonly` **get**: `object`

#### get.path

> `readonly` **path**: `"/nebius.vpc.v1alpha1.ScopeService/Get"` = `"/nebius.vpc.v1alpha1.ScopeService/Get"`

#### get.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetScopeRequest`](../interfaces/GetScopeRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetScopeRequest`](../interfaces/GetScopeRequest.md)

#### get.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetScopeRequest`](../interfaces/GetScopeRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### get.requestStream

> `readonly` **requestStream**: `false` = `false`

#### get.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Scope`](../interfaces/Scope.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Scope`](../interfaces/Scope.md)

#### get.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Scope`](../interfaces/Scope.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### get.responseStream

> `readonly` **responseStream**: `false` = `false`

### getByName

> `readonly` **getByName**: `object`

#### getByName.path

> `readonly` **path**: `"/nebius.vpc.v1alpha1.ScopeService/GetByName"` = `"/nebius.vpc.v1alpha1.ScopeService/GetByName"`

#### getByName.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetScopeByNameRequest`](../interfaces/GetScopeByNameRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetScopeByNameRequest`](../interfaces/GetScopeByNameRequest.md)

#### getByName.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetScopeByNameRequest`](../interfaces/GetScopeByNameRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### getByName.requestStream

> `readonly` **requestStream**: `false` = `false`

#### getByName.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Scope`](../interfaces/Scope.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Scope`](../interfaces/Scope.md)

#### getByName.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Scope`](../interfaces/Scope.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### getByName.responseStream

> `readonly` **responseStream**: `false` = `false`

### list

> `readonly` **list**: `object`

#### list.path

> `readonly` **path**: `"/nebius.vpc.v1alpha1.ScopeService/List"` = `"/nebius.vpc.v1alpha1.ScopeService/List"`

#### list.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListScopesRequest`](../interfaces/ListScopesRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListScopesRequest`](../interfaces/ListScopesRequest.md)

#### list.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListScopesRequest`](../interfaces/ListScopesRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### list.requestStream

> `readonly` **requestStream**: `false` = `false`

#### list.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListScopesResponse`](../interfaces/ListScopesResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListScopesResponse`](../interfaces/ListScopesResponse.md)

#### list.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListScopesResponse`](../interfaces/ListScopesResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### list.responseStream

> `readonly` **responseStream**: `false` = `false`
