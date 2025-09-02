[**@nebius/nodejs-sdk**](../../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../../README.md) / [generated/nebius/logging/v1/agentmanager](../README.md) / VersionServiceServiceDescription

# Variable: VersionServiceServiceDescription

> **VersionServiceServiceDescription**: `object`

Defined in: src/generated/nebius/logging/v1/agentmanager/index.ts:1748

## Type Declaration

### getVersion

> `readonly` **getVersion**: `object`

#### getVersion.path

> `readonly` **path**: `"/nebius.logging.agentmanager.v1.VersionService/GetVersion"` = `"/nebius.logging.agentmanager.v1.VersionService/GetVersion"`

#### getVersion.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetVersionRequest`](../interfaces/GetVersionRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetVersionRequest`](../interfaces/GetVersionRequest.md)

#### getVersion.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetVersionRequest`](../interfaces/GetVersionRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### getVersion.requestStream

> `readonly` **requestStream**: `false` = `false`

#### getVersion.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`GetVersionResponse`](../interfaces/GetVersionResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetVersionResponse`](../interfaces/GetVersionResponse.md)

#### getVersion.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetVersionResponse`](../interfaces/GetVersionResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### getVersion.responseStream

> `readonly` **responseStream**: `false` = `false`
