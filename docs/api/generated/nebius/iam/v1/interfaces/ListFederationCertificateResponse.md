[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/iam/v1](../README.md) / ListFederationCertificateResponse

# Interface: ListFederationCertificateResponse

Defined in: src/generated/nebius/iam/v1/index.ts:7739

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/iam/v1/index.ts:7741

---

### $type

> **$type**: `"nebius.iam.v1.ListFederationCertificateResponse"`

Defined in: src/generated/nebius/iam/v1/index.ts:7740

---

### items

> **items**: [`FederationCertificate`](FederationCertificate.md)[]

Defined in: src/generated/nebius/iam/v1/index.ts:7746

List of public keys returned in the response. The field should be named as `items` for consistency.

---

### nextPageToken

> **nextPageToken**: `string`

Defined in: src/generated/nebius/iam/v1/index.ts:7751

Token for pagination, indicating the next set of results can be retrieved using this token.
