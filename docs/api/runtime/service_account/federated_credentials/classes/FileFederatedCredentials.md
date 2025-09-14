[**@nebius/nodejs-sdk**](../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../README.md) / [runtime/service_account/federated_credentials](../README.md) / FileFederatedCredentials

# Class: FileFederatedCredentials

Defined in: [src/runtime/service_account/federated_credentials.ts:73](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/service_account/federated_credentials.ts#L73)

## Implements

- [`FederatedCredentialsReader`](../interfaces/FederatedCredentialsReader.md)

## Indexable

\[`key`: `symbol`\]: () => `string` \| () => `object`

## Constructors

### Constructor

> **new FileFederatedCredentials**(`filePath`): `FileFederatedCredentials`

Defined in: [src/runtime/service_account/federated_credentials.ts:74](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/service_account/federated_credentials.ts#L74)

#### Parameters

##### filePath

`string`

#### Returns

`FileFederatedCredentials`

## Properties

### filePath

> `readonly` **filePath**: `string`

Defined in: [src/runtime/service_account/federated_credentials.ts:74](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/service_account/federated_credentials.ts#L74)

## Methods

### \[customJson\]()

> **\[customJson\]**(): `object`

Defined in: [src/runtime/service_account/federated_credentials.ts:79](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/service_account/federated_credentials.ts#L79)

#### Returns

`object`

---

### credentials()

> **credentials**(): `string`

Defined in: [src/runtime/service_account/federated_credentials.ts:86](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/service_account/federated_credentials.ts#L86)

#### Returns

`string`

#### Implementation of

[`FederatedCredentialsReader`](../interfaces/FederatedCredentialsReader.md).[`credentials`](../interfaces/FederatedCredentialsReader.md#credentials)
