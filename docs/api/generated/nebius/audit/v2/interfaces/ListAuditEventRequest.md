[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/audit/v2](../README.md) / ListAuditEventRequest

# Interface: ListAuditEventRequest

Defined in: src/generated/nebius/audit/v2/index.ts:106

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/audit/v2/index.ts:108

---

### $type

> **$type**: `"nebius.audit.v2.ListAuditEventRequest"`

Defined in: src/generated/nebius/audit/v2/index.ts:107

---

### end?

> `optional` **end**: [`Dayjs`](../../../../../runtime/protos/core/dayjs/classes/Dayjs.md)

Defined in: src/generated/nebius/audit/v2/index.ts:116

---

### filter

> **filter**: `string`

Defined in: src/generated/nebius/audit/v2/index.ts:146

Example:
service.name = 'iam' AND resource.hierarchy.id:'container-e0t' AND regex(resource.metadata.name, '^._test._$')

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

---

### pageSize

> **pageSize**: [`Long`](../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/generated/nebius/audit/v2/index.ts:114

---

### pageToken

> **pageToken**: `string`

Defined in: src/generated/nebius/audit/v2/index.ts:117

---

### parentId

> **parentId**: `string`

Defined in: src/generated/nebius/audit/v2/index.ts:113

A tenant id must be provided

---

### start?

> `optional` **start**: [`Dayjs`](../../../../../runtime/protos/core/dayjs/classes/Dayjs.md)

Defined in: src/generated/nebius/audit/v2/index.ts:115
