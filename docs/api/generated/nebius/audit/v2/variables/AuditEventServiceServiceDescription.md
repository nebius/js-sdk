[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/audit/v2](../README.md) / AuditEventServiceServiceDescription

# Variable: AuditEventServiceServiceDescription

> **AuditEventServiceServiceDescription**: `object`

Defined in: src/generated/nebius/audit/v2/index.ts:427

## Type Declaration

### list

> `readonly` **list**: `object`

#### list.path

> `readonly` **path**: `"/nebius.audit.v2.AuditEventService/List"` = `"/nebius.audit.v2.AuditEventService/List"`

#### list.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListAuditEventRequest`](../interfaces/ListAuditEventRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListAuditEventRequest`](../interfaces/ListAuditEventRequest.md)

#### list.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListAuditEventRequest`](../interfaces/ListAuditEventRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### list.requestStream

> `readonly` **requestStream**: `false` = `false`

#### list.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListAuditEventResponse`](../interfaces/ListAuditEventResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListAuditEventResponse`](../interfaces/ListAuditEventResponse.md)

#### list.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListAuditEventResponse`](../interfaces/ListAuditEventResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### list.responseStream

> `readonly` **responseStream**: `false` = `false`
