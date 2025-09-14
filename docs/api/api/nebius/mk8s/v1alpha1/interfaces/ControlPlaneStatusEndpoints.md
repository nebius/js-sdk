[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/mk8s/v1alpha1](../README.md) / ControlPlaneStatusEndpoints

# Interface: ControlPlaneStatusEndpoints

Defined in: src/api/nebius/mk8s/v1alpha1/index.ts:2233

Endpoints of Kubernetes control plane. Kubernetes API can be accessed at `https://endpoint/`.

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/mk8s/v1alpha1/index.ts:2235

***

### $type

> **$type**: `"nebius.mk8s.v1alpha1.ControlPlaneStatusEndpoints"`

Defined in: src/api/nebius/mk8s/v1alpha1/index.ts:2234

***

### privateEndpoint

> **privateEndpoint**: `string`

Defined in: src/api/nebius/mk8s/v1alpha1/index.ts:2245

DNS name or IP address accessible from the user VPC.

***

### publicEndpoint

> **publicEndpoint**: `string`

Defined in: src/api/nebius/mk8s/v1alpha1/index.ts:2240

DNS name or IP address accessible from the Internet.
