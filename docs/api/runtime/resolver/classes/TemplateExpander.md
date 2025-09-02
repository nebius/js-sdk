[**@nebius/nodejs-sdk**](../../../README.md)

***

[@nebius/nodejs-sdk](../../../README.md) / [runtime/resolver](../README.md) / TemplateExpander

# Class: TemplateExpander

Defined in: [src/runtime/resolver.ts:151](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/resolver.ts#L151)

## Implements

- [`Resolver`](../interfaces/Resolver.md)

## Constructors

### Constructor

> **new TemplateExpander**(`substitutions`, `next`): `TemplateExpander`

Defined in: [src/runtime/resolver.ts:154](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/resolver.ts#L154)

#### Parameters

##### substitutions

`Record`\<`string`, `string`\>

##### next

[`Resolver`](../interfaces/Resolver.md)

#### Returns

`TemplateExpander`

## Methods

### resolve()

> **resolve**(`serviceId`, `apiServiceName?`): `string`

Defined in: [src/runtime/resolver.ts:158](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/resolver.ts#L158)

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
