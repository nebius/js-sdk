[**@nebius/nodejs-sdk**](../../README.md)

---

[@nebius/nodejs-sdk](../../README.md) / [sdk](../README.md) / SDKInterface

# Interface: SDKInterface

Defined in: [src/sdk.ts:37](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/sdk.ts#L37)

## Properties

### logger

> **logger**: [`Logger`](../../runtime/util/logging/classes/Logger.md)

Defined in: [src/sdk.ts:41](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/sdk.ts#L41)

## Methods

### getAddressFromServiceName()

> **getAddressFromServiceName**(`serviceName`, `apiServiceName?`): `string`

Defined in: [src/sdk.ts:39](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/sdk.ts#L39)

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

Defined in: [src/sdk.ts:38](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/sdk.ts#L38)

#### Parameters

##### address

`string`

#### Returns

`Client`

---

### parentId()

> **parentId**(): `undefined` \| `string`

Defined in: [src/sdk.ts:40](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/sdk.ts#L40)

#### Returns

`undefined` \| `string`
