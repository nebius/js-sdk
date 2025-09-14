[**@nebius/nodejs-sdk**](../../../README.md)

***

[@nebius/nodejs-sdk](../../../README.md) / [runtime/cli\_config](../README.md) / Config

# Class: Config

Defined in: [src/runtime/cli\_config.ts:46](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/cli_config.ts#L46)

## Implements

- [`ConfigReaderLike`](../../cli_config_interfaces/interfaces/ConfigReaderLike.md)

## Indexable

\[`key`: `symbol`\]: () => `unknown`

## Constructors

### Constructor

> **new Config**(`options`): `Config`

Defined in: [src/runtime/cli\_config.ts:58](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/cli_config.ts#L58)

#### Parameters

##### options

[`ConfigOptions`](../interfaces/ConfigOptions.md) = `{}`

#### Returns

`Config`

## Properties

### $type

> `readonly` **$type**: `"nebius.sdk.Config"` = `'nebius.sdk.Config'`

Defined in: [src/runtime/cli\_config.ts:47](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/cli_config.ts#L47)

## Methods

### \[customJson\]()

> **\[customJson\]**(): `unknown`

Defined in: [src/runtime/cli\_config.ts:103](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/cli_config.ts#L103)

#### Returns

`unknown`

***

### endpoint()

> **endpoint**(): `undefined` \| `string`

Defined in: [src/runtime/cli\_config.ts:136](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/cli_config.ts#L136)

#### Returns

`undefined` \| `string`

#### Implementation of

[`ConfigReaderLike`](../../cli_config_interfaces/interfaces/ConfigReaderLike.md).[`endpoint`](../../cli_config_interfaces/interfaces/ConfigReaderLike.md#endpoint)

***

### getCredentials()

> **getCredentials**(`opts`): [`Credentials`](../../cli_config_interfaces/type-aliases/Credentials.md)

Defined in: [src/runtime/cli\_config.ts:140](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/cli_config.ts#L140)

#### Parameters

##### opts

[`GetCredentialsOptions`](../../cli_config_interfaces/interfaces/GetCredentialsOptions.md) = `{}`

#### Returns

[`Credentials`](../../cli_config_interfaces/type-aliases/Credentials.md)

#### Implementation of

[`ConfigReaderLike`](../../cli_config_interfaces/interfaces/ConfigReaderLike.md).[`getCredentials`](../../cli_config_interfaces/interfaces/ConfigReaderLike.md#getcredentials)

***

### logger()

> **logger**(): `undefined` \| [`Logger`](../../util/logging/classes/Logger.md)

Defined in: [src/runtime/cli\_config.ts:111](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/cli_config.ts#L111)

#### Returns

`undefined` \| [`Logger`](../../util/logging/classes/Logger.md)

***

### parentId()

> **parentId**(): `undefined` \| `string`

Defined in: [src/runtime/cli\_config.ts:115](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/cli_config.ts#L115)

#### Returns

`undefined` \| `string`

#### Implementation of

[`ConfigReaderLike`](../../cli_config_interfaces/interfaces/ConfigReaderLike.md).[`parentId`](../../cli_config_interfaces/interfaces/ConfigReaderLike.md#parentid)

***

### profileName()

> **profileName**(): `undefined` \| `string`

Defined in: [src/runtime/cli\_config.ts:132](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/cli_config.ts#L132)

#### Returns

`undefined` \| `string`

#### Implementation of

[`ConfigReaderLike`](../../cli_config_interfaces/interfaces/ConfigReaderLike.md).[`profileName`](../../cli_config_interfaces/interfaces/ConfigReaderLike.md#profilename)
