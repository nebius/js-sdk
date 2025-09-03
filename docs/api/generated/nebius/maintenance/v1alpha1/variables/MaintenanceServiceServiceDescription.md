[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/maintenance/v1alpha1](../README.md) / MaintenanceServiceServiceDescription

# Variable: MaintenanceServiceServiceDescription

> **MaintenanceServiceServiceDescription**: `object`

Defined in: src/generated/nebius/maintenance/v1alpha1/index.ts:282

## Type Declaration

### get

> `readonly` **get**: `object`

#### get.path

> `readonly` **path**: `"/nebius.maintenance.v1alpha1.MaintenanceService/Get"` = `"/nebius.maintenance.v1alpha1.MaintenanceService/Get"`

#### get.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetMaintenanceRequest`](../interfaces/GetMaintenanceRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetMaintenanceRequest`](../interfaces/GetMaintenanceRequest.md)

#### get.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetMaintenanceRequest`](../interfaces/GetMaintenanceRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### get.requestStream

> `readonly` **requestStream**: `false` = `false`

#### get.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`Maintenance`](../interfaces/Maintenance.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`Maintenance`](../interfaces/Maintenance.md)

#### get.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`Maintenance`](../interfaces/Maintenance.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### get.responseStream

> `readonly` **responseStream**: `false` = `false`

### list

> `readonly` **list**: `object`

#### list.path

> `readonly` **path**: `"/nebius.maintenance.v1alpha1.MaintenanceService/List"` = `"/nebius.maintenance.v1alpha1.MaintenanceService/List"`

#### list.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListMaintenancesRequest`](../interfaces/ListMaintenancesRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListMaintenancesRequest`](../interfaces/ListMaintenancesRequest.md)

#### list.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListMaintenancesRequest`](../interfaces/ListMaintenancesRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### list.requestStream

> `readonly` **requestStream**: `false` = `false`

#### list.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListMaintenancesResponse`](../interfaces/ListMaintenancesResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListMaintenancesResponse`](../interfaces/ListMaintenancesResponse.md)

#### list.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListMaintenancesResponse`](../interfaces/ListMaintenancesResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### list.responseStream

> `readonly` **responseStream**: `false` = `false`
