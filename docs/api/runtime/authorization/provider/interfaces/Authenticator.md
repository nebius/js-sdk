[**@nebius/nodejs-sdk**](../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../README.md) / [runtime/authorization/provider](../README.md) / Authenticator

# Interface: Authenticator

Defined in: [src/runtime/authorization/provider.ts:10](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/authorization/provider.ts#L10)

## Methods

### authenticate()

> **authenticate**(`metadata`, `timeoutMs?`, `options?`): `Promise`\<`void`\>

Defined in: [src/runtime/authorization/provider.ts:11](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/authorization/provider.ts#L11)

#### Parameters

##### metadata

`Metadata`

##### timeoutMs?

`number`

##### options?

[`AuthorizationOptions`](AuthorizationOptions.md)

#### Returns

`Promise`\<`void`\>

---

### canRetry()?

> `optional` **canRetry**(`err`, `options?`): `boolean`

Defined in: [src/runtime/authorization/provider.ts:16](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/authorization/provider.ts#L16)

#### Parameters

##### err

`unknown`

##### options?

[`AuthorizationOptions`](AuthorizationOptions.md)

#### Returns

`boolean`
