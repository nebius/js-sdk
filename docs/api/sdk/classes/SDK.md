[**@nebius/nodejs-sdk**](../../README.md)

---

[@nebius/nodejs-sdk](../../README.md) / [sdk](../README.md) / SDK

# Class: SDK

Defined in: [src/sdk.ts:109](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/sdk.ts#L109)

## Implements

- [`SDKInterface`](../interfaces/SDKInterface.md)

## Constructors

### Constructor

> **new SDK**(`options?`): `SDK`

Defined in: [src/sdk.ts:130](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/sdk.ts#L130)

#### Parameters

##### options?

[`SDKOptions`](../interfaces/SDKOptions.md)

#### Returns

`SDK`

## Accessors

### logger

#### Get Signature

> **get** **logger**(): [`Logger`](../../runtime/util/logging/classes/Logger.md)

Defined in: [src/sdk.ts:253](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/sdk.ts#L253)

##### Returns

[`Logger`](../../runtime/util/logging/classes/Logger.md)

#### Implementation of

[`SDKInterface`](../interfaces/SDKInterface.md).[`logger`](../interfaces/SDKInterface.md#logger)

## Methods

### addInterceptors()

> **addInterceptors**(...`ints`): `void`

Defined in: [src/sdk.ts:612](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/sdk.ts#L612)

#### Parameters

##### ints

...`Interceptor`[]

#### Returns

`void`

---

### close()

> **close**(`graceMs?`): `Promise`\<`void`\>

Defined in: [src/sdk.ts:638](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/sdk.ts#L638)

#### Parameters

##### graceMs?

`number`

#### Returns

`Promise`\<`void`\>

---

### getAddressCredentials()

> **getAddressCredentials**(`address`): `ChannelCredentials`

Defined in: [src/sdk.ts:522](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/sdk.ts#L522)

#### Parameters

##### address

`string`

#### Returns

`ChannelCredentials`

---

### getAddressFromServiceName()

> **getAddressFromServiceName**(`serviceName`, `apiServiceName?`): `string`

Defined in: [src/sdk.ts:506](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/sdk.ts#L506)

#### Parameters

##### serviceName

`string`

##### apiServiceName?

`string`

#### Returns

`string`

#### Implementation of

[`SDKInterface`](../interfaces/SDKInterface.md).[`getAddressFromServiceName`](../interfaces/SDKInterface.md#getaddressfromservicename)

---

### getAddressOptions()

> **getAddressOptions**(`address`): `Partial`\<`ClientOptions`\>

Defined in: [src/sdk.ts:545](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/sdk.ts#L545)

#### Parameters

##### address

`string`

#### Returns

`Partial`\<`ClientOptions`\>

---

### getClientByAddress()

> **getClientByAddress**(`address`): `Client`

Defined in: [src/sdk.ts:494](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/sdk.ts#L494)

#### Parameters

##### address

`string`

#### Returns

`Client`

#### Implementation of

[`SDKInterface`](../interfaces/SDKInterface.md).[`getClientByAddress`](../interfaces/SDKInterface.md#getclientbyaddress)

---

### getTlsRootCAs()

> **getTlsRootCAs**(): `undefined` \| `string` \| `string`[] \| `Buffer`\<`ArrayBufferLike`\>

Defined in: [src/sdk.ts:517](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/sdk.ts#L517)

#### Returns

`undefined` \| `string` \| `string`[] \| `Buffer`\<`ArrayBufferLike`\>

---

### parentId()

> **parentId**(): `undefined` \| `string`

Defined in: [src/sdk.ts:596](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/sdk.ts#L596)

#### Returns

`undefined` \| `string`

#### Implementation of

[`SDKInterface`](../interfaces/SDKInterface.md).[`parentId`](../interfaces/SDKInterface.md#parentid)

---

### setAuthorizationProvider()

> **setAuthorizationProvider**(`provider`): `void`

Defined in: [src/sdk.ts:601](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/sdk.ts#L601)

#### Parameters

##### provider

`undefined` | [`Provider`](../../runtime/authorization/provider/interfaces/Provider.md)

#### Returns

`void`

---

### setClientOptions()

> **setClientOptions**(`opts`): `void`

Defined in: [src/sdk.ts:618](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/sdk.ts#L618)

#### Parameters

##### opts

`undefined` | `Partial`\<`ClientOptions`\>

#### Returns

`void`

---

### setTokenBearerAsAuthorization()

> **setTokenBearerAsAuthorization**(`bearer`): `void`

Defined in: [src/sdk.ts:606](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/sdk.ts#L606)

#### Parameters

##### bearer

[`Bearer`](../../runtime/token/classes/Bearer.md)

#### Returns

`void`

---

### whoami()

> **whoami**(`metadata?`, `options?`): [`Request`](../../runtime/request/classes/Request.md)\<[`GetProfileRequest`](../../generated/nebius/iam/v1/interfaces/GetProfileRequest.md), [`GetProfileResponse`](../../generated/nebius/iam/v1/interfaces/GetProfileResponse.md)\>

Defined in: [src/sdk.ts:624](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/sdk.ts#L624)

#### Parameters

##### metadata?

`Metadata`

##### options?

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../runtime/request/interfaces/RetryOptions.md)

#### Returns

[`Request`](../../runtime/request/classes/Request.md)\<[`GetProfileRequest`](../../generated/nebius/iam/v1/interfaces/GetProfileRequest.md), [`GetProfileResponse`](../../generated/nebius/iam/v1/interfaces/GetProfileResponse.md)\>
