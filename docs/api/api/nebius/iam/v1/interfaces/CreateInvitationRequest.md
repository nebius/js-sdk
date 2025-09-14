[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/iam/v1](../README.md) / CreateInvitationRequest

# Interface: CreateInvitationRequest

Defined in: src/api/nebius/iam/v1/index.ts:12994

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/iam/v1/index.ts:12996

---

### $type

> **$type**: `"nebius.iam.v1.CreateInvitationRequest"`

Defined in: src/api/nebius/iam/v1/index.ts:12995

---

### metadata?

> `optional` **metadata**: [`ResourceMetadata`](../../../common/v1/interfaces/ResourceMetadata.md)

Defined in: src/api/nebius/iam/v1/index.ts:12997

---

### noSend

> **noSend**: `boolean`

Defined in: src/api/nebius/iam/v1/index.ts:13003

if set, no sending is attempted (it's supposed that later a Resend method is called)

---

### spec?

> `optional` **spec**: [`InvitationSpec`](InvitationSpec.md)

Defined in: src/api/nebius/iam/v1/index.ts:12998
