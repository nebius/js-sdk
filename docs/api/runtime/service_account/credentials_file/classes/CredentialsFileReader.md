[**@nebius/nodejs-sdk**](../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../README.md) / [runtime/service\_account/credentials\_file](../README.md) / CredentialsFileReader

# Class: CredentialsFileReader

Defined in: [src/runtime/service\_account/credentials\_file.ts:39](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/service_account/credentials_file.ts#L39)

## Implements

- [`Reader`](../../service_account/interfaces/Reader.md)

## Constructors

### Constructor

> **new CredentialsFileReader**(`filename`): `CredentialsFileReader`

Defined in: [src/runtime/service\_account/credentials\_file.ts:43](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/service_account/credentials_file.ts#L43)

#### Parameters

##### filename

`string`

#### Returns

`CredentialsFileReader`

## Methods

### getExchangeTokenRequest()

> **getExchangeTokenRequest**(): [`ExchangeTokenRequest`](../../../../generated/nebius/iam/v1/interfaces/ExchangeTokenRequest.md)

Defined in: [src/runtime/service\_account/credentials\_file.ts:58](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/service_account/credentials_file.ts#L58)

#### Returns

[`ExchangeTokenRequest`](../../../../generated/nebius/iam/v1/interfaces/ExchangeTokenRequest.md)

#### Implementation of

[`Reader`](../../service_account/interfaces/Reader.md).[`getExchangeTokenRequest`](../../service_account/interfaces/Reader.md#getexchangetokenrequest)

***

### read()

> **read**(): [`ServiceAccount`](../../service_account/classes/ServiceAccount.md)

Defined in: [src/runtime/service\_account/credentials\_file.ts:54](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/service_account/credentials_file.ts#L54)

#### Returns

[`ServiceAccount`](../../service_account/classes/ServiceAccount.md)

#### Implementation of

[`Reader`](../../service_account/interfaces/Reader.md).[`read`](../../service_account/interfaces/Reader.md#read)
