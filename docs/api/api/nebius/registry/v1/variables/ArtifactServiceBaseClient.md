[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/registry/v1](../README.md) / ArtifactServiceBaseClient

# Variable: ArtifactServiceBaseClient

> **ArtifactServiceBaseClient**: \{(`address`, `credentials`, `options?`): [`ArtifactServiceBaseClient`](../interfaces/ArtifactServiceBaseClient.md); `service`: `object`; `serviceName`: `string`; \}

Defined in: src/api/nebius/registry/v1/index.ts:469

## Type Declaration

## Parameters

### address

`string`

### credentials

`ChannelCredentials`

### options?

`Partial`\<`ClientOptions`\>

## Returns

[`ArtifactServiceBaseClient`](../interfaces/ArtifactServiceBaseClient.md)

### service

> **service**: `object`

#### service.delete

> `readonly` **delete**: `object`

#### service.delete.path

> `readonly` **path**: `"/nebius.registry.v1.ArtifactService/Delete"` = `"/nebius.registry.v1.ArtifactService/Delete"`

#### service.delete.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`DeleteArtifactRequest`](../interfaces/DeleteArtifactRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`DeleteArtifactRequest`](../interfaces/DeleteArtifactRequest.md)

#### service.delete.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`DeleteArtifactRequest`](../interfaces/DeleteArtifactRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.delete.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.delete.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../common/v1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../common/v1/interfaces/Operation.md)

#### service.delete.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../common/v1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.delete.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.get

> `readonly` **get**: `object`

#### service.get.path

> `readonly` **path**: `"/nebius.registry.v1.ArtifactService/Get"` = `"/nebius.registry.v1.ArtifactService/Get"`

#### service.get.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetArtifactRequest`](../interfaces/GetArtifactRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetArtifactRequest`](../interfaces/GetArtifactRequest.md)

#### service.get.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetArtifactRequest`](../interfaces/GetArtifactRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.get.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.get.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Artifact`](../interfaces/Artifact.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Artifact`](../interfaces/Artifact.md)

#### service.get.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Artifact`](../interfaces/Artifact.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.get.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.list

> `readonly` **list**: `object`

#### service.list.path

> `readonly` **path**: `"/nebius.registry.v1.ArtifactService/List"` = `"/nebius.registry.v1.ArtifactService/List"`

#### service.list.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListArtifactsRequest`](../interfaces/ListArtifactsRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListArtifactsRequest`](../interfaces/ListArtifactsRequest.md)

#### service.list.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListArtifactsRequest`](../interfaces/ListArtifactsRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.list.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.list.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListArtifactsResponse`](../interfaces/ListArtifactsResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListArtifactsResponse`](../interfaces/ListArtifactsResponse.md)

#### service.list.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListArtifactsResponse`](../interfaces/ListArtifactsResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.list.responseStream

> `readonly` **responseStream**: `false` = `false`

### serviceName

> **serviceName**: `string`
