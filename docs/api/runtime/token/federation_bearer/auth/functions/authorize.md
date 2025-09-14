[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [runtime/token/federation\_bearer/auth](../README.md) / authorize

# Function: authorize()

> **authorize**(`params`): `Promise`\<[`GetTokenResult`](../interfaces/GetTokenResult.md)\>

Defined in: [src/runtime/token/federation\_bearer/auth.ts:212](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token/federation_bearer/auth.ts#L212)

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
