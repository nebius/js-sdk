import { Metadata, status, type CallOptions } from '@grpc/grpc-js';
import { Dayjs } from 'dayjs';

import { Status, Code as StatusCode } from '../api/google/rpc/index';

import { Request, RetryOptions } from './request';
import { Logger, custom, customJson, inspectJson } from './util/logging';

type TickCount = number | { toNumber?: () => number; toString?: () => string };

interface ProgressTrackerWorkDone {
  totalTickCount?: TickCount | undefined;
  doneTickCount?: TickCount | undefined;
}

interface ProgressTrackerStep {
  description?: string | undefined;
  startedAt?: Dayjs | undefined;
  finishedAt?: Dayjs | undefined;
  workDone?: ProgressTrackerWorkDone | undefined;
}

interface ProgressTrackerProto {
  description?: string | undefined;
  startedAt?: Dayjs | undefined;
  finishedAt?: Dayjs | undefined;
  estimatedFinishedAt?: Dayjs | undefined;
  workDone?: ProgressTrackerWorkDone | undefined;
  steps?: ProgressTrackerStep[] | undefined;
}

/**
 * A single step within an operation progress tracker.
 *
 * Steps are optional and may include only currently running steps or a subset
 * of completed steps, depending on the service.
 *
 * @example
 * ```ts
 * const tracker = op.progressTracker();
 * if (tracker) {
 *   for (const step of tracker.steps()) {
 *     const fraction = step.workFraction();
 *     if (fraction === undefined) {
 *       console.log(step.description());
 *     } else {
 *       console.log(`${step.description()}: ${Math.round(fraction * 100)}%`);
 *     }
 *   }
 * }
 * ```
 */
export interface CurrentStep {
  /** Human-readable description of the step. */
  description(): string;
  /** Step start timestamp if provided. */
  startedAt(): Dayjs | undefined;
  /** Step finish timestamp if provided. */
  finishedAt(): Dayjs | undefined;
  /** Work progress details if provided. */
  workDone(): ProgressTrackerWorkDone | undefined;
  /**
   * Fraction of work completed for the step.
   * Returns `undefined` when work details are missing or invalid.
   */
  workFraction(): number | undefined;
  /** String representation for logs/debugging. */
  toString(): string;
  /** Custom inspect hook used by runtime logging. */
  [custom](): string;
  /** Custom JSON hook used by runtime logging. */
  [customJson](): unknown;
}

/**
 * Progress tracking interface for long-running operations.
 * Mirrors the server-side ProgressTracker and adds convenience helpers.
 *
 * For operations that do not provide progress details (or v1alpha1 operations),
 * {@link Operation.progressTracker} returns `undefined`.
 *
 * @example
 * ```ts
 * const tracker = op.progressTracker();
 * if (tracker) {
 *   console.log(tracker.description());
 *   const work = tracker.workFraction();
 *   if (work !== undefined) console.log(`Work: ${Math.round(work * 100)}%`);
 *   const time = tracker.timeFraction();
 *   if (time !== undefined) console.log(`Time: ${Math.round(time * 100)}%`);
 * }
 * ```
 */
export interface OperationProgressTracker extends CurrentStep {
  /**
   * Estimated completion time when available.
   * If the tracker reports a finished time, it is returned.
   */
  estimatedFinishedAt(): Dayjs | undefined;
  /**
   * Fraction of time elapsed based on start and estimated finish.
   * Returns `undefined` when timestamps are missing or invalid.
   */
  timeFraction(): number | undefined;
  /** Steps reported by the tracker (may be empty). */
  steps(): CurrentStep[];
}

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
  progressTracker?: ProgressTrackerProto | undefined;
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

/**
 * A convenience wrapper around operation protobufs.
 * Provides helpers to poll, wait, and inspect operation metadata.
 *
 * @example
 * ```ts
 * const op = await service.create(req).result;
 * await op.wait();
 * console.log('resource id', op.resourceId());
 * ```
 */
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

  /** Human-readable operation description. */
  description(): string {
    return this._op.description ?? '';
  }

  /** Operation creation timestamp if provided. */
  createdAt(): Dayjs | undefined {
    return this._op.createdAt;
  }

  /** ID of the user or service account that created the operation. */
  createdBy(): string {
    return this._op.createdBy ?? '';
  }

  /** Operation completion timestamp if provided. */
  finishedAt(): Dayjs | undefined {
    return this._op.finishedAt;
  }

  /** Returns true if operation status is OK. */
  successful(): boolean {
    return this._op.status?.code === StatusCode.OK.code;
  }

  /** Raw underlying protobuf object. */
  raw(): GenericOperation {
    return this._op;
  }

  /** Operation status if completed. */
  status(): Status | undefined {
    return this._op.status;
  }

  /** Returns true if the operation is completed. */
  done(): boolean {
    return this._op.status !== undefined;
  }

  /** Resource ID associated with the operation. */
  resourceId(): string {
    return this._op.resourceId;
  }

  /**
   * Returns a progress tracker wrapper when available.
   * For operations that do not provide progress details (or v1alpha1),
   * this returns `undefined`.
   *
   * @example
   * ```ts
   * const tracker = op.progressTracker();
   * if (tracker) {
   *   console.log(tracker.description());
   *   const steps = tracker.steps();
   *   if (steps.length > 0) console.log('first step', steps[0].description());
   * }
   * ```
   */
  progressTracker(): OperationProgressTracker | undefined {
    return wrapProgressTracker(this);
  }

  /**
   * Polls the operation until it completes.
   * @param intervalSec polling interval in seconds (default: 1)
   * @example
   * ```ts
   * await op.wait(1); // poll once per second
   * ```
   */
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

  /**
   * Fetch the latest operation state from the operation service.
   *
   * @example
   * ```ts
   * await op.update();
   * if (op.done()) console.log('finished', op.status());
   * ```
   */
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

function toNumber(value: TickCount | undefined): number | undefined {
  if (value === undefined || value === null) return undefined;
  if (typeof value === 'number') return value;
  if (typeof value.toNumber === 'function') return value.toNumber();
  if (typeof value.toString === 'function') {
    const parsed = Number(value.toString());
    return Number.isFinite(parsed) ? parsed : undefined;
  }
  return undefined;
}

function formatTimestamp(value: Dayjs | undefined): string | undefined {
  return value ? value.toISOString() : undefined;
}

function workDoneSummary(workDone: ProgressTrackerWorkDone | undefined): string | undefined {
  const total = toNumber(workDone?.totalTickCount);
  if (total === undefined || total <= 0) return undefined;
  const done = toNumber(workDone?.doneTickCount) ?? 0;
  return `${done}/${total}`;
}

class CurrentStepWrapper implements CurrentStep {
  constructor(private readonly step: ProgressTrackerStep) {}

  toString(): string {
    const parts = [`${this.description()}`];
    const started = formatTimestamp(this.startedAt());
    if (started) parts.push(`started_at: ${started}`);
    const finished = formatTimestamp(this.finishedAt());
    if (finished) parts.push(`finished_at: ${finished}`);
    const workSummary = workDoneSummary(this.workDone());
    if (workSummary) parts.push(`work_done: ${workSummary}`);
    return `CurrentStep(${parts.join(', ')})`;
  }

  [custom](): string {
    return this.toString();
  }

  [customJson](): unknown {
    const workDone = this.workDone();
    const ret: {
      description: string;
      startedAt?: string;
      finishedAt?: string;
      workDone?: {
        doneTickCount: number | null;
        totalTickCount: number | null;
      };
      workFraction?: number | null;
    } = {
      description: this.description(),
    };
    if (this.startedAt()) ret['startedAt'] = formatTimestamp(this.startedAt());
    if (this.finishedAt()) ret['finishedAt'] = formatTimestamp(this.finishedAt());
    if (workDone) {
      ret['workDone'] = {
        doneTickCount: toNumber(workDone.doneTickCount) ?? null,
        totalTickCount: toNumber(workDone.totalTickCount) ?? null,
      };
    }
    if (this.workFraction() !== undefined) ret['workFraction'] = this.workFraction();

    return ret;
  }

  description(): string {
    return this.step.description ?? '';
  }

  startedAt(): Dayjs | undefined {
    return this.step.startedAt;
  }

  finishedAt(): Dayjs | undefined {
    return this.step.finishedAt;
  }

  workDone(): ProgressTrackerWorkDone | undefined {
    return this.step.workDone;
  }

  workFraction(): number | undefined {
    const workDone = this.workDone();
    const total = toNumber(workDone?.totalTickCount);
    if (total === undefined || total <= 0) return undefined;
    const done = toNumber(workDone?.doneTickCount) ?? 0;
    return Math.min(1.0, done / total);
  }
}

class ProgressTrackerWrapper implements OperationProgressTracker {
  constructor(private readonly operation: Operation<unknown>) {}

  toString(): string {
    const parts = [`${this.description()}`];
    const started = formatTimestamp(this.startedAt());
    if (started) parts.push(`started_at: ${started}`);
    const finished = formatTimestamp(this.finishedAt());
    if (finished) parts.push(`finished_at: ${finished}`);
    const eta = formatTimestamp(this.estimatedFinishedAt());
    if (eta) parts.push(`eta: ${eta}`);
    const workSummary = workDoneSummary(this.workDone());
    if (workSummary) parts.push(`work_done: ${workSummary}`);
    const steps = this.steps();
    if (steps.length > 0) {
      parts.push(`steps: [${steps.map((step) => step.toString()).join(', ')}]`);
    }
    return `OperationProgressTracker(${parts.join(', ')})`;
  }

  [custom](): string {
    return this.toString();
  }

  [customJson](): unknown {
    const workDone = this.workDone();
    const ret = {
      description: this.description(),
      steps: this.steps().map((step) => step[customJson]()),
    } as {
      description: string;
      startedAt?: string | null;
      finishedAt?: string | null;
      estimatedFinishedAt?: string | null;
      workDone?: {
        doneTickCount: number;
        totalTickCount: number;
      } | null;
      workFraction?: number | null;
      timeFraction?: number | null;
      steps: unknown[];
    };
    if (this.startedAt()) ret['startedAt'] = formatTimestamp(this.startedAt());
    if (this.finishedAt()) ret['finishedAt'] = formatTimestamp(this.finishedAt());
    if (this.estimatedFinishedAt()) {
      ret['estimatedFinishedAt'] = formatTimestamp(this.estimatedFinishedAt());
    }
    if (workDone) {
      const doneTickCount = toNumber(workDone.doneTickCount);
      const totalTickCount = toNumber(workDone.totalTickCount);
      if (doneTickCount !== undefined && totalTickCount !== undefined) {
        ret['workDone'] = {
          doneTickCount,
          totalTickCount,
        };
      }
    }
    if (this.workFraction() !== undefined) ret['workFraction'] = this.workFraction();
    if (this.timeFraction() !== undefined) ret['timeFraction'] = this.timeFraction();

    return ret;
  }

  private tracker(): ProgressTrackerProto | undefined {
    const op = this.operation.raw();
    return op.progressTracker;
  }

  description(): string {
    return this.tracker()?.description ?? '';
  }

  startedAt(): Dayjs | undefined {
    return this.tracker()?.startedAt;
  }

  finishedAt(): Dayjs | undefined {
    return this.tracker()?.finishedAt;
  }

  workDone(): ProgressTrackerWorkDone | undefined {
    return this.tracker()?.workDone;
  }

  workFraction(): number | undefined {
    if (this.operation.done()) return 1.0;
    const workDone = this.workDone();
    const total = toNumber(workDone?.totalTickCount);
    if (total === undefined || total <= 0) return undefined;
    const done = toNumber(workDone?.doneTickCount) ?? 0;
    return Math.min(1.0, done / total);
  }

  estimatedFinishedAt(): Dayjs | undefined {
    const tracker = this.tracker();
    if (!tracker) return this.operation.finishedAt();
    return tracker.finishedAt ?? this.operation.finishedAt() ?? tracker.estimatedFinishedAt;
  }

  timeFraction(): number | undefined {
    if (this.operation.done()) return 1.0;
    const tracker = this.tracker();
    if (!tracker) return undefined;
    const startedAt = tracker.startedAt;
    const estimatedFinishedAt = tracker.estimatedFinishedAt;
    if (!startedAt || !estimatedFinishedAt) return undefined;
    const startedMs = startedAt.valueOf();
    const estimatedMs = estimatedFinishedAt.valueOf();
    const nowMs = Date.now();
    if (nowMs < startedMs) return 0.0;
    if (nowMs > estimatedMs) return 1.0;
    const totalDuration = estimatedMs - startedMs;
    const elapsedDuration = nowMs - startedMs;
    if (totalDuration <= 0 || elapsedDuration < 0) return undefined;
    return elapsedDuration / totalDuration;
  }

  steps(): CurrentStep[] {
    const steps = this.tracker()?.steps ?? [];
    return steps.map((step) => new CurrentStepWrapper(step));
  }
}

/**
 * Return a progress tracker wrapper for an operation if available.
 * Performs presence checks to avoid accessing missing fields.
 *
 * @example
 * ```ts
 * const tracker = wrapProgressTracker(op);
 * if (tracker) console.log(tracker.description());
 * ```
 */
export function wrapProgressTracker<TReq>(
  operation: Operation<TReq> | undefined,
): OperationProgressTracker | undefined {
  if (!operation) return undefined;
  const tracker = operation.raw().progressTracker;
  if (!tracker) return undefined;
  return new ProgressTrackerWrapper(operation as Operation<unknown>);
}
