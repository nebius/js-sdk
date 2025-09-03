[**@nebius/nodejs-sdk**](../../../README.md)

---

[@nebius/nodejs-sdk](../../../README.md) / [runtime/operation](../README.md) / Operation

# Class: Operation\<TReq\>

Defined in: [src/runtime/operation.ts:35](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/operation.ts#L35)

## Type Parameters

### TReq

`TReq`

## Constructors

### Constructor

> **new Operation**\<`TReq`\>(`_op`, `service`): `Operation`\<`TReq`\>

Defined in: [src/runtime/operation.ts:36](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/operation.ts#L36)

#### Parameters

##### \_op

`GenericOperation`

##### service

`OperationService`\<`TReq`\>

#### Returns

`Operation`\<`TReq`\>

## Methods

### \[custom\]()

> **\[custom\]**(): `string`

Defined in: [src/runtime/operation.ts:46](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/operation.ts#L46)

#### Returns

`string`

---

### createdAt()

> **createdAt**(): `undefined` \| [`Dayjs`](../../protos/core/dayjs/classes/Dayjs.md)

Defined in: [src/runtime/operation.ts:58](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/operation.ts#L58)

#### Returns

`undefined` \| [`Dayjs`](../../protos/core/dayjs/classes/Dayjs.md)

---

### createdBy()

> **createdBy**(): `string`

Defined in: [src/runtime/operation.ts:62](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/operation.ts#L62)

#### Returns

`string`

---

### description()

> **description**(): `string`

Defined in: [src/runtime/operation.ts:54](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/operation.ts#L54)

#### Returns

`string`

---

### done()

> **done**(): `boolean`

Defined in: [src/runtime/operation.ts:82](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/operation.ts#L82)

#### Returns

`boolean`

---

### finishedAt()

> **finishedAt**(): `undefined` \| [`Dayjs`](../../protos/core/dayjs/classes/Dayjs.md)

Defined in: [src/runtime/operation.ts:66](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/operation.ts#L66)

#### Returns

`undefined` \| [`Dayjs`](../../protos/core/dayjs/classes/Dayjs.md)

---

### id()

> **id**(): `string`

Defined in: [src/runtime/operation.ts:50](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/operation.ts#L50)

#### Returns

`string`

---

### raw()

> **raw**(): `GenericOperation`

Defined in: [src/runtime/operation.ts:74](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/operation.ts#L74)

#### Returns

`GenericOperation`

---

### resourceId()

> **resourceId**(): `string`

Defined in: [src/runtime/operation.ts:86](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/operation.ts#L86)

#### Returns

`string`

---

### status()

> **status**(): `undefined` \| `Status`

Defined in: [src/runtime/operation.ts:78](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/operation.ts#L78)

#### Returns

`undefined` \| `Status`

---

### successful()

> **successful**(): `boolean`

Defined in: [src/runtime/operation.ts:70](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/operation.ts#L70)

#### Returns

`boolean`

---

### toString()

> **toString**(): `string`

Defined in: [src/runtime/operation.ts:42](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/operation.ts#L42)

#### Returns

`string`

---

### update()

> **update**(`metadata?`, `options?`): `Promise`\<`void`\>

Defined in: [src/runtime/operation.ts:123](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/operation.ts#L123)

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

Defined in: [src/runtime/operation.ts:90](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/operation.ts#L90)

#### Parameters

##### intervalSec

`number` = `1`

##### metadata?

`Metadata`

##### options?

`Partial`\<`CallOptions`\> & [`RetryOptions`](../../request/interfaces/RetryOptions.md)

#### Returns

`Promise`\<`void`\>
