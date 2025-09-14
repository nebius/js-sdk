[**@nebius/nodejs-sdk**](../../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../../README.md) / [api/nebius/msp/mlflow/v1alpha1](../README.md) / MlflowClusterStatus

# Interface: MlflowClusterStatus

Defined in: src/api/nebius/msp/mlflow/v1alpha1/index.ts:1260

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/msp/mlflow/v1alpha1/index.ts:1262

---

### $type

> **$type**: `"nebius.msp.mlflow.v1alpha1.MlflowClusterStatus"`

Defined in: src/api/nebius/msp/mlflow/v1alpha1/index.ts:1261

---

### effectiveStorageBucketName

> **effectiveStorageBucketName**: `string`

Defined in: src/api/nebius/msp/mlflow/v1alpha1/index.ts:1283

Name of the Nebius S3 bucket for MLflow artifacts.

---

### experimentsCount

> **experimentsCount**: `number`

Defined in: src/api/nebius/msp/mlflow/v1alpha1/index.ts:1288

Count of experiments in the MLflow cluster

---

### mlflowVersion

> **mlflowVersion**: `string`

Defined in: src/api/nebius/msp/mlflow/v1alpha1/index.ts:1293

MLflow version

---

### phase

> **phase**: [`ClusterStatus_Phase`](../../../v1alpha1/type-aliases/ClusterStatus_Phase.md)

Defined in: src/api/nebius/msp/mlflow/v1alpha1/index.ts:1267

Current phase of the cluster.

---

### state

> **state**: [`ClusterStatus_State`](../../../v1alpha1/type-aliases/ClusterStatus_State.md)

Defined in: src/api/nebius/msp/mlflow/v1alpha1/index.ts:1272

State reflects substatus of the phase to define whether it's healthy or not.

---

### trackingEndpoint

> **trackingEndpoint**: `string`

Defined in: src/api/nebius/msp/mlflow/v1alpha1/index.ts:1278

Tracking endpoint url.
Will be removed soon in favor of private_tracking_endpoint and public_tracking_endpoint.

---

### trackingEndpoints?

> `optional` **trackingEndpoints**: [`Endpoints`](Endpoints.md)

Defined in: src/api/nebius/msp/mlflow/v1alpha1/index.ts:1298

Public and private tracking endpoints
