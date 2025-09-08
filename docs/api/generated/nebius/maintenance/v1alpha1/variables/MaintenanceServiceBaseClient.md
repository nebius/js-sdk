[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/maintenance/v1alpha1](../README.md) / MaintenanceServiceBaseClient

# Variable: MaintenanceServiceBaseClient

> **MaintenanceServiceBaseClient**: \{(`address`, `credentials`, `options?`): [`MaintenanceServiceBaseClient`](../interfaces/MaintenanceServiceBaseClient.md); `service`: `object`; `serviceName`: `string`; \}

Defined in: src/generated/nebius/maintenance/v1alpha1/index.ts:309

## Type Declaration

## Parameters

### address

`string`

### credentials

`ChannelCredentials`

### options?

`Partial`\<`ClientOptions`\>

## Returns

[`MaintenanceServiceBaseClient`](../interfaces/MaintenanceServiceBaseClient.md)

### service

> **service**: `object`

#### service.get

> `readonly` **get**: `object`

#### service.get.path

> `readonly` **path**: `"/nebius.maintenance.v1alpha1.MaintenanceService/Get"` = `"/nebius.maintenance.v1alpha1.MaintenanceService/Get"`

#### service.get.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetMaintenanceRequest`](../interfaces/GetMaintenanceRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetMaintenanceRequest`](../interfaces/GetMaintenanceRequest.md)

#### service.get.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetMaintenanceRequest`](../interfaces/GetMaintenanceRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.get.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.get.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Maintenance`](../interfaces/Maintenance.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Maintenance`](../interfaces/Maintenance.md)

#### service.get.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Maintenance`](../interfaces/Maintenance.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.get.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.list

> `readonly` **list**: `object`

#### service.list.path

> `readonly` **path**: `"/nebius.maintenance.v1alpha1.MaintenanceService/List"` = `"/nebius.maintenance.v1alpha1.MaintenanceService/List"`

#### service.list.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListMaintenancesRequest`](../interfaces/ListMaintenancesRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListMaintenancesRequest`](../interfaces/ListMaintenancesRequest.md)

#### service.list.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListMaintenancesRequest`](../interfaces/ListMaintenancesRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.list.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.list.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListMaintenancesResponse`](../interfaces/ListMaintenancesResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListMaintenancesResponse`](../interfaces/ListMaintenancesResponse.md)

#### service.list.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListMaintenancesResponse`](../interfaces/ListMaintenancesResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.list.responseStream

> `readonly` **responseStream**: `false` = `false`

### serviceName

> **serviceName**: `string`
