[**@nebius/nodejs-sdk**](../../../README.md)

***

[@nebius/nodejs-sdk](../../../README.md) / [runtime/resolver](../README.md) / Prefix

# Class: Prefix

Defined in: [src/runtime/resolver.ts:104](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/resolver.ts#L104)

## Implements

- [`Resolver`](../interfaces/Resolver.md)

## Indexable

\[`key`: `symbol`\]: () => `string` \| () => `object`

## Constructors

### Constructor

> **new Prefix**(`prefix`, `address`): `Prefix`

Defined in: [src/runtime/resolver.ts:107](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/resolver.ts#L107)

#### Parameters

##### prefix

`string`

##### address

`string`

#### Returns

`Prefix`

## Methods

### \[customJson\]()

> **\[customJson\]**(): `object`

Defined in: [src/runtime/resolver.ts:114](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/resolver.ts#L114)

#### Returns

`object`

***

### resolve()

> **resolve**(`serviceId`, `_apiServiceName?`): `string`

Defined in: [src/runtime/resolver.ts:121](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/resolver.ts#L121)

Receive address of the service by its ID

#### Parameters

##### serviceId

`string`

service ID, e.g. "nebius.compute.v1.InstanceService"

##### \_apiServiceName?

`string`

#### Returns

`string`

address string

#### Throws

UnknownServiceError when the resolver cannot resolve the ID

#### Implementation of

[`Resolver`](../interfaces/Resolver.md).[`resolve`](../interfaces/Resolver.md#resolve)
