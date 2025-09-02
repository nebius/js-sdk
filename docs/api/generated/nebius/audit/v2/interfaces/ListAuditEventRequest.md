[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/audit/v2](../README.md) / ListAuditEventRequest

# Interface: ListAuditEventRequest

Defined in: src/generated/nebius/audit/v2/index.ts:105

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/audit/v2/index.ts:107

***

### $type

> **$type**: `"nebius.audit.v2.ListAuditEventRequest"`

Defined in: src/generated/nebius/audit/v2/index.ts:106

***

### end?

> `optional` **end**: [`Dayjs`](../../../../../runtime/protos/core/dayjs/classes/Dayjs.md)

Defined in: src/generated/nebius/audit/v2/index.ts:115

***

### filter

> **filter**: `string`

Defined in: src/generated/nebius/audit/v2/index.ts:145

Example:
 service.name = 'iam' AND resource.hierarchy.id:'container-e0t' AND regex(resource.metadata.name, '^.*test.*$')

 Supported filters:
 "=" - equals
 "!=" - not equals
 ":" - contains
 regex - regular expression

 Fields that can be used for filtering:
 action
 authentication.static_key_credential.id
 authentication.subject.name
 authentication.subject.service_account_id
 authentication.subject.tenant_user_id
 authentication.token_credential.masked_token
 project_region.name
 resource.hierarchy.id
 resource.hierarchy.name
 resource.metadata.id
 resource.metadata.name
 resource.metadata.type
 service.name
 type
 status

***

### pageSize

> **pageSize**: [`Long`](../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/generated/nebius/audit/v2/index.ts:113

***

### pageToken

> **pageToken**: `string`

Defined in: src/generated/nebius/audit/v2/index.ts:116

***

### parentId

> **parentId**: `string`

Defined in: src/generated/nebius/audit/v2/index.ts:112

A tenant id must be provided

***

### start?

> `optional` **start**: [`Dayjs`](../../../../../runtime/protos/core/dayjs/classes/Dayjs.md)

Defined in: src/generated/nebius/audit/v2/index.ts:114
