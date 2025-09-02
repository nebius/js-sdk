[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/iam/v1](../README.md) / ListGroupMembershipsWithAttributesResponse

# Interface: ListGroupMembershipsWithAttributesResponse

Defined in: src/generated/nebius/iam/v1/index.ts:10513

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/generated/nebius/iam/v1/index.ts:10515

***

### $type

> **$type**: `"nebius.iam.v1.ListGroupMembershipsWithAttributesResponse"`

Defined in: src/generated/nebius/iam/v1/index.ts:10514

***

### memberships

> **memberships**: [`GroupMembershipWithAttributes`](GroupMembershipWithAttributes.md)[]

Defined in: src/generated/nebius/iam/v1/index.ts:10523

Members of the group with their attributes if supported by member type.
 Can be tenant user accounts (regular or provisional/invited) or service accounts.
 Regular tenant user accounts may have a full set of attributes, provisional may have contacts only,
 service accounts

***

### nextPageToken

> **nextPageToken**: `string`

Defined in: src/generated/nebius/iam/v1/index.ts:10524
