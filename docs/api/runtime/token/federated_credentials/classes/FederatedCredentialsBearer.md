[**@nebius/nodejs-sdk**](../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../README.md) / [runtime/token/federated_credentials](../README.md) / FederatedCredentialsBearer

# Class: FederatedCredentialsBearer

Defined in: [src/runtime/token/federated_credentials.ts:15](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/token/federated_credentials.ts#L15)

## Extends

- [`Bearer`](../../classes/Bearer.md)

## Indexable

\[`key`: `symbol`\]: () => `unknown`

## Constructors

### Constructor

> **new FederatedCredentialsBearer**(`federatedCredentials`, `opts?`): `FederatedCredentialsBearer`

Defined in: [src/runtime/token/federated_credentials.ts:20](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/token/federated_credentials.ts#L20)

#### Parameters

##### federatedCredentials

`string` | [`FederatedCredentialsReader`](../../../service_account/federated_credentials/interfaces/FederatedCredentialsReader.md) | [`FederatedCredentialsTokenRequester`](../../../service_account/federated_credentials/classes/FederatedCredentialsTokenRequester.md)

##### opts?

###### initialRetryTimeoutMs?

`number`

###### lifetimeSafeFraction?

`number`

###### logger?

[`Logger`](../../../util/logging/classes/Logger.md)

###### maxRetries?

`number`

###### maxRetryTimeoutMs?

`number`

###### refreshRequestTimeoutMs?

`number`

###### retryTimeoutExponent?

`number`

###### sdk?

`null` \| [`SDKInterface`](../../../../sdk/interfaces/SDKInterface.md) \| `Promise`\<[`SDKInterface`](../../../../sdk/interfaces/SDKInterface.md)\>

###### serviceAccountId?

`null` \| `string`

#### Returns

`FederatedCredentialsBearer`

#### Overrides

[`Bearer`](../../classes/Bearer.md).[`constructor`](../../classes/Bearer.md#constructor)

## Properties

### $type

> `readonly` **$type**: `"nebius.sdk.FederatedCredentialsBearer"` = `'nebius.sdk.FederatedCredentialsBearer'`

Defined in: [src/runtime/token/federated_credentials.ts:16](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/token/federated_credentials.ts#L16)

#### Overrides

[`Bearer`](../../classes/Bearer.md).[`$type`](../../classes/Bearer.md#type)

## Accessors

### name

#### Get Signature

> **get** **name**(): `undefined` \| `string`

Defined in: [src/runtime/token.ts:113](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/token.ts#L113)

##### Returns

`undefined` \| `string`

#### Inherited from

[`Bearer`](../../classes/Bearer.md).[`name`](../../classes/Bearer.md#name)

---

### wrapped

#### Get Signature

> **get** **wrapped**(): `undefined` \| [`Bearer`](../../classes/Bearer.md)

Defined in: [src/runtime/token/federated_credentials.ts:117](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/token/federated_credentials.ts#L117)

##### Returns

`undefined` \| [`Bearer`](../../classes/Bearer.md)

#### Overrides

[`Bearer`](../../classes/Bearer.md).[`wrapped`](../../classes/Bearer.md#wrapped)

## Methods

### \[customJson\]()

> **\[customJson\]**(): `unknown`

Defined in: [src/runtime/token/federated_credentials.ts:106](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/token/federated_credentials.ts#L106)

#### Returns

`unknown`

---

### close()

> **close**(`_graceMs?`): `Promise`\<`void`\>

Defined in: [src/runtime/token.ts:121](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/token.ts#L121)

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

Defined in: [src/runtime/token/federated_credentials.ts:121](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/token/federated_credentials.ts#L121)

#### Returns

[`Receiver`](../../classes/Receiver.md)

#### Overrides

[`Bearer`](../../classes/Bearer.md).[`receiver`](../../classes/Bearer.md#receiver)

---

### setSDK()

> **setSDK**(`sdk`): `void`

Defined in: [src/runtime/token/federated_credentials.ts:113](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/token/federated_credentials.ts#L113)

#### Parameters

##### sdk

`null` | [`SDKInterface`](../../../../sdk/interfaces/SDKInterface.md) | `Promise`\<[`SDKInterface`](../../../../sdk/interfaces/SDKInterface.md)\>

#### Returns

`void`
