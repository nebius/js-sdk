[**@nebius/nodejs-sdk**](../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../README.md) / [runtime/util/cancelable](../README.md) / Cancelable

# Class: Cancelable

Defined in: [src/runtime/util/cancelable.ts:15](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/util/cancelable.ts#L15)

## Constructors

### Constructor

> **new Cancelable**(): `Cancelable`

#### Returns

`Cancelable`

## Accessors

### isCanceled

#### Get Signature

> **get** **isCanceled**(): `boolean`

Defined in: [src/runtime/util/cancelable.ts:28](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/util/cancelable.ts#L28)

##### Returns

`boolean`

## Methods

### cancel()

> **cancel**(): `void`

Defined in: [src/runtime/util/cancelable.ts:20](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/util/cancelable.ts#L20)

#### Returns

`void`

***

### guard()

> **guard**\<`T`\>(`promise`): `Promise`\<`T`\>

Defined in: [src/runtime/util/cancelable.ts:49](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/util/cancelable.ts#L49)

#### Type Parameters

##### T

`T`

#### Parameters

##### promise

`PromiseLike`\<`T`\>

#### Returns

`Promise`\<`T`\>

***

### sleep()

> **sleep**(`ms`): `Promise`\<`void`\>

Defined in: [src/runtime/util/cancelable.ts:32](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/util/cancelable.ts#L32)

#### Parameters

##### ms

`number`

#### Returns

`Promise`\<`void`\>

***

### withTimeout()

> **withTimeout**\<`T`\>(`promise`, `ms`): `Promise`\<`T`\>

Defined in: [src/runtime/util/cancelable.ts:81](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/util/cancelable.ts#L81)

#### Type Parameters

##### T

`T`

#### Parameters

##### promise

`PromiseLike`\<`T`\>

##### ms

`number`

#### Returns

`Promise`\<`T`\>
