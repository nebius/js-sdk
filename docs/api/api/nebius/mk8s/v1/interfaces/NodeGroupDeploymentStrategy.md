[**@nebius/nodejs-sdk**](../../../../../README.md)

---

[@nebius/nodejs-sdk](../../../../../README.md) / [api/nebius/mk8s/v1](../README.md) / NodeGroupDeploymentStrategy

# Interface: NodeGroupDeploymentStrategy

Defined in: src/api/nebius/mk8s/v1/index.ts:5968

## Properties

### \[unknownFieldsSymbol\]?

> `optional` **\[unknownFieldsSymbol\]**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: src/api/nebius/mk8s/v1/index.ts:5970

---

### $type

> **$type**: `"nebius.mk8s.v1.NodeGroupDeploymentStrategy"`

Defined in: src/api/nebius/mk8s/v1/index.ts:5969

---

### drainTimeout?

> `optional` **drainTimeout**: `Duration`

Defined in: src/api/nebius/mk8s/v1/index.ts:6006

Maximum amount of time that the service will spend on attempting gracefully draining a node (evicting it's pods), before
falling back to pod deletion.
By default, node can be drained unlimited time.
Important consequence of that is if PodDisruptionBudget doesn't allow to evict a pod,
then NodeGroup update with node re-creation will hung on that pod eviction.
Note, that it is different from `kubectl drain --timeout`

---

### maxSurge?

> `optional` **maxSurge**: [`PercentOrCount`](PercentOrCount.md)

Defined in: src/api/nebius/mk8s/v1/index.ts:5996

The maximum number of additional nodes that can be provisioned above the desired number of nodes during the update process.
This value can be specified either as an absolute number (for example 3) or as a percentage of the desired number of nodes (for example 5%).
When specified as a percentage, the actual number is calculated by rounding up to the nearest whole number.
This value cannot be 0 if `max_unavailable` is also set to 0.
Defaults to 1.
Example: If set to 25%, the node group can scale up by an additional 25% during the update,
allowing new nodes to be added before old nodes are removed, which helps minimize workload disruption.
NOTE: it is user responsibility to ensure that there are enough quota for provision nodes above the desired number.
Available quota effectively limits `max_surge`.
In case of not enough quota even for one extra node, update operation will hung because of quota exhausted error.
Such error will be visible in Operation.progress_data.

---

### maxUnavailable?

> `optional` **maxUnavailable**: [`PercentOrCount`](PercentOrCount.md)

Defined in: src/api/nebius/mk8s/v1/index.ts:5981

The maximum number of nodes that can be simultaneously unavailable during the update process.
This value can be specified either as an absolute number (for example 3) or as a percentage of the desired number of nodes (for example 5%).
When specified as a percentage, the actual number is calculated by rounding down to the nearest whole number.
This value cannot be 0 if `max_surge` is also set to 0.
Defaults to 0.
Example: If set to 20%, up to 20% of the nodes can be taken offline at once during the update,
ensuring that at least 80% of the desired nodes remain operational.
