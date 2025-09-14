[**@nebius/nodejs-sdk**](../../../README.md)

---

[@nebius/nodejs-sdk](../../../README.md) / [runtime/resolver](../README.md) / TemplateExpander

# Class: TemplateExpander

Defined in: [src/runtime/resolver.ts:220](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/resolver.ts#L220)

## Implements

- [`Resolver`](../interfaces/Resolver.md)

## Indexable

\[`key`: `symbol`\]: () => `string` \| () => `object`

## Constructors

### Constructor

> **new TemplateExpander**(`substitutions`, `next`): `TemplateExpander`

Defined in: [src/runtime/resolver.ts:223](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/resolver.ts#L223)

#### Parameters

##### substitutions

`Record`\<`string`, `string`\>

##### next

[`Resolver`](../interfaces/Resolver.md)

#### Returns

`TemplateExpander`

## Methods

### \[customJson\]()

> **\[customJson\]**(): `object`

Defined in: [src/runtime/resolver.ts:230](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/resolver.ts#L230)

#### Returns

`object`

---

### resolve()

> **resolve**(`serviceId`, `apiServiceName?`): `string`

Defined in: [src/runtime/resolver.ts:237](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/resolver.ts#L237)

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
