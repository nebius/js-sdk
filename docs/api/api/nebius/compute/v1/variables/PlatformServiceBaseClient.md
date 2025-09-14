[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/compute/v1](../README.md) / PlatformServiceBaseClient

# Variable: PlatformServiceBaseClient

> **PlatformServiceBaseClient**: \{(`address`, `credentials`, `options?`): [`PlatformServiceBaseClient`](../interfaces/PlatformServiceBaseClient.md); `service`: `object`; `serviceName`: `string`; \}

Defined in: src/api/nebius/compute/v1/index.ts:11422

## Type Declaration

## Parameters

### address

`string`

### credentials

`ChannelCredentials`

### options?

`Partial`\<`ClientOptions`\>

## Returns

[`PlatformServiceBaseClient`](../interfaces/PlatformServiceBaseClient.md)

### service

> **service**: `object`

#### service.getByName

> `readonly` **getByName**: `object`

#### service.getByName.path

> `readonly` **path**: `"/nebius.compute.v1.PlatformService/GetByName"` = `"/nebius.compute.v1.PlatformService/GetByName"`

#### service.getByName.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

#### service.getByName.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.getByName.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.getByName.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Platform`](../interfaces/Platform.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Platform`](../interfaces/Platform.md)

#### service.getByName.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Platform`](../interfaces/Platform.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.getByName.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.list

> `readonly` **list**: `object`

#### service.list.path

> `readonly` **path**: `"/nebius.compute.v1.PlatformService/List"` = `"/nebius.compute.v1.PlatformService/List"`

#### service.list.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListPlatformsRequest`](../interfaces/ListPlatformsRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListPlatformsRequest`](../interfaces/ListPlatformsRequest.md)

#### service.list.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListPlatformsRequest`](../interfaces/ListPlatformsRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.list.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.list.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListPlatformsResponse`](../interfaces/ListPlatformsResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListPlatformsResponse`](../interfaces/ListPlatformsResponse.md)

#### service.list.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListPlatformsResponse`](../interfaces/ListPlatformsResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.list.responseStream

> `readonly` **responseStream**: `false` = `false`

### serviceName

> **serviceName**: `string`
