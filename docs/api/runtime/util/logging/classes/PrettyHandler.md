[**@nebius/nodejs-sdk**](../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../README.md) / [runtime/util/logging](../README.md) / PrettyHandler

# Class: PrettyHandler

Defined in: [src/runtime/util/logging.ts:335](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/util/logging.ts#L335)

## Implements

- [`Handler`](../interfaces/Handler.md)

## Indexable

\[`key`: `symbol`\]: () => `string` \| () => `object`

## Constructors

### Constructor

> **new PrettyHandler**(`opts?`): `PrettyHandler`

Defined in: [src/runtime/util/logging.ts:344](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/util/logging.ts#L344)

#### Parameters

##### opts?

###### alwaysAddTrace?

`boolean`

###### argDelimiter?

`string`

###### argFormat?

`ArgFormatFunction`

###### colors?

`boolean`

###### filters?

`Filters`

###### level?

[`Level`](../enumerations/Level.md)

###### output?

`Output`

#### Returns

`PrettyHandler`

## Methods

### \[customJson\]()

> **\[customJson\]**(): `object`

Defined in: [src/runtime/util/logging.ts:365](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/util/logging.ts#L365)

#### Returns

`object`

---

### log()

> **log**(`level`, `message`, `args`, `name`, `traceLevel`): `void`

Defined in: [src/runtime/util/logging.ts:456](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/util/logging.ts#L456)

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

`number`

#### Returns

`void`

#### Implementation of

[`Handler`](../interfaces/Handler.md).[`log`](../interfaces/Handler.md#log)
