[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/iam/v1](../README.md) / OidcCredentialsProvider

# Interface: OidcCredentialsProvider

Defined in: src/api/nebius/iam/v1/index.ts:7018

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/iam/v1/index.ts:7020

***

### $type

> **$type**: `"nebius.iam.v1.OidcCredentialsProvider"`

Defined in: src/api/nebius/iam/v1/index.ts:7019

***

### issuerUrl

> **issuerUrl**: `string`

Defined in: src/api/nebius/iam/v1/index.ts:7034

*
 It's not required provider OIDC issuer should be real OIDC provider, but should expose OIDC configuration
 with "/.well-known/openid-configuration" endpoint. Configuration should contains the "jwks_uri" endpoint
 where the JSON Web Key Set (JWKS) can be found; this set contains public keys used to verify
 JSON Web Tokens (JWTs) issued by an identity provider.

 Limitations for external OIDC providers:
 - token service limits the number of handled keys by 50. If your JWKS return more than 50,
 the only first 50  will be used for signature verifying.
 - response size for jwks_uri and "/.well-known/openid-configuration limited by 100KB.

***

### jwkSetJson

> **jwkSetJson**: `string`

Defined in: src/api/nebius/iam/v1/index.ts:7042

*
 Literally json, which represents JWKS with public keys for JWT verification.
 It worth mentioned that in a case of adding/rotating keys the jwk_set_json also should be updated here.
 Besides, the "issuer" parameter should be set even if the JWKS will be resolved locally.
