[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/compute/v1](../README.md) / MaintenanceServiceBaseClient

# Variable: MaintenanceServiceBaseClient

> **MaintenanceServiceBaseClient**: \{(`address`, `credentials`, `options?`): [`MaintenanceServiceBaseClient`](../interfaces/MaintenanceServiceBaseClient.md); `service`: `object`; `serviceName`: `string`; \}

Defined in: src/api/nebius/compute/v1/index.ts:9678

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

#### service.getByInstance

> `readonly` **getByInstance**: `object`

#### service.getByInstance.path

> `readonly` **path**: `"/nebius.compute.v1.MaintenanceService/GetByInstance"` = `"/nebius.compute.v1.MaintenanceService/GetByInstance"`

#### service.getByInstance.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`GetMaintenanceEventByInstanceRequest`](../interfaces/GetMaintenanceEventByInstanceRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`GetMaintenanceEventByInstanceRequest`](../interfaces/GetMaintenanceEventByInstanceRequest.md)

#### service.getByInstance.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`GetMaintenanceEventByInstanceRequest`](../interfaces/GetMaintenanceEventByInstanceRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.getByInstance.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.getByInstance.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`MaintenanceEvent`](../interfaces/MaintenanceEvent.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`MaintenanceEvent`](../interfaces/MaintenanceEvent.md)

#### service.getByInstance.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`MaintenanceEvent`](../interfaces/MaintenanceEvent.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.getByInstance.responseStream

> `readonly` **responseStream**: `false` = `false`

#### service.listActive

> `readonly` **listActive**: `object`

#### service.listActive.path

> `readonly` **path**: `"/nebius.compute.v1.MaintenanceService/ListActive"` = `"/nebius.compute.v1.MaintenanceService/ListActive"`

#### service.listActive.requestDeserialize()

> `readonly` **requestDeserialize**: (`value`) => [`ListMaintenanceEventsRequest`](../interfaces/ListMaintenanceEventsRequest.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListMaintenanceEventsRequest`](../interfaces/ListMaintenanceEventsRequest.md)

#### service.listActive.requestSerialize()

> `readonly` **requestSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListMaintenanceEventsRequest`](../interfaces/ListMaintenanceEventsRequest.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.listActive.requestStream

> `readonly` **requestStream**: `false` = `false`

#### service.listActive.responseDeserialize()

> `readonly` **responseDeserialize**: (`value`) => [`ListMaintenanceEventsResponse`](../interfaces/ListMaintenanceEventsResponse.md)

##### Parameters

###### value

`Buffer`

##### Returns

[`ListMaintenanceEventsResponse`](../interfaces/ListMaintenanceEventsResponse.md)

#### service.listActive.responseSerialize()

> `readonly` **responseSerialize**: (`value`) => `Buffer`\<`ArrayBuffer`\>

##### Parameters

###### value

[`ListMaintenanceEventsResponse`](../interfaces/ListMaintenanceEventsResponse.md)

##### Returns

`Buffer`\<`ArrayBuffer`\>

#### service.listActive.responseStream

> `readonly` **responseStream**: `false` = `false`

### serviceName

> **serviceName**: `string`
