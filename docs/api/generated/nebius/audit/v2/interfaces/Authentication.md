[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/audit/v2](../README.md) / Authentication

# Interface: Authentication

Defined in: src/generated/nebius/audit/v2/index.ts:952

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/audit/v2/index.ts:954

---

### $type

> **$type**: `"nebius.audit.v2.Authentication"`

Defined in: src/generated/nebius/audit/v2/index.ts:953

---

### authenticated

> **authenticated**: `boolean`

Defined in: src/generated/nebius/audit/v2/index.ts:959

Answers the question whether or not the subject has been successfully authenticated.

---

### authenticationType

> **authenticationType**: [`AuthenticationType`](../type-aliases/AuthenticationType.md)

Defined in: src/generated/nebius/audit/v2/index.ts:974

Describes the type of authentication.

---

### credential?

> `optional` **credential**: \{ `$case`: `"tokenCredential"`; `tokenCredential`: [`AccessToken`](AccessToken.md); \} \| \{ `$case`: `"staticKeyCredential"`; `staticKeyCredential`: [`StaticKey`](StaticKey.md); \}

Defined in: src/generated/nebius/audit/v2/index.ts:975

---

### federation?

> `optional` **federation**: [`Federation`](Federation.md)

Defined in: src/generated/nebius/audit/v2/index.ts:969

Information on the federation within which the subject exists.

---

### subject?

> `optional` **subject**: [`Subject`](Subject.md)

Defined in: src/generated/nebius/audit/v2/index.ts:964

Contains information about the subject of the call.
