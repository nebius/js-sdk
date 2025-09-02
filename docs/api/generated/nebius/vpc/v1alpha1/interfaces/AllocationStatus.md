[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/vpc/v1alpha1](../README.md) / AllocationStatus

# Interface: AllocationStatus

Defined in: src/generated/nebius/vpc/v1alpha1/index.ts:1616

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/vpc/v1alpha1/index.ts:1618

***

### $type

> **$type**: `"nebius.vpc.v1alpha1.AllocationStatus"`

Defined in: src/generated/nebius/vpc/v1alpha1/index.ts:1617

***

### assignment?

> `optional` **assignment**: [`Assignment`](Assignment.md)

Defined in: src/generated/nebius/vpc/v1alpha1/index.ts:1635

Information about the assignment associated with the allocation,
 such as network interface or load balancer assignment.

***

### details?

> `optional` **details**: [`AllocationDetails`](AllocationDetails.md)

Defined in: src/generated/nebius/vpc/v1alpha1/index.ts:1629

Detailed information about the allocation status,
 including the allocated CIDR, pool ID, scope type, and IP version.

***

### state

> **state**: [`AllocationStatus_State`](../type-aliases/AllocationStatus_State.md)

Defined in: src/generated/nebius/vpc/v1alpha1/index.ts:1623

This field represents the current state of the allocation.

***

### static

> **static**: `boolean`

Defined in: src/generated/nebius/vpc/v1alpha1/index.ts:1640

If false - Lifecycle of allocation depends on resource that using it.
