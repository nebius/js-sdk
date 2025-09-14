[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/vpc/v1alpha1](../README.md) / SubnetSpec

# Interface: SubnetSpec

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:7372

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:7374

---

### $type

> **$type**: `"nebius.vpc.v1alpha1.SubnetSpec"`

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:7373

---

### enableEgressNat

> **enableEgressNat**: `boolean`

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:7389

Enable egress NAT gateway

---

### networkId

> **networkId**: `string`

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:7379

Network ID.

---

### pools

> **pools**: [`SubnetPool`](SubnetPool.md)[]

Defined in: src/api/nebius/vpc/v1alpha1/index.ts:7384

Pool for addresses
