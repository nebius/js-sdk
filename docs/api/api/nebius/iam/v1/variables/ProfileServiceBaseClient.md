[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/iam/v1](../README.md) / ProfileServiceBaseClient

# Variable: ProfileServiceBaseClient

> **ProfileServiceBaseClient**: \{(`address`, `credentials`, `options?`): [`ProfileServiceBaseClient`](../interfaces/ProfileServiceBaseClient.md); `service`: `object`; `serviceName`: `string`; \}

Defined in: src/api/nebius/iam/v1/index.ts:15138

## Type Declaration

## Parameters

### address

`string`

### credentials

`ChannelCredentials`

### options?

`Partial`\<`ClientOptions`\>

## Returns

[`ProfileServiceBaseClient`](../interfaces/ProfileServiceBaseClient.md)

### service

> **service**: `object`

#### service.get

> `readonly` **get**: `object`

#### service.get.path

> `readonly` **path**: `"/nebius.iam.v1.ProfileService/Get"` = `"/nebius.iam.v1.ProfileService/Get"`

#### service.get.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetProfileRequest`](../interfaces/GetProfileRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetProfileRequest`](../interfaces/GetProfileRequest.md)

#### service.get.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetProfileRequest`](../interfaces/GetProfileRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.get.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.get.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`GetProfileResponse`](../interfaces/GetProfileResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetProfileResponse`](../interfaces/GetProfileResponse.md)

#### service.get.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetProfileResponse`](../interfaces/GetProfileResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.get.responseStream

> `readonly` **responseStream**: `false` = `false`

### serviceName

> **serviceName**: `string`
