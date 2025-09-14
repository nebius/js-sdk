[**@nebius/nodejs-sdk**](../../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../../README.md) / [generated/nebius/logging/v1/agentmanager](../README.md) / VersionServiceBaseClient

# Variable: VersionServiceBaseClient

> **VersionServiceBaseClient**: \{(`address`, `credentials`, `options?`): [`VersionServiceBaseClient`](../interfaces/VersionServiceBaseClient.md); `service`: `object`; `serviceName`: `string`; \}

Defined in: src/generated/nebius/logging/v1/agentmanager/index.ts:1766

## Type Declaration

## Parameters

### address

`string`

### credentials

`ChannelCredentials`

### options?

`Partial`\<`ClientOptions`\>

## Returns

[`VersionServiceBaseClient`](../interfaces/VersionServiceBaseClient.md)

### service

> **service**: `object`

#### service.getVersion

> `readonly` **getVersion**: `object`

#### service.getVersion.path

> `readonly` **path**: `"/nebius.logging.agentmanager.v1.VersionService/GetVersion"` = `"/nebius.logging.agentmanager.v1.VersionService/GetVersion"`

#### service.getVersion.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetVersionRequest`](../interfaces/GetVersionRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetVersionRequest`](../interfaces/GetVersionRequest.md)

#### service.getVersion.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetVersionRequest`](../interfaces/GetVersionRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.getVersion.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.getVersion.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`GetVersionResponse`](../interfaces/GetVersionResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetVersionResponse`](../interfaces/GetVersionResponse.md)

#### service.getVersion.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetVersionResponse`](../interfaces/GetVersionResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.getVersion.responseStream

> `readonly` **responseStream**: `false` = `false`

### serviceName

> **serviceName**: `string`
