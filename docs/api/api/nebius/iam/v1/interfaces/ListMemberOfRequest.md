[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/iam/v1](../README.md) / ListMemberOfRequest

# Interface: ListMemberOfRequest

Defined in: src/api/nebius/iam/v1/index.ts:10253

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/iam/v1/index.ts:10255

***

### $type

> **$type**: `"nebius.iam.v1.ListMemberOfRequest"`

Defined in: src/api/nebius/iam/v1/index.ts:10254

***

### filter

> **filter**: `string`

Defined in: src/api/nebius/iam/v1/index.ts:10267

***

### pageSize?

> `optional` **pageSize**: [`Long`](../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/api/nebius/iam/v1/index.ts:10265

Default value: 10

***

### pageToken

> **pageToken**: `string`

Defined in: src/api/nebius/iam/v1/index.ts:10266

***

### subjectId

> **subjectId**: `string`

Defined in: src/api/nebius/iam/v1/index.ts:10260

Requested subject id. Can be tenant user account id or service account id.
