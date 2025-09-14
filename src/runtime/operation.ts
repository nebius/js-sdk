import { Metadata, status, type CallOptions } from '@grpc/grpc-js';
import { Dayjs } from 'dayjs';

import { Status, Code as StatusCode } from '../api/google/rpc/index';

import { Request, RetryOptions } from './request';
import { Logger, custom, customJson, inspectJson } from './util/logging';

interface Operation_RequestHeader {
  values: string[];
}

interface GenericOperation {
  $type: string;
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

interface OperationService<TReq> {
  get(
    req: { id: string },
    metadata?: Metadata | undefined,
    options?: (Partial<CallOptions> & RetryOptions) | undefined,
  ): Request<TReq, Operation<TReq>>;
}

export class Operation<TReq> {
  public readonly $type: 'nebius.sdk.Operation' = 'nebius.sdk.Operation';
  public readonly innerType: string;
  constructor(
    private _op: GenericOperation,
    // getOpFn now may accept optional Metadata and CallOptions to propagate through
    private readonly service: OperationService<TReq>,
    private logger: Logger,
  ) {
    this.innerType = _op.$type;
    this.logger = logger.withFields({
      operationId: this.id(),
      resourceId: this.resourceId(),
    });
    this.logger.trace('Operation instance created', { operation: this });
  }

  toString() {
    return `Operation(${this.id()}, resourceId=${this.resourceId()}, status=${this.status()})`;
  }

  [custom](): string {
    return this.toString();
  }
  [customJson](): unknown {
    return {
      operationId: this.id(),
      description: this.description(),
      createdAt: this.createdAt()?.toISOString() ?? null,
      createdBy: this.createdBy(),
      finishedAt: this.finishedAt()?.toISOString() ?? null,
      resourceId: this.resourceId(),
      status: inspectJson(this.status()),
    };
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
    this.logger.trace('Wait started', { intervalSec });
    const id = this.id();
    if (!id) return;
    while (!this.done()) {
      try {
        await this.update(metadata, options);
        this.logger.trace('Wait iteration completed');
      } catch (err: unknown) {
        this.logger.trace('Wait iteration failed', { err });
        // If update failed because the client deadline was exceeded, ignore
        // and continue waiting. This can happen when the server takes longer
        // to respond than the per-request deadline; the operation may still
        // be progressing and will be visible on subsequent polls.
        if (err && typeof err === 'object' && 'code' in err) {
          const e = err as { code?: number };
          if (e.code === status.DEADLINE_EXCEEDED) {
            this.logger.warn('Update timed out, continuing to wait', { err });
          } else {
            throw err;
          }
        } else {
          throw err;
        }
      }
      if (!this.done()) {
        const ms = Math.max(0.01, intervalSec) * 1000;
        await new Promise<void>((resolve) => setTimeout(resolve, ms));
      }
    }
    this.logger.trace('Wait completed', { finalStatus: this.status() });
  }

  async update(
    metadata?: Metadata | undefined,
    options?: (Partial<CallOptions> & RetryOptions) | undefined,
  ): Promise<void> {
    this.logger.trace('`Update started');
    const id = this.id();
    if (!id) {
      this.logger.warn('Update skipped: no operation ID');
      return;
    }
    const next = await this.service.get({ id }, metadata, options).result;
    this._op = next._op;
    this.logger.trace('Update completed');
  }
}
