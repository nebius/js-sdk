[**@nebius/nodejs-sdk**](../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../README.md) / [runtime/service\_account/pk\_file](../README.md) / PkFileReader

# Class: PkFileReader

Defined in: [src/runtime/service\_account/pk\_file.ts:11](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/service_account/pk_file.ts#L11)

## Implements

- [`Reader`](../../service_account/interfaces/Reader.md)

## Indexable

\[`key`: `symbol`\]: () => `string` \| () => `object`

## Constructors

### Constructor

> **new PkFileReader**(`filename`, `publicKeyId`, `serviceAccountId`, `logger?`): `PkFileReader`

Defined in: [src/runtime/service\_account/pk\_file.ts:17](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/service_account/pk_file.ts#L17)

#### Parameters

##### filename

`string`

##### publicKeyId

`string`

##### serviceAccountId

`string`

##### logger?

[`Logger`](../../../util/logging/classes/Logger.md)

#### Returns

`PkFileReader`

## Properties

### $type

> `readonly` **$type**: `"nebius.sdk.PkFileReader"` = `'nebius.sdk.PkFileReader'`

Defined in: [src/runtime/service\_account/pk\_file.ts:12](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/service_account/pk_file.ts#L12)

## Methods

### \[customJson\]()

> **\[customJson\]**(): `object`

Defined in: [src/runtime/service\_account/pk\_file.ts:30](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/service_account/pk_file.ts#L30)

#### Returns

`object`

***

### getExchangeTokenRequest()

> **getExchangeTokenRequest**(): [`ExchangeTokenRequest`](../../../../api/nebius/iam/v1/interfaces/ExchangeTokenRequest.md)

Defined in: [src/runtime/service\_account/pk\_file.ts:44](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/service_account/pk_file.ts#L44)

#### Returns

[`ExchangeTokenRequest`](../../../../api/nebius/iam/v1/interfaces/ExchangeTokenRequest.md)

#### Implementation of

[`Reader`](../../service_account/interfaces/Reader.md).[`getExchangeTokenRequest`](../../service_account/interfaces/Reader.md#getexchangetokenrequest)

***

### read()

> **read**(): [`ServiceAccount`](../../service_account/classes/ServiceAccount.md)

Defined in: [src/runtime/service\_account/pk\_file.ts:39](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/service_account/pk_file.ts#L39)

#### Returns

[`ServiceAccount`](../../service_account/classes/ServiceAccount.md)

#### Implementation of

[`Reader`](../../service_account/interfaces/Reader.md).[`read`](../../service_account/interfaces/Reader.md#read)
