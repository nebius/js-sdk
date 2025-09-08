[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/vpc/v1](../README.md) / SubnetSpec

# Interface: SubnetSpec

Defined in: src/generated/nebius/vpc/v1/index.ts:7474

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/vpc/v1/index.ts:7476

---

### $type

> **$type**: `"nebius.vpc.v1.SubnetSpec"`

Defined in: src/generated/nebius/vpc/v1/index.ts:7475

---

### ipv4PrivatePools?

> `optional` **ipv4PrivatePools**: [`IPv4PrivateSubnetPools`](IPv4PrivateSubnetPools.md)

Defined in: src/generated/nebius/vpc/v1/index.ts:7487

Pools for private ipv4 addresses.
Default is 'use_network_pools = true'

---

### ipv4PublicPools?

> `optional` **ipv4PublicPools**: [`IPv4PublicSubnetPools`](IPv4PublicSubnetPools.md)

Defined in: src/generated/nebius/vpc/v1/index.ts:7493

Pools for public ipv4 addresses.
Default is 'use_network_pools = true'

---

### networkId

> **networkId**: `string`

Defined in: src/generated/nebius/vpc/v1/index.ts:7481

Network ID.
