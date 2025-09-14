[**@nebius/nodejs-sdk**](../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../README.md) / [runtime/service\_account/federated\_credentials](../README.md) / StaticFederatedCredentials

# Class: StaticFederatedCredentials

Defined in: [src/runtime/service\_account/federated\_credentials.ts:53](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/service_account/federated_credentials.ts#L53)

## Implements

- [`FederatedCredentialsReader`](../interfaces/FederatedCredentialsReader.md)

## Indexable

\[`key`: `symbol`\]: () => `string` \| () => `object`

## Constructors

### Constructor

> **new StaticFederatedCredentials**(`_credentials`): `StaticFederatedCredentials`

Defined in: [src/runtime/service\_account/federated\_credentials.ts:54](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/service_account/federated_credentials.ts#L54)

#### Parameters

##### \_credentials

`string`

#### Returns

`StaticFederatedCredentials`

## Methods

### \[customJson\]()

> **\[customJson\]**(): `object`

Defined in: [src/runtime/service\_account/federated\_credentials.ts:60](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/service_account/federated_credentials.ts#L60)

#### Returns

`object`

***

### credentials()

> **credentials**(): `string`

Defined in: [src/runtime/service\_account/federated\_credentials.ts:68](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/service_account/federated_credentials.ts#L68)

#### Returns

`string`

#### Implementation of

[`FederatedCredentialsReader`](../interfaces/FederatedCredentialsReader.md).[`credentials`](../interfaces/FederatedCredentialsReader.md#credentials)
