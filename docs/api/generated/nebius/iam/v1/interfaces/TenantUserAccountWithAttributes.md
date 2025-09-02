[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/iam/v1](../README.md) / TenantUserAccountWithAttributes

# Interface: TenantUserAccountWithAttributes

Defined in: src/generated/nebius/iam/v1/index.ts:21181

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/iam/v1/index.ts:21183

***

### $type

> **$type**: `"nebius.iam.v1.TenantUserAccountWithAttributes"`

Defined in: src/generated/nebius/iam/v1/index.ts:21182

***

### attributesOptional?

> `optional` **attributesOptional**: \{ `$case`: `"attributes"`; `attributes`: [`UserAttributes`](UserAttributes.md); \} \| \{ `$case`: `"error"`; `error`: [`Error`](Error.md); \}

Defined in: src/generated/nebius/iam/v1/index.ts:21185

***

### tenantUserAccount?

> `optional` **tenantUserAccount**: [`TenantUserAccount`](TenantUserAccount.md)

Defined in: src/generated/nebius/iam/v1/index.ts:21184
