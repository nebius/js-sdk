import type { Interceptor, InterceptingCall, Listener, Metadata, CallOptions } from '@grpc/grpc-js';
import { Metadata as GrpcMetadata } from '@grpc/grpc-js';
import type { Provider } from './provider';
import { Code } from '../../generated/google/rpc/code';

function timeLeftMs(deadline: CallOptions['deadline']): number | undefined {
  if (!deadline) return undefined;
  const now = Date.now();
  if (deadline instanceof Date) return Math.max(0, deadline.getTime() - now);
  if (typeof deadline === 'number') return Math.max(0, deadline - now);
  return undefined;
}

// Interceptor that authenticates with a retry loop before starting the call.
export function createAuthorizationInterceptor(provider: Provider): Interceptor {
  return (options, nextCall) => {
    const auth = provider.authenticator();

    const requester = {
      start(metadata: Metadata, listener: Listener, next: (metadata: Metadata, listener: Listener) => void) {
        const disable = !!options?.authorizationDisable;
        const authOptions = options?.authorizationOptions;

        if (disable) {
          return next(metadata, listener);
        }

        const wrapped: Listener = {
          onReceiveMetadata: (md, nextMd) => nextMd(md),
          onReceiveMessage: (msg, nextMsg) => nextMsg(msg),
          onReceiveStatus: (status, nextStatus) => nextStatus(status),
        };

        const startTs = Date.now();
        const deadline = options?.deadline;
        let attempt = 0;
        let patchedMd: Metadata | undefined;

        const doAuthLoop = async (): Promise<boolean> => {
          // Loop until authenticated or timeout
          // If canRetry is not provided, single attempt
          // Always start from the original metadata to avoid duplicating headers between attempts
          while (true) {
            attempt += 1;
            const left = timeLeftMs(deadline);
            const timeoutMs = left === undefined ? undefined : Math.max(0, left);
            // Clone original metadata so we don't mutate it and to prevent header duplication on retries
            const mdAttempt = (metadata as GrpcMetadata).clone();
            try {
              await auth.authenticate(mdAttempt, timeoutMs, authOptions);
              patchedMd = mdAttempt;
              return true; // success
            } catch (e) {
              const canRetry = typeof (auth as any).canRetry === 'function' ? (auth as any).canRetry(e, authOptions) : false;
              const stillLeft = timeLeftMs(deadline);
              if (!canRetry || (stillLeft !== undefined && stillLeft <= 0)) {
                // Fail early with UNAUTHENTICATED-like status
                const st: any = {
                  code: Code.UNAUTHENTICATED,
                  details: (e && (e as any).message) || 'authentication failed',
                  metadata: new GrpcMetadata(),
                };
                // Send status to listener and do not start the call
                if (wrapped.onReceiveStatus) wrapped.onReceiveStatus(st, () => undefined);
                return false;
              }
              // retry, continue loop
            }
          }
        };

        Promise.resolve()
          .then(doAuthLoop)
          .then((ok) => {
            // If doAuthLoop finished successfully, start the call with patched metadata
            if (ok) {
              next(patchedMd ?? metadata, wrapped);
            }
          })
          .catch((e) => {
            const st: any = {
                code: Code.UNAUTHENTICATED,
                details: (e && (e as any).message) || 'authentication failed',
                metadata: new GrpcMetadata()
            };
            wrapped.onReceiveStatus && wrapped.onReceiveStatus(st, () => undefined);
          });
      },
      sendMessage(message: unknown, next: (message: unknown) => void) {
        next(message);
      },
      halfClose(next: () => void) {
        next();
      },
      cancel(next: () => void) {
        next();
      },
    } as const;

    return new (require('@grpc/grpc-js').InterceptingCall as typeof InterceptingCall)(
      nextCall(options),
      requester as any,
    );
  };
}
