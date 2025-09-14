[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/iam/v1](../README.md) / SessionManagementServiceBaseClient

# Variable: SessionManagementServiceBaseClient

> **SessionManagementServiceBaseClient**: \{(`address`, `credentials`, `options?`): [`SessionManagementServiceBaseClient`](../interfaces/SessionManagementServiceBaseClient.md); `service`: `object`; `serviceName`: `string`; \}

Defined in: src/api/nebius/iam/v1/index.ts:17684

## Type Declaration

## Parameters

### address

`string`

### credentials

`ChannelCredentials`

### options?

`Partial`\<`ClientOptions`\>

## Returns

[`SessionManagementServiceBaseClient`](../interfaces/SessionManagementServiceBaseClient.md)

### service

> **service**: `object`

#### service.revoke

> `readonly` **revoke**: `object`

#### service.revoke.path

> `readonly` **path**: `"/nebius.iam.v1.SessionManagementService/Revoke"` = `"/nebius.iam.v1.SessionManagementService/Revoke"`

#### service.revoke.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`RevokeSessionRequest`](../interfaces/RevokeSessionRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`RevokeSessionRequest`](../interfaces/RevokeSessionRequest.md)

#### service.revoke.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`RevokeSessionRequest`](../interfaces/RevokeSessionRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.revoke.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.revoke.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`RevokeSessionResponse`](../interfaces/RevokeSessionResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`RevokeSessionResponse`](../interfaces/RevokeSessionResponse.md)

#### service.revoke.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`RevokeSessionResponse`](../interfaces/RevokeSessionResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.revoke.responseStream

> `readonly` **responseStream**: `false` = `false`

### serviceName

> **serviceName**: `string`
