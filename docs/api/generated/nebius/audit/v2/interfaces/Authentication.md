[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/audit/v2](../README.md) / Authentication

# Interface: Authentication

Defined in: src/generated/nebius/audit/v2/index.ts:951

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/audit/v2/index.ts:953

---

### $type

> **$type**: `"nebius.audit.v2.Authentication"`

Defined in: src/generated/nebius/audit/v2/index.ts:952

---

### authenticated

> **authenticated**: `boolean`

Defined in: src/generated/nebius/audit/v2/index.ts:958

Answers the question whether or not the subject has been successfully authenticated.

---

### authenticationType

> **authenticationType**: [`AuthenticationType`](../type-aliases/AuthenticationType.md)

Defined in: src/generated/nebius/audit/v2/index.ts:973

Describes the type of authentication.

---

### credential?

> `optional` **credential**: \{ `$case`: `"tokenCredential"`; `tokenCredential`: [`AccessToken`](AccessToken.md); \} \| \{ `$case`: `"staticKeyCredential"`; `staticKeyCredential`: [`StaticKey`](StaticKey.md); \}

Defined in: src/generated/nebius/audit/v2/index.ts:974

---

### federation?

> `optional` **federation**: [`Federation`](Federation.md)

Defined in: src/generated/nebius/audit/v2/index.ts:968

Information on the federation within which the subject exists.

---

### subject?

> `optional` **subject**: [`Subject`](Subject.md)

Defined in: src/generated/nebius/audit/v2/index.ts:963

Contains information about the subject of the call.
