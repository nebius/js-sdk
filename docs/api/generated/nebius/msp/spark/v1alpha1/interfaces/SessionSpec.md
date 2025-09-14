[**@nebius/nodejs-sdk**](../../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../../README.md) / [generated/nebius/msp/spark/v1alpha1](../README.md) / SessionSpec

# Interface: SessionSpec

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:4922

Spark Session specification

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:4924

---

### $type

> **$type**: `"nebius.msp.spark.v1alpha1.SessionSpec"`

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:4923

---

### description?

> `optional` **description**: `string`

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:4929

Description of the session.

---

### driver?

> `optional` **driver**: [`DriverTemplateSpec`](DriverTemplateSpec.md)

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:4930

---

### executor?

> `optional` **executor**: [`ExecutorTemplateSpec`](ExecutorTemplateSpec.md)

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:4931

---

### fileUris

> **fileUris**: `string`[]

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:4937

S3 URIs of files to be placed in executor working directory

---

### jarUris

> **jarUris**: `string`[]

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:4942

S3 URIs of Jars to be placed in classpaths of driver and executors for java applications

---

### packages

> **packages**: `string`[]

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:4947

List of maven coordinates of jars to include on the driver and executor classpaths

---

### python?

> `optional` **python**: [`PythonConfig`](PythonConfig.md)

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:4957

Python runtime-specific session config

---

### sparkConf

> **sparkConf**: `object`

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:4952

Map of spark configuration parameters

#### Index Signature

\[`key`: `string`\]: `string`

---

### sparkVersion

> **sparkVersion**: `string`

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:4932
