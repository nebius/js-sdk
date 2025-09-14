[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/vpc/v1](../README.md) / AllocationStatus

# Interface: AllocationStatus

Defined in: src/api/nebius/vpc/v1/index.ts:1798

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/vpc/v1/index.ts:1800

***

### $type

> **$type**: `"nebius.vpc.v1.AllocationStatus"`

Defined in: src/api/nebius/vpc/v1/index.ts:1799

***

### assignment?

> `optional` **assignment**: [`Assignment`](Assignment.md)

Defined in: src/api/nebius/vpc/v1/index.ts:1817

Information about the assignment associated with the allocation,
 such as network interface or load balancer assignment.

***

### details?

> `optional` **details**: [`AllocationDetails`](AllocationDetails.md)

Defined in: src/api/nebius/vpc/v1/index.ts:1811

Detailed information about the allocation status,
 including the allocated CIDR, pool ID and IP version.

***

### state

> **state**: [`AllocationStatus_State`](../type-aliases/AllocationStatus_State.md)

Defined in: src/api/nebius/vpc/v1/index.ts:1805

This field represents the current state of the allocation.

***

### static

> **static**: `boolean`

Defined in: src/api/nebius/vpc/v1/index.ts:1822

If false - Lifecycle of allocation depends on resource that using it.
