[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/vpc/v1alpha1](../README.md) / Assignment

# Interface: Assignment

Defined in: src/generated/nebius/vpc/v1alpha1/index.ts:1907

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/vpc/v1alpha1/index.ts:1909

---

### $type

> **$type**: `"nebius.vpc.v1alpha1.Assignment"`

Defined in: src/generated/nebius/vpc/v1alpha1/index.ts:1908

---

### type?

> `optional` **type**: \{ `$case`: `"networkInterface"`; `networkInterface`: [`NetworkInterfaceAssignment`](NetworkInterfaceAssignment.md); \} \| \{ `$case`: `"loadBalancer"`; `loadBalancer`: [`LoadBalancerAssignment`](LoadBalancerAssignment.md); \}

Defined in: src/generated/nebius/vpc/v1alpha1/index.ts:1915

This field specifies the type of assignment associated with the allocation,
which could be a network interface or load balancer assignment.
