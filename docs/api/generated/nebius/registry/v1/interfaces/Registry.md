[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/registry/v1](../README.md) / Registry

# Interface: Registry

Defined in: src/generated/nebius/registry/v1/index.ts:1675

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/registry/v1/index.ts:1677

***

### $type

> **$type**: `"nebius.registry.v1.Registry"`

Defined in: src/generated/nebius/registry/v1/index.ts:1676

***

### metadata?

> `optional` **metadata**: [`ResourceMetadata`](../../../common/v1/interfaces/ResourceMetadata.md)

Defined in: src/generated/nebius/registry/v1/index.ts:1683

This is metadata about the resource, such as its id, name, labels, etc.
 This contains fields that may be updated both by the end user and the system.

***

### spec?

> `optional` **spec**: [`RegistrySpec`](RegistrySpec.md)

Defined in: src/generated/nebius/registry/v1/index.ts:1689

This is defined by the user and describes the desired state of system.
 Fill this in when creating or updating an object.

***

### status?

> `optional` **status**: [`RegistryStatus`](RegistryStatus.md)

Defined in: src/generated/nebius/registry/v1/index.ts:1694

This is filled in by the server and reports the current state of the system.
