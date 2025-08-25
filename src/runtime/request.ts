import type { ClientUnaryCall, ServiceError as GrpcServiceError, CallOptions } from '@grpc/grpc-js';
import { Metadata } from '@grpc/grpc-js';

import { Code as StatusCode, Status as GrpcStatus } from '../generated/google/rpc/index';
import {
  ServiceError as NebiusServiceError,
  ServiceError_RetryType,
} from '../generated/nebius/common/v1/index';

// Ensure global error interceptor is installed
import { NebiusGrpcError } from './error';
import { resetMaskFromMessage } from './resetmask';

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

export class Request<TReq, TRes, TOut = TRes> {
  // Promises
  readonly result: Promise<TOut>;
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

  constructor(args: {
    request: TReq;
    createCall: CallCreator<TReq, TRes>;
    metadata?: Metadata;
    options?: (Partial<CallOptions> & RetryOptions) | undefined;
    transformResponse?: (resp: TRes) => TOut;
    // New: info for parentId injection
    methodName?: string;
    profileParentId?: string;
  }) {
    const {
      request,
      createCall,
      metadata,
      options,
      transformResponse,
      methodName,
      profileParentId,
    } = args;

    this.initialMetadata = new Promise<Metadata>((res) => (this._resolveInitialMd = res));
    this.trailingMetadata = new Promise<Metadata>((res) => (this._resolveTrailingMd = res));
    this.status = new Promise<GrpcStatus>((res) => (this._resolveStatus = res));
    this.requestId = new Promise<string>((res) => (this._resolveReqId = res));
    this.traceId = new Promise<string>((res) => (this._resolveTraceId = res));

    const maxRetries = Math.max(0, options?.RetryCount ?? 0);
    const perRetry = options?.PerRetryTimeout;

    // Generate idempotency key once per logical request and reuse across retries
    const useIdemp = shouldUseIdempotencyKey(methodName);
    const idempotencyKey = useIdemp ? generateIdempotencyKey() : undefined;

    // Start the request flow with retry
    this.result = new Promise<TOut>((resolve, reject) => {
      const runAttempt = (attempt: number) => {
        let deadlineOpt: Partial<CallOptions> | undefined = options;
        if (perRetry && perRetry > 0) {
          deadlineOpt = {
            ...(options ?? {}),
            deadline: new Date(Date.now() + perRetry),
          } as Partial<CallOptions>;
        }

        // Possibly inject parentId into request
        try {
          injectParentIdIfNeeded(methodName, profileParentId, request);
        } catch {
          /* ignore injection failures */
        }

        // Ensure reset mask header for update methods if absent
        let md: Metadata | undefined = metadata;
        const isUpdate = (methodName || '').toLowerCase() === 'update';
        if (isUpdate) {
          if (!md) md = new Metadata();
          const existing = md.get(RESET_MASK_HEADER);
          if (!existing || existing.length === 0) {
            try {
              const rm = resetMaskFromMessage(request);
              if (rm) md.set(RESET_MASK_HEADER, rm.marshal());
            } catch {
              /* ignore */
            }
          }
        }

        // Ensure idempotency key header (same across retries)
        if (useIdemp && idempotencyKey) {
          if (!md) md = new Metadata();
          const existing = md.get(IDEMPOTENCY_HEADER);
          if (!existing || existing.length === 0) {
            md.set(IDEMPOTENCY_HEADER, idempotencyKey);
          }
        }

        const call = createCall(request, md ?? metadata, deadlineOpt, (err, resp) => {
          if (err) {
            const wrapped = err as NebiusGrpcError;
            // Metadata-derived requestId/traceId if any
            if (wrapped?.metadata) {
              const md = wrapped.metadata as Metadata;
              this._safeResolveIdsFromMd(md);
            }
            // Determine retriable
            const retriable = this._isRetriableError(wrapped);
            if (retriable && attempt < maxRetries) {
              runAttempt(attempt + 1);
              return;
            }
            // Resolve status even on error
            const st =
              decodeStatusFromError(err) ??
              GrpcStatus.create({
                code: err.code ?? StatusCode.UNKNOWN,
                message: err.message ?? String(err),
                details: [],
              });
            this._resolveStatus(st);
            reject(wrapped);
            return;
          }
          try {
            const out = (transformResponse ? transformResponse(resp) : resp) as TOut;
            resolve(out);
          } catch (e) {
            reject(e);
          }
        });

        // Attach event listeners for metadata and status
        call.on('metadata', (md2: Metadata) => {
          this._resolveInitialMd(md2);
          this._safeResolveIdsFromMd(md2);
        });
        call.on('status', (s) => {
          const st = decodeStatusFromStatusEvent(s);
          this._resolveStatus(st);
          const md: Metadata | undefined = s?.metadata;
          if (md) this._safeResolveIdsFromMd(md);
          if (s?.metadata) this._resolveTrailingMd(s.metadata);
        });
      };

      runAttempt(0);
    });
  }

  private _safeResolveIdsFromMd(md?: Metadata) {
    const reqId = mdGetString(md, 'x-request-id') || '';
    const traceId = mdGetString(md, 'x-trace-id') || '';
    if (reqId) this._resolveReqId(reqId);
    if (traceId) this._resolveTraceId(traceId);
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
      if (transientErrnos.has(sysCode)) return true;
    }

    // gRPC codes
    const grpcCode: number | undefined =
      typeof sysCode === 'number' ? (sysCode as number) : (err?.code as number | undefined);
    if (grpcCode !== undefined && DefaultRetriableCodes.includes(StatusCode.fromNumber(grpcCode))) {
      return true;
    }

    // Our wrapped NebiusGrpcError may carry serviceErrors with retryType
    const seList: NebiusServiceError[] | undefined =
      (err?.serviceErrors as NebiusServiceError[]) || undefined;
    if (Array.isArray(seList)) {
      for (const se of seList) {
        if (se.retryType === ServiceError_RetryType.CALL) return true;
      }
    }
    return false;
  }
}

// Backward-friendly alias used by generators
export type UnaryCall<TResponse = unknown> = Request<unknown, TResponse>;

export function wrapUnaryCall<TReq, TRes, TOut = TRes>(args: {
  request: TReq;
  createCall: CallCreator<TReq, TRes>;
  metadata?: Metadata;
  options?: (Partial<CallOptions> & RetryOptions) | undefined;
  transformResponse?: (resp: TRes) => TOut;
  methodName?: string;
  profileParentId?: string;
}): Request<TReq, TRes, TOut> {
  return new Request<TReq, TRes, TOut>(args);
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
) {
  if (!profileParentId || !req || typeof req !== 'object') return;
  const m = (methodName || '').toLowerCase();
  if (m === 'list' || m === 'getbyname') {
    if (Object.prototype.hasOwnProperty.call(req, 'parentId')) {
      if (req.parentId === '' || req.parentId === undefined || req.parentId === null) {
        req.parentId = profileParentId;
      }
    }
    return;
  }
  if (m !== 'update') {
    const md = req.metadata;
    if (md && typeof md === 'object' && Object.prototype.hasOwnProperty.call(md, 'parentId')) {
      if (md.parentId === '' || md.parentId === undefined || md.parentId === null) {
        md.parentId = profileParentId;
      }
    }
  }
}
