[**@nebius/nodejs-sdk**](../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../README.md) / [runtime/util/logging](../README.md) / JsonHandler

# Class: JsonHandler

Defined in: [src/runtime/util/logging.ts:496](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/util/logging.ts#L496)

## Implements

- [`Handler`](../interfaces/Handler.md)

## Indexable

\[`key`: `symbol`\]: () => `string` \| () => `object`

## Constructors

### Constructor

> **new JsonHandler**(`opts?`): `JsonHandler`

Defined in: [src/runtime/util/logging.ts:502](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/util/logging.ts#L502)

#### Parameters

##### opts?

###### alwaysAddTrace?

`boolean`

###### filters?

`Filters`

###### level?

[`Level`](../enumerations/Level.md)

###### output?

`Output`

#### Returns

`JsonHandler`

## Methods

### \[customJson\]()

> **\[customJson\]**(): `object`

Defined in: [src/runtime/util/logging.ts:516](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/util/logging.ts#L516)

#### Returns

`object`

---

### log()

> **log**(`level`, `message`, `args`, `name`, `traceLevel`): `void`

Defined in: [src/runtime/util/logging.ts:545](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/util/logging.ts#L545)

#### Parameters

##### level

[`Level`](../enumerations/Level.md)

##### message

`string`

##### args

[`Argument`](../type-aliases/Argument.md)

##### name

`string`

##### traceLevel

`number` = `3`

#### Returns

`void`

#### Implementation of

[`Handler`](../interfaces/Handler.md).[`log`](../interfaces/Handler.md#log)
