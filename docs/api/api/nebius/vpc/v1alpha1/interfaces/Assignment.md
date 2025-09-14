[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/vpc/v1alpha1](../README.md) / Assignment

# Interface: Assignment

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:1908

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:1910

***

### $type

> **$type**: `"nebius.vpc.v1alpha1.Assignment"`

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:1909

***

### type?

> `optional` **type**: \{ `$case`: `"networkInterface"`; `networkInterface`: [`NetworkInterfaceAssignment`](NetworkInterfaceAssignment.md); \} \| \{ `$case`: `"loadBalancer"`; `loadBalancer`: [`LoadBalancerAssignment`](LoadBalancerAssignment.md); \}

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:1916

This field specifies the type of assignment associated with the allocation,
 which could be a network interface or load balancer assignment.
