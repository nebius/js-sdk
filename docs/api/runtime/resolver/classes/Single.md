[**@nebius/nodejs-sdk**](../../../README.md)

***

[@nebius/nodejs-sdk](../../../README.md) / [runtime/resolver](../README.md) / Single

# Class: Single

Defined in: [src/runtime/resolver.ts:54](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/resolver.ts#L54)

## Implements

- [`Resolver`](../interfaces/Resolver.md)

## Constructors

### Constructor

> **new Single**(`id`, `address`): `Single`

Defined in: [src/runtime/resolver.ts:57](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/resolver.ts#L57)

#### Parameters

##### id

`string`

##### address

`string`

#### Returns

`Single`

## Methods

### resolve()

> **resolve**(`serviceId`, `_apiServiceName?`): `string`

Defined in: [src/runtime/resolver.ts:61](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/resolver.ts#L61)

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
