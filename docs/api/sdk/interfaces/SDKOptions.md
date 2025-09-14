[**@nebius/nodejs-sdk**](../../README.md)

---

[@nebius/nodejs-sdk](../../README.md) / [sdk](../README.md) / SDKOptions

# Interface: SDKOptions

Defined in: [src/sdk.ts:74](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/sdk.ts#L74)

## Properties

### authorizationProvider?

> `optional` **authorizationProvider**: [`Provider`](../../runtime/authorization/provider/interfaces/Provider.md)

Defined in: [src/sdk.ts:80](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/sdk.ts#L80)

---

### clientOptions?

> `optional` **clientOptions**: `Partial`\<`ClientOptions`\>

Defined in: [src/sdk.ts:82](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/sdk.ts#L82)

---

### configReader?

> `optional` **configReader**: [`ConfigReaderLike`](../../runtime/cli_config_interfaces/interfaces/ConfigReaderLike.md)

Defined in: [src/sdk.ts:78](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/sdk.ts#L78)

---

### credentials?

> `optional` **credentials**: [`CredentialsInit`](../type-aliases/CredentialsInit.md)

Defined in: [src/sdk.ts:85](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/sdk.ts#L85)

---

### domain?

> `optional` **domain**: `string`

Defined in: [src/sdk.ts:77](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/sdk.ts#L77)

---

### federationInvitationNoBrowserOpen?

> `optional` **federationInvitationNoBrowserOpen**: `boolean`

Defined in: [src/sdk.ts:90](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/sdk.ts#L90)

---

### federationInvitationTimeoutMs?

> `optional` **federationInvitationTimeoutMs**: `number`

Defined in: [src/sdk.ts:91](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/sdk.ts#L91)

---

### federationInvitationWriter()?

> `optional` **federationInvitationWriter**: (`s`) => `void`

Defined in: [src/sdk.ts:89](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/sdk.ts#L89)

#### Parameters

##### s

`string`

#### Returns

`void`

---

### insecure?

> `optional` **insecure**: `boolean`

Defined in: [src/sdk.ts:81](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/sdk.ts#L81)

---

### interceptors?

> `optional` **interceptors**: `Interceptor`[]

Defined in: [src/sdk.ts:83](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/sdk.ts#L83)

---

### logger?

> `optional` **logger**: `string` \| `number` \| [`Handler`](../../runtime/util/logging/interfaces/Handler.md) \| [`Logger`](../../runtime/util/logging/classes/Logger.md)

Defined in: [src/sdk.ts:94](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/sdk.ts#L94)

---

### parentId?

> `optional` **parentId**: `string`

Defined in: [src/sdk.ts:79](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/sdk.ts#L79)

---

### perAddress?

> `optional` **perAddress**: `Record`\<`string`, \{ `clientOptions?`: `Partial`\<`ClientOptions`\>; `credentials?`: `ChannelCredentials`; `insecure?`: `boolean`; `interceptors?`: `Interceptor`[]; \}\>

Defined in: [src/sdk.ts:96](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/sdk.ts#L96)

---

### resolver?

> `optional` **resolver**: [`Resolver`](../../runtime/resolver/interfaces/Resolver.md)

Defined in: [src/sdk.ts:75](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/sdk.ts#L75)

---

### substitutions?

> `optional` **substitutions**: `Record`\<`string`, `string`\>

Defined in: [src/sdk.ts:76](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/sdk.ts#L76)

---

### tlsRootCAs?

> `optional` **tlsRootCAs**: `string` \| `string`[] \| `Buffer`\<`ArrayBufferLike`\>

Defined in: [src/sdk.ts:87](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/sdk.ts#L87)

---

### userAgentPrefix?

> `optional` **userAgentPrefix**: `string`

Defined in: [src/sdk.ts:92](https://github.com/nebius/nodejs-sdk/blob/b305f8e478cb0251c26d73900b264b3bd9a5cc58/src/sdk.ts#L92)
