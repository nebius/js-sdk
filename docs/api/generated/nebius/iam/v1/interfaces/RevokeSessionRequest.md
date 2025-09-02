[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/iam/v1](../README.md) / RevokeSessionRequest

# Interface: RevokeSessionRequest

Defined in: src/generated/nebius/iam/v1/index.ts:17431

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/iam/v1/index.ts:17433

***

### $type

> **$type**: `"nebius.iam.v1.RevokeSessionRequest"`

Defined in: src/generated/nebius/iam/v1/index.ts:17432

***

### revoke?

> `optional` **revoke**: \{ `$case`: `"serviceAccountId"`; `serviceAccountId`: `string`; \} \| \{ `$case`: `"allMyActive"`; `allMyActive`: `boolean`; \} \| \{ `$case`: `"tenantUserAccountId"`; `tenantUserAccountId`: `string`; \}

Defined in: src/generated/nebius/iam/v1/index.ts:17434
