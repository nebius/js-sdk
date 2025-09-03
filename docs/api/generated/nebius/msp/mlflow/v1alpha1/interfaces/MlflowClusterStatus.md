[**@nebius/nodejs-sdk**](../../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../../README.md) / [generated/nebius/msp/mlflow/v1alpha1](../README.md) / MlflowClusterStatus

# Interface: MlflowClusterStatus

Defined in: src/generated/nebius/msp/mlflow/v1alpha1/index.ts:1259

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/msp/mlflow/v1alpha1/index.ts:1261

---

### $type

> **$type**: `"nebius.msp.mlflow.v1alpha1.MlflowClusterStatus"`

Defined in: src/generated/nebius/msp/mlflow/v1alpha1/index.ts:1260

---

### effectiveStorageBucketName

> **effectiveStorageBucketName**: `string`

Defined in: src/generated/nebius/msp/mlflow/v1alpha1/index.ts:1282

Name of the Nebius S3 bucket for MLflow artifacts.

---

### experimentsCount

> **experimentsCount**: `number`

Defined in: src/generated/nebius/msp/mlflow/v1alpha1/index.ts:1287

Count of experiments in the MLflow cluster

---

### mlflowVersion

> **mlflowVersion**: `string`

Defined in: src/generated/nebius/msp/mlflow/v1alpha1/index.ts:1292

MLflow version

---

### phase

> **phase**: [`ClusterStatus_Phase`](../../../v1alpha1/type-aliases/ClusterStatus_Phase.md)

Defined in: src/generated/nebius/msp/mlflow/v1alpha1/index.ts:1266

Current phase of the cluster.

---

### state

> **state**: [`ClusterStatus_State`](../../../v1alpha1/type-aliases/ClusterStatus_State.md)

Defined in: src/generated/nebius/msp/mlflow/v1alpha1/index.ts:1271

State reflects substatus of the phase to define whether it's healthy or not.

---

### trackingEndpoint

> **trackingEndpoint**: `string`

Defined in: src/generated/nebius/msp/mlflow/v1alpha1/index.ts:1277

Tracking endpoint url.
Will be removed soon in favor of private_tracking_endpoint and public_tracking_endpoint.

---

### trackingEndpoints?

> `optional` **trackingEndpoints**: [`Endpoints`](Endpoints.md)

Defined in: src/generated/nebius/msp/mlflow/v1alpha1/index.ts:1297

Public and private tracking endpoints
