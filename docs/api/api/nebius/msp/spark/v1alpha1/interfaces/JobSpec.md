[**@nebius/nodejs-sdk**](../../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../../README.md) / [api/nebius/msp/spark/v1alpha1](../README.md) / JobSpec

# Interface: JobSpec

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:2783

Spark Job specification

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:2785

---

### $type

> **$type**: `"nebius.msp.spark.v1alpha1.JobSpec"`

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:2784

---

### applicationArgs

> **applicationArgs**: `string`[]

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:2804

Application args

---

### applicationFileUri

> **applicationFileUri**: `string`

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:2796

S3 URI of main application file
Example: s3a://mybucket/myapp.py

---

### description?

> `optional` **description**: `string`

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:2790

Description of the job.

---

### driver?

> `optional` **driver**: [`DriverTemplateSpec`](DriverTemplateSpec.md)

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:2797

---

### executor?

> `optional` **executor**: [`ExecutorTemplateSpec`](ExecutorTemplateSpec.md)

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:2798

---

### fileUris

> **fileUris**: `string`[]

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:2809

S3 URIs of files to be placed in executor working directory

---

### jarUris

> **jarUris**: `string`[]

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:2814

S3 URIs of Jars to be placed in classpaths of driver and executors for java applications

---

### packages

> **packages**: `string`[]

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:2819

List of maven coordinates of jars to include on the driver and executor classpaths

---

### runtimeConfig?

> `optional` **runtimeConfig**: \{ `$case`: `"python"`; `python`: [`PythonConfig`](PythonConfig.md); \} \| \{ `$case`: `"java"`; `java`: [`JavaConfig`](JavaConfig.md); \}

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:2829

Runtime-specific job config

---

### sparkConf

> **sparkConf**: `object`

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:2824

Map of spark configuration parameters

#### Index Signature

\[`key`: `string`\]: `string`

---

### sparkVersion

> **sparkVersion**: `string`

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:2799
