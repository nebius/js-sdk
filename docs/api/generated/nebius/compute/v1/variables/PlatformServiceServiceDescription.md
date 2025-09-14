[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/compute/v1](../README.md) / PlatformServiceServiceDescription

# Variable: PlatformServiceServiceDescription

> **PlatformServiceServiceDescription**: `object`

Defined in: src/generated/nebius/compute/v1/index.ts:11395

## Type Declaration

### getByName

> `readonly` **getByName**: `object`

#### getByName.path

> `readonly` **path**: `"/nebius.compute.v1.PlatformService/GetByName"` = `"/nebius.compute.v1.PlatformService/GetByName"`

#### getByName.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

#### getByName.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetByNameRequest`](../../../common/v1/interfaces/GetByNameRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### getByName.requestStream

> `readonly` **requestStream**: `false` = `false`

#### getByName.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Platform`](../interfaces/Platform.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Platform`](../interfaces/Platform.md)

#### getByName.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Platform`](../interfaces/Platform.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### getByName.responseStream

> `readonly` **responseStream**: `false` = `false`

### list

> `readonly` **list**: `object`

#### list.path

> `readonly` **path**: `"/nebius.compute.v1.PlatformService/List"` = `"/nebius.compute.v1.PlatformService/List"`

#### list.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListPlatformsRequest`](../interfaces/ListPlatformsRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListPlatformsRequest`](../interfaces/ListPlatformsRequest.md)

#### list.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListPlatformsRequest`](../interfaces/ListPlatformsRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### list.requestStream

> `readonly` **requestStream**: `false` = `false`

#### list.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListPlatformsResponse`](../interfaces/ListPlatformsResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListPlatformsResponse`](../interfaces/ListPlatformsResponse.md)

#### list.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListPlatformsResponse`](../interfaces/ListPlatformsResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### list.responseStream

> `readonly` **responseStream**: `false` = `false`
