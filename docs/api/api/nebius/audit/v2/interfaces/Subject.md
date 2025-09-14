[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/audit/v2](../README.md) / Subject

# Interface: Subject

Defined in: src/api/nebius/audit/v2/index.ts:2498

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/audit/v2/index.ts:2500

***

### $type

> **$type**: `"nebius.audit.v2.Subject"`

Defined in: src/api/nebius/audit/v2/index.ts:2499

***

### id?

> `optional` **id**: \{ `$case`: `"serviceAccountId"`; `serviceAccountId`: `string`; \} \| \{ `$case`: `"tenantUserId"`; `tenantUserId`: `string`; \}

Defined in: src/api/nebius/audit/v2/index.ts:2506

***

### name

> **name**: `string`

Defined in: src/api/nebius/audit/v2/index.ts:2505

Username of the subject.
