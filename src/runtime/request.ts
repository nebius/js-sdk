import type {
  ClientUnaryCall,
  ServiceError as GrpcServiceError,
  CallOptions,
} from '@grpc/grpc-js';
import { Metadata } from '@grpc/grpc-js';
import { Status as GrpcStatus } from '../generated/google/rpc/status';
import { Any } from '../generated/google/protobuf/any';
import {
  ServiceError as NebiusServiceError,
  ServiceError_RetryType,
  BadRequest,
  BadRequest_Violation,
} from '../generated/nebius/common/v1/error';
import { Code as StatusCode } from '../generated/google/rpc/code';
// Ensure global error interceptor is installed
import './error';
import { resetMaskFromMessage } from './resetmask';

export interface RetryOptions {
  PerRetryTimeout?: number; // ms
  RetryCount?: number;
}

export const DefaultRetriableCodes: number[] = [
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
    const { request, createCall, metadata, options, transformResponse, methodName, profileParentId } = args;

    this.initialMetadata = new Promise<Metadata>((res) => (this._resolveInitialMd = res));
    this.trailingMetadata = new Promise<Metadata>((res) => (this._resolveTrailingMd = res));
    this.status = new Promise<GrpcStatus>((res) => (this._resolveStatus = res));
    this.requestId = new Promise<string>((res) => (this._resolveReqId = res));
    this.traceId = new Promise<string>((res) => (this._resolveTraceId = res));

    const maxRetries = Math.max(0, options?.RetryCount ?? 0);
    const perRetry = options?.PerRetryTimeout;

    // Start the request flow with retry
    this.result = new Promise<TOut>((resolve, reject) => {
      const runAttempt = (attempt: number) => {
        let deadlineOpt: Partial<CallOptions> | undefined = options;
        if (perRetry && perRetry > 0) {
          deadlineOpt = { ...(options ?? {}), deadline: new Date(Date.now() + perRetry) } as Partial<CallOptions>;
        }

        // Possibly inject parentId into request
        const reqToSend: any = request as any;
        try {
          injectParentIdIfNeeded(methodName, profileParentId, reqToSend);
        } catch { /* ignore injection failures */ }

        // Ensure reset mask header for update methods if absent
        let md: Metadata | undefined = metadata;
        const isUpdate = (methodName || '').toLowerCase() === 'update';
        if (isUpdate) {
          if (!md) md = new Metadata();
          const existing = md.get(RESET_MASK_HEADER);
          if (!existing || existing.length === 0) {
            try {
              const rm = resetMaskFromMessage(reqToSend);
              if (rm) md.set(RESET_MASK_HEADER, rm.marshal());
            } catch { /* ignore */ }
          }
        }

        const call = createCall(reqToSend, md ?? metadata, deadlineOpt, (err, resp) => {
          if (err) {
            const wrapped = err as any;
            // Metadata-derived requestId/traceId if any
            if ((wrapped as any)?.metadata) {
              const md = (wrapped as any).metadata as Metadata;
              this._safeResolveIdsFromMd(md);
            }
            // Determine retriable
            const retriable = this._isRetriableError(wrapped);
            if (retriable && attempt < maxRetries) {
              runAttempt(attempt + 1);
              return;
            }
            // Resolve status even on error
            const st = decodeStatusFromError(err) ?? { code: (err as any).code ?? StatusCode.UNKNOWN, message: (err as any).message ?? String(err), details: [] };
            this._resolveStatus(st);
            reject(wrapped);
            return;
          }
          try {
            const out = (transformResponse ? transformResponse(resp) : (resp as any)) as TOut;
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
        call.on('status', (s: any) => {
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

  private _isRetriableError(err: any): boolean {
    // Network/system-level errors
    const sysCode = (err && (err.code as any)) as string | number | undefined;
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
    const grpcCode: number | undefined = typeof sysCode === 'number' ? (sysCode as number) : (err?.code as number | undefined);
    if (grpcCode !== undefined && DefaultRetriableCodes.includes(grpcCode)) return true;

    // Our wrapped NebiusGrpcError may carry serviceErrors with retryType
    const seList: NebiusServiceError[] | undefined = (err?.serviceErrors as NebiusServiceError[]) || undefined;
    if (Array.isArray(seList)) {
      for (const se of seList) {
        if (se.retryType === ServiceError_RetryType.CALL) return true;
      }
    }
    return false;
  }
}

// Backward-friendly alias used by generators
export type UnaryCall<TResponse = unknown> = Request<any, TResponse>;

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
    const bytes = first instanceof Buffer ? new Uint8Array(first) : typeof first === 'string' ? Buffer.from(first, 'base64') : undefined;
    if (!bytes) return undefined;
    return GrpcStatus.decode(bytes);
  } catch {
    return undefined;
  }
}

function decodeStatusFromStatusEvent(s: { code?: number; details?: string; metadata?: Metadata } | undefined): GrpcStatus {
  if (!s) return { code: StatusCode.UNKNOWN, message: '', details: [] };
  try {
    const bin = s.metadata?.get('grpc-status-details-bin');
    if (bin && bin.length > 0) {
      const first = bin[0];
      const bytes = first instanceof Buffer ? new Uint8Array(first) : typeof first === 'string' ? Buffer.from(first, 'base64') : undefined;
      if (bytes) return GrpcStatus.decode(bytes);
    }
  } catch { /* ignore */ }
  return { code: (s.code ?? StatusCode.UNKNOWN) as number, message: s.details ?? '', details: [] };
}

// Inject parentId based on method name and sdk-provided profileParentId
function injectParentIdIfNeeded(methodName: string | undefined, profileParentId: string | undefined, req: any) {
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
