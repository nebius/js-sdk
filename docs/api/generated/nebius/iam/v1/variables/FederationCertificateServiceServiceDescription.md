[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/iam/v1](../README.md) / FederationCertificateServiceServiceDescription

# Variable: FederationCertificateServiceServiceDescription

> **FederationCertificateServiceServiceDescription**: `object`

Defined in: src/generated/nebius/iam/v1/index.ts:7852

## Type Declaration

### create

> `readonly` **create**: `object`

#### create.path

> `readonly` **path**: `"/nebius.iam.v1.FederationCertificateService/Create"` = `"/nebius.iam.v1.FederationCertificateService/Create"`

#### create.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`CreateFederationCertificateRequest`](../interfaces/CreateFederationCertificateRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`CreateFederationCertificateRequest`](../interfaces/CreateFederationCertificateRequest.md)

#### create.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`CreateFederationCertificateRequest`](../interfaces/CreateFederationCertificateRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### create.requestStream

> `readonly` **requestStream**: `false` = `false`

#### create.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../common/v1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../common/v1/interfaces/Operation.md)

#### create.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../common/v1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### create.responseStream

> `readonly` **responseStream**: `false` = `false`

### delete

> `readonly` **delete**: `object`

#### delete.path

> `readonly` **path**: `"/nebius.iam.v1.FederationCertificateService/Delete"` = `"/nebius.iam.v1.FederationCertificateService/Delete"`

#### delete.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`DeleteFederationCertificateRequest`](../interfaces/DeleteFederationCertificateRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`DeleteFederationCertificateRequest`](../interfaces/DeleteFederationCertificateRequest.md)

#### delete.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`DeleteFederationCertificateRequest`](../interfaces/DeleteFederationCertificateRequest.md)

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

> `readonly` **path**: `"/nebius.iam.v1.FederationCertificateService/Get"` = `"/nebius.iam.v1.FederationCertificateService/Get"`

#### get.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetFederationCertificateRequest`](../interfaces/GetFederationCertificateRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetFederationCertificateRequest`](../interfaces/GetFederationCertificateRequest.md)

#### get.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetFederationCertificateRequest`](../interfaces/GetFederationCertificateRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### get.requestStream

> `readonly` **requestStream**: `false` = `false`

#### get.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`FederationCertificate`](../interfaces/FederationCertificate.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`FederationCertificate`](../interfaces/FederationCertificate.md)

#### get.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`FederationCertificate`](../interfaces/FederationCertificate.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### get.responseStream

> `readonly` **responseStream**: `false` = `false`

### listByFederation

> `readonly` **listByFederation**: `object`

#### listByFederation.path

> `readonly` **path**: `"/nebius.iam.v1.FederationCertificateService/ListByFederation"` = `"/nebius.iam.v1.FederationCertificateService/ListByFederation"`

#### listByFederation.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListFederationCertificateByFederationRequest`](../interfaces/ListFederationCertificateByFederationRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListFederationCertificateByFederationRequest`](../interfaces/ListFederationCertificateByFederationRequest.md)

#### listByFederation.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListFederationCertificateByFederationRequest`](../interfaces/ListFederationCertificateByFederationRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### listByFederation.requestStream

> `readonly` **requestStream**: `false` = `false`

#### listByFederation.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListFederationCertificateResponse`](../interfaces/ListFederationCertificateResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListFederationCertificateResponse`](../interfaces/ListFederationCertificateResponse.md)

#### listByFederation.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListFederationCertificateResponse`](../interfaces/ListFederationCertificateResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### listByFederation.responseStream

> `readonly` **responseStream**: `false` = `false`

### update

> `readonly` **update**: `object`

#### update.path

> `readonly` **path**: `"/nebius.iam.v1.FederationCertificateService/Update"` = `"/nebius.iam.v1.FederationCertificateService/Update"`

#### update.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`UpdateFederationCertificateRequest`](../interfaces/UpdateFederationCertificateRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`UpdateFederationCertificateRequest`](../interfaces/UpdateFederationCertificateRequest.md)

#### update.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`UpdateFederationCertificateRequest`](../interfaces/UpdateFederationCertificateRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### update.requestStream

> `readonly` **requestStream**: `false` = `false`

#### update.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Operation`](../../../common/v1/interfaces/Operation.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Operation`](../../../common/v1/interfaces/Operation.md)

#### update.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Operation`](../../../common/v1/interfaces/Operation.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### update.responseStream

> `readonly` **responseStream**: `false` = `false`
