[**@nebius/nodejs-sdk**](../../../../../README.md)

***

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/iam/v1](../README.md) / FederationCertificateServiceBaseClient

# Variable: FederationCertificateServiceBaseClient

> **FederationCertificateServiceBaseClient**: \{(`address`, `credentials`, `options?`): [`FederationCertificateServiceBaseClient`](../interfaces/FederationCertificateServiceBaseClient.md); `service`: `object`; `serviceName`: `string`; \}

Defined in: src/api/nebius/iam/v1/index.ts:7909

## Type Declaration

## Parameters

### address

`string`

### credentials

`ChannelCredentials`

### options?

`Partial`\<`ClientOptions`\>

## Returns

[`FederationCertificateServiceBaseClient`](../interfaces/FederationCertificateServiceBaseClient.md)

### service

> **service**: `object`

#### service.create

> `readonly` **create**: `object`

#### service.create.path

> `readonly` **path**: `"/nebius.iam.v1.FederationCertificateService/Create"` = `"/nebius.iam.v1.FederationCertificateService/Create"`

#### service.create.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`CreateFederationCertificateRequest`](../interfaces/CreateFederationCertificateRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`CreateFederationCertificateRequest`](../interfaces/CreateFederationCertificateRequest.md)

#### service.create.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`CreateFederationCertificateRequest`](../interfaces/CreateFederationCertificateRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.create.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.create.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../common/v1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../common/v1/interfaces/Operation.md)

#### service.create.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../common/v1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.create.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.delete

> `readonly` **delete**: `object`

#### service.delete.path

> `readonly` **path**: `"/nebius.iam.v1.FederationCertificateService/Delete"` = `"/nebius.iam.v1.FederationCertificateService/Delete"`

#### service.delete.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`DeleteFederationCertificateRequest`](../interfaces/DeleteFederationCertificateRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`DeleteFederationCertificateRequest`](../interfaces/DeleteFederationCertificateRequest.md)

#### service.delete.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`DeleteFederationCertificateRequest`](../interfaces/DeleteFederationCertificateRequest.md)

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

> `readonly` **path**: `"/nebius.iam.v1.FederationCertificateService/Get"` = `"/nebius.iam.v1.FederationCertificateService/Get"`

#### service.get.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetFederationCertificateRequest`](../interfaces/GetFederationCertificateRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetFederationCertificateRequest`](../interfaces/GetFederationCertificateRequest.md)

#### service.get.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetFederationCertificateRequest`](../interfaces/GetFederationCertificateRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.get.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.get.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`FederationCertificate`](../interfaces/FederationCertificate.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`FederationCertificate`](../interfaces/FederationCertificate.md)

#### service.get.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`FederationCertificate`](../interfaces/FederationCertificate.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.get.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.listByFederation

> `readonly` **listByFederation**: `object`

#### service.listByFederation.path

> `readonly` **path**: `"/nebius.iam.v1.FederationCertificateService/ListByFederation"` = `"/nebius.iam.v1.FederationCertificateService/ListByFederation"`

#### service.listByFederation.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListFederationCertificateByFederationRequest`](../interfaces/ListFederationCertificateByFederationRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListFederationCertificateByFederationRequest`](../interfaces/ListFederationCertificateByFederationRequest.md)

#### service.listByFederation.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListFederationCertificateByFederationRequest`](../interfaces/ListFederationCertificateByFederationRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.listByFederation.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.listByFederation.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListFederationCertificateResponse`](../interfaces/ListFederationCertificateResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListFederationCertificateResponse`](../interfaces/ListFederationCertificateResponse.md)

#### service.listByFederation.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListFederationCertificateResponse`](../interfaces/ListFederationCertificateResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.listByFederation.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.update

> `readonly` **update**: `object`

#### service.update.path

> `readonly` **path**: `"/nebius.iam.v1.FederationCertificateService/Update"` = `"/nebius.iam.v1.FederationCertificateService/Update"`

#### service.update.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`UpdateFederationCertificateRequest`](../interfaces/UpdateFederationCertificateRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`UpdateFederationCertificateRequest`](../interfaces/UpdateFederationCertificateRequest.md)

#### service.update.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`UpdateFederationCertificateRequest`](../interfaces/UpdateFederationCertificateRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.update.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.update.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../common/v1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../common/v1/interfaces/Operation.md)

#### service.update.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../common/v1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.update.responseStream

> `readonly` **responseStream**: `false` = `false`

### serviceName

> **serviceName**: `string`
