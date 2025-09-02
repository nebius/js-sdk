[**@nebius/nodejs-sdk**](../../README.md)

***

[@nebius/nodejs-sdk](../../README.md) / [sdk](../README.md) / SDK

# Class: SDK

Defined in: [src/sdk.ts:110](https://github.com/nebius/nodejs-sdk/blob/07f69309bf910f649af60b6731eb42b3f51309c8/src/sdk.ts#L110)

## Implements

- [`SDKInterface`](../interfaces/SDKInterface.md)

## Constructors

### Constructor

> **new SDK**(`options?`): `SDK`

Defined in: [src/sdk.ts:131](https://github.com/nebius/nodejs-sdk/blob/07f69309bf910f649af60b6731eb42b3f51309c8/src/sdk.ts#L131)

#### Parameters

##### options?

[`SDKOptions`](../interfaces/SDKOptions.md)

#### Returns

`SDK`

## Methods

### addInterceptors()

> **addInterceptors**(...`ints`): `void`

Defined in: [src/sdk.ts:459](https://github.com/nebius/nodejs-sdk/blob/07f69309bf910f649af60b6731eb42b3f51309c8/src/sdk.ts#L459)

#### Parameters

##### ints

...`Interceptor`[]

#### Returns

`void`

***

### close()

> **close**(`graceMs?`): `Promise`\<`void`\>

Defined in: [src/sdk.ts:482](https://github.com/nebius/nodejs-sdk/blob/07f69309bf910f649af60b6731eb42b3f51309c8/src/sdk.ts#L482)

#### Parameters

##### graceMs?

`number`

#### Returns

`Promise`\<`void`\>

***

### getAddressCredentials()

> **getAddressCredentials**(`address`): `ChannelCredentials`

Defined in: [src/sdk.ts:391](https://github.com/nebius/nodejs-sdk/blob/07f69309bf910f649af60b6731eb42b3f51309c8/src/sdk.ts#L391)

#### Parameters

##### address

`string`

#### Returns

`ChannelCredentials`

***

### getAddressFromServiceName()

> **getAddressFromServiceName**(`serviceName`, `apiServiceName?`): `string`

Defined in: [src/sdk.ts:380](https://github.com/nebius/nodejs-sdk/blob/07f69309bf910f649af60b6731eb42b3f51309c8/src/sdk.ts#L380)

#### Parameters

##### serviceName

`string`

##### apiServiceName?

`string`

#### Returns

`string`

#### Implementation of

[`SDKInterface`](../interfaces/SDKInterface.md).[`getAddressFromServiceName`](../interfaces/SDKInterface.md#getaddressfromservicename)

***

### getAddressOptions()

> **getAddressOptions**(`address`): `Partial`\<`ClientOptions`\>

Defined in: [src/sdk.ts:405](https://github.com/nebius/nodejs-sdk/blob/07f69309bf910f649af60b6731eb42b3f51309c8/src/sdk.ts#L405)

#### Parameters

##### address

`string`

#### Returns

`Partial`\<`ClientOptions`\>

***

### getClientByAddress()

> **getClientByAddress**(`address`): `Client`

Defined in: [src/sdk.ts:370](https://github.com/nebius/nodejs-sdk/blob/07f69309bf910f649af60b6731eb42b3f51309c8/src/sdk.ts#L370)

#### Parameters

##### address

`string`

#### Returns

`Client`

#### Implementation of

[`SDKInterface`](../interfaces/SDKInterface.md).[`getClientByAddress`](../interfaces/SDKInterface.md#getclientbyaddress)

***

### getTlsRootCAs()

> **getTlsRootCAs**(): `undefined` \| `string` \| `string`[] \| `Buffer`\<`ArrayBufferLike`\>

Defined in: [src/sdk.ts:387](https://github.com/nebius/nodejs-sdk/blob/07f69309bf910f649af60b6731eb42b3f51309c8/src/sdk.ts#L387)

#### Returns

`undefined` \| `string` \| `string`[] \| `Buffer`\<`ArrayBufferLike`\>

***

### parentId()

> **parentId**(): `undefined` \| `string`

Defined in: [src/sdk.ts:445](https://github.com/nebius/nodejs-sdk/blob/07f69309bf910f649af60b6731eb42b3f51309c8/src/sdk.ts#L445)

#### Returns

`undefined` \| `string`

#### Implementation of

[`SDKInterface`](../interfaces/SDKInterface.md).[`parentId`](../interfaces/SDKInterface.md#parentid)

***

### setAuthorizationProvider()

> **setAuthorizationProvider**(`provider`): `void`

Defined in: [src/sdk.ts:450](https://github.com/nebius/nodejs-sdk/blob/07f69309bf910f649af60b6731eb42b3f51309c8/src/sdk.ts#L450)

#### Parameters

##### provider

`undefined` | `Provider`

#### Returns

`void`

***

### setClientOptions()

> **setClientOptions**(`opts`): `void`

Defined in: [src/sdk.ts:464](https://github.com/nebius/nodejs-sdk/blob/07f69309bf910f649af60b6731eb42b3f51309c8/src/sdk.ts#L464)

#### Parameters

##### opts

`undefined` | `Partial`\<`ClientOptions`\>

#### Returns

`void`

***

### setTokenBearerAsAuthorization()

> **setTokenBearerAsAuthorization**(`bearer`): `void`

Defined in: [src/sdk.ts:454](https://github.com/nebius/nodejs-sdk/blob/07f69309bf910f649af60b6731eb42b3f51309c8/src/sdk.ts#L454)

#### Parameters

##### bearer

`Bearer`

#### Returns

`void`

***

### whoami()

> **whoami**(`metadata?`, `options?`): `Request`\<[`GetProfileRequest`](../../generated/nebius/iam/v1/interfaces/GetProfileRequest.md), [`GetProfileResponse`](../../generated/nebius/iam/v1/interfaces/GetProfileResponse.md)\>

Defined in: [src/sdk.ts:469](https://github.com/nebius/nodejs-sdk/blob/07f69309bf910f649af60b6731eb42b3f51309c8/src/sdk.ts#L469)

#### Parameters

##### metadata?

`Metadata`

##### options?

`Partial`\<`CallOptions`\> & `RetryOptions`

#### Returns

`Request`\<[`GetProfileRequest`](../../generated/nebius/iam/v1/interfaces/GetProfileRequest.md), [`GetProfileResponse`](../../generated/nebius/iam/v1/interfaces/GetProfileResponse.md)\>
