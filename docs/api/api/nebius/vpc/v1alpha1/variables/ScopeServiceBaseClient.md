[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/vpc/v1alpha1](../README.md) / ScopeServiceBaseClient

# Variable: ScopeServiceBaseClient

> **ScopeServiceBaseClient**: \{(`address`, `credentials`, `options?`): [`ScopeServiceBaseClient`](../interfaces/ScopeServiceBaseClient.md); `service`: `object`; `serviceName`: `string`; \}

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:5924

## Type Declaration

## Parameters

### address

`string`

### credentials

`ChannelCredentials`

### options?

`Partial`\<`ClientOptions`\>

## Returns

[`ScopeServiceBaseClient`](../interfaces/ScopeServiceBaseClient.md)

### service

> **service**: `object`

#### service.get

> `readonly` **get**: `object`

#### service.get.path

> `readonly` **path**: `"/nebius.vpc.v1alpha1.ScopeService/Get"` = `"/nebius.vpc.v1alpha1.ScopeService/Get"`

#### service.get.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetScopeRequest`](../interfaces/GetScopeRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetScopeRequest`](../interfaces/GetScopeRequest.md)

#### service.get.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetScopeRequest`](../interfaces/GetScopeRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.get.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.get.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Scope`](../interfaces/Scope.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Scope`](../interfaces/Scope.md)

#### service.get.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Scope`](../interfaces/Scope.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.get.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.getByName

> `readonly` **getByName**: `object`

#### service.getByName.path

> `readonly` **path**: `"/nebius.vpc.v1alpha1.ScopeService/GetByName"` = `"/nebius.vpc.v1alpha1.ScopeService/GetByName"`

#### service.getByName.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetScopeByNameRequest`](../interfaces/GetScopeByNameRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetScopeByNameRequest`](../interfaces/GetScopeByNameRequest.md)

#### service.getByName.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetScopeByNameRequest`](../interfaces/GetScopeByNameRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.getByName.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.getByName.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Scope`](../interfaces/Scope.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Scope`](../interfaces/Scope.md)

#### service.getByName.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Scope`](../interfaces/Scope.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.getByName.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.list

> `readonly` **list**: `object`

#### service.list.path

> `readonly` **path**: `"/nebius.vpc.v1alpha1.ScopeService/List"` = `"/nebius.vpc.v1alpha1.ScopeService/List"`

#### service.list.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListScopesRequest`](../interfaces/ListScopesRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListScopesRequest`](../interfaces/ListScopesRequest.md)

#### service.list.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListScopesRequest`](../interfaces/ListScopesRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.list.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.list.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListScopesResponse`](../interfaces/ListScopesResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListScopesResponse`](../interfaces/ListScopesResponse.md)

#### service.list.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListScopesResponse`](../interfaces/ListScopesResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.list.responseStream

> `readonly` **responseStream**: `false` = `false`

### serviceName

> **serviceName**: `string`
