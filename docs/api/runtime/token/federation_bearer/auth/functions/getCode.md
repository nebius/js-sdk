[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [runtime/token/federation\_bearer/auth](../README.md) / getCode

# Function: getCode()

> **getCode**(`params`): `Promise`\<\{ `code`: `string`; `redirectUri`: `string`; `state`: `string`; `verifier`: `string`; \}\>

Defined in: [src/runtime/token/federation\_bearer/auth.ts:84](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token/federation_bearer/auth.ts#L84)

## Parameters

### params

#### authEndpoint

`string`

#### clientId

`string`

#### federationId

`string`

#### noBrowserOpen?

`boolean`

#### timeoutMs?

`number`

#### writer?

(`s`) => `void`

## Returns

`Promise`\<\{ `code`: `string`; `redirectUri`: `string`; `state`: `string`; `verifier`: `string`; \}\>
