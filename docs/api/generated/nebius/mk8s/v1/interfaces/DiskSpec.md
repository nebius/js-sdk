[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/mk8s/v1](../README.md) / DiskSpec

# Interface: DiskSpec

Defined in: src/generated/nebius/mk8s/v1/index.ts:2516

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/mk8s/v1/index.ts:2518

***

### $type

> **$type**: `"nebius.mk8s.v1.DiskSpec"`

Defined in: src/generated/nebius/mk8s/v1/index.ts:2517

***

### blockSizeBytes

> **blockSizeBytes**: `Long`

Defined in: src/generated/nebius/mk8s/v1/index.ts:2519

***

### size?

> `optional` **size**: \{ `$case`: `"sizeBytes"`; `sizeBytes`: `Long`; \} \| \{ `$case`: `"sizeKibibytes"`; `sizeKibibytes`: `Long`; \} \| \{ `$case`: `"sizeMebibytes"`; `sizeMebibytes`: `Long`; \} \| \{ `$case`: `"sizeGibibytes"`; `sizeGibibytes`: `Long`; \}

Defined in: src/generated/nebius/mk8s/v1/index.ts:2521

***

### type

> **type**: [`DiskSpec_DiskType`](../type-aliases/DiskSpec_DiskType.md)

Defined in: src/generated/nebius/mk8s/v1/index.ts:2520
