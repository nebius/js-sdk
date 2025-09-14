[**@nebius/nodejs-sdk**](../../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../../README.md) / [generated/nebius/msp/mlflow/v1alpha1](../README.md) / ClusterSpec

# Interface: ClusterSpec

Defined in: src/generated/nebius/msp/mlflow/v1alpha1/index.ts:1009

Cluster specification

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/msp/mlflow/v1alpha1/index.ts:1011

---

### $type

> **$type**: `"nebius.msp.mlflow.v1alpha1.ClusterSpec"`

Defined in: src/generated/nebius/msp/mlflow/v1alpha1/index.ts:1010

---

### adminPassword

> **adminPassword**: `string`

Defined in: src/generated/nebius/msp/mlflow/v1alpha1/index.ts:1031

MLflow admin password.

---

### adminUsername

> **adminUsername**: `string`

Defined in: src/generated/nebius/msp/mlflow/v1alpha1/index.ts:1026

MLflow admin username.

---

### description

> **description**: `string`

Defined in: src/generated/nebius/msp/mlflow/v1alpha1/index.ts:1016

Description of the cluster.

---

### networkId

> **networkId**: `string`

Defined in: src/generated/nebius/msp/mlflow/v1alpha1/index.ts:1046

ID of the vpc network.

---

### publicAccess

> **publicAccess**: `boolean`

Defined in: src/generated/nebius/msp/mlflow/v1alpha1/index.ts:1021

Either make cluster public accessible or accessible only via private VPC.

---

### serviceAccountId

> **serviceAccountId**: `string`

Defined in: src/generated/nebius/msp/mlflow/v1alpha1/index.ts:1036

Id of the service account that will be used to access S3 bucket (and create one if not provided).

---

### size

> **size**: `string`

Defined in: src/generated/nebius/msp/mlflow/v1alpha1/index.ts:1052

Size defines how much resources will be allocated to mlflow
See supported sizes in the documentation. Default size is the smallest available in the region.

---

### storageBucketName

> **storageBucketName**: `string`

Defined in: src/generated/nebius/msp/mlflow/v1alpha1/index.ts:1041

Name of the Nebius S3 bucket for MLflow artifacts. If not provided, will be created under the same parent.
