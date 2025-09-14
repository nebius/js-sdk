[**@nebius/nodejs-sdk**](../../../README.md)

***

[@nebius/nodejs-sdk](../../../README.md) / [runtime/request](../README.md) / Request

# Class: Request\<TReq, TRes\>

Defined in: [src/runtime/request.ts:94](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/request.ts#L94)

## Type Parameters

### TReq

`TReq`

### TRes

`TRes`

## Indexable

\[`key`: `symbol`\]: () => `string` \| () => `Record`\<`string`, `unknown`\>

## Constructors

### Constructor

> **new Request**\<`TReq`, `TRes`\>(`sdk`, `serviceName`, `methodName`, `addr`, `serializer`, `deserializer`, `request`, `requestMetadata`, `requestOptions?`): `Request`\<`TReq`, `TRes`\>

Defined in: [src/runtime/request.ts:118](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/request.ts#L118)

#### Parameters

##### sdk

[`SDKInterface`](../../../sdk/interfaces/SDKInterface.md)

##### serviceName

`string`

##### methodName

`string`

##### addr

`string`

##### serializer

(`value`) => `Buffer`

##### deserializer

(`value`) => `TRes`

##### request

`TReq`

##### requestMetadata

`undefined` | `Metadata`

##### requestOptions?

`Partial`\<`CallOptions`\> & [`RetryOptions`](../interfaces/RetryOptions.md)

#### Returns

`Request`\<`TReq`, `TRes`\>

## Properties

### $type

> `readonly` **$type**: `"nebius.sdk.Request"` = `'nebius.sdk.Request'`

Defined in: [src/runtime/request.ts:95](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/request.ts#L95)

***

### initialMetadata

> `readonly` **initialMetadata**: `Promise`\<`Metadata`\>

Defined in: [src/runtime/request.ts:98](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/request.ts#L98)

***

### requestId

> `readonly` **requestId**: `Promise`\<`string`\>

Defined in: [src/runtime/request.ts:101](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/request.ts#L101)

***

### result

> `readonly` **result**: `Promise`\<`TRes`\>

Defined in: [src/runtime/request.ts:97](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/request.ts#L97)

***

### status

> `readonly` **status**: `Promise`\<`Status`\>

Defined in: [src/runtime/request.ts:100](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/request.ts#L100)

***

### traceId

> `readonly` **traceId**: `Promise`\<`string`\>

Defined in: [src/runtime/request.ts:102](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/request.ts#L102)

***

### trailingMetadata

> `readonly` **trailingMetadata**: `Promise`\<`Metadata`\>

Defined in: [src/runtime/request.ts:99](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/request.ts#L99)

## Methods

### \[customJson\]()

> **\[customJson\]**(): `Record`\<`string`, `unknown`\>

Defined in: [src/runtime/request.ts:371](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/request.ts#L371)

#### Returns

`Record`\<`string`, `unknown`\>

***

### cancel()

> **cancel**(`reason?`): `void`

Defined in: [src/runtime/request.ts:444](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/request.ts#L444)

#### Parameters

##### reason?

`string`

#### Returns

`void`
