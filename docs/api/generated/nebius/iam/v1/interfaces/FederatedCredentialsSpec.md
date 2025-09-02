[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/iam/v1](../README.md) / FederatedCredentialsSpec

# Interface: FederatedCredentialsSpec

Defined in: src/generated/nebius/iam/v1/index.ts:6858

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/iam/v1/index.ts:6860

***

### $type

> **$type**: `"nebius.iam.v1.FederatedCredentialsSpec"`

Defined in: src/generated/nebius/iam/v1/index.ts:6859

***

### credentialsProvider?

> `optional` **credentialsProvider**: `object`

Defined in: src/generated/nebius/iam/v1/index.ts:6875

provider of federated credentials used for federated subject authentication

#### $case

> **$case**: `"oidcProvider"`

#### oidcProvider

> **oidcProvider**: [`OidcCredentialsProvider`](OidcCredentialsProvider.md)

***

### federatedSubjectId

> **federatedSubjectId**: `string`

Defined in: src/generated/nebius/iam/v1/index.ts:6865

Federated subject ID.For oidc_provider subject will be calculated based on the “sub” claim of the JWT federation token.

***

### subjectId

> **subjectId**: `string`

Defined in: src/generated/nebius/iam/v1/index.ts:6870

IAM subject, in which federated subject will be impersonated to. E.g. for workload identities it will be IAM service account.
