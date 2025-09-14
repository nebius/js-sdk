[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/mk8s/v1](../README.md) / DiskSpec

# Interface: DiskSpec

Defined in: src/api/nebius/mk8s/v1/index.ts:2787

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/mk8s/v1/index.ts:2789

***

### $type

> **$type**: `"nebius.mk8s.v1.DiskSpec"`

Defined in: src/api/nebius/mk8s/v1/index.ts:2788

***

### blockSizeBytes

> **blockSizeBytes**: [`Long`](../../../../../runtime/protos/core/classes/Long.md)

Defined in: src/api/nebius/mk8s/v1/index.ts:2790

***

### size?

> `optional` **size**: \{ `$case`: `"sizeBytes"`; `sizeBytes`: [`Long`](../../../../../runtime/protos/core/classes/Long.md); \} \| \{ `$case`: `"sizeKibibytes"`; `sizeKibibytes`: [`Long`](../../../../../runtime/protos/core/classes/Long.md); \} \| \{ `$case`: `"sizeMebibytes"`; `sizeMebibytes`: [`Long`](../../../../../runtime/protos/core/classes/Long.md); \} \| \{ `$case`: `"sizeGibibytes"`; `sizeGibibytes`: [`Long`](../../../../../runtime/protos/core/classes/Long.md); \}

Defined in: src/api/nebius/mk8s/v1/index.ts:2792

***

### type

> **type**: [`DiskSpec_DiskType`](../type-aliases/DiskSpec_DiskType.md)

Defined in: src/api/nebius/mk8s/v1/index.ts:2791
