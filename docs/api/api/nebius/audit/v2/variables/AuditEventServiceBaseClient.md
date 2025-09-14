[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/audit/v2](../README.md) / AuditEventServiceBaseClient

# Variable: AuditEventServiceBaseClient

> **AuditEventServiceBaseClient**: \{(`address`, `credentials`, `options?`): [`AuditEventServiceBaseClient`](../interfaces/AuditEventServiceBaseClient.md); `service`: `object`; `serviceName`: `string`; \}

Defined in: src/api/nebius/audit/v2/index.ts:445

## Type Declaration

## Parameters

### address

`string`

### credentials

`ChannelCredentials`

### options?

`Partial`\<`ClientOptions`\>

## Returns

[`AuditEventServiceBaseClient`](../interfaces/AuditEventServiceBaseClient.md)

### service

> **service**: `object`

#### service.list

> `readonly` **list**: `object`

#### service.list.path

> `readonly` **path**: `"/nebius.audit.v2.AuditEventService/List"` = `"/nebius.audit.v2.AuditEventService/List"`

#### service.list.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListAuditEventRequest`](../interfaces/ListAuditEventRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListAuditEventRequest`](../interfaces/ListAuditEventRequest.md)

#### service.list.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListAuditEventRequest`](../interfaces/ListAuditEventRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.list.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.list.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListAuditEventResponse`](../interfaces/ListAuditEventResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListAuditEventResponse`](../interfaces/ListAuditEventResponse.md)

#### service.list.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListAuditEventResponse`](../interfaces/ListAuditEventResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.list.responseStream

> `readonly` **responseStream**: `false` = `false`

### serviceName

> **serviceName**: `string`
