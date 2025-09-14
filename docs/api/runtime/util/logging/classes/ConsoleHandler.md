[**@nebius/nodejs-sdk**](../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../README.md) / [runtime/util/logging](../README.md) / ConsoleHandler

# Class: ConsoleHandler

Defined in: [src/runtime/util/logging.ts:201](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/util/logging.ts#L201)

## Implements

- [`Handler`](../interfaces/Handler.md)

## Indexable

\[`key`: `symbol`\]: () => `string` \| () => `object`

## Constructors

### Constructor

> **new ConsoleHandler**(`opts?`): `ConsoleHandler`

Defined in: [src/runtime/util/logging.ts:210](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/util/logging.ts#L210)

#### Parameters

##### opts?

###### alwaysAddTrace?

`boolean`

###### argDelimiter?

`string`

###### argFormat?

`ArgFormatFunction`

###### filters?

`Filters`

###### format?

`string` \| `FormatFunction`

###### level?

[`Level`](../enumerations/Level.md)

###### output?

`Output`

#### Returns

`ConsoleHandler`

## Methods

### \[customJson\]()

> **\[customJson\]**(): `object`

Defined in: [src/runtime/util/logging.ts:267](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/util/logging.ts#L267)

#### Returns

`object`

---

### argString()

> **argString**(`args`): `string`

Defined in: [src/runtime/util/logging.ts:292](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/util/logging.ts#L292)

#### Parameters

##### args

[`Argument`](../type-aliases/Argument.md)

#### Returns

`string`

---

### log()

> **log**(`level`, `message`, `args`, `name`, `traceLevel`): `void`

Defined in: [src/runtime/util/logging.ts:304](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/util/logging.ts#L304)

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
