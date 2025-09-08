[**@nebius/nodejs-sdk**](../../../README.md)

---

[@nebius/nodejs-sdk](../../../README.md) / [runtime/cli_config](../README.md) / Config

# Class: Config

Defined in: [src/runtime/cli_config.ts:55](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/cli_config.ts#L55)

## Implements

- [`ConfigReaderLike`](../../../sdk/interfaces/ConfigReaderLike.md)

## Constructors

### Constructor

> **new Config**(`options`): `Config`

Defined in: [src/runtime/cli_config.ts:65](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/cli_config.ts#L65)

#### Parameters

##### options

[`ConfigOptions`](../interfaces/ConfigOptions.md) = `{}`

#### Returns

`Config`

## Methods

### endpoint()

> **endpoint**(): `undefined` \| `string`

Defined in: [src/runtime/cli_config.ts:117](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/cli_config.ts#L117)

#### Returns

`undefined` \| `string`

#### Implementation of

[`ConfigReaderLike`](../../../sdk/interfaces/ConfigReaderLike.md).[`endpoint`](../../../sdk/interfaces/ConfigReaderLike.md#endpoint)

---

### getCredentials()

> **getCredentials**(`opts`): [`Credentials`](../type-aliases/Credentials.md)

Defined in: [src/runtime/cli_config.ts:121](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/cli_config.ts#L121)

#### Parameters

##### opts

[`GetCredentialsOptions`](../interfaces/GetCredentialsOptions.md) = `{}`

#### Returns

[`Credentials`](../type-aliases/Credentials.md)

#### Implementation of

`ConfigReaderLike.getCredentials`

---

### parentId()

> **parentId**(): `undefined` \| `string`

Defined in: [src/runtime/cli_config.ts:100](https://github.com/nebius/nodejs-sdk/blob/2ec552fb564ad8fdbf78c4eb6e73ce9101501e8a/src/runtime/cli_config.ts#L100)

#### Returns

`undefined` \| `string`

#### Implementation of

[`ConfigReaderLike`](../../../sdk/interfaces/ConfigReaderLike.md).[`parentId`](../../../sdk/interfaces/ConfigReaderLike.md#parentid)
