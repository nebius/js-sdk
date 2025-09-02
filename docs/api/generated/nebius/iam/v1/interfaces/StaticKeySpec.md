[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/iam/v1](../README.md) / StaticKeySpec

# Interface: StaticKeySpec

Defined in: src/generated/nebius/iam/v1/index.ts:19202

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/iam/v1/index.ts:19204

***

### $type

> **$type**: `"nebius.iam.v1.StaticKeySpec"`

Defined in: src/generated/nebius/iam/v1/index.ts:19203

***

### account?

> `optional` **account**: [`Account`](Account.md)

Defined in: src/generated/nebius/iam/v1/index.ts:19209

account of the static key. only service accounts are supported for now

***

### expiresAt?

> `optional` **expiresAt**: `Dayjs`

Defined in: src/generated/nebius/iam/v1/index.ts:19219

when will the static key expire

***

### service

> **service**: [`StaticKeySpec_ClientService`](../type-aliases/StaticKeySpec_ClientService.md)

Defined in: src/generated/nebius/iam/v1/index.ts:19214

service static key is to be used for
