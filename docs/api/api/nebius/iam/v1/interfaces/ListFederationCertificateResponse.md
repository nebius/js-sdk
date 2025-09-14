[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/iam/v1](../README.md) / ListFederationCertificateResponse

# Interface: ListFederationCertificateResponse

Defined in: src/api/nebius/iam/v1/index.ts:7740

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/iam/v1/index.ts:7742

---

### $type

> **$type**: `"nebius.iam.v1.ListFederationCertificateResponse"`

Defined in: src/api/nebius/iam/v1/index.ts:7741

---

### items

> **items**: [`FederationCertificate`](FederationCertificate.md)[]

Defined in: src/api/nebius/iam/v1/index.ts:7747

List of public keys returned in the response. The field should be named as `items` for consistency.

---

### nextPageToken

> **nextPageToken**: `string`

Defined in: src/api/nebius/iam/v1/index.ts:7752

Token for pagination, indicating the next set of results can be retrieved using this token.
