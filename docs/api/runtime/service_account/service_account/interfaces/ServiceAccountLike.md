[**@nebius/nodejs-sdk**](../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../README.md) / [runtime/service_account/service_account](../README.md) / ServiceAccountLike

# Interface: ServiceAccountLike

Defined in: [src/runtime/service_account/service_account.ts:9](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/service_account/service_account.ts#L9)

## Extends

- [`TokenRequester`](TokenRequester.md)

## Properties

### privateKeyPem

> `readonly` **privateKeyPem**: `string`

Defined in: [src/runtime/service_account/service_account.ts:10](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/service_account/service_account.ts#L10)

---

### publicKeyId

> `readonly` **publicKeyId**: `string`

Defined in: [src/runtime/service_account/service_account.ts:11](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/service_account/service_account.ts#L11)

---

### serviceAccountId

> `readonly` **serviceAccountId**: `string`

Defined in: [src/runtime/service_account/service_account.ts:12](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/service_account/service_account.ts#L12)

## Methods

### getExchangeTokenRequest()

> **getExchangeTokenRequest**(): [`ExchangeTokenRequest`](../../../../generated/nebius/iam/v1/interfaces/ExchangeTokenRequest.md)

Defined in: [src/runtime/service_account/service_account.ts:6](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/service_account/service_account.ts#L6)

#### Returns

[`ExchangeTokenRequest`](../../../../generated/nebius/iam/v1/interfaces/ExchangeTokenRequest.md)

#### Inherited from

[`TokenRequester`](TokenRequester.md).[`getExchangeTokenRequest`](TokenRequester.md#getexchangetokenrequest)
