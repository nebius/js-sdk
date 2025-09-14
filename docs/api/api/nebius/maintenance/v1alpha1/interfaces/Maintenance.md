[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/maintenance/v1alpha1](../README.md) / Maintenance

# Interface: Maintenance

Defined in: src/api/nebius/maintenance/v1alpha1/index.ts:463

Maintenance operations are initiated by Nebius Cloud infrastructure.
 They are used to perform scheduled or urgent operations on Nebius Cloud resources,
 such as Managed Services or Standalone Applications, that are necessary for
 maintaining the service in an operable state. These operations run automatically,
 without user intervention.

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/maintenance/v1alpha1/index.ts:465

***

### $type

> **$type**: `"nebius.maintenance.v1alpha1.Maintenance"`

Defined in: src/api/nebius/maintenance/v1alpha1/index.ts:464

***

### metadata?

> `optional` **metadata**: [`ResourceMetadata`](../../../common/v1/interfaces/ResourceMetadata.md)

Defined in: src/api/nebius/maintenance/v1alpha1/index.ts:470

The metadata for the maintenance operation resource.

***

### spec?

> `optional` **spec**: [`MaintenanceSpec`](MaintenanceSpec.md)

Defined in: src/api/nebius/maintenance/v1alpha1/index.ts:475

Specifications for the maintenance operation.

***

### status?

> `optional` **status**: [`MaintenanceStatus`](MaintenanceStatus.md)

Defined in: src/api/nebius/maintenance/v1alpha1/index.ts:480

Current status of the maintenance operation.
