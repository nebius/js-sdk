[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/registry/v1](../README.md) / ArtifactServiceServiceDescription

# Variable: ArtifactServiceServiceDescription

> **ArtifactServiceServiceDescription**: `object`

Defined in: src/api/nebius/registry/v1/index.ts:432

## Type Declaration

### delete

> `readonly` **delete**: `object`

#### delete.path

> `readonly` **path**: `"/nebius.registry.v1.ArtifactService/Delete"` = `"/nebius.registry.v1.ArtifactService/Delete"`

#### delete.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`DeleteArtifactRequest`](../interfaces/DeleteArtifactRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`DeleteArtifactRequest`](../interfaces/DeleteArtifactRequest.md)

#### delete.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`DeleteArtifactRequest`](../interfaces/DeleteArtifactRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### delete.requestStream

> `readonly` **requestStream**: `false` = `false`

#### delete.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../common/v1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../common/v1/interfaces/Operation.md)

#### delete.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../common/v1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### delete.responseStream

> `readonly` **responseStream**: `false` = `false`

### get

> `readonly` **get**: `object`

#### get.path

> `readonly` **path**: `"/nebius.registry.v1.ArtifactService/Get"` = `"/nebius.registry.v1.ArtifactService/Get"`

#### get.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetArtifactRequest`](../interfaces/GetArtifactRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetArtifactRequest`](../interfaces/GetArtifactRequest.md)

#### get.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetArtifactRequest`](../interfaces/GetArtifactRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### get.requestStream

> `readonly` **requestStream**: `false` = `false`

#### get.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Artifact`](../interfaces/Artifact.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Artifact`](../interfaces/Artifact.md)

#### get.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Artifact`](../interfaces/Artifact.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### get.responseStream

> `readonly` **responseStream**: `false` = `false`

### list

> `readonly` **list**: `object`

#### list.path

> `readonly` **path**: `"/nebius.registry.v1.ArtifactService/List"` = `"/nebius.registry.v1.ArtifactService/List"`

#### list.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListArtifactsRequest`](../interfaces/ListArtifactsRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListArtifactsRequest`](../interfaces/ListArtifactsRequest.md)

#### list.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListArtifactsRequest`](../interfaces/ListArtifactsRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### list.requestStream

> `readonly` **requestStream**: `false` = `false`

#### list.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListArtifactsResponse`](../interfaces/ListArtifactsResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListArtifactsResponse`](../interfaces/ListArtifactsResponse.md)

#### list.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListArtifactsResponse`](../interfaces/ListArtifactsResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### list.responseStream

> `readonly` **responseStream**: `false` = `false`
