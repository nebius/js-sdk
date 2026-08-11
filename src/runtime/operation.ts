import { type CallOptions, Metadata, status } from '@grpc/grpc-js';
import { Dayjs } from 'dayjs';

import { Status, Code as StatusCode } from '../api/google/rpc/index.js';
import { isRetriableError, Request, RetryOptions } from './request.js';
import { custom, customJson, inspectJson, Logger } from './util/logging.js';

/** Contains the default interval between successful operation polls. */
export const DEFAULT_POLL_INTERVAL_SEC = 1;

/** Contains the maximum default delay after a retriable polling error. */
export const DEFAULT_POLL_ERROR_BACKOFF_MAX_MS = 30_000;

const DEFAULT_POLL_ERROR_JITTER = 0.2;

/** Calculates the delay in milliseconds after a retriable polling error. */
export type PollErrorBackoff = (attempt: number) => number;

/** Controls operation polling requests and retries. */
export interface OperationWaitOptions extends RetryOptions {
  /**
   * Calculates the delay after each consecutive retriable polling error.
   *
   * The attempt starts at 1 and resets after a successful poll. By default,
   * the delay starts at one second, uses exponential backoff with 20% jitter,
   * and is capped at 30 seconds. Set this value to `null` to disable retries
   * after polling errors.
   */
  pollErrorBackoff?: PollErrorBackoff | null;
}

function defaultPollErrorBackoff(attempt: number): number {
  const exponent = Math.max(0, Math.min(62, attempt - 1));
  const delayMs = DEFAULT_POLL_INTERVAL_SEC * 1000 * 2 ** exponent;
  const jitter = 1 + DEFAULT_POLL_ERROR_JITTER * (Math.random() * 2 - 1);
  return Math.min(delayMs * jitter, DEFAULT_POLL_ERROR_BACKOFF_MAX_MS);
}

function isRetriablePollError(err: unknown): boolean {
  if (err && typeof err === 'object' && 'code' in err) {
    if ((err as { code?: unknown }).code === status.DEADLINE_EXCEEDED) return true;
  }
  return isRetriableError(err);
}

/**
 * Defines a protobuf-compatible progress count.
 *
 * Generated code can represent an integer as a JavaScript number or as an
 * object that converts to a number or string.
 */
export type TickCount = number | { toNumber?: () => number; toString?: () => string };

/** Defines completed and total work counts reported by a service. */
export interface ProgressTrackerWorkDone {
  /** Contains the total amount of work. */
  totalTickCount?: TickCount | undefined;
  /** Contains the completed amount of work. */
  doneTickCount?: TickCount | undefined;
}

/** Defines one progress step from an operation response. */
export interface ProgressTrackerStep {
  /** Contains the description. */
  description?: string | undefined;
  /** Contains the start time. */
  startedAt?: Dayjs | undefined;
  /** Contains the finish time. */
  finishedAt?: Dayjs | undefined;
  /** Contains the work done. */
  workDone?: ProgressTrackerWorkDone | undefined;
}

/** Defines progress data from an operation response. */
export interface ProgressTrackerProto {
  /** Contains the description. */
  description?: string | undefined;
  /** Contains the start time. */
  startedAt?: Dayjs | undefined;
  /** Contains the finish time. */
  finishedAt?: Dayjs | undefined;
  /** Contains the estimated finish time. */
  estimatedFinishedAt?: Dayjs | undefined;
  /** Contains the work done. */
  workDone?: ProgressTrackerWorkDone | undefined;
  /** Contains the steps. */
  steps?: ProgressTrackerStep[] | undefined;
}

/**
 * Describes one step in an operation.
 *
 * A service can omit steps. It can also return only active steps or some
 * completed steps.
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
  /** Returns a human-readable step description. */
  description(): string;
  /** Returns the step start time when the service provides it. */
  startedAt(): Dayjs | undefined;
  /** Returns the step finish time when the service provides it. */
  finishedAt(): Dayjs | undefined;
  /** Returns work counts when the service provides them. */
  workDone(): ProgressTrackerWorkDone | undefined;
  /**
   * Returns the completed work as a value from 0 to 1.
   *
   * Returns `undefined` when the work counts are missing or invalid.
   */
  workFraction(): number | undefined;
  /** Returns a text form for logs. */
  toString(): string;
  /** Formats the step for Node.js inspection. */
  [custom](): string;
  /** Returns a safe value for JSON logs. */
  [customJson](): unknown;
}

/**
 * Reports progress for a long-running operation.
 *
 * {@link Operation.progressTracker} returns `undefined` when the service does
 * not provide progress.
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
   * Returns the estimated finish time.
   *
   * Returns the actual finish time when the operation has finished.
   */
  estimatedFinishedAt(): Dayjs | undefined;
  /**
   * Returns the elapsed time as a value from 0 to 1.
   *
   * Returns `undefined` when the required times are missing or invalid.
   */
  timeFraction(): number | undefined;
  /** Returns the reported steps. */
  steps(): CurrentStep[];
}

/** Defines all values for one saved request header in an operation response. */
export interface Operation_RequestHeader {
  /** Contains the values. */
  values: string[];
}

/**
 * Defines the generated operation fields that the runtime wrapper reads.
 *
 * Generated operation messages satisfy this interface. Use {@link Operation}
 * in application code because it provides polling and progress helpers.
 */
export interface GenericOperation {
  /** Contains the fully qualified runtime type name. */
  $type: string;
  /** Contains the ID. */
  id: string;
  /** Contains the description. */
  description: string;
  /** Contains the creation time. */
  createdAt?: Dayjs | undefined;
  /** Contains the ID of the creator. */
  createdBy: string;
  /** Contains the finish time. */
  finishedAt?: Dayjs | undefined;
  /** Contains the request. */
  request?: { typeUrl: string; value: Uint8Array } | undefined;
  /** Contains the request headers. */
  requestHeaders: { [key: string]: Operation_RequestHeader };
  /** Contains the resource ID. */
  resourceId: string;
  /** Contains the progress tracker. */
  progressTracker?: ProgressTrackerProto | undefined;
  /** Contains the progress data. */
  progressData?: { typeUrl: string; value: Uint8Array } | undefined;
  /** Contains the status. */
  status?: Status | undefined;
}

/**
 * Defines the operation service method that {@link Operation} uses for polling.
 *
 * Generated operation service clients satisfy this interface.
 */
export interface OperationService<TReq> {
  /** Gets the latest state of an operation. */
  get(
    req: { id: string },
    metadata?: Metadata | undefined,
    options?: (Partial<CallOptions> & RetryOptions) | undefined,
  ): Request<TReq, Operation<TReq>>;
}

/**
 * Polls a long-running operation and exposes its current state.
 *
 * Mutating service methods often return an operation instead of the final
 * resource. {@link Operation.wait} completes for both successful and failed
 * operations. After it completes, inspect {@link Operation.status} or
 * {@link Operation.successful}. It rejects only when polling cannot continue.
 *
 * @example
 * ```ts
 * const op = await service.create(req).result;
 * await op.wait();
 * if (!op.successful()) {
 *   throw new Error(`operation failed: ${op.status()?.message}`);
 * }
 * console.log('resource ID', op.resourceId());
 * ```
 */
export class Operation<TReq> {
  /** Contains the fully qualified runtime type name. */
  public readonly $type: 'nebius.sdk.Operation' = 'nebius.sdk.Operation';
  /** Contains the protobuf type name of the wrapped operation. */
  public readonly innerType: string;
  /**
   * Creates an operation wrapper.
   *
   * Generated clients create this object with the correct operation service.
   * Application code normally receives it from a service request.
   */
  constructor(
    private _op: GenericOperation,
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

  /** Converts the value to string. */
  toString() {
    return `Operation(${this.id()}, resourceId=${this.resourceId()}, status=${this.status()})`;
  }

  /** Formats the current operation state for Node.js inspection. */
  [custom](): string {
    return this.toString();
  }
  /** Returns a JSON-safe value for logs. */
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

  /** Returns the operation ID. */
  id(): string {
    return this._op.id ?? '';
  }

  /** Returns the human-readable operation description. */
  description(): string {
    return this._op.description ?? '';
  }

  /** Returns the operation creation time. */
  createdAt(): Dayjs | undefined {
    return this._op.createdAt;
  }

  /** Returns the ID of the user or service account that created the operation. */
  createdBy(): string {
    return this._op.createdBy ?? '';
  }

  /** Returns the operation finish time. */
  finishedAt(): Dayjs | undefined {
    return this._op.finishedAt;
  }

  /**
   * Checks whether the operation finished successfully.
   *
   * Returns `false` while the operation is still running.
   */
  successful(): boolean {
    return this._op.status?.code === StatusCode.OK.code;
  }

  /**
   * Returns the latest source protobuf object.
   *
   * Treat this object as read-only. {@link update} replaces it with the next
   * response from the service.
   */
  raw(): GenericOperation {
    return this._op;
  }

  /** Returns the final status, or `undefined` while the operation is running. */
  status(): Status | undefined {
    return this._op.status;
  }

  /** Checks whether the service has returned a final status. */
  done(): boolean {
    return this._op.status !== undefined;
  }

  /**
   * Returns the affected resource ID.
   *
   * A service can return an empty string before it assigns the resource ID.
   */
  resourceId(): string {
    return this._op.resourceId;
  }

  /**
   * Returns the progress tracker.
   *
   * Returns `undefined` when the service does not provide progress.
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
   * Polls the operation until the service returns a final status.
   *
   * The method updates this object in place. It continues after a polling call
   * reaches its deadline, because the remote operation can still be running.
   * Consecutive retriable polling errors use exponential backoff with jitter.
   * It rethrows non-retriable polling errors. A resolved promise does not mean
   * that the operation succeeded; call {@link successful} or inspect
   * {@link status}. The method returns immediately when the operation ID is
   * empty.
   *
   * @param intervalSec Sets the poll interval in seconds. The default is 1.
   * @param metadata Sends metadata with every polling request.
   * @param options Sets gRPC deadlines, request retries, and poll-error backoff.
   * @example
   * ```ts
   * await op.wait(1); // poll once per second
   * ```
   */
  async wait(
    intervalSec: number = DEFAULT_POLL_INTERVAL_SEC,
    metadata?: Metadata | undefined,
    options?: (OperationWaitOptions & Partial<CallOptions>) | undefined,
  ): Promise<void> {
    this.logger.trace('Wait started', { intervalSec });
    const id = this.id();
    if (!id) return;
    const { pollErrorBackoff = defaultPollErrorBackoff, ...requestOptions } = options ?? {};
    let retryAttempt = 0;
    while (!this.done()) {
      try {
        await this.update(metadata, requestOptions);
        this.logger.trace('Wait iteration completed');
        retryAttempt = 0;
      } catch (err: unknown) {
        this.logger.trace('Wait iteration failed', { err });
        if (pollErrorBackoff !== null && isRetriablePollError(err)) {
          retryAttempt++;
          const delayMs = Math.max(0, pollErrorBackoff(retryAttempt));
          this.logger.warn('Update failed with retriable error, continuing to wait', {
            attempt: retryAttempt,
            delayMs,
            err,
          });
          await new Promise<void>((resolve) => setTimeout(resolve, delayMs));
          continue;
        }
        throw err;
      }
      if (!this.done()) {
        const ms = Math.max(0.01, intervalSec) * 1000;
        await new Promise<void>((resolve) => setTimeout(resolve, ms));
      }
    }
    this.logger.trace('Wait completed', { finalStatus: this.status() });
  }

  /**
   * Gets the latest operation state from the operation service.
   *
   * The method replaces the wrapped state in place. It does nothing when the
   * operation has no ID. Request errors reject the returned promise.
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
 * Returns a read-only progress view for an operation.
 *
 * The view reads the current operation state, so it reflects later
 * {@link Operation.update} calls. Returns `undefined` when the operation or
 * tracker is missing.
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
