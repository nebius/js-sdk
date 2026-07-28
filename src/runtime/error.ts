import { Client, type ServiceError as GrpcServiceError, type Metadata } from '@grpc/grpc-js';

import { Status as GrpcStatus, Code as StatusCode } from '../api/google/rpc/index.js';
import {
  InternalError,
  ServiceError as NebiusServiceError,
} from '../api/nebius/common/v1/index.js';

import type { AnyShape } from '../runtime/protos/any.js';

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

/**
 * Decodes a Google RPC status from gRPC error metadata.
 *
 * Returns `undefined` when the error has no `grpc-status-details-bin` value or
 * when that value cannot be decoded.
 */
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

// Extract Nebius ServiceError messages from Status.details
function extractNebiusServiceErrors(status: GrpcStatus | undefined): NebiusServiceError[] {
  if (!status?.details?.length) return [];
  const out: NebiusServiceError[] = [];
  for (const d of status.details) {
    const anyMsg = d as unknown as AnyShape;
    const typeUrl = anyMsg?.typeUrl || '';
    if (
      typeUrl.endsWith('/nebius.common.v1.ServiceError') ||
      typeUrl === 'nebius.common.v1.ServiceError' ||
      typeUrl.includes('nebius.common.v1.ServiceError') ||
      typeUrl.endsWith('/nebius.common.error.v1alpha1.ServiceError') ||
      typeUrl.includes('nebius.common.error.v1alpha1.ServiceError')
    ) {
      try {
        out.push(NebiusServiceError.decode(anyMsg.value));
      } catch {
        // ignore decode failures
      }
    }
  }
  return out;
}

function codeName(code: number | undefined): string {
  if (code === undefined || code === null) return 'UNKNOWN';
  try {
    const inst = StatusCode.fromNumber(code);
    if (inst && typeof inst.name === 'string') return inst.name;
  } catch {
    // fallthrough
  }
  return String(code);
}

function toStrServiceError(err: NebiusServiceError): string {
  const parts: string[] = [];
  parts.push('Error ' + (err.code || ''));
  parts.push(' in service ' + (err.service || ''));
  const d = err.details;
  if (d && d.$case) {
    switch (d.$case) {
      case 'badRequest': {
        const items = (d.badRequest?.violations || [])
          .map((v) => `${v.field} - ${v.message};`)
          .join(' ');
        parts.push(` bad request, violations: ${items}`);
        break;
      }
      case 'badResourceState': {
        parts.push(
          ` bad resource ${d.badResourceState?.resourceId} state: ${d.badResourceState?.message}`,
        );
        break;
      }
      case 'resourceNotFound': {
        parts.push(` resource ${d.resourceNotFound?.resourceId} not found`);
        break;
      }
      case 'resourceAlreadyExists': {
        parts.push(` resource ${d.resourceAlreadyExists?.resourceId} already exists`);
        break;
      }
      case 'outOfRange': {
        parts.push(` out of range ${d.outOfRange?.limit}, requested ${d.outOfRange?.requested}`);
        break;
      }
      case 'permissionDenied': {
        parts.push(` permission denied for resource ${d.permissionDenied?.resourceId}`);
        break;
      }
      case 'resourceConflict': {
        parts.push(
          ` resource conflict for ${d.resourceConflict?.resourceId}: ${d.resourceConflict?.message}`,
        );
        break;
      }
      case 'operationAborted': {
        parts.push(
          ` operation ${d.operationAborted?.operationId} over resource ${d.operationAborted?.resourceId} aborted by newer operation ${d.operationAborted?.abortedByOperationId}`,
        );
        break;
      }
      case 'operationConflict': {
        parts.push(
          ` operation conflict: resource: ${d.operationConflict?.resourceId}, conflicting operation ID: ${d.operationConflict?.conflictingOperationId}`,
        );
        break;
      }
      case 'tooManyRequests': {
        parts.push(` too many requests: ${d.tooManyRequests?.violation}`);
        break;
      }
      case 'quotaFailure': {
        const items = (d.quotaFailure?.violations || [])
          .map((q) => `${q.quota} ${q.requested} of ${q.limit}: ${q.message};`)
          .join(' ');
        parts.push(` quota failure, violations: ${items}`);
        break;
      }
      case 'notEnoughResources': {
        const items = (d.notEnoughResources?.violations || [])
          .map((r) => `${r.resourceType} requested ${r.requested}: ${r.message};`)
          .join(' ');
        parts.push(` not enough resources: ${items}`);
        break;
      }
      case 'internalError': {
        parts.push(
          ` internal service error: request ID: ${d.internalError?.requestId} trace ID: ${d.internalError?.traceId}`,
        );
        break;
      }
      default: {
        // Must not be used, but is added for the cases of forward
        // compatibility, in case new error types are added in the future,
        // and the API update is lagging.
        const raw = d as Record<string, unknown> & { $case: string };
        parts.push(` ${raw.$case}: ${JSON.stringify(raw[raw.$case])}`);
        break;
      }
    }
  }
  return parts.join('');
}

/**
 * Reports a failed Nebius gRPC request with structured diagnostics.
 *
 * SDK unary requests wrap gRPC service errors with this class. Use
 * {@link code} for general control flow. Use {@link serviceErrors} to inspect
 * Nebius-specific causes such as field violations, quota failures, and
 * resource conflicts. Include {@link requestId} and {@link traceId} when you
 * contact support.
 *
 * @example
 * ```ts
 * import { SDK } from '@nebius/js-sdk';
 * import {
 *   BucketService,
 *   GetBucketRequest,
 * } from '@nebius/js-sdk/api/nebius/storage/v1/index';
 * import { NebiusGrpcError } from '@nebius/js-sdk/runtime/error';
 * import { EnvBearer } from '@nebius/js-sdk/runtime/token/static';
 *
 * const sdk = new SDK({
 *   credentials: new EnvBearer('NEBIUS_IAM_TOKEN'),
 *   userAgentPrefix: 'example-application/1.0',
 * });
 * try {
 *   const buckets = new BucketService(sdk);
 *   const request = GetBucketRequest.create({ id: 'bucket-id' });
 *   await buckets.get(request).result;
 * } catch (error) {
 *   if (error instanceof NebiusGrpcError) {
 *     console.error('gRPC code', error.code);
 *     console.error('request ID', error.requestId);
 *     for (const serviceError of error.serviceErrors) {
 *       console.error(serviceError.code, serviceError.details);
 *     }
 *   }
 *   throw error;
 * } finally {
 *   await sdk.close();
 * }
 * ```
 */
export class NebiusGrpcError extends Error implements GrpcServiceError {
  /** Contains the numeric gRPC status code. */
  code: number;
  /** Contains the plain gRPC detail text. */
  details: string;
  /** Contains response metadata from the failed call. */
  metadata: Metadata;
  /** Contains the server request ID, or an empty string when unavailable. */
  requestId: string;
  /** Contains the server trace ID, or an empty string when unavailable. */
  traceId: string;
  /** Contains decoded Nebius service-error details. */
  serviceErrors: NebiusServiceError[];
  /** Contains the decoded Google RPC status when available. */
  status?: GrpcStatus;

  /**
   * Creates a Nebius error from a gRPC error and optional decoded values.
   *
   * SDK request handling normally calls this constructor.
   */
  constructor(
    base: GrpcServiceError,
    status?: GrpcStatus,
    serviceErrors: NebiusServiceError[] = [],
    requestId?: string,
    traceId?: string,
  ) {
    const msg = NebiusGrpcError.buildMessage(base, status, serviceErrors, requestId, traceId);
    super(msg);
    this.name = 'NebiusGrpcError';
    this.code = base.code as number;
    this.details = base.details ?? status?.message ?? base.message ?? '';
    this.metadata = base.metadata;
    this.requestId = requestId || '';
    this.traceId = traceId || '';
    this.serviceErrors = serviceErrors;
    this.status = status;
  }

  /**
   * Builds the human-readable error message used by the constructor.
   *
   * The message includes status text, correlation IDs, and summaries of known
   * Nebius service errors. Use structured properties when program logic needs
   * these values.
   */
  static buildMessage(
    base: GrpcServiceError,
    status?: GrpcStatus,
    serviceErrors: NebiusServiceError[] = [],
    requestId?: string,
    traceId?: string,
  ): string {
    const parts: string[] = [];
    parts.push(codeName(base.code as number));
    const msg = (status?.message || base.details || base.message || '').trim();
    if (msg) {
      parts.push(': ' + msg);
    }
    if (requestId) {
      parts.push('; request_id: ' + requestId);
    }
    if (traceId) {
      parts.push('; trace_id: ' + traceId);
    }
    if (serviceErrors.length > 0) {
      parts.push('; Caused by error' + (serviceErrors.length > 1 ? 's' : '') + ':');
      let inc = 0;
      for (const se of serviceErrors) {
        inc += 1;
        parts.push(` ${inc}. ` + toStrServiceError(se));
      }
    }
    const totalDetails = status?.details?.length ?? 0;
    const otherDetails = Math.max(0, totalDetails - serviceErrors.length);
    if (otherDetails > 0) {
      parts.push(' (additional details not shown)');
    }
    return parts.join('');
  }

  /** Converts the value to string. */
  toString(): string {
    return this.message;
  }
}

/*
 * TODO: Replace this global prototype patch with an SDK or request interceptor.
 * The current patch installs once and wraps unary gRPC errors for all clients.
 */
(function installUnaryInterceptor() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const proto: any = (Client as any).prototype;
  if (proto.__nebiusUnaryPatched) return;
  const original = proto.makeUnaryRequest;
  if (typeof original !== 'function') return;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  proto.makeUnaryRequest = function patchedMakeUnaryRequest(this: any, ...args: any[]) {
    // Find the callback (last arg)
    const cbIndex = args.length - 1;
    const cb = args[cbIndex];
    if (typeof cb === 'function') {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      args[cbIndex] = (err: GrpcServiceError | null, response: any, ...rest: any[]) => {
        if (err) {
          try {
            const status = decodeStatusFromError(err);
            const serviceErrors = extractNebiusServiceErrors(status);
            const md = err.metadata;
            const reqId =
              mdGetString(md, 'x-request-id') ||
              (
                serviceErrors.find((se) => se.details?.$case === 'internalError')?.details as {
                  internalError: InternalError;
                }
              )?.internalError?.requestId ||
              '';
            const traceId =
              mdGetString(md, 'x-trace-id') ||
              (
                serviceErrors.find((se) => se.details?.$case === 'internalError')?.details as {
                  internalError: InternalError;
                }
              )?.internalError?.traceId ||
              '';
            const wrapped = new NebiusGrpcError(err, status, serviceErrors, reqId, traceId);
            return cb(wrapped, response, ...rest);
          } catch {
            // fall through on failure to wrap
          }
        }
        return cb(err, response, ...rest);
      };
    }
    return original.apply(this, args);
  };
  proto.__nebiusUnaryPatched = true;
})();

export { decodeStatusFromError, NebiusServiceError };
