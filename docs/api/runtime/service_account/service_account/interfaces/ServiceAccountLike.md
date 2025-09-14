[**@nebius/nodejs-sdk**](../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../README.md) / [runtime/service_account/service_account](../README.md) / ServiceAccountLike

# Interface: ServiceAccountLike

Defined in: [src/runtime/service_account/service_account.ts:7](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/service_account/service_account.ts#L7)

## Extends

- [`TokenRequester`](../../../token/exchangeable/interfaces/TokenRequester.md)

## Properties

### privateKeyPem

> `readonly` **privateKeyPem**: `string`

Defined in: [src/runtime/service_account/service_account.ts:8](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/service_account/service_account.ts#L8)

---

### publicKeyId

> `readonly` **publicKeyId**: `string`

Defined in: [src/runtime/service_account/service_account.ts:9](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/service_account/service_account.ts#L9)

---

### serviceAccountId

> `readonly` **serviceAccountId**: `string`

Defined in: [src/runtime/service_account/service_account.ts:10](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/service_account/service_account.ts#L10)

## Methods

### getExchangeTokenRequest()

> **getExchangeTokenRequest**(): [`ExchangeTokenRequest`](../../../../api/nebius/iam/v1/interfaces/ExchangeTokenRequest.md)

Defined in: [src/runtime/token/exchangeable.ts:176](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token/exchangeable.ts#L176)

#### Returns

[`ExchangeTokenRequest`](../../../../api/nebius/iam/v1/interfaces/ExchangeTokenRequest.md)

#### Inherited from

[`TokenRequester`](../../../token/exchangeable/interfaces/TokenRequester.md).[`getExchangeTokenRequest`](../../../token/exchangeable/interfaces/TokenRequester.md#getexchangetokenrequest)
