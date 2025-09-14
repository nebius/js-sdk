[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/mk8s/v1](../README.md) / ClusterStatus

# Interface: ClusterStatus

Defined in: src/api/nebius/mk8s/v1/index.ts:1861

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/mk8s/v1/index.ts:1863

***

### $type

> **$type**: `"nebius.mk8s.v1.ClusterStatus"`

Defined in: src/api/nebius/mk8s/v1/index.ts:1862

***

### controlPlane?

> `optional` **controlPlane**: [`ControlPlaneStatus`](ControlPlaneStatus.md)

Defined in: src/api/nebius/mk8s/v1/index.ts:1865

***

### reconciling

> **reconciling**: `boolean`

Defined in: src/api/nebius/mk8s/v1/index.ts:1870

Show that changes are in flight

***

### state

> **state**: [`ClusterStatus_State`](../type-aliases/ClusterStatus_State.md)

Defined in: src/api/nebius/mk8s/v1/index.ts:1864
