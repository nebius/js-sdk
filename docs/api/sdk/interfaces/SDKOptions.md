[**@nebius/nodejs-sdk**](../../README.md)

---

[@nebius/nodejs-sdk](../../README.md) / [sdk](../README.md) / SDKOptions

# Interface: SDKOptions

Defined in: [src/sdk.ts:79](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/sdk.ts#L79)

## Properties

### authorizationProvider?

> `optional` **authorizationProvider**: [`Provider`](../../runtime/authorization/provider/interfaces/Provider.md)

Defined in: [src/sdk.ts:85](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/sdk.ts#L85)

---

### clientOptions?

> `optional` **clientOptions**: `Partial`\<`ClientOptions`\>

Defined in: [src/sdk.ts:87](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/sdk.ts#L87)

---

### configReader?

> `optional` **configReader**: [`ConfigReaderLike`](ConfigReaderLike.md)

Defined in: [src/sdk.ts:83](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/sdk.ts#L83)

---

### credentials?

> `optional` **credentials**: [`CredentialsInit`](../type-aliases/CredentialsInit.md)

Defined in: [src/sdk.ts:90](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/sdk.ts#L90)

---

### domain?

> `optional` **domain**: `string`

Defined in: [src/sdk.ts:82](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/sdk.ts#L82)

---

### federationInvitationNoBrowserOpen?

> `optional` **federationInvitationNoBrowserOpen**: `boolean`

Defined in: [src/sdk.ts:95](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/sdk.ts#L95)

---

### federationInvitationTimeoutMs?

> `optional` **federationInvitationTimeoutMs**: `number`

Defined in: [src/sdk.ts:96](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/sdk.ts#L96)

---

### federationInvitationWriter()?

> `optional` **federationInvitationWriter**: (`s`) => `void`

Defined in: [src/sdk.ts:94](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/sdk.ts#L94)

#### Parameters

##### s

`string`

#### Returns

`void`

---

### insecure?

> `optional` **insecure**: `boolean`

Defined in: [src/sdk.ts:86](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/sdk.ts#L86)

---

### interceptors?

> `optional` **interceptors**: `Interceptor`[]

Defined in: [src/sdk.ts:88](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/sdk.ts#L88)

---

### parentId?

> `optional` **parentId**: `string`

Defined in: [src/sdk.ts:84](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/sdk.ts#L84)

---

### perAddress?

> `optional` **perAddress**: `Record`\<`string`, \{ `clientOptions?`: `Partial`\<`ClientOptions`\>; `credentials?`: `ChannelCredentials`; `insecure?`: `boolean`; `interceptors?`: `Interceptor`[]; \}\>

Defined in: [src/sdk.ts:99](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/sdk.ts#L99)

---

### resolver?

> `optional` **resolver**: [`Resolver`](../../runtime/resolver/interfaces/Resolver.md)

Defined in: [src/sdk.ts:80](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/sdk.ts#L80)

---

### substitutions?

> `optional` **substitutions**: `Record`\<`string`, `string`\>

Defined in: [src/sdk.ts:81](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/sdk.ts#L81)

---

### tlsRootCAs?

> `optional` **tlsRootCAs**: `string` \| `string`[] \| `Buffer`\<`ArrayBufferLike`\>

Defined in: [src/sdk.ts:92](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/sdk.ts#L92)

---

### userAgentPrefix?

> `optional` **userAgentPrefix**: `string`

Defined in: [src/sdk.ts:97](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/sdk.ts#L97)
