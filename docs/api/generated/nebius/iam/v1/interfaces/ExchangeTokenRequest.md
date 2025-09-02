[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/iam/v1](../README.md) / ExchangeTokenRequest

# Interface: ExchangeTokenRequest

Defined in: src/generated/nebius/iam/v1/index.ts:22150

https://www.rfc-editor.org/rfc/rfc8693.html

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/iam/v1/index.ts:22152

***

### $type

> **$type**: `"nebius.iam.v1.ExchangeTokenRequest"`

Defined in: src/generated/nebius/iam/v1/index.ts:22151

***

### actorToken

> **actorToken**: `string`

Defined in: src/generated/nebius/iam/v1/index.ts:22187

optional, subject token for impersonation/delegation (who want to impersonate/delegate) in subject_token.

***

### actorTokenType

> **actorTokenType**: `string`

Defined in: src/generated/nebius/iam/v1/index.ts:22192

optional, token type for the impersonation/delegation (who want to impersonate/delegate). Usually it's urn:ietf:params:oauth:token-type:access_token

***

### audience

> **audience**: `string`

Defined in: src/generated/nebius/iam/v1/index.ts:22182

optional, name of the oauth client id on which this token will be used

***

### grantType

> **grantType**: `string`

Defined in: src/generated/nebius/iam/v1/index.ts:22157

required - urn:ietf:params:oauth:grant-type:token-exchange

***

### requestedTokenType

> **requestedTokenType**: `string`

Defined in: src/generated/nebius/iam/v1/index.ts:22162

optional type of requested token, default is urn:ietf:params:oauth:token-type:access_token

***

### resource

> **resource**: `string`[]

Defined in: src/generated/nebius/iam/v1/index.ts:22197

optional, list of resources approved to use by token, if applicable

***

### scopes

> **scopes**: `string`[]

Defined in: src/generated/nebius/iam/v1/index.ts:22177

optional (scopes of the token)

***

### subjectToken

> **subjectToken**: `string`

Defined in: src/generated/nebius/iam/v1/index.ts:22167

required - could be self signed JWT token

***

### subjectTokenType

> **subjectTokenType**: `string`

Defined in: src/generated/nebius/iam/v1/index.ts:22172

required, in case of jwt - urn:ietf:params:oauth:token-type:jwt
