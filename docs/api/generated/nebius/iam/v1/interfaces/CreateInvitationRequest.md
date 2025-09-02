[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/iam/v1](../README.md) / CreateInvitationRequest

# Interface: CreateInvitationRequest

Defined in: src/generated/nebius/iam/v1/index.ts:12996

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/iam/v1/index.ts:12998

***

### $type

> **$type**: `"nebius.iam.v1.CreateInvitationRequest"`

Defined in: src/generated/nebius/iam/v1/index.ts:12997

***

### metadata?

> `optional` **metadata**: [`ResourceMetadata`](../../../common/v1/interfaces/ResourceMetadata.md)

Defined in: src/generated/nebius/iam/v1/index.ts:12999

***

### noSend

> **noSend**: `boolean`

Defined in: src/generated/nebius/iam/v1/index.ts:13005

if set, no sending is attempted (it's supposed that later a Resend method is called)

***

### spec?

> `optional` **spec**: [`InvitationSpec`](InvitationSpec.md)

Defined in: src/generated/nebius/iam/v1/index.ts:13000
