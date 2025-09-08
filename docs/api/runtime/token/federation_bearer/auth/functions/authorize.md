[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [runtime/token/federation_bearer/auth](../README.md) / authorize

# Function: authorize()

> **authorize**(`params`): `Promise`\<[`GetTokenResult`](../interfaces/GetTokenResult.md)\>

Defined in: [src/runtime/token/federation_bearer/auth.ts:158](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token/federation_bearer/auth.ts#L158)

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

#### noBrowserOpen?

`boolean`

#### timeoutMs?

`number`

#### writer?

(`s`) => `void`

## Returns

`Promise`\<[`GetTokenResult`](../interfaces/GetTokenResult.md)\>
