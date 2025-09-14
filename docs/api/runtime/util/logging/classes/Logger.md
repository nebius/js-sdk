[**@nebius/nodejs-sdk**](../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../README.md) / [runtime/util/logging](../README.md) / Logger

# Class: Logger

Defined in: [src/runtime/util/logging.ts:853](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/util/logging.ts#L853)

## Indexable

\[`key`: `symbol`\]: () => `string` \| () => `object`

## Constructors

### Constructor

> **new Logger**(`handler`, `name`, `withFieldsArg`, `parent?`, `traceByDefault?`): `Logger`

Defined in: [src/runtime/util/logging.ts:854](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/util/logging.ts#L854)

#### Parameters

##### handler

[`Handler`](../interfaces/Handler.md) = `noopHandler`

##### name

`string` = `'default'`

##### withFieldsArg

[`Argument`](../type-aliases/Argument.md) = `{}`

##### parent?

`Logger`

##### traceByDefault?

`boolean` = `false`

#### Returns

`Logger`

## Properties

### traceByDefault

> **traceByDefault**: `boolean` = `false`

Defined in: [src/runtime/util/logging.ts:859](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/util/logging.ts#L859)

## Accessors

### getHandler

#### Get Signature

> **get** **getHandler**(): [`Handler`](../interfaces/Handler.md)

Defined in: [src/runtime/util/logging.ts:980](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/util/logging.ts#L980)

##### Returns

[`Handler`](../interfaces/Handler.md)

---

### getName

#### Get Signature

> **get** **getName**(): `string`

Defined in: [src/runtime/util/logging.ts:873](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/util/logging.ts#L873)

##### Returns

`string`

## Methods

### \[customJson\]()

> **\[customJson\]**(): `object`

Defined in: [src/runtime/util/logging.ts:865](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/util/logging.ts#L865)

#### Returns

`object`

---

### child()

> **child**(`suffix`, `additionalArguments`, `traceByDefault`): `Logger`

Defined in: [src/runtime/util/logging.ts:936](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/util/logging.ts#L936)

#### Parameters

##### suffix

`string`

##### additionalArguments

[`Argument`](../type-aliases/Argument.md) = `{}`

##### traceByDefault

`boolean` = `false`

#### Returns

`Logger`

---

### debug()

> **debug**(`message`, `args?`, `withTrace?`): `void`

Defined in: [src/runtime/util/logging.ts:889](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/util/logging.ts#L889)

#### Parameters

##### message

`string`

##### args?

[`Argument`](../type-aliases/Argument.md)

##### withTrace?

`boolean`

#### Returns

`void`

---

### detached()

> **detached**(`name`, `additionalArguments`, `traceByDefault`): `Logger`

Defined in: [src/runtime/util/logging.ts:928](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/util/logging.ts#L928)

#### Parameters

##### name

`string`

##### additionalArguments

[`Argument`](../type-aliases/Argument.md) = `{}`

##### traceByDefault

`boolean` = `false`

#### Returns

`Logger`

---

### error()

> **error**(`message`, `args?`, `withTrace?`): `void`

Defined in: [src/runtime/util/logging.ts:885](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/util/logging.ts#L885)

#### Parameters

##### message

`string`

##### args?

[`Argument`](../type-aliases/Argument.md)

##### withTrace?

`boolean`

#### Returns

`void`

---

### info()

> **info**(`message`, `args?`, `withTrace?`): `void`

Defined in: [src/runtime/util/logging.ts:877](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/util/logging.ts#L877)

#### Parameters

##### message

`string`

##### args?

[`Argument`](../type-aliases/Argument.md)

##### withTrace?

`boolean`

#### Returns

`void`

---

### log()

> **log**(`level`, `message`, `args?`, `withTrace?`): `void`

Defined in: [src/runtime/util/logging.ts:913](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/util/logging.ts#L913)

#### Parameters

##### level

[`Level`](../enumerations/Level.md)

##### message

`string`

##### args?

[`Argument`](../type-aliases/Argument.md)

##### withTrace?

`boolean`

#### Returns

`void`

---

### sibling()

> **sibling**(`siblingName`, `additionalArguments`, `traceByDefault`): `Logger`

Defined in: [src/runtime/util/logging.ts:950](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/util/logging.ts#L950)

#### Parameters

##### siblingName

`string`

##### additionalArguments

[`Argument`](../type-aliases/Argument.md) = `{}`

##### traceByDefault

`boolean` = `false`

#### Returns

`Logger`

---

### trace()

> **trace**(`message`, `args?`, `withTrace?`): `void`

Defined in: [src/runtime/util/logging.ts:893](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/util/logging.ts#L893)

#### Parameters

##### message

`string`

##### args?

[`Argument`](../type-aliases/Argument.md)

##### withTrace?

`boolean`

#### Returns

`void`

---

### warn()

> **warn**(`message`, `args?`, `withTrace?`): `void`

Defined in: [src/runtime/util/logging.ts:881](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/util/logging.ts#L881)

#### Parameters

##### message

`string`

##### args?

[`Argument`](../type-aliases/Argument.md)

##### withTrace?

`boolean`

#### Returns

`void`

---

### withFields()

> **withFields**(`fields`, `traceByDefault?`): `Logger`

Defined in: [src/runtime/util/logging.ts:917](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/util/logging.ts#L917)

#### Parameters

##### fields

[`Argument`](../type-aliases/Argument.md)

##### traceByDefault?

`boolean`

#### Returns

`Logger`
