[**@nebius/nodejs-sdk**](../../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../../README.md) / [generated/nebius/msp/spark/v1alpha1](../README.md) / ClusterSpec

# Interface: ClusterSpec

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:1161

Cluster specification

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:1163

---

### $type

> **$type**: `"nebius.msp.spark.v1alpha1.ClusterSpec"`

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:1162

---

### authorization?

> `optional` **authorization**: [`Password`](Password.md)

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:1178

Password for Spark History server and Sessions.

---

### description?

> `optional` **description**: `string`

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:1168

Description of the cluster.

---

### limits?

> `optional` **limits**: [`Limits`](Limits.md)

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:1173

Limits for the cluster

---

### networkId

> **networkId**: `string`

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:1185

---

### serviceAccountId

> **serviceAccountId**: `string`

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:1184

ID of the user service account for accessing
S3 buckets in the user project
