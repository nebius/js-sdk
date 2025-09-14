[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/iam/v1](../README.md) / KeyIdentity

# Interface: KeyIdentity

Defined in: src/api/nebius/iam/v1/index.ts:128

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/iam/v1/index.ts:130

***

### $type

> **$type**: `"nebius.iam.v1.KeyIdentity"`

Defined in: src/api/nebius/iam/v1/index.ts:129

***

### identity?

> `optional` **identity**: \{ `$case`: `"id"`; `id`: `string`; \} \| \{ `$case`: `"awsAccessKeyId"`; `awsAccessKeyId`: `string`; \}

Defined in: src/api/nebius/iam/v1/index.ts:131
