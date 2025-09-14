[**@nebius/nodejs-sdk**](../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../README.md) / [runtime/service_account/federated_credentials](../README.md) / FederatedCredentialsTokenRequester

# Class: FederatedCredentialsTokenRequester

Defined in: [src/runtime/service_account/federated_credentials.ts:14](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/service_account/federated_credentials.ts#L14)

## Implements

- [`TokenRequester`](../../../token/exchangeable/interfaces/TokenRequester.md)

## Indexable

\[`key`: `symbol`\]: () => `string` \| () => `object`

## Constructors

### Constructor

> **new FederatedCredentialsTokenRequester**(`serviceAccountId`, `credentials`, `logger?`): `FederatedCredentialsTokenRequester`

Defined in: [src/runtime/service_account/federated_credentials.ts:16](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/service_account/federated_credentials.ts#L16)

#### Parameters

##### serviceAccountId

`string`

##### credentials

[`FederatedCredentialsReader`](../interfaces/FederatedCredentialsReader.md)

##### logger?

[`Logger`](../../../util/logging/classes/Logger.md)

#### Returns

`FederatedCredentialsTokenRequester`

## Properties

### $type

> `readonly` **$type**: `"nebius.sdk.FederatedCredentialsTokenRequester"` = `'nebius.sdk.FederatedCredentialsTokenRequester'`

Defined in: [src/runtime/service_account/federated_credentials.ts:15](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/service_account/federated_credentials.ts#L15)

---

### credentials

> `readonly` **credentials**: [`FederatedCredentialsReader`](../interfaces/FederatedCredentialsReader.md)

Defined in: [src/runtime/service_account/federated_credentials.ts:18](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/service_account/federated_credentials.ts#L18)

---

### serviceAccountId

> `readonly` **serviceAccountId**: `string`

Defined in: [src/runtime/service_account/federated_credentials.ts:17](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/service_account/federated_credentials.ts#L17)

## Methods

### \[customJson\]()

> **\[customJson\]**(): `object`

Defined in: [src/runtime/service_account/federated_credentials.ts:24](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/service_account/federated_credentials.ts#L24)

#### Returns

`object`

---

### getExchangeTokenRequest()

> **getExchangeTokenRequest**(): [`ExchangeTokenRequest`](../../../../generated/nebius/iam/v1/interfaces/ExchangeTokenRequest.md)

Defined in: [src/runtime/service_account/federated_credentials.ts:32](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/runtime/service_account/federated_credentials.ts#L32)

#### Returns

[`ExchangeTokenRequest`](../../../../generated/nebius/iam/v1/interfaces/ExchangeTokenRequest.md)

#### Implementation of

[`TokenRequester`](../../../token/exchangeable/interfaces/TokenRequester.md).[`getExchangeTokenRequest`](../../../token/exchangeable/interfaces/TokenRequester.md#getexchangetokenrequest)
