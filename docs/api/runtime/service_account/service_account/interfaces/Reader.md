[**@nebius/nodejs-sdk**](../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../README.md) / [runtime/service_account/service_account](../README.md) / Reader

# Interface: Reader

Defined in: [src/runtime/service_account/service_account.ts:80](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/service_account/service_account.ts#L80)

## Extends

- [`TokenRequester`](../../../token/exchangeable/interfaces/TokenRequester.md)

## Methods

### getExchangeTokenRequest()

> **getExchangeTokenRequest**(): [`ExchangeTokenRequest`](../../../../api/nebius/iam/v1/interfaces/ExchangeTokenRequest.md)

Defined in: [src/runtime/token/exchangeable.ts:176](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/token/exchangeable.ts#L176)

#### Returns

[`ExchangeTokenRequest`](../../../../api/nebius/iam/v1/interfaces/ExchangeTokenRequest.md)

#### Inherited from

[`TokenRequester`](../../../token/exchangeable/interfaces/TokenRequester.md).[`getExchangeTokenRequest`](../../../token/exchangeable/interfaces/TokenRequester.md#getexchangetokenrequest)

---

### read()

> **read**(): [`ServiceAccount`](../classes/ServiceAccount.md)

Defined in: [src/runtime/service_account/service_account.ts:81](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/service_account/service_account.ts#L81)

#### Returns

[`ServiceAccount`](../classes/ServiceAccount.md)
