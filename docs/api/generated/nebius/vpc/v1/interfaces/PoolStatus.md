[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/vpc/v1](../README.md) / PoolStatus

# Interface: PoolStatus

Defined in: src/generated/nebius/vpc/v1/index.ts:5912

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/vpc/v1/index.ts:5914

---

### $type

> **$type**: `"nebius.vpc.v1.PoolStatus"`

Defined in: src/generated/nebius/vpc/v1/index.ts:5913

---

### assignment?

> `optional` **assignment**: [`PoolAssignment`](PoolAssignment.md)

Defined in: src/generated/nebius/vpc/v1/index.ts:5934

Assignment details for this Pool

---

### cidrs

> **cidrs**: `string`[]

Defined in: src/generated/nebius/vpc/v1/index.ts:5924

CIDR blocks.

---

### scopeId

> **scopeId**: `string`

Defined in: src/generated/nebius/vpc/v1/index.ts:5929

Scope is the unique identifier for single pool tree.

---

### state

> **state**: [`PoolStatus_State`](../type-aliases/PoolStatus_State.md)

Defined in: src/generated/nebius/vpc/v1/index.ts:5919

Current state of the Pool.
