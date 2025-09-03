[**@nebius/nodejs-sdk**](../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../README.md) / [runtime/token/service_account](../README.md) / ServiceAccountBearer

# Class: ServiceAccountBearer

Defined in: [src/runtime/token/service_account.ts:9](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token/service_account.ts#L9)

## Extends

- [`Bearer`](../../classes/Bearer.md)

## Constructors

### Constructor

> **new ServiceAccountBearer**(`serviceAccount`, `opts?`): `ServiceAccountBearer`

Defined in: [src/runtime/token/service_account.ts:13](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token/service_account.ts#L13)

#### Parameters

##### serviceAccount

`string` | [`ServiceAccount`](../../../service_account/service_account/classes/ServiceAccount.md) | [`Reader`](../../../service_account/service_account/interfaces/Reader.md)

##### opts?

###### initialRetryTimeoutMs?

`number`

###### lifetimeSafeFraction?

`number`

###### maxRetries?

`number`

###### maxRetryTimeoutMs?

`number`

###### privateKeyPem?

`string`

###### publicKeyId?

`string`

###### refreshRequestTimeoutMs?

`number`

###### retryTimeoutExponent?

`number`

###### sdk?

`null` \| [`SDKInterface`](../../../../sdk/interfaces/SDKInterface.md) \| `Promise`\<[`SDKInterface`](../../../../sdk/interfaces/SDKInterface.md)\>

#### Returns

`ServiceAccountBearer`

#### Overrides

[`Bearer`](../../classes/Bearer.md).[`constructor`](../../classes/Bearer.md#constructor)

## Accessors

### name

#### Get Signature

> **get** **name**(): `undefined` \| `string`

Defined in: [src/runtime/token.ts:101](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token.ts#L101)

##### Returns

`undefined` \| `string`

#### Inherited from

[`Bearer`](../../classes/Bearer.md).[`name`](../../classes/Bearer.md#name)

---

### wrapped

#### Get Signature

> **get** **wrapped**(): `undefined` \| [`Bearer`](../../classes/Bearer.md)

Defined in: [src/runtime/token/service_account.ts:88](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token/service_account.ts#L88)

##### Returns

`undefined` \| [`Bearer`](../../classes/Bearer.md)

#### Overrides

[`Bearer`](../../classes/Bearer.md).[`wrapped`](../../classes/Bearer.md#wrapped)

## Methods

### close()

> **close**(`_graceMs?`): `Promise`\<`void`\>

Defined in: [src/runtime/token.ts:109](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token.ts#L109)

#### Parameters

##### \_graceMs?

`number`

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`Bearer`](../../classes/Bearer.md).[`close`](../../classes/Bearer.md#close)

---

### receiver()

> **receiver**(): [`Receiver`](../../classes/Receiver.md)

Defined in: [src/runtime/token/service_account.ts:92](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token/service_account.ts#L92)

#### Returns

[`Receiver`](../../classes/Receiver.md)

#### Overrides

[`Bearer`](../../classes/Bearer.md).[`receiver`](../../classes/Bearer.md#receiver)

---

### setSDK()

> **setSDK**(`sdk`): `void`

Defined in: [src/runtime/token/service_account.ts:84](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token/service_account.ts#L84)

#### Parameters

##### sdk

`null` | [`SDKInterface`](../../../../sdk/interfaces/SDKInterface.md) | `Promise`\<[`SDKInterface`](../../../../sdk/interfaces/SDKInterface.md)\>

#### Returns

`void`
