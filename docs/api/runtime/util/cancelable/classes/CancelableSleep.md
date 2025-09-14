[**@nebius/nodejs-sdk**](../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../README.md) / [runtime/util/cancelable](../README.md) / CancelableSleep

# Class: CancelableSleep

Defined in: [src/runtime/util/cancelable.ts:106](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/util/cancelable.ts#L106)

## Extends

- `Promise`\<`void`\>

## Constructors

### Constructor

> **new CancelableSleep**(`ms`): `CancelableSleep`

Defined in: [src/runtime/util/cancelable.ts:109](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/util/cancelable.ts#L109)

#### Parameters

##### ms

`number`

#### Returns

`CancelableSleep`

#### Overrides

`Promise<void>.constructor`

## Properties

### \[toStringTag\]

> `readonly` **\[toStringTag\]**: `string`

Defined in: node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:176

#### Inherited from

`Promise.[toStringTag]`

---

### \[species\]

> `readonly` `static` **\[species\]**: `PromiseConstructor`

Defined in: node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:180

#### Inherited from

`Promise.[species]`

## Methods

### cancel()

> **cancel**(): `void`

Defined in: [src/runtime/util/cancelable.ts:121](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/util/cancelable.ts#L121)

#### Returns

`void`

---

### catch()

> **catch**\<`TResult`\>(`onrejected?`): `Promise`\<`void` \| `TResult`\>

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1564

Attaches a callback for only the rejection of the Promise.

#### Type Parameters

##### TResult

`TResult` = `never`

#### Parameters

##### onrejected?

The callback to execute when the Promise is rejected.

`null` | (`reason`) => `TResult` \| `PromiseLike`\<`TResult`\>

#### Returns

`Promise`\<`void` \| `TResult`\>

A Promise for the completion of the callback.

#### Inherited from

`Promise.catch`

---

### finally()

> **finally**(`onfinally?`): `Promise`\<`void`\>

Defined in: node_modules/typescript/lib/lib.es2018.promise.d.ts:29

Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
resolved value cannot be modified from the callback.

#### Parameters

##### onfinally?

The callback to execute when the Promise is settled (fulfilled or rejected).

`null` | () => `void`

#### Returns

`Promise`\<`void`\>

A Promise for the completion of the callback.

#### Inherited from

`Promise.finally`

---

### then()

> **then**\<`TResult1`, `TResult2`\>(`onfulfilled?`, `onrejected?`): `Promise`\<`TResult1` \| `TResult2`\>

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1557

Attaches callbacks for the resolution and/or rejection of the Promise.

#### Type Parameters

##### TResult1

`TResult1` = `void`

##### TResult2

`TResult2` = `never`

#### Parameters

##### onfulfilled?

The callback to execute when the Promise is resolved.

`null` | (`value`) => `TResult1` \| `PromiseLike`\<`TResult1`\>

##### onrejected?

The callback to execute when the Promise is rejected.

`null` | (`reason`) => `TResult2` \| `PromiseLike`\<`TResult2`\>

#### Returns

`Promise`\<`TResult1` \| `TResult2`\>

A Promise for the completion of which ever callback is executed.

#### Inherited from

`Promise.then`

---

### all()

#### Call Signature

> `static` **all**\<`T`\>(`values`): `Promise`\<`Awaited`\<`T`\>[]\>

Defined in: node_modules/typescript/lib/lib.es2015.iterable.d.ts:255

Creates a Promise that is resolved with an array of results when all of the provided Promises
resolve, or rejected when any Promise is rejected.

##### Type Parameters

###### T

`T`

##### Parameters

###### values

`Iterable`\<`T` \| `PromiseLike`\<`T`\>\>

An iterable of Promises.

##### Returns

`Promise`\<`Awaited`\<`T`\>[]\>

A new Promise.

##### Inherited from

`Promise.all`

#### Call Signature

> `static` **all**\<`T`\>(`values`): `Promise`\<\{ -readonly \[P in string \| number \| symbol\]: Awaited\<T\[P\<P\>\]\> \}\>

Defined in: node_modules/typescript/lib/lib.es2015.promise.d.ts:39

Creates a Promise that is resolved with an array of results when all of the provided Promises
resolve, or rejected when any Promise is rejected.

##### Type Parameters

###### T

`T` _extends_ readonly `unknown`[] \| \[\]

##### Parameters

###### values

`T`

An array of Promises.

##### Returns

`Promise`\<\{ -readonly \[P in string \| number \| symbol\]: Awaited\<T\[P\<P\>\]\> \}\>

A new Promise.

##### Inherited from

`Promise.all`

---

### allSettled()

#### Call Signature

> `static` **allSettled**\<`T`\>(`values`): `Promise`\<\{ -readonly \[P in string \| number \| symbol\]: PromiseSettledResult\<Awaited\<T\[P\<P\>\]\>\> \}\>

Defined in: node_modules/typescript/lib/lib.es2020.promise.d.ts:38

Creates a Promise that is resolved with an array of results when all
of the provided Promises resolve or reject.

##### Type Parameters

###### T

`T` _extends_ readonly `unknown`[] \| \[\]

##### Parameters

###### values

`T`

An array of Promises.

##### Returns

`Promise`\<\{ -readonly \[P in string \| number \| symbol\]: PromiseSettledResult\<Awaited\<T\[P\<P\>\]\>\> \}\>

A new Promise.

##### Inherited from

`Promise.allSettled`

#### Call Signature

> `static` **allSettled**\<`T`\>(`values`): `Promise`\<`PromiseSettledResult`\<`Awaited`\<`T`\>\>[]\>

Defined in: node_modules/typescript/lib/lib.es2020.promise.d.ts:46

Creates a Promise that is resolved with an array of results when all
of the provided Promises resolve or reject.

##### Type Parameters

###### T

`T`

##### Parameters

###### values

`Iterable`\<`T` \| `PromiseLike`\<`T`\>\>

An array of Promises.

##### Returns

`Promise`\<`PromiseSettledResult`\<`Awaited`\<`T`\>\>[]\>

A new Promise.

##### Inherited from

`Promise.allSettled`

---

### any()

#### Call Signature

> `static` **any**\<`T`\>(`values`): `Promise`\<`Awaited`\<`T`\[`number`\]\>\>

Defined in: node_modules/typescript/lib/lib.es2021.promise.d.ts:40

The any function returns a promise that is fulfilled by the first given promise to be fulfilled, or rejected with an AggregateError containing an array of rejection reasons if all of the given promises are rejected. It resolves all elements of the passed iterable to promises as it runs this algorithm.

##### Type Parameters

###### T

`T` _extends_ readonly `unknown`[] \| \[\]

##### Parameters

###### values

`T`

An array or iterable of Promises.

##### Returns

`Promise`\<`Awaited`\<`T`\[`number`\]\>\>

A new Promise.

##### Inherited from

`Promise.any`

#### Call Signature

> `static` **any**\<`T`\>(`values`): `Promise`\<`Awaited`\<`T`\>\>

Defined in: node_modules/typescript/lib/lib.es2021.promise.d.ts:47

The any function returns a promise that is fulfilled by the first given promise to be fulfilled, or rejected with an AggregateError containing an array of rejection reasons if all of the given promises are rejected. It resolves all elements of the passed iterable to promises as it runs this algorithm.

##### Type Parameters

###### T

`T`

##### Parameters

###### values

`Iterable`\<`T` \| `PromiseLike`\<`T`\>\>

An array or iterable of Promises.

##### Returns

`Promise`\<`Awaited`\<`T`\>\>

A new Promise.

##### Inherited from

`Promise.any`

---

### race()

#### Call Signature

> `static` **race**\<`T`\>(`values`): `Promise`\<`Awaited`\<`T`\>\>

Defined in: node_modules/typescript/lib/lib.es2015.iterable.d.ts:263

Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
or rejected.

##### Type Parameters

###### T

`T`

##### Parameters

###### values

`Iterable`\<`T` \| `PromiseLike`\<`T`\>\>

An iterable of Promises.

##### Returns

`Promise`\<`Awaited`\<`T`\>\>

A new Promise.

##### Inherited from

`Promise.race`

#### Call Signature

> `static` **race**\<`T`\>(`values`): `Promise`\<`Awaited`\<`T`\[`number`\]\>\>

Defined in: node_modules/typescript/lib/lib.es2015.promise.d.ts:50

Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
or rejected.

##### Type Parameters

###### T

`T` _extends_ readonly `unknown`[] \| \[\]

##### Parameters

###### values

`T`

An array of Promises.

##### Returns

`Promise`\<`Awaited`\<`T`\[`number`\]\>\>

A new Promise.

##### Inherited from

`Promise.race`

---

### reject()

> `static` **reject**\<`T`\>(`reason?`): `Promise`\<`T`\>

Defined in: node_modules/typescript/lib/lib.es2015.promise.d.ts:60

Creates a new rejected promise for the provided reason.

#### Type Parameters

##### T

`T` = `never`

#### Parameters

##### reason?

`any`

The reason the promise was rejected.

#### Returns

`Promise`\<`T`\>

A new rejected Promise.

#### Inherited from

`Promise.reject`

---

### resolve()

#### Call Signature

> `static` **resolve**(): `Promise`\<`void`\>

Defined in: node_modules/typescript/lib/lib.es2015.promise.d.ts:66

Creates a new resolved promise.

##### Returns

`Promise`\<`void`\>

A resolved promise.

##### Inherited from

`Promise.resolve`

#### Call Signature

> `static` **resolve**\<`T`\>(`value`): `Promise`\<`Awaited`\<`T`\>\>

Defined in: node_modules/typescript/lib/lib.es2015.promise.d.ts:72

Creates a new resolved promise for the provided value.

##### Type Parameters

###### T

`T`

##### Parameters

###### value

`T`

A promise.

##### Returns

`Promise`\<`Awaited`\<`T`\>\>

A promise whose internal state matches the provided promise.

##### Inherited from

`Promise.resolve`

#### Call Signature

> `static` **resolve**\<`T`\>(`value`): `Promise`\<`Awaited`\<`T`\>\>

Defined in: node_modules/typescript/lib/lib.es2015.promise.d.ts:78

Creates a new resolved promise for the provided value.

##### Type Parameters

###### T

`T`

##### Parameters

###### value

A promise.

`T` | `PromiseLike`\<`T`\>

##### Returns

`Promise`\<`Awaited`\<`T`\>\>

A promise whose internal state matches the provided promise.

##### Inherited from

`Promise.resolve`
