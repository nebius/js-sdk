[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/registry/v1](../README.md) / Registry

# Interface: Registry

Defined in: src/api/nebius/registry/v1/index.ts:1676

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/registry/v1/index.ts:1678

---

### $type

> **$type**: `"nebius.registry.v1.Registry"`

Defined in: src/api/nebius/registry/v1/index.ts:1677

---

### metadata?

> `optional` **metadata**: [`ResourceMetadata`](../../../common/v1/interfaces/ResourceMetadata.md)

Defined in: src/api/nebius/registry/v1/index.ts:1684

This is metadata about the resource, such as its id, name, labels, etc.
This contains fields that may be updated both by the end user and the system.

---

### spec?

> `optional` **spec**: [`RegistrySpec`](RegistrySpec.md)

Defined in: src/api/nebius/registry/v1/index.ts:1690

This is defined by the user and describes the desired state of system.
Fill this in when creating or updating an object.

---

### status?

> `optional` **status**: [`RegistryStatus`](RegistryStatus.md)

Defined in: src/api/nebius/registry/v1/index.ts:1695

This is filled in by the server and reports the current state of the system.
