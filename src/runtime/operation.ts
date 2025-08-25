import { Dayjs } from 'dayjs';

import { Code as StatusCode, Status } from '../generated/google/rpc/index';
import type { SDKInterface } from '../sdk';

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

export class Operation {
  constructor(
    private readonly sdk: SDKInterface,
    private readonly sourceMethodPath: string,
    private _op: GenericOperation,
    private readonly getOpFn: (id: string) => Promise<GenericOperation>,
  ) {}

  toString() {
    return `Operation(${this.id()}, resourceId=${this.resourceId()}, status=${this.status()})`;
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

  async wait(intervalSec: number = 1): Promise<void> {
    const id = this.id();
    if (!id) return;
    while (!this.done()) {
      await this.update();
      if (!this.done()) {
        const ms = Math.max(0, intervalSec) * 1000;
        await new Promise<void>((resolve) => setTimeout(resolve, ms));
      }
    }
  }

  async update(): Promise<void> {
    const id = this.id();
    if (!id) return;
    const next = await this.getOpFn(id);
    this._op = next;
  }
}
