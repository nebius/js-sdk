[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/iam/v1](../README.md) / UserProfile

# Interface: UserProfile

Defined in: src/api/nebius/iam/v1/index.ts:14656

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/iam/v1/index.ts:14658

***

### $type

> **$type**: `"nebius.iam.v1.UserProfile"`

Defined in: src/api/nebius/iam/v1/index.ts:14657

***

### attributesOptional?

> `optional` **attributesOptional**: \{ `$case`: `"attributes"`; `attributes`: [`UserAttributes`](UserAttributes.md); \} \| \{ `$case`: `"retrievingError"`; `retrievingError`: [`Error`](Error.md); \}

Defined in: src/api/nebius/iam/v1/index.ts:14662

***

### federationInfo?

> `optional` **federationInfo**: [`UserAccountExternalId`](UserAccountExternalId.md)

Defined in: src/api/nebius/iam/v1/index.ts:14660

***

### id

> **id**: `string`

Defined in: src/api/nebius/iam/v1/index.ts:14659

***

### tenants

> **tenants**: [`UserTenantInfo`](UserTenantInfo.md)[]

Defined in: src/api/nebius/iam/v1/index.ts:14661
