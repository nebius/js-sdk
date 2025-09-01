import util from 'node:util';

import { Metadata, status, type CallOptions } from '@grpc/grpc-js';
import { Dayjs } from 'dayjs';

import { Status, Code as StatusCode } from '../generated/google/rpc/index';

import { RetryOptions, UnaryCall } from './request';

interface Operation_RequestHeader {
  values: string[];
}

interface GenericOperation {
  id: string;
  description: string;
  createdAt?: Dayjs | undefined;
  createdBy: string;
  finishedAt?: Dayjs | undefined;
  request?: { typeUrl: string; value: Uint8Array } | undefined;
  requestHeaders: { [key: string]: Operation_RequestHeader };
  resourceId: string;
  progressData?: { typeUrl: string; value: Uint8Array } | undefined;
  status?: Status | undefined;
}

interface OperationService {
  get(
    req: { id: string },
    metadata?: Metadata | undefined,
    options?: (Partial<CallOptions> & RetryOptions) | undefined,
  ): UnaryCall<Operation>;
}

export class Operation {
  constructor(
    private _op: GenericOperation,
    // getOpFn now may accept optional Metadata and CallOptions to propagate through
    private readonly service: OperationService,
  ) {}

  toString() {
    return `Operation(${this.id()}, resourceId=${this.resourceId()}, status=${this.status()})`;
  }

  [util.inspect.custom]() {
    return this.toString();
  }

  id(): string {
    return this._op.id ?? '';
  }

  description(): string {
    return this._op.description ?? '';
  }

  createdAt(): Dayjs | undefined {
    return this._op.createdAt;
  }

  createdBy(): string {
    return this._op.createdBy ?? '';
  }

  finishedAt(): Dayjs | undefined {
    return this._op.finishedAt;
  }

  successful(): boolean {
    return this._op.status?.code === StatusCode.OK.code;
  }

  raw(): GenericOperation {
    return this._op;
  }

  status(): Status | undefined {
    return this._op.status;
  }

  done(): boolean {
    return this._op.status !== undefined;
  }

  resourceId(): string {
    return this._op.resourceId;
  }

  async wait(
    intervalSec: number = 1,
    metadata?: Metadata | undefined,
    options?: (Partial<CallOptions> & RetryOptions) | undefined,
  ): Promise<void> {
    const id = this.id();
    if (!id) return;
    while (!this.done()) {
      try {
        await this.update(metadata, options);
      } catch (err: unknown) {
        // If update failed because the client deadline was exceeded, ignore
        // and continue waiting. This can happen when the server takes longer
        // to respond than the per-request deadline; the operation may still
        // be progressing and will be visible on subsequent polls.
        if (err && typeof err === 'object' && 'code' in err) {
          const e = err as { code?: number };
          if (e.code === status.DEADLINE_EXCEEDED) {
            // swallow and retry
          } else {
            throw err;
          }
        } else {
          throw err;
        }
      }
      if (!this.done()) {
        const ms = Math.max(0, intervalSec) * 1000;
        await new Promise<void>((resolve) => setTimeout(resolve, ms));
      }
    }
  }

  async update(
    metadata?: Metadata | undefined,
    options?: (Partial<CallOptions> & RetryOptions) | undefined,
  ): Promise<void> {
    const id = this.id();
    if (!id) return;
    const next = await this.service.get({ id }, metadata, options).result;
    this._op = next._op;
  }
}
