[**@nebius/nodejs-sdk**](../../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../../README.md) / [api/nebius/msp/spark/v1alpha1](../README.md) / ClusterSpec

# Interface: ClusterSpec

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:1184

Cluster specification

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:1186

***

### $type

> **$type**: `"nebius.msp.spark.v1alpha1.ClusterSpec"`

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:1185

***

### authorization?

> `optional` **authorization**: [`Password`](Password.md)

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:1201

Password for Spark History server and Sessions.

***

### description?

> `optional` **description**: `string`

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:1191

Description of the cluster.

***

### limits?

> `optional` **limits**: [`Limits`](Limits.md)

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:1196

Limits for the cluster

***

### networkId

> **networkId**: `string`

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:1208

***

### serviceAccountId

> **serviceAccountId**: `string`

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:1207

ID of the user service account for accessing
 S3 buckets in the user project
