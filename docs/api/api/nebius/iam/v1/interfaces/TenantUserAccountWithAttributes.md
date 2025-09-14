[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/iam/v1](../README.md) / TenantUserAccountWithAttributes

# Interface: TenantUserAccountWithAttributes

Defined in: src/api/nebius/iam/v1/index.ts:21182

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/iam/v1/index.ts:21184

***

### $type

> **$type**: `"nebius.iam.v1.TenantUserAccountWithAttributes"`

Defined in: src/api/nebius/iam/v1/index.ts:21183

***

### attributesOptional?

> `optional` **attributesOptional**: \{ `$case`: `"attributes"`; `attributes`: [`UserAttributes`](UserAttributes.md); \} \| \{ `$case`: `"error"`; `error`: [`Error`](Error.md); \}

Defined in: src/api/nebius/iam/v1/index.ts:21186

***

### tenantUserAccount?

> `optional` **tenantUserAccount**: [`TenantUserAccount`](TenantUserAccount.md)

Defined in: src/api/nebius/iam/v1/index.ts:21185
