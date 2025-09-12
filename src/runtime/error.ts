import type { ServiceError as GrpcServiceError, Metadata } from '@grpc/grpc-js';
import { Client } from '@grpc/grpc-js';

import { Status as GrpcStatus, Code as StatusCode } from '../generated/google/rpc/index';
import {
  InternalError,
  ServiceError as NebiusServiceError,
} from '../generated/nebius/common/v1/index';
import type { AnyShape } from '../runtime/protos/any';

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
    }
  }
  return parts.join('');
}

export class NebiusGrpcError extends Error implements GrpcServiceError {
  code: number;
  details: string;
  metadata: Metadata;
  requestId: string;
  traceId: string;
  serviceErrors: NebiusServiceError[];
  status?: GrpcStatus;

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

  toString(): string {
    return this.message;
  }
}

// TODO: change the interceptor to a proper one, set by sdk/request
// Install global unary interceptor once
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
