[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [runtime/token/federation_bearer/auth](../README.md) / authorize

# Function: authorize()

> **authorize**(`params`): `Promise`\<[`GetTokenResult`](../interfaces/GetTokenResult.md)\>

Defined in: [src/runtime/token/federation_bearer/auth.ts:212](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/token/federation_bearer/auth.ts#L212)

## Parameters

### params

#### ca?

`string` \| `string`[] \| `Buffer`\<`ArrayBufferLike`\>

#### clientId

`string`

#### federationEndpoint

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

`Promise`\<[`GetTokenResult`](../interfaces/GetTokenResult.md)\>
