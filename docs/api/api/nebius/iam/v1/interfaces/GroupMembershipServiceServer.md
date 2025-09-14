[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/iam/v1](../README.md) / GroupMembershipServiceServer

# Interface: GroupMembershipServiceServer

Defined in: src/api/nebius/iam/v1/index.ts:10797

## Extends

- `UntypedServiceImplementation`

## Indexable

\[`name`: `string`\]: `UntypedHandleCall`

## Properties

### create

> **create**: `handleUnaryCall`\<[`CreateGroupMembershipRequest`](CreateGroupMembershipRequest.md), [`Operation`](../../../common/v1/interfaces/Operation.md)\>

Defined in: src/api/nebius/iam/v1/index.ts:10798

***

### delete

> **delete**: `handleUnaryCall`\<[`DeleteGroupMembershipRequest`](DeleteGroupMembershipRequest.md), [`Operation`](../../../common/v1/interfaces/Operation.md)\>

Defined in: src/api/nebius/iam/v1/index.ts:10801

***

### get

> **get**: `handleUnaryCall`\<[`GetGroupMembershipRequest`](GetGroupMembershipRequest.md), [`GroupMembership`](GroupMembership.md)\>

Defined in: src/api/nebius/iam/v1/index.ts:10799

***

### getWithAttributes

> **getWithAttributes**: `handleUnaryCall`\<[`GetGroupMembershipRequest`](GetGroupMembershipRequest.md), [`GroupMembershipWithAttributes`](GroupMembershipWithAttributes.md)\>

Defined in: src/api/nebius/iam/v1/index.ts:10800

***

### listMemberOf

> **listMemberOf**: `handleUnaryCall`\<[`ListMemberOfRequest`](ListMemberOfRequest.md), [`ListMemberOfResponse`](ListMemberOfResponse.md)\>

Defined in: src/api/nebius/iam/v1/index.ts:10804

***

### listMembers

> **listMembers**: `handleUnaryCall`\<[`ListGroupMembershipsRequest`](ListGroupMembershipsRequest.md), [`ListGroupMembershipsResponse`](ListGroupMembershipsResponse.md)\>

Defined in: src/api/nebius/iam/v1/index.ts:10802

***

### listMembersWithAttributes

> **listMembersWithAttributes**: `handleUnaryCall`\<[`ListGroupMembershipsRequest`](ListGroupMembershipsRequest.md), [`ListGroupMembershipsWithAttributesResponse`](ListGroupMembershipsWithAttributesResponse.md)\>

Defined in: src/api/nebius/iam/v1/index.ts:10803
