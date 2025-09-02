[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/vpc/v1](../README.md) / Assignment

# Interface: Assignment

Defined in: src/generated/nebius/vpc/v1/index.ts:2100

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/vpc/v1/index.ts:2102

***

### $type

> **$type**: `"nebius.vpc.v1.Assignment"`

Defined in: src/generated/nebius/vpc/v1/index.ts:2101

***

### type?

> `optional` **type**: \{ `$case`: `"networkInterface"`; `networkInterface`: [`NetworkInterfaceAssignment`](NetworkInterfaceAssignment.md); \} \| \{ `$case`: `"loadBalancer"`; `loadBalancer`: [`LoadBalancerAssignment`](LoadBalancerAssignment.md); \}

Defined in: src/generated/nebius/vpc/v1/index.ts:2108

This field specifies the type of assignment associated with the allocation,
 which could be a network interface or load balancer assignment.
