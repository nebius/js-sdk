[**@nebius/nodejs-sdk**](../../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../../README.md) / [generated/nebius/msp/spark/v1alpha1](../README.md) / JobSpec

# Interface: JobSpec

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:2738

Spark Job specification

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:2740

---

### $type

> **$type**: `"nebius.msp.spark.v1alpha1.JobSpec"`

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:2739

---

### applicationArgs

> **applicationArgs**: `string`[]

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:2759

Application args

---

### applicationFileUri

> **applicationFileUri**: `string`

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:2751

S3 URI of main application file
Example: s3a://mybucket/myapp.py

---

### description?

> `optional` **description**: `string`

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:2745

Description of the job.

---

### driver?

> `optional` **driver**: [`DriverTemplateSpec`](DriverTemplateSpec.md)

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:2752

---

### executor?

> `optional` **executor**: [`ExecutorTemplateSpec`](ExecutorTemplateSpec.md)

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:2753

---

### fileUris

> **fileUris**: `string`[]

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:2764

S3 URIs of files to be placed in executor working directory

---

### jarUris

> **jarUris**: `string`[]

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:2769

S3 URIs of Jars to be placed in classpaths of driver and executors for java applications

---

### packages

> **packages**: `string`[]

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:2774

List of maven coordinates of jars to include on the driver and executor classpaths

---

### runtimeConfig?

> `optional` **runtimeConfig**: \{ `$case`: `"python"`; `python`: [`PythonConfig`](PythonConfig.md); \} \| \{ `$case`: `"java"`; `java`: [`JavaConfig`](JavaConfig.md); \}

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:2784

Runtime-specific job config

---

### sparkConf

> **sparkConf**: `object`

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:2779

Map of spark configuration parameters

#### Index Signature

\[`key`: `string`\]: `string`

---

### sparkVersion

> **sparkVersion**: `string`

Defined in: src/generated/nebius/msp/spark/v1alpha1/index.ts:2754
