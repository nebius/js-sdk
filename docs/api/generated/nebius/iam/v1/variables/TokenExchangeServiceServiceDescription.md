[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/iam/v1](../README.md) / TokenExchangeServiceServiceDescription

# Variable: TokenExchangeServiceServiceDescription

> **TokenExchangeServiceServiceDescription**: `object`

Defined in: src/generated/nebius/iam/v1/index.ts:22088

## Type Declaration

### exchange

> `readonly` **exchange**: `object`

#### exchange.path

> `readonly` **path**: `"/nebius.iam.v1.TokenExchangeService/Exchange"` = `"/nebius.iam.v1.TokenExchangeService/Exchange"`

#### exchange.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ExchangeTokenRequest`](../interfaces/ExchangeTokenRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ExchangeTokenRequest`](../interfaces/ExchangeTokenRequest.md)

#### exchange.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ExchangeTokenRequest`](../interfaces/ExchangeTokenRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### exchange.requestStream

> `readonly` **requestStream**: `false` = `false`

#### exchange.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`CreateTokenResponse`](../interfaces/CreateTokenResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`CreateTokenResponse`](../interfaces/CreateTokenResponse.md)

#### exchange.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`CreateTokenResponse`](../interfaces/CreateTokenResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### exchange.responseStream

> `readonly` **responseStream**: `false` = `false`
