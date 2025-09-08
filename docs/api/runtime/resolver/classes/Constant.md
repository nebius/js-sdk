[**@nebius/nodejs-sdk**](../../../README.md)

---

[@nebius/nodejs-sdk](../../../README.md) / [runtime/resolver](../README.md) / Constant

# Class: Constant

Defined in: [src/runtime/resolver.ts:43](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/resolver.ts#L43)

## Implements

- [`Resolver`](../interfaces/Resolver.md)

## Constructors

### Constructor

> **new Constant**(`address`): `Constant`

Defined in: [src/runtime/resolver.ts:45](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/resolver.ts#L45)

#### Parameters

##### address

`string`

#### Returns

`Constant`

## Methods

### resolve()

> **resolve**(`_serviceId`, `_apiServiceName?`): `string`

Defined in: [src/runtime/resolver.ts:48](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/resolver.ts#L48)

Receive address of the service by its ID

#### Parameters

##### \_serviceId

`string`

##### \_apiServiceName?

`string`

#### Returns

`string`

address string

#### Throws

UnknownServiceError when the resolver cannot resolve the ID

#### Implementation of

[`Resolver`](../interfaces/Resolver.md).[`resolve`](../interfaces/Resolver.md#resolve)
