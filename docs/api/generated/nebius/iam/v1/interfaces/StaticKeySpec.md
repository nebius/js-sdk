[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/iam/v1](../README.md) / StaticKeySpec

# Interface: StaticKeySpec

Defined in: src/generated/nebius/iam/v1/index.ts:19199

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/iam/v1/index.ts:19201

***

### $type

> **$type**: `"nebius.iam.v1.StaticKeySpec"`

Defined in: src/generated/nebius/iam/v1/index.ts:19200

***

### account?

> `optional` **account**: [`Account`](Account.md)

Defined in: src/generated/nebius/iam/v1/index.ts:19206

account of the static key. only service accounts are supported for now

***

### expiresAt?

> `optional` **expiresAt**: [`Dayjs`](../../../../../runtime/protos/core/dayjs/classes/Dayjs.md)

Defined in: src/generated/nebius/iam/v1/index.ts:19216

when will the static key expire

***

### service

> **service**: [`StaticKeySpec_ClientService`](../type-aliases/StaticKeySpec_ClientService.md)

Defined in: src/generated/nebius/iam/v1/index.ts:19211

service static key is to be used for
