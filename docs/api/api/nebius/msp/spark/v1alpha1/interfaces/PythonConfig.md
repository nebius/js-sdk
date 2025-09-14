[**@nebius/nodejs-sdk**](../../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../../README.md) / [api/nebius/msp/spark/v1alpha1](../README.md) / PythonConfig

# Interface: PythonConfig

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:1696

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:1698

---

### $type

> **$type**: `"nebius.msp.spark.v1alpha1.PythonConfig"`

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:1697

---

### fileUris

> **fileUris**: `string`[]

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:1708

S3 URIs of files to be placed in PYTHONPATH of driver and executors for python applications (.py, .zip, .egg)

---

### requirements

> **requirements**: `string`[]

Defined in: src/api/nebius/msp/spark/v1alpha1/index.ts:1703

Python requirements
