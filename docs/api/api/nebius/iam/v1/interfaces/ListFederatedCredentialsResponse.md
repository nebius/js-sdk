[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/iam/v1](../README.md) / ListFederatedCredentialsResponse

# Interface: ListFederatedCredentialsResponse

Defined in: src/api/nebius/iam/v1/index.ts:6320

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/iam/v1/index.ts:6322

---

### $type

> **$type**: `"nebius.iam.v1.ListFederatedCredentialsResponse"`

Defined in: src/api/nebius/iam/v1/index.ts:6321

---

### items

> **items**: [`FederatedCredentials`](FederatedCredentials.md)[]

Defined in: src/api/nebius/iam/v1/index.ts:6327

List of user accounts returned in the response. The field should be named as `items` for consistency.

---

### nextPageToken

> **nextPageToken**: `string`

Defined in: src/api/nebius/iam/v1/index.ts:6332

Token for pagination, indicating the next set of results can be retrieved using this token.
