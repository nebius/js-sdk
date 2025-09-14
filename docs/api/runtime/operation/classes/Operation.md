[**@nebius/nodejs-sdk**](../../../README.md)

---

[@nebius/nodejs-sdk](../../../README.md) / [runtime/operation](../README.md) / Operation

# Class: Operation\<TReq\>

Defined in: [src/runtime/operation.ts:35](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/operation.ts#L35)

## Type Parameters

### TReq

`TReq`

## Indexable

\[`key`: `symbol`\]: () => `unknown`

## Constructors

### Constructor

> **new Operation**\<`TReq`\>(`_op`, `service`, `logger`): `Operation`\<`TReq`\>

Defined in: [src/runtime/operation.ts:38](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/operation.ts#L38)

#### Parameters

##### \_op

`GenericOperation`

##### service

`OperationService`\<`TReq`\>

##### logger

[`Logger`](../../util/logging/classes/Logger.md)

#### Returns

`Operation`\<`TReq`\>

## Properties

### $type

> `readonly` **$type**: `"nebius.sdk.Operation"` = `'nebius.sdk.Operation'`

Defined in: [src/runtime/operation.ts:36](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/operation.ts#L36)

---

### innerType

> `readonly` **innerType**: `string`

Defined in: [src/runtime/operation.ts:37](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/operation.ts#L37)

## Methods

### \[customJson\]()

> **\[customJson\]**(): `unknown`

Defined in: [src/runtime/operation.ts:59](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/operation.ts#L59)

#### Returns

`unknown`

---

### createdAt()

> **createdAt**(): `undefined` \| [`Dayjs`](../../protos/core/dayjs/classes/Dayjs.md)

Defined in: [src/runtime/operation.ts:79](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/operation.ts#L79)

#### Returns

`undefined` \| [`Dayjs`](../../protos/core/dayjs/classes/Dayjs.md)

---

### createdBy()

> **createdBy**(): `string`

Defined in: [src/runtime/operation.ts:83](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/operation.ts#L83)

#### Returns

`string`

---

### description()

> **description**(): `string`

Defined in: [src/runtime/operation.ts:75](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/operation.ts#L75)

#### Returns

`string`

---

### done()

> **done**(): `boolean`

Defined in: [src/runtime/operation.ts:103](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/operation.ts#L103)

#### Returns

`boolean`

---

### finishedAt()

> **finishedAt**(): `undefined` \| [`Dayjs`](../../protos/core/dayjs/classes/Dayjs.md)

Defined in: [src/runtime/operation.ts:87](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/operation.ts#L87)

#### Returns

`undefined` \| [`Dayjs`](../../protos/core/dayjs/classes/Dayjs.md)

---

### id()

> **id**(): `string`

Defined in: [src/runtime/operation.ts:71](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/operation.ts#L71)

#### Returns

`string`

---

### raw()

> **raw**(): `GenericOperation`

Defined in: [src/runtime/operation.ts:95](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/operation.ts#L95)

#### Returns

`GenericOperation`

---

### resourceId()

> **resourceId**(): `string`

Defined in: [src/runtime/operation.ts:107](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/operation.ts#L107)

#### Returns

`string`

---

### status()

> **status**(): `undefined` \| `Status`

Defined in: [src/runtime/operation.ts:99](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/operation.ts#L99)

#### Returns

`undefined` \| `Status`

---

### successful()

> **successful**(): `boolean`

Defined in: [src/runtime/operation.ts:91](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/operation.ts#L91)

#### Returns

`boolean`

---

### toString()

> **toString**(): `string`

Defined in: [src/runtime/operation.ts:52](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/operation.ts#L52)

#### Returns

`string`

---

### update()

> **update**(`metadata?`, `options?`): `Promise`\<`void`\>

Defined in: [src/runtime/operation.ts:148](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/operation.ts#L148)

#### Parameters

##### metadata?

`Metadata`

##### options?

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../request/interfaces/RetryOptions.md)

#### Returns

`Promise`\<`void`\>

---

### wait()

> **wait**(`intervalSec`, `metadata?`, `options?`): `Promise`\<`void`\>

Defined in: [src/runtime/operation.ts:111](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/operation.ts#L111)

#### Parameters

##### intervalSec

`number` = `1`

##### metadata?

`Metadata`

##### options?

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../request/interfaces/RetryOptions.md)

#### Returns

`Promise`\<`void`\>
