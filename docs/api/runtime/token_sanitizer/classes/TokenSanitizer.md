[**@nebius/nodejs-sdk**](../../../README.md)

---

[@nebius/nodejs-sdk](../../../README.md) / [runtime/token_sanitizer](../README.md) / TokenSanitizer

# Class: TokenSanitizer

Defined in: [src/runtime/token_sanitizer.ts:39](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token_sanitizer.ts#L39)

## Constructors

### Constructor

> **new TokenSanitizer**(`extractor`): `TokenSanitizer`

Defined in: [src/runtime/token_sanitizer.ts:40](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token_sanitizer.ts#L40)

#### Parameters

##### extractor

[`TokenVersionExtractor`](../interfaces/TokenVersionExtractor.md)

#### Returns

`TokenSanitizer`

## Methods

### isSupported()

> **isSupported**(`token`): `boolean`

Defined in: [src/runtime/token_sanitizer.ts:66](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token_sanitizer.ts#L66)

#### Parameters

##### token

`undefined` | `null` | `string`

#### Returns

`boolean`

---

### sanitize()

> **sanitize**(`token`): `string`

Defined in: [src/runtime/token_sanitizer.ts:50](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token_sanitizer.ts#L50)

#### Parameters

##### token

`undefined` | `null` | `string`

#### Returns

`string`

---

### accessTokenSanitizer()

> `static` **accessTokenSanitizer**(): `TokenSanitizer`

Defined in: [src/runtime/token_sanitizer.ts:42](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token_sanitizer.ts#L42)

#### Returns

`TokenSanitizer`

---

### credentialsSanitizer()

> `static` **credentialsSanitizer**(): `TokenSanitizer`

Defined in: [src/runtime/token_sanitizer.ts:46](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/token_sanitizer.ts#L46)

#### Returns

`TokenSanitizer`
