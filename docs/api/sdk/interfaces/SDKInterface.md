[**@nebius/nodejs-sdk**](../../README.md)

---

[@nebius/nodejs-sdk](../../README.md) / [sdk](../README.md) / SDKInterface

# Interface: SDKInterface

Defined in: [src/sdk.ts:37](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/sdk.ts#L37)

## Properties

### logger

> **logger**: [`Logger`](../../runtime/util/logging/classes/Logger.md)

Defined in: [src/sdk.ts:41](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/sdk.ts#L41)

## Methods

### getAddressFromServiceName()

> **getAddressFromServiceName**(`serviceName`, `apiServiceName?`): `string`

Defined in: [src/sdk.ts:39](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/sdk.ts#L39)

#### Parameters

##### serviceName

`string`

##### apiServiceName?

`string`

#### Returns

`string`

---

### getClientByAddress()

> **getClientByAddress**(`address`): `Client`

Defined in: [src/sdk.ts:38](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/sdk.ts#L38)

#### Parameters

##### address

`string`

#### Returns

`Client`

---

### parentId()

> **parentId**(): `undefined` \| `string`

Defined in: [src/sdk.ts:40](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/sdk.ts#L40)

#### Returns

`undefined` \| `string`
