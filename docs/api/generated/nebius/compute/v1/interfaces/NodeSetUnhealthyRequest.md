[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/compute/v1](../README.md) / NodeSetUnhealthyRequest

# Interface: NodeSetUnhealthyRequest

Defined in: src/generated/nebius/compute/v1/index.ts:10621

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/compute/v1/index.ts:10623

---

### $type

> **$type**: `"nebius.compute.v1.NodeSetUnhealthyRequest"`

Defined in: src/generated/nebius/compute/v1/index.ts:10622

---

### dryRun

> **dryRun**: `boolean`

Defined in: src/generated/nebius/compute/v1/index.ts:10631

If set to true, the call performs the authorization and limit checks, but does not mark node unhealthy.
False by default

---

### healthCheckInfo?

> `optional` **healthCheckInfo**: [`NodeSetUnhealthyRequest_HealthCheckInfo`](NodeSetUnhealthyRequest_HealthCheckInfo.md)

Defined in: src/generated/nebius/compute/v1/index.ts:10625

---

### instanceId

> **instanceId**: `string`

Defined in: src/generated/nebius/compute/v1/index.ts:10624
