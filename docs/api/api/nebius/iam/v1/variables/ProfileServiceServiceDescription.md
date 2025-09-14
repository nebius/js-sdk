[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/iam/v1](../README.md) / ProfileServiceServiceDescription

# Variable: ProfileServiceServiceDescription

> **ProfileServiceServiceDescription**: `object`

Defined in: src/api/nebius/iam/v1/index.ts:15121

## Type Declaration

### get

> `readonly` **get**: `object`

#### get.path

> `readonly` **path**: `"/nebius.iam.v1.ProfileService/Get"` = `"/nebius.iam.v1.ProfileService/Get"`

#### get.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetProfileRequest`](../interfaces/GetProfileRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetProfileRequest`](../interfaces/GetProfileRequest.md)

#### get.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetProfileRequest`](../interfaces/GetProfileRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### get.requestStream

> `readonly` **requestStream**: `false` = `false`

#### get.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`GetProfileResponse`](../interfaces/GetProfileResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetProfileResponse`](../interfaces/GetProfileResponse.md)

#### get.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetProfileResponse`](../interfaces/GetProfileResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### get.responseStream

> `readonly` **responseStream**: `false` = `false`
