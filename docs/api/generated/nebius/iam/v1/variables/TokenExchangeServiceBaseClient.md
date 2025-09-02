[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/iam/v1](../README.md) / TokenExchangeServiceBaseClient

# Variable: TokenExchangeServiceBaseClient

> **TokenExchangeServiceBaseClient**: \{(`address`, `credentials`, `options?`): [`TokenExchangeServiceBaseClient`](../interfaces/TokenExchangeServiceBaseClient.md); `service`: `object`; `serviceName`: `string`; \}

Defined in: src/generated/nebius/iam/v1/index.ts:22105

## Type Declaration

## Parameters

### address

`string`

### credentials

`ChannelCredentials`

### options?

`Partial`\<`ClientOptions`\>

## Returns

[`TokenExchangeServiceBaseClient`](../interfaces/TokenExchangeServiceBaseClient.md)

### service

> **service**: `object`

#### service.exchange

> `readonly` **exchange**: `object`

#### service.exchange.path

> `readonly` **path**: `"/nebius.iam.v1.TokenExchangeService/Exchange"` = `"/nebius.iam.v1.TokenExchangeService/Exchange"`

#### service.exchange.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ExchangeTokenRequest`](../interfaces/ExchangeTokenRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ExchangeTokenRequest`](../interfaces/ExchangeTokenRequest.md)

#### service.exchange.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ExchangeTokenRequest`](../interfaces/ExchangeTokenRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.exchange.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.exchange.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`CreateTokenResponse`](../interfaces/CreateTokenResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`CreateTokenResponse`](../interfaces/CreateTokenResponse.md)

#### service.exchange.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`CreateTokenResponse`](../interfaces/CreateTokenResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.exchange.responseStream

> `readonly` **responseStream**: `false` = `false`

### serviceName

> **serviceName**: `string`
