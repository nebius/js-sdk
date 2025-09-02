[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/iam/v1](../README.md) / ListFederationCertificateResponse

# Interface: ListFederationCertificateResponse

Defined in: src/generated/nebius/iam/v1/index.ts:7742

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/iam/v1/index.ts:7744

***

### $type

> **$type**: `"nebius.iam.v1.ListFederationCertificateResponse"`

Defined in: src/generated/nebius/iam/v1/index.ts:7743

***

### items

> **items**: [`FederationCertificate`](FederationCertificate.md)[]

Defined in: src/generated/nebius/iam/v1/index.ts:7749

List of public keys returned in the response. The field should be named as `items` for consistency.

***

### nextPageToken

> **nextPageToken**: `string`

Defined in: src/generated/nebius/iam/v1/index.ts:7754

Token for pagination, indicating the next set of results can be retrieved using this token.
