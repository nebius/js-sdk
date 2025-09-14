[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/audit/v2](../README.md) / Resource

# Interface: Resource

Defined in: src/api/nebius/audit/v2/index.ts:1984

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/audit/v2/index.ts:1986

---

### $type

> **$type**: `"nebius.audit.v2.Resource"`

Defined in: src/api/nebius/audit/v2/index.ts:1985

---

### hierarchy

> **hierarchy**: [`ResourceMetadata`](ResourceMetadata.md)[]

Defined in: src/api/nebius/audit/v2/index.ts:2001

Top-down resources hierarchy from tenant to resource.

---

### metadata?

> `optional` **metadata**: [`ResourceMetadata`](ResourceMetadata.md)

Defined in: src/api/nebius/audit/v2/index.ts:1991

Provides basic information about the resource.

---

### state?

> `optional` **state**: [`ResourceState`](ResourceState.md)

Defined in: src/api/nebius/audit/v2/index.ts:1996

Gives an understanding of how the resource was changed in the call.
