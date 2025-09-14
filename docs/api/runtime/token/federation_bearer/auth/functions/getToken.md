[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [runtime/token/federation_bearer/auth](../README.md) / getToken

# Function: getToken()

> **getToken**(`params`): `Promise`\<[`GetTokenResult`](../interfaces/GetTokenResult.md)\>

Defined in: [src/runtime/token/federation_bearer/auth.ts:162](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/token/federation_bearer/auth.ts#L162)

## Parameters

### params

#### ca?

`string` \| `string`[] \| `Buffer`\<`ArrayBufferLike`\>

#### clientId

`string`

#### code

`string`

#### logger?

[`Logger`](../../../../util/logging/classes/Logger.md)

#### redirectUri

`string`

#### tokenEndpoint

`string`

#### verifier

`string`

## Returns

`Promise`\<[`GetTokenResult`](../interfaces/GetTokenResult.md)\>
