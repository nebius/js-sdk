[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [generated/nebius/compute/v1](../README.md) / MaintenanceServiceServiceDescription

# Variable: MaintenanceServiceServiceDescription

> **MaintenanceServiceServiceDescription**: `object`

Defined in: src/generated/nebius/compute/v1/index.ts:9651

## Type Declaration

### getByInstance

> `readonly` **getByInstance**: `object`

#### getByInstance.path

> `readonly` **path**: `"/nebius.compute.v1.MaintenanceService/GetByInstance"` = `"/nebius.compute.v1.MaintenanceService/GetByInstance"`

#### getByInstance.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetMaintenanceEventByInstanceRequest`](../interfaces/GetMaintenanceEventByInstanceRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetMaintenanceEventByInstanceRequest`](../interfaces/GetMaintenanceEventByInstanceRequest.md)

#### getByInstance.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetMaintenanceEventByInstanceRequest`](../interfaces/GetMaintenanceEventByInstanceRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### getByInstance.requestStream

> `readonly` **requestStream**: `false` = `false`

#### getByInstance.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`MaintenanceEvent`](../interfaces/MaintenanceEvent.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`MaintenanceEvent`](../interfaces/MaintenanceEvent.md)

#### getByInstance.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`MaintenanceEvent`](../interfaces/MaintenanceEvent.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### getByInstance.responseStream

> `readonly` **responseStream**: `false` = `false`

### listActive

> `readonly` **listActive**: `object`

#### listActive.path

> `readonly` **path**: `"/nebius.compute.v1.MaintenanceService/ListActive"` = `"/nebius.compute.v1.MaintenanceService/ListActive"`

#### listActive.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListMaintenanceEventsRequest`](../interfaces/ListMaintenanceEventsRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListMaintenanceEventsRequest`](../interfaces/ListMaintenanceEventsRequest.md)

#### listActive.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListMaintenanceEventsRequest`](../interfaces/ListMaintenanceEventsRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### listActive.requestStream

> `readonly` **requestStream**: `false` = `false`

#### listActive.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListMaintenanceEventsResponse`](../interfaces/ListMaintenanceEventsResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListMaintenanceEventsResponse`](../interfaces/ListMaintenanceEventsResponse.md)

#### listActive.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListMaintenanceEventsResponse`](../interfaces/ListMaintenanceEventsResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### listActive.responseStream

> `readonly` **responseStream**: `false` = `false`
