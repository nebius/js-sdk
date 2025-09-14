import type { CallOptions, ClientUnaryCall, ServiceError as GrpcServiceError } from '@grpc/grpc-js';
import { Metadata } from '@grpc/grpc-js';

import { Status as GrpcStatus, Code as StatusCode } from '../api/google/rpc/index';
import {
  ServiceError as NebiusServiceError,
  ServiceError_RetryType,
} from '../api/nebius/common/v1/index';
import { SDKInterface } from '../sdk';

import { NebiusGrpcError } from './error';
import { resetMaskFromMessage } from './resetmask';
import { custom, customJson, inspectJson, Logger } from './util/logging';

export interface RetryOptions {
  PerRetryTimeout?: number; // ms
  RetryCount?: number;
}

export const DefaultRetriableCodes: StatusCode[] = [
  StatusCode.RESOURCE_EXHAUSTED,
  StatusCode.UNAVAILABLE,
];

export type CallCreator<TReq, TRes> = (
  request: TReq,
  metadata: Metadata | undefined,
  options: Partial<CallOptions> | undefined,
  callback: (error: GrpcServiceError | null, response: TRes) => void,
) => ClientUnaryCall;

const RESET_MASK_HEADER = 'x-resetmask';
const IDEMPOTENCY_HEADER = 'x-idempotency-key';

function shouldUseIdempotencyKey(methodName?: string): boolean {
  if (!methodName) return false;
  const m = methodName.toLowerCase();
  // Non-mutating methods that should NOT add idempotency keys
  if (m === 'get' || m === 'getbyname' || m === 'list' || m === 'listoperationsbyparent') {
    return false;
  }
  // For all other unary methods, add it (Create/Update/Delete/Start/Stop/etc.)
  return true;
}

function generateIdempotencyKey(): string {
  try {
    // Prefer crypto.randomUUID if available (RFC 4122 v4)

    const crypto = require('crypto') as typeof import('crypto');
    if (typeof crypto.randomUUID === 'function') {
      return crypto.randomUUID();
    }
    // Fallback to randomBytes and format as UUID v4
    const bytes: Buffer = crypto.randomBytes(16);
    // Set version (4) and variant (10xx)
    bytes[6] = (bytes[6] & 0x0f) | 0x40;
    bytes[8] = (bytes[8] & 0x3f) | 0x80;
    const hex = bytes.toString('hex');
    return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
  } catch {
    // Last-resort non-crypto fallback with correct UUIDv4 shape
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
}

const DEFAULT_TIMEOUT = 60000;
const DEFAULT_RETRY_COUNT = 3;
const DEFAULT_PER_RETRY_TIMEOUT = DEFAULT_TIMEOUT / DEFAULT_RETRY_COUNT;

class CancelledError extends NebiusGrpcError {
  constructor(reason?: string) {
    const message = reason
      ? `Request cancelled on client: ${reason}`
      : 'Request cancelled on client';
    const st = GrpcStatus.create({
      code: StatusCode.CANCELLED.code,
      message,
      details: [],
    });
    const err = Object.assign(new Error(message), {
      code: StatusCode.CANCELLED.code,
      details: message,
      metadata: new Metadata(),
    });
    super(err, st);
  }
}

export class Request<TReq, TRes> {
  public readonly $type: 'nebius.sdk.Request' = 'nebius.sdk.Request';
  // Promises
  readonly result: Promise<TRes>;
  readonly initialMetadata: Promise<Metadata>;
  readonly trailingMetadata: Promise<Metadata>;
  readonly status: Promise<GrpcStatus>;
  readonly requestId: Promise<string>;
  readonly traceId: Promise<string>;

  private _resolveInitialMd!: (md: Metadata) => void;
  private _resolveTrailingMd!: (md: Metadata) => void;
  private _resolveStatus!: (st: GrpcStatus) => void;
  private _resolveReqId!: (id: string) => void;
  private _resolveTraceId!: (id: string) => void;
  private logger: Logger;

  private _maybeReqId: string | undefined;
  private _maybeTraceId: string | undefined;
  private _maybeStatus: GrpcStatus | undefined;
  // Cancellation and cleanup helpers
  private _canceled = false;
  private _calls = new Set<ClientUnaryCall>();

  constructor(
    private sdk: SDKInterface,
    private serviceName: string,
    private methodName: string,
    private addr: string,
    private serializer: (value: TReq) => Buffer,
    private deserializer: (value: Buffer) => TRes,
    private request: TReq,
    private requestMetadata: Metadata | undefined,
    private requestOptions?: (Partial<CallOptions> & RetryOptions) | undefined,
  ) {
    const path = `/${this.serviceName}/${this.methodName}`;
    const client = this.sdk.getClientByAddress(this.addr);
    const metadata = this.requestMetadata ?? new Metadata();
    this.logger = this.sdk.logger.child('request', {
      service: this.serviceName,
      method: this.methodName,
      address: this.addr,
      started_at: new Date().toISOString(),
    });
    this.logger.trace('Request initialized');

    // Normalize numeric overall deadline (absolute ms since epoch) into a Date
    // and work on a shallow copy so we don't mutate caller's object.
    const baseOptions: (Partial<CallOptions> & RetryOptions) | undefined = this.requestOptions
      ? { ...(this.requestOptions as Partial<CallOptions> & RetryOptions) }
      : undefined;
    if (baseOptions?.deadline !== undefined && typeof baseOptions.deadline === 'number') {
      baseOptions.deadline = new Date(
        baseOptions.deadline as number,
      ) as unknown as CallOptions['deadline'];
    }

    this.initialMetadata = new Promise<Metadata>((res) => (this._resolveInitialMd = res));
    this.trailingMetadata = new Promise<Metadata>((res) => (this._resolveTrailingMd = res));
    this.status = new Promise<GrpcStatus>((res) => (this._resolveStatus = res));
    this.requestId = new Promise<string>((res) => (this._resolveReqId = res));
    this.traceId = new Promise<string>((res) => (this._resolveTraceId = res));
    this.status = this.status.then((st) => {
      this._maybeStatus = st || this._maybeStatus;
      if (st) {
        this.logger = this.logger.withFields({
          status: this._maybeStatus,
        });
        this.logger.debug('Request status resolved');
      }
      return st;
    });

    const maxRetries = Math.max(0, baseOptions?.RetryCount ?? DEFAULT_RETRY_COUNT);
    this.logger = this.logger.withFields({ max_retries: maxRetries });

    // Generate idempotency key once per logical request and reuse across retries
    const useIdemp = shouldUseIdempotencyKey(methodName);
    const idempotencyKey = useIdemp ? generateIdempotencyKey() : undefined;
    if (useIdemp) {
      this.logger = this.logger.withFields({ idempotency_key: idempotencyKey });
      this.logger.trace('Using idempotency key for this request');
    }

    let overallMs = DEFAULT_TIMEOUT;
    if (baseOptions?.deadline !== undefined) {
      overallMs =
        typeof baseOptions.deadline === 'number'
          ? baseOptions.deadline
          : baseOptions.deadline.getTime();
      this.logger.trace('Using caller-provided overall deadline', { overall_ms: overallMs });
    } else {
      this.logger.trace('Using default overall deadline', { overall_ms: overallMs });
    }
    let perRetry = DEFAULT_PER_RETRY_TIMEOUT;
    if (baseOptions?.PerRetryTimeout !== undefined) {
      perRetry = baseOptions.PerRetryTimeout;
      this.logger.trace('Using caller-provided per-retry timeout', { per_retry_ms: perRetry });
    } else {
      this.logger.trace('Using default per-retry timeout', { per_retry_ms: perRetry });
    }
    const overallDeadline = new Date(Date.now() + overallMs);
    this.logger = this.logger.withFields({
      overall_timeout_ms: overallMs,
      per_retry_timeout_ms: perRetry,
      overall_deadline: overallDeadline,
    });

    // Possibly inject parentId into request
    injectParentIdIfNeeded(methodName, sdk?.parentId(), this.request, this.logger);

    // Ensure reset mask header for update methods if absent
    const isUpdate = (methodName || '').toLowerCase() === 'update';
    if (isUpdate) {
      this.logger.trace('Detected update method, inserting reset mask if needed');
      const existing = metadata.get(RESET_MASK_HEADER);
      if (!existing || existing.length === 0) {
        const rm = resetMaskFromMessage(this.request);
        if (rm) {
          metadata.set(RESET_MASK_HEADER, rm.marshal());
          this.logger.trace('Inserted reset mask into metadata', { reset_mask: rm });
        }
      }
    }

    // Ensure idempotency key header (same across retries)
    if (useIdemp && idempotencyKey) {
      const existing = metadata.get(IDEMPOTENCY_HEADER);
      if (!existing || existing.length === 0) {
        metadata.set(IDEMPOTENCY_HEADER, idempotencyKey);
        this.logger.trace('Inserted idempotency key into metadata');
      } else {
        this.logger = this.logger.withFields({ idempotency_key: existing });
        this.logger.trace('Idempotency key already set in metadata');
      }
    }

    // Start the request flow with retry
    this.result = new Promise<TRes>((resolve, reject) => {
      const runAttempt = (attempt: number) => {
        if (this._canceled) {
          this.logger.debug('Request canceled by client before attempt start', { attempt });
          const err = new CancelledError();
          this._resolveStatus(err.status!);
          reject(err);
          return;
        }

        let logger = this.logger.withFields({ attempt });
        logger.trace('Starting request attempt');

        // Compute a per-retry deadline relative to now, but clip it to the
        // overall deadline if one was provided and is earlier.
        let perDeadline = new Date(Date.now() + perRetry);
        if (perDeadline.getTime() > overallDeadline.getTime()) {
          perDeadline = overallDeadline;
        }
        const deadlineOpt = {
          ...(baseOptions ?? {}),
          deadline: perDeadline,
        } as Partial<CallOptions>;

        logger = logger.withFields({
          per_retry_deadline: perDeadline,
          maxRetries,
          perRetryMs: perRetry,
        });

        logger.debug('Request attempt starting');

        const call = client.makeUnaryRequest(
          path,
          this.serializer,
          this.deserializer,
          this.request,
          metadata,
          deadlineOpt,
          (err, resp) => {
            try {
              this._calls.delete(call);
              call.removeAllListeners();
            } catch (err) {
              logger.warn('Error during call cleanup', { err });
            }
            logger.trace('Request attempt removed from active set', {
              active_calls: this._calls.size,
            });
            if (err) {
              logger.trace('Request attempt returned error', { err });
              call.cancel(); // ensure call is fully closed

              const wrapped = err as NebiusGrpcError;
              // Metadata-derived requestId/traceId if any
              if (wrapped?.metadata) {
                const md = wrapped.metadata as Metadata;
                this._safeResolveIdsFromMd(md);
              }
              // Determine retriable
              const retriable = this._isRetriableError(wrapped);

              const errLogger = logger.withFields({ err: wrapped, is_retriable: retriable });
              errLogger.error('Request attempt failed');

              if (retriable && attempt < maxRetries && !this._canceled) {
                errLogger.trace('Retrying request attempt after retriable error');
                runAttempt(attempt + 1);
                return;
              }

              if (retriable) {
                errLogger.error('Request retries exhausted, final failure');
              } else if (this._canceled) {
                errLogger.warn('Request was canceled, rejecting');
              } else {
                errLogger.error('Request failed (non-retriable)');
              }
              errLogger.trace('Final request error, rejecting');
              // Resolve status even on error
              const st =
                decodeStatusFromError(err) ??
                GrpcStatus.create({
                  code: err.code,
                  message: err.message,
                  details: [],
                });
              this._resolveStatus(st);
              reject(wrapped);
              return;
            } else if (!resp) {
              logger.trace('Request attempt returned neither error nor response, failing');
              // Handle missing response
              const st = GrpcStatus.create({
                code: StatusCode.UNKNOWN.code,
                message: 'Neither response, nor error received from server',
                details: [],
              });
              this._resolveStatus(st);
              reject(Error('Neither response, nor error received from server'));
              return;
            }
            logger.debug('Request attempt succeeded');
            resolve(resp);
          },
        );

        logger.trace('Request attempt sent, attaching listeners');
        // Attach event listeners for metadata and status
        call.on('metadata', (md2: Metadata) => {
          logger.trace('Received initial metadata');
          this._resolveInitialMd(md2);
          this._safeResolveIdsFromMd(md2);
        });
        call.on('status', (s) => {
          logger.trace('Received status event', { status: s });
          const st = decodeStatusFromStatusEvent(s);
          this._resolveStatus(st);
          const md: Metadata | undefined = s?.metadata;
          if (md) this._safeResolveIdsFromMd(md);
          if (s?.metadata) this._resolveTrailingMd(s.metadata);
        });

        // track active call for possible cancellation/cleanup
        this._calls.add(call);
        this.logger.trace('Tracking call for potential cancellation', { calls: this._calls.size });
      };

      runAttempt(0);
    });
  }

  [custom](): string {
    let ret = `Request(${this.serviceName}/${this.methodName}@${this.addr}`;
    if (this._maybeReqId) ret += ` requestId=${this._maybeReqId}`;
    if (this._maybeTraceId) ret += ` traceId=${this._maybeTraceId}`;
    if (this._maybeStatus) ret += ` status=${this._maybeStatus.code}`;
    return ret + ')';
  }
  [customJson](): Record<string, unknown> {
    const base: Record<string, unknown> = {
      service: this.serviceName,
      method: this.methodName,
      address: this.addr,
    };
    if (this._maybeReqId) base.requestId = this._maybeReqId;
    if (this._maybeTraceId) base.traceId = this._maybeTraceId;
    if (this._maybeStatus) base.status = inspectJson(this._maybeStatus);
    return base;
  }

  private _safeResolveIdsFromMd(md?: Metadata) {
    const reqId = mdGetString(md, 'x-request-id') || '';
    const traceId = mdGetString(md, 'x-trace-id') || '';
    if (reqId) {
      this._maybeReqId = reqId;
      this._resolveReqId(reqId);
    }
    if (traceId) {
      this._maybeTraceId = traceId;
      this._resolveTraceId(traceId);
    }
    if (reqId || traceId) {
      this.logger = this.logger.withFields({
        requestId: this._maybeReqId,
        traceId: this._maybeTraceId,
      });
      this.logger.debug('Resolved request/trace IDs from metadata');
    }
  }

  private _isRetriableError(err: NebiusGrpcError): boolean {
    // Network/system-level errors
    const sysCode = (err && err.code) as string | number | undefined;
    if (typeof sysCode === 'string') {
      const transientErrnos = new Set([
        'ECONNRESET',
        'ECONNREFUSED',
        'EAI_AGAIN',
        'ETIMEDOUT',
        'ENOTFOUND',
        'EHOSTUNREACH',
        'EPIPE',
      ]);
      if (transientErrnos.has(sysCode)) {
        this.logger.trace('Error is a transient system error', { sys_code: sysCode });
        return true;
      }
    }

    // gRPC codes
    const grpcCode: number | undefined =
      typeof sysCode === 'number' ? (sysCode as number) : (err?.code as number | undefined);
    if (grpcCode !== undefined && DefaultRetriableCodes.includes(StatusCode.fromNumber(grpcCode))) {
      this.logger.trace('Error has retriable gRPC status code', { grpc_code: grpcCode });
      return true;
    }

    // Our wrapped NebiusGrpcError may carry serviceErrors with retryType
    const seList: NebiusServiceError[] | undefined =
      (err?.serviceErrors as NebiusServiceError[]) || undefined;
    if (Array.isArray(seList)) {
      for (const se of seList) {
        if (se.retryType === ServiceError_RetryType.CALL) {
          this.logger.trace('Error has retriable service error', { service_error: se });
          return true;
        }
      }
    }
    return false;
  }
  // Allow callers to cancel the in-flight request and prevent further retries
  public cancel(reason?: string): void {
    if (this._canceled) {
      this.logger.trace('Request already canceled', { reason });
      return;
    }
    this._canceled = true;
    this.logger.debug('Cancelling request', { reason });
    // Cancel any tracked calls and detach listeners to help GC
    for (const c of this._calls) {
      try {
        this.logger.trace('Cancelling call', { call: c });
        c.cancel();
        c.removeAllListeners();
      } catch (err) {
        this.logger.warn('Error cancelling call', { err });
      }
    }
    this.logger.trace('All calls cancelled, clearing tracked calls');
    this._calls.clear();
  }
}

// Helper: get first string value from metadata by key
function mdGetString(md: Metadata | undefined, key: string): string | undefined {
  if (!md) return undefined;
  const values = md.get(key);
  for (const v of values) {
    if (typeof v === 'string') return v;
    if (v instanceof Buffer) return v.toString('utf8');
  }
  return undefined;
}

// Decode google.rpc.Status from grpc error metadata
function decodeStatusFromError(err: GrpcServiceError): GrpcStatus | undefined {
  try {
    const bin = err.metadata?.get('grpc-status-details-bin');
    if (!bin || bin.length === 0) return undefined;
    const first = bin[0];
    const bytes =
      first instanceof Buffer
        ? new Uint8Array(first)
        : typeof first === 'string'
          ? Buffer.from(first, 'base64')
          : undefined;
    if (!bytes) return undefined;
    return GrpcStatus.decode(bytes);
  } catch {
    return undefined;
  }
}

function decodeStatusFromStatusEvent(
  s:
    | {
        code?: number;
        details?: string;
        metadata?: Metadata;
      }
    | undefined,
): GrpcStatus {
  if (!s) return GrpcStatus.create({ code: StatusCode.UNKNOWN.code, message: '', details: [] });
  try {
    const bin = s.metadata?.get('grpc-status-details-bin');
    if (bin && bin.length > 0) {
      const first = bin[0];
      const bytes =
        first instanceof Buffer
          ? new Uint8Array(first)
          : typeof first === 'string'
            ? Buffer.from(first, 'base64')
            : undefined;
      if (bytes) return GrpcStatus.decode(bytes);
    }
  } catch {
    /* ignore */
  }
  return GrpcStatus.create({
    code: (s.code ?? StatusCode.UNKNOWN.code) as number,
    message: s.details ?? '',
    details: [],
  });
}

// Inject parentId based on method name and sdk-provided profileParentId
// any is necessary because here we patch all requests duck-style
function injectParentIdIfNeeded(
  methodName: string | undefined,
  profileParentId: string | undefined,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  req: any,
  logger: Logger,
) {
  if (!profileParentId) {
    logger.trace('No profile parentId available, skipping injection');
    return;
  }
  if (!req || typeof req !== 'object') {
    logger.trace('Request is not an object, skipping parentId injection');
    return;
  }
  const m = (methodName || '').toLowerCase();
  if (m === 'list' || m === 'getbyname') {
    if (Object.prototype.hasOwnProperty.call(req, 'parentId')) {
      if (req.parentId === '' || req.parentId === undefined || req.parentId === null) {
        logger.trace('List/GetByName request missing parentId, injecting from profile');
        req.parentId = profileParentId;
      }
    }
    return;
  }
  if (m !== 'update') {
    const md = req.metadata;
    if (md && typeof md === 'object' && Object.prototype.hasOwnProperty.call(md, 'parentId')) {
      if (md.parentId === '' || md.parentId === undefined || md.parentId === null) {
        logger.trace('Request with metadata missing parentId, injecting from profile');
        md.parentId = profileParentId;
      }
    }
  } else {
    logger.trace('Update method, skipping parentId injection');
  }
}
