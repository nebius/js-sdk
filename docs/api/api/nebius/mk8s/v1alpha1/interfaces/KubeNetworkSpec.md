[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/mk8s/v1alpha1](../README.md) / KubeNetworkSpec

# Interface: KubeNetworkSpec

Defined in: src/api/nebius/mk8s/v1alpha1/index.ts:1847

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/mk8s/v1alpha1/index.ts:1849

***

### $type

> **$type**: `"nebius.mk8s.v1alpha1.KubeNetworkSpec"`

Defined in: src/api/nebius/mk8s/v1alpha1/index.ts:1848

***

### serviceCidrs

> **serviceCidrs**: `string`[]

Defined in: src/api/nebius/mk8s/v1alpha1/index.ts:1860

CIDR blocks for Service ClusterIP allocation.
 For now, only one value is supported.
 Must be a valid CIDR block or prefix length.
 In case of prefix length, certain CIDR is auto allocated.
 Specified CIDR blocks will be reserved in Cluster.spec.control_plane.subnet_id to prevent address duplication.
 Allowed prefix length is from "/12" to "/28".
 Empty value treated as ["/16"].
