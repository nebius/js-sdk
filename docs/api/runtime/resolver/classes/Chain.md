[**@nebius/nodejs-sdk**](../../../README.md)

***

[@nebius/nodejs-sdk](../../../README.md) / [runtime/resolver](../README.md) / Chain

# Class: Chain

Defined in: [src/runtime/resolver.ts:108](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/resolver.ts#L108)

## Implements

- [`Resolver`](../interfaces/Resolver.md)

## Constructors

### Constructor

> **new Chain**(...`resolvers`): `Chain`

Defined in: [src/runtime/resolver.ts:110](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/resolver.ts#L110)

#### Parameters

##### resolvers

...[`Resolver`](../interfaces/Resolver.md)[]

#### Returns

`Chain`

## Methods

### resolve()

> **resolve**(`serviceId`, `apiServiceName?`): `string`

Defined in: [src/runtime/resolver.ts:113](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/resolver.ts#L113)

Receive address of the service by its ID

#### Parameters

##### serviceId

`string`

service ID, e.g. "nebius.compute.v1.InstanceService"

##### apiServiceName?

`string`

optional API service name override, when provided by the service wrapper

#### Returns

`string`

address string

#### Throws

UnknownServiceError when the resolver cannot resolve the ID

#### Implementation of

[`Resolver`](../interfaces/Resolver.md).[`resolve`](../interfaces/Resolver.md#resolve)
