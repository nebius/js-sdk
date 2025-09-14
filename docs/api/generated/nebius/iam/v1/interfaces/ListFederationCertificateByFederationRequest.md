[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/iam/v1](../README.md) / ListFederationCertificateByFederationRequest

# Interface: ListFederationCertificateByFederationRequest

Defined in: src/generated/nebius/iam/v1/index.ts:7407

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/iam/v1/index.ts:7409

---

### $type

> **$type**: `"nebius.iam.v1.ListFederationCertificateByFederationRequest"`

Defined in: src/generated/nebius/iam/v1/index.ts:7408

---

### federationId

> **federationId**: `string`

Defined in: src/generated/nebius/iam/v1/index.ts:7414

Represents the parent federation ID. Corresponds to the parent_id value.

---

### pageSize

> **pageSize**: [`Long`](../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/generated/nebius/iam/v1/index.ts:7420

Specifies the maximum number of items to return in the response.
Default value: 10

---

### pageToken

> **pageToken**: `string`

Defined in: src/generated/nebius/iam/v1/index.ts:7425

Token for pagination, allowing the retrieval of the next set of results.
