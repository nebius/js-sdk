[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/iam/v1](../README.md) / ExchangeTokenRequest

# Interface: ExchangeTokenRequest

Defined in: src/generated/nebius/iam/v1/index.ts:22153

https://www.rfc-editor.org/rfc/rfc8693.html

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/iam/v1/index.ts:22155

***

### $type

> **$type**: `"nebius.iam.v1.ExchangeTokenRequest"`

Defined in: src/generated/nebius/iam/v1/index.ts:22154

***

### actorToken

> **actorToken**: `string`

Defined in: src/generated/nebius/iam/v1/index.ts:22190

optional, subject token for impersonation/delegation (who want to impersonate/delegate) in subject_token.

***

### actorTokenType

> **actorTokenType**: `string`

Defined in: src/generated/nebius/iam/v1/index.ts:22195

optional, token type for the impersonation/delegation (who want to impersonate/delegate). Usually it's urn:ietf:params:oauth:token-type:access_token

***

### audience

> **audience**: `string`

Defined in: src/generated/nebius/iam/v1/index.ts:22185

optional, name of the oauth client id on which this token will be used

***

### grantType

> **grantType**: `string`

Defined in: src/generated/nebius/iam/v1/index.ts:22160

required - urn:ietf:params:oauth:grant-type:token-exchange

***

### requestedTokenType

> **requestedTokenType**: `string`

Defined in: src/generated/nebius/iam/v1/index.ts:22165

optional type of requested token, default is urn:ietf:params:oauth:token-type:access_token

***

### resource

> **resource**: `string`[]

Defined in: src/generated/nebius/iam/v1/index.ts:22200

optional, list of resources approved to use by token, if applicable

***

### scopes

> **scopes**: `string`[]

Defined in: src/generated/nebius/iam/v1/index.ts:22180

optional (scopes of the token)

***

### subjectToken

> **subjectToken**: `string`

Defined in: src/generated/nebius/iam/v1/index.ts:22170

required - could be self signed JWT token

***

### subjectTokenType

> **subjectTokenType**: `string`

Defined in: src/generated/nebius/iam/v1/index.ts:22175

required, in case of jwt - urn:ietf:params:oauth:token-type:jwt
