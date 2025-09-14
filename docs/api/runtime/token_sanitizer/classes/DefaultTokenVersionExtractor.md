[**@nebius/nodejs-sdk**](../../../README.md)

---

[@nebius/nodejs-sdk](../../../README.md) / [runtime/token_sanitizer](../README.md) / DefaultTokenVersionExtractor

# Class: DefaultTokenVersionExtractor

Defined in: [src/runtime/token_sanitizer.ts:29](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/token_sanitizer.ts#L29)

## Implements

- [`TokenVersionExtractor`](../interfaces/TokenVersionExtractor.md)

## Constructors

### Constructor

> **new DefaultTokenVersionExtractor**(`versions`): `DefaultTokenVersionExtractor`

Defined in: [src/runtime/token_sanitizer.ts:30](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/token_sanitizer.ts#L30)

#### Parameters

##### versions

`Record`\<`string`, [`TokenVersion`](TokenVersion.md)\>

#### Returns

`DefaultTokenVersionExtractor`

## Methods

### extract()

> **extract**(`token`): \[[`TokenVersion`](TokenVersion.md), `boolean`\]

Defined in: [src/runtime/token_sanitizer.ts:31](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/token_sanitizer.ts#L31)

#### Parameters

##### token

`string`

#### Returns

\[[`TokenVersion`](TokenVersion.md), `boolean`\]

#### Implementation of

[`TokenVersionExtractor`](../interfaces/TokenVersionExtractor.md).[`extract`](../interfaces/TokenVersionExtractor.md#extract)
