[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [runtime/token/federation_bearer/auth](../README.md) / getToken

# Function: getToken()

> **getToken**(`params`): `Promise`\<[`GetTokenResult`](../interfaces/GetTokenResult.md)\>

Defined in: [src/runtime/token/federation_bearer/auth.ts:162](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token/federation_bearer/auth.ts#L162)

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
