[**@nebius/nodejs-sdk**](../../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../../README.md) / [generated/nebius/msp/mlflow/v1alpha1](../README.md) / ClusterSpec

# Interface: ClusterSpec

Defined in: src/generated/nebius/msp/mlflow/v1alpha1/index.ts:1008

Cluster specification

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/msp/mlflow/v1alpha1/index.ts:1010

---

### $type

> **$type**: `"nebius.msp.mlflow.v1alpha1.ClusterSpec"`

Defined in: src/generated/nebius/msp/mlflow/v1alpha1/index.ts:1009

---

### adminPassword

> **adminPassword**: `string`

Defined in: src/generated/nebius/msp/mlflow/v1alpha1/index.ts:1030

MLflow admin password.

---

### adminUsername

> **adminUsername**: `string`

Defined in: src/generated/nebius/msp/mlflow/v1alpha1/index.ts:1025

MLflow admin username.

---

### description

> **description**: `string`

Defined in: src/generated/nebius/msp/mlflow/v1alpha1/index.ts:1015

Description of the cluster.

---

### networkId

> **networkId**: `string`

Defined in: src/generated/nebius/msp/mlflow/v1alpha1/index.ts:1045

ID of the vpc network.

---

### publicAccess

> **publicAccess**: `boolean`

Defined in: src/generated/nebius/msp/mlflow/v1alpha1/index.ts:1020

Either make cluster public accessible or accessible only via private VPC.

---

### serviceAccountId

> **serviceAccountId**: `string`

Defined in: src/generated/nebius/msp/mlflow/v1alpha1/index.ts:1035

Id of the service account that will be used to access S3 bucket (and create one if not provided).

---

### size

> **size**: `string`

Defined in: src/generated/nebius/msp/mlflow/v1alpha1/index.ts:1051

Size defines how much resources will be allocated to mlflow
See supported sizes in the documentation. Default size is the smallest available in the region.

---

### storageBucketName

> **storageBucketName**: `string`

Defined in: src/generated/nebius/msp/mlflow/v1alpha1/index.ts:1040

Name of the Nebius S3 bucket for MLflow artifacts. If not provided, will be created under the same parent.
