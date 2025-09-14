[**@nebius/nodejs-sdk**](../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../README.md) / [runtime/service_account/federated_credentials](../README.md) / StaticFederatedCredentials

# Class: StaticFederatedCredentials

Defined in: [src/runtime/service_account/federated_credentials.ts:53](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/service_account/federated_credentials.ts#L53)

## Implements

- [`FederatedCredentialsReader`](../interfaces/FederatedCredentialsReader.md)

## Indexable

\[`key`: `symbol`\]: () => `string` \| () => `object`

## Constructors

### Constructor

> **new StaticFederatedCredentials**(`_credentials`): `StaticFederatedCredentials`

Defined in: [src/runtime/service_account/federated_credentials.ts:54](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/service_account/federated_credentials.ts#L54)

#### Parameters

##### \_credentials

`string`

#### Returns

`StaticFederatedCredentials`

## Methods

### \[customJson\]()

> **\[customJson\]**(): `object`

Defined in: [src/runtime/service_account/federated_credentials.ts:60](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/service_account/federated_credentials.ts#L60)

#### Returns

`object`

---

### credentials()

> **credentials**(): `string`

Defined in: [src/runtime/service_account/federated_credentials.ts:68](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/service_account/federated_credentials.ts#L68)

#### Returns

`string`

#### Implementation of

[`FederatedCredentialsReader`](../interfaces/FederatedCredentialsReader.md).[`credentials`](../interfaces/FederatedCredentialsReader.md#credentials)
