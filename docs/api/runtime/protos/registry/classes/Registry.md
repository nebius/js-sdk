[**@nebius/nodejs-sdk**](../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../README.md) / [runtime/protos/registry](../README.md) / Registry

# Class: Registry

Defined in: [src/runtime/protos/registry.ts:42](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/protos/registry.ts#L42)

## Constructors

### Constructor

> **new Registry**(): `Registry`

#### Returns

`Registry`

## Methods

### getEnum()

> **getEnum**(`type`): `undefined` \| [`EnumClassInterface`](../interfaces/EnumClassInterface.md)

Defined in: [src/runtime/protos/registry.ts:63](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/protos/registry.ts#L63)

#### Parameters

##### type

`string`

#### Returns

`undefined` \| [`EnumClassInterface`](../interfaces/EnumClassInterface.md)

***

### getExtension()

> **getExtension**(`extendee`, `fieldNo`): `undefined` \| [`ExtensionDescriptor`](../interfaces/ExtensionDescriptor.md)

Defined in: [src/runtime/protos/registry.ts:78](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/protos/registry.ts#L78)

#### Parameters

##### extendee

`string`

##### fieldNo

`number`

#### Returns

`undefined` \| [`ExtensionDescriptor`](../interfaces/ExtensionDescriptor.md)

***

### getExtensionByName()

> **getExtensionByName**(`fullName`): `undefined` \| [`ExtensionDescriptor`](../interfaces/ExtensionDescriptor.md)

Defined in: [src/runtime/protos/registry.ts:82](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/protos/registry.ts#L82)

#### Parameters

##### fullName

`string`

#### Returns

`undefined` \| [`ExtensionDescriptor`](../interfaces/ExtensionDescriptor.md)

***

### getMessage()

> **getMessage**(`type`): `undefined` \| [`MessageClassInterface`](../interfaces/MessageClassInterface.md)

Defined in: [src/runtime/protos/registry.ts:55](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/protos/registry.ts#L55)

#### Parameters

##### type

`string`

#### Returns

`undefined` \| [`MessageClassInterface`](../interfaces/MessageClassInterface.md)

***

### listExtendees()

> **listExtendees**(): `string`[]

Defined in: [src/runtime/protos/registry.ts:90](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/protos/registry.ts#L90)

#### Returns

`string`[]

***

### listExtensions()

> **listExtensions**(`extendee`): readonly [`ExtensionDescriptor`](../interfaces/ExtensionDescriptor.md)[]

Defined in: [src/runtime/protos/registry.ts:86](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/protos/registry.ts#L86)

#### Parameters

##### extendee

`string`

#### Returns

readonly [`ExtensionDescriptor`](../interfaces/ExtensionDescriptor.md)[]

***

### registerEnum()

> **registerEnum**(`enumClass`): `void`

Defined in: [src/runtime/protos/registry.ts:59](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/protos/registry.ts#L59)

#### Parameters

##### enumClass

[`EnumClassInterface`](../interfaces/EnumClassInterface.md)

#### Returns

`void`

***

### registerExtension()

> **registerExtension**(`ext`): `void`

Defined in: [src/runtime/protos/registry.ts:67](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/protos/registry.ts#L67)

#### Parameters

##### ext

[`ExtensionDescriptor`](../interfaces/ExtensionDescriptor.md)

#### Returns

`void`

***

### registerMessage()

> **registerMessage**(`message`): `void`

Defined in: [src/runtime/protos/registry.ts:51](https://github.com/nebius/nodejs-sdk/blob/a37d220b2851e3bf0d396cb03828d544f584df45/src/runtime/protos/registry.ts#L51)

#### Parameters

##### message

[`MessageClassInterface`](../interfaces/MessageClassInterface.md)

#### Returns

`void`
