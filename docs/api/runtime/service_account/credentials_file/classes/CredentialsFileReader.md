[**@nebius/nodejs-sdk**](../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../README.md) / [runtime/service\_account/credentials\_file](../README.md) / CredentialsFileReader

# Class: CredentialsFileReader

Defined in: [src/runtime/service\_account/credentials\_file.ts:38](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/service_account/credentials_file.ts#L38)

## Implements

- [`Reader`](../../service_account/interfaces/Reader.md)

## Indexable

\[`key`: `symbol`\]: () => `string` \| () => `object`

## Constructors

### Constructor

> **new CredentialsFileReader**(`filename`, `logger?`): `CredentialsFileReader`

Defined in: [src/runtime/service\_account/credentials\_file.ts:44](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/service_account/credentials_file.ts#L44)

#### Parameters

##### filename

`string`

##### logger?

[`Logger`](../../../util/logging/classes/Logger.md)

#### Returns

`CredentialsFileReader`

## Properties

### $type

> `readonly` **$type**: `"nebius.sdk.CredentialsFileReader"` = `'nebius.sdk.CredentialsFileReader'`

Defined in: [src/runtime/service\_account/credentials\_file.ts:39](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/service_account/credentials_file.ts#L39)

## Methods

### \[customJson\]()

> **\[customJson\]**(): `object`

Defined in: [src/runtime/service\_account/credentials\_file.ts:60](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/service_account/credentials_file.ts#L60)

#### Returns

`object`

***

### getExchangeTokenRequest()

> **getExchangeTokenRequest**(): [`ExchangeTokenRequest`](../../../../api/nebius/iam/v1/interfaces/ExchangeTokenRequest.md)

Defined in: [src/runtime/service\_account/credentials\_file.ts:72](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/service_account/credentials_file.ts#L72)

#### Returns

[`ExchangeTokenRequest`](../../../../api/nebius/iam/v1/interfaces/ExchangeTokenRequest.md)

#### Implementation of

[`Reader`](../../service_account/interfaces/Reader.md).[`getExchangeTokenRequest`](../../service_account/interfaces/Reader.md#getexchangetokenrequest)

***

### read()

> **read**(): [`ServiceAccount`](../../service_account/classes/ServiceAccount.md)

Defined in: [src/runtime/service\_account/credentials\_file.ts:68](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/service_account/credentials_file.ts#L68)

#### Returns

[`ServiceAccount`](../../service_account/classes/ServiceAccount.md)

#### Implementation of

[`Reader`](../../service_account/interfaces/Reader.md).[`read`](../../service_account/interfaces/Reader.md#read)
