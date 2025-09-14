[**@nebius/nodejs-sdk**](../../../README.md)

***

[@nebius/nodejs-sdk](../../../README.md) / [runtime/resolver](../README.md) / Single

# Class: Single

Defined in: [src/runtime/resolver.ts:77](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/resolver.ts#L77)

## Implements

- [`Resolver`](../interfaces/Resolver.md)

## Indexable

\[`key`: `symbol`\]: () => `string` \| () => `object`

## Constructors

### Constructor

> **new Single**(`id`, `address`): `Single`

Defined in: [src/runtime/resolver.ts:80](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/resolver.ts#L80)

#### Parameters

##### id

`string`

##### address

`string`

#### Returns

`Single`

## Methods

### \[customJson\]()

> **\[customJson\]**(): `object`

Defined in: [src/runtime/resolver.ts:87](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/resolver.ts#L87)

#### Returns

`object`

***

### resolve()

> **resolve**(`serviceId`, `_apiServiceName?`): `string`

Defined in: [src/runtime/resolver.ts:94](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/resolver.ts#L94)

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
