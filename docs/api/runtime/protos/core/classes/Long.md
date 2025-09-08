[**@nebius/nodejs-sdk**](../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../README.md) / [runtime/protos/core](../README.md) / Long

# Class: Long

Defined in: node_modules/long/umd/types.d.ts:12

## Constructors

### Constructor

> **new Long**(`low`, `high?`, `unsigned?`): `Long`

Defined in: node_modules/long/umd/types.d.ts:16

Constructs a 64 bit two's-complement integer, given its low and high 32 bit values as signed integers. See the from\* functions below for more convenient ways of constructing Longs.

#### Parameters

##### low

`number`

##### high?

`number`

##### unsigned?

`boolean`

#### Returns

`Long`

## Properties

### high

> **high**: `number`

Defined in: node_modules/long/umd/types.d.ts:61

The high 32 bits as a signed value.

---

### low

> **low**: `number`

Defined in: node_modules/long/umd/types.d.ts:66

The low 32 bits as a signed value.

---

### unsigned

> **unsigned**: `boolean`

Defined in: node_modules/long/umd/types.d.ts:71

Whether unsigned or not.

---

### MAX_UNSIGNED_VALUE

> `static` **MAX_UNSIGNED_VALUE**: `Long`

Defined in: node_modules/long/umd/types.d.ts:21

Maximum unsigned value.

---

### MAX_VALUE

> `static` **MAX_VALUE**: `Long`

Defined in: node_modules/long/umd/types.d.ts:26

Maximum signed value.

---

### MIN_VALUE

> `static` **MIN_VALUE**: `Long`

Defined in: node_modules/long/umd/types.d.ts:31

Minimum signed value.

---

### NEG_ONE

> `static` **NEG_ONE**: `Long`

Defined in: node_modules/long/umd/types.d.ts:36

Signed negative one.

---

### ONE

> `static` **ONE**: `Long`

Defined in: node_modules/long/umd/types.d.ts:41

Signed one.

---

### UONE

> `static` **UONE**: `Long`

Defined in: node_modules/long/umd/types.d.ts:46

Unsigned one.

---

### UZERO

> `static` **UZERO**: `Long`

Defined in: node_modules/long/umd/types.d.ts:51

Unsigned zero.

---

### ZERO

> `static` **ZERO**: `Long`

Defined in: node_modules/long/umd/types.d.ts:56

Signed zero

## Methods

### add()

> **add**(`addend`): `Long`

Defined in: node_modules/long/umd/types.d.ts:130

Returns the sum of this and the specified Long.

#### Parameters

##### addend

`LongLike`

#### Returns

`Long`

---

### and()

> **and**(`other`): `Long`

Defined in: node_modules/long/umd/types.d.ts:135

Returns the bitwise AND of this Long and the specified.

#### Parameters

##### other

`LongLike`

#### Returns

`Long`

---

### clz()

> **clz**(): `number`

Defined in: node_modules/long/umd/types.d.ts:325

Returns count leading zeros of this Long.

#### Returns

`number`

---

### comp()

> **comp**(`other`): `number`

Defined in: node_modules/long/umd/types.d.ts:145

Compares this Long's value with the specified's.

#### Parameters

##### other

`LongLike`

#### Returns

`number`

---

### compare()

> **compare**(`other`): `number`

Defined in: node_modules/long/umd/types.d.ts:140

Compares this Long's value with the specified's.

#### Parameters

##### other

`LongLike`

#### Returns

`number`

---

### countLeadingZeros()

> **countLeadingZeros**(): `number`

Defined in: node_modules/long/umd/types.d.ts:320

Returns count leading zeros of this Long.

#### Returns

`number`

---

### countTrailingZeros()

> **countTrailingZeros**(): `number`

Defined in: node_modules/long/umd/types.d.ts:330

Returns count trailing zeros of this Long.

#### Returns

`number`

---

### ctz()

> **ctz**(): `number`

Defined in: node_modules/long/umd/types.d.ts:335

Returns count trailing zeros of this Long.

#### Returns

`number`

---

### div()

> **div**(`divisor`): `Long`

Defined in: node_modules/long/umd/types.d.ts:155

Returns this Long divided by the specified.

#### Parameters

##### divisor

`LongLike`

#### Returns

`Long`

---

### divide()

> **divide**(`divisor`): `Long`

Defined in: node_modules/long/umd/types.d.ts:150

Returns this Long divided by the specified.

#### Parameters

##### divisor

`LongLike`

#### Returns

`Long`

---

### eq()

> **eq**(`other`): `boolean`

Defined in: node_modules/long/umd/types.d.ts:165

Tests if this Long's value equals the specified's.

#### Parameters

##### other

`LongLike`

#### Returns

`boolean`

---

### equals()

> **equals**(`other`): `boolean`

Defined in: node_modules/long/umd/types.d.ts:160

Tests if this Long's value equals the specified's.

#### Parameters

##### other

`LongLike`

#### Returns

`boolean`

---

### eqz()

> **eqz**(): `boolean`

Defined in: node_modules/long/umd/types.d.ts:250

Tests if this Long's value equals zero.

#### Returns

`boolean`

---

### ge()

> **ge**(`other`): `boolean`

Defined in: node_modules/long/umd/types.d.ts:215

Tests if this Long's value is greater than or equal the specified's.

#### Parameters

##### other

`LongLike`

#### Returns

`boolean`

---

### getHighBits()

> **getHighBits**(): `number`

Defined in: node_modules/long/umd/types.d.ts:170

Gets the high 32 bits as a signed integer.

#### Returns

`number`

---

### getHighBitsUnsigned()

> **getHighBitsUnsigned**(): `number`

Defined in: node_modules/long/umd/types.d.ts:175

Gets the high 32 bits as an unsigned integer.

#### Returns

`number`

---

### getLowBits()

> **getLowBits**(): `number`

Defined in: node_modules/long/umd/types.d.ts:180

Gets the low 32 bits as a signed integer.

#### Returns

`number`

---

### getLowBitsUnsigned()

> **getLowBitsUnsigned**(): `number`

Defined in: node_modules/long/umd/types.d.ts:185

Gets the low 32 bits as an unsigned integer.

#### Returns

`number`

---

### getNumBitsAbs()

> **getNumBitsAbs**(): `number`

Defined in: node_modules/long/umd/types.d.ts:190

Gets the number of bits needed to represent the absolute value of this Long.

#### Returns

`number`

---

### greaterThan()

> **greaterThan**(`other`): `boolean`

Defined in: node_modules/long/umd/types.d.ts:195

Tests if this Long's value is greater than the specified's.

#### Parameters

##### other

`LongLike`

#### Returns

`boolean`

---

### greaterThanOrEqual()

> **greaterThanOrEqual**(`other`): `boolean`

Defined in: node_modules/long/umd/types.d.ts:205

Tests if this Long's value is greater than or equal the specified's.

#### Parameters

##### other

`LongLike`

#### Returns

`boolean`

---

### gt()

> **gt**(`other`): `boolean`

Defined in: node_modules/long/umd/types.d.ts:200

Tests if this Long's value is greater than the specified's.

#### Parameters

##### other

`LongLike`

#### Returns

`boolean`

---

### gte()

> **gte**(`other`): `boolean`

Defined in: node_modules/long/umd/types.d.ts:210

Tests if this Long's value is greater than or equal the specified's.

#### Parameters

##### other

`LongLike`

#### Returns

`boolean`

---

### isEven()

> **isEven**(): `boolean`

Defined in: node_modules/long/umd/types.d.ts:220

Tests if this Long's value is even.

#### Returns

`boolean`

---

### isNegative()

> **isNegative**(): `boolean`

Defined in: node_modules/long/umd/types.d.ts:225

Tests if this Long's value is negative.

#### Returns

`boolean`

---

### isOdd()

> **isOdd**(): `boolean`

Defined in: node_modules/long/umd/types.d.ts:230

Tests if this Long's value is odd.

#### Returns

`boolean`

---

### isPositive()

> **isPositive**(): `boolean`

Defined in: node_modules/long/umd/types.d.ts:235

Tests if this Long's value is positive or zero.

#### Returns

`boolean`

---

### isSafeInteger()

> **isSafeInteger**(): `boolean`

Defined in: node_modules/long/umd/types.d.ts:240

Tests if this Long can be safely represented as a JavaScript number.

#### Returns

`boolean`

---

### isZero()

> **isZero**(): `boolean`

Defined in: node_modules/long/umd/types.d.ts:245

Tests if this Long's value equals zero.

#### Returns

`boolean`

---

### le()

> **le**(`other`): `boolean`

Defined in: node_modules/long/umd/types.d.ts:275

Tests if this Long's value is less than or equal the specified's.

#### Parameters

##### other

`LongLike`

#### Returns

`boolean`

---

### lessThan()

> **lessThan**(`other`): `boolean`

Defined in: node_modules/long/umd/types.d.ts:255

Tests if this Long's value is less than the specified's.

#### Parameters

##### other

`LongLike`

#### Returns

`boolean`

---

### lessThanOrEqual()

> **lessThanOrEqual**(`other`): `boolean`

Defined in: node_modules/long/umd/types.d.ts:265

Tests if this Long's value is less than or equal the specified's.

#### Parameters

##### other

`LongLike`

#### Returns

`boolean`

---

### lt()

> **lt**(`other`): `boolean`

Defined in: node_modules/long/umd/types.d.ts:260

Tests if this Long's value is less than the specified's.

#### Parameters

##### other

`LongLike`

#### Returns

`boolean`

---

### lte()

> **lte**(`other`): `boolean`

Defined in: node_modules/long/umd/types.d.ts:270

Tests if this Long's value is less than or equal the specified's.

#### Parameters

##### other

`LongLike`

#### Returns

`boolean`

---

### mod()

> **mod**(`other`): `Long`

Defined in: node_modules/long/umd/types.d.ts:285

Returns this Long modulo the specified.

#### Parameters

##### other

`LongLike`

#### Returns

`Long`

---

### modulo()

> **modulo**(`other`): `Long`

Defined in: node_modules/long/umd/types.d.ts:280

Returns this Long modulo the specified.

#### Parameters

##### other

`LongLike`

#### Returns

`Long`

---

### mul()

> **mul**(`multiplier`): `Long`

Defined in: node_modules/long/umd/types.d.ts:300

Returns the product of this and the specified Long.

#### Parameters

##### multiplier

`LongLike`

#### Returns

`Long`

---

### multiply()

> **multiply**(`multiplier`): `Long`

Defined in: node_modules/long/umd/types.d.ts:295

Returns the product of this and the specified Long.

#### Parameters

##### multiplier

`LongLike`

#### Returns

`Long`

---

### ne()

> **ne**(`other`): `boolean`

Defined in: node_modules/long/umd/types.d.ts:350

Tests if this Long's value differs from the specified's.

#### Parameters

##### other

`LongLike`

#### Returns

`boolean`

---

### neg()

> **neg**(): `Long`

Defined in: node_modules/long/umd/types.d.ts:310

Negates this Long's value.

#### Returns

`Long`

---

### negate()

> **negate**(): `Long`

Defined in: node_modules/long/umd/types.d.ts:305

Negates this Long's value.

#### Returns

`Long`

---

### neq()

> **neq**(`other`): `boolean`

Defined in: node_modules/long/umd/types.d.ts:345

Tests if this Long's value differs from the specified's.

#### Parameters

##### other

`LongLike`

#### Returns

`boolean`

---

### not()

> **not**(): `Long`

Defined in: node_modules/long/umd/types.d.ts:315

Returns the bitwise NOT of this Long.

#### Returns

`Long`

---

### notEquals()

> **notEquals**(`other`): `boolean`

Defined in: node_modules/long/umd/types.d.ts:340

Tests if this Long's value differs from the specified's.

#### Parameters

##### other

`LongLike`

#### Returns

`boolean`

---

### or()

> **or**(`other`): `Long`

Defined in: node_modules/long/umd/types.d.ts:355

Returns the bitwise OR of this Long and the specified.

#### Parameters

##### other

`LongLike`

#### Returns

`Long`

---

### rem()

> **rem**(`other`): `Long`

Defined in: node_modules/long/umd/types.d.ts:290

Returns this Long modulo the specified.

#### Parameters

##### other

`LongLike`

#### Returns

`Long`

---

### rotateLeft()

> **rotateLeft**(`numBits`): `Long`

Defined in: node_modules/long/umd/types.d.ts:395

Returns this Long with bits rotated to the left by the given amount.

#### Parameters

##### numBits

`number` | `Long`

#### Returns

`Long`

---

### rotateRight()

> **rotateRight**(`numBits`): `Long`

Defined in: node_modules/long/umd/types.d.ts:405

Returns this Long with bits rotated to the right by the given amount.

#### Parameters

##### numBits

`number` | `Long`

#### Returns

`Long`

---

### rotl()

> **rotl**(`numBits`): `Long`

Defined in: node_modules/long/umd/types.d.ts:400

Returns this Long with bits rotated to the left by the given amount.

#### Parameters

##### numBits

`number` | `Long`

#### Returns

`Long`

---

### rotr()

> **rotr**(`numBits`): `Long`

Defined in: node_modules/long/umd/types.d.ts:410

Returns this Long with bits rotated to the right by the given amount.

#### Parameters

##### numBits

`number` | `Long`

#### Returns

`Long`

---

### shiftLeft()

> **shiftLeft**(`numBits`): `Long`

Defined in: node_modules/long/umd/types.d.ts:360

Returns this Long with bits shifted to the left by the given amount.

#### Parameters

##### numBits

`number` | `Long`

#### Returns

`Long`

---

### shiftRight()

> **shiftRight**(`numBits`): `Long`

Defined in: node_modules/long/umd/types.d.ts:370

Returns this Long with bits arithmetically shifted to the right by the given amount.

#### Parameters

##### numBits

`number` | `Long`

#### Returns

`Long`

---

### shiftRightUnsigned()

> **shiftRightUnsigned**(`numBits`): `Long`

Defined in: node_modules/long/umd/types.d.ts:380

Returns this Long with bits logically shifted to the right by the given amount.

#### Parameters

##### numBits

`number` | `Long`

#### Returns

`Long`

---

### shl()

> **shl**(`numBits`): `Long`

Defined in: node_modules/long/umd/types.d.ts:365

Returns this Long with bits shifted to the left by the given amount.

#### Parameters

##### numBits

`number` | `Long`

#### Returns

`Long`

---

### shr()

> **shr**(`numBits`): `Long`

Defined in: node_modules/long/umd/types.d.ts:375

Returns this Long with bits arithmetically shifted to the right by the given amount.

#### Parameters

##### numBits

`number` | `Long`

#### Returns

`Long`

---

### shr_u()

> **shr_u**(`numBits`): `Long`

Defined in: node_modules/long/umd/types.d.ts:390

Returns this Long with bits logically shifted to the right by the given amount.

#### Parameters

##### numBits

`number` | `Long`

#### Returns

`Long`

---

### shru()

> **shru**(`numBits`): `Long`

Defined in: node_modules/long/umd/types.d.ts:385

Returns this Long with bits logically shifted to the right by the given amount.

#### Parameters

##### numBits

`number` | `Long`

#### Returns

`Long`

---

### sub()

> **sub**(`subtrahend`): `Long`

Defined in: node_modules/long/umd/types.d.ts:420

Returns the difference of this and the specified Long.

#### Parameters

##### subtrahend

`LongLike`

#### Returns

`Long`

---

### subtract()

> **subtract**(`subtrahend`): `Long`

Defined in: node_modules/long/umd/types.d.ts:415

Returns the difference of this and the specified Long.

#### Parameters

##### subtrahend

`LongLike`

#### Returns

`Long`

---

### toBigInt()

> **toBigInt**(): `bigint`

Defined in: node_modules/long/umd/types.d.ts:425

Converts the Long to a big integer.

#### Returns

`bigint`

---

### toBytes()

> **toBytes**(`le?`): `number`[]

Defined in: node_modules/long/umd/types.d.ts:441

Converts this Long to its byte representation.

#### Parameters

##### le?

`boolean`

#### Returns

`number`[]

---

### toBytesBE()

> **toBytesBE**(): `number`[]

Defined in: node_modules/long/umd/types.d.ts:453

Converts this Long to its big endian byte representation.

#### Returns

`number`[]

---

### toBytesLE()

> **toBytesLE**(): `number`[]

Defined in: node_modules/long/umd/types.d.ts:447

Converts this Long to its little endian byte representation.

#### Returns

`number`[]

---

### toInt()

> **toInt**(): `number`

Defined in: node_modules/long/umd/types.d.ts:430

Converts the Long to a 32 bit integer, assuming it is a 32 bit integer.

#### Returns

`number`

---

### toNumber()

> **toNumber**(): `number`

Defined in: node_modules/long/umd/types.d.ts:435

Converts the Long to a the nearest floating-point representation of this value (double, 53 bit mantissa).

#### Returns

`number`

---

### toSigned()

> **toSigned**(): `Long`

Defined in: node_modules/long/umd/types.d.ts:458

Converts this Long to signed.

#### Returns

`Long`

---

### toString()

> **toString**(`radix?`): `string`

Defined in: node_modules/long/umd/types.d.ts:463

Converts the Long to a string written in the specified radix.

#### Parameters

##### radix?

`number`

#### Returns

`string`

---

### toUnsigned()

> **toUnsigned**(): `Long`

Defined in: node_modules/long/umd/types.d.ts:468

Converts this Long to unsigned.

#### Returns

`Long`

---

### xor()

> **xor**(`other`): `Long`

Defined in: node_modules/long/umd/types.d.ts:473

Returns the bitwise XOR of this Long and the given one.

#### Parameters

##### other

`LongLike`

#### Returns

`Long`

---

### fromBigInt()

> `static` **fromBigInt**(`value`, `unsigned?`): `Long`

Defined in: node_modules/long/umd/types.d.ts:91

Returns a Long representing the given big integer value.

#### Parameters

##### value

`bigint`

##### unsigned?

`boolean`

#### Returns

`Long`

---

### fromBits()

> `static` **fromBits**(`lowBits`, `highBits`, `unsigned?`): `Long`

Defined in: node_modules/long/umd/types.d.ts:76

Returns a Long representing the 64 bit integer that comes by concatenating the given low and high bits. Each is assumed to use 32 bits.

#### Parameters

##### lowBits

`number`

##### highBits

`number`

##### unsigned?

`boolean`

#### Returns

`Long`

---

### fromBytes()

> `static` **fromBytes**(`bytes`, `unsigned?`, `le?`): `Long`

Defined in: node_modules/long/umd/types.d.ts:105

Creates a Long from its byte representation.

#### Parameters

##### bytes

`number`[]

##### unsigned?

`boolean`

##### le?

`boolean`

#### Returns

`Long`

---

### fromBytesBE()

> `static` **fromBytesBE**(`bytes`, `unsigned?`): `Long`

Defined in: node_modules/long/umd/types.d.ts:115

Creates a Long from its big endian byte representation.

#### Parameters

##### bytes

`number`[]

##### unsigned?

`boolean`

#### Returns

`Long`

---

### fromBytesLE()

> `static` **fromBytesLE**(`bytes`, `unsigned?`): `Long`

Defined in: node_modules/long/umd/types.d.ts:110

Creates a Long from its little endian byte representation.

#### Parameters

##### bytes

`number`[]

##### unsigned?

`boolean`

#### Returns

`Long`

---

### fromInt()

> `static` **fromInt**(`value`, `unsigned?`): `Long`

Defined in: node_modules/long/umd/types.d.ts:81

Returns a Long representing the given 32 bit integer value.

#### Parameters

##### value

`number`

##### unsigned?

`boolean`

#### Returns

`Long`

---

### fromNumber()

> `static` **fromNumber**(`value`, `unsigned?`): `Long`

Defined in: node_modules/long/umd/types.d.ts:86

Returns a Long representing the given value, provided that it is a finite number. Otherwise, zero is returned.

#### Parameters

##### value

`number`

##### unsigned?

`boolean`

#### Returns

`Long`

---

### fromString()

> `static` **fromString**(`str`, `unsigned?`, `radix?`): `Long`

Defined in: node_modules/long/umd/types.d.ts:96

Returns a Long representation of the given string, written using the specified radix.

#### Parameters

##### str

`string`

##### unsigned?

`number` | `boolean`

##### radix?

`number`

#### Returns

`Long`

---

### fromValue()

> `static` **fromValue**(`val`, `unsigned?`): `Long`

Defined in: node_modules/long/umd/types.d.ts:125

Converts the specified value to a Long.

#### Parameters

##### val

`LongLike`

##### unsigned?

`boolean`

#### Returns

`Long`

---

### isLong()

> `static` **isLong**(`obj`): `obj is Long`

Defined in: node_modules/long/umd/types.d.ts:120

Tests if the specified object is a Long.

#### Parameters

##### obj

`any`

#### Returns

`obj is Long`
