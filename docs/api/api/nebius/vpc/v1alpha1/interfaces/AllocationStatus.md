[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/vpc/v1alpha1](../README.md) / AllocationStatus

# Interface: AllocationStatus

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:1617

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:1619

***

### $type

> **$type**: `"nebius.vpc.v1alpha1.AllocationStatus"`

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:1618

***

### assignment?

> `optional` **assignment**: [`Assignment`](Assignment.md)

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:1636

Information about the assignment associated with the allocation,
 such as network interface or load balancer assignment.

***

### details?

> `optional` **details**: [`AllocationDetails`](AllocationDetails.md)

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:1630

Detailed information about the allocation status,
 including the allocated CIDR, pool ID, scope type, and IP version.

***

### state

> **state**: [`AllocationStatus_State`](../type-aliases/AllocationStatus_State.md)

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:1624

This field represents the current state of the allocation.

***

### static

> **static**: `boolean`

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:1641

If false - Lifecycle of allocation depends on resource that using it.
