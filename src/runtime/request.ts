/**
 * Runs generated unary SDK requests.
 *
 * Use {@link Request} to await a response, inspect call diagnostics, or cancel
 * a call. Use {@link RetryOptions} to control its timeout and retry policy.
 *
 * @packageDocumentation
 */

import * as crypto from 'node:crypto';

import {
  type CallOptions,
  type ClientUnaryCall,
  type ServiceError as GrpcServiceError,
  Metadata,
} from '@grpc/grpc-js';

import { Status as GrpcStatus, Code as StatusCode } from '../api/google/rpc/index.js';
import { ServiceError_RetryType } from '../api/nebius/common/v1/index.js';
import { SDKInterface } from '../sdk.js';
import { NebiusGrpcError } from './error.js';
import { Mask } from './fieldmask.js';
import { OperationValidationError } from './operation.js';
import { attachMessageDescriptor, type MessageDescriptor } from './protos/core.js';
import { resetMaskFromMessage } from './resetmask.js';
import { Cancelable, TimeoutError, withTimeout } from './util/cancelable.js';
import { custom, customJson, inspectJson, Logger } from './util/logging.js';

import type { AuthorizationOptions } from './authorization/provider.js';

/**
 * Controls the timeout and retry policy for one logical request.
 *
 * All values are milliseconds except {@link RetryOptions.RetryCount}. A gRPC
 * `deadline` in the same call-options object limits the complete request. The
 * SDK uses a 15-minute deadline when you omit it.
 *
 * @example
 * ```ts
 * import { Metadata } from '@grpc/grpc-js';
 * import {
 *   BucketService,
 *   GetBucketRequest,
 * } from '@nebius/js-sdk/api/nebius/storage/v1/index';
 *
 * async function getBucket(client: BucketService) {
 *   const call = client.get(
 *     GetBucketRequest.create({ id: 'bucket-id' }),
 *     new Metadata(),
 *     {
 *       deadline: new Date(Date.now() + 30_000),
 *       RequestTimeout: 20_000,
 *       PerRetryTimeout: 5_000,
 *       RetryCount: 2,
 *     },
 *   );
 *   return call.result;
 * }
 * ```
 */
export interface RetryOptions {
  /**
   * Limits one authenticated request window.
   *
   * The default is 60,000 milliseconds.
   */
  RequestTimeout?: number;
  /**
   * Limits each gRPC attempt.
   *
   * The default is 20,000 milliseconds. The overall deadline and
   * {@link RetryOptions.RequestTimeout} can shorten an attempt.
   */
  PerRetryTimeout?: number;
  /**
   * Sets the number of retries after the first attempt.
   *
   * The default is 2, for three total attempts. Set this value to `0` to make only one attempt.
   */
  RetryCount?: number;
  /** Limits authorization and request execution. The default is 15 minutes. */
  AuthTimeout?: number;
  /** Disables SDK authorization for this call. */
  authorizationDisable?: boolean;
  /** Controls credential renewal for this call. */
  authorizationOptions?: AuthorizationOptions;
  /** Delays each retry in milliseconds. The attempt number starts at one. */
  retryBackoff?: (attempt: number) => number;
  /** Adds an explicit select mask to this call. */
  selectMask?: string;
  /** Replaces automatic reset-mask discovery for this call. */
  resetMask?: string;
}

/**
 * Contains the gRPC status codes that cause an automatic retry by default.
 *
 * The runtime can also retry selected transport failures, HTTP 52x failures,
 * and service errors that explicitly request a call retry.
 */
export const DefaultRetriableCodes: StatusCode[] = [
  StatusCode.RESOURCE_EXHAUSTED,
  StatusCode.UNAVAILABLE,
];

/**
 * Checks whether an SDK request error is safe to retry.
 *
 * This is shared by the request retry loop and long-running operation polling.
 */
export function isRetriableError(err: unknown): boolean {
  if (!err || typeof err !== 'object') return false;
  const grpcError = err as NebiusGrpcError;

  // Service decisions take precedence over transport retry defaults.
  if (grpcError.code === StatusCode.CANCELLED.code) return false;
  for (const detail of grpcError.serviceErrors ?? []) {
    if (detail.retryType === ServiceError_RetryType.CALL) return true;
    if (
      detail.retryType === ServiceError_RetryType.NOTHING ||
      detail.retryType === ServiceError_RetryType.UNIT_OF_WORK
    ) {
      return false;
    }
  }

  // Network/system-level errors
  const sysCode = grpcError.code as string | number | undefined;
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
    if (transientErrnos.has(sysCode)) return true;
  }

  // gRPC codes
  const grpcCode = typeof sysCode === 'number' ? sysCode : undefined;
  if (grpcCode !== undefined && DefaultRetriableCodes.includes(StatusCode.fromNumber(grpcCode))) {
    return true;
  }

  if (grpcCode === UNKNOWN_GRPC_CODE && hasUnexpectedHttp52xStatus(grpcError)) return true;

  return false;
}

const UNKNOWN_GRPC_CODE = StatusCode.UNKNOWN.code;

const HTTP_52X_STATUS_PATTERNS = [
  /\bunexpected\s+http\s+status(?:\s+code)?(?:\s+received\s+from\s+server)?\s*[:=]?\s*(?<code>\d{3})/gi,
  /\breceived\s+http2?\s+header\s+with\s+status\s*[:=]?\s*(?<code>\d{3})/gi,
  /\bhttp(?:\/2|2)?\s+status(?:\s+code)?\s*[:=]?\s*(?<code>\d{3})/gi,
];

/**
 * Describes a generated unary method to the request runtime.
 *
 * Generated service clients normally create this value. Application code does
 * not need to construct it.
 */
export interface RequestSpec<TReq> {
  /** Marks anonymous API methods. */
  authorizationDisable?: boolean;
  /** Returns allowed parent types from the resource metadata annotation. */
  metadataParentTypes?: () => readonly string[] | undefined;
  /** Contains the gRPC method path, such as `/package.Service/Get`. */
  path: string;
  /** Serializes the request message for gRPC. */
  requestSerialize: (value: TReq) => Buffer;
  /** Copies a generated request through its protobuf codec. */
  requestDeserialize?: (value: Buffer) => TReq;
  /**
   * Controls the `x-resetmask` header.
   *
   * Update methods send the header by default. Set this value to `false` to
   * disable that behavior for an update method.
   */
  sendResetMask?: boolean;
  /** Returns schema data used to build a reset mask. */
  requestDescriptor?: () => MessageDescriptor | undefined;
  /** Contains method-specific ID annotation overrides. */
  requestFields?: readonly {
    fieldPath: string;
    nid?: { resource?: readonly string[]; parentResource?: readonly string[] };
  }[];
}

/** Defines the shape of a generated unary gRPC call function. */
export type CallCreator<TReq, TRes> = (
  request: TReq,
  metadata: Metadata | undefined,
  options: Partial<CallOptions> | undefined,
  callback: (error: GrpcServiceError | null, response: TRes) => void,
) => ClientUnaryCall;

const RESET_MASK_HEADER = 'x-resetmask';
const IDEMPOTENCY_HEADER = 'x-idempotency-key';

function getRelativeTimeoutMs(deadline: CallOptions['deadline']): number {
  if (deadline instanceof Date) {
    return Math.max(0, deadline.getTime() - Date.now());
  }
  if (typeof deadline === 'number') {
    return Math.max(0, deadline - Date.now());
  }
  return 0;
}

function shouldUseIdempotencyKey(methodName?: string): boolean {
  if (!methodName) return false;
  const m = methodName.toLowerCase();
  // All unary requests carry one logical key, as in GoSDK and PySDK.
  return m.length > 0;
}

function generateIdempotencyKey(): string {
  try {
    // Prefer crypto.randomUUID if available (RFC 4122 v4)
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

const DEFAULT_OVERALL_TIMEOUT = 15 * 60000; // 15 minutes
const DEFAULT_REQUEST_TIMEOUT = 60000; // 1 minute
const DEFAULT_RETRY_COUNT = 2;
const DEFAULT_PER_RETRY_TIMEOUT = DEFAULT_REQUEST_TIMEOUT / 3;

function cancelledError(reason?: string): NebiusGrpcError {
  const message = reason ? `Request cancelled on client: ${reason}` : 'Request cancelled on client';
  return new NebiusGrpcError(
    Object.assign(new Error(message), {
      code: StatusCode.CANCELLED.code,
      details: message,
      metadata: new Metadata(),
    }),
    GrpcStatus.create({ code: StatusCode.CANCELLED.code, message, details: [] }),
  );
}

/**
 * Runs one unary SDK request and exposes its result and diagnostics.
 *
 * Generated service methods return this object. You can await the object
 * directly because it implements `PromiseLike`, or you can await
 * {@link Request.result}. Keep the object when you also need metadata, status,
 * request IDs, or cancellation.
 *
 * The runtime adds authorization metadata when a provider exists. It adds one
 * idempotency key to unary methods and reuses that key for every retry. For
 * update methods, it can also create an `x-resetmask` header from the request.
 *
 * @example
 * ```ts
 * import {
 *   BucketService,
 *   GetBucketRequest,
 * } from '@nebius/js-sdk/api/nebius/storage/v1/index';
 *
 * async function inspectRequest(client: BucketService) {
 *   const call = client.get(GetBucketRequest.create({ id: 'bucket-id' }));
 *   try {
 *     const resource = await call;
 *     const status = await call.status;
 *     console.log(resource, status.code);
 *   } catch (error) {
 *     console.error('request failed', error);
 *   }
 * }
 * ```
 *
 * @typeParam TReq The generated request message type.
 * @typeParam TRes The generated response type.
 */
export class Request<TReq, TRes> implements PromiseLike<TRes> {
  /** Contains the fully qualified runtime type name. */
  public readonly $type: 'nebius.sdk.Request' = 'nebius.sdk.Request';
  /** Resolves with the response, or rejects with the final request error. */
  readonly result: Promise<TRes>;
  /** Resolves with the response headers when gRPC reports them. */
  readonly initialMetadata: Promise<Metadata>;
  /** Resolves with the response trailers when gRPC reports them. */
  readonly trailingMetadata: Promise<Metadata>;
  /** Resolves with the final Google RPC status for success or failure. */
  readonly status: Promise<GrpcStatus>;
  /**
   * Resolves with `x-request-id` when the server returns that header.
   *
   * Resolves with an empty string when the server omits the header.
   */
  readonly requestId: Promise<string>;
  /**
   * Resolves with `x-trace-id` when the server returns that header.
   *
   * Resolves with an empty string when the server omits the header.
   */
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
  private _canceled = false;
  private _done = false;
  private _authRecoveryDecisionPending = false;
  private readonly cancellation = new Cancelable();
  private _calls = new Set<ClientUnaryCall>();
  private readonly serviceName: string;
  private readonly methodName: string;
  private readonly path: string;
  private readonly serializer: (value: TReq) => Buffer;
  private readonly sendResetMask: boolean;

  /**
   * Creates and starts a request.
   *
   * Generated service clients call this constructor. Construction starts
   * authorization and the gRPC call without waiting for the result.
   *
   * @throws Error if option validation, serialization, or client acquisition fails.
   */
  constructor(
    private sdk: SDKInterface,
    spec: RequestSpec<TReq>,
    private addr: string,
    private deserializer: (value: Buffer) => TRes,
    private request: TReq,
    private requestMetadata: Metadata | undefined,
    private requestOptions?: (Partial<CallOptions> & RetryOptions) | undefined,
  ) {
    this.request = spec.requestDeserialize
      ? spec.requestDeserialize(spec.requestSerialize(this.request))
      : this.request && typeof this.request === 'object'
        ? { ...this.request }
        : this.request;
    this.path = normalizeRequestPath(spec.path);
    const names = extractNamesFromPath(this.path);
    this.serviceName = names.serviceName;
    this.methodName = names.methodName;
    this.serializer = spec.requestSerialize;
    const requestDescriptor = spec.requestDescriptor?.();
    if (requestDescriptor && this.request && typeof this.request === 'object') {
      this.request = attachMessageDescriptor(this.request as object, requestDescriptor) as TReq;
    }

    const path = this.path;
    const methodName = this.methodName;
    this.sendResetMask =
      spec.sendResetMask === true ||
      ((methodName || '').toLowerCase() === 'update' && spec.sendResetMask !== false);
    const client = this.sdk.getClientByAddress(this.addr);
    const metadata = this.requestMetadata?.clone() ?? new Metadata();
    this.logger = this.sdk.logger.child('request', {
      service: this.serviceName,
      method: this.methodName,
      address: this.addr,
      started_at: new Date().toISOString(),
    });
    this.logger.trace('Request initialized');

    // Normalize numeric overall deadline (absolute ms since epoch) into a Date
    // and work on a shallow copy so we don't mutate caller's object.
    type ExtendedCallOptions = Partial<CallOptions> &
      RetryOptions & {
        authorizationDisable?: boolean;
        authorizationOptions?: AuthorizationOptions;
      };
    const defaults = sdk.requestOptions?.();
    const baseOptions: ExtendedCallOptions = {
      ...defaults,
      ...this.requestOptions,
      ...(spec.authorizationDisable ? { authorizationDisable: true } : {}),
      authorizationOptions: this.requestOptions?.authorizationOptions
        ? { ...this.requestOptions.authorizationOptions }
        : defaults?.authorizationOptions
          ? { ...defaults.authorizationOptions }
          : undefined,
    };
    for (const key of ['RequestTimeout', 'PerRetryTimeout', 'AuthTimeout'] as const) {
      const value = baseOptions[key];
      if (value !== undefined && !Number.isFinite(value)) {
        throw new RangeError(`${key} must be finite.`);
      }
    }
    if (
      baseOptions.RetryCount !== undefined &&
      (!Number.isInteger(baseOptions.RetryCount) || baseOptions.RetryCount < 0)
    ) {
      throw new RangeError('RetryCount must be a non-negative integer.');
    }
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

    let overallMs = baseOptions.AuthTimeout ?? DEFAULT_OVERALL_TIMEOUT;
    if (baseOptions?.deadline !== undefined) {
      overallMs = Math.min(overallMs, getRelativeTimeoutMs(baseOptions.deadline));
      this.logger.trace('Using caller-provided overall deadline', { overall_ms: overallMs });
    } else {
      this.logger.trace('Using default overall deadline', { overall_ms: overallMs });
    }
    let requestTimeout = DEFAULT_REQUEST_TIMEOUT;
    if (baseOptions?.RequestTimeout !== undefined) {
      requestTimeout = baseOptions.RequestTimeout;
      this.logger.trace('Using caller-provided request timeout', {
        request_timeout_ms: requestTimeout,
      });
    } else {
      this.logger.trace('Using default request timeout', { request_timeout_ms: requestTimeout });
    }
    let perRetry = DEFAULT_PER_RETRY_TIMEOUT;
    if (baseOptions?.PerRetryTimeout !== undefined) {
      perRetry = baseOptions.PerRetryTimeout;
      this.logger.trace('Using caller-provided per-retry timeout', { per_retry_ms: perRetry });
    } else {
      this.logger.trace('Using default per-retry timeout', { per_retry_ms: perRetry });
    }
    if (!Number.isFinite(overallMs)) throw new RangeError('Request deadline must be finite.');
    const overallDeadline = new Date(Date.now() + overallMs);
    this.logger = this.logger.withFields({
      overall_timeout_ms: overallMs,
      per_retry_timeout_ms: perRetry,
      overall_deadline: overallDeadline,
    });

    // Possibly inject parentId into request
    injectParentDefaults(
      methodName,
      sdk.parentId(),
      sdk.tenantId?.(),
      this.request,
      requestDescriptor,
      spec,
    );

    if (baseOptions.selectMask !== undefined) metadata.add('x-selectmask', baseOptions.selectMask);
    if (baseOptions.resetMask !== undefined) metadata.add(RESET_MASK_HEADER, baseOptions.resetMask);

    // Ensure reset mask header for update methods if absent
    if (this.sendResetMask) {
      this.logger.trace('sendResetMask enabled, inserting reset mask if needed');
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

    // Keep diagnostics from the final attempt, including failures before dispatch.
    let initialMd = new Metadata();
    let trailingMd = new Metadata();
    let finalStatus: GrpcStatus | undefined;
    const finish = (err?: unknown) => {
      this._done = true;
      this._resolveInitialMd(initialMd);
      this._resolveTrailingMd(trailingMd);
      this._safeResolveIdsFromMd(initialMd);
      this._safeResolveIdsFromMd(trailingMd);
      this._resolveReqId(this._maybeReqId ?? '');
      this._resolveTraceId(this._maybeTraceId ?? '');
      this._resolveStatus(
        finalStatus ??
          GrpcStatus.create({
            code: err
              ? ((err as GrpcServiceError).code ?? StatusCode.UNKNOWN.code)
              : StatusCode.OK.code,
            message: err instanceof Error ? err.message : '',
            details: [],
          }),
      );
    };
    const deadlineError = () =>
      new NebiusGrpcError(
        Object.assign(new Error('Request deadline exceeded.'), {
          code: StatusCode.DEADLINE_EXCEEDED.code,
          details: 'Request deadline exceeded.',
          metadata: trailingMd,
        }),
      );
    const run = async (): Promise<TRes> => {
      const provider = this.sdk.getAuthorizationProvider();
      const auth =
        !baseOptions.authorizationDisable && metadata.get('authorization').length === 0
          ? provider?.authenticator(baseOptions.authorizationOptions)
          : undefined;
      let authRetry = 0;
      let recoveryRetry = 0;
      let rejectedCredential = false;
      let rejectedAuthorization: string | Buffer | undefined;
      let rejectedError: unknown;
      while (true) {
        if (this._canceled) throw cancelledError();
        if (Date.now() >= overallDeadline.getTime()) throw deadlineError();
        const md = metadata.clone();
        if (auth) {
          try {
            await this.cancellation.withTimeout(
              auth.authenticate(
                md,
                Math.max(0, overallDeadline.getTime() - Date.now()),
                rejectedCredential
                  ? {
                      ...baseOptions.authorizationOptions,
                      renewRequired: true,
                      renewSynchronous: true,
                    }
                  : baseOptions.authorizationOptions,
              ),
              Math.max(0, overallDeadline.getTime() - Date.now()),
            );
            if (rejectedCredential && md.get('authorization')[0] === rejectedAuthorization) {
              throw rejectedError;
            }
          } catch (err) {
            if (this._canceled) throw cancelledError();
            if (err instanceof TimeoutError || Date.now() >= overallDeadline.getTime()) {
              throw deadlineError();
            }
            if (rejectedCredential && err === rejectedError) throw err;
            if (
              ++authRetry < (baseOptions.authorizationOptions?.maxRetries ?? 2) &&
              auth.canRetry?.(err, baseOptions.authorizationOptions)
            ) {
              continue;
            }
            if (rejectedCredential) {
              if (err instanceof AggregateError && err.errors.includes(rejectedError)) throw err;
              throw new AggregateError([err, rejectedError], 'Credential recovery failed.');
            }
            throw new NebiusGrpcError(
              Object.assign(
                new Error(err instanceof Error ? err.message : 'Authentication failed.'),
                {
                  code: StatusCode.UNAUTHENTICATED.code,
                  details: err instanceof Error ? err.message : 'Authentication failed.',
                  metadata: new Metadata(),
                },
              ),
            );
          }
        }
        const requestDeadline = Date.now() + requestTimeout;
        let renew = false;
        for (let attempt = 0; ; attempt++) {
          if (this._canceled) throw cancelledError();
          const deadline = Math.min(requestDeadline, overallDeadline.getTime());
          if (Date.now() >= deadline) throw deadlineError();
          const canRetryTransport = (err: unknown): boolean => {
            const retriable =
              isRetriableError(err) ||
              ((err as GrpcServiceError).code === StatusCode.DEADLINE_EXCEEDED.code &&
                !(err as NebiusGrpcError).serviceErrors?.some(
                  (detail) =>
                    detail.retryType === ServiceError_RetryType.NOTHING ||
                    detail.retryType === ServiceError_RetryType.UNIT_OF_WORK,
                ));
            return retriable && attempt < maxRetries && Date.now() < deadline;
          };
          initialMd = new Metadata();
          trailingMd = new Metadata();
          finalStatus = undefined;
          try {
            const response = await new Promise<TRes>((resolve, reject) => {
              let validationError: OperationValidationError | undefined;
              const call = client.makeUnaryRequest(
                path,
                this.serializer,
                (buffer) => {
                  try {
                    return this.deserializer(buffer);
                  } catch (error) {
                    // grpc-js converts deserializer exceptions into generic INTERNAL errors.
                    if (error instanceof OperationValidationError) validationError = error;
                    throw error;
                  }
                },
                this.request,
                md,
                {
                  ...baseOptions,
                  deadline: new Date(Math.min(Date.now() + perRetry, deadline)),
                },
                (err, resp) => {
                  this._calls.delete(call);
                  if (err) {
                    trailingMd = err.metadata ?? trailingMd;
                    finalStatus =
                      decodeStatusFromError(err) ??
                      GrpcStatus.create({ code: err.code, message: err.details, details: [] });
                    const failure = validationError ?? err;
                    const canRecover =
                      err.code === StatusCode.UNAUTHENTICATED.code &&
                      auth &&
                      recoveryRetry + 1 < (baseOptions.authorizationOptions?.maxRetries ?? 2);
                    this._authRecoveryDecisionPending = Boolean(canRecover);
                    if (!this._canceled && !canRecover && !canRetryTransport(failure)) {
                      this._done = true;
                    }
                    reject(failure);
                  } else if (resp === undefined || resp === null) {
                    reject(new Error('Neither response nor error received from server.'));
                  } else {
                    // A completed native response remains authoritative during cancellation.
                    this._done = true;
                    resolve(resp);
                  }
                },
              );
              call.on('metadata', (value: Metadata) => {
                initialMd = value;
              });
              call.on('status', (value) => {
                finalStatus = decodeStatusFromStatusEvent(value);
                trailingMd = value.metadata ?? trailingMd;
              });
              this._calls.add(call);
            });
            return response;
          } catch (err) {
            if (this._canceled && !this._done && !this._authRecoveryDecisionPending) {
              throw cancelledError();
            }
            let recovered = false;
            if (
              (err as GrpcServiceError).code === StatusCode.UNAUTHENTICATED.code &&
              auth &&
              ++recoveryRetry < (baseOptions.authorizationOptions?.maxRetries ?? 2)
            ) {
              try {
                recovered = auth.handleError
                  ? await withTimeout(
                      auth.handleError(
                        err,
                        baseOptions.authorizationOptions,
                        Math.max(0, overallDeadline.getTime() - Date.now()),
                      ),
                      Math.max(0, overallDeadline.getTime() - Date.now()),
                    )
                  : (auth.canRetry?.(err, baseOptions.authorizationOptions) ?? false);
              } catch (recoveryError) {
                this._done = true;
                if (Date.now() >= overallDeadline.getTime()) throw deadlineError();
                if (
                  recoveryError instanceof TimeoutError ||
                  recoveryError === err ||
                  (recoveryError instanceof AggregateError && recoveryError.errors.includes(err))
                ) {
                  throw recoveryError;
                }
                throw new AggregateError([recoveryError, err], 'Credential recovery failed.');
              } finally {
                this._authRecoveryDecisionPending = false;
              }
            }
            if (!recovered && !canRetryTransport(err)) {
              this._done = true;
              throw err;
            }
            if (this._canceled) throw cancelledError();
            if (recovered) {
              rejectedAuthorization = md.get('authorization')[0];
              rejectedError = err;
              rejectedCredential = true;
              renew = true;
              break;
            }
            // An individual attempt can time out while the logical request still has time.
            if (!canRetryTransport(err)) throw err;
            const delay = baseOptions.retryBackoff?.(attempt + 1) ?? 0;
            if (!Number.isFinite(delay) || delay < 0) {
              throw new RangeError('Retry backoff must be finite and non-negative.');
            }
            if (delay > 0) {
              await this.cancellation.sleep(Math.min(delay, Math.max(0, deadline - Date.now())));
            }
          }
        }
        if (!renew) throw new Error('Request retry state is invalid.');
      }
    };
    this.result = run().then(
      (response) => {
        finish();
        return response;
      },
      (err: unknown) => {
        if (err instanceof TimeoutError) err = deadlineError();
        if (this._canceled && !this._done) err = cancelledError();
        if (err instanceof NebiusGrpcError) {
          finalStatus =
            err.status ?? GrpcStatus.create({ code: err.code, message: err.details, details: [] });
        }
        finish(err);
        throw err;
      },
    );
  }

  /**
   * Registers handlers for the request result.
   *
   * This method makes awaiting the request equivalent to awaiting
   * {@link Request.result}.
   */
  then<TResult1 = TRes, TResult2 = never>(
    onfulfilled?: ((value: TRes) => TResult1 | PromiseLike<TResult1>) | undefined | null,
    onrejected?: ((reason: unknown) => TResult2 | PromiseLike<TResult2>) | undefined | null,
  ): Promise<TResult1 | TResult2> {
    return this.result.then(onfulfilled, onrejected);
  }

  /** Formats the current request state for Node.js inspection. */
  [custom](): string {
    let ret = `Request(${this.serviceName}/${this.methodName}@${this.addr}`;
    if (this._maybeReqId) ret += ` requestId=${this._maybeReqId}`;
    if (this._maybeTraceId) ret += ` traceId=${this._maybeTraceId}`;
    if (this._maybeStatus) ret += ` status=${this._maybeStatus.code}`;
    return ret + ')';
  }
  /** Returns a JSON-safe value for logs. */
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

  /**
   * Cancels active gRPC calls and prevents later retries.
   *
   * Cancellation is safe to call more than once. The result rejects with a
   * cancellation error after the active call reports cancellation.
   *
   * @example
   * ```ts
   * import {
   *   BucketService,
   *   GetBucketRequest,
   * } from '@nebius/js-sdk/api/nebius/storage/v1/index';
   *
   * async function getWithLocalTimeout(client: BucketService) {
   *   const call = client.get(GetBucketRequest.create({ id: 'bucket-id' }));
   *   const timer = setTimeout(() => call.cancel('local timeout'), 5_000);
   *   try {
   *     return await call.result;
   *   } finally {
   *     clearTimeout(timer);
   *   }
   * }
   * ```
   */
  public cancel(reason?: string): void {
    if (this._canceled || this._done) {
      this.logger.trace('Request already canceled', { reason });
      return;
    }
    this._canceled = true;
    // Keep the completed native error until recovery decides whether another attempt is possible.
    if (this._authRecoveryDecisionPending) return;
    this.cancellation.cancel();
    this.logger.debug('Cancelling request', { reason });
    // Cancel any tracked calls and detach listeners to help GC
    for (const c of this._calls) {
      try {
        this.logger.trace('Cancelling call', { call: c });
        c.cancel();
      } catch (err) {
        this.logger.warn('Error cancelling call', { err });
      }
    }
    this.logger.trace('All calls cancelled, clearing tracked calls');
    this._calls.clear();
  }
}

function hasUnexpectedHttp52xStatus(err: NebiusGrpcError): boolean {
  return [err.status?.message, err.details, err.message, String(err)].some((message) =>
    messageHasHttp52xStatus(message),
  );
}

function messageHasHttp52xStatus(message: string | undefined): boolean {
  if (!message) return false;

  for (const pattern of HTTP_52X_STATUS_PATTERNS) {
    pattern.lastIndex = 0;
    let match: RegExpExecArray | null;
    while ((match = pattern.exec(message)) !== null) {
      const rawCode = match.groups?.code ?? match[1];
      const code = Number(rawCode);
      if (Number.isInteger(code) && code >= 520 && code < 530) {
        return true;
      }
    }
  }
  return false;
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

const NID_PATTERN =
  /^(?<type>[a-z][a-z0-9]{2,49})-[a-z][a-z0-9]{2}[a-z0-9-]{1,71}[a-z0-9](?:--[a-z-][a-z0-9-]{0,9})?$/;

function allowedParent(value: string | undefined, allowed: readonly string[] | undefined): boolean {
  if (!value) return false;
  // Keep legacy unannotated requests compatible. Annotated defaults must be valid NIDs.
  if (allowed === undefined) return true;
  const match = NID_PATTERN.exec(value);
  const reserved = value.indexOf('--');
  return (
    !!match &&
    (reserved < 0 || /^--[a-z-][a-z0-9-]{0,9}$/.test(value.slice(reserved))) &&
    (allowed.length === 0 ||
      (allowed.length === 1 && allowed[0] === '*') ||
      allowed.includes(match.groups!.type))
  );
}

function settingMatches(value: string, path: string[]): boolean {
  let mask: Mask | null = Mask.parse(value);
  for (const key of path) {
    if (mask?.isEmpty()) return true;
    mask = mask?.getSubMask(key) ?? null;
  }
  return mask?.isEmpty() ?? false;
}

function injectParentDefaults<T>(
  method: string,
  parent: string | undefined,
  tenant: string | undefined,
  request: T,
  descriptor: MessageDescriptor | undefined,
  spec: RequestSpec<T>,
): void {
  if (
    spec.sendResetMask === true ||
    (method.toLowerCase() === 'update' && spec.sendResetMask !== false)
  ) {
    return;
  }
  if (!request || typeof request !== 'object') return;
  const req = request as Record<string, unknown>;
  const field = descriptor?.fields.parentId;
  const override = spec.requestFields?.find((value) =>
    settingMatches(value.fieldPath, ['parent_id']),
  )?.nid;
  if (
    ['list', 'listaggregated', 'getbyname'].includes(method.toLowerCase()) &&
    ('parentId' in req || field)
  ) {
    if (req.parentId) return;
    const allowed = override?.resource ?? field?.nid?.resource;
    for (const candidate of [parent, tenant]) {
      if (allowedParent(candidate, allowed ?? (descriptor ? [] : undefined))) {
        req.parentId = candidate;
        break;
      }
    }
  } else if ('metadata' in req || descriptor?.fields.metadata) {
    const md = (req.metadata ??
      descriptor?.fields.metadata?.message?.()?.create?.() ??
      {}) as Record<string, unknown>;
    if (md.parentId) return;
    const allowed =
      spec.requestFields?.find((value) =>
        settingMatches(value.fieldPath, ['metadata', 'parent_id']),
      )?.nid?.resource ??
      spec.requestFields?.find((value) => settingMatches(value.fieldPath, ['metadata']))?.nid
        ?.parentResource ??
      descriptor?.fields.metadata?.nid?.parentResource ??
      spec.metadataParentTypes?.();
    for (const candidate of [tenant, parent]) {
      if (allowedParent(candidate, allowed ?? (descriptor ? [] : undefined))) {
        req.metadata = { ...md, parentId: candidate };
      }
    }
  }
}

function normalizeRequestPath(path: string): string {
  if (!path) return '';
  return path.startsWith('/') ? path : `/${path}`;
}

function extractNamesFromPath(path: string): { serviceName: string; methodName: string } {
  const segments = (path.startsWith('/') ? path.slice(1) : path).split('/').filter(Boolean);
  return { serviceName: segments[0] ?? '', methodName: segments[1] ?? '' };
}
