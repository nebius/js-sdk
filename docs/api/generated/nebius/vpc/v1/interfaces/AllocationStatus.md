[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/vpc/v1](../README.md) / AllocationStatus

# Interface: AllocationStatus

Defined in: src/generated/nebius/vpc/v1/index.ts:1797

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/vpc/v1/index.ts:1799

***

### $type

> **$type**: `"nebius.vpc.v1.AllocationStatus"`

Defined in: src/generated/nebius/vpc/v1/index.ts:1798

***

### assignment?

> `optional` **assignment**: [`Assignment`](Assignment.md)

Defined in: src/generated/nebius/vpc/v1/index.ts:1816

Information about the assignment associated with the allocation,
 such as network interface or load balancer assignment.

***

### details?

> `optional` **details**: [`AllocationDetails`](AllocationDetails.md)

Defined in: src/generated/nebius/vpc/v1/index.ts:1810

Detailed information about the allocation status,
 including the allocated CIDR, pool ID and IP version.

***

### state

> **state**: [`AllocationStatus_State`](../type-aliases/AllocationStatus_State.md)

Defined in: src/generated/nebius/vpc/v1/index.ts:1804

This field represents the current state of the allocation.

***

### static

> **static**: `boolean`

Defined in: src/generated/nebius/vpc/v1/index.ts:1821

If false - Lifecycle of allocation depends on resource that using it.
