[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [runtime/token/federation_bearer/auth](../README.md) / getCode

# Function: getCode()

> **getCode**(`params`): `Promise`\<\{ `code`: `string`; `redirectUri`: `string`; `state`: `string`; `verifier`: `string`; \}\>

Defined in: [src/runtime/token/federation_bearer/auth.ts:115](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/token/federation_bearer/auth.ts#L115)

## Parameters

### params

#### authEndpoint

`string`

#### clientId

`string`

#### federationId

`string`

#### logger?

[`Logger`](../../../../util/logging/classes/Logger.md)

#### noBrowserOpen?

`boolean`

#### timeoutMs?

`number`

#### writer?

(`s`) => `void`

## Returns

`Promise`\<\{ `code`: `string`; `redirectUri`: `string`; `state`: `string`; `verifier`: `string`; \}\>
