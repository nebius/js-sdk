[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/mk8s/v1](../README.md) / KubeNetworkSpec

# Interface: KubeNetworkSpec

Defined in: src/generated/nebius/mk8s/v1/index.ts:1497

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/mk8s/v1/index.ts:1499

---

### $type

> **$type**: `"nebius.mk8s.v1.KubeNetworkSpec"`

Defined in: src/generated/nebius/mk8s/v1/index.ts:1498

---

### serviceCidrs

> **serviceCidrs**: `string`[]

Defined in: src/generated/nebius/mk8s/v1/index.ts:1510

CIDR blocks for Service ClusterIP allocation.
For now, only one value is supported.
Must be a valid CIDR block or prefix length.
In case of prefix length, certain CIDR is auto allocated.
Specified CIDR blocks will be reserved in Cluster.spec.control_plane.subnet_id to prevent address duplication.
Allowed prefix length is from "/12" to "/28".
Empty value treated as ["/16"].
